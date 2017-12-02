import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GuestItem from './GuestItem';
import _ from 'lodash';
import { Table, Container, Header, Icon, Checkbox } from 'semantic-ui-react';


class GuestList extends Component {
  state = {
    onlyOnline: false
  };

  render() {
    let { items } = this.props;
    items = items.filter((item)=>{
      if(this.state.onlyOnline){
        return Boolean(item.online);
      }
      return true;
    });
    const onlineCount = items.filter((item) => {
      return item.online;
    }).length;
    const avgAge = Math.floor(items.reduce((prev, current) => {
          return Number(prev) + Number(current.age);
        }, 0) / (items.length > 0 ? items.length : 1));

    if (items.length > 0) {
      return <Container>
        <Header as='h2' icon textAlign='center'>
          <Icon name='users' circular/>
          <Header.Content>
            Гости заведения
          </Header.Content>
        </Header>
        <Table size='large'>
          <Table.Header>
            <Table.Row className={'font20px'}>
              <Table.HeaderCell singleLine textAlign='center'>Имя</Table.HeaderCell>
              <Table.HeaderCell textAlign='center'>Телефон</Table.HeaderCell>
              <Table.HeaderCell textAlign='center'>Возраст</Table.HeaderCell>
              <Table.HeaderCell style={{ paddingLeft: '48px' }}>Аудио</Table.HeaderCell>
              <Table.HeaderCell textAlign='center'>Онлайн
                <br/>
                <Checkbox label='Только онлайн'
                          checked={this.state.onlyOnline}
                          onChange={(e, data) => {
                            this.setState({ onlyOnline: data.checked });
                          }}/></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {
              items.map((item, key) => {
                return <GuestItem guest={item} key={key}/>
              })
            }
          </Table.Body>
          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell/>
              <Table.HeaderCell />
              <Table.HeaderCell textAlign='center' className={'font20px'}>
                Средний возраст: {avgAge}
              </Table.HeaderCell>
              <Table.HeaderCell className={'font20px'}>
                Общий жанр: Шансон
              </Table.HeaderCell>
              <Table.HeaderCell textAlign='center' className={'font20px'}>
                Всего онлайн: {onlineCount}
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </Container>;
    }
    return null;
  }
}

GuestList.propTypes = {};
GuestList.defaultProps = {};

export default GuestList;
