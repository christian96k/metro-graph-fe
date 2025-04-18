// TODO: move to env file
export const BASE_URL = `http://10.0.106.43:8000`

// entry version api
export const VERSIONS = {
    V1: 'v1',
};

// entry builder api
export const ENTRY = {
    DASHBOARD: 'dashboard',
    AUTH: 'auth'
}

// api authentication endpoints
export const AUTH = {
    LOGIN: `${ENTRY.AUTH}/login`,
    LOGOUT:`${ENTRY.AUTH}/logout`,
}

// api dashboard endpoints
export const DASHBOARD = {
    GET_METRO_DATA: `${ENTRY.DASHBOARD}/metro-data`,
}