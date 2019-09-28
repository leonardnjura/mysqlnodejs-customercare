import React, { Component, Fragment } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Tooltip
} from 'reactstrap';
import { connect } from 'react-redux';
import { addPersonnel } from '../actions/personnelActions';
import uuid from 'uuid';
import IosPersonOutline from 'react-ionicons/lib/IosPersonOutline';
import IosAdd from 'react-ionicons/lib/IosAdd';


class PersonnelModal extends Component {
  state = {
    modal: false,
    personnel_fname: ''
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  toggleTooltip = () => {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const newPersonnel = {
      personnel_id: uuid(),
      personnel_fname: this.state.personnel_fname
    };

    // add personnel via addPersonnel action
    this.props.addPersonnel(newPersonnel);

    // close modal
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: '2rem' }}
          onClick={this.toggle}
        >
          <IosAdd fontSize="23px" color="#43853d" />
          Add Personnel
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle} className="theme">
            Add to Personnel List
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Input
                  type="text"
                  name="personnel_fname" // URI param | match what is in state | { id: uuid(), name: 'Bread' }
                  id="personnel"
                  placeholder="Enter personnel"
                  onChange={this.onChange}
                />
                <Button type="submit" style={{ marginTop: '2rem' }} block>
                  Save
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapSateToProps = state => ({
  personnel: state.personnel
});

export default connect(
  mapSateToProps,
  { addPersonnel }
)(PersonnelModal);
