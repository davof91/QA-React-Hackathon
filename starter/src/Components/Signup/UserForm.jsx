import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

const UserForm = (props) =>{
    const [userTitle, setUserTitle] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [gender, setGender] = useState("");
    const [userBirth, setBirthDate] = useState(new Date());

    const handleSubmit  = event => {
        event.preventDefault();
        props.submitUser(userTitle, firstName, lastName, email, phoneNumber, gender, userBirth);
        setUserTitle("");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhoneNumber("");
        setBirthDate(null);
    }

    return (
        <form onSubmit={ handleSubmit } className="col-md-12">
            <div className="form-group">
                <label htmlFor="userTitle" className="form-label">Title*:&nbsp;</label>
                <select name="userTitle" className="form-control" value={userTitle} onChange={(e)=>{ setUserTitle(e.target.value) }}>
                    <option value=""></option>
                    <option value="Mr.">Mr.</option>
                    <option value="Ms.">Ms.</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="firstName" className="form-label">First Name*:&nbsp;</label>
                <input type="text" className="form-control" name="firstName" value={ firstName }
                        onChange={(e)=>{ setFirstName(e.target.value) }} ></input>
            </div>
            <div className="form-group">
                <label htmlFor="lastName" className="form-label">Last Name*:&nbsp;</label>
                <input type="text" className="form-control" name="lastName" value={ lastName }
                        onChange={(e)=>{ setLastName(e.target.value) }} ></input>
            </div>
            <div className="form-group">
                <label htmlFor="email" className="form-label"> Email*:&nbsp;</label>
                <input type="text" className="form-control" name="email" value={ email }
                        onChange={(e)=>{ setEmail(e.target.value) }} ></input>
            </div>
            <div className="form-group">
                <label htmlFor="phoneNumber" className="form-label">Phone nunmber:&nbsp;</label>
                <input type="text" className="form-control" name="phoneNumber" value={ phoneNumber }
                        onChange={(e)=>{ setPhoneNumber(e.target.value) }} ></input>
            </div>
            <div className="form-group" className="form-label">
                <label htmlFor="userBirthDate">Date of Birth:&nbsp;</label>
                <DatePicker className="form-control" selected={userBirth} onChange={date => setBirthDate(date)} />
            </div>
            <div className="form-group">
                <label htmlFor="gender" className="form-label">Gender:&nbsp;</label>
                <select name="gender" className="form-control" value={gender} onChange={(e)=>{ setGender(e.target.value) }}>
                    <option value=""></option>
                    <option value="Male">Male</option>
                    <option value="Female">Femnale</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div className="form-group">
                 <input type="submit" value="Submit" className="btn btn-primary" disabled={
                        firstName == "" ||
                        lastName =="" ||
                        userTitle =="" ||
                        email == "" 
                    }
                    className={
                        firstName != "" &&
                        lastName !="" &&
                        userTitle !="" &&
                        email != "" ? "btn-primary" : "btn-danger"} />
            </div>
        </form>
    )
};

UserForm.propTypes = {
    'submitUser': PropTypes.func.isRequired 
};

export default UserForm;