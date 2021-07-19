const DEV_CONSTS = {
    baseUrl: 'http://127.0.0.1:8000/',
}

const PROD_CONSTS = {
    baseUrl: 'http://185.98.139.234:5000/',
}

const CONSTS = process.env.NODE_ENV === 'development' ? DEV_CONSTS : PROD_CONSTS; //


export default CONSTS;


