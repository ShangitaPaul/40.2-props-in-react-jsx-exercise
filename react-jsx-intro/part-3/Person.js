const Max_Name_Length = 10;
/*
*Props: name, age, hobbies: array ["music", "cats", surfing"]
*/

// function Person (props) {


function Person(name, age, hobbies) {
    const voteText = age >= 18 ? "can vote" : "can't vote";
    const hobbieslist = hobbies.map(hobby => <li>{hobby}</li>);
    return (
        <div>
            <p> User Info </p>
            <ul>
                <li>Name: {name.slice(0, Max_Name_Length)}</li>
                <li>Age: {age}</li>
                <ul>Hobbies: {hobbieslist}</ul>

                

            </ul>
            <p>{name} {voteText}</p>
        </div>
    );
}