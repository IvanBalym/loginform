import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { history } from '../store';
import ProgressBar from '../components/ProgressBar'
import SecondPageForm from '../components/SecondPageForm';
import { setPage } from '../actions/login';

function SecondPage(props) {
    props.setPage(props.location.pathname);
    
    const nextPage = () => {
        history.push('/last-page');
    }

    const prevPage = () => {
        history.push('/');
    }

    return (
        <div className="form-block">
            <ProgressBar />
            <SecondPageForm onSubmit={nextPage} prevPage={prevPage}/>
        </div>
    );
}

const mapStateToProps = state => ({
    loginForm: state.form.login,
});

const mapDispatchToProps = dispatch => ({
    setPage: (page) => dispatch(setPage(page))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SecondPage));