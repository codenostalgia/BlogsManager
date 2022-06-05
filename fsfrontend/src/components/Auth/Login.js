import React, { Component } from "react";
import { Form, Input, FormGroup, Label, Button,Container } from "reactstrap";
import { verifyLogin } from "../Axios/AxiosRequests";
import { login, logout } from '../Redux/action';
import { connect } from 'react-redux';
import { toast } from "react-toastify";


class Login extends Component{

    constructor(props) {
      super(props);

      this.state = {
        credentials: {
          userName:'',
          password:'',
          type:'Reader'
      }
      }
    }
  
  userNameChangeHandler=(e)=>{
        this.setState(
          {
            credentials:{
              userName:e.target.value,
              password:this.state.credentials.password
            }
          }
        )
   }  

  passwordChangeHandler=(e)=>{
    this.setState(
      {
        credentials:{
          userName:this.state.credentials.userName,
          password:e.target.value
        }
      }
    )
   }

   typechangeHandler=(e)=>{
    this.setState(
      {
        credentials:{
          userName:this.state.credentials.userName,
          password:this.state.credentials.password,
          type:e.target.value
        }
      }
    )
  }
    
  loginHandler=(e)=>{

        

        const prom= verifyLogin(this.state.credentials)

        prom.then(res=>{
            console.log("login response..")
            console.log(res)
            this.props.userLogin()

            if(res.data){
              this.props.userLogin()
              localStorage.setItem("userdetails", JSON.stringify(res.data))
              toast.success("Logged in")
              this.props.history.push("/home")
            }
            else{
              toast.error("Wrong Credentials!!")
            }

            
        })
        .catch(error=>{
            console.log(error)
        })
    }  

    signuphandler=(e)=>{
        this.props.history.push("/signup")
    }  

     

  render() {
    return (<div>
      <Form className="border p-3 ">
        <FormGroup>
          <Label for="username">Username:</Label>
          <Input
            type="text"
            name="username"
            id="username"
            placeholder="Enter User Name here.."
            onChange={this.userNameChangeHandler}
          />
        </FormGroup>

        <FormGroup>
          <Label for="password">Password:</Label>
          <Input
            type="text"
            name="password"
            id="password"
            placeholder="Enter password here.."
            onChange={this.passwordChangeHandler}
          />
        </FormGroup>

        <FormGroup>
          <Label for="type">Type:</Label>
          <Input
            type="text"
            name="type"
            id="type"
            placeholder="Enter type here.."
            onChange={this.typechangeHandler}
          />
        </FormGroup>

        <Container className="text-center">
          <Button onClick={this.loginHandler} color="success">
            Login
          </Button>
          <Button onClick={this.signuphandler} color="warning m-2">
            Signup
          </Button>
        </Container>
      </Form>
    </div>)
  };
};


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
)(Login);
