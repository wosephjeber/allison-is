import { h, Component } from 'preact'

const ATTRIBUTES = [
  'awesome',
  'a writer',
  'available for work',
  'obsessed with cookies',
  'a Californian'
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
    this.setState({ selectedIndex: index }, () => {
      setTimeout(() => {
        this.setState({ editing: false })
      }, 200)
    })
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
      <button class="btn--reset" onClick={this.handleClickEdit}>
        {ATTRIBUTES[selectedIndex]}
      </button>
    )

    const totalHeight = ATTRIBUTES.length * ITEM_HEIGHT;
    const itemOffset = ((totalHeight - (selectedIndex * ITEM_HEIGHT * 2)) / 2) - (ITEM_HEIGHT / 2)

    return (
      <div class="slot-picker">
        <div class="slot-picker--input-outline" />
        <button
          class="slot-picker--btn"
          disabled={selectedIndex <= 0}
          onClick={this.handleDecrement}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="25" height="25">
            <polyline
              fill="none"
              points="2.5 17.5 12.5 7.5 22.5 17.5"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="miter"
            />
          </svg>
        </button>
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
                  opacity: .8 - ((Math.abs(selectedIndex - index)) * .3)
                }}
              >
                {attribute}
              </a>
            ))}
          </nav>
        </div>
        <button
          class="slot-picker--btn"
          disabled={selectedIndex + 1 >= ATTRIBUTES.length}
          onClick={this.handleIncrement}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="25" height="25">
            <polyline
              fill="none"
              points="2.5 7.5 12.5 17.5 22.5 7.5"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="miter"
            />
          </svg>
        </button>
      </div>
    )
  }
}

export default Picker
