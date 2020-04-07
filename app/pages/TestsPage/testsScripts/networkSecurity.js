const getFetchPromise = async([key, url]) => {
  try {
    const response = await fetch(url)
    if (response.ok) {
      return [key, {
        url,
        status: 'success',
        err: false,
      }]
    }
    return [key, {
      url,
      status: 'error',
      err: `HTTP Status: ${response.status}`,
    }]
  } catch(err) {
    return [key, {
      url,
      status: 'error',
      err,
    }]
  }
}

export default async function() {
  await ((ms) => new Promise(r => setTimeout(r, ms)))(Math.random() * 1000 + 2000)

  const urlsToTest = {
    'app.pitchy.fr': 'https://app.pitchy.fr/login',
    'prod_atelier_js_boundle': 'https://s3-eu-west-1.amazonaws.com/pitchy-v3/assets/site/js/atelier.c182e632051168260dab.min.js',
    's3-eu-west-1.amazonaws.com/pitchy-v3': 'https://s3-eu-west-1.amazonaws.com/pitchy-v3/assets/icons/icone_atelier.png',
    'pitchy-v3.s3-eu-west-1.amazonaws.com': 'https://pitchy-v3.s3-eu-west-1.amazonaws.com/assets/icons/icone_atelier.png',
    'cdn.mxpnl.com': 'https://cdn.mxpnl.com/',
    'api.mixpanel.com': 'https://api.mixpanel.com/',
    'pitchy-support.zendesk.com': 'https://pitchy-support.zendesk.com/',
  }

  const results = await Promise.all(
    Object.entries(urlsToTest).map(getFetchPromise)
  )

  return Object.fromEntries(results)
}
