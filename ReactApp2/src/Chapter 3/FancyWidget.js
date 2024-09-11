function FancyWidget(props){
    return(
        <ul>
            <li>Widget size:{props.widgetSize}</li>
            <li>Number of Columns:{props.numberOfColumns}</li>
            <li>Title:{props.title}</li>
        </ul>
    );
}

export default FancyWidget;