export default async function login(formData) {
    const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: formData.name,
            password: formData.password,
            expiresInMins: 30,
        }),
    });

    const data = await response.json();

    if (!response.ok) {
        return {
            success: false,
            message: data.message || 'Login failed',
        };
    }

    return {
        success: true,
        user: data,
    };
}