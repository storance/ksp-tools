import React from 'react';
import { connect } from 'react-redux';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faCalculator, faTrashAlt, faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';

import { AntennaRangeSelector } from '../../selectors';
import { VesselAntennaFormModalContainer } from './VesselAntennaFormModal';
import SignalToBodyDetails from './SignalToBodyDetails';
import ButtonField from '../forms/ButtonField';
import SelectField from '../forms/SelectField';
import NumberFormat from '../format/NumberFormat';
import {
    ANTENNA_TYPE_TO_DISPLAY,
    POWER_UNITS,
    DISTANCE_UNITS_DISPLAY,
    formatNumber } from '../../utils';
import * as actionCreators from '../../action_creators';

export class AntennaRange extends React.PureComponent {
    render() {
        const addOnclick = e => {
            e.preventDefault();
            this.props.addVesselAntenna();
        }

        return <>
            <h1>Antenna Helper</h1>
            <p>Helper to calculate the signal strength to all the other bodies in the solar system.</p>

            <Form>
                <h3>DSN</h3>
                <hr />

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
                <hr />
                {this.props.vesselAntennas.size > 0 && 
                    <>
                        <Row className="mt-4">
                            <Col sm={4} className="text-right font-weight-bold">
                                Antennas
                            </Col>
                            <Col sm={8}>
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
                                        {this.props.vesselAntennas.map(this.renderVesselAntenna)}
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                        <ButtonField label="Calculate" icon={faCalculator} onClick={this.props.calculateSignal} />
                    </>
                }
            </Form>

            {this.props.signalToBodies && <SignalToBodyDetails signalDetails={this.props.signalToBodies} />}

            {this.props.vesselAntennasForm.isShow() && <VesselAntennaFormModalContainer />}
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

    renderVesselAntenna = (antenna, index) => {
        const editOnClick = e => {
            e.preventDefault();
            this.props.editVesselAntenna(index);
        };

        const deleteOnClick = e => {
            e.preventDefault();
            this.props.deleteVesselAntenna(index);
        };

        return <tr key={index}>
                <td>{antenna.displayName}</td>
                <td>{ANTENNA_TYPE_TO_DISPLAY.get(antenna.type)}</td>
                <td><NumberFormat value={antenna.power} fractonDigits={3} units={POWER_UNITS} /></td>
                <td>{antenna.combinable 
                    ? <FontAwesomeIcon icon={faCheck} className="text-success" /> 
                    : <FontAwesomeIcon icon={faTimes} className="text-danger" /> }
                </td>
                <td>{antenna.count}</td>
                <td>
                    <a href="#" title="Edit" onClick={editOnClick}><FontAwesomeIcon icon={faEdit} /></a>
                    <a href="#" title="Delete" className="pl-1" onClick={deleteOnClick}>
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </a>
                </td>
            </tr>
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