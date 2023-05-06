
export default function Validate(data) {
    let errors = { email: '', password: '', username: "" }
    if (!data.email) {
        errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = 'Email address is invalid';
    }


    if (!data.password) {
        errors.password = 'Password is required';
    } else if (data.password.length < 8) {
        errors.password = 'Password must be 8 or more characters';
    }
    if (!data.username) {
        errors.username = 'Username is required';
    } else if (data.username.length < 3) {
        errors.username = 'Username too short';
    }
    return errors
}