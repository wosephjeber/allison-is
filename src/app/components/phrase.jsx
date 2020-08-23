import { h } from 'preact'
import { useErrorBoundary } from 'preact/hooks'

import Container from './container'
import Picker from './picker'

function stringify(attribute) {
  return attribute.replace(/-/g, ' ')
}

function Phrase({ attribute }) {
  const stringifiedAttribute = stringify(attribute)

  return (
    <Container>
      <div class="margin-r--xs">Allison Weber is</div>
      <Picker attribute={stringifiedAttribute} />
      <div>.</div>
    </Container>
  )
}

export default Phrase
