export const resultSelector = testsState => (
  Object.fromEntries(Object.entries(testsState).map(([k, v]) => [k, v.result]))
)
