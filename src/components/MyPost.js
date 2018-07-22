import React, { Component } from 'react';
import { Link } from "react-router-dom";
export default class MyPost extends Component {

  constructor() {
    super();
    
  }


  componentDidMount() {
   
  }

  render() {

    return (
      <div>
         <Link className="btn btn-primary" to="/">
               Go Back
          </Link>
      </div>
    );
  }
}

