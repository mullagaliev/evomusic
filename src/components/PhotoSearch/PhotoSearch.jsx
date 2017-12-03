import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import CoverFlow from '../vendors/CoverFlow/CoverFlow';
import { Loader } from 'semantic-ui-react';
const styles = require('./PhotoSearch.sass');

class PhotoSearch extends Component {
  state = {
    foundName: null,
    startSearch: false
  };

  componentWillMount() {
    setTimeout(() => {
      this.setState({ startSearch: true });
    }, 3000);
  }

  render() {
    const { photos, cameraPhoto } = this.props;
    return (
        <div className={styles.PhotoSearch}>
          <div className={styles.PhotoSearchSource}>
            <div className={styles.PhotoSearchSourcePhoto}
                 style={{ backgroundImage: `url(${cameraPhoto})` }}>
              <div className={styles.PhotoSearchSourceTitle}>
                {this.state.foundName ? this.state.foundName : '???' }
              </div>
            </div>
          </div>
          {
            this.state.startSearch ? this.state.foundName === null ? <Loader size='massive' active={this.state.foundName === null}>
              Поиск....
            </Loader> : <div style={{fontSize: '160px'}} className={'alignMiddle'}>=</div> : null
          }
          {
            this.state.startSearch ? <div className={styles.PhotoSearchSlider}>
                <CoverFlow
                    className={styles.CoverFlow}
                    completeFind={(foundName) => {
                      this.setState({ foundName });
                      console.log(foundName);
                    }}
                    direction="vertical"
                    width="300"
                    height="768"
                    itemRatio="5:6"
                    background="rgba(255,255,255,0)"
                    sourceArr={photos}
                    labelsArr={
                      photos.map((photo) => {
                        return photo.name;
                      })
                    }
                    imagesArr={
                      photos.map((photo) => {
                        return photo.url;
                      })
                    }/>
              </div> : null
          }
        </div>
    );
  }
}

PhotoSearch.propTypes = {};
PhotoSearch.defaultProps = {
  photos: []
};

export default PhotoSearch;
