import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { Row, Col, ButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle, Dropdown, Button } from "reactstrap";

const axiosInstance = axios.create();
axiosInstance.defaults.withCredentials = true


// axios.defaults.withCredentials = true
// const axiosAPI = axios.create();

const Hall4 = () => {
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
    console.log(data)
    try {
      axios.post('http://localhost:5000/addComplaint', data)
      .then((res) => {
        console.log(res.data); // Log the response data if needed
        alert('Added Successfully');
      })
    }catch(err){
      console.log(err);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }
  // useEffect(() => {
  //   axiosAPI.get()
  //     .then(response => {
  //       setProducts(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);

  // const handleEdit = (product) => {
  //   setEditingProduct(product);
  // };

  // const handleSave = () => {
  //   setEditingProduct(null);
  // };

  // const handleCancel = () => {
  //   setEditingProduct(null);
  // };

  // const handleDelete = (productId) => {
  //   axiosAPI.delete()
  //     .then((res) => {
  //       setProducts(products.filter(product => product._id !== productId));
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="" breadcrumbItem="Floor-4" />
        
        {/* Dropdowns with space between them */}
        {/* <ButtonDropdown className="mb-3 mr-3">
          <DropdownToggle caret color="primary" className="btn btn-primary btn-lg border-1px">
            Halls <i className="mdi mdi-chevron-down" />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Hall-1</DropdownItem>
            <DropdownItem>Hall-2</DropdownItem>
            <DropdownItem>Cabins</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
        <ButtonDropdown className="mb-3 mr-3">
          <DropdownToggle caret color="primary" className="btn btn-primary btn-lg border-1px">
            Issues <i className="mdi mdi-chevron-down" />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Hall-1</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>     
        <ButtonDropdown className="mb-3 mr-3">
          <DropdownToggle caret color="primary" className="btn btn-primary btn-lg border-1px">
            Issues Types <i className="mdi mdi-chevron-down" />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Hall-1</DropdownItem>
            <DropdownItem>Hall-2</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem>Hall-1</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
        <ButtonDropdown className="mb-3 mr-3">
          <DropdownToggle caret color="primary" className="btn btn-primary btn-lg border-1px">
            Floor Halls <i className="mdi mdi-chevron-down" />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Hall-1</DropdownItem>
            <DropdownItem>Hall-2</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem>Hall-1</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown> */}
        <br />
        <form onSubmit={handleFormSubmit}>
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


        <Button className='bg-primary' >Submit1 </Button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Hall4;
