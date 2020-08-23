import { h } from 'preact'
import Router from 'preact-router';

import Form from './form'
import Story from './story'

function App() {
  return (
    <div class="flex flex-col items-center justify-center min-h-full p-4 sm:p-8">
      <h1 class="text-3xl font-bold mb-8">Mystery MadLib</h1>
      <Router>
        <Form path="/so-lucky" />
        <Story path="/so-lucky/right" />
      </Router>
    </div>
  )
}

export default App
