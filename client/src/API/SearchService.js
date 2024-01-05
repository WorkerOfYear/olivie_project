import axios from 'axios'

const baseURL = import.meta.env.VITE_API_URL

export default class SearchService {
    static async searchArtists(address, radius, activity) {
        try {
            const { data, status, statusText } = await axios.post(baseURL + '/geoapi/find_artists', {
                'address': address,
                'radius': radius,
                'activity': activity,
            })

            console.log(data, status, statusText)
            
            if (status === 200 && data[0]) {
                return data
            } else {
                return null
            } 

        } catch (error) {
            console.log(error)
            return null
        }
    }

    static async getArtistById(artist_id) {
        const { data, status, statusText } = await axios.get(baseURL + `/artist/${artist_id}`)
        if (status === 200) {
            console.log(data)
            return data
        }
    }
}