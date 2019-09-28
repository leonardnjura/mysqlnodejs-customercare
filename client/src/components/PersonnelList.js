import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class PersonnelList extends Component {
  state = {
    items: [
      {
        personnel_id: '1',
        personnel_onames: 'Barack',
        personnel_fname: 'Obama',
        personnel_email: null,
        personnel_phone: '0733333333',
        personnel_password:
          '$2a$10$ECdOnZkH6ZRE9jzvUst4x.PNqKwgSHcaoceTxazjMRg1VojEpHh6S',
        personnel_status: '1',
        last_login: null,
        personnel_type_id: '2',
        reset_password: '0'
      },
      {
        personnel_id: '2',
        personnel_onames: 'Salma',
        personnel_fname: 'Nyagaka',
        personnel_email: null,
        personnel_phone: '0719191919',
        personnel_password:
          '$2a$10$ECdOnZkH6ZRE9jzvUst4x.PNqKwgSHcaoceTxazjMRg1VojEpHh6S',
        personnel_status: '1',
        last_login: null,
        personnel_type_id: '2',
        reset_password: '0'
      },
      {
        personnel_id: '3',
        personnel_onames: 'Pendo',
        personnel_fname: 'Elizabeth',
        personnel_email: null,
        personnel_phone: '0710101010',
        personnel_password:
          '$2a$10$ECdOnZkH6ZRE9jzvUst4x.PNqKwgSHcaoceTxazjMRg1VojEpHh6S',
        personnel_status: '1',
        last_login: null,
        personnel_type_id: '2',
        reset_password: '0'
      },
      {
        personnel_id: '7',
        personnel_onames: 'John',
        personnel_fname: 'Otieno',
        personnel_email: null,
        personnel_phone: '0722222222',
        personnel_password:
          '$2a$10$ECdOnZkH6ZRE9jzvUst4x.PNqKwgSHcaoceTxazjMRg1VojEpHh6S',
        personnel_status: '1',
        last_login: null,
        personnel_type_id: '2',
        reset_password: '0'
      }
    ]
  };

  render() {
    const { items } = this.state;

    return (
      <Container>
        <Button
          color="dark"
          style={{ marginBottom: '2rem' }}
          onClick={() => {
            const personnel_fname = prompt('Enter Personnel FirstName');
            if (personnel_fname) {
              this.setState(state => ({
                items: [
                  ...state.items,
                  { personnel_id: uuid(), personnel_fname }
                ]
              }));
            }
          }}
        >
          Add Personnel
        </Button>
        <ListGroup>
          <TransitionGroup className="personnel-list">
            {items.map(({ personnel_id, personnel_fname }) => (
              <CSSTransition key={personnel_id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    outline
                    color="danger"
                    size="sm"
                    onClick={() => {
                      this.setState(state => ({
                        items: state.items.filter(
                          item => item.personnel_id !== personnel_id
                        )
                      }));
                    }}
                  >
                    {' '}
                    &times;
                  </Button>

                  {personnel_fname}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

export default PersonnelList;
