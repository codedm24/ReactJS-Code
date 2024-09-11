import PropTypes from 'prop-types';

function SiteLink(props)
{
    return(
        <p><a href={props.url}>{props.linkName}</a></p>
    );
}

SiteLink.propTypes = {
    linkName: PropTypes.node
}

export default SiteLink;