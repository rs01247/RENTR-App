export default {
    saveToken(token) {
        localStorage.setItem("token", token)
    },
    logout(newRoute) {
        localStorage.removeItem("token")
    },
    isValid() {
        const token = localStorage.getItem("token");
        if (token) {
            const payload = this.parseToken(token);
            return payload.exp > Date.now()/1000; 
        }
    },
    parseToken(token) {
        return JSON.parse(window.atob(token.split('.')[1]));
    }
}