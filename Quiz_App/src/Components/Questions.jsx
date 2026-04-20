import { useQuiz } from "../Context/Context"
import { Options } from "./Options"
import "../Styles/Pages.css"
export function Questions() {
    const { Questions, index } = useQuiz()
    const Question = Questions[index]
    return (
        <div >
            <div className="questionContainer">
            <span>{`Q) ${Question?.question}`}</span>
            </div>
            <Options options={Question?.options} Question={Question} />
        </div>
    )
}