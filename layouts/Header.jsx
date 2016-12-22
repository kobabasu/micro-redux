import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

class Header extends React.Component {

  render() {
    return (
      <header id="Header">
        <span>{this.props.masters.name}</span>
      </header>
    );
  }
}

Header.propTypes = {
  masters: React.PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    masters: {
      name: state.masters.name
    }
  };
};

export default connect(
  mapStateToProps
)(Header);
