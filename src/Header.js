import React from 'react';
import './Header.css';
import logo1 from './images/logo.svg';
import logo2 from './images/Group 20399.svg';

const Head = (props) => {
    return (
        <div >
            <header className='head'>
                <section className='section1'>
               
                    <p id='sec1head'>
                   
                    <div id= 'logo4'>
                    <span ><img src={logo1} id='img1' alt='hrclogo' /></span>
                    </div>
                    <div id= 'logo3'>
                    <span ><img src={logo2} id='img2' alt='abcproductlogo' /></span>
                    <pre>INVOICE LIST</pre>
                    
                    </div>
                    </p> 

                </section>
                
            </header>
        </div>
    )
}
export default Head;