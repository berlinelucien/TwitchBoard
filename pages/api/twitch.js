// This is where all the logic for your Twitch API will live!
export default async (req, res) => {
  try {
    if (req.method === 'POST') {
      const { data } = req.body
      res.status(200).json({ data })
    }
  } catch (error) {
      console.warn(error.message)
      res.status(500).send()
    }
  }



// Actions
const getTwitchChannel = async channelName => {
  console.log('SEARCHING FOR TWITCH CHANNEL...')
  if (channelName) {
    //Get access accessToken
    const accessToken = await getTwitchAccessToken ()

    if (accessToken) {
      //make query request
      const response = await fetch(`${HOST_NAME}/search/channels?query=${channelName}`,{
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Client-Id": process.env.TWITCH_CLIENT_ID
        }
      })
      const response = await response.json()

      if (json.data) {
        const { data } = json

        const lowercaseChannelName = channelName.toLowerCase()

        const foundChannel = data.find(channel => {
          const lowercaseDisplayName = channel.display_name.toLowerCase()

          return lowercaseChannelName === lowercaseDisplayName})

          return foundChannel
      }
    }

    throw new Error("Twitch accessToekn was undefined.")
  }

  throw new Error("No channelName provided.")
}
