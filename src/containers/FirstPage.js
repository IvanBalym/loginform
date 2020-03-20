import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { history } from '../store';
import ProgressBar from '../components/ProgressBar';
import FirstPageForm from '../components/FirstPageForm';
import { setPage } from '../actions/login';

const FirstPage = props => {
    props.setPage(props.location.pathname);
    
    const nextPage = () => {
        history.push('/second-page');
    }

    return (
        <div className="form-block">
            <ProgressBar />
            <FirstPageForm onSubmit={nextPage} />
        </div>
    );
}

const mapStateToProps = state => ({
    loginForm: state.form.login,
});

const mapDispatchToProps = dispatch => ({
    setPage: (page) => dispatch(setPage(page)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FirstPage));