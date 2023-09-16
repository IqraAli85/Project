import React ,{useState} from 'react'
import { Button } from 'react-bootstrap'
function House() {
    const initial = 0

    const [counter , setcounter] = useState(initial)

    const incremental = () => {
setcounter(counter + 1 )
 
    }
   
  return (
    <div>

      {counter}
      <Button onClick={incremental} variant = 'danger'> incremental</Button>

    </div>
  )
}

export default House
