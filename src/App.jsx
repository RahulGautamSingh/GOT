import { useEffect, useState } from "react";
import Card from "./Card";
function App() {
  let [familyTree, setFamilyTree] = useState([]);
  let [currFamily, setCurrFamily] = useState("");
  let [loading, setLoading] = useState(true);

  function displayMembers(familyName) {
    console.log(familyTree, familyName);
    if (familyName === "") {
      let cardsArr = [];
      for (let index = 0; index < familyTree.length; index++) {
        cardsArr = cardsArr.concat(
          familyTree[index].people.map((member) => {
            return (
              <Card
                source={member.image}
                name={member.name}
                details={member.description}
              />
            );
          })
        );
      }
      console.log(cardsArr);
      return cardsArr;
    } else {
      let cardsArr = [];
      familyTree.forEach((elem) => {
        if (!elem.name.localeCompare(familyName)) {
          cardsArr = cardsArr.concat(
            elem.people.map((member) => {
              return (
                <Card
                  source={member.image}
                  name={member.name}
                  details={member.description}
                />
              );
            })
          );
        } else return <></>;
      });
      return cardsArr;
    }
  }
  async function fetchData() {
    let response = await fetch(
      "https://raw.githubusercontent.com/nnnkit/json-data-collections/master/got-houses.json"
    );
    let data = await response.json();
    setFamilyTree(data.houses);
    setLoading(false);
    // console.log(familyTree)
  }

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(familyTree);
  return (
    <div className="container">
      <h1>People Of GOT</h1>
      <div className="families">
        {familyTree.map((elem, index) => {
          return (
            <button key={index} onClick={() => setCurrFamily(elem.name)} style={{border:currFamily===elem.name?"none":"1px solid black"}}>
              {elem.name}
            </button>
          );
        })}
      </div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="members">{displayMembers(currFamily)}</div>
      )}
    </div>
  );
}

export default App;
