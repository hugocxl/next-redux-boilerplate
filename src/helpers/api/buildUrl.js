export function buildUrl ({ api, endpoint, params }) {
  let url = `${api}/${endpoint}?${parsedParams}`

  if (params) {
    url += `?${apiHelpers.paramsParser(paramsForReq)}&`
  }

  return url
}
