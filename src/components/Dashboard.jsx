<<<<<<< HEAD
import React, { useContext, useState, useEffect } from "react";
import { userContext } from "../context";
=======
import React,{useContext,useState,useEffect} from "react";
import { userContext,refreshContext } from "../context";
>>>>>>> 097dd584b4789a8d764be1b73d5ac88f138e8c87
import DashBalance from "./DashBalance";
import DashRequests from "./DashRequests";
import DashTransactions from "./DashTransactions";
import Profile from "./Profile";
import { getAllRequestsForPayer } from "../solidityMethods";
import axios from "axios";
const { REACT_APP_BACKEND } = process.env;

export default function Dashboard() {
  const id = useContext(userContext)
  const [requestList,setRequestList] = useState();
  const [refresh,useRefresh] = useState(true)
  const data = {
    state : refresh,
    setter : useRefresh
  }
  
  // useEffect(() => {
  //   // axios.post(`${REACT_APP_BACKEND}/getuserprofilebyid`,{id}).then((response)=>{
  //   //   const [first,second,third] = response.userProfile.requests
  //   //   setRequestList([first,second,third])
  //   // })
  //     getAllRequestsForPayer().then((response)=>{
  //       console.log('req res',response)
  //       const [first,second,third] = response
  //       setRequestList([first,second,third])
  //     })
  //   },[])

  return (
    <div className="flex-grow bg-primary text-white">
      <Profile />
      {/* <h1>Dashboard</h1>
      <h2>{`${id}`}</h2> */}
      <refreshContext.Provider value = {data}>
      <DashBalance />
      <DashRequests requests={requestList} />
      <DashTransactions />
      </refreshContext.Provider>
    </div>
  );
}
