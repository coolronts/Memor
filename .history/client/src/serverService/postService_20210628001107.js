import axios from "axios";

const postUrl = "http://localhost:5000/posts";
const updateUsername = "http://localhost:5000/updateusername";
const updateEmail = "http://localhost:5000/updateemail";
const updatePassword = "http://localhost:5000/updatepassword";
const updateProfilePic = "http://localhost:5000/updateprofilepic";
const updateLikes = "http://localhost:5000/updatelikes";
const notifications = "http://localhost:5000/notifications";

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
        return axios.post(postUrl, {
            title,
            place,
            description,
            image,
            id,
        });
    }

    //Update Username
    static updateUsername(username, email) {
        return axios.post(updateUsername, {
            username,
            email,
        });
    }

    //Update Email
    static updateEmail(email, username) {
        return axios.post(updateEmail, {
            username,
            email,
        });
    }

    //Update Password
    static updatePassword(password, email) {
        return axios.post(updatePassword, {
            password,
            email,
        });
    }

    //Update Profile Picture
    static updateProfilePic(profile, email) {
        return axios.post(updateProfilePic, {
            profile,
            email,
        });
    }

    //Update Likes
    static updateLikes(postId, userId, isLiked) {
        console.log(postId, userId, isLiked);
        return axios.post(updateLikes, {
            postId,
            userId,
            isLiked,
        });
    }

    //Get notification
    static getNotification(userId) {
        return axios.get(notifications, {
            userId,
        });
    }

    //Delete Post
    static deletePost(id) {
        return axios.delete(`$(url)$(id)`);
    }
}
export default postService;