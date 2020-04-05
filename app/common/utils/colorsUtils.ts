interface rgba {
  r: number
  g: number
  b: number
  a: number
}

interface rgb {
  r: number
  g: number
  b: number
}

export function parseColorRgbStringToRgba(rgbaStringColor: string): rgba {
  const colors = rgbaStringColor.substring(rgbaStringColor.indexOf('(') + 1).replace(')', '').replace(' ', '').split(',')
  return {
    r: parseInt(colors[0], 10),
    g: parseInt(colors[1], 10),
    b: parseInt(colors[2], 10),
    a: colors[3] ? parseFloat(colors[3]) : 1,
  }
}

export function parseColorHexToRgb(hex: string): rgb {
  if (hex[0] === '#') {
    hex = hex.substr(1, 6)
  }

  return {
    r: parseInt(hex.substring(0, 2), 16),
    g: parseInt(hex.substring(2, 4), 16),
    b: parseInt(hex.substring(4, 6), 16),
  }
}

export function parseColorRgbToHex(r: number, g: number, b: number): string {
  const hex = ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
  return `#${hex}`
}

export function parseColorHexToRgbaString(colorHex: string, alpha: number = 1): string {
  const r = parseInt(colorHex.substr(1, 2), 16)
  const g = parseInt(colorHex.substr(3, 2), 16)
  const b = parseInt(colorHex.substr(5, 2), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}
