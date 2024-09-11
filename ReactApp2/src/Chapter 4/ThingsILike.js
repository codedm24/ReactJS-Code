import ThingsThatAreFunny from "./ThingsThatAreFunny";
import Joke from "./Joke";

function ThingsILike(props)
{
    return(
        <ThingsThatAreFunny>
            <ul>
                <li><Joke id="0" /></li>
                <li><Joke id="1" /></li>
            </ul>
        </ThingsThatAreFunny>
    );
}
export default ThingsILike;