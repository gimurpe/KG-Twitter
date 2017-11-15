/* eslint-disable no-noninteractive-element-interactions */
import React from 'react';
import { shape } from 'prop-types';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

const CommentPanel = ({ comment }) => (
  <div>
    <Card className="card--asComment">
      <CardBody className="card__body--asTwit">
        <CardImg
          className="img--user"
          width="10%"
          src={`../../../public/img/1.jpg`}
          alt="User Picture"
        />
        <CardTitle>{comment.name}</CardTitle>
        <CardText>{comment.value}</CardText>
      </CardBody>
    </Card>
  </div>
);

CommentPanel.propTypes = {
  comment: shape({ id: null, title: null, author: null }).isRequired,
};
export default CommentPanel;
