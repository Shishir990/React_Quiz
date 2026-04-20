import { useQuiz} from "../Context/Context"

export function FinishScreen() {
    const { score,numQuestions,dispatch} = useQuiz()
    return (
        <div>
            <span>
                <h2>
                    {`Your score is ${score} out of ${numQuestions * 2} `}
                </h2></span>
                <div>
                    <button onClick={()=>dispatch({type:"Reset"})}>Play Again</button>
                </div>
        </div>
    )
}