export default {
  isEmptyObject: obj => Object.keys(obj).length,
  isNumber: value => typeof value === 'number' && isFinite(value),
  numberToFloat: value => Number(value.toFixed(2))
}
