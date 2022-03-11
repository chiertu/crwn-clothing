import React from "react";

export const ItemBox = ({ cloth }) => {
    return (
        <div className ='menu-item'>
            <div className ='content'>
                <h1 className='title'>{cloth}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
 };
