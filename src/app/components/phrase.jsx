import { h } from 'preact'

import Picker from './picker'

function stringify(attribute) {
  return attribute.replace(/-/g, ' ')
}

function Phrase({ attribute }) {
  const stringifiedAttribute = stringify(attribute)

  return (
    <div class="flex align-items--center justify-content--center height--100pct font-size--xl">
      <div class="margin-r--xs">Allison Weber is</div>
      <Picker attribute={stringifiedAttribute} />
      <div>.</div>
    </div>
  )
}

export default Phrase
