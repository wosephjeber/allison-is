import { h, Component } from 'preact'
import classnames from 'classnames'

class Container extends Component {
  constructor() {
    super()

    this.state = { theme: null }
  }

  render() {
    const { theme } = this.state

    const className = classnames('themed-container', {
      [`theme--${theme}`]: theme
    })
  
    return (
      <div class={className}>
        {this.props.children}
        <div class="theme--options">
          <button
            class="theme--option theme--default"
            onClick={() => {
              this.setState({ theme: null })
            }}
          />
          <button
            class="theme--option theme--purple"
            onClick={() => {
              this.setState({ theme: 'purple' })
            }}
          />
        </div>
      </div>
    )
  }
}

export default Container
