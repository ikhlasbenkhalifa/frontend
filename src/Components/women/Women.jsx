import React from 'react'
import './women.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import women_image from '../Assets/women_image.png'

const Women = () => {
  return (
    <div className='women'>
        <div className="women-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
             <div className="women-hand-icon">
                <p>New</p>
                <img src={hand_icon} alt=''/>
             </div>
             <p>Collections</p>
             <p>For women</p>
        </div>
         <div className="women-latest-btn">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt=''/>
         </div>
        </div>
        <div className="women-right">
        <img src={women_image} alt=''/>
        </div>
      
    </div>
  )
}

export default Women
