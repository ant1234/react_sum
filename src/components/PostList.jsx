import Post from "./Post";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";

const PostList = (props) => {
    return (
        <>
        <NewPost />
        <ul className={classes.posts}>
            <Post name={"Ant"} description={"React.js is awesome"} />
            <Post name={"Mike"} description={"React.js is still awesome"}/>
        </ul>
        </>

    );
};

export default PostList;