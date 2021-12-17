import { NextPage } from 'next';
import React from 'react';
import { Formik, Form } from 'formik';
import MyTextInput from '../components/mytextinput';

const Signup:NextPage=()=> {

    const handleSubmit = (values:any) =>{
        console.log(values);
        alert(values);
    }

    const initialValues = {
        password:'',
    };

    const customPasswordValidation = (pass:string)=>{
        const passErrors = {
            lengthError:{
                            id:1,
                            state: false,
                            message:' 8 characters',
                        },
            lowercaseError:{
                            id:2,
                            state:false,
                            message:'one lower case character',
                        },
            uppercaseError:{
                            id:3,
                            state:false,
                            message:'one upper case character',
                        },
            numberError:{
                            id:4,
                            state:false,
                            message:'one number'
                        },
            specialCharacterError:{
                            id:5,
                            state:false,
                            message:'one special character'
                        }
        };

        if(pass.length < 8){
            passErrors.lengthError.state = true;
        }

        if(!/[a-z]+/g.test(pass)){
            passErrors.lowercaseError.state = true;
        }
        
        if(!/[0-9]+/g.test(pass)){
            passErrors.numberError.state = true;
        }

        if(!/[A-Z]+/g.test(pass)){
            passErrors.uppercaseError.state = true;
        }

        if(!/[!@#$%^&*]+/g.test(pass)){
            passErrors.specialCharacterError.state = true;
        }
        if(passErrors.lengthError || passErrors.lowercaseError || passErrors.numberError || passErrors.uppercaseError || passErrors.specialCharacterError){
            return passErrors;
        }
        return null;
    }

    return (
        <>
            <div>
                Signup
            </div>
            <Formik
                onSubmit={values=>console.log(values)}
                initialValues={initialValues}
                validateOnChange={false}
            >
                <Form>
                        <MyTextInput
                            name="password"
                            type="password"
                            validate={(val: any) => customPasswordValidation(val)}
                        />
                        <button type="submit">SAVE</button>
                </Form>
                
            </Formik>
        </>
    )
}

export default Signup;
