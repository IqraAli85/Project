import { axiosInstance } from "./axiosInstance";

/* add new product*/
export const addStop = async(payload)=>{
       try {
              const response = await axiosInstance.post("http://localhost:8000/api/stop/addStop", payload);
              if (response.status === 200) {
                return response.data;
              } else {
                throw new Error(`Request failed with status ${response.status}`);
              }
            } catch (error) {
              return { error: error.message };
            }
                
};

/* get all products*/
export const fetchStop = async () => {
    try{
           const response = await axiosInstance.post("http://localhost:8000/api/stop/fetchStop");
           return response.data;   
    } catch(error){
           return error.message
    }
};

/* update a existing product by id*/
export const updateStop = async (id, payload) => {
       try{
              const response = await axiosInstance.put(`/api/stop/updateStop/${id}`, payload);
              return response.data;   
       } catch(error){
              return error.message
       }
};

/* delete a existing product  by id*/
export const deleteStop = async (id) => {
       try{
              const response = await axiosInstance.delete(`/api/stop/deleteStop/${id}`);
              return response.data;   
       } catch(error){
              return 'coming from here';
       }
};

