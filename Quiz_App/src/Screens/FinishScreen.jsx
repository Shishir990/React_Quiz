import { useQuiz } from "../Context/Context"
import "../Styles/Pages.css"
export function FinishScreen() {
    const { score, numQuestions, totalTime, secondsRemaining,questionsAttempted,questionsCorrect,highestScore,dispatch } = useQuiz()
    const secondTaken = totalTime - secondsRemaining;
    const minutes = Math.floor(secondTaken/60);
    const seconds = secondTaken%60
console.log(highestScore)
    return (
        <div>
            <div className="tableContainer">
                <table>
                    <tr>
                    
                        <th>
                            Score
                        </th>
                        <th>
                            Questions Attempted
                        </th>
                         <th>
                            Questions Correct
                        </th>
                        <th>
                         Highest score
                        </th>
                        <th>
                            Time Taken
                        </th>
                        <th>
                            Percentage
                        </th>
                    </tr>
                    <tr>
                        <td>
                            {score}/30
                        </td>
                        <td>
                            {questionsAttempted}
                        </td>
                           <td>
                            {questionsCorrect}
                        </td>
                         <td>
                            {highestScore}
                        </td>
                        <td>
                            {`${minutes<10 && "0"}${minutes}:${seconds<10?"0":""}${seconds}`}
                        </td>
                        <td>
                         {Math.round((score / 30) * 100)}%
                        </td>
                    </tr>

                </table>
            </div>
            <div>
                <button className="next-finish-btn" onClick={() => dispatch({ type: "Reset" })}>Play Again</button>
            </div>
        </div>
    )
}