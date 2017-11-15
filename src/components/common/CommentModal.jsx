/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
} from 'reactstrap';
import { func, shape } from 'prop-types';

class CommentModal extends React.Component {
  static propTypes = {
    handleChangeOnCommentField: func.isRequired,
    twit: shape({}).isRequired,
    onCommentSubmit: func.isRequired,
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
        <span
          onClick={() => this.toggle()}
          role="button"
          tabIndex={0}
          className="span--comments"
        >
          <img
            src="../../../public/icons/twitter.svg"
            alt="comments"
            className="icon--comments"
            id="comments"
          />
        </span>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>{`Response To ${this.props.twit
            .user}`}</ModalHeader>
          <ModalBody>
            <div>
              <Card className="card--asCommentTwit">
                <CardBody className="card__body--asTwit">
                  <CardImg
                    className="img--user"
                    width="10%"
                    src={`../../../public/img/${this.props.twit.poster}`}
                    alt="User Picture"
                  />
                  <CardTitle>{this.props.twit.user}</CardTitle>
                  <CardSubtitle>{this.props.twit.year}</CardSubtitle>
                  <CardText>{this.props.twit.description}</CardText>
                </CardBody>
              </Card>
            </div>
            <Form>
              <FormGroup>
                <Input
                  placeholder="What is happening?"
                  type="textarea"
                  name="text"
                  id="exampleText"
                  onChange={e =>
                    this.props.handleChangeOnCommentField(
                      e.target.value,
                      'newComment',
                    )}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => {
                this.toggle();
                this.props.onCommentSubmit(this.props.twit.imdbID);
              }}
            >
              Tweet
            </Button>{' '}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default CommentModal;
