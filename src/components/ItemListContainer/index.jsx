import React, {useState, useEffect} from "react";
import Title from "../Title";
import ItemCount from "../ItemCount";
import ItemList from "../ItemList";

const imagenes =[
   {id: 1, image: "https://th.bing.com/th/id/OIP.NcNraL4zLgFPPBCvpq72qAHaE8?pid=ImgDet&rs=1", titulo: "galleta", precio: "$300", detalle: "galletas de chocolate horneadas", stock:"120" },
   {id: 2, image: "https://comohacertorta.com/wp-content/uploads/torta-red-velvet.jpg", titulo: "torta red velvet", precio: "$400", detalle: "torta red velvet rellena de crema", stock: "15"  },
   {id: 3, image: "https://img-global.cpcdn.com/recipes/4c9aaace19177241/1200x630cq70/photo.jpg", titulo: "pie", precio: "$500", detalle: "pie de manzana finamente horneado con placas de hojaldre", stock:"10" },
]

export const ItemListContainer =({texto}) => {
   const [data, setData]=useState([])
   useEffect(()=> {
      const getData = new Promise(resolve=>{
         setTimeout(()=>{
            resolve(imagenes)
         }, 2000)
      });
      getData.then(res => setData(res))
   }, [])

   
   const onAdd = (quantity) =>{
      console.log(`compraste ${quantity} unidades`)

   }
   return(
      <>

        
         <ItemList data={data}/>
      </>
   )
}

export default ItemListContainer