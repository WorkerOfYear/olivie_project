import axios from 'axios'


export default class SearchService {

    static async getAll() {
        const baseURL = process.env.REACT_APP_API_URL
        const { data, status, statusText } = await axios.get(baseURL + '/artist/all')

        if (status >= 400) { throw new Error(statusText) }

        return data
    }

    static async getByInput(who_input, where_input) {
        const response = await axios.get('url', {
            params: {
                who: who_input,
                where: where_input
            }
        })
        return response
    }
}