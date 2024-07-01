import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  state = {usernameInput: '', passwordInput: '', errMsg: ''}

  updateUsername = event => {
    this.setState({usernameInput: event.target.value})
  }

  updatePassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = errMsg => {
    this.setState({errMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {usernameInput, passwordInput} = this.state
    const userDetails = {username: usernameInput, password: passwordInput}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {usernameInput, passwordInput, errMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-page-container">
        <form onSubmit={this.onSubmitForm} className="login-container">
          <img
            className="web-logo"
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
          />
          <label htmlFor="username" className="username-label">
            USERNAME
          </label>
          <input
            onChange={this.updateUsername}
            id="username"
            type="text"
            className="username-input"
            placeholder="Username"
            value={usernameInput}
          />
          <label htmlFor="password" className="username-label">
            PASSWORD
          </label>
          <input
            onChange={this.updatePassword}
            id="password"
            type="password"
            className="username-input"
            placeholder="Password"
            value={passwordInput}
          />
          <button type="submit" className="login-button">
            Login
          </button>
          {errMsg !== '' && <p className="error-msg">{errMsg}</p>}
        </form>
      </div>
    )
  }
}

export default Login
