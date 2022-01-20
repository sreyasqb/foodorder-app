import React from 'react';
import FoodTile from '../components/FoodTile';
import {menu} from "../data";
const MenuPage=()=>{
    return(
        <div>
            {menu.map((item)=><FoodTile item={item}/>)}
            
                       
        </div>
    );
}
export default MenuPage;