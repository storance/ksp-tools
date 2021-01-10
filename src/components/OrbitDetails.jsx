import React from 'react';
import NumberFormat from './format/NumberFormat';
import DurationFormat from './format/DurationFormat';
import StaticTextField from './forms/StaticTextField';
import { DISTANCE_UNITS, VELOCITY_UNITS } from '../consts.js';
import { formatNumber, formatDuration } from '../format.js';

export default class OrbitDetails extends React.PureComponent {
    render() {
        return <fieldset>
                <legend>Orbit Information</legend>

                <StaticTextField label={"Periapsis"} value={formatNumber(this.props.orbit.periapsis, {fractionDigits: 3, units: DISTANCE_UNITS})} />

                <StaticTextField label={"Apoapsis"} value={formatNumber(this.props.orbit.apoapsis, {fractionDigits: 3, units: DISTANCE_UNITS})} />

                <StaticTextField label={"Radius of the Periapsis"} value={formatNumber(this.props.orbit.radiusOfPeriapsis, {fractionDigits: 3, units: DISTANCE_UNITS})} />

                <StaticTextField label={"Radius of the Apoapsis"} value={formatNumber(this.props.orbit.radiusOfApoapsis, {fractionDigits: 3, units: DISTANCE_UNITS})} />

                <StaticTextField label={"Semi-Major Axis"} value={formatNumber(this.props.orbit.semiMajorAxis, {fractionDigits: 3, units: DISTANCE_UNITS})} />

                <StaticTextField label={"Semi-Minor Axis"} value={formatNumber(this.props.orbit.semiMinorAxis, {fractionDigits: 3, units: DISTANCE_UNITS})} />

                <StaticTextField label={"Eccentricity"} value={formatNumber(this.props.orbit.eccentricity, {fractionDigits: 6})} />

                {this.props.orbit.hasInclination && 
                    <StaticTextField label={"Inclination"} value={formatNumber(this.props.orbit.inclination, {fractionDigits: 3, suffix: '\u00B0'})} />
                }

                {this.props.orbit.hasLongitudeOfAscendingNode && 
                    <StaticTextField label={"Longitude Of the Ascending Node"} value={formatNumber(this.props.orbit.longitudeOfAscendingNode, {fractionDigits: 3, suffix: '\u00B0'})} />
                }

                {this.props.orbit.hasArgumentOfPeriapsis && 
                    <StaticTextField label={"Argument of the Periapsis"} value={formatNumber(this.props.orbit.argumentOfPeriapsis, {fractionDigits: 3, suffix: '\u00B0'})} />
                }

                {this.props.orbit.hasMeanAnomoloyAtEpoch && 
                    <StaticTextField label={"Mean Anomoly At Epoch"} value={formatNumber(this.props.orbit.meanAnomoloyAtEpoch, {fractionDigits: 3, suffix: ' radians'})} />
                }

                <StaticTextField label={"Velocity @ Periapsis"} value={formatNumber(this.props.orbit.periapsisVelocity, {fractionDigits: 3, units: VELOCITY_UNITS})} />

                <StaticTextField label={"Velocity @ Apoapsis"} value={formatNumber(this.props.orbit.apoapsisVelocity, {fractionDigits: 3, units: VELOCITY_UNITS})} />

                <StaticTextField label={"Orbital Period"} value={formatDuration(this.props.orbit.period, this.props.calendar, true)} />
            </fieldset>;
    }
};