import React from 'react';
import { connect } from 'react-redux';

const Toggle = ({ messageVisibility }) => (
  <div>
    {messageVisibility && <p>Component has Been Toggled !</p>}
    <button>Toggle</button>
  </div>
);

const mapStateToProps = state => ({
  messageVisibility: state.message.messageVisibility
});

export default connect(mapStateToProps)(Toggle);
