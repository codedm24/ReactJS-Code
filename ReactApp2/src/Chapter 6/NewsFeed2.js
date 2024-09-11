import { useState } from "react";

function NewsFeed2(props)
{
    const [date, setDate] = useState(new Date());
    const [headlines,setHeadlines] = useState([]);

    return(
        <>
            NewsFeed2
            <p>Headlines for {date.toLocaleString()}</p>
        </>
    )

}

export default NewsFeed2;