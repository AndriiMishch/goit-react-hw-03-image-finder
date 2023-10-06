import css from './Modal.module.css';

import React, { Component } from 'react';

export default class Modal extends Component {
  state = {};

  componentDidMount = () => {
    window.addEventListener('keydown', this.handlePressEscape);
  };

  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.handlePressEscape);
  };

  handlePressEscape = e => {
    if (e.code === 'Escape') this.props.closeModal();
  };

  render() {
    const { largeImageURL } = this.props;
    return (
      <>
        <div className={css.Overlay} onClick={this.props.closeModal}>
          <div className={css.Modal}>
            <img
              src={largeImageURL}
              alt={largeImageURL}
              className={css.Image}
            />
          </div>
        </div>
      </>
    );
  }
}