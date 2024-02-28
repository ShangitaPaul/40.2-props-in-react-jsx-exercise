// function Tweet (props) {
//   return (
//     <div>
//       <p>{props.username}</p>
//       <p>{props.name}</p>
//       <p>{props.date}</p>
//       <p>{props.message}</p>
//     </div>
//   )
// }

function Tweet({ username, name, date, message }) {
    return (
        <div> className="tweet">
            <span className="username">{username}</span>
            <span className="date" > {date}</span >
            <p>{message}</p>
        </div>
    );
}