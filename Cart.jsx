
import { GrLinkedin, GrYoutube, GrFacebook, GrInstagram } from 'react-icons/gr'


import img1 from './pic/img1.jpg'
import './Cart.css'




const Cart = ({image,title,skill}) => {
  return (
    <div className="card">
      <div className="box">
            <img src={image} alt="" />
            <div className="info">
          <h2 className="title">{ title}</h2>
          <span className="skill">{skill}</span>
              <div className="share">
                <GrFacebook  className='a'/>
                <GrYoutube  className='a'/>
                <GrLinkedin className='a'/>
                <GrInstagram className='a'/>
              </div>
        </div>
      </div>
  </div>
  )
}

export default Cart
