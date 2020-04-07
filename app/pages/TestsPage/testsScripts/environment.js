const getDeviceGPU = () => {
  try {
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    if (gl) {
      const debugInfo = gl.getExtension('WEBGL_debug_renderer_info')
      const vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL)
      const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
      return `${renderer} - ${vendor}`
    }
    return undefined
  } catch (e) {
    return undefined
  }
}

const getBrowser = () => {
  const ua = navigator.userAgent
  let tem
  let M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []
  if (/trident/i.test(M[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(ua) || []
    return {
      name: 'IE',
      version: (tem[1] || ''),
    }
  }
  if (M[1] === 'Chrome') {
    tem = ua.match(/\bOPR|Edge\/(\d+)/)
    if (tem != null) {
      return {
        name: 'Opera',
        version: tem[1],
      }
    }
  }
  M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?']
  tem = ua.match(/version\/(\d+)/i)
  if (tem !== null) {
    M.splice(1,1,tem[1])
  }

  return {
    name: M[0],
    version: M[1],
  }
}

const getOs = () => {
  let name = ''
  if (navigator.appVersion.indexOf('Win') !== -1) {
    name = 'Windows'
  }
  if (navigator.appVersion.indexOf('Mac') !== -1) {
    name = 'MacOS'
  }
  if (navigator.appVersion.indexOf('X11') !== -1) {
    name = 'UNIX'
  }
  if (navigator.appVersion.indexOf('Linux') !== -1) {
    name = 'Linux'
  }

  return name
}

const getScreen = () => {
  const { screen } = window
  if (screen) {
    return {
      width: screen.width,
      height: screen.height,
      maxWindowAvailableWidth: screen.availWidth,
      maxWindowAvailableHeight: screen.availHeight,
      colorDepth: screen.colorDepth,
    }
  }
  return {}
}

export default async function() {
  await ((ms) => new Promise(r => setTimeout(r, ms)))(Math.random() * 1000 + 2000)

  return {
    os: getOs(),
    browser: getBrowser(),
    language: navigator.language,
    languages: navigator.languages || [],
    cookieEnabled: navigator.cookieEnabled,
    userAgent: navigator.userAgent,
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
    screen: getScreen(),
    devicePixelRatio: window.devicePixelRatio,
    performance: {
      memory: navigator.deviceMemory,
      threads: navigator.hardwareConcurrency,
      gpu: getDeviceGPU(),
    },
    connection: {
      effectiveType: navigator.connection.effectiveType,
      rtt: navigator.connection.rtt,
      downlink: navigator.connection.downlink,
    },
  }
}
