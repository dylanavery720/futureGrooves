import React, { Component } from 'react';
import './header-style';
import { Link } from 'react-router-dom';
import Logout from './Logout';
import LoginModal from './LoginModal';
import UserContainer from '../../containers/UserContainer';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      loginModal: false,
    }
  }

  logoutUser() {
    this.props.logoutUser()
  }

  render() {
    const { user } = this.state

    const displayLoginModal = () => {
      if(this.state.loginModal) { return <LoginModal /> }
    }

    const noUserOptions = () => {
      return (
        <div className='sign-in-container'>
          <Link to='/sign-up'>Sign Up</Link>
          <button onClick={() => this.setState({ loginModal: !this.state.loginModal })}>Sign-in</button>
          {displayLoginModal()}
        </div>
      )
    }

    const activeUserOptions = () => {
      return (
        <div className='logout-container'>
          <Logout handleLogout={this.logoutUser.bind(this)} username={this.props.user}/>
        </div>
      )
    }

    return (
      <div className="header">
        <Link to='/'><h1>FutureGrooves</h1></Link>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/newsound'>New Sound</Link>
          <Link to='/sequencer'>Sequencer</Link>
          <Link to='/profile'>Profile</Link>

          { this.props.user ? activeUserOptions() : noUserOptions() }

        </nav>
      </div>
    )
  }
}

export default UserContainer(Header);
