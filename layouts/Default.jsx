import React from 'react'
import { Link } from 'react-router'

import Header from './Header'
import Nav    from './Nav'
import Footer from './Footer'

export default class Default extends React.Component {

  componentDidMount() {
    this.handleResize();

    window.addEventListener(
      'resize',
      this.handleResize.bind(this),
      false
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      'resize',
      this.handleResize.bind(this),
      false
    );
  }

  render() {
    return (
      <div className="l-TwoColumn t-TwoColumn">
        <Header />
        <div id="Main" className="l-TwoColumn-Main">
          <Nav />
          {this.props.main}
        </div>
        <Footer />
      </div>
    );
  }

  handleResize() {
    let cli = document.documentElement.clientHeight;
    let footer = document.getElementById('Footer');
    let height = cli - footer.offsetHeight;

    let el = document.getElementById('Nav');
    el.style.height = height + 'px';
  }
}
