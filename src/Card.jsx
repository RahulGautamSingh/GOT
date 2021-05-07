export default function Card(props) {
    function makeArr(str){
        let arr = [];
        let res = ""
        for(let index=0;index<str.length;index++)
        {
                if(str[index]==="-" ) {arr.push(res);res="";}
            else res+=str[index];
        }
        arr.push(res);
        return arr
    }
  return (
    <div className="card">
      <div className="avatar">
        <img src={props.source} alt="" />
      </div>
      <div className="personal-info">
        <p className="name">{props.name}</p>

        <ul>{
       makeArr(props.details).map(elem=>{
        return <li>{elem}</li>
       })
      
        }</ul>
      </div>
    </div>
  );
}
