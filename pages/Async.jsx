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
        <Header h1={this.title} md={this.md} />

        <Api />
      </article>
    );
  }
}
