/* eslint-disable no-noninteractive-element-interactions */
import React from 'react';
import { shape, func } from 'prop-types';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from 'reactstrap';

import CommentModal from './CommentModal';
import AllCommentsModal from './AllCommentsModal';

const TwitPanel = ({ twit, handleChangeOnCommentField, onCommentSubmit }) => (
  <div>
    <Card className="card--asTwit">
      <CardBody className="card__body--asTwit">
        <CardImg
          className="img--user"
          width="10%"
          src={`../../../public/img/${twit.poster}`}
          alt="User Picture"
        />
        <CardTitle>{twit.user}</CardTitle>
        <CardSubtitle>{twit.year}</CardSubtitle>
        <CardText>{twit.description}</CardText>
        <CardImg
          className="img--twit"
          top
          width="50%"
          src={`../../../public/img/${twit.poster}`}
          alt="Twit Picture"
        />
        <CommentModal
          className="modal--comments"
          twit={twit}
          buttonLabel="Comment"
          handleChangeOnCommentField={handleChangeOnCommentField}
          onCommentSubmit={onCommentSubmit}
        />
        <AllCommentsModal twitComments={twit.comments} />
      </CardBody>
    </Card>
  </div>
);

TwitPanel.propTypes = {
  twit: shape({ id: null, title: null, author: null }).isRequired,
  onCommentSubmit: func.isRequired,
  handleChangeOnCommentField: func.isRequired,
};
export default TwitPanel;
