import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { ContextProvider, useQuiz } from './Context/Context'
import {  ErrorScreen } from './Screens/ErrorScreen'
import { StartScreen } from './Screens/StartScreen'
import { QuestionScreen } from './Screens/QuestionScreen'
import { FinishScreen } from './Screens/FinishScreen'
import { Footer } from './Components/Footer'
import { LoadingScreen } from './Screens/LoadingScreen'
import {Header} from "./Components/Header"
import {Main} from "./Components/Main"
function App() {

  const { status } = useQuiz()

  return (
    <>
      <Header />
      <Main>
        {status === "loading" && <LoadingScreen/>}
        {status === "Error" && <ErrorScreen />}
        {status === "ready" && <StartScreen />}
        {status === "start" && <QuestionScreen />}
        {status === "finished" && <FinishScreen />}
      </Main>
      <Footer/>
    </>
  )
}

export default App
