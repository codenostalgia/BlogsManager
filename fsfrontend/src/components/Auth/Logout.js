import React, { Component } from 'react';
import { login, logout } from '../Redux/action';
import { connect } from 'react-redux';

class Logout extends Component {

    constructor(props) {
        super(props);
        this.props.userLogout()
    }
    

    render() {
        return (
            <div>
                Logout
            </div>
        );
    }
}

const mapStateToProps = props => ({
    status: props.status
  });
  
  
  const mapDispatchToProps = () => ({ 
  
    userLogin: ()=> (login()),
    userLogout: ()=> (logout())
  
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps()
  )(Logout);