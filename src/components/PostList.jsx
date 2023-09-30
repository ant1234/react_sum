import Post from "./Post";
import classes from "./PostList.module.css";
import NewPost from "../routes/NewPost";
import { useEffect, useState } from "react";
import Modal from "./Modal";

const PostList = (props) => {

    const [posts, setposts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        async function sendGetRequest() {
             const response = await fetch('http://localhost:8080/posts');
             const resData = await response.json();
             setposts(resData.posts);
             setLoading(false);
            
        }
        sendGetRequest();
    }, []);

    const onSubmitHandler = (submitData) => {
        setposts((previousData) => [submitData, ...previousData]);
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(submitData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    };

    return (
        <>
        {props.isVisable && <Modal onClose={props.onClose}>
        <NewPost onClose={props.onClose} onSubmit={onSubmitHandler}
            bodyText={'React is awesome'} 
            nameText={'Ant'}/>
        </Modal>}
        {!loading && posts.length > 0 && 
            <ul className={classes.posts}>
                {posts.map((post) => { return (<Post key={post.body} name={post.author} description={post.body} />)})}
            </ul>
        }
        {!loading && posts.length === 0 && 
        <div style={{textAlign: 'center', color: 'white' }}>
            <h2>There are no posts yet</h2>
            <p>Go ahead and add some</p>
        </div>
        }
        {loading &&
            <div style={{textAlign: 'center', color: 'white' }}>
                <h2>Loading ...</h2>
            </div>
        }
        </>

    );
};

export default PostList;