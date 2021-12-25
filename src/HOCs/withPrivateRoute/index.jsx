// Dependencies
import { connect } from 'react-redux'
import Router from 'next/router'

export function withPrivateRoute(Component) {
  const Auth = ({ isUserLogger, ...props }) => {
    // If user is not logged in, return
    if (!isUserLogger) {
      Router.push('/signup')
    }

    return <Component {...props} />
  }

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps
  }

  const mapStateToProps = (state) => ({
    isUserLogger: state.user.data
  })

  return connect(mapStateToProps)(Auth)
}
