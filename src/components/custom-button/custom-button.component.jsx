import React from 'react';

import './custom-button.style.scss'

const CustomButton=({children ,isGoogleSignIn,inverted, ...otherprops})=>(
    
        <button  {...otherprops} className={` ${inverted ? 'inverted':''} ${isGoogleSignIn ? 'google-sign-in':''} custom-button`}>
            {children}
            
        </button>
    
)
export default CustomButton;