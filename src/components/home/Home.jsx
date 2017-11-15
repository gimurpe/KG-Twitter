import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import { func, arrayOf, object, string } from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

import TwitPanel from '../common/TwitPanel';
import HeaderBar from '../common/HeaderBar';

class Home extends Component {
  static propTypes = {
    fetchAllTwits: func.isRequired,
    allTwits: arrayOf(object).isRequired,
    currentUser: string.isRequired,
    handleChangeOnTweetField: func.isRequired,
    createNewTwit: func.isRequired,
    createNewComment: func.isRequired,
    handleOnChange: func.isRequired,
  };

  componentDidMount = () => {
    this.props.fetchAllTwits(this.props.currentUser);
  };

  submitTwit = () => {
    /* eslint'disable */
    console.log('THE CURRENT', this.props.currentUser);
    this.props.createNewTwit(this.props.currentUser);
  };

  submitComment = twitId => {
    this.props.createNewComment(this.props.currentUser, twitId);
  };

  render = () => (
    <Container>
      <HeaderBar
        handleChangeOnTweetField={this.props.handleChangeOnTweetField}
        onTwitSubmit={this.submitTwit}
      />
      {this.props.allTwits.map(twit => (
        <Row key={uuidv4()}>
          <Col>
            <TwitPanel
              twit={twit}
              handleChangeOnTweetField={this.props.handleChangeOnTweetField}
              handleChangeOnCommentField={this.props.handleOnChange}
              onTwitSubmit={this.submitTwit}
              onCommentSubmit={this.submitComment}
            />
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default Home;
