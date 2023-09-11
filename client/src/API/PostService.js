import axios from 'axios'


export default class PostService {
    static async postLogin(_email, _password) {

        const httpClient = axios.create({
            withCredentials: true
        })

        try {

            const response = await httpClient.post('//localhost:5000/signin', {
                email: _email,
                password: _password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            console.log(response)
            return response

        } catch (error) {
            console.log(error)
        }

    }
}