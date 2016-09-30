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

const root = '/admin';

export default (
  <Route>
    <Route path={root + '/'} component={Default}>
      <IndexRoute 
        components={{
          main: Home
        }} />

      <Route 
        path={root + '/pixi'}
        components={{
          main: Pixi
        }} />

      <Route 
        path={root + '/anime'}
        components={{
          main: Anime
        }} />

      <Route 
        path={root + '/async'}
        components={{
          main: Async
        }} />
    </Route>

    <Route path="*" components={NoMatch} />
  </Route>
);
