export default async function register (formData) {
    await new Promise(resolve => setTimeout(resolve, 500));

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.find(user => user.email === formData.email);

    if (userExists) {
        return { success: false, message: 'Email already exists' };
    }

    users.push(formData);
    localStorage.setItem('users', JSON.stringify(users));

    return { success: true };
}