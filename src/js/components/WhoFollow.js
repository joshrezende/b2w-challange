import React from 'react';

export default class WhoFollow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    let url = 'http://ubuntu:8080/api/who-follow';

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

  render() {
    var suggestions = this.state.data.filter(function(item, index){
      return index < 3;
    }).map(function(user, index){
      return (
        <li class="item" key={index}>
          <img src={user.profile_image_url} />
          <span className="user-name">{user.name}</span>
          <span className="screen-name">@{user.screen_name}</span>
        </li>
      )
    });

    return (
      <div className="who-follow-box">
        <h4 className="box-title">Who to follow</h4>
          <ul className="list">
            {suggestions}
          </ul>
      </div>
    )
  }
}
