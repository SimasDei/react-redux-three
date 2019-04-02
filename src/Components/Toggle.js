import React from 'react';
import { connect } from 'react-redux';

const Toggle = ({ messageVisibility, dispatch }) => (
  <div>
    {messageVisibility && <p>Component has Been Toggled !</p>}
    <button
      onClick={() =>
        dispatch({
          type: 'TOGGLE_MESSAGE'
        })
      }
    >
      Toggle
    </button>
  </div>
);

const mapStateToProps = state => ({
  messageVisibility: state.message.messageVisibility
});

export default connect(mapStateToProps)(Toggle);
