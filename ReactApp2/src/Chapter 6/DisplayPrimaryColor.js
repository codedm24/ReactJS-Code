import PropTypes from 'prop-types';

function DisplayPrimaryColor(props)
{
    return(<p>You picked {props.primaryColor}</p>);
}

DisplayPrimaryColor.propTypes = {
    primaryColor : PropTypes.oneOf(['red','yellow','blue'])
}

export default DisplayPrimaryColor;