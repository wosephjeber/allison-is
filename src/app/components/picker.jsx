import { h, Component } from 'preact'

const ATTRIBUTES = [
  'awesome',
  'a writer',
  'available for work',
  'obsessed with cookies'
]

const ITEM_HEIGHT = 1.5

class Picker extends Component {
  constructor() {
    super()

    this.state = {
      editing: false,
      selectedIndex: 0
    }
  }

  handleClickAttribute = index => {
    this.setState({ editing: false, selectedIndex: index })
  }

  handleClickEdit = () => {
    this.setState({ editing: true })
  }

  handleIncrement = () => {
    this.setState({ selectedIndex: this.state.selectedIndex + 1 })
  }

  handleDecrement = () => {
    this.setState({ selectedIndex: this.state.selectedIndex - 1 })
  } 

  render() {
    const { editing, selectedIndex } = this.state

    if (!editing) return (
      <button class="btn--unstyled" onClick={this.handleClickEdit}>
        {ATTRIBUTES[selectedIndex]}
      </button>
    )

    const totalHeight = ATTRIBUTES.length * ITEM_HEIGHT;
    const itemOffset = ((totalHeight - (selectedIndex * ITEM_HEIGHT * 2)) / 2) - (ITEM_HEIGHT / 2)

    return (
      <div class="slot-picker">
        <button
          class="slot-picker--btn slot-picker--decrement"
          onClick={this.handleDecrement}
        />
        <div
          class="slot-picker--outer"
          style={{ height: `${totalHeight}em` }}
        >
          <nav
            class="slot-picker--inner"
            style={{ top: `${itemOffset}em` }}
          >
            {ATTRIBUTES.map((attribute, index) => (
              <a
                key={attribute}
                onClick={() => {
                  this.handleClickAttribute(index)
                }}
                style={{
                  height: `${ITEM_HEIGHT}em`,
                  opacity: 1 - ((Math.abs(selectedIndex - index)) * .5)
                }}
              >
                {attribute}
              </a>
            ))}
          </nav>
        </div>
        <button
          class="slot-picker--btn slot-picker--increment"
          onClick={this.handleIncrement}
        />
      </div>
    )
  }
}

export default Picker
