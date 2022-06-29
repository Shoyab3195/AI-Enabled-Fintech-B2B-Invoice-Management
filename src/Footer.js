import React from "react";
const color = { color: 'blue',textDecorationLine: 'underline'};
const normal = { color: 'white',};
   

const Footer=()=>(<div className='footer'><p><span style={color}>Privacy Policy</span> |<span style={normal}>@2022 HighRadius Corporation.All rights reserved</span></p></div>);
export default Footer;