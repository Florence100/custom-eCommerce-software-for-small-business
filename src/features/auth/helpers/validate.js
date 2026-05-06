const validateEmail = (email) => {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
}

const validatePassword = (password) => {
    return password.length > 7;
}

const validateName = (name) => {
    return name.length > 0;
}

export { validateEmail, validatePassword, validateName };