import "./App.css";
import Header from "./components/Features/Header";
import { Container } from "reactstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import {BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom";
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import AddBlog from "./components/Features/AddBlog";
import AllBlogs from "./components/Features/AllBlogs";
import {Row,Col} from 'reactstrap'
import Menus from "./components/Features/Menus";
import Logout from "./components/Auth/Logout";
import BlogsToBeApproved from "./components/Features/BlogsToBeApproved";
import UpdateBlog from "./components/Features/UpdateBlog";
import Home from "./components/Features/Home";

function App() {
  const status = useSelector((state) => state.status);
  const dispatch = useDispatch();



  return (

    <div className="App">
      
      
       <Container>
      <Router>
        <Route path="/login" component={Login} exact></Route>
        <Route path="/signup" component={Signup} exact></Route>

        {status === "LOGIN" ? (
          <Route>

              <Row>
                <Col>
                  <Header></Header>
                </Col>
              </Row>

              <Row>
                <Col md={4}>
                  <Route path="/" component={Menus} />
                </Col>

                <Col md={8}>
                  <Switch>
                     <Route path="/home" component={Home} exact />
                    <Route path="/View" component={AllBlogs} exact />
                    <Route path="/approve" component={BlogsToBeApproved} exact />
                    <Route path="/Add" component={AddBlog} exact />
                    <Route path="/update" component={UpdateBlog} />
                    <Route path="/logout" component={Logout} exact />
                    <Route path="/" component={Home} />
                  </Switch>
                </Col>
              </Row>


          </Route>
        ) : (
          <Redirect to="/login" />
        )}
      </Router>
      </Container> 
    </div>
  );
}

export default App;
