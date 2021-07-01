import axios from "axios";

const registerUrl = "http://localhost:5000/register";
const loginUrl = "http://localhost:5000/login";

class authService {
    //Get posts
    static getPosts() {
            return new Promise(async(resolve, reject) => {
                try {
                    const res = await axios.get(url);
                    const data = res.data;
                    resolve(
                        data.map((post) => ({...post, createdAt: new Date(post.createdAt) }))
                    );
                } catch (error) {
                    reject(error);
                }
            });
        }
        //Register User
    static registerUser(username, email, password) {
        return axios.post(registerUrl, {
            username: username,
            email: email,
            password: password,
        });
    }

    static login(email, password) {
        return axios.post(loginUrl, {
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