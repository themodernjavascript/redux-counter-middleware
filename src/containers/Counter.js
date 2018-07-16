import React, { Component } from 'react'
import { connect } from 'react-redux'

import { increase, decrease } from '../actions'
import Counter from '../components/Counter'

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