const AuthProvider = {
    login: ({ email, password }) => {
        const request = new Request('http://localhost:3333/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(({ token, type }) => {
                localStorage.setItem('token', token);
                localStorage.setItem('permissions', type);
            });
    },
    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('permissions');
        return Promise.resolve();
    },
    checkError: error => {
        const { status } = error;

        if (status === 401 || status === 403) {
            localStorage.removeItem('token');
            localStorage.removeItem('permissions');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    checkAuth: error => {
        return localStorage.getItem('token')
            ? Promise.resolve()
            : Promise.reject(error);
    },
    getPermissions: () => {
        const role = localStorage.getItem('permissions');
        return role ? Promise.resolve(role) : Promise.reject();
    },
};

export default AuthProvider;