import React from 'react';
import './form-input.styles.scss';


const FormInput = ({ label, ...otherProps}) => {
    return (
    <div className='form-input-block'>
         <input className='form-input-field' {...otherProps} />
         {label && (<label className= {`form-input-label ${otherProps.value.length? 'shrink':''}`}>
             {label}</label>)}
     </div>
    )
};

export default FormInput;