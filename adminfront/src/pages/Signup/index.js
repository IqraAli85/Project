import {Form, Input, Button, message} from "antd"
import {Link} from "react-router-dom"
import {useNavigate} from "react-router-dom"
import Divider from "../../Component/Divider" 
import { LoginUser, SignupUser } from "../../apicall/users"
import { useEffect } from "react"
 import { useDispatch } from "react-redux";
 import { SetLoader } from "../../redux/loaderSlice";
import axios from "axios"
const rules = [
    {
       required: true,
       message : "field required"
    }
]
function Signup (){
    const redirectUser = useNavigate();
    const loaderDispatch = useDispatch(); 
    const onFinish = async (values) => {
            try{
                 loaderDispatch(SetLoader(true));
                 const response =  await  axios.post("http://127.0.0.1:8000/api/users/signup" ,values);
                 redirectUser("/login");
                loaderDispatch(SetLoader(false));
                 if (response.status === 200){
                    message.success("successful");    
                }
               else {
                     throw new Error(response.message);
               }  
             } catch(error){
                 loaderDispatch(SetLoader(false));
                 message.error("not succesful");         
             }
     };
     useEffect(() => {
        if (!localStorage.getItem("token")) {
          redirectUser("/login");
        }
      }, [redirectUser]);
    return (
          <div className="h-screen bg-primary flex justify-center items-center"> 
               <div className="bg-white p-4 rounded w-[475px]">
                    <h1 className="text-primary py-4 text-center">
                         Administration <span className="text-orange-500"> </span>
                         <br />Signup Page
                    </h1>
                    <Divider />
                    <Form layout="vertical" onFinish={onFinish}>
                        <Form.Item label="Name" name="name" rules={rules}>
                               <Input placeholder="Name" />
                        </Form.Item>
                        <Form.Item label="Email" name="email" rules={rules}>
                               <Input placeholder="Email" />
                        </Form.Item>
                        <Form.Item label="Password" name="password" rules={rules}>
                               <Input placeholder="Password" />
                        </Form.Item>
                        <Button type="primary" htmlType="submit" block className="mt-3" to > Signup </Button>
                        <div className="mt-5 text-center">
                            <span className="text-orange-700">
                              Already have an Account? <Link className="text-primary" to="/login"> 
                              Login
                              </Link>
                            </span>
                        </div>
                    </Form>
               </div>
         </div>
    )

}

export default Signup