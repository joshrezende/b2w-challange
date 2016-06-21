import React from 'react';
import Tweet from './Tweet';

export default class Timeline extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    let url = 'http://ubuntu:8080/api/stream';

    this._makeRequest(url);
  }

  _makeRequest(url) {
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.readyState === xmlhttp.DONE) {
        if (xmlhttp.status === 200) {
          this._handleResponse(xmlhttp.responseText);
        }
      }
    }

    xmlhttp.open('GET', url, true);
    xmlhttp.send();
  }

  _handleResponse(r) {
    let data = JSON.parse(r);

    this.setState({
      data: data
    });
  }

  render(){
    var tweets = this.state.data.map(function(data, index){
      return <Tweet data={data} key={data.id}></Tweet>;
    });
    return (
      <div className="timeline">
        <div className="tweets-list">
          {tweets}
        </div>
      </div>
    );
  }
}
