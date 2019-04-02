import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleMessage } from '../actions';

const Toggle = ({ messageVisibility, toggleMessage }) => (
  <div>
    {messageVisibility && <p>Component has Been Toggled !</p>}
    <button onClick={toggleMessage}>Toggle</button>
  </div>
);

const mapStateToProps = state => ({
  messageVisibility: state.message.messageVisibility
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleMessage
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toggle);
