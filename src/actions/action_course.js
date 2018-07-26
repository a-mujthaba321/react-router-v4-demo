import axios from 'axios';

export const FETCH_COURSES= 'FETCH_COURSES';

const ROOT_URL = 'http://localhost:8080';

export function fetchCourses() {
  const request = axios.get(`${ROOT_URL}/courses`);

  return {
    type: FETCH_COURSES,
    payload: request
  };
}
