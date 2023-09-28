import Post from "./Post";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";
import { useState } from "react";
import Modal from "./Modal";

const PostList = (props) => {

    return (
        <>
        {props.isVisable && <Modal onClose={props.onClose}>
        <NewPost onClose={props.onClose}
            bodyText={'React is awesome'} 
            nameText={'Ant'}/>
        </Modal>}
        <ul className={classes.posts}>
            <Post name={'Ant'} description={'React is awesome'} />
        </ul>
        </>

    );
};

export default PostList;