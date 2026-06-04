import React, { useCallback, useEffect,useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";

function Githubprofile(){
  


    return(

        <>
       <Header></Header>
         <Body></Body>
        </>
    )
    

}


ReactDOM.createRoot(document.getElementById('root')).render(<Githubprofile/>);

