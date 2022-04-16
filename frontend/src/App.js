import React, { useState } from 'react'

const App = () => {
  const [toggleProjectDD, setProjectDD] = useState(false)
  const [toggleExperienceDD, setExperienceDD] = useState(false)
  const [toggleIntentionDD, setIntentionDD] = useState(false)

  const toggleOptionHandler = (toggleDD, setToggleDD, name) => () => {
    console.log(name)
    setExperienceDD(false)
    setProjectDD(false)
    setIntentionDD(false)
    setToggleDD(!toggleDD)
  }

  return (
    <div className='container'>
      <div className='item-title'>
        <h1 className='item-title-text'>Lander Joshua Vitug</h1>
      </div>

      <div className='item-about'>
        <h2 className='item-about-text'>about me</h2>
      </div>

      <Experiences toggleOption={toggleExperienceDD} toggleOptionHandler={toggleOptionHandler(toggleExperienceDD, setExperienceDD, '2')} />
      <Projects toggleOption={toggleProjectDD} toggleOptionHandler={toggleOptionHandler(toggleProjectDD, setProjectDD, '1')} />
      
      <Intentions toggleOption={toggleIntentionDD} toggleOptionHandler={toggleOptionHandler(toggleIntentionDD, setIntentionDD, '3')} />
    </div>
  )
}

const DisplayOptions = ({options, styleName}) => {
  return (
    <ul className='option'>
      {
        options.map(option => (
          <li className={styleName} key={option.id}>{option.val}</li>
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
      val: 'Test1 wow well im gonna go and boat',
      id: 0
    },
    {
      val: 'Test2',
      id: 1
    },
    {
      val: 'Test3',
      id: 2
    },
    {
      val: 'Test4',
      id: 3
    },
    {
      val: 'Test4',
      id: 4
    },
    {
      val: 'Test4',
      id: 5
    },
  ]

  return (
    <DisplayDD styleSuffix='left' ddTitle='projects' options={options} toggleOption={toggleOption} toggleOptionHandler={toggleOptionHandler} />
  )
}

const Intentions = ({toggleOption, toggleOptionHandler}) => {
  const options = [
    {
      val: 'Test1 wow well im gonna go and boat',
      id: 0
    },
    {
      val: 'Test2',
      id: 1
    },
    {
      val: 'Test3',
      id: 2
    },
    {
      val: 'Test4',
      id: 3
    },
    {
      val: 'Test4',
      id: 4
    },
    {
      val: 'Test4',
      id: 5
    },
  ]

  return (
    <DisplayDD styleSuffix='right' ddTitle='intentions' options={options} toggleOption={toggleOption} toggleOptionHandler={toggleOptionHandler} />
  )
}

const Experiences = ({toggleOption, toggleOptionHandler}) => {
  const options = [
    {
      val: 'Test1 wow well im gonna go and boat more more more! we need to test it for more!',
      id: 0
    },
    {
      val: 'Test2',
      id: 1
    },
    {
      val: 'Test3',
      id: 2
    },
    {
      val: 'Test4',
      id: 3
    },
    {
      val: 'Test4',
      id: 4
    },
    {
      val: 'Test4',
      id: 5
    },
  ]

  return (
    <DisplayDD styleSuffix='center' ddTitle='experiences' options={options} toggleOption={toggleOption} toggleOptionHandler={toggleOptionHandler} />
  )
}

export default App;
