import React from 'react';
import {func} from 'prop-types'
import { Card, CardBody,
  CardTitle, Button, Form, Label,Input, FormGroup } from 'reactstrap';

const LoginForm = ({ onChange, onSubmit }) => (
    <div>
      <Card className='card--asTwit'>
        <CardBody className='card__body--asTwit'>
          <CardTitle>
            Sign In
          </CardTitle>
          <Form>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input type="username" name="username" id="username" placeholder="username" onChange={e => onChange(e.target.value, 'currentUsername')}/>
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" name="password" id="password" placeholder="password" onChange={e => onChange(e.target.value, 'currentPassword')}/>
          </FormGroup>
          </Form>
          <Button onClick= {() => onSubmit()}>Login</Button>
        </CardBody>
      </Card>
    </div>
);

LoginForm.propTypes = {
  onChange: func.isRequired,
  onSubmit: func.isRequired
}

export default LoginForm;