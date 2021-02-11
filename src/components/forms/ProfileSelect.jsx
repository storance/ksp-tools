import React from 'react';
import { connect } from 'react-redux';

import Form from 'react-bootstrap/Form';

import { planetpacks } from '../../planetpacks';
import { ProfilesSelector } from '../../selectors';
import * as actionCreators from '../../action_creators';

export class ProfileSelect extends React.PureComponent {
    render() {
        return <Form inline>
            <Form.Label className="my-1 mr-2 navbar-text" htmlFor="profile-select">Profile</Form.Label>
            <Form.Control as="select" id="profile-select" size="sm" custom onChange={event => this.props.selectProfile(event.target.value)} value={this.props.activeId}>
                {this.renderProfileOptions()}
            </Form.Control>
            </Form>;
    }

    renderProfileOptions() {
        return Array.from(this.props.profiles.values()).map(profile => {
            return <option key={profile.id} value={profile.id}>{profile.name}</option>
        });
    }
};

function mapStateToProps(state) {
    return {
        profiles : ProfilesSelector.getAllById(state),
        activeId : ProfilesSelector.getActiveId(state)
    }
}

export const ProfileSelectContainer = connect(mapStateToProps, actionCreators)(ProfileSelect);