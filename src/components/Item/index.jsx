import "../Item/Item.css"
import swal from 'sweetalert';
import React from 'react';

const Item = ({info})=> {
    return(
        <a href='' className='film'>
            <img src={info.image} alt="" /> <p> {info.titulo} </p> <p> precio: {info.precio}</p>
            <p>DETALLE DEL PRODUCTO: {info.detalle}</p>
            <p>stock: {info.stock}</p>
        </a>
    )
}

export default Item;