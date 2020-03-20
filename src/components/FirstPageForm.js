import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderInputField from './FormFields/renderInputField';
import validate from './validate';

const FirstPageForm = (props) => {
    const { handleSubmit } = props;
    return (
        <form className="main" onSubmit={handleSubmit}>
            <div className="main">
                <Field name="email" type="text" component={renderInputField} label="Email"/>
                <Field name="password" type="text" component={renderInputField} label="Password"/>
                <Field name="confirmPassword" type="text" component={renderInputField} label="Confirm Password"/>
            </div>
            <div className="form-footer">
                <div />
                <button className="next" type="submit" >Next &#10132;</button>
            </div>
        </form>
    );
}

export default reduxForm({
    form: 'login',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(FirstPageForm);