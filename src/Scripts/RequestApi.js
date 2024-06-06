export async function requestAPI(link) {
  const request = await fetch(link)
  const jsonRequest = await request.json()

  return jsonRequest
}