import authHelpers from "./auth.helpers"
import axios from "axios"

const token = authHelpers.getToken();
const instance = axios.create({
    headers: {'Authorization': `Bearer ${token}`}
});

export default instance;