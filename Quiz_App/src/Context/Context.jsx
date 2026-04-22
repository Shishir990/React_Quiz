import { createContext, useEffect, useReducer, useContext } from "react";

const Context = createContext();
const BASE_URL = "http://localhost:9000/Question";
const initialState = {
  Questions: [],
  status: "loading", // loading, ready, error, start, finished
  score: 0,
  index: 0,
  answer: null,
  secondsRemaining:0
};


function reducer(state, action) {
  switch (action.type) {

    case "dataReceived":
      return {
        ...state,
        Questions: action.payload,
        status: "ready"
      };

    case "Error":
      return {
        ...state,
        status: "Error"
      };

    case "Start":
      return {
        ...state,
        status: "start",
        secondsRemaining:action.payload*10
      };

    case "AnswerClicked": {

      const currentQues = state.Questions[state.index];
      const answer = action.payload + 1;

      if (currentQues.correctAnswer === answer) {
        return {
          ...state,
          score: state.score + currentQues.marks,
          answer: answer
        };
      }

      return {
        ...state,
        answer: answer
      };
    }

    case "Next":
      return {
        ...state,
        index: state.index + 1,
        answer: null
      };

      case "tick":{
        return{
          ...state,
          secondsRemaining:state.secondsRemaining-1,
          status:state.secondsRemaining===0?"finished":state.status
        }
      }

    case "Finish":
      return {
        ...state,
        status: "finished"  
      };
        case "Reset":
      return {
        ...initialState,
        Questions:state.Questions,
        status:"ready",
        Questions:state.Questions
        
      };
   
    default:
      return state;
  }
}

export function ContextProvider({ children }) {

  const [{ Questions, status, score, index, answer ,secondsRemaining}, dispatch] =
    useReducer(reducer, initialState);
 const numQuestions = Questions?.length;
  async function fetchQues() {
    try {
      const res = await fetch(BASE_URL);
      const data = await res.json();

      dispatch({
        type: "dataReceived",
        payload: data
      });

    } catch (e) {
      console.log(e);

      dispatch({
        type: "Error"
      });
    }
  }

  useEffect(() => {
    fetchQues();
  }, []);

 
console.log(Questions)
  return (
    <Context.Provider
      value={{
        Questions,
        status,
        index,
        answer,
        score,
        numQuestions,
        secondsRemaining,
        dispatch
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function useQuiz() {
  return useContext(Context);
}