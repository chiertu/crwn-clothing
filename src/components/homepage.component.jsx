import React from 'react';
import './homepage.styles.scss'
import { ItemBox } from './itembox.component.jsx'

const HomePage = () =>{
    const items = ['HATS', 'JACKETS', 'SNEAKERS', 'WOMEN', 'MEN'];
    return  <div className ='homepage'>
                <div className ='directory-menu'>
                    {items.map((item) => {return <ItemBox key={item} cloth={item} ></ItemBox>})}
                </div>
            </div>
};

export default HomePage;