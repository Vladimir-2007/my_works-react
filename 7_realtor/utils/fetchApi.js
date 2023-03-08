import axios from 'axios'


export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
      'X-RapidAPI-Key': '6e3d52e83dmsh9bc7f70a32ec578p1f9a66jsnf3cc736d203b'
    }
  })

  return data
}