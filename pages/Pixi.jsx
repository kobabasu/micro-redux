import React from 'react'
import DocumentTitle from 'react-document-title'

import PIXI from '../components/PixiExtends'

export default class Pixi extends React.Component {

  constructor(props) {
    super(props);
    this.title = 'Pixi';
    this.md = 'local_movies';
  }

  componentDidMount() {
    const el = document.getElementById('Board');
    PIXI.setElement(el);
    this.pixi = new PIXI();
    this.pixi.init();
    this.handleResize();

    window.addEventListener(
      'resize',
      this.handleResize.bind(this),
      false
    );
  }

  componentWillUnmount() {
    this.pixi.stop();

    window.removeEventListener(
      'resize',
      this.handleResize.bind(this),
      false
    );
  }

  handleResize() {
    const el = document.getElementById('Board');
    const cli = document.documentElement.clientHeight;
    const footer = document.getElementById('Footer');

    this.pixi.resizeStage(
      el.offsetWidth,
      cli - footer.offsetHeight
    )
  }

  render() {
    return(
      <article
        id="Pixi"
        className="l-TwoColumn-article-fillout"
        >
        <DocumentTitle title={this.title} />
        <Header h1={this.title} md={this.md} />

        <div id="Board"></div>
      </article>
    );
  }
}
