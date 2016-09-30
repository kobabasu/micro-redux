import React from 'react'
import { Link } from 'react-router'

export default class NoMatch extends React.Component {

  render() {
    return (
      <article id="NoMatch">
        <p>No Match</p>

        {this.props.children}
      </article>
    );
  }
}
