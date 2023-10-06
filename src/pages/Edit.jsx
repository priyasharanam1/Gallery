import React, {useState, createRef} from 'react'
import { useSearchParams } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import Text from '../components/Text';
import { exportComponentAsJPEG } from 'react-component-export-image';

const EditPage = () => {
    const [params] = useSearchParams();
    const [count,setCount] = useState(0);
    const memeRef = createRef();

    const addText = () => {
        setCount(count+1);
    }
  return (
    <div>
    <div style={{width:'50rem', border:'1px solid black'}} ref={memeRef} className='meme mt-2 mb-2'>
      <img src={params.get("url")} alt='meme' style={{margin:'10px', width:'22rem', height:'100%'}}/>
      {
        Array(count).fill(0).map(e => <Text/>)
      }
    </div>
    <Button style={{margin:'10px'}} onClick={addText}>Add Text</Button>
    <Button style={{margin:'5px'}} variant="success" onClick={(e)=> exportComponentAsJPEG(memeRef)}>Save</Button>
    </div>
  )
}

export default EditPage
