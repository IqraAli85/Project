import React from 'react'
import "../Style.css/Testimonial.css"
import na from '../images/1.png'
import ja from '../images/11zon_resized.jpg'
import hh from'../images/downloadd.jpg'
import jj from '../images/images.jpg'
import y from '../images/y.jpg'

const Testimonial = () => {
  return (
    <div>
      <div classNameName="testm">

        
      <div className="marquee">
  <div className="marquee__group">
    <img src={na}/>
    <img src={ja}/>
    <img src={hh}/>
    <img src={jj}/>
    <img src={y}/>
  </div>

  <div aria-hidden="true" className="marquee__group">
    <img src={na} alt=''/>
    <img src={ja} alt=''/>
    <img src={hh} alt=''/>
    <img src={jj} alt=''/>
    <img src={y} alt=''/>
  </div>
</div>



<div className="marquee marquee--reverse">
  <div className="marquee__group">
    <img src='' alt=''/>
    <img src='' alt=''/>
    <img src='' alt=''/>
    <img src='' alt=''/>
    <img src='' alt=''/>
  </div>

  <div aria-hidden="true" className="marquee__group">
    <img src='' alt=''/>
    <img src='' alt=''/>
    <img src='' alt=''/>
    <img src='' alt=''/>
    <img src='' alt=''/>
  </div>
</div>

      </div>
    </div>
  )
}

export default Testimonial
