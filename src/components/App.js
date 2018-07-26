import React from 'react';
import ReactDOM from 'react-dom';

import AddCourse from './AddCourse';
import CourseList from './CourseList';

export default class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-2 float-right">
            <button className="btn btn-primary">Add Post</button>
          </div>
          <div className="col float-right">
            <CourseList />
          </div>
          <div className="col float-right">
            <AddCourse />
          </div>
        </div>
      </div>
    );
  }
}
