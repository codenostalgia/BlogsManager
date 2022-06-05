import React from "react";
import { toast } from "react-toastify";
import { Form, Input, FormGroup, Label, Button, Container, Dropdown ,DropdownToggle,DropdownMenu,DropdownItem} from "reactstrap";
import { signup } from "../Axios/AxiosRequests";

const Signup = (props) => {
  let credentials = {
    userName: "",
    password: "",
    type:"Reader"
  };

  function userNameChangeHandler(e) {
    credentials.userName = e.target.value;
  }

  function passwordChangeHandler(e) {
    credentials.password = e.target.value;
  }

  function typechangeHandler(e){
    credentials.type = e.target.value;
  }

  function submitHandler(e) {

    console.log("sign up collected data..")
    console.log(credentials)
    const prom = signup(credentials);

    prom
      .then((res) => {
        const success = res.data;
        if (success) {
          
          toast.success("Signed Up successfully!");
          props.history.push("/login");
        } else {
          toast.error("Username Already Exists!!");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <Form className="border p-3">
        <FormGroup>
          <Label for="username">Username:</Label>
          <Input
            type="text"
            name="username"
            id="username"
            placeholder="Enter User Name here.."
            onChange={userNameChangeHandler}
          />
        </FormGroup>

        <FormGroup>
          <Label for="password">Password:</Label>
          <Input
            type="text"
            name="password"
            id="password"
            placeholder="Enter password here.."
            onChange={passwordChangeHandler}
          />
        </FormGroup>

        <FormGroup>
          <Label for="type">User Type:</Label>
          <Input
            type="text"
            name="type"
            id="type"
            placeholder="Enter type here.."
            onChange={typechangeHandler}
          />
        </FormGroup>

        <Container className="text-center">
          <Button onClick={submitHandler} color="success">
            Submit
          </Button>
        </Container>
      </Form>
    </div>
  );
};

export default Signup;
