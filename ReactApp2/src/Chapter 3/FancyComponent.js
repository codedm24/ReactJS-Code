import FancyWidget from "./FancyWidget";

function FancyComponent(props)
{
    return(
      <>
        <FancyWidget
        widgetSize="huge"
        numberOfColumns="3"
        title="Welcome to FancyWidget"
        />
      </>  
    );
}

export default FancyComponent;