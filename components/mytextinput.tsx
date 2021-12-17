import React from 'react';
import { useField,useFormikContext } from 'formik';
import { FcApprove, FcCancel } from "react-icons/fc";

//  const errorMessage:{
//     'lengthError':{},
//     'lowercaseError':{},
//     'uppercaseError':{},
//     'numberError':{},
//     'specialCharacterError':{},
//  } = {
//     lengthError:'Length less than 8 characters',
//     lowercaseError:'Minimum one lower case character',
//     uppercaseError:'Minimum one upper case character',
//     numberError:'Minimum one number',
//     specialCharacterError:'Minimum one special character',
//  }

 const MyTextInput:React.FC<any> = ({label,validate,...props})=> {
    
    const [field, meta, helpers] = useField({
        name:props.name,
        validate,
    });

    const {setValue,setTouched} = helpers;
    const { validateField } = useFormikContext();

    const handleErrorOfInput = (error: any) => {
        let errorKeys = [];
        for(var k in error) errorKeys.push(k);
        return (
          <div>
            <div>Password should contain minimum</div>
            {errorKeys.map(element => {
                return <>
                    <div key={error[element].id}>
                        <span>{error[element].state? <FcCancel /> :<FcApprove />}</span>
                        <span>{error[element].message}</span>
                    </div>
                </>
            })}
          </div>
        );
      };
    
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className='text-input' {...field} {...props} onChange={(event)=>{
                setValue(event.target.value,false);
                validateField(props.name);
            }}/>
            <div className="error">{handleErrorOfInput(meta.error)}</div>
                
        </>
    )
}

export default MyTextInput;
