import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams,Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

export function UserProfile() {
    const {id} = useParams()
    const [userP,setUserP]=useState({})
    const [loade,setLoade]=useState(true)
    useEffect(()=>{
      document.title = "brahim"
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=>setUserP(res.data))
        .then(()=>setLoade(false))
        .catch((err)=>console.log(err))
    },[]);

  return (
    <div>
        {
        loade ? 
        <>
            <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
            </Spinner>
        </>
        : <div className='usercard'>
        <Card className="text-center">
        <Card.Header>{userP.name}</Card.Header>
        <Card.Body>
          <Card.Title>User name : {userP.username}</Card.Title>
          <Card.Text>
            Email : {userP.email}
            <br />
            Phone : {userP.phone}
            <br />
            Adresse : {userP.address.street} {userP.address.suite}, {userP.address.city}, {userP.address.zipcode}
            <br />
          </Card.Text>          
          <Button variant="primary" as={Link} to='/Profiles'>Go Back</Button>
        </Card.Body>
      </Card>
          </div>
    }
    </div>    
  )
}