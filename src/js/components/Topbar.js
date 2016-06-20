import React from 'react';

export default class Topbar extends React.Component {
  render() {
    return (
      <div className="topbar">
        <div className="wrap">
          <h1 className="logo">Twitter</h1>
          <ul className="topbar-menu">
            <li className="item">
              <a href="#">Home</a>
            </li>
            <li className="item">
              <a href="#">Moments</a>
            </li>
            <li className="item">
              <a href="#">Notifications</a>
            </li>
            <li className="item">
              <a href="#">Messages</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
