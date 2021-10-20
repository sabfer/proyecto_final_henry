import React from "react";
import { useSelector } from "react-redux";
import Dashboard from "./views/Dashboard";
import Error403 from "./views/Error403";

export default function Home() {
  const token = useSelector((state) => state.userToken);
  return <div>{token ? <Dashboard /> : <Error403 />}</div>;
}
