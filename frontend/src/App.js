import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

import './styles/App.css'

const App = () => {
  const [toggleProjectDD, setProjectDD] = useState(false)
  const [toggleExperienceDD, setExperienceDD] = useState(false)
  const [toggleIntentionDD, setIntentionDD] = useState(false)

  const toggleOptionHandler = (toggleDD, setToggleDD) => () => {
    setExperienceDD(false)
    setProjectDD(false)
    setIntentionDD(false)
    setToggleDD(!toggleDD)
  }

  return (
    <>
      <AboutMe />

      <Experiences toggleOption={toggleExperienceDD} toggleOptionHandler={toggleOptionHandler(toggleExperienceDD, setExperienceDD)} />
      <Projects toggleOption={toggleProjectDD} toggleOptionHandler={toggleOptionHandler(toggleProjectDD, setProjectDD)} />
      <Intentions toggleOption={toggleIntentionDD} toggleOptionHandler={toggleOptionHandler(toggleIntentionDD, setIntentionDD)} />
    </>
  )
}

const NavigateTo = (urlName) => {
  const navigate = useNavigate()
  return () => {
    navigate("/" + urlName)
  }
}

const DisplayOptions = ({options, styleName}) => {
  return (
    <ul className='option'>
      {
        options.map(option => (
          <li className={styleName} key={option.id} onClick={NavigateTo(option.val)}>{option.title}</li>
        ))
      }
    </ul>
  )
}

const DisplayDD = ({styleSuffix, ddTitle, options, toggleOption, toggleOptionHandler}) => (
  <div className={'item-' + styleSuffix}>
    <h2 className={'item-about-' + styleSuffix} onClick={toggleOptionHandler}>{ddTitle}</h2>
    {toggleOption ? <DisplayOptions options={options} styleName={styleSuffix + '-option'} /> : ''}
  </div>
)

const Projects = ({toggleOption, toggleOptionHandler}) => {
  const options = [
    {
      title: 'proj-train',
      val: 'proj-train',
      id: 0
    },
    {
      title: 'proj-monke',
      val: 'proj-monke',
      id: 1
    }
  ]

  return (
    <DisplayDD styleSuffix='left' ddTitle='projects' options={options} toggleOption={toggleOption} toggleOptionHandler={toggleOptionHandler} />
  )
}

const Intentions = ({toggleOption, toggleOptionHandler}) => {
  const options = [
    {
      title: 'currently working on ...',
      val: 'currently',
      id: 0
    },
    {
      title: 'game development inspirations',
      val: 'game-dev',
      id: 1
    },
    {
      title: 'web development mindset',
      val: 'web-dev',
      id: 2
    }
  ]

  return (
    <DisplayDD styleSuffix='right' ddTitle='intentions' options={options} toggleOption={toggleOption} toggleOptionHandler={toggleOptionHandler} />
  )
}

const Experiences = ({toggleOption, toggleOptionHandler}) => {
  const options = [
    {
      title: 'Taq Automotive Intelligence',
      val: 'taq',
      id: 0
    },
    {
      title: 'Bit Space Development Ltd.',
      val: 'bit-space',
      id: 1
    }
  ]

  return (
    <DisplayDD styleSuffix='center' ddTitle='experiences' options={options} toggleOption={toggleOption} toggleOptionHandler={toggleOptionHandler} />
  )
}

const AboutMe = () => {
  return (
    <div className='item-about'>
      <h2 className='item-about-text' onClick={NavigateTo('about-me')}>about me</h2>
    </div>
  )
}

export default App;
