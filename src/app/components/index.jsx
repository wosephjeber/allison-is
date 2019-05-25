import { h } from 'preact'

import Picker from './picker'

function App() {
  return (
    <div class="flex align-items--center justify-content--center height--100pct">
      <div class="margin-r--xs">Allison is</div>
      <Picker />
      <div>.</div>
    </div>
  )
}

export default App
