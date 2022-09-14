import React from "react";
import Title from "../Title";
import ItemCount from "../ItemCount";
export const ItemListContainer =() => {
   const onAdd = (quantity) =>{
      console.log(`compraste ${quantity} unidades`)

   }
   return(
      <>
         <Title greeting="usuario"/>
        <ItemCount initial={1} stock={5} onAdd={onAdd} />
      </>
   )
}
export default ItemListContainer