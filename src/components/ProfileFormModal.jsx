import React from 'react';
import { connect } from 'react-redux';

import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { ProfilesSelector } from '../selectors'
import DsnLevelEditor from './forms/DsnLevelEditor';
import CheckboxField from './forms/CheckboxField';
import TextField from './forms/TextField';
import SelectField from './forms/SelectField';
import NumberFormat from './format/NumberFormat';
import * as actionCreators from '../action_creators';
import { DIFFICULTY_PRESETS, POWER_UNITS } from '../utils';
import { planetpacks, findPlanetPack } from '../planetpacks';

export class ProfileFormModal extends React.PureComponent {
    render() {
        const cancelOnClick = e => {
            e.preventDefault();
            this.props.cancelProfileForm();
        };

        const saveOnClick = e => {
            e.preventDefault();
            this.props.saveProfile();
        };

        return <Modal show onHide={this.props.cancelProfileForm} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.form.getId() ? "Edit Profile" : "Add Profile"}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <TextField
                            label="Name"
                            name="name"
                            field={this.props.form.getName()}
                            update={this.props.updateProfileForm} />

                        <SelectField
                            label="Planet Pack"
                            name="planetpack"
                            value={this.props.form.getPlanetPack()}
                            options={this.getPlanetPackOptions()}
                            update={this.props.updateProfileForm} />

                        <SelectField
                            label="Rescale"
                            name="rescale"
                            value={this.props.form.getRescale()}
                            options={this.getRescaleOptions()}
                            update={this.props.updateProfileForm} />

                        <SelectField
                            label="Difficulty Preset"
                            name="preset"
                            value={this.props.form.getDifficultyPreset()}
                            options={this.getDifficultyPresetOptions()}
                            update={this.props.applyProfileDifficultySettings} />

                        <h3>DSN</h3>
                        <hr />
                        
                        <CheckboxField
                            label="Use Custom DSN Levels"
                            name="useCustomDsnLevels"
                            value={this.props.form.isUseCustomDsnLevels()}
                            update={this.props.updateProfileForm} />

                        {!this.props.form.isUseCustomDsnLevels() ? 
                            <TextField
                                label="DSN Modifer"
                                name="dsnModifier"
                                field={this.props.form.getDsnModifier()}
                                update={this.props.updateProfileForm} />
                            : <DsnLevelEditor
                                dsnLevels={this.props.form.getCustomDsnLevels()}
                                fieldName="customDsnLevels"
                                update={this.props.updateProfileForm}
                                addLevel={this.props.addCustomDsnLevel}
                                deleteLevel={this.props.deleteCustomDsnLevel} />
                        }

                        <h3>CommNet Settings</h3>
                        <hr />
                        <TextField
                            label="Antenna Range Modifer"
                            name="rangeModifier"
                            field={this.props.form.getRangeModifier()}
                            update={this.props.updateProfileForm} />

                        <TextField
                            label="Vacuum Occlusion"
                            name="vacOcclusion"
                            field={this.props.form.getVacOcclusion()}
                            update={this.props.updateProfileForm} />

                        <TextField
                            label="Atm Occlusion"
                            name="atmOcclusion"
                            field={this.props.form.getAtmOcclusion()}
                            update={this.props.updateProfileForm} />
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={cancelOnClick}>Cancel</Button>
                    <Button variant="primary" onClick={saveOnClick}>Save</Button>
                </Modal.Footer>
            </Modal>;
    }

    getDifficultyPresetOptions() {
        let options = [];

        for (var preset of DIFFICULTY_PRESETS) {
            options.push({
                label: preset.get('name'),
                value: preset.get('name')
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
}

function mapStateToProps(state) {
    return {
        profiles: ProfilesSelector.getAllById(state),
        form: ProfilesSelector.getForm(state)
    }
}

export const ProfileFormModalContainer = connect(mapStateToProps, actionCreators)(ProfileFormModal);