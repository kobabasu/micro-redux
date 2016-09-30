import React from 'react'
import DocumentTitle from 'react-document-title'

import Form from '../containers/Form'

export default class Home extends React.Component {

  render() {
    return(
      <article id="Home">
        <DocumentTitle title="Home" />
        <h1>Home 日本語のタイトル</h1>

        <p>Adipisicing modi repellat distinctio incidunt corporis! Ullam neque debitis dolorem harum sit quia? Inventore recusandae totam aliquid iusto numquam, neque, sit Unde repellat blanditiis ad ullam optio suscipit Rem necessitatibus</p>

        <p>既定形式の入力補完機能によりHTML、XML、XSL等を素早く編集できる、テキストエディタ用プラグインである。 2008年にVadim Makeevが開発を始め[1]、Sergey Chikuyonokと利用者によりMIT Licenseのオープンソースとして継続して開発されている[2]。</p>

        <Form />
      </article>
    );
  }
}
