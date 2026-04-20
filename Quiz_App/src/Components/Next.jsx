import { useQuiz } from "../Context/Context"
import "../Styles/Pages.css"
export function Next(){
    const {dispatch}=useQuiz()
    return(
        <div>
            <button   className="next-finish-btn"onClick={()=>dispatch({type:"Next"})}>Next</button>
        </div>
    )
}