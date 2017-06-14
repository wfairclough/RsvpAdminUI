import React from 'react';
import './invitationdetails.scss';

class InvitationDetails extends React.Component {

  render() {
    return (
      <div className="invitationdetails-component">
        Invitation with code: {this.props.match.params.code}
      </div>
    );
  }
}

InvitationDetails.displayName = 'MainInvitationDetails';
InvitationDetails.propTypes = {};
InvitationDetails.defaultProps = {};

export default InvitationDetails;
