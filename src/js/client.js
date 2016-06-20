require('../styles/timeline.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import Topbar from './components/Topbar';
import HeaderPage from './components/HeaderPage';
import Timeline from './components/Timeline';
import WhoFollow from './components/WhoFollow';
import TrendsTopics from './components/TrendsTopics';

class Layout extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      userData: []
    };
  }

  componentDidMount() {
    let url = 'http://ubuntu:8080/api/user';

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
      userData: data
    });
  }

  render(){
    return (
      <div>
        <Topbar></Topbar>
        <HeaderPage userInfo={this.state.userData}></HeaderPage>
        <div className="main-container">
          <div className="wrap">
            <aside className="sidebar-left">
              <div className="infos-box">
                <p className="user-name">{this.state.userData.name}</p>
                <p className="scren-name">{this.state.userData.screen_name}</p>
                <p className="user-bio">{this.state.userData.description}</p>
                <p className="user-location">{this.state.userData.location}</p>
                <p className="user-joined">{this.state.userData.created_at}</p>
              </div>
              <div className="followers-box"></div>
              <div className="media-box"></div>
            </aside>
            <div className="content">
              <Timeline></Timeline>
              <div className="sidebar-right">
                <WhoFollow/>
                <TrendsTopics/>
                <div className="sidefooter-box"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const element = document.getElementById('app');

ReactDOM.render(<Layout />, element);
