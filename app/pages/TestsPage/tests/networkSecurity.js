const getFetchPromise = async(url) => {
  try {
    const response = await fetch(url)
    if (response.ok) {
      return [url, {
        status: 'success',
        err: false,
      }]
    } 
    return [url, {
      status: 'error',
      err: `HTTP Status: ${response.status}`,
    }]
    
  } catch(err) {
    return [url, {
      status: 'error',
      err,
    }]
  }
}

export default async function() {
  const urlsToTest = [
    'https://s3-eu-west-1.amazonaws.com/pitchy-v3/assets/icons/icone_atelier.png',
    'https://pitchy-v3.s3-eu-west-1.amazonaws.com/assets/icons/icone_atelier.png',
    'https://cdn.mxpnl.com/',
    'https://api.mixpanel.com/',
    'https://pitchy-support.zendesk.com/',
  ]

  const results = await Promise.all(
    urlsToTest.map(getFetchPromise)
  )

  return Object.fromEntries(results)
}
