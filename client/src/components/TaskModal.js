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
import { addTask } from '../actions/taskActions';
import uuid from 'uuid';
import IosPersonOutline from 'react-ionicons/lib/IosPersonOutline';
import IosAdd from 'react-ionicons/lib/IosAdd';


class TaskModal extends Component {
  state = {
    modal: false,
    customer_first_name: ''
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const newTask = {
      task_id: uuid(),
      customer_first_name: this.state.customer_first_name
    };

    // add task via addTask action
    this.props.addTask(newTask);

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
          Add Task
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle} className="theme">
            Add to Task List
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Input
                  type="text"
                  name="customer_first_name" // URI param | match what is in state | { id: uuid(), name: 'Bread' }
                  id="task"
                  placeholder="Enter task"
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
  task: state.task
});

export default connect(
  mapSateToProps,
  { addTask }
)(TaskModal);
