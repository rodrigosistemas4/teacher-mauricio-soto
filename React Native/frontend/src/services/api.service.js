import Axios from 'axios'

const defaultHttpClient = {
    httpClient: Axios.create({
      baseURL: 'https://openlibrary.org/works/OL45883W.json' //todo: replace this
    }),
  };

export class UsersClient {
    constructor() {
        this.config = defaultHttpClient
    }
    //todo add more methods
    async create(user) {
        return this.config.httpClient
            .post('/users', user)
            .then((response) => response.data);
    }

    async get() {
        return this.config.httpClient
            .get()
            .then((result) => {
                return result.data;
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

    async get() {
        console.log(this.config)
        return this.config.httpClient
            .get('/locales')
            .then((response) => {
                return response.data;
            });
    }
}
