class Http {
    static ajax(method, url, headers = {}, body = null) {
        return fetch(url, {method, headers, body})
        .then(resp => {
            if(!resp.ok) throw new Error(resp.statusText);
            if(resp.status == 204) return;
            return resp.json(); // promise
        });
    }

    static get(url) {
        return Http.ajax('GET', url);
    }

    static post(url, data) {
        return Http.ajax('POST', url, 
            {'Content-Type': 'application/json'}, JSON.stringify(data));
    }

    static put(url, data) {
        return Http.ajax('PUT', url, 
            {'Content-Type': 'application/json'}, JSON.stringify(data));
    }

    static delete(url) {
        return Http.ajax('DELETE', url);
    }
}