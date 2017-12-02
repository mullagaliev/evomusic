import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AudioList from '../../components/AudioList/AudioList';
const nanoid = require('nanoid');


class Track {
  constructor() {
    const id = nanoid();
    this.id = id;
    this.title = 'random title' + id;
    this.description = 'random description' + id;
    this.link = '';
  }
}

class AudioListContainer extends Component {
  render() {
    const tracks = [
      new Track(),
      new Track(),
      new Track(),
      new Track(),
      new Track(),
      new Track(),
      new Track(),
      new Track(),
      new Track(),
      new Track(),
      new Track(),
      new Track(),
    ];
    return (
        <AudioList tracks={tracks}/>
    );
  }
}

AudioListContainer.propTypes = {};
AudioListContainer.defaultProps = {};

export default AudioListContainer;
