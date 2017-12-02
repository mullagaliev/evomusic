import React, { Component } from 'react';
import PropTypes from 'prop-types';

const styles = require('./PhotoSearch.sass');

class PhotoSearch extends Component {
  render() {
    return (
        <div className={styles.PhotoSearch}>
          PhotoSearch
        </div>
    );
  }
}

PhotoSearch.propTypes = {};
PhotoSearch.defaultProps = {};

export default PhotoSearch;
