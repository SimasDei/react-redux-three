import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleMessage, getMovies } from '../actions';

const Toggle = ({ messageVisibility, toggleMessage, getMovies }) => (
  <div>
    {messageVisibility && <p>Component has Been Toggled !</p>}
    <button onClick={toggleMessage}>Toggle</button>
    <button onClick={getMovies}>Load Movies</button>
  </div>
);

const mapStateToProps = state => ({
  messageVisibility: state.message.messageVisibility
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleMessage,
      getMovies
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toggle);
