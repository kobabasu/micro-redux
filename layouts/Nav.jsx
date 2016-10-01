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
              <i className="fa fa-home" />
              <Link to={ROOT + '/'}>home</Link>
            </li>

            <li>
              <i className="fa fa-film" />
              <Link to={ROOT + '/pixi'}>pixi.js</Link>
            </li>

            <li>
              <i className="fa fa-film" />
              <Link to={ROOT + '/anime'}>anime.js</Link>
            </li>

            <li>
              <i className="fa fa-server" />
              <Link to={ROOT + '/async'}>async</Link>
            </li>

            <li className="l-Nav-external">
              <i className="fa fa-link" />
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
