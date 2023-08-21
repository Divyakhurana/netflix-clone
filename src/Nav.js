import React, { useEffect, useState } from "react";
import './Nav.css'


function Nav() {

    const[show, handleShow]=useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                handleShow(true);
                // alert("1")
            }
            else{
    
                // alert("2")
                handleShow(false);
            }
           })

    },[show])


    return (
        <>
            <div className={ show  ? 'nav' : "nav_black" }>
                <img className="nav_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1200px-Logonetflix.png" alt="Netflix Logo" />
                <img  className="nav_avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="img"/>

            </div>
        </>
    )
}
export default Nav