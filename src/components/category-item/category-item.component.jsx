import React from "react";
import './category-item.styles.scss'

export const CategoryItem = ({ category }) => {
        const {title, size, imageUrl} = category;
        return (
        <div className = {`${size} category-container`}>
            <div className='background-image'
                style = {{
                    backgroundImage: `url(${imageUrl})`
            }} />
            <div className ='category-body-container'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>);
}
