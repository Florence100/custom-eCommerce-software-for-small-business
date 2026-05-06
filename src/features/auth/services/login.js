export default async function login (formData) {
    new Promise(resolve => setTimeout(resolve, 500));

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === formData.email);

    console.log('user', user)

    if (!user) {
        return {
            success: false,
            message: "A user with this email doesn't exist."
        }
    }

    if (formData.password !== user.password) {
        return {
            success: false,
            message: "The password is incorrect"
        }
    }

    return { success: true };
}