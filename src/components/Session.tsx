import React from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'

import { firebase } from '../firebase'
import Routes from '../constants/routes'

export const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    componentDidMount() {
      const { onSetAuthUser } = this.props as any

      firebase.auth.onAuthStateChanged(authUser => {
        authUser ? onSetAuthUser(authUser) : onSetAuthUser(null)
      })
    }

    render() {
      return <Component {...this.props} />
    }
  }

  const mapDispatchToProps = dispatch => ({
    onSetAuthUser: authUser => dispatch({ type: 'AUTH_USER_SET', authUser }),
  })

  return connect(
    null,
    mapDispatchToProps
  )(WithAuthentication)
}

export const withAuthorization = needsAuthorization => Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        if (!authUser && needsAuthorization) {
          Router.push(Routes.TOP)
        }
      })
    }

    render() {
      return <Component {...this.props} />
    }
  }

  return WithAuthorization
}
