import React from 'react'
import { Link } from 'react-router'

export default class Nav extends React.Component {

  render() {
    const ROOT = '/admin';

    return (
      <aside id="Nav">
        <nav>
          <ul>
            <li>
              <i className="zmdi zmdi-home"></i>
              <Link to={ROOT + '/'}>home</Link>
            </li>

            <li>
              <i className="zmdi zmdi-movie"></i>
              <Link to={ROOT + '/pixi'}>pixi.js</Link>
            </li>

            <li>
              <i className="zmdi zmdi-movie"></i>
              <Link to={ROOT + '/anime'}>anime.js</Link>
            </li>

            <li>
              <i className="zmdi zmdi-refresh-sync"></i>
              <Link to={ROOT + '/async'}>async</Link>
            </li>

            <hr />

            <li className="l-Nav-external">
              <i className="zmdi zmdi-link"></i>
              <a
                href={ROOT + '/sass/sample/index.html'}
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
