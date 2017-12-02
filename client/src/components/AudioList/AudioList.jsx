import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AudioItem from './AudioItem';


class AudioList extends Component {
  render() {
    return (
        <div>
          {
            this.props.tracks.map((track) => {
              return <AudioItem
                  key={track.id}
                  track={track}/>
            })
          }
        </div>
    );
  }
}

AudioList.propTypes = {};
AudioList.defaultProps = {};

export default AudioList;
