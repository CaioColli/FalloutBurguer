async function requestAPI(link) {
  const request = await fetch(link)
  const jsonRequest = await request.json()

  return jsonRequest
}

export const fetchMoreOrders = async () => {
  const request = await requestAPI('https://raw.githubusercontent.com/CaioColli/BurguerHouseJson/main/MoreOrders.json')
  return(request.menu)
}

export const fetchMeat = async () => {
  const request = await requestAPI('https://raw.githubusercontent.com/CaioColli/BurguerHouseJson/main/Meat.json')
  return(request.menu)
}

export const fetchChicken = async () => {
  const request = await requestAPI('https://raw.githubusercontent.com/CaioColli/BurguerHouseJson/main/Chicken.json')
  return(request.menu)
}

//Consumir no cardápio
export const fetchAccompaniment = async () => {
  const request = await requestAPI('https://raw.githubusercontent.com/CaioColli/BurguerHouseJson/main/accompaniment.json')
  return(request.menu)
}

const fetchLocations = async () => {
  const request = await requestAPI('https://raw.githubusercontent.com/CaioColli/BurguerHouseJson/main/Locations.json')
  return(request.locations)
}

export async function requests() {
  const [
    moreOrders,
    meat,
    chicken,
    accompaniment,
    locations
  ] = await Promise.all([
    fetchMoreOrders(),
    fetchMeat(),
    fetchChicken(),
    fetchAccompaniment(),
    fetchLocations()
  ])

  return { moreOrders, meat, chicken, accompaniment, locations }
}