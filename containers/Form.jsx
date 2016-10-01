import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as action from '../actions/Form'

import FormInput from '../components/FormInput'
import FormDisplay from '../components/FormDisplay'

class Form extends React.Component {
  render() {
    return(
      <div>
        <FormInput handleClick={this.props.onClick} />
        <FormDisplay data={this.props.form.value} />
      </div>
    );
  }
}

Form.propTypes = {
  value: React.PropTypes.string,
  onClick: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    form: { value: state.form.value }
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    onClick: (value) => dispatch(
      action.send(value)
    )
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
