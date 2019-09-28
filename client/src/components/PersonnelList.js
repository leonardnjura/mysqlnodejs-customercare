import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { getPersonnels, deletePersonnel } from '../actions/personnelActions';
import PropTypes from 'prop-types';

class PersonnelList extends Component {
  componentDidMount() {
    this.props.getPersonnels();
  }


  onDeleteClick = (id) => {
    this.props.deletePersonnel(id)
  }

  render() {
    const { personnels } = this.props.personnel;
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className="personnel-list">
            {personnels.map(({ personnel_id, personnel_fname }) => (
              <CSSTransition key={personnel_id} timeout={500} classNames="fade">
                <ListGroupItem>
                <Button
                    className="remove-btn"
                    outline
                    color="danger"
                    size="sm"
                    onClick={this.onDeleteClick.bind(this, personnel_id)}
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

PersonnelList.propTypes = {
  getPersonnels: PropTypes.func.isRequired,
  personnel: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  personnel: state.personnel
});

export default connect(
  mapStateToProps,
  { getPersonnels, deletePersonnel }
)(PersonnelList);
