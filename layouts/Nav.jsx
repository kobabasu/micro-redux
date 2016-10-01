import React from 'react'
import { Link } from 'react-router'

export default class Nav extends React.Component {

  render() {
    let root = '/admin';

    return (
      <aside id="Nav">
        <nav>
          <ul>
            <li>
              <i className="fa fa-home" />
              <Link to={root + '/'}>home</Link>
            </li>

            <li>
              <i className="fa fa-film" />
              <Link to={root + '/pixi'}>pixi.js</Link>
            </li>

            <li>
              <i className="fa fa-film" />
              <Link to={root + '/anime'}>anime.js</Link>
            </li>

            <li>
              <i className="fa fa-server" />
              <Link to={root + '/async'}>async</Link>
            </li>

            <li className="l-Nav-external">
              <i className="fa fa-link" />
              <a
                href={root + '/sass/sample/index.html'}
                target="_blank"
                >
                sass
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    );
  }
}
