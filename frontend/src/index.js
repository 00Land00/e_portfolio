import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Base from './components/Base'
import App from './App'
import AboutMe from './components/AboutMe'
import ProjMonke from './components/ProjMonke'
import ProjTrain from './components/ProjTrain'
import BitSpace from './components/BitSpace'
import Taq from './components/Taq'
import Currently from './components/Currently'
import GameDev from './components/GameDev'
import WebDev from './components/WebDev'

import './index.css'

// create layout of each page
// gather screenshots and paragraphs of what it was
// add and tweak
// add github pages react then upload to github pages

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Base />}>
        <Route index element={<App />} />

        <Route path='about-me' element={<AboutMe />} />

        <Route path='proj-monke' element={<ProjMonke />} />
        <Route path='proj-train' element={<ProjTrain />} />

        <Route path='bit-space' element={<BitSpace />} />
        <Route path='taq' element={<Taq />} />

        <Route path='currently' element={<Currently />} />
        <Route path='game-dev' element={<GameDev />} />
        <Route path='web-dev' element={<WebDev />} />
      </Route>
    </Routes>
  </BrowserRouter>, 
  document.getElementById('root')
)