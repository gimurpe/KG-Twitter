/* eslint-disable */
import React, {Component} from 'react';
import {func, arrayOf, object, string} from 'prop-types'
import { Container, Row, Col} from 'reactstrap';


import LoginHeaderBar from './LoginHeaderBar'
import LoginForm from './LoginForm'

class Login extends Component {

    static propTypes ={
        allAccounts: arrayOf(object).isRequired,
        currentUser: string.isRequired,
        loadAllAccounts: func.isRequired,
        handleOnChange: func.isRequired,
        signIn: func.isRequired,
        loadHome: func.isRequired
    }

    componentDidMount = () => {
        this.props.loadAllAccounts();
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.currentUser !== this.props.currentUser){
            this.props.loadHome(nextProps.currentUser);
        }
    }

    render = () => (
        <Container>
            <LoginHeaderBar/>
            <Row>
                <Col lg={12}>
                    <LoginForm onChange={this.props.handleOnChange} onSubmit={this.props.signIn}/>
                </Col>
            </Row>
        </Container>
    )
}


export default Login;