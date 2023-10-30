import httpClient from './httpClient'

export default class UserService {
    static async postLogin(_email, _password) {
        try {
            const response = await httpClient.post('//localhost:5000/auth/signin', {
                email: _email,
                password: _password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            return response
        } catch (error) {
            console.log(error)
            return error
        }
    }

    static async showLogin() {
        try {
            return await httpClient.get('//localhost:5000/auth/show')
        } catch (error) {
            console.log(error)
        }
    }

    static async logout() {
        try {
            return await httpClient.post('//localhost:5000/auth/logout')
        } catch (error) {
            console.log(error)
        }
    }
}