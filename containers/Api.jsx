import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as action from '../actions/Api'

class Api extends React.Component {

  componentDidMount() {
    this.props.get();
  }

  render() {
    return(
      <div>{this.props.api.value}</div>
    );
  }

  del(e) {
    this.props.del(e.target.id);
  }
}

Api.propTypes = {
  value: React.PropTypes.array,
  get: React.PropTypes.func.isRequired,
  del: React.PropTypes.func.isRequired
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
    get: () => dispatch(
      HolidaysAction.get(dispatch)
    ),
    del: (id) => dispatch(
      HolidaysAction.del(dispatch, id)
    )
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Api);
