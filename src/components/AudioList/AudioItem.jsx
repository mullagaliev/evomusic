import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AudioItem extends Component {
  render() {
    const { track } = this.props;
    return (
        <div>
          <h1>{track.title}</h1>
          <p>{track.description}</p>
          <a href={track.link}>link</a>
        </div>
    );
  }
}

AudioItem.propTypes = {};
AudioItem.defaultProps = {};

export default AudioItem;
