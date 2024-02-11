import React from 'react'
import BenefitsContent from './components/advantage/AdvantagesContent'
import CourseContent from './components/content/CourseContent'
import Header from './components/header/Header'
import HomeContent from './components/home/HomeContent'
import FormRegister from './components/register/FormRegister'

import './App.scss'

function App() {

  return (
    <div>
      <Header/>
      <HomeContent/>
      <CourseContent/>
      <BenefitsContent/>
      <FormRegister/>
    </div>
  )
}

export default App
