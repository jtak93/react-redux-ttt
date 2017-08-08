import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Home from './Home'

import './style.css'

class HomeContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Home
        board={this.props.board}
      />
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

const mapStateToProps = state => {
  console.log(state)
  return {
    board: state.board
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer)
