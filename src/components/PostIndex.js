import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchCourses } from '../actions/action_course';

import { Link } from 'react-router-dom';

class PostIndex extends Component {
  componentDidMount() {
    this.props.fetchCourses();
  }

  render() {
    return (
      <div>
        <Link className="btn btn-primary" to="/AddCourse">
          Add Course
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { courses: state.courses };
}

export default connect(
  mapStateToProps,
  { fetchCourses }
)(PostIndex);
