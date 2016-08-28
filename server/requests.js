const Twitter = require('twitter');
const key = require('./apiKeys.js')
const ig = require('instagram-node').instagram();

const client = {
  twitter: new Twitter({
    consumer_key: key.twitter.TWITTER_CONSUMER_KEY,
    consumer_secret: key.twitter.TWITTER_CONSUMER_SECRET,
    access_token_key: key.twitter.TWITTER_ACCESS_TOKEN,
    access_token_secret: key.twitter.TWITTER_ACCESS_TOKEN_SECRET
  }),

  instagram: () => {
    api.use({
      client_id: key.instagram.ClientID,
      client_secret: key.instagram.ClientSecret
    });
  },

  facebook: {

  },

  youtube: {

  }
};

module.exports =  {
  twitterGET: () => {
    const params = {screen_name: 'nodejs'};
    client.twitter.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {
        console.log(tweets);
      }
    });
  },

  instagramGET: () => {

  },

  facebookGET: () => {

  },

  youtubeGET: () => {

  }
}
