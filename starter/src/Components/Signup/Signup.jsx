import React from 'react';
import UserForm from './UserForm';
import PropTypes from 'prop-types';
import TopImage from '.../../../public/images/signup.jpg';

const SignUp = (props) =>{
    const submitUser = (userTitle, firstName, lastName, email, phoneNumber, gender, userBirth) => {
        console.log(userBirth);
        props.submitUser({
            userTitle:userTitle, 
            firstName:firstName, 
            lastName:lastName, 
            email:email, 
            phoneNumber:phoneNumber, 
            gender:gender, 
            userBirth:userBirth
        })
        
    }
    return (
        <>
            <div className="image-location row">
                <img src={TopImage} alt="Signup Img." />
            </div>
            <UserForm submitUser={submitUser}/>
        </>
    );
}

SignUp.propTypes = {
    "submitUser": PropTypes.func.isRequired
}

export default SignUp;