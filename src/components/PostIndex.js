
import React, { Component } from 'react';

import { Link } from "react-router-dom";

const PostIndex = (props) => {

    return(
        <div>
            <Link className="btn btn-primary" to="/MyPost">
                View My Post
            </Link>
        </div>
    );
}

export default PostIndex;