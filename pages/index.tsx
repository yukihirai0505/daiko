import * as React from 'react'
import { connect } from 'react-redux'
import { AppWithAuthentication } from '../src/components/Layout'
import TopPage from '../src/pages/TopPage'
import LandingPage from '../src/pages/LandingPage'

const Index = ({ authUser }) => (
  <AppWithAuthentication>
    {authUser ? <TopPage /> : <LandingPage />}
  </AppWithAuthentication>
)

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser,
})

export default connect(mapStateToProps)(Index)
