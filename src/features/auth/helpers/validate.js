const validateEmail = (email) => {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
}

const validatePassword = (password) => {
    return password.length >= 8;
}

export { validateEmail, validatePassword };