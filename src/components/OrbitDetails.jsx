import React from 'react';
import NumberFormat from './format/NumberFormat';
import DurationFormat from './format/DurationFormat';
import StaticTextField from './forms/StaticTextField';
import { DISTANCE_UNITS, VELOCITY_UNITS } from '../consts.js';

export default class OrbitDetails extends React.PureComponent {
    render() {
        return <fieldset>
                <legend>Orbit Information</legend>

                <StaticTextField label={"Periapsis"}>
                    <NumberFormat value={this.props.orbit.periapsis} fractionDigits={3} units={DISTANCE_UNITS} />
                </StaticTextField>

                <StaticTextField label={"Apoapsis"}>
                    <NumberFormat value={this.props.orbit.apoapsis} fractionDigits={3} units={DISTANCE_UNITS} />
                </StaticTextField>

                <StaticTextField label={"Radius of the Periapsis"}>
                    <NumberFormat value={this.props.orbit.radiusOfPeriapsis} fractionDigits={3} units={DISTANCE_UNITS} />
                </StaticTextField>

                <StaticTextField label={"Radius of the Apoapsis"}>
                    <NumberFormat value={this.props.orbit.radiusOfApoapsis} fractionDigits={3} units={DISTANCE_UNITS} />
                </StaticTextField>

                <StaticTextField label={"Semi-Major Axis"}>
                    <NumberFormat value={this.props.orbit.semiMajorAxis} fractionDigits={3} units={DISTANCE_UNITS} />
                </StaticTextField>

                <StaticTextField label={"Semi-Minor Axis"}>
                    <NumberFormat value={this.props.orbit.semiMinorAxis} fractionDigits={3} units={DISTANCE_UNITS} />
                </StaticTextField>

                <StaticTextField label={"Eccentricity"}>
                    <NumberFormat value={this.props.orbit.eccentricity} fractionDigits={6} />
                </StaticTextField>

                {this.props.orbit.hasInclination && 
                    <StaticTextField label={"Inclination"}>
                        <NumberFormat value={this.props.orbit.inclination} fractionDigits={3} suffix={'\u00B0'}/>
                    </StaticTextField>
                }

                {this.props.orbit.hasLongitudeOfAscendingNode && 
                    <StaticTextField label={"Longitude Of the Ascending Node"}>
                        <NumberFormat value={this.props.orbit.longitudeOfAscendingNode} fractionDigits={3} suffix={'\u00B0'}/>
                    </StaticTextField>
                }

                {this.props.orbit.hasArgumentOfPeriapsis && 
                    <StaticTextField label={"Argument of the Periapsis"}>
                        <NumberFormat value={this.props.orbit.argumentOfPeriapsis} fractionDigits={3} suffix={'\u00B0'}/>
                    </StaticTextField>
                }

                {this.props.orbit.hasMeanAnomoloyAtEpoch && 
                    <StaticTextField label={"Mean Anomoly At Epoch"}>
                        <NumberFormat value={this.props.orbit.meanAnomoloyAtEpochRadians} fractionDigits={3} suffix={' rads'} />
                    </StaticTextField>
                }

                <StaticTextField label={"Velocity @ Periapsis"}>
                    <NumberFormat value={this.props.orbit.periapsisVelocity} fractionDigits={3} units={VELOCITY_UNITS} />
                </StaticTextField>

                <StaticTextField label={"Velocity @ Apoapsis"}>
                    <NumberFormat value={this.props.orbit.apoapsisVelocity} fractionDigits={3} units={VELOCITY_UNITS} />
                </StaticTextField>

                <StaticTextField label={"Orbital Period"}>
                    <DurationFormat value={this.props.orbit.period} calendar={this.props.calendar} includeRaw={true} />
                </StaticTextField>
            </fieldset>;
    }
};