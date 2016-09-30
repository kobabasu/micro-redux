import React from 'react'
import DocumentTitle from 'react-document-title'

import Api from '../containers/Api'

export default class Async extends React.Component {

  render() {
    return(
      <article id="Async">
        <DocumentTitle title="Async" />
        <h1>Async</h1>

        <Api />
      </article>
    );
  }
}
