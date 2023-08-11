import axios from 'axios'

export default class SearchService {
    static async getAll(who_input, where_input) {
        const response = await axios.get('url', {
            params: {
                _who_input: who_input,
                _where_input: where_input
            }
        })
        return response
    }
}