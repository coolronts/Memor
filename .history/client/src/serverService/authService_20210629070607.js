import axios from "axios";

const registerUrl = "http://localhost:5000/register";
const signInUrl = "http://localhost:5000/signin";

class authService {
    //Register User
    static registerUser(username, email, password, image) {
        return axios.post(registerUrl, {
            username: username,
            email: email,
            password: password,
            image: image,
        });
    }

    //signIn
    static signIn(email, password) {
        return axios.post(signInUrl, {
            email: email,
            password: password,
        });
    }

    //Delete Post
    static deletePost(id) {
        return axios.delete(`$(url)$(id)`);
    }
}
export default authService;