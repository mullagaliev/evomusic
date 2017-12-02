import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PhotoSearch from '../../components/PhotoSearch/PhotoSearch';
import people1 from '../../static/people/andr1.jpg';
import people2 from '../../static/people/Алексей Катцын.jpg';
import people3 from '../../static/people/Алексей Михайлов.jpg';
import people4 from '../../static/people/Анастасия Козлова.jpg';
import people5 from '../../static/people/Виктория Соломахина.jpg';
import people6 from '../../static/people/Денис Санин.jpg';
import people7 from '../../static/people/Дмитрий Анохин.jpg';
import people8 from '../../static/people/Дмитрий Бондарев.jpg';
import people9 from '../../static/people/Евгений Нечаев.jpg';
import people10 from '../../static/people/Елена Киреева.jpg';
import people11 from '../../static/people/Ирина Гофман.jpg';
import people12 from '../../static/people/Максим Белозеров.jpg';
import people13 from '../../static/people/Ольга Касьянова.jpg';
import people14 from '../../static/people/Слава Паринов.jpg';
import people15 from '../../static/people/Юля Яковлева.jpg';


const nanoid = require('nanoid');


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
  new Photo(people1),
  new Photo(people2),
  new Photo(people3),
  new Photo(people4),
  new Photo(people5),
  new Photo(people6),
  new Photo(people7),
  new Photo(people8),
  new Photo(people9),
  new Photo(people10),
  new Photo(people11),
  new Photo(people12),
  new Photo(people13),
  new Photo(people14),
  new Photo(people15)
];

photos = photos.concat(photos,
    photos, photos, photos,
    photos);

class PhotoSearchContainer extends Component {
  render() {
    return (
        <PhotoSearch photos={photos}/>
    );
  }
}

PhotoSearchContainer.propTypes = {};
PhotoSearchContainer.defaultProps = {};

export default PhotoSearchContainer;
