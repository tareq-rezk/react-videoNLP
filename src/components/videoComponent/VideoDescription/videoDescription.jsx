import React, { Component } from "react";
import "./videoDescription.css";
import axios from "axios";

class Description extends Component {
  state = {
    title: "click option to show",
    transShow: false,
    sumShow: false,
    translatShow: false,
    descrip: [],
    KeywordShow: false,
    myKeywords: []
  };

  componentDidMount() {
    axios
      .get("http://api.linkpreview.net/?key=123456&q=https://www.google.com")
      .then(res => {
        this.setState({ descrip: res.data });
      });
    return axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      this.setState({ myKeywords: res.data });
    });
  }

  showTextHandler = name => {
    if (name === "transcript") {
      this.setState({
        transShow: !false,
        sumShow: false,
        translatShow: false,
        KeywordShow: false,
        title: "transcript"
      });
    } else if (name === "summary") {
      this.setState({
        transShow: false,
        sumShow: !false,
        translatShow: false,
        KeywordShow: false,
        title: "summary"
      });
    } else if (name === "translation") {
      this.setState({
        transShow: false,
        sumShow: false,
        translatShow: !false,
        KeywordShow: false,
        title: "translation"
      });
    } else if (name === "keywords") {
      this.setState({
        transShow: false,
        sumShow: false,
        translatShow: false,
        KeywordShow: !false,
        title: "Special Keywords"
      });
    } else {
      this.setState({ showComponent: false });
    }
  };

  render() {
    return (
      <div className="col-lg-5">
        <h2>{this.state.title}</h2>
        <div className="border border-info divStyle">
          <div className="devTextContainer">
            {this.state.transShow === false ? null : (
              <div id="transcript" className="div-text">
                <p>names</p>
              </div>
            )}

            {this.state.sumShow === false ? null : (
              <div id="summary" className="div-text">
                <p>summary</p>
              </div>
            )}

            {this.state.translatShow === false ? null : (
              <div id="translation" className="div-text">
                <p>{this.state.descrip.description}</p>
              </div>
            )}
            {this.state.KeywordShow === false ? null : (
              <div id="keywords" className="div-text">
                {this.state.myKeywords.map(item => {
                  return (
                    <div key={item.id}>
                      <span>
                        <b>{item.word} : </b>
                      </span>
                      <span className="youTubeLink">
                        <a href={item.youTubeLink}>youTube </a>
                      </span>
                      <span> </span>
                      <span className="wikipediaLink">
                        <a href={item.wikipediaLink}>wikipedia</a>
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="btns-container">
            <button
              className="btn btn-info"
              onClick={() => this.showTextHandler("transcript")}
            >
              trascript
            </button>
            <button
              className="btn btn-info"
              onClick={() => this.showTextHandler("summary")}
            >
              summary
            </button>

            <select
              className="btn btn-info"
              onClick={() => this.showTextHandler("translation")}
            >
              <option value="Arabic">Arabic</option>
              <option value="English">English</option>
              <option value="spanish">spanish</option>
              <option value="France">France</option>
            </select>
            <button
              className="btn btn-info"
              onClick={() => this.showTextHandler("keywords")}
            >
              Keywords
            </button>
            <button
              className="btn btn-info"
              onClick={() => this.showTextHandler("Egyptian")}
            >
              <abbr title="Egyptian Learning Style">ELS</abbr>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Description;
