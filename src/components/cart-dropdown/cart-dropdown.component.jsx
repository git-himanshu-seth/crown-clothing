import React from'react';
import CustomButton from'../custom-button/custom-button.component'
import'./cart-dropdown.style.scss'

const CratDropdown =()=>(
    <div className='cart-dropdown'>
        <div className='cart-items'></div>
        <CustomButton>Go To CheckOut</CustomButton>
    </div>
)

export default CratDropdown