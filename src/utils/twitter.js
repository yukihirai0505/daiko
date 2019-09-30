import twitter from 'twitter'

const {
  TWITTER_CONSUMER_KEY,
  TWITTER_SECRET,
  TWITTER_ACCESS_TOKEN,
  TWITTER_USER_SECRET,
} = process.env

const client = new twitter({
  consumer_key: TWITTER_CONSUMER_KEY,
  consumer_secret: TWITTER_SECRET,
  access_token_key: TWITTER_ACCESS_TOKEN,
  access_token_secret: TWITTER_USER_SECRET,
})

export const getTwitterUserInfo = async userId => {
  return client.get('users/show.json', {
    user_id: userId,
  })
}
