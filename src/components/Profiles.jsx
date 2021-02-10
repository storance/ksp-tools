import React from 'react';
import { connect } from 'react-redux';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrashAlt, faClone, faEdit } from '@fortawesome/free-solid-svg-icons';

import { ProfilesSelector } from '../selectors'
import { ProfileFormModalContainer } from './ProfileFormModal';
import { POWER_UNITS } from '../utils';
import NumberFormat from './format/NumberFormat';
import * as actionCreators from '../action_creators';

export class Profiles extends React.PureComponent {
    render() {
        const addOnclick = e => {
            e.preventDefault();
            this.props.addProfile();
        };

        return <>
            <Row className="mt-2">
                <Col sm="10">
                    <h1>Profiles</h1>
                </Col>
                <Col sm="2" className="my-auto">
                    <Button type="submit" variant="primary" size="sm" onClick={addOnclick}>
                        <FontAwesomeIcon icon={faPlus} /> Add
                    </Button>
                </Col>
            </Row>
            <Table className="mt-4" striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Plantpack</th>
                        <th>Rescale</th>
                        <th>DSN</th>
                        <th>Antenna Range Modifier</th>
                        <th>Vacuum Occlusion</th>
                        <th>Atmosphere Occlusion</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from(this.props.profiles.values()).map(this.renderProfile)}
                </tbody>
            </Table>

            {this.props.form.isShow() && <ProfileFormModalContainer />}
            </>;
    }

    renderProfile = (profile) => {
        const editOnClick = e => {
            e.preventDefault();
            this.props.editProfile(profile.id);
        };

        const deleteOnClick = e => {
            e.preventDefault();
            this.props.deleteProfile(profile.id);
        };

        const cloneOnClick = e => {
            e.preventDefault();
            this.props.cloneProfile(profile.id);
        };

        return <tr key={profile.id}>
                <td>{profile.name}</td>
                <td>{profile.planetpack}</td>
                <td>{profile.rescale}</td>
                <td>
                    {profile.customDsnLevels 
                        ? <ol> {profile.customDsnLevels.map(this.renderDsnLevel) }</ol>
                        : <>Modifier: <NumberFormat value={profile.dsnModifier} fractionDigits={2} /> </>
                    }
                </td>
                <td><NumberFormat value={profile.rangeModifier} fractionDigits={2} /></td>
                <td><NumberFormat value={profile.vacOcclusion} fractionDigits={2} /></td>
                <td><NumberFormat value={profile.atmOcclusion} fractionDigits={2} /></td>
                <td>
                    <a href="#" title="Clone" onClick={cloneOnClick}>
                        <FontAwesomeIcon icon={faClone} />
                    </a>
                    {profile.editable && <>
                        <a href="#" title="Edit" className="pl-1" onClick={editOnClick}>
                            <FontAwesomeIcon icon={faEdit} />
                        </a>
                        <a href="#" title="Delete" className="pl-1" onClick={deleteOnClick}>
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </a>
                    </>}</td>
            </tr>;
    }

    renderDsnLevel(dsnLevel) {
        return <li key={dsnLevel}>
                <NumberFormat value={dsnLevel} fractionDigits={3} units={POWER_UNITS} unitsSeparator="" />
            </li>
    }
}

function mapStateToProps(state) {
    return {
        profiles: ProfilesSelector.getAllById(state),
        form: ProfilesSelector.getForm(state)
    }
}

export const ProfilesContainer = connect(mapStateToProps, actionCreators)(Profiles);