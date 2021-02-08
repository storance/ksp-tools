import React from 'react';
import { List } from 'immutable';
import { connect } from 'react-redux';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Wifi1, Wifi2, Wifi, WifiOff } from 'react-bootstrap-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCalculator, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import  { AntennaRangeSelector } from '../../selectors';
import AntennaPowerField from '../forms/AntennaPowerField';
import ButtonField from '../forms/ButtonField';
import SelectField from '../forms/SelectField';
import RadioSelectField from '../forms/RadioSelectField';
import CheckboxField from '../forms/CheckboxField';
import TextField from '../forms/TextField';
import NumberFormat from '../format/NumberFormat';
import DefinitionList from '../DefinitionList';
import { POWER_UNITS,
    MOD_TO_DISPLAY_NAME,
    ANTENNA_TYPE_TO_DISPLAY,
    DISTANCE_UNITS_DISPLAY,
    TYPE_RELAY,
    TYPE_DIRECT,
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

export class AntennaRange extends React.PureComponent {
    render() {
        const addOnclick = e => {
            e.preventDefault();
            this.props.addVesselAntenna();
        }

        const calculateSignalOnclick = e=> {
            e.preventDefault();
            this.props.calculateSignal();
        }

        return <>
            <h1>Antenna Helper</h1>
            <p>Helper to calculate the maximum CommNet range of your vessel.  Under construction...</p>

            <Form>
                <Row className="mt-4">
                    <Col>
                        <h3>DSN</h3>
                    </Col>
                </Row>
                <SelectField
                    label="DSN Level"
                    name="dsnLevel"
                    value={this.props.dsnLevel}
                    options={this.getDSNLevelOptions()}
                    update={this.props.updateAntennaRange} />

                <Row className="mt-4">
                    <Col sm={10}>
                        <h3>Vessel</h3>
                    </Col>
                    <Col sm={2} className="my-auto">
                        <Button type="submit" variant="primary" size="sm" onClick={addOnclick}>
                            <FontAwesomeIcon icon={faPlus} /> Add
                        </Button>
                    </Col>
                </Row>
                <DefinitionList className="mt-4">
                    <DefinitionList.Item label="Antennas">
                        <Table striped bordered>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Power</th>
                                    <th>Combinable</th>
                                    <th>Quantity</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.vesselAntennas.map((antenna, index) => 
                                    this.renderVesselAntena(antenna, index))}
                            </tbody>
                        </Table>
                    </DefinitionList.Item>
                </DefinitionList>
                <Row className="mt-4">
                    <Col>
                        <h3>Signal To Bodies</h3>
                    </Col>
                    <Col sm={2} className="my-auto ml-auto">
                        <Button type="submit" variant="primary" size="sm" onClick={calculateSignalOnclick}>
                            <FontAwesomeIcon icon={faCalculator} /> Calculate
                        </Button>
                    </Col>
                </Row>
                {this.props.signalToBodies && this.renderSignalToBodies()}
            </Form>

            {this.props.vesselAntennasForm.isShow() && this.renderVesselAntennaForm()}
            </>
    }

    getDSNLevelOptions() {
        return this.props.activeProfile.dsnLevels.map((power, index) => {
            const level = index + 1;
            const label = 'Level ' + level + ' (' + 
                formatNumber(power, {fractionDigits: 3, units: POWER_UNITS, unitsSeparator:''}) + ')';
            return {
                label,
                value: level
            }
        })
    }

    renderVesselAntena(antenna, index) {
        const deleteOnClick = e => {
            e.preventDefault();
            this.props.deleteVesselAntenna(index);
        };

        return <tr key={index}>
                <td>{antenna.displayName}</td>
                <td>{ANTENNA_TYPE_TO_DISPLAY.get(antenna.type)}</td>
                <td><NumberFormat value={antenna.power} fractonDigits={3} units={POWER_UNITS} /></td>
                <td>{antenna.combinable ? "Yes" : "No"}</td>
                <td>{antenna.count}</td>
                <td><a href="#" title="Delete" onClick={deleteOnClick}><FontAwesomeIcon icon={faTrashAlt} /></a></td>
            </tr>
    }

    renderVesselAntennaForm() {
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
                        {this.props.vesselAntennasForm.getIndex() ? "Edit Antenna" : "Add Antenna"}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <SelectField label="Antenna"
                                    name="antennaName"
                                    value={this.props.vesselAntennasForm.getAntennaName()}
                                    options={this.getAntennaOptions()}
                                    update={this.props.updateVesselAntennaForm} />

                        {this.props.vesselAntennasForm.getAntennaName() === 'custom' && 
                            <>
                                <RadioSelectField
                                    label="Type"
                                    name="type"
                                    value={this.props.vesselAntennasForm.getType()}
                                    options={ANTENNA_TYPE_OPTIONS}
                                    update={this.props.updateVesselAntennaForm} />

                                <AntennaPowerField
                                    label="Power"
                                    name="power"
                                    field={this.props.vesselAntennasForm.getPower()}
                                    update={this.props.updateVesselAntennaForm} />

                                <CheckboxField
                                    label="Is Combinable?"
                                    name="combinable"
                                    value={this.props.vesselAntennasForm.isCombinable()}
                                    update={this.props.updateVesselAntennaForm} />

                                {this.props.vesselAntennasForm.isCombinable() &&
                                    <TextField label="Combinability Exponent"
                                        name="combinabilityExponent"
                                        field={this.props.vesselAntennasForm.getCombinabilityExponent()}
                                        update={this.props.updateVesselAntennaForm} />
                                }

                                <TextField label="Feed Scale"
                                    name="feedScale"
                                    field={this.props.vesselAntennasForm.getFeedScale()}
                                    update={this.props.updateVesselAntennaForm} />
                            </>
                        }

                        <TextField label="# of Antennas"
                                name="count"
                                field={this.props.vesselAntennasForm.getCount()}
                                update={this.props.updateVesselAntennaForm} />

                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={cancelOnClick}>Cancel</Button>
                    <Button variant="primary" onClick={saveOnClick}>Save</Button>
                </Modal.Footer>
            </Modal>
    }

    getAntennaOptions() {
        let options = List([
            {
                label: 'Custom',
                value: 'custom'
            }
        ]);

        return options.concat(this.props.activeProfile.antennas.map(antenna => {
            return {
                label: "[" + MOD_TO_DISPLAY_NAME.get(antenna.mod) + "] " + antenna.displayName,
                value: antenna.name
            }
        }));
    }

    renderSignalToBodies() {
        return <DefinitionList className="mt-4">
                <DefinitionList.Item label="Vessel Power">
                    <NumberFormat
                        value={this.props.signalToBodies.get('vesselPower')}
                        fractionDigits={3}
                        units={POWER_UNITS} />
                </DefinitionList.Item>

                <DefinitionList.Item label="Max Range">
                    <NumberFormat
                        value={this.props.signalToBodies.get('maxRange')}
                        fractionDigits={3}
                        units={DISTANCE_UNITS_DISPLAY} />
                </DefinitionList.Item>

                <DefinitionList.Item label="Signal">
                    <Table striped bordered>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Max Distance Signal</th>
                                <th>Min Distance Signal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.signalToBodies.get('bodies').map(body => this.renderBodySignal(body))}
                        </tbody>
                    </Table>
                </DefinitionList.Item>
            </DefinitionList>
    }

    renderBodySignal(bodySignal) {
        return <tr key={bodySignal.body.name}>
                <td>{bodySignal.body.name}</td>
                <td>
                    <NumberFormat
                        value={bodySignal.maxSignal * 100}
                        fractionDigits={1}
                        suffix="%" />
                    {this.renderSignalStrengthIcon(bodySignal.maxSignal)}
                </td>
                <td>
                    <NumberFormat
                        value={bodySignal.minSignal * 100}
                        fractionDigits={1}
                        suffix="%" />
                    {this.renderSignalStrengthIcon(bodySignal.minSignal)}
                </td>
            </tr>;
    }

    renderSignalStrengthIcon(strength) {
        const strengthRounded = strength.toFixed(3);
        if (strengthRounded >= 0.75) {
            return <Wifi className="text-success pl-1" size={20} />
        } else if (strengthRounded >= 0.25) {
            return <Wifi2 className="text-warning pl-1" size={20} />
        } else if (strengthRounded > 0) {
            return <Wifi1 className="text-danger pl-1" size={20} />
        } else {
            return <WifiOff className="text-danger pl-1" size={20} />
        }
    }
}

function mapStateToProps(state) {
    return {
        dsnLevel: AntennaRangeSelector.getDsnLevel(state),
        vesselAntennas: AntennaRangeSelector.getVesselAntennas(state),
        vesselAntennasForm: AntennaRangeSelector.getVesselAntennasForm(state),
        signalToBodies : AntennaRangeSelector.getSignalToBodies(state),
        activeProfile: AntennaRangeSelector.getActiveProfile(state)
    }
}

export const AntennaRangeContainer = connect(mapStateToProps, actionCreators)(AntennaRange);