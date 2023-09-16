// rce
import React, { Component } from 'react'

export class Props extends Component {
//  rconst
constructor(props) {

  super(props)

  this.state = {
    student : 'madiha',
    course : 'reactjs'

     
  }




}

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
    render() {
        var {student ,course} = this.state 
    return (
      <div>
        <p>
            {student}
        </p>

<p>
    {course}
</p>
      </div>
    )
  }
}

export default Props
