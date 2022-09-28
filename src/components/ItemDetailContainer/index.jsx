import React, {useState,  useEffect} from "react";
import ItemDetail from "../ItemDetail";
import ItemCount from "../ItemCount";


const torta= {id:1, image: "https://i0.wp.com/blog.marianlaquecocina.com/wp-content/uploads/2019/02/20190208_170242-e15498121382011.jpg" , titulo: "red velvet", descripcion: "torta de red velvet hecha con masa de frutos rojos"}


const ItemDetailContainer =() =>{
    const [data, setData] = useState({})

    useEffect(()=> {
        const getData = new Promise(resolve=> {
            setTimeout(()=>{
                resolve(torta)
            }, 2000)
        });
        getData.then(res=> setData(res))
    }, [])

    return(
        <ItemDetail data={data}/>
       
      
    );
 }

 export default ItemDetailContainer;