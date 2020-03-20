import React from 'react';
import { connect } from 'react-redux';

function ProgressBar(props) {
  return (
    <div className="progress-bar">
      <div className="title">SignUp</div>
      <div className={`bar page-${props.page}`}>
          <div className="first"></div>
          <div className="second"></div>
          <div className="third"></div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  page: state.login.page,
});

export default connect(mapStateToProps)(ProgressBar);