import React from "react";
import ReactDOM from "react-dom";

class Photo extends React.Component {

  render() {
    return (
      <div className='photo'>
        <img src={this.props.src} />
        <span>{this.props.caption}</span>
      </div>
    )
  }
}

React.render(<Photo src='http://tinyurl.com/lkevsb9' caption='Hong Kong!' />, document.getElementById('app'));