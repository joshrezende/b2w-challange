import Twitter from 'twitter';

var client = new Twitter({
  consumer_key: 'XmSFZJxfZ0TVStwHnbT0Zg',
  consumer_secret: '0YKFvplc836UXG316M6hd86mff5Pp01mbZvPTzIiY',
  access_token_key: '14172217-G8kdnQ7cFAYeGZ0oUIBPgIyiK0p0lXpeGiz28TdYq',
  access_token_secret: 'yrSMOWtGb9QYzGY3I8SFbxk7AwRJKIabFwUam6Ihq9w2s'
});

var params = {screen_name: 'joshrezende'};
var furfles = client.get('statuses/user_timeline', params, function(error, tweets, response){
  if (!error) {
    console.log(tweets);
  }
});

export default furfles;
