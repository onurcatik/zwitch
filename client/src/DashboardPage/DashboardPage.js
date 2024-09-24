import React, { useEffect } from "react";
import "./dashboardPage.css";
import { Nav } from "./Nav/Nav";
import { Sidebar } from "./Sidebar/Sidebar.js";
import { Content } from "./Content/Content.js";
import { useChannels, useUserDetails } from "../shared/hooks";
import { LoadingSpinner } from "../shared/components/LoadingSpinner.js";
import { connectWithSocketServer } from "../socketConn/socketConn.js";




export const DashboardPage = () => {
  const { getChannels, isFetching, followedChannels, allChannels } = useChannels()
  const { isLogged } = useUserDetails()

  useEffect(() => {
    getChannels(isLogged)
    connectWithSocketServer()
  }, [])

  if (isFetching){
    return <LoadingSpinner/>
  }
  return (
    <div className="dashboard-container">
      <Nav />
      <Sidebar channels = {followedChannels}/>
      <Content channels = {allChannels} getChannels={getChannels}/>
    </div>
  );
};