import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import PhotoSearch from '../../components/PhotoSearch/PhotoSearch';
// import people1 from '../../static/people/andr1.jpg';
// import people2 from '../../static/people/Алексей Катцын.jpg';
// import people3 from '../../static/people/Алексей Михайлов.jpg';
// import people4 from '../../static/people/Анастасия Козлова.jpg';
// import people5 from '../../static/people/Виктория Соломахина.jpg';
// import people6 from '../../static/people/Денис Санин.jpg';
// import people7 from '../../static/people/Дмитрий Анохин.jpg';
// import people8 from '../../static/people/Дмитрий Бондарев.jpg';
// import people9 from '../../static/people/Евгений Нечаев.jpg';
// import people10 from '../../static/people/Елена Киреева.jpg';
// import people11 from '../../static/people/Ирина Гофман.jpg';
// import people12 from '../../static/people/Максим Белозеров.jpg';
// import people13 from '../../static/people/Ольга Касьянова.jpg';
// import people14 from '../../static/people/Слава Паринов.jpg';
// import people15 from '../../static/people/Юля Яковлева.jpg';

import API from '../../constants/api.js';
import request from 'superagent';

const people1 = 'http://127.0.0.1:8080/1.jpg';
const people2 = 'http://127.0.0.1:8080/2.jpg';
const people3 = 'http://127.0.0.1:8080/3.jpg';
const people4 = 'http://127.0.0.1:8080/4.jpg';
const people5 = 'http://127.0.0.1:8080/5.jpg';
const people6 = 'http://127.0.0.1:8080/6.jpg';
const people7 = 'http://127.0.0.1:8080/7.jpg';
const people8 = 'http://127.0.0.1:8080/8.jpg';
const people9 = 'http://127.0.0.1:8080/9.jpg';
const people10 = 'http://127.0.0.1:8080/10.jpg';
const people11 = 'http://127.0.0.1:8080/11.jpg';
const people12 = 'http://127.0.0.1:8080/12.jpg';
const people13 = 'http://127.0.0.1:8080/13.jpg';
const people14 = 'http://127.0.0.1:8080/14.jpg';
const people15 = 'http://127.0.0.1:8080/15.jpg';

const nanoid = require('nanoid');


class Photo {
  constructor(url, found = false, name = null) {
    const id = nanoid();
    this.id = id;
    this.url = url;
    this.alt = id;
    this.name = name;
    this.found = found;
  }
}
let photos = [
  new Photo(people1, false, 'Андрей'),
  new Photo(people2, false, 'Никита'),
  new Photo(people3, false, 'Дарья'),
  new Photo(people4, false, 'Оля'),
  new Photo(people5, false, 'Гена'),
  new Photo(people6, false, 'Миша'),
  new Photo(people7, false, 'Павел'),
  new Photo(people8, false, 'Иван'),
  new Photo(people9, false, 'Екатерина'),
  new Photo(people10, false, 'Настя'),
  new Photo(people11, false, 'Иван'),
  new Photo(people12, false, 'Юля'),
  new Photo(people13, false, 'Влад'),
  new Photo(people14, false, 'Ира'),
  new Photo(people15, false, 'Олег')
];

// photos = photos.concat(photos,
//     photos,
//     photos, photos,
//     photos);

class PhotoSearchContainer extends Component {
  state = {
    photos,
    cameraPhoto: API.BackendApi('/test.png'),
    foundPhoto: null
  };

  componentWillMount() {
    request
        .get(API.BackendApi(`/getPhotoUrl/${this.props.userId}`))
        .type('json')
        .end((err, res) => {
          this.setState({ foundPhoto: res.body });
        });
    const morePhotos = setInterval(() => {
      const newPhotos = [].concat(this.state.photos, _.shuffle(this.state.photos));

      if(this.state.foundPhoto){
        newPhotos.push(new Photo(this.state.foundPhoto.vkPhotoUrl, true, this.state.foundPhoto.name));
        newPhotos.push(new Photo(people14));
        clearInterval(morePhotos);
      }
      this.setState({ photos: newPhotos });
    }, 15 * 500);
  }

  render() {
    return (
        <PhotoSearch
            photos={this.state.photos}
            foundPhoto={this.state.foundPhoto}
            cameraPhoto={this.state.cameraPhoto}/>
    );
  }
}

PhotoSearchContainer.propTypes = {};
PhotoSearchContainer.defaultProps = {
  userId: 0
};

export default PhotoSearchContainer;
