import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
import Header from './components/Header';
import Progress from './components/progress';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
})

const MarketingLazy = lazy(() => import('./components/MarketingApp'))
const AuthLazy = lazy(() => import('./components/AuthApp'))

export default () => {
  const [isSignIn, setIsSignIn] = useState(false)

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
          <div>
            <Header isSignIn={isSignIn} onSignOut={() => setIsSignIn(false)}/>
            <Suspense fallback={<Progress />}>
              <Switch>
                <Route path="/auth" component={AuthLazy}> 
                  <AuthLazy onSignIn={() => setIsSignIn(true)}/>
                </Route>
                <Route path="/" component={MarketingLazy} />
              </Switch>
            </Suspense>
          </div>
      </StylesProvider>
    </BrowserRouter>
  )
}