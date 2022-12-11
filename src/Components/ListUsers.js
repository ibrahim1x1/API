import axios from "axios"
import { useEffect, useState } from "react"
import Spinner from 'react-bootstrap/Spinner';
import { Link } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';

export const ListUsers =()=>{
    const [users,setUsers]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        document.title = "Ckp"
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>setUsers(res.data))
        .then(()=>setLoading(false))
        .catch((err)=>console.log(err))

    },[])
    return(
        <div>
            <h2 className="title">Users:</h2>
            {
             loading? <> 
                        <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </>  
             :users.map(user=><Link to ={`/Profiles/${user.id}`}>
                                <ListGroup variant="flush">
                                <ListGroup.Item className="listUsers">{user.name}</ListGroup.Item>
                            </ListGroup>
                            </Link>)
            }
        </div>
    )
}
