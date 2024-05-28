import hangman from "../img/capital.png"
import "../css/main.css"

export default function Welcome(props: {category: string}) {



  return (
    <>
      <div className="wrapper">
        <p>Welcome to the <strong>HANGMAN</strong> game</p>
        <h2> Classical Game </h2>
        <img src={hangman} alt="Hangman Image.." width={200} height={200}/>
        <p>The hint category is: {props.category} </p>
      </div>
    </>
  );
}


