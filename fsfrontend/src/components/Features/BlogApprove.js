import React from 'react';
import { toast } from 'react-toastify';
import { CardHeader, Row } from 'reactstrap';

import 
{
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Container,
    Button,
    Col
}
 from 'reactstrap'
 import { approveBlog } from '../Axios/AxiosRequests';

// style={{"width": "50rem"}}

function BlogApprove({blog,history}) {

    function approveHandler(){
        let promObj = approveBlog(blog)

        promObj.then(res=>{
            console.log("Approved")
            toast.success("Approved")
        }).
        catch(e=>{
            console.log(e)
            toast.error("Some Error occurred..")
        })
    }



    return (
        <div className="m-2">
          <Card className="mycard" body color="primary" outline>
            <CardBody className="text-center">
                <CardHeader>{blog.title}</CardHeader>
              <CardSubtitle>
              {
                blog.content===null?
                "No Content":
                blog.content
              }
            </CardSubtitle>
            <Button color='warning' onClick={approveHandler}>Approve</Button>
          </CardBody>
        </Card>
      </div>
    );

}

export default BlogApprove;