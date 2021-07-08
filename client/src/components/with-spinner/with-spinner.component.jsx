import React from 'react';
import{SpinnerOverlay, SpinnerContainer} from './with-spinner.style';

const WithSpinner =WraperCommponent=>{
const Spinner=({isLoading ,...otherProps})=>{
   return isLoading ? (<SpinnerOverlay>
        <SpinnerContainer/>
    </SpinnerOverlay>):(
    <WraperCommponent {...otherProps}/>
    );}
return Spinner;
}

export default WithSpinner;