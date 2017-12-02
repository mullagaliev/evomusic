import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PhotoSearch from '../../components/PhotoSearch/PhotoSearch';

class PhotoSearchContainer extends Component {
  render() {
    return (
        <PhotoSearch/>
    );
  }
}

PhotoSearchContainer.propTypes = {};
PhotoSearchContainer.defaultProps = {};

export default PhotoSearchContainer;
