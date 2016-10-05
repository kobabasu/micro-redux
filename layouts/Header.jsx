import React from 'react'
import { Link } from 'react-router'

export default class Header extends React.Component {

  render() {
    return (
      <header id="Header">
        <h1>
          <i className="material-icons md-36">
            {this.props.md}
          </i>
          {this.props.h1}
        </h1>
      </header>
    );
  }
}
