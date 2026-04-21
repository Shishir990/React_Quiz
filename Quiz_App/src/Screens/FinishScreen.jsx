import { useQuiz} from "../Context/Context"
import "../Styles/Pages.css"
export function FinishScreen() {
    const { score,numQuestions,dispatch} = useQuiz()
    return (
        <div>
            <span>
                <h2>
                    {`Your score is ${score} out of ${numQuestions * 2} `}
                </h2></span>
                <div>
                    <button className="next-finish-btn" onClick={()=>dispatch({type:"Reset"})}>Play Again</button>
                </div>
        </div>
    )
}