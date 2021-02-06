import React from 'react';
import { connect } from 'react-redux';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { XCircle } from 'react-bootstrap-icons';

import { ProfilesSelector } from '../selectors'
import ButtonField from './forms/ButtonField';
import CheckboxField from './forms/CheckboxField';
import TextField from './forms/TextField';
import SelectField from './forms/SelectField';
import * as actionCreators from '../action_creators';
import { DIFFICULTY_PRESETS } from '../utils';
import { planetpacks, findPlanetPack } from '../planetpacks';

export class Profiles extends React.PureComponent {
    render() {
        return <>
            <h1>Profiles</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Plantpack</th>
                        <th>Rescale</th>
                        <th>DSN Modifier</th>
                        <th>Antenna Range Modifier</th>
                        <th>Vacuum Occlusion</th>
                        <th>Atmosphere Occlusion</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {Array.from(this.props.profiles.values()).map(this.renderProfile)}
            </Table>
            <Button type="submit" variant="primary" onClick={e => this.onClickWrapper(e, this.props.addProfile)}>Add Profile</Button>

            {this.props.showFormModal && <Modal show onHide={this.props.cancelProfileForm} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.form.getId() ? "Edit Profile" : "Add Profile"}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <TextField label="Name"
                                    name="name"
                                    field={this.props.form.getName()}
                                    update={this.props.updateProfileForm} />

                        <SelectField label="Planet Pack"
                                    name="planetpack"
                                    value={this.props.form.getPlanetPack()}
                                    options={this.getPlanetPackOptions()}
                                    update={this.props.updateProfileForm} />

                        <SelectField label="Rescale"
                                    name="rescale"
                                    value={this.props.form.getRescale()}
                                    options={this.getRescaleOptions()}
                                    update={this.props.updateProfileForm} />

                        <SelectField label="Difficulty Preset"
                                    name="preset"
                                    value={this.props.form.getDifficultyPreset()}
                                    options={this.getDifficultyPresetOptions()}
                                    update={this.props.applyProfileDifficultySettings} />

                        <h4>DSN</h4>
                        <CheckboxField label="Use Custom DSN Levels"
                                    name="useCustomDsnLevels"
                                    value={this.props.form.isUseCustomDsnLevels()}
                                    update={this.props.updateProfileForm} />

                        {!this.props.form.isUseCustomDsnLevels() ? 
                            <TextField label="DSN Modifer"
                                        name="dsnModifier"
                                        field={this.props.form.getDsnModifier()}
                                        update={this.props.updateProfileForm} />
                            : this.renderCustomDsnLevels()
                        }

                        <h4>CommNet Settings</h4>
                        <TextField label="Antenna Range Modifer"
                                    name="rangeModifier"
                                    field={this.props.form.getRangeModifier()}
                                    update={this.props.updateProfileForm} />

                        <TextField label="Vacuum Occlusion"
                                    name="vacOcclusion"
                                    field={this.props.form.getVacOcclusion()}
                                    update={this.props.updateProfileForm} />

                        <TextField label="Atm Occlusion"
                                    name="atmOcclusion"
                                    field={this.props.form.getAtmOcclusion()}
                                    update={this.props.updateProfileForm} />
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={e => this.onClickWrapper(e, this.props.cancelProfileForm)}>Cancel</Button>
                    <Button variant="primary">Save</Button>
                </Modal.Footer>
            </Modal>}
            </>;
    }

    onClickWrapper(event, func) {
        event.preventDefault();
        func();
    }

    getDifficultyPresetOptions() {
        let options = [];

        for (var preset of DIFFICULTY_PRESETS) {
            options.push({
                label: preset.name,
                value: preset.value
            });
        }

        options.push({
            label: 'Custom',
            value: 'Custom'
        })

        return options;
    }

    getPlanetPackOptions() {
        return planetpacks.map(planetpack => {
            return {
                label: planetpack.name,
                value: planetpack.name
            }
        });
    }

    getRescaleOptions() {
        const planetpack = findPlanetPack(this.props.form.getPlanetPack());
        if (!planetpack) {
            return [];
        }

        return planetpack.rescales.map(rescale => {
            return {
                label: rescale.name,
                value: rescale.name
            }
        });
    }

    renderProfile(profile) {
        return <tr>
                <td>{profile.name}</td>
                <td>{profile.planetpack}</td>
                <td>{profile.rescale}</td>
                <td>{profile.dsnModifier}</td>
                <td>{profile.rangeModifier}</td>
                <td>{profile.vacOcclusion}</td>
                <td>{profile.atmOcclusion}</td>
                <td></td>
            </tr>;
    }

    renderCustomDsnLevels() {
        return <>
                <Row>
                    <Col sm={4} className="text-right font-weight-bold mt-3">
                        DSN Levels
                    </Col>
                    <Col sm={8}>
                        <Table striped bordered>
                            <thead>
                                <tr>
                                    <th>Level</th>
                                    <th>Power</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            {this.props.form.getCustomDsnLevels().map(this.renderDsnLevel.bind(this))}
                        </Table>
                    </Col>
                </Row>
                <ButtonField label="Add Level" onClick={this.props.addCustomDsnLevel} />
            </>;
    }

    renderDsnLevel(power, level) {
        const updateFunc = e => {
            this.props.updateProfileForm(['customDsnLevels', level, 'value'], e.target.value);
        };

        const unitsUpdateFunc = e => {
            this.props.updateProfileForm(['customDsnLevels', level, 'units'], e.target.value);
        };

        return <tr>
                <td>{level+1}</td>
                <td>
                    <InputGroup>
                        <Form.Control
                           type="text"
                           name="customDsnPower"
                           value={power.get('value')}
                           isInvalid={power.get('error') !== null}
                           onChange={updateFunc} />
                        <InputGroup.Append>
                            <Form.Control
                                as="select"
                                custom
                                name="customDsnPowerUnits"
                                value={power.get('units')}
                                onChange={unitsUpdateFunc}>

                                <option value="k">k</option>
                                <option value="M">M</option>
                                <option value="G">G</option>
                                <option value="T">T</option>
                            </Form.Control>
                        </InputGroup.Append>
                        {power.get('error') && <Form.Control.Feedback type="invalid">{power.get('error')}</Form.Control.Feedback>}
                    </InputGroup>
                </td>
                <td>
                    <a href="#" onClick={e => {e.preventDefault(); this.props.deleteCustomDsnLevel(level);}}><XCircle color="#D11A2A" size={24} /></a>
                </td>
            </tr>
    }
}

function mapStateToProps(state) {
    return {
        profiles: ProfilesSelector.getAllById(state),
        form: ProfilesSelector.getForm(state),
        showFormModal: ProfilesSelector.getShowFormModal(state)
    }
}

export const ProfilesContainer = connect(mapStateToProps, actionCreators)(Profiles);