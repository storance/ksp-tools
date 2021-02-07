import React from 'react';

import Container from 'react-bootstrap/Container';

import NumberFormat from './format/NumberFormat';
import DurationFormat from './format/DurationFormat';
import DefinitionList from './DefinitionList';
import { DISTANCE_UNITS_DISPLAY, VELOCITY_UNITS } from '../utils';

export default class OrbitDetails extends React.PureComponent {
    render() {
        return <>
                <h4>Orbit Information</h4>

                <DefinitionList>
                    <DefinitionList.Item label="Periapsis">
                        <NumberFormat
                            value={this.props.orbit.periapsis}
                            fractionDigits={3}
                            units={DISTANCE_UNITS_DISPLAY} />
                    </DefinitionList.Item>

                    <DefinitionList.Item label="Apoapsis">
                        <NumberFormat
                            value={this.props.orbit.apoapsis}
                            fractionDigits={3}
                            units={DISTANCE_UNITS_DISPLAY} />
                    </DefinitionList.Item>

                    <DefinitionList.Item label="Radius of the Periapsis">
                        <NumberFormat
                            value={this.props.orbit.radiusOfPeriapsis}
                            fractionDigits={3}
                            units={DISTANCE_UNITS_DISPLAY} />
                    </DefinitionList.Item>

                    <DefinitionList.Item label="Radius of the Apoapsis">
                        <NumberFormat
                            value={this.props.orbit.radiusOfApoapsis}
                            fractionDigits={3}
                            units={DISTANCE_UNITS_DISPLAY} />
                    </DefinitionList.Item>

                    <DefinitionList.Item label="Semi-Major Axis">
                        <NumberFormat
                            value={this.props.orbit.semiMajorAxis}
                            fractionDigits={3}
                            units={DISTANCE_UNITS_DISPLAY} />
                    </DefinitionList.Item>

                    <DefinitionList.Item label="Semi-Minor Axis">
                        <NumberFormat
                            value={this.props.orbit.semiMinorAxis}
                            fractionDigits={3}
                            units={DISTANCE_UNITS_DISPLAY} />
                    </DefinitionList.Item>

                    <DefinitionList.Item label="Eccentricity">
                        <NumberFormat value={this.props.orbit.eccentricity} fractionDigits={6} />
                    </DefinitionList.Item>

                    {this.props.orbit.hasInclination && 
                        <DefinitionList.Item label="Inclination">
                            <NumberFormat value={this.props.orbit.inclination} fractionDigits={6} suffix="&deg;" />
                        </DefinitionList.Item>
                    }

                    {this.props.orbit.hasLongitudeOfAscendingNode && 
                        <DefinitionList.Item label="Longitude Of the Ascending Node">
                            <NumberFormat
                                value={this.props.orbit.longitudeOfAscendingNode}
                                fractionDigits={3}
                                suffix="&deg;" />
                        </DefinitionList.Item>                }

                    {this.props.orbit.hasArgumentOfPeriapsis && 
                        <DefinitionList.Item label="Argument of the Periapsis">
                            <NumberFormat
                                value={this.props.orbit.argumentOfPeriapsis}
                                fractionDigits={3}
                                suffix="&deg;" />
                        </DefinitionList.Item>  
                    }

                    {this.props.orbit.hasMeanAnomoloyAtEpoch && 
                        <DefinitionList.Item label="Mean Anomoly At Epoch">
                            <NumberFormat
                                value={this.props.orbit.meanAnomoloyAtEpoch}
                                fractionDigits={3}
                                suffix=" radians" />
                        </DefinitionList.Item>
                     }

                    <DefinitionList.Item label="Velocity @ Periapsis">
                        <NumberFormat
                            value={this.props.orbit.periapsisVelocity}
                            fractionDigits={3}
                            units={VELOCITY_UNITS} />
                    </DefinitionList.Item>

                    <DefinitionList.Item label="Velocity @ Apoapsis">
                        <NumberFormat
                            value={this.props.orbit.apoapsisVelocity}
                            fractionDigits={3}
                            units={VELOCITY_UNITS} />
                    </DefinitionList.Item>

                    <DefinitionList.Item label="Orbital Period">
                        <DurationFormat
                            value={this.props.orbit.period}
                            calendar={this.props.calendar}
                            includeRaw />
                    </DefinitionList.Item>
                </DefinitionList>
            </>;
    }
};