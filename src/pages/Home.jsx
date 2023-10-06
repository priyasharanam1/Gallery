import React, {useEffect, useState} from 'react'
import { getAllMemes } from '../api/Memes'
import MemeCard from '../components/Card'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HomePage = () => {
    const [data,setData] = useState([]);

    useEffect(()=>{
       getAllMemes().then((memes) => setData(memes.data.memes))
    },[])

  return (
    <div>
    <Row>
      {
        data.map((el)=>(
            <Col><MemeCard img={el.url} title={el.name} /></Col>
        ))
      }
    </Row>
    </div>
  )
}

export default HomePage
