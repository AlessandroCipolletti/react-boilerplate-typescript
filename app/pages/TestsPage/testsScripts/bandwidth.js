import ping from 'web-pingjs'

const getDownloadSpeed = async() => {
  const FastSpeedtest = require('fast-speedtest-api') // eslint-disable-line

  const speedtest = new FastSpeedtest({
    token: 'YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm', // required
    verbose: false, // default: false
    timeout: 2 * 60 * 1000, // default: 5000
    https: true, // default: true
    urlCount: 5, // default: 5
    bufferSize: 8, // default: 8
    unit: FastSpeedtest.UNITS.Mbps, // default: Bps
  })

  try {
    return await speedtest.getSpeed()
  } catch(e) {
    return false
  }
}

const getPing = async() => {
  const url = 'https://8.8.8.8'

  try {
    const results = [
      await ping(url),
      await ping(url),
      await ping(url),
      await ping(url),
      await ping(url),
    ]
    const average = (results.reduce((a, b) => a + b, 0) * 0.7) / results.length
    return Math.round(average * 100) / 100
  } catch(e) {
    return false
  }
}

export default async function() {
  return {
    download: await getDownloadSpeed(),
    ping: await getPing(),
    upload: false,
  }
}
