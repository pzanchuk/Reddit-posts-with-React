import React from 'react';
import PropTypes from 'prop-types';

function Post(props) {

    function onClickLikeSubmission(event) {
        event.preventDefault();
        props.onClickLike(props.post.id);
    }

    function onClickDislikeSubmission(event) {
        event.preventDefault();
        props.onClickDislike(props.post.id);
    }

    return (

        <div className="feed">
            <style>{`
            .feed{
                border: 1px solid green;
                margin: 5px;
                padding-left: 15px;
            }
        `}</style>
            <h3>{props.post.name}</h3>
            <p>{props.post.text}</p>
            <h4>{props.post.likes}</h4>

            <button onClick={onClickLikeSubmission}>Like</button>
            <button onClick={onClickDislikeSubmission}>Dislike</button>
        </div>
    );
}

Post.propTypes = {
    name: PropTypes.string,
    text: PropTypes.string,
    likes: PropTypes.number,

    onClickLike: PropTypes.func,
    onClickDislike: PropTypes.func
}

export default Post;