export function getUser() {
    return localStorage.getItem('user');
}

export function setUser(user) {
    localStorage.setItem('user', user);
}

export function unsetUser() {
    localStorage.removeItem('user');
}
