import { Next } from "../Components/Next";
import { useQuiz } from "../Context/Context";
import {Finish} from "../Components/Finish"
import { Questions } from "../Components/Questions";
import { Timer } from "../Components/Timer";
import "../Styles/Pages.css"
export function QuestionScreen() {
    const {index,numQuestions,secondsRemaining}=useQuiz()
    const hasLastQuesReached=(index===numQuestions-1)
    return(
        <div>
            <Questions />
            <div>
              {
                hasLastQuesReached?<Finish/>:<Next/>
              }
            </div>
            <div className={`timer ${secondsRemaining<30?"timer-alert":""}`}>
            <div className="textContainer">
              Time Remaining :
            </div>
            <Timer/>
            </div>
        </div>
    )
}