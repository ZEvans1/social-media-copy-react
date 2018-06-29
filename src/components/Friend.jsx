import React from "react";
import PropTypes from "prop-types";

function Friend(props){
    return (
        <div>
            <image></image>
            <h4>{props.name}</h4>
            <p>{props.text}</p>
            <hr/>
        </div>
    );
};

Friend.propTypes = {
    picture: "",
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default Friend;