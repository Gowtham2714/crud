import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

export default function Popup(abc) {

  console.log(abc.fieldData)
  const updateData = ()=>{
    
fetch(`https://67d7ed379d5e3a10152c9da0.mockapi.io/creater/details/${abc.fieldData.id}`, {
  method: 'PUT', // or PATCH
  headers: {'content-type':'application/json'},
  body: JSON.stringify(abc.fieldData)
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(task => {
  alert("success....!")
  abc.setref(!abc.ref)
}).catch(error => {
  // handle error
});

abc.boxClose();
  }

  const createUser = () =>{
    
    fetch('https://67d7ed379d5e3a10152c9da0.mockapi.io/creater/details', {
      method: 'POST',
      headers: {'content-type':'application/json'},
      // Send your data in the request body as JSON
      body: JSON.stringify(abc.fieldData)
    }).then(res => {
      if (res.ok) {
          return res.json();
      }
      // handle error
    }).then(task => {
      // do something with the new task
      alert("Add successfully....!")
      abc.setref(!abc.ref)
    }).catch(error => {
      // handle error
    })

    abc.boxClose();
  }



  return (
    <>
      <Modal show={abc.show} onHide={abc.boxClose}>
        <Modal.Header closeButton>
          <Modal.Title> {abc.fieldData.id ? "Edit" : "Add" } </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text"  placeholder="john" autoFocus defaultValue={abc.fieldData.Name}
                    onChange={(e)=>abc.setFieldData({...abc.fieldData, Name:e.target.value})}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email"  placeholder="name@example.com" autoFocus defaultValue={abc.fieldData.EmailId}
                  onChange={(e)=>abc.setFieldData({...abc.fieldData, EmailId:e.target.value})}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Phone NUmber</Form.Label>
              <Form.Control type="tel"  placeholder="7678-987-989" autoFocus defaultValue={abc.fieldData.PhoneNo}
                  onChange={(e)=>abc.setFieldData({...abc.fieldData, PhoneNo:e.target.value})}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>Qualification</Form.Label>
              <Form.Control type="text"  placeholder="MBA" autoFocus defaultValue={abc.fieldData.Qualification}
                  onChange={(e)=>abc.setFieldData({...abc.fieldData, Qualification:e.target.value})}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
              <Form.Label>Location</Form.Label>
              <Form.Control type="text"  placeholder="chennai" autoFocus defaultValue={abc.fieldData.Location}
                  onChange={(e)=>abc.setFieldData({...abc.fieldData, Location:e.target.value})}/>
            </Form.Group>

            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={abc.boxClose}>
            Close
          </Button> 
          {abc.fieldData.id ? <Button variant="primary" onClick={updateData}>
            Save Changes
          </Button>: <Button variant="success" onClick={createUser}>
            Create
          </Button> }
          
          
        </Modal.Footer>
      </Modal>
    </>
  );
}