import React from 'react';
import UserForm from './UserForm';
import PropTypes from 'prop-types';
import TopImage from '.../../../public/images/signup.jpg';
import generateTodoId from '../utils/generateId'

const SignUp = (props) =>{
    const submitUser = (userTitle, firstName, lastName, email, phoneNumber, gender, userBirth) => {
        let id = generateTodoId()
        props.submitUser({
            userTitle:userTitle, 
            firstName:firstName, 
            lastName:lastName, 
            email:email, 
            phoneNumber:phoneNumber, 
            gender:gender, 
            userBirth:userBirth,
            _id:id
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