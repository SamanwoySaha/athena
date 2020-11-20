import React from 'react';
import './Project.scss';

const Project = () => {
    return (
        <div className = "container">
           <div className="row d-flex align-items-center">
           <div className="col-sm-12 col-md-6">
                <img className= "img-fluid" src="https://i.imgur.com/pkv615c.png" alt=""/>
            </div>
            <div className="col-sm-12 col-md-6 pl-5">
                    <h1 className = "heading pb-3">Stay Running & Project</h1> 
                    <p className= "description pb-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat suscipit doloremque, accusantium dolorum ullam cupiditate similique totam asperiores quis minima.</p>
                    <button id = "main-btn">Contact Us</button>
            </div>
           </div>
        </div>
    );
};

export default Project;