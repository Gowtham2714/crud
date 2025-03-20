// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TableComponent from "./table.jsx";
import { Container } from 'react-bootstrap';
import Popup from "./popup.jsx";
import { useState } from 'react';

function App() {
   const [show, setShow] = useState(false);
   const [status, setStatus] = useState(false);
   const [tempData,setTempData] = useState({})
 
   const handleClose = () => setShow(false);
   const handleShow = (rowData) => {
    if(rowData) {
      setTempData(rowData)
    }else{
      setTempData({
        Name:null,
        EmailId:null,
        Qualification:null,
        Location:null,
        PhoneNo:null,
      })
      
    }
    setShow(true);
  };

  return (
    <Container fluid className="p-4">
      <Popup ref={status} setref={setStatus} show={show} boxClose={handleClose} fieldData={tempData} setFieldData={setTempData}/>
      <TableComponent boxShow={handleShow} update={status} updateref={setStatus} />
    </Container>
  )
}

export default App