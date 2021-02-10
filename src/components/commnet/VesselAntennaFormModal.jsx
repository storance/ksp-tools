import React from 'react';
import { Map, List } from 'immutable';
import { connect } from 'react-redux';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { AntennaRangeSelector } from '../../selectors';
import AntennaPowerField from '../forms/AntennaPowerField';
import SelectField from '../forms/SelectField';
import RadioSelectField from '../forms/RadioSelectField';
import CheckboxField from '../forms/CheckboxField';
import TextField from '../forms/TextField';
import DefinitionList from '../DefinitionList';
import { MOD_TO_DISPLAY_NAME,
    ANTENNA_TYPE_TO_DISPLAY,
    DISTANCE_UNITS_DISPLAY,
    TYPE_RELAY,
    TYPE_DIRECT,
    REFLECTORS_BY_MOD,
    formatNumber } from '../../utils';
import * as actionCreators from '../../action_creators';


const ANTENNA_TYPE_OPTIONS = [
    {
        label: ANTENNA_TYPE_TO_DISPLAY.get(TYPE_DIRECT),
        value: TYPE_DIRECT
    },
    {
        label: ANTENNA_TYPE_TO_DISPLAY.get(TYPE_RELAY),
        value: TYPE_RELAY
    }
];

export class VesselAntennaFormModal extends React.PureComponent {
    render() {
        const cancelOnClick = e => {
            e.preventDefault();
            this.props.cancelVesselAntenna();
        };
        const saveOnClick = e => {
            e.preventDefault();
            this.props.saveVesselAntenna();
        };

        return <Modal show onHide={this.props.cancelVesselAntenna} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>
                        {this.props.form.getIndex() ? "Edit Antenna" : "Add Antenna"}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <SelectField
                            label="Antenna"
                            name="antennaName"
                            searchable
                            customFilter={this.customFilter}
                            value={this.props.form.getAntennaName()}
                            options={this.getAntennaOptions()}
                            update={this.props.updateVesselAntennaForm} />

                        {this.props.form.getAntennaName() === 'custom' && 
                            <>
                                <RadioSelectField
                                    label="Type"
                                    name="type"
                                    value={this.props.form.getType()}
                                    options={ANTENNA_TYPE_OPTIONS}
                                    update={this.props.updateVesselAntennaForm} />

                                <AntennaPowerField
                                    label="Power"
                                    name="power"
                                    field={this.props.form.getPower()}
                                    update={this.props.updateVesselAntennaForm} />

                                <CheckboxField
                                    label="Is Combinable?"
                                    name="combinable"
                                    value={this.props.form.isCombinable()}
                                    update={this.props.updateVesselAntennaForm} />

                                {this.props.form.isCombinable() &&
                                    <TextField
                                        label="Combinability Exponent"
                                        name="combinabilityExponent"
                                        field={this.props.form.getCombinabilityExponent()}
                                        update={this.props.updateVesselAntennaForm} />
                                }

                                <TextField
                                    label="Feed Scale"
                                    name="feedScale"
                                    field={this.props.form.getFeedScale()}
                                    update={this.props.updateVesselAntennaForm} />
                            </>
                        }


                        {this.isReflectorUsable() &&
                            <>
                                <SelectField
                                    label="Reflector"
                                    name="reflectorName"
                                    searchable
                                    customFilter={this.customFilter}
                                    value={this.props.form.getReflectorName()}
                                    options={this.getReflectorOptions()}
                                    update={this.props.updateVesselAntennaForm} />

                                {this.props.form.getReflectorName() === 'custom' &&
                                    <AntennaPowerField 
                                        label="Reflector Added Power"
                                        name="reflectorAddedPower"
                                        field={this.props.form.getReflectorAddedPower()}
                                        update={this.props.updateVesselAntennaForm} />
                                }
                            </>
                        }

                        <TextField
                            label="# of Antennas"
                            name="count"
                            field={this.props.form.getCount()}
                            update={this.props.updateVesselAntennaForm} />
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={cancelOnClick}>Cancel</Button>
                    <Button variant="primary" onClick={saveOnClick}>Save</Button>
                </Modal.Footer>
            </Modal>
    }

    isReflectorUsable() {
        const antenna = this.props.form.getAntenna();
        const feedScale = parseFloat(this.props.form.getFeedScale().get('value'));

        return antenna == null ? feedScale > 0 : antenna.isReflectorUsable;
    }

    getAntennaOptions() {
        const customOptions = List([
            Map({
                label: 'Custom',
                value: 'custom'
            })
        ]);

        const reducer = (allOptions, antennas, mod) => {
            const options = antennas
                .sortBy(a => a.power)
                .map(antenna => ({
                    label: antenna.displayName,
                    value: antenna.name,
                    mod: MOD_TO_DISPLAY_NAME.get(antenna.mod)
                }));
            return allOptions.push(Map({
                key: mod,
                label: MOD_TO_DISPLAY_NAME.get(mod),
                options: options
            }));
        };

        const antennaOptions = this.props.activeProfile.antennasByMod.reduce(reducer, List());
        return customOptions.concat(antennaOptions).toJS();
    }

    getReflectorOptions() {
        const customOptions = List([
            Map({
                label: 'None',
                value: 'none'
            }),
            Map({
                label: 'Custom',
                value: 'custom'
            }),        
        ]);

        const reducer = (allOptions, reflectors, mod) => {
            const options = reflectors
                .sortBy(r => r.addedPower)
                .map(reflector => ({
                    label: reflector.displayName,
                    value: reflector.name,
                    mod: MOD_TO_DISPLAY_NAME.get(reflector.mod)
                }));
            return allOptions.push(Map({
                key: mod,
                label: MOD_TO_DISPLAY_NAME.get(mod),
                options: options
            }));
        };

        const reflectorOptions = REFLECTORS_BY_MOD.reduce(reducer, List());
        return customOptions.concat(reflectorOptions).toJS();
    }

    customFilter(candidate, input) {
        if (candidate.value === 'custom' || candidate.value === 'none') {
            return true;
        }

        const terms = input.toLowerCase().split(' ');
        const modName = candidate.data.mod.toLowerCase();
        const partName = candidate.label.toLowerCase();

        return terms.every(term => modName.includes(term) || partName.includes(term));
    }
}


function mapStateToProps(state) {
    return {
        form: AntennaRangeSelector.getVesselAntennasForm(state),
        activeProfile: AntennaRangeSelector.getActiveProfile(state)
    }
}

export const VesselAntennaFormModalContainer = connect(mapStateToProps, actionCreators)(VesselAntennaFormModal);