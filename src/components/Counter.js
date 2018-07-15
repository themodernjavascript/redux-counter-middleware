import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { increase, decrease } from '../actions'

class Counter extends Component {
  static propTypes = {
    // value: PropTypes.number.isRequired,
    // onIncrement: PropTypes.func.isRequired,
    // onDecrement: PropTypes.func.isRequired
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props

    return (
      <p>
        Clicked: {value} times
        {' '}
        <button onClick={() => this.props.increase()}>
          +
        </button>
        {' '}
        <button onClick={() => this.props.decrease()}>
          -
        </button>
      </p>
    )
  }
}

function mapStateToProps(state) {
  return {
    value: state
  }
}

const mapDispatchToProps = dispatch => ({
  increase: () => {
    dispatch(increase)
  },
  decrease: () => {
    dispatch(decrease)
  }
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Counter)