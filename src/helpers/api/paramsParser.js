export const paramsParser = (params) =>
  Object.keys(params)
    .map((k) => {
      return encodeURIComponent(k) + '=' + encodeURIComponent(params[k])
    })
    .join('&')
