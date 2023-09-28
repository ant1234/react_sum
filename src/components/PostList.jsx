import Post from "./Post";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";
import { useState } from "react";
import Modal from "./Modal";

const PostList = (props) => {

    const [posts, setposts] = useState([]);

    const onSubmitHandler = (submitData) => {
        setposts((previousData) => [submitData, ...previousData]);
    };

    return (
        <>
        {props.isVisable && <Modal onClose={props.onClose}>
        <NewPost onClose={props.onClose} onSubmit={onSubmitHandler}
            bodyText={'React is awesome'} 
            nameText={'Ant'}/>
        </Modal>}
        {posts.length > 0 && 
            <ul className={classes.posts}>
                {posts.map((post) => { return (<Post key={post.body} name={post.author} description={post.body} />)})}
            </ul>
        }
        {posts.length === 0 && 
        <div style={{textAlign: 'center', color: 'white' }}>
            <h2>There are no posts yet</h2>
            <p>Go ahead and add some</p>
        </div>
        }
        </>

    );
};

export default PostList;