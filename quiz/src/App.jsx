import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Quiz from './Component/quizpage'
import './App.css'
import questions from './resources/quizQuestion.json'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Quiz questions={questions}/>       
    </>
  )
}

export default App
