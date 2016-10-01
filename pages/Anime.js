import React from 'react'
import DocumentTitle from 'react-document-title'

import anime from 'animejs'

export default class Anime extends React.Component {

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return(
      <article id="Anime">
        <DocumentTitle title="anime.js" />
        <h1>anime.js</h1>
        <div className="bgcolor-brand-primary"></div>
        <div className="bgcolor-brand-info"></div>
        <button
          onClick={this.handleClick.bind(this)}
          >
          start
        </button>
      </article>
    );
  }

  handleClick(e) {
    e.preventDefault();

    var animation = anime({
      targets: [
        '.bgcolor-brand-primary',
        '.bgcolor-brand-info'
      ],
      translateX: () => [0, 500],
      scale: () => 1,
      rotate: () => ( anime.random(-360,360) ),
      duration: () => ( anime.random(1000,2000) ),
      direction: 'alternate',
      loop: false,
      autostart: false
    });

    animation.play();
  }
}