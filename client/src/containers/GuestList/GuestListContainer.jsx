import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GuestList from '../../components/GuestList/GuestList';
import ShadowScrollbars from '../../components/common/ShadowScrollbars/ShadowScrollbars';
import _ from 'lodash';
import request from 'superagent';
import API from '../../constants/api.js';

const nanoid = require('nanoid');


class Guest {
  constructor() {
    const id = nanoid();
    this.vkId = id;
    this.name = 'Andrew';
    this.phoneNumber = '+7(999)-548-19-20';
    this.age = _.random(18, 26);
    this.audios = [
      "Круг",
      "Guf",
      "..."
    ];
    this.online = _.random(0, 1, true) > 0.3;
  }
}

let items = [
  new Guest(),
  new Guest(),
  new Guest(),
  new Guest(),
  new Guest(),
  new Guest(),
  new Guest(),
  new Guest(),
  new Guest(),
  new Guest(),
  new Guest(),
  new Guest(),
  new Guest(),
  new Guest(),
  new Guest()
];

items = items.sort((a, b) => {
  return Number(b.online) - Number(a.online);
});

class GuestListContainer extends Component {
  state = { items: [] };

  componentWillMount() {
    request
        .get(API.BackendApi(`/getAllClients`))
        .type('json')
        .timeout({
          response: 60000,  // Wait 5 seconds for the server to start sending,
          deadline: 70000, // but allow 1 minute for the file to finish loading.
        })
        .end((err, res) => {
          if(res.body){
            this.setState({ items: res.body });
          }
          else{
            console.log(res);
          }
        });
    // setTimeout(()=>{
    //
    // },100);
  }

  render() {
    console.log(items);
    return (
        <div className="wrapper">
          {/*<ShadowScrollbars style={{ height: '100%'}}>*/}
          <GuestList items={items}/>
          {/*</ShadowScrollbars>*/}
        </div>
    );
  }
}

GuestListContainer.propTypes = {};
GuestListContainer.defaultProps = {};

export default GuestListContainer;
