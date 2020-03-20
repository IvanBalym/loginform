import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import ProgressBar from '../components/ProgressBar';
import moment from 'moment';
import { setPage } from '../actions/login';

function LastPage(props) {
  props.setPage(props.location.pathname);
  
  const goToDashboard = () => {
    const data = props.loginForm.values;
    data.date_of_birth = moment(`${data.date_of_birth.year}-${data.date_of_birth.month}-${data.date_of_birth.day}`, 'YYYY-MM-DD').unix();
    console.log(data);
  }

  return (
    <div className="form-block">
        <ProgressBar />
        <div className="check-symbol">
            <span>&#10004;</span>
        </div>
        <div className="dashboard-btn">
            <button type="button" onClick={goToDashboard}>Go to Dashboard &#10132;</button>
        </div>
    </div>
  );
}

const mapStateToProps = state => ({
  loginForm: state.form.login,
});
const mapDispatchToProps = dispatch => ({
  setPage: (page) => dispatch(setPage(page)),
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(LastPage));