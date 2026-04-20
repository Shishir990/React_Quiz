import { useQuiz } from "../Context/Context"
import "../Styles/Pages.css"
export function Finish(){
    const {dispatch}=useQuiz()
    return(
        <div>
            <button className="next-finish-btn" onClick={()=>dispatch({type:"Finish"})}>Finish</button>
        </div>
    )
}