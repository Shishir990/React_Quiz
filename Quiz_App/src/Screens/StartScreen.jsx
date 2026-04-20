import { useQuiz } from "../Context/Context"

export function StartScreen(){
    const {dispatch}=useQuiz()

    return(
        <>
  
        <h2>Welcome to React Quiz</h2>
        <button onClick={()=>{dispatch({type:"Start"})}}>Start Quiz</button>
        </>
    )
}