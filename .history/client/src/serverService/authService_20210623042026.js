import axios from "axios";

const registerUrl = "http://localhost:5000/register";
const signInUrl = "http://localhost:5000/signin";

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

    static signIn(email, password) {
        const hello = axios.post(signInUrl, {
            email: email,
            password: password,
        });
        console.log(hello.data);
        return hello;
    }

    //Delete Post
    static deletePost(id) {
        return axios.delete(`$(url)$(id)`);
    }
}
export default authService;