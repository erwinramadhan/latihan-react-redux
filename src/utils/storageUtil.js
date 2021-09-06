export const setLocalStorage = (key, value) => {
    if(value && typeof value === "string") {
        localStorage.setItem(key, value);
    } else {
        localStorage.setItem(key, JSON.stringify(value));
    }
};

export const getLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    try {
        return JSON.parse(data);
    } catch (e) {
        return data;
    }
}

export const removeLocalStorage = key => localStorage.removeItem(key)

export const clearLocalStorage = () => localStorage.clear();