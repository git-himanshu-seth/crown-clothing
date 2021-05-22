import React from 'react';

import './custom-button.style.scss'

const CustomButton=({children ,isGoogleSignIn, ...otherprops})=>(
    
        <button  {...otherprops} className={`${isGoogleSignIn ? 'google-sign-in':''} custom-button`}>
            {children}
            
        </button>
    
)
export default CustomButton;