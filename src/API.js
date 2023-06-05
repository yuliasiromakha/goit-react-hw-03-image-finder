class Api {
    static BASE_URL = 'https://pixabay.com/api/';
    static API_KEY = '35566788-2396923f3520db2f530781152';

    constructor() {
        this.query = '';
        this.page = 1;
        this.per_page = 40;
      }
}

export default Api; 