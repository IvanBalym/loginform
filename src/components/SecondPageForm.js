import React from 'react';
import { connect } from 'react-redux';
import { Field, Fields, reduxForm } from 'redux-form';
import validate from './validate';
import renderDOBField from './FormFields/renderDOBField';
import renderGenderField from './FormFields/renderGenderField';
import renderRefersField from './FormFields/renderRefersField';

function SecondPageForm(props) {
    const { handleSubmit, prevPage } = props;
    return (
        <form className="main" onSubmit={handleSubmit} >
                <div className="main">
                    <Fields 
                        names={[ 'date_of_birth.day', 'date_of_birth.month', 'date_of_birth.year' ]} 
                        component={renderDOBField}
                        label="Date of Birth"
                    />
                    
                    <Field name="gender" component={renderGenderField} label="Gender" />
                    <div className="genders">
                        <label>
                            <Field name="gender" component="input" type="radio" value="male" />{' '}
                            <div className="front-end box">
                                <div>Male</div>
                            </div>
                        </label>
                        <label>
                            <Field name="gender" component="input" type="radio" value="female" />{' '}
                            <div className="front-end box">
                                <div>Female</div>
                            </div>
                        </label>
                        <label>
                            <Field name="gender" component="input" type="radio" value="unspecified" />{' '}
                            <div className="front-end box">
                                <div>Unspecified</div>
                            </div>
                        </label>
                    </div>
                    

                    <Field
                        name="how_hear_abot_us"
                        component={renderRefersField}
                        label="Where do you hear abot us?">
                    </Field>
                </div>
            <div className="form-footer">
                <button className="back" type="button" onClick={prevPage}>Back</button>
                <button className="next" type="submit">Next &#10132;</button>
            </div>
        </form>
    );
}

SecondPageForm = reduxForm({
    form: 'login',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(SecondPageForm);

SecondPageForm = connect(
state => ({
    initialValues: {
        date_of_birth: {
            day: '01',
            month: '01',
            year: '2000',
        },
        gender: 'unspecified'
    } 
}),
)(SecondPageForm)

export default SecondPageForm

