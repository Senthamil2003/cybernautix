import React from 'react'
import logo from "../image/rmk.png"
import "./home.modules.css"
import "../text/future-earth.ttf"
import circuit from "../image/pngwing.com.png"
export default function Home() {
  return (
    <div className='home'>
        <nav className='hcont'>
        <img src={logo} className="hlogo"/>
        <div className='hc1'>
        <p className='hp1'>Home</p>
        <p className='hp1'>Event</p>
        <p className='hp1'>Registration</p>
        <p className='hp1'>Contact</p>
        </div>
       
        </nav>
        <div className='hbody'>
        <p className='hp2'>DEPARTMENT OF INFORMATION TECHNOLOGY</p>
        <p className='hp3'>presents</p>
        <p className='hp4'>CYBERNAUTIX’22</p>
        </div>
        {/* <div className='hcimg'>
            <img src={circuit} className="himg2"/>

            
        </div> */}
        <div className='htable'>
            <div className='htbcont'>
                <p className='htp1'>When</p>
                <p className='htp2'>14 November 2022</p>

            </div>
            <div className='hline'>

            </div>
            <div className='htbcont'>
               <p className='htp1'>Registration Fee</p>
                <p className='htp2'>Free</p>
            </div>
            <div className='hline'>

            </div>
            <div className='htbcont'>
               <p className='htp1'>Location</p>
                <p className='htp2'>R.M.K Engineering College</p>
            </div>

        </div>
        <button className='hbtn1'>EVENT</button>


        
        
    </div>
  )
}
