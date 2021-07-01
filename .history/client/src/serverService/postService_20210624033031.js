import axios from "axios";

const postUrl = "http://localhost:5000/posts";

class PostService {
    //Get posts
    static getPosts() {
            return new Promise(async(resolve, reject) => {
                try {
                    const res = await axios.get(url);
                    const data = res.data;
                    resolve(
                        data.map((post) => ({
                            ...post,
                            createdAt: new Date(post.createdAt),
                        }))
                    );
                } catch (error) {
                    reject(error);
                }
            });
        }
        //Create Post
    static insertPost(title, place, description, image) {
            console.log(this.$store.state.user);
            return axios.post(postUrl, {
                title,
                place,
                description,
                image,
            });
        }
        //Delete Post
    static deletePost(id) {
        return axios.delete(`$(url)$(id)`);
    }
}
export default PostService;