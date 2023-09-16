import Carousel from 'react-bootstrap/Carousel';
import yb from '../images/2.png'
import xz from '../images/kk.jpg'
import lz from '../images/24.jpg'
function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item style ={{height:'500px'}} >
        { <img 
          className="slider"
          src={xz}
          alt="First slide"
        
        /> }
        
        <Carousel.Caption>
          
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  style ={{height:'500px'}} >
        <img
          className="slider"
          src={yb}
          alt="Second slide"
          
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  style ={{height:'500px'}}  >
        <img
          className="slider"
          src={lz}
          alt="Third slide"
        />

        <Carousel.Caption>
       
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;