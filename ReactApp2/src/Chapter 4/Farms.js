import Farm from "./Farm";

export default function Farms(){
    return (
        <>
        <Farm farmer="Old Mcdonald"
        animals={['pigs','cows','chickens']}/>
        <Farm farmer="Mr. Jones"
        animals={['pigs','horses','donkey','goat']}/>
        </>
    );
}