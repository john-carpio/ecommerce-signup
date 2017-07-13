import React from 'react';
import FormHeader from './UserSignup/FormHeader';
import TextField from './UserSignup/TextField';
import CheckboxField from './UserSignup/CheckboxField';
import DateField from './UserSignup/DateField';

class UserSignup extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className='form-container user-signup'>
                <FormHeader/>
                <form className='form-body' onSubmit={(e)=> e.preventDefault()}>
                    <div className='form-row'>
                        <div className='form-field select-field inline-label'>
                            <label htmlFor='title'>
                                Title
                            </label>
                            <div className="custom-select">
                                <select id='title'>
                                    <option value='1'>Mr.</option>
                                    <option value='2'>Ms.</option>
                                    <option value='3'>Ms.</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='form-row clearfix'>
                        <TextField fieldClass='form-field text-field field-half' id='firstName' required={true} fieldLabel='First name'/>
                        <TextField fieldClass='form-field text-field field-half' id='lastName' required={true} fieldLabel='Last name'/>
                    </div>
                    <div className='form-row'>
                        <TextField fieldClass='form-field text-field' id='street' required={true} fieldLabel='Street'/>
                    </div>
                    <div className='form-row'>
                        <TextField fieldClass='form-field text-field' id='town' required={true} fieldLabel='Town'/>
                    </div>
                    <div className='form-row'>
                        <TextField fieldClass='form-field text-field' id='postcode' required={true} fieldLabel='Postcode'/>
                    </div>
                    <div className='form-row'>
                        <DateField minAge={18} fieldClass='form-field date-field' id='dob' required={true} fieldLabel='Date of Birth'/>
                    </div>
                    <div className='form-row'>
                        <CheckboxField fieldClass='form-field check-field custom-checkbox' id='isOver18' required={true} fieldLabel='I confirm that I am 18 years of age or above.'/>
                    </div>
                    <div className='form-row tcenter'>
                        <div className='form-field button-field no-label'>
                            <button className='btn btn-secondary btn-block btn-large'>Submit</button>
                        </div>
                    </div>
                </form>
            </section>
        )
    }
}

export default UserSignup;
