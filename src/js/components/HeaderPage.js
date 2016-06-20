import React from 'react';

export default class HeaderPage extends React.Component {
  _furfles() {
    if(this.props.userInfo.profile_image_url != undefined){
      return this.props.userInfo.profile_image_url.split('_normal').join('');
    } else {
      return '';
    }
  }

  render(){
    return (
      <div className="header-page">
        <div className="cover-profile-pic">
          <div className="cover-container">
            <img src={this.props.userInfo.profile_banner_url + '/1500x500'} />
          </div>
          <div className="wrap">
            <div className="profile-pic">
              {/*<img src={this.props.userInfo.profile_image_url} />*/}
              <img src={this._furfles()} />
            </div>
          </div>
        </div>
        <div className="header-profile-info">
          <div className="wrap">
            <div className="profile-mini"></div>
            <div className="infos-misc">
              <span>
                tweets
                {this.props.userInfo.statuses_count}
              </span>
              <span>
                following
                {this.props.userInfo.friends_count}
              </span>
              <span>
                followers
                {this.props.userInfo.followers_count}
              </span>
              <span>
                likes
                {this.props.userInfo.favourites_count}
              </span>
              <span>
                lists
                {this.props.userInfo.listed_count}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
