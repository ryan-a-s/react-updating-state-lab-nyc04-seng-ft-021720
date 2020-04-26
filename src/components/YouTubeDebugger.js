// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
    this.handleClickBitrate = this.handleClickBitrate.bind(this);
    this.handleClickResolution = this.handleClickResolution.bind(this);
  }

  handleClickBitrate() {
    this.setState({ settings: {
      ...this.state.settings,
      bitrate: 12
    } })
  };

  handleClickResolution() {
    this.setState(prevState => ({
      ...prevState,
      settings: {
        ...prevState.settings,
        video: {
          ...prevState.settings.video,
          resolution: '720p'
        }
      }
    }))
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClickBitrate} className="bitrate" value={this.state.settings["bitrate"]}>{this.state.settings["bitrate"]}</button>

        <button onClick={this.handleClickResolution} className="resolution" value={this.state.settings["video"]["resolution"]}>{this.state.settings["video"]["resolution"]}</button>
      </div>
    )
  }
};

export default YouTubeDebugger;