import classes from './NewPost.module.css';
import { useState } from 'react';

function NewPost(props) {

    const [bodyText, setBodyText] = useState('');
    const [nameText, setNameText] = useState('');

    const bodyTextHandler = event => {
        setBodyText(event.target.value);
    };

    const nameTextHandler = event => {
        setNameText(event.target.value);
    };  

    const onSubmitHandler = event => {
        event.preventDefault();
        const submitData = {
            author: nameText,
            body: bodyText
        }
        props.onSubmit(submitData);
        props.onClose();
    };

    return (
        <form className={classes.form} onSubmit={onSubmitHandler}>
        <p>
            <label htmlFor="body">Text</label>
            <textarea id="body" required rows={3} onChange={bodyTextHandler}/>
        </p>
        <p>
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" required onChange={nameTextHandler}/>
        </p>
        <p className={classes.actions}>
            <button type="button" onClick={props.onClose}>Cancel</button>
            <button>Submit</button>
        </p>
        </form>
    );
}

export default NewPost;
