
import React from "react";
import "./Stat.css";

function Stat() {
    return (
        
        <div className="Stats">
            <div>
               <h1 className="statheader" > 20+</h1>
               <p className="statp">Countries</p> 
            </div>
            <div>
               <h1 className="statheader" >2000+</h1>
               <p className="statp">Happy Users</p> 
            </div>
            <div>
               <h1 className="statheader" >150+</h1>
               <p className="statp">Giftcards</p> 
            </div>
            <div>
               <h1 className="statheader" >100%</h1>
               <p className="statp">Succesful Transactions</p> 
            </div>
        </div>

    )
}

export default Stat;