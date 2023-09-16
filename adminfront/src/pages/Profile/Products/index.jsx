import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { SetLoader } from '../../../redux/loaderSlice';
import { fetchStop, deleteStop } from '../../../apicall/businfo';
import moment from 'moment';
import { message, Button } from 'antd';
import ProductsForm from './ProductsForm';




function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [showProductForm, setShowProductForm] = useState(false);
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();


  const fetchData = async () => {
    try {
      dispatch(SetLoader(true));
      const response = await fetchStop({
        seller: user._id
      });
      dispatch(SetLoader(false));
      console.log('Response:', response); 
      console.log('Response:', response.data);
      if (response.success) {
        setProducts(response.data);
      }
    } catch (error) {
      dispatch(SetLoader(false));
      message.error(error.message);
    }
  };

  const deleteStopHandler = async (id) => {
    try {
      dispatch(SetLoader(true));
      const response = await deleteStop(id);
      dispatch(SetLoader(false));
      if (response.success) {
        message.success(response.message);
        fetchData();
      }
    } catch (error) {
      dispatch(SetLoader(false));
      message.error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); 

    return (
    <div>
  
    <div className="flex justify-end mb-4">
      <Button
        variant="default"
        className="Button"
        onClick={() => {
          setSelectedProduct(null);
          setShowProductForm(true);
        }}
      >
        Add Information
      </Button>
    </div>
    <table className="table">
      <thead>
        <tr>
          <th>Bus Number</th>
          <th>All Stops</th>
          <th>Route</th>
          <th>Total Stops</th>
          <th>Added On</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products ?? [] 
          .map((product) => (
            <tr key={product._id}>
              <td>{product.busnumber}</td>
              <td>{product.allstops}</td>
              <td>{product.route}</td>
              <td>{product.totalstops}</td>
              <td>{moment(product.CreatedAt).format('DD/MM/YYYY hh:mm:ss A')}</td>
              <td>
                <div className="flex gap-5">
                  <i
                    className="ri-pencil-line purple"
                    onClick={() => {
                      setSelectedProduct(product);
                      setShowProductForm(true);
                    }}
                  ></i>
                  <i
                    className="ri-delete-bin-line red"
                    onClick={() => {
                      deleteStopHandler(product._id);
                    }}
                  ></i>
                </div>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
    {showProductForm && (
      <ProductsForm
        showProductForm={showProductForm}
        setShowProductForm={setShowProductForm}
        selectedProduct={selectedProduct}
        fetchData={fetchData}
      />
      
    )}


     </div>

     
  );
}

export default Products;





















// import React, { useState, useEffect } from 'react'
// import ProductsForm from "./ProductsForm"
// import { useDispatch, useSelector } from "react-redux";
// import { SetLoader } from "../../../redux/loaderSlice";
// import {fetchStop, deleteStop} from "../../../apicall/businfo" 
// import {Button, message, Table} from "antd"
// import moment from "moment"

// function Products() {
//   const [selectedProduct, setSelectedProduct] = useState([])
//   const [products, setProducts] = useState([])
//   const [showProductForm, setShowProductForm] = useState(false)
//   const { user } = useSelector((state) => state.users)
//   const dispatch = useDispatch()
//   console.log();
//   const fetchData = async () => {
//      try{
//          dispatch(SetLoader(true))
//          const response = await fetchStop();
//          dispatch(SetLoader(false));
//          console.log("Response:",response.data);  
//          if(response.success){
//           setProducts(response.data);
//          }
//       // if (fetchStop && fetchStop.products) {
//       //       setProducts(fetchStop.products);
//       //    } else{
//       //     message.error ('product data not found');
//       //    } 

//       //   } else {
//       //     // Handle case when response is not successful
//       //     console.log("Response indicates failure.");
//       //   }
      
         
//      } catch (error){
//          dispatch(SetLoader(false))
//          message.error(error.message)
//      }   
//    }

//    const deleteStop = async  (id) => {
     
//     try{
//          dispatch(SetLoader(true));
//          const response = await deleteStop(id);
//          dispatch(SetLoader(false));
//          if(response.success){
//             message.success(response.message);
//             fetchData();
//          }
//      } catch (error){
//          dispatch(SetLoader(false));
//          message.error(error.message);
//      }
//   };
 

//   const columns = [
//     {
//       title: "Bus Number",
//       dataIndex: "busnumber"
//     },
//     {
//       title: "All Stops",
//       dataIndex: "allstops"
//     },
//     {
//       title: "Route",
//       dataIndex: "route"
//     },
 
//     {
//       title: "Total Stops",
//       dataIndex: "totalstops"
//     },
  
//     {
//       title: "Added On",
//       dataIndex: "CreatedAt",
//       render: (data, record) => moment(record.createAt).format("DD/MM/YYYY hh:mm:ss A")  
//     },
//     {
//        title: "Action",
//        dataIndex: "action",
//        render: (text, record) => {
//           return(
//              <div className="flex gap-5">
//                <i className="ri-pencil-line purple"
//                  onClick={()=>{
//                     setSelectedProduct(record);
//                     setShowProductForm(true) 
//                  }}
//                ></i>
//                <i className="ri-delete-bin-line red"
//                 onClick={()=>{
//                       deleteStop(record._id)
//                 }}
//                ></i>
//            </div>
//           )
//        }
//     },
    
//   ];

//   useEffect(()=> {
//     fetchData();
//  },)


//   return (
//     <div>
//       <div className="flex justify-end mb-4">
//         <Button type="default"
//         className='Button'
//           onClick={() => {
//           setSelectedProduct(null)  
//           setShowProductForm(true)
//           }}>
//           Add New Product
//         </Button>
//       </div>
//       <Table columns={columns} dataSource={products} />
//       {showProductForm && (
//       <ProductsForm showProductForm={showProductForm} 
//       setShowProductForm={setShowProductForm} 
//       selectedProduct={selectedProduct}
//       fetchData={fetchData}
//       />
//       )}
//     </div>
//   )
// }

// export default Products
