import React, { Suspense, useEffect } from 'react'

// ** Router Import
import Router from './router/Router'
import { API } from 'aws-amplify'
import { listTasks } from './graphql/queries'

const App = () => {

  return (
    <Suspense fallback={null}>
      <Router />
    </Suspense>
  )
}

export default App
