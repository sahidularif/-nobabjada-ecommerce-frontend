export function authHeader() {
    const jwt = localStorage.getItem("jwt");
    let token = null;
    if (jwt)
        token = JSON.parse(jwt);

    if (token) {
        return { 'x-access-token': token };
    } else {
        return { 'x-access-token': null };
    }
}