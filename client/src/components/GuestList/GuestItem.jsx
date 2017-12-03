import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header, Table, Rating, Icon, Label } from 'semantic-ui-react'
import { List, Image } from 'semantic-ui-react';
import defaultMusicImage from '../../static/music.jpg';
import _ from 'lodash';

class GuestItem extends Component {
  render() {
    const { guest } = this.props;
    return (
        <Table.Row>
          <Table.Cell>
            <Header as='h2' textAlign='center'>
              {guest.name}
              <span> </span>
              <a href={`https://vk.com/id${guest.vkId}`} target="_blank">
                <Icon name={'vk'}/>
              </a>
            </Header>
          </Table.Cell>
          <Table.Cell textAlign='center'>
            <div>
              <span className={'font20px'}>{guest.phoneNumber}</span>
              <a href={`tel:${guest.phoneNumber}`} style={{ marginLeft: '10px' }}>
                <Icon name="phone" size={'large'} circular/>
              </a>
            </div>
          </Table.Cell>
          <Table.Cell textAlign='center'>
            <Label circular color={'grey'} className={'font20px'}>
              {guest.age}
            </Label>
          </Table.Cell>
          <Table.Cell>
            <List>
              {guest.audios.map((audio, key) => {
                return  <List.Item  key={key}>
                      <Image avatar src={defaultMusicImage} />
                      <List.Content>
                        <List.Header as='a'>{audio}</List.Header>
                        <List.Description>
                          Последний раз <b>{2} мин. назад</b>
                        </List.Description>
                      </List.Content>
                    </List.Item>
              })}
            </List>
          </Table.Cell>
          <Table.Cell textAlign='center'>
            <Label circular color={guest.online ? 'green' : 'red'} className={'font20px'}></Label>
          </Table.Cell>
        </Table.Row>
    );
  }
}

GuestItem.propTypes = {};
GuestItem.defaultProps = {};

export default GuestItem;
