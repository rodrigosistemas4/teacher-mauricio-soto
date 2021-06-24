import Axios from 'axios'

const defaultHttpClient = {
    httpClient: Axios.create({
      baseURL: 'http://78ded4fc2581.ngrok.io' //todo: replace this
    }),
  };

export class UsersClient {
    constructor() {
        this.config = defaultHttpClient
    }

    async create(user) {
        return this.config.httpClient
            .post('/users', user)
            .then((response) => response.data);
    }

    async list() {
        console.log(this.config)
        return this.config.httpClient
            .get('/users')
            .then((response) => {
                return response.data;
            });
    }

    async findById(id) {
        console.log(this.config)
        return this.config.httpClient
            .get(`/users/${id}`)
            .then((response) => {
                return response.data;
            });
    }

    async deleteById(id) {
        console.log(this.config)
        return this.config.httpClient
            .delete(`/users/${id}`)
            .then((response) => {
                return response.data;
            });
    }

    async editById(id) {
        console.log(this.config)
        return this.config.httpClient
            .put(`/users/${id}`)
            .then((response) => {
                return response.data;
            });
    }
}

export class LocalesClient {
    constructor() {
        this.config = defaultHttpClient
     }

    async create(local) {
        return this.config.httpClient
            .post('/locales', local)
            .then((response) => response.data);
    }

    async list() {
        console.log(this.config)
        return this.config.httpClient
            .get('/locales')
            .then((response) => {
                return response.data;
            });
    }

    async findById(id) {
        console.log(this.config)
        return this.config.httpClient
            .get(`/locales/${id}`)
            .then((response) => {
                return response.data;
            });
    }

    async deleteById(id) {
        console.log(this.config)
        return this.config.httpClient
            .delete(`/locales/${id}`)
            .then((response) => {
                return response.data;
            });
    }

    async editById(id) {
        console.log(this.config)
        return this.config.httpClient
            .put(`/locales/${id}`)
            .then((response) => {
                return response.data;
            });
    }
}
