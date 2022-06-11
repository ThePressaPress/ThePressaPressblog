// WARNING: this file shall only be accesed in serverside endpoints, using it inside frontend routes can expose your admin credentials.

import cuid from "cuid";

const session_token = cuid()

const creds = {
    username: import.meta.env.VITE_ADMIN_PANEL_USERNAME,
    password: import.meta.env.VITE_ADMIN_PANEL_PASSWORD,
    session_token   
}
export default creds