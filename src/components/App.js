import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import Elements from "./Elements";


function App(){
    function getPage(){
    const url = window.location.pathname;
    if(url === "/about"){
        return <AboutPage/>
    }
    if(url === "/elements"){
        return <Elements/>
    }
    return <HomePage/>
};
return (<div className="container-fluid">
<Header/>
{getPage()}
</div>);

}

export default App;