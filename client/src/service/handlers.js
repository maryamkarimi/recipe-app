export const pullOutJson = (response) => {
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
        return response.json();
    }
    throw new TypeError('Oops, we haven\'t got JSON!');
};

export const handleError = (response) => {
    if (response.ok) {
        return response;
    }
    return response.json().then((error) => Promise.reject(error));
};
