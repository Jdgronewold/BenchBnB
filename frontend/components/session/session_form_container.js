import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, login } from '../../actions/session_actions';


const mapStateToProps = ({session, errors}) => ({
  loggedIn: (session.currentUser === null ? true : false),
  errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
  let processForm;
  if (ownProps.location.pathname === "signup") {
    processForm = (user) => dispatch(signup(user));
  } else {
    processForm = (user) => dispatch(login(user));
  }
  return ({
    formType: ownProps.location.pathname,
    ownProps: ownProps,
    processForm
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
