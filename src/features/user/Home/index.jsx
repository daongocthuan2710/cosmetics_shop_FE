import React from "react";
import {Route, Routes, useMatch  } from 'react-router-dom';
import NotFound from "../../../components/NotFound";
function Home(props) {
  const match = useMatch (); 
  console.log({match});
  return (
    <div>HomePage</div>
    // <Switch>  
    //   <Route exact path={match.url} component={MainPage}></Route>
    //   <Route path={`${match.url}/add`} component={AddEditPage}></Route>
    //   <Route path={`${match.url}/:ProductId`} component={AddEditPage}></Route>
    //   <Route component={NotFound}></Route>
    // </Switch> 
  );
}

export default Home;
