const exportColors = (colors: string[], defaultIndex: number) =>
  (index: number = defaultIndex) => colors[index]

export const gray = exportColors([
  '#22252a', // dark
  '#353a3f',
  '#4a5056',
  '#878e95',
  '#aeb5bc',
  '#cfd4d9',
  '#dfe2e6',
  '#e9ecef',
  '#f1f3f5',
  '#f8f9fa', // light
], 5)

export const primary = exportColors([
  '#19233c', // dark
  '#3a3d9b',
  '#2eadde',
  '#44bff6',
  '#44dff6',
  '#ccefff',
  '#e1f1f9', // light
], 3)

export const grayPrimary = exportColors([
  '#61799e', // dark
  '#aac2d2',
  '#dae6ff', // light
], 1)

export const secondary = exportColors([
  '#eb6b38', // dark orange
  '#ffc151', // light orange
  '#5cd692', // green
], 1)

export const red = exportColors([
  '#5a1e1b', // dark
  '#7d2621',
  '#ab3029',
  '#cb4039', // default
  '#d56b69',
  '#ebadac',
  '#f6e6e6', // light
], 3)

export const yellow = exportColors([
  '#59481d', // dark
  '#886d2f',
  '#c5a550',
  '#efca74', // default
  '#f7e2a7',
  '#fcf3da',
  '#fffcf5', // light
], 3)

export const green = exportColors([
  '#27503b', // dark
  '#377547',
  '#4b9a5f',
  '#60bd79', // default
  '#8bd6a3',
  '#b6ebc4',
  '#e7fbed', // light
], 3)

export const blue = exportColors([
  '#263d52', // dark
  '#24496e',
  '#33689d',
  '#4483c2', // default
  '#6fa1d3',
  '#b1d3f2',
  '#f0f8fe', // light
], 3)

export const rose = exportColors([
  '#204444', // dark
  '#30635e',
  '#488f87',
  '#5baba3', // default
  '#86d4d2',
  '#b5ecea',
  '#ebfefe', // light
], 3)

export const white = '#ffffff'
