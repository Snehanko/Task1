import React, { useContext} from "react";
import { ListContext } from "../Context";
import Table from "./Table";

export const Home=()=>{
  const [list] = useContext(ListContext);

 
  return (
    <div>
        <h1>Home Page</h1>
        <Table data={list}/>
    </div>
  );
}
