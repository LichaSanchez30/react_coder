import Container from 'react-bootstrap/Container';
import data from "../data/products.json"
import { useEffect, useState } from 'react';
import{ useParams} from "react-router-dom";

export const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true)
    const {id} = useParams();

    useEffect(()=>{
        const MyPromise = new Promise((resolve, reject) =>{
            setTimeout (() => resolve(data),2000);
        });
        MyPromise.then((response) => {
          
                const finded = response.find((i) => i.id === Number(id))
                setItem(finded)
            
        
        })
        .finally(()=> setLoading(false))
    },[id])

    if(loading) return <Container>Wait....</Container> ;

return(
<Container>
    <h1>Productos</h1>
    <h2>{item.nombre}</h2>
    <img src={item.img}/>
    <h4>{item.detalle}</h4>
    <h5>${item.precio}</h5>

    </Container>

)
}