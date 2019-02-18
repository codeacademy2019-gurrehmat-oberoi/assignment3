import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header.component';
import AuthorGroup from '../../components/AuthorGroup/AuthorGroup.component';
import './App.css';
import { fetchDataAction, url } from '../../actions';

const axios = require('axios');

class AppComponent extends Component {
  // state = {
  //   booksByAuthor: {},
  // // }

  componentDidMount() {
    // const externalDataPromise = axios.get(url);
    // console.log(externalDataPromise);
    // externalDataPromise.then((response) => {
    //   this.setState({
    //     booksByAuthor: response.data,
    //   });
    // });
    fetch();
  }

  render() {
    // const { booksByAuthor } = this.state;
    // fetch();
    return (
      <div className="App">
        <Header />
        {/* <AuthorGroup author="JK Rowling" />
        <AuthorGroup author="Sydney Sheldon" /> */}
        {/* {Object.keys(booksByAuthor).forEach(author => (
          <AuthorGroup author={author} booksArray={booksByAuthor[author]} />
        ))} */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return state;
};

const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch(fetchDataAction()),
});

const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);
export default App;
