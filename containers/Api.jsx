import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/Api'

class Api extends React.Component {

  render() {
    return(
      <div>
        <button
          onClick={this.handleClick.bind(this)}
          >
          DBから読込
          </button>

        <ul>
        {Object.keys(this.props.api.value).map((i) => {
          return <li key={i}>
            {this.props.api.value[i].name}
            </li>
        })}
        </ul>
      </div>
    );
  }

  handleClick(e) {
    e.preventDefault();
    this.props.get();
  }
}

Api.propTypes = {
  api: React.PropTypes.object.isRequired,
  get: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    api: {
      value: state.api.value
    }
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    get: () => dispatch(actions.get())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Api);
