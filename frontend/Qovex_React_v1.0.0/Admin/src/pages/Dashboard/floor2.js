import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { Row, Col, ButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle, Dropdown, Button } from "reactstrap";

const axiosInstance = axios.create();
axiosInstance.defaults.withCredentials = true


// axios.defaults.withCredentials = true
// const axiosAPI = axios.create();

const Hall2 = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);


  const [data,setData] = useState({
    executive_name:'',
    hall_no:'',
    issue_type:'',
    complaint:'',
    floor:''
  })



  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const d=await axios.post('http://localhost:5000/addComplaint', data)
      console.log(d);
      if(d){
        console.log(d);
      }
    }catch(err){
      console.log(err);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="" breadcrumbItem="Floor-2" />
        
        
        
        <br />
        <form >
        <h6>Enter executive name</h6>
        <input type='text' placeholder='enter name' name='executive_name'
        value={data.executive_name}
         onChange={handleChange}></input>
        <br />
        <h6>Enter Floor No</h6>
        <input type='text' placeholder='Floor' name='floor' 
        value={data.floor}
         onChange={handleChange}></input>
        <br />
        <h6>Enter hall No</h6>
        <input type='text' placeholder='HALL' name='hall_no' 
        value={data.hall_no}
         onChange={handleChange}></input>
        <br />
        <h6>Enter Issue type</h6>
        <input type='text' placeholder='enter issue' name="issue_type" 
        value={data.issue_type}
        onChange={handleChange}></input>
        <br />

        <br />
        {/* Increased width and height of the textarea */}
        <textarea placeholder='Enter Your Complaint' className='m-50rem' style={{ width: '100%', height: '150px' }} name='complaint' 
        value={data.complaint}
        onChange={handleChange}
        ></textarea>
        <br />
        <br />

        <input type='file'></input>
        <br />
        <br />

        <Button className='bg-primary' onSubmit={handleFormSubmit}>Submit1 </Button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Hall2;
