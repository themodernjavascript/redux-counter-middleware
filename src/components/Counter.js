import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    increase: PropTypes.func.isRequired,
    decrease: PropTypes.func.isRequired,
  }

  render() {
    const { value, increase, decrease } = this.props

    return (
      <p>
        Clicked: {value} times
        {' '}
        <button onClick={() => increase()}>
          +
        </button>
        
        {' '}
        <button onClick={() => decrease()}>
          -
        </button>
      </p>
    )
  }
}

export default Counter