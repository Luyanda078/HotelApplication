import React from 'react'
import './Banner.css';
import {Button} from '@mui/material'


function Banner() {
  return (
   <>
    <div className='banner'>
        <div className="banner__info">
            <h4>
                Enjoy Your Vacation with Quest Cuest 
            </h4>
            <h1 style={{marginTop:"0px", color:"#d3b5d1",height:'50px'}}>
                Let us plan you a perfect international Holiday!
            </h1>
            <Button>Explore Now</Button>
        </div>
        <di>
        <div className='booking__div'>
                <div className='booking'>
                    <div className="banner__main__div">
                        <div className="booking__header">
                            <h5>Arrival D</h5>
                        </div>
                    </div>
                    
                </div>
            </div>
        </di>
        
           

        
    </div>
   </>
  )
}

export default Banner