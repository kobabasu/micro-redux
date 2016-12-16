import React from 'react'
import DocumentTitle from 'react-document-title'

import Api from '../containers/Api'

export default class Async extends React.Component {

  constructor(props) {
    super(props);
    this.title = 'Async';
    this.md = 'autorenew';
  }

  render() {
    return(
      <article id="Async">
        <DocumentTitle title={this.title} />
        <h1>
          <i className="material-icons md-36">{this.md}</i>
          {this.title}
        </h1>

        <Api />
      </article>
    );
  }
}
