import { Next } from "../Components/Next";
import { useQuiz } from "../Context/Context";
import {Finish} from "../Components/Finish"
import { Questions } from "../Components/Questions";

export function QuestionScreen() {
    const {index,numQuestions}=useQuiz()
    const hasLastQuesReached=(index===numQuestions-1)
    return(
        <div>
            <Questions />
            <div>
              {
                hasLastQuesReached?<Finish/>:<Next/>
              }
            </div>
        </div>
    )
}