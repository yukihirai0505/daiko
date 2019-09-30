import fetch from 'isomorphic-unfetch'

const isProd = process.env.NODE_ENV === 'production'
export const serverUrl = isProd
  ? `https://daiko.yukihirai0505.now.sh`
  : 'http://localhost:3000'

export const createNewDaiko = async ({ title, body, place, idToken }) => {
  const response = await fetch(`${serverUrl}/api/daiko/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${idToken}`,
    },
    body: JSON.stringify({
      title,
      body,
      place,
    }),
  })
  const { id } = await response.json()
  return id
}

export const getDaikoById = async ({ id }) => {
  const response = await fetch(`${serverUrl}/api/daiko/show?id=${id}`)
  const {
    uid,
    twitterScreenName,
    title,
    body,
    place,
    imageUrl,
  } = await response.json()
  return {
    uid,
    twitterScreenName,
    title,
    body,
    place,
    imageUrl,
  }
}
