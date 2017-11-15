/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { arrayOf, object } from 'prop-types';
import CommentPanel from './CommentPanel';

class AllCommentsModal extends React.Component {
  static propTypes = {
    twitComments: arrayOf(object).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
    return (
      <div className="inline-block">
        {/* <Button className="btn--tweet" onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button> */}
        <span
          onClick={() => this.toggle()}
          role="button"
          tabIndex={0}
          className="span--comments"
        >
          <img
            src="../../../public/icons/message.svg"
            alt="comments"
            className="icon--comments"
            id="comments"
          />
          <label htmlFor="comments" className="label--comments">
            {`${this.props.twitComments.length}`}
          </label>
        </span>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>All comments</ModalHeader>
          <ModalBody>
            {this.props.twitComments.map(comment => (
              <CommentPanel key={comment.value} comment={comment} />
            ))}
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AllCommentsModal;
