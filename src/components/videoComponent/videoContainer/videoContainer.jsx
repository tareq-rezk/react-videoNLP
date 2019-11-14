import React, { Component } from "react";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import theVideo from "./1. Module Introduction.mp4";
import theSrt1 from "./1. Module Introduction.srt";
import theSrt2 from "./1. Module Introduction.vtt";
import "./videoContainer.css";
class VideoCont extends Component {
  state = {
    videoTitle: "Learn React Begginers"
  };

  render() {
    return (
      <div className="videoContent col-lg-7" key="jsksn">
        <h2 key="jsksnd">Video Title : {this.state.videoTitle}</h2>
        <Video
          poster="https://upload.wikimedia.org/wikipedia/commons/e/e8/Elephants_Dream_s5_both.jpg"
          key="jsksds34nd"
        >
          <source src={theVideo} type="video/mp4" />
          <track
            label="English"
            kind="subtitles"
            srcLang="ar"
            src={theSrt2}
            default
            key="1ndslfhf"
          />
          <track
            label="Arabic"
            kind="subtitles"
            srcLang="ar"
            src={theSrt1}
            key="1ndslfhdmsf"
          />
        </Video>
      </div>
    );
  }
}

export default VideoCont;
