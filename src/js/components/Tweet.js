import React from 'react';

export default class Tweet extends React.Component {
  render() {
    return (
      <div className="tweet-item" key={this.props.data.id}>
        <div className="tweet-header">
          <a href="#" className="profile-link">
            <span className="full-name">{this.props.data.user.name}</span> &nbsp;
            <span className="screen-name">@{this.props.data.user.screen_name}</span>
          </a>
          <a href="#">
            <span className="date">{this.props.data.created_at}</span>
          </a>
          <img className="avatar" src={this.props.data.user.profile_image_url} />
        </div>
        <p className="tweet-text">{this.props.data.text}</p>
        <div className="action-buttons-container">
          <div className="btn-action action-reply">
            <button className="btn" type="button">
              <div className="icon-container">
                <span className="icon icon-reply"></span>
                <span className="icon-tooltip">Reply</span>
              </div>
            </button>
          </div>
          <div className="btn-action action-retweet">
            <button className="btn" type="button">
              <div className="icon-container">
                <span className="icon icon-retweet"></span>
                <span className="icon-tooltip">Retweet</span>
              </div>
            </button>
          </div>
          <div className="btn-action action-like">
            <button className="btn" type="button">
              <div className="icon-container">
                <span className="icon icon-heart"></span>
                <span className="icon-tooltip">Like</span>
              </div>
            </button>
          </div>
          <div className="btn-action action-misc-menu">
            <button className="btn" type="button">
              <div className="icon-container">
                <span className="icon icon-3dots"></span>
                <span className="icon-tooltip">Misc</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    )
  }
}
