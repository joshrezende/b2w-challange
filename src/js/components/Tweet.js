import React from 'react';

export default class Tweet extends React.Component {
  render() {
    return (
      <div className="tweet-item" key={this.props.data.id}>
        <div className="tweet-header">
          <a href="#">
            <span className="full-name">{this.props.data.user.name}</span>
            <span className="screen-name">@{this.props.data.user.screen_name}</span>
          </a>
          <a href="#">
            <span className="date">{this.props.data.created_at}</span>
          </a>
          <img className="avatar" src={this.props.data.user.profile_image_url} />
        </div>
        <p className="tweet-text">{this.props.data.text}</p>
        <div className="action-buttons-container">
          <a href="">reply</a>
          <a href="">retweet</a>
          <a href="">fav</a>
          <a href="">misc</a>
        </div>
      </div>
    )
  }
}
