// for function tempplate - rsc
import React from "react";
import { Form,FormGroup,Label,Input,Button, Container } from "reactstrap";
import { toast } from "react-toastify";
import { addBlog } from "../Axios/AxiosRequests";

const AddBlog = (props) => {

  const newBlog= {
    content:'',
    title:'NA',
    dateOfPublish:new Date().toLocaleDateString(),
    aid: JSON.parse(localStorage.getItem('userdetails')).uid
  }

  function submitHandler(e){
      console.log(newBlog)

      if(newBlog.content===''){
        toast.error("Please add some content..!"); 
        return;
      }

      const promObj = addBlog(newBlog);

      promObj.then(res=>{
        console.log(res)
        toast.success("Blog saved!!")
      })
      .catch(error=>{
        console.log(error)
        toast.error("Some Error Happened!!"); 
      })
          
  }

  function contentChangeHandler(e){
    newBlog.content=e.target.value;
  }

  function titleChangeHandler(e){
    newBlog.title=e.target.value;
  }

  function backHandler(e){
    props.history.push("/View")
  } 

  return (
    <div>
      <Form className="border p-3">

      <FormGroup>
          <Label for="content">Title:</Label>
          <Input
            type="text"
            name="title"
            id="title"
            placeholder="Enter title here.."
            onChange={titleChangeHandler}
          />
        </FormGroup>


        <FormGroup>
          <Label for="content">Content:</Label>
          <Input
            type="text"
            name="content"
            id="content"
            placeholder="Enter content here.."
            onChange={contentChangeHandler}
          />
        </FormGroup>


        <Container className="text-center">
            <Button onClick={submitHandler} color="success">Add</Button>
            <Button onClick={backHandler} color="warning m-2">Back</Button>
        </Container>

      </Form>
    </div>
  );
};

export default AddBlog;
