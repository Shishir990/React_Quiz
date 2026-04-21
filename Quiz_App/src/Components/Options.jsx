import { useQuiz } from "../Context/Context"
import "../Styles/Pages.css"
export function Options({options,Question}){
    const {dispatch,answer}=useQuiz()
    const isdisabled=answer!=null
    return(
        <div className="optionContainer">
            {
                options?.map(
                    (option,index)=>(
                           <div className="options">
                            <button disabled={isdisabled} className={`btn  ${ answer && Question.correctAnswer===index+1?"btn-correct":""} ${index+1===answer  &&  Question.correctAnswer!=index+1?"btn-selected":""}`}  onClick={()=>dispatch({type:"AnswerClicked",payload:index})} key={index}>{option}</button>
                           </div>                                                                                                                                           
                        
                    )
                )
            }
        </div>
    )
}