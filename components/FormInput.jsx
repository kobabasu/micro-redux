import React from 'react'

export default class FormInput extends React.Component {

  render() {
    return(
      <form>
        <input
          type="text"
          ref={(ref) => (this.myInput = ref)}
          defaultValue=""
          />

        <button
          onClick={(event) => this.send(event)}
          >送信</button>
      </form>
    );
  }

  send(e) {
    e.preventDefault();
    this.props.handleClick(this.myInput.value.trim());
    this.myInput.value = '';
  }
}

FormInput.propTypes = {
  handleClick: React.PropTypes.func.isRequired
}
