import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Field, reduxForm } from 'redux-form';

class AddCourse extends Component {
  componentDidMount() {}

  renderTitleField(field) {
    return (
      <div>
        <input {...field.input} />
      </div>
    );
  }

  render() {
    return (
      <div>
        <Link className="btn btn-primary" to="/">
          Go Back
        </Link>
        <form>
          <Field name="courseName" component={this.renderTitleField} />
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: 'AddCourseForm' })(AddCourse);
