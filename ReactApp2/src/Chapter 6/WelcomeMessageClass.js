import PropTypes from 'prop-types';
import {Component} from 'react';

class WelcomeMessageClass extends Component
{
    // static propTypes = {
    //     firstName:PropTypes.string
    // }

    render(){
        return (<h1>Welcome, {this.props.firstName}</h1>);
    }
}

WelcomeMessageClass.propTypes = {
    firstName:PropTypes.string
}

export default WelcomeMessageClass;