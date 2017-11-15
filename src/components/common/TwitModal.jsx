/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input} from 'reactstrap';
import { func } from 'prop-types';

class TwitModal extends React.Component {

    static propTypes = {
        handleChangeOnTweetField: func.isRequired
      }

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div className='inline-block'>
        <Button className='btn--tweet' onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Compose a new Tweet</ModalHeader>
          <ModalBody>
          <Form>
            <FormGroup>
                <Input placeholder='What is happening?' type="textarea" name="text" id="exampleText" onChange={e => this.props.handleChangeOnTweetField(e.target.value , 'description')}/>
            </FormGroup>  
          </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => {
                this.toggle();
                this.props.onTwitSubmit();
                }
                }>Tweet</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default TwitModal;