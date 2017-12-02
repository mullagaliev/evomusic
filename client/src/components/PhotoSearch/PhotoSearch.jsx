import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import CoverFlow from '../vendors/CoverFlow/CoverFlow';
import { Loader } from 'semantic-ui-react';
const nanoid = require('nanoid');
const styles = require('./PhotoSearch.sass');

class Photo {
  constructor(url) {
    const id = nanoid();
    this.id = id;
    this.url = url;
    this.alt = id;
    this.is = false;
  }
}
let photos = [
  new Photo('https://images5.cosmopolitan.ru/upload/img_cache/e48/e4812886bc5abe3d92a0f738958f4414_fitted_740x700.jpg'),
  new Photo('http://cdn.fishki.net/upload/post/2016/07/19/2016725/4-02.jpg'),
  new Photo('http://cdn.fishki.net/upload/post/201602/25/1861638/11_3.jpg'),
  new Photo('http://www.fresher.ru/manager_content/02-2016/kak-by-vyglyadeli-zvyozdy-gollivuda-esli-by-ix-lica-byli-simmetrichnymi/10.jpg'),
  new Photo('http://n1s2.hsmedia.ru/50/63/ed/5063ed9f9e03400a749ebe2123e2eeb0/500x600_1_08ce9b1a8a8dfdb73821fdab1480d263@500x600_0xd42ee437_20210599701431141753.jpeg'),
];

photos = photos.concat(photos,
    photos, photos, photos,
    photos);

const PhotoItem = () => {
  return <div>
    <img src="" alt=""/>
  </div>;
};

class PhotoSearch extends Component {
  state = {
    foundName: null
  };

  render() {
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
PhotoSearch.defaultProps = {};

export default PhotoSearch;
