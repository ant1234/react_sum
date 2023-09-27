import Post from "./Post";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";
import { useState } from "react";
import Modal from "./Modal";

const PostList = (props) => {

    const [bodyText, setBodyText] = useState('');
    const [nameText, setNameText] = useState('');

    const bodyTextHandler = event => {
      setBodyText(event.target.value);
    };

    const nameTextHandler = event => {
        setNameText(event.target.value);
    };  

    return (
        <>
        <Modal>
        <NewPost 
            bodyText={bodyTextHandler} 
            nameText={nameTextHandler}/>
        </Modal>
        <ul className={classes.posts}>
            <Post name={nameText} description={bodyText} />
            <Post name={nameText} description={bodyText}/>
        </ul>
        </>

    );
};

export default PostList;