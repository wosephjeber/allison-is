import { h } from 'preact'
import Router from 'preact-router';

import Phrase from './phrase'

function App() {
  return (
    <Router>
      <Phrase path="/:attribute?" />
    </Router>
  )
}

export default App
