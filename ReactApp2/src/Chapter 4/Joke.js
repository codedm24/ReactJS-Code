const Joke = (props) =>{
    const jokes = [
        'Did you hear about the mathematician who is afraid of negative numbers?',
        'What sound does a limping turkey make?'
    ];
    return (jokes[props.id]);
}

export default Joke;