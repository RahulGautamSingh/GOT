import React from "react"
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.headline = "HEADLINE";
    this.subtext = "SUBTEXT";
    this.discount = "30% OFF";
  }

  render()
  {
      return(
          <div className="container">
              <div className="counter-box">
                  <h3>{this.headline}</h3>
                  <h2>{this.discount}</h2>
                    <h3>{this.subtext}</h3>
              </div>
          </div>
      )
  }
}
