import React, {Component} from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getCourseFromApi } from './actions/courses';
import HomePage from './components/homePage/homePage';

class App extends React.Component {
  componentDidMount() {
    this.props.getCourseFromApi();
  }
  render() {
    return (
      <div>
        <HomePage />
      </div>
    )
  }
}
export default connect(null, {getCourseFromApi})(App);
