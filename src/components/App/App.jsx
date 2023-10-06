import React, { Component } from 'react';
import SearchBar from '../Searchbar';
import css from './App.module.css';
import ImageGallery from '../ImageGallery';

export default class App extends Component {
  state = {
    searchQuery: '',
  };

  handleSubmit = value => {
    this.setState({ searchQuery: value });
  };

  render() {
    const { searchQuery } = this.state;

    return (
      <div className={css.App}>
        <SearchBar onSubmit={this.handleSubmit} />
        <ImageGallery searchQuery={searchQuery} />
      </div>
    );
  }
}