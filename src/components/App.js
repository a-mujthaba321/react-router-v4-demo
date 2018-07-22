import React from 'react';
import ReactDOM from 'react-dom';




export default class App extends React.Component {

    render() {
        return (
            <div className="container-fluid">
              <div className="row">
                  <div className="col">
                    <MyPosts />
                  </div>
              </div>
            </div>
        ); 
    }
}