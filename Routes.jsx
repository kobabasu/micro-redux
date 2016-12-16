import React from 'react'
import { Route, IndexRoute } from 'react-router'

// layouts
import Default      from './layouts/Default'

// pages
import Home         from './pages/Home'
import Pixi         from './pages/Pixi'
import Anime        from './pages/Anime'
import Async        from './pages/Async'
import NoMatch      from './pages/NoMatch'

const ROOT = '/admin';

export default (
  <Route>
    <Route path={ROOT + '/'} component={Default}>
      <IndexRoute 
        components={{
          main: Home
        }} />

      <Route 
        path={ROOT + '/pixi'}
        components={{
          main: Pixi
        }} />

      <Route 
        path={ROOT + '/anime'}
        components={{
          main: Anime
        }} />

      <Route 
        path={ROOT + '/async'}
        components={{
          main: Async
        }} />
    </Route>

    <Route path="*" components={NoMatch} />
  </Route>
);
