import axios from 'axios'


export default class SearchService {

    static async getAll() {
        const baseURL = process.env.REACT_APP_API_URL
        const { data, status, statusText } = await axios.get(baseURL + '/artist/all')

        if (status >= 400) { throw new Error(statusText) }

        return data
    }

    static async getArtistById(_artist_id) {
        const baseURL = process.env.REACT_APP_API_URL
        const response = await axios.get(baseURL + '/artist/id', {
            params: {
                artist_id: _artist_id,
            }
        })
        return response
    }

    static async getArtistByInput(who_input, where_input) {
        const response = await axios.get('url', {
            params: {
                who: who_input,
                where: where_input
            }
        })
        return response
    }
}