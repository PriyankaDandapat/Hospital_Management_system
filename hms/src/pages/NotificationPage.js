import React from "react";
import Layout from "./../components/Layout";
import {Tabs, message} from "antd";
import { useSelector,useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../redux/features/alertSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Notification.css";

const NotificationPage = () => {
    const dispatch =useDispatch();
    const navigate=useNavigate();
    const {user} =useSelector((state) => state.user)
    
    //handle read notification
     const handleMarkAllRead =async()=>{
        try{
            dispatch(showLoading());
            const res =await axios.post
            ('/api/v1/user/get-all-notification',
            {
                userId:user._id,
            },
            {
                headers:{
                    Authorization:`Bearer ${localStorage.getItem("token")}`,
                },
            });
            dispatch(hideLoading());

            if(res.data.success){
                message.success(res.data.message)
            }else{
                message.error(res.data.message);
            }


        }catch(error){
            dispatch(hideLoading());
            console.log(error);
            if (error.response) {
                console.log("Response data:", error.response.data);
                console.log("Response status:", error.response.status);
                console.log("Response headers:", error.response.headers);
             } else if (error.request) {
                console.log("No response received:", error.request);
             } else {
                console.log("Error setting up the request:", error.message);
             }
             message.error("Something went wrong");

        }
     };

     //delete notifications
     const handleDeleteAllRead=async()=>{
      try{
        dispatch(showLoading());
        const res =await axios.post('/api/v1/user/delete-all-notification',{userId:user._id},{
          headers:{
            Authorization:`Bearer ${localStorage.getItem('token')}`,
          }
        })
        dispatch(hideLoading());
        if(res.data.success){
          message.success(res.data.message);
        }else{
          message.error(res.data.message);
        }

      }catch(error){
        console.log(error);
        message.error("Something went wrong");
      }

     };


 return (
  <Layout>
  <h3 className="text-center text-dark p-3">Notification Page</h3>
  <Tabs className="tabs">
    <Tabs.TabPane tab="unRead" key={0}>
      <div className="d-flex justify-content-end tabspane">
        <button className="noti-functions ">
          <h6
            className="p-1 "
            style={{ cursor: "pointer" }}
            onClick={handleMarkAllRead}
          >
            Mark All Read
          </h6>
        </button>
      </div>
      {user?.notification.map((notificationMsg) => (
        <div className="card">
          <div
            className="card-text"
            onClick={() =>  navigate(notificationMsg.onClickPath)}
          >
            {notificationMsg.message}
          </div>
        </div>
      ))}
    </Tabs.TabPane>
    <Tabs.TabPane tab="Read" key={1}>
      <div className="d-flex justify-content-end">
        <button className="noti-functions">
          <h6
            className="p-1 "
            style={{ cursor: "pointer" }}
            onClick={handleDeleteAllRead}
          >
            Delete All Read
          </h6>
        </button>
      </div>
      {user?.seennotification.map((notificationMsg) => (
        <div className="card">
          <div
            className="card-text"
            onClick={() => navigate(notificationMsg.onClickPath)}
          >
            {notificationMsg.message}
          </div>
        </div>
      ))}
    </Tabs.TabPane>
  </Tabs>
</Layout>
);
};

export default NotificationPage;