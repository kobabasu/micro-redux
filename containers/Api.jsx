import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as action from '../actions/Api'

class Api extends React.Component {

  componentDidMount() {
    this.props.load();
  }

  render() {
    return(
      <div>{this.props.api.value}</div>
    );
  }
}

Api.propTypes = {
  value: React.PropTypes.array,
  load: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    api: {
      value: state.api.value
    }
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    load: (value) => dispatch(
      action.get(dispatch, value)
    )
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Api);
