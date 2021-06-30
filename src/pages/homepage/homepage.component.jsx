import React from "react";
import './homepage.styles.scss';
import Directory from "../../components/directory/directory.component";


const homePage = () =>(
    <div className='homepage'>
        <h1>welcome to my homepage</h1>
        <Directory/>
    </div>   
    
)
export default homePage;