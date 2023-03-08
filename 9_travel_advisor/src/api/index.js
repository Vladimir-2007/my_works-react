import axios from 'axios'

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-bound'

export const getPlacesData = async ( sw, ne ) => {
  try {
    const {
      data: { data },
    } = await axios.get( URL, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },
      headers: {
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
        'X-RapidAPI-Key': '2f12fa03edmshe920bdb7b2eedfbp1387d7jsn88c804150475',
      },
    } )

    return data
  } catch ( err ) {
    console.log( err )
  }
}