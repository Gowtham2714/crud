import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";

export default function TableComponent(cd) {
  const [tableData, setTableDta] = useState(null);

  useEffect(() => {
    fetch("https://67d7ed379d5e3a10152c9da0.mockapi.io/creater/details", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((tasks) => {
        setTableDta(tasks.reverse());
        console.log(tasks)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [cd.update]);


  const deleteUser = (id) => {
    
fetch(`https://67d7ed379d5e3a10152c9da0.mockapi.io/creater/details/${id}`, {
  method: 'DELETE',
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(task => {
  // Do something with deleted task
  alert("Deleted successfully.....!")
  cd.updateref(!cd.update)
}).catch(error => {
  // handle error
})
  }

  
  return (
    <>
     <Button className="fs-5 mb-3" variant="info" onClick={() => cd.boxShow() }>Add</Button>
    <Table striped bordered hover variant="dark w-100 m-auto ">
      <thead>
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>EmailId</th>
          <th>Phone No.</th>
          <th>Qualification</th>
          <th>Location</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {tableData && tableData.map((item, i) => {
          return (
            <>
              <tr>
                <td>{i+1}</td>
                <td>{item.Name}</td>
                <td>{item.EmailId}</td>
                <td>{item.PhoneNo} </td>
                <td>{item.Qualification} </td>
                <td>{item.Location}</td>
                <td>
                  <Button variant="success me-3" onClick={()=>cd.boxShow(item)}>Edit</Button>
                  
                  <Button variant="danger" onClick={()=> deleteUser(item.id)}>Delete</Button>
                </td>
              </tr>
            </>
          );
        })}
      </tbody>
    </Table>
    </>
  );
}