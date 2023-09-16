import React, { useState, useRef, useEffect } from 'react';
import { Modal, Tabs, Form, Input,  Row, Col, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { SetLoader } from '../../../redux/loaderSlice';
import { addStop,  updateStop } from '../../../apicall/businfo';





const { TabPane } = Tabs;


const rules = [
  {
    required: true,
    message: 'Required',
  },
];

function ProductsForm({
  showProductForm,
  setShowProductForm,
  selectedProduct,
  fetchData,
}) {
  const [selectedTab, setSelectedTab] = useState('1');
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);


  const onFinish = async (values) => {
    try {
      dispatch(SetLoader(true));
      let response = null;

      if (selectedProduct && selectedProduct._id) {
        response = await updateStop(selectedProduct._id, values);
      } else {
        values.seller = user && user._id;
        values.status = 'pending';
        response = await addStop(values);
      }
      
      dispatch(SetLoader(false));
      console.log('API Response:', response);

      if (response.status) {
        message.success('Product saved successfully');
        fetchData();
        setShowProductForm(false);
      } else {
        console.error('API Error:', response.data); 
        message.error('Failed to save product');
      }
    } catch (error) {
      dispatch(SetLoader(false));
      console.error('Error:', error); 
      message.error(`Error: ${error.message}`);
    }
  };

  const formRef = useRef(null);

  useEffect(() => {
    if (selectedProduct) {
      formRef.current.setFieldsValue(selectedProduct);
    }
  }, [selectedProduct]);

  return (

    <Modal
    title={selectedProduct ? 'updateStop' : 'addStop'}
    open={showProductForm} 
    onCancel={() => setShowProductForm(false)}
      centered
      width={1000}
      okText="Save Information"
      onOk={() => {
        formRef.current.submit();
      }}
      footer={selectedTab === '2' ? null : undefined}
    >
      <div>
        <h1 className="text-primary text-2xl text-center font-semibolf uppercase">
          {selectedProduct ? 'updateStop' : 'addStop'}
        </h1>
        <Tabs
          defaultActiveKey="1"
          activeKey={selectedTab}
          onChange={(key) => setSelectedTab(key)}
        >
          <TabPane tab="General" key="1">
            <Form layout="vertical" ref={formRef} onFinish={onFinish}>
              <Form.Item label="Bus Number" name="busnumber" rules={rules}>
                <Input type="text" />
              </Form.Item>
              <Form.Item label="All Stops" name="allstops" rules={rules}>
                <TextArea type="text" />
              </Form.Item>
              <Row gutter={[16, 16]}>
                <Col span={8}>
                  <Form.Item label="Route" name="route" rules={rules}>
                    <Input type="number" />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="Total Stops" name="totalstops" rules={rules}>
                    <Input type="number" />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </TabPane>
        </Tabs>
      
  
      </div>
    </Modal>

  );
}

export default ProductsForm;



















// import React, { useState, useRef, useEffect } from 'react'
// import { Modal, Tabs, Form, Input, Select, Row, Col, message } from 'antd'
// import TextArea from 'antd/es/input/TextArea'
// //import { Option } from 'antd/es/mentions'
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { SetLoader } from "../../../redux/loaderSlice";
// import { addStop,  updateStop} from "../../../apicall/businfo"
// import axios from 'axios' 

// const rules = [
//   {
//     required: true,
//     message: "Required"
//   }
// ];
// function ProductsForm({
//   showProductForm,
//   setShowProductForm,
//   selectedProduct,
//   fetchData
// }) {
//   const [selectedTab ="1", setSelectedTab] = useState("1")
//   const dispatch = useDispatch()
//   const { user } = useSelector(state => state.users)
//   const onFinish = async (values) => {
//     try {
//       dispatch(SetLoader(true));
//       let response = null;
    
//       if (selectedProduct && selectedProduct._id) {
//         response = await updateStop(selectedProduct._id, values);
      
    
//       } else {
//         values.seller = user && user._id;
//         values.status = "pending";
//         response = await addStop(values);
//       }
//       console.log("Response:", response);
//       dispatch(SetLoader(false));
      
//       if (response.status === 200) {
//         message.success('jejej');
//         fetchData();
//         setShowProductForm(false);
//       } else {
//         message.error('uuuuu'); // Display the error message received from the API response
//       }
      
//     } catch (error) {
//       dispatch(SetLoader(false));
    
//       message.error('Error:',error.message);
//     }
    
//   };
//   const formRef = useRef(null);

//   useEffect(() => {
//     if (selectedProduct) {
//       formRef.current.setFieldsValue(selectedProduct);
//     }
//   }, [selectedProduct, fetchData]);

//   return (
//     <Modal
//       title={selectedProduct ? "updateStop" : "addStop"}
//       open={showProductForm}
//       onCancel={() => setShowProductForm(false)}
//       centered
//       width={1000}
//       okText="Save Product"
//       onOk={() => {
//         formRef.current.submit();
//       }}
//       {...(selectedTab==="2" && {footer: false})}
//     >
//       <div>
//         <h1 className="text-primary text-2xl text-center font-semibolf uppercase">
//           {selectedProduct ? "updateStop" : "addStop"}
//         </h1>
//         <Tabs defaultActiveKey='1'
//           activeKey={selectedTab}
//           onChange={(key) => setSelectedTab(key)} 
//         >
//           <items tab="General" key="1">
//             <Form
//               layout="vertical"
//               ref={formRef}
//               onFinish={onFinish}
//             >
//               <Form.Item label="busnumber" name="busnumber" rules={rules}>
//                 <Input type="text" />
//               </Form.Item>
//               <Form.Item label="allstops" name="allstops" rules={rules}>
//                 <TextArea type="text" />
//               </Form.Item>
//               <Row gutter={[16, 16]}>
//                 <Col span={8}>
//                   <Form.Item label="route" name="route" rules={rules}>
//                     <Input type="number" />
//                   </Form.Item>
//                 </Col>
//                 <Col span={8}>
//                   <Form.Item label="totalstops" name="totalstops" rules={rules}>
//                     <Input type="number" />
//                   </Form.Item>
//                 </Col>
//                 <Col span={8}>
                
//                 </Col>
//               </Row>
         
//             </Form>
//           </items>
         
//         </Tabs>
//       </div>
//     </Modal>
//   )
// }

// export default ProductsForm
