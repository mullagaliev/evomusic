import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import CoverFlow from '../vendors/CoverFlow/CoverFlow';
import { Loader } from 'semantic-ui-react';
const styles = require('./PhotoSearch.sass');

class PhotoSearch extends Component {
  state = {
    foundName: null
  };

  render() {
    const { photos } = this.props;
    return (
        <div className={styles.PhotoSearch}>
          <div className={styles.PhotoSearchSource}>
            <div className={styles.PhotoSearchSourcePhoto}>
              <div className={styles.PhotoSearchSourceTitle}>
                {this.state.foundName ? this.state.foundName : '???' }
              </div>
            </div>
          </div>
          <Loader size='massive' active={this.state.foundName === null}>
            Загрузка....
          </Loader>
          <div className={styles.PhotoSearchSlider}>
            <CoverFlow
                className={styles.CoverFlow}
                completeFind={(foundName) => this.setState({ foundName })}
                direction="vertical"
                width="300"
                height="768"
                itemRatio="5:6"
                background="rgba(255,255,255,0)"
                labelsArr={
                  photos.map((photo) => {
                    return photo.alt;
                  })
                }
                imagesArr={
                  photos.map((photo) => {
                    return photo.url;
                  })
                }/>
          </div>
        </div>
    );
  }
}

PhotoSearch.propTypes = {};
PhotoSearch.defaultProps = {
  photos: []
};

export default PhotoSearch;
