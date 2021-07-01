import axios from "axios";

const postUrl = "http://localhost:5000/posts";

class postService {
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
    static insertPost(title, place, description, image, id) {
            console.log(title, place, description, image, id);
            return axios.post(postUrl, {
                title,
                place,
                description,
                image,
                id,
            });
        }
        //Delete Post
    static deletePost(id) {
        return axios.delete(`$(url)$(id)`);
    }
}
export default postService;