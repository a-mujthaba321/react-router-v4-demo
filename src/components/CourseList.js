import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchCourses } from '../actions/action_course';

import { Link } from 'react-router-dom';

class PostIndex extends Component {
  componentDidMount() {
    this.props.fetchCourses();
  }

  renderCourses() {
    return _.map(this.props.courses, course => (
      <li className="list-group-item" key={course.id}>
        <Link to={`/courses/${course.id}`}> {course.courseName} </Link>
      </li>
    ));
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {/* <div className="col-sm-2">
            <Link className="btn btn-primary" to="/AddCourse">
              Add Course
            </Link>
          </div> */}
          <div className="col-sm-10">{this.renderCourses()}</div>
        </div>
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
