import React from 'react';

import {
  Button,
  Card,
  CardBody,
  Col,
  Form, 
  FormFeedback,
  FormGroup,
  Input,
  Modal,
  ModalBody,
  Row
} from 'reactstrap';

import AdvancedModal from '../../../misc/modals/advanced-modal';
import classNames from "classnames";

class Component extends React.Component{
  state = {
    publicReason: '',
    privateReason: ''
  };
  
  constructor(){
    super();

    this.isValid = this.isValid.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
  }

  isValid(){
    return this.state.publicReason !== '' &&
      this.state.privateReason !== '';
  }

  onSubmit(event) {
    event.preventDefault();

    if(this.state.warning === '') return;

    this.props.action(this.state);
  }

  render(){
    return (
      <AdvancedModal
        isOpen={false}
      >
        {(modal) =>  (
          <>
            <Button
              color="primary"
              onClick={modal.open}
            >
              警告
            </Button>

            <Modal
              className="modal-dialog-centered"
              isOpen={modal.isOpen}
              toggle={modal.close}
            >
              <ModalBody className="p-0">
                <Card className="bg-secondary shadow border-0">
                  <CardBody className="mx-4 my-2 text-center">
                    <Form
                      onSubmit={this.onSubmit}
                    >
                      <Row>
                        <Col>
                          <label
                            className="form-control-label"
                          >
                            公开原因
                          </label>
                          <FormGroup>
                            <Input
                              className="form-control-alternative"
                              type="text"
                              value={this.state.publicReason}
                              onChange={event => this.setState({ publicReason: event.target.value, privateReason: event.target.value })}
                              invalid={this.state.publicReason === ''}
                            />
                            <FormFeedback>
                              警告原因不能为空.
                            </FormFeedback>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <label
                            className="form-control-label"
                          >
                            私下原因
                          </label>
                          <FormGroup>
                            <Input
                              className="form-control-alternative"
                              type="text"
                              value={this.state.privateReason}
                              onChange={event => this.setState({ privateReason: event.target.value })}
                              invalid={this.state.privateReason === ''}
                            />
                            <FormFeedback>
                              警告原因不能为空.
                            </FormFeedback>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Button
                        className={classNames('mt-2', { disabled: !this.isValid()})}
                        color="primary"
                      >
                        警告
                      </Button>
                    </Form>
                  </CardBody>
                </Card>
              </ModalBody>
            </Modal>
          </>
        )}
      </AdvancedModal>
    );
  }
}

export default Component;