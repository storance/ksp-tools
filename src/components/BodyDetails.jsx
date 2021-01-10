import React from 'react';
import NumberFormat from './format/NumberFormat';
import DurationFormat from './format/DurationFormat';
import StaticTextField from './forms/StaticTextField';
import { DISTANCE_UNITS, DISTANCE_SQUARED_UNITS, VELOCITY_UNITS } from '../consts.js';
import { toGees } from '../utils.js';
import { formatNumber, formatDuration } from '../format.js';

export default class BodyDetails extends React.PureComponent {
    render() {
        return <fieldset>
                <legend>Body Information</legend>

                <StaticTextField label={"Radius"} value={formatNumber(this.props.body.radius, {fractionDigits: 3, units: DISTANCE_UNITS})} />

                <StaticTextField label={"Equitorial Circumference"} value={formatNumber(this.props.body.equitorialCircumference, {fractionDigits: 3, units: DISTANCE_UNITS})} />

                <StaticTextField label={"Surface Area"} value={formatNumber(this.props.body.surfaceArea, {fractionDigits: 3, exponential:true, units: DISTANCE_SQUARED_UNITS})} />

                <StaticTextField label={"Mass"} value={formatNumber(this.props.body.mass, {fractionDigits: 6, exponential: true, suffix:' kg'})} />

                <StaticTextField label={"Density"} value={formatNumber(this.props.body.density, {fractionDigits: 3, suffix: ' kg/m^3'})} />

                <StaticTextField label={"Standard Gravitional Parameter"} value={formatNumber(this.props.body.mu, {fractionDigits: 6, suffix: ' m^3/s^2'})} />

                <StaticTextField label={"Surface Gravity"} value={formatNumber(this.props.body.aslGravity, {fractionDigits: 3, suffix:' m/s^2'}) + '(' + formatNumber(toGees(this.props.body.aslGravity), {fractionDigits: 3, suffix:'g'}) + ')'} />

                <StaticTextField label={"Escape Velocity"} value={formatNumber(this.props.body.escapeVelocity, {fractionDigits: 3, units: VELOCITY_UNITS})} />

                <StaticTextField label={"Sphere Of Influence"} value={formatNumber(this.props.body.sphereOfInfluence, {fractionDigits: 3, units: DISTANCE_UNITS})} />

                <StaticTextField label={"Tidally Locked?"} value={this.props.body.tidallyLocked ? 'Yes' : 'No'} />

                <StaticTextField label={"Rotational Period"} value={formatDuration(this.props.body.rotationalPeriod, this.props.calendar, true)} />

                <StaticTextField label={"Rotational Velocity"} value={formatNumber(this.props.body.rotationalVelocity, {fractionDigits: 3, units: VELOCITY_UNITS})} />

                <StaticTextField label={"Stationary Orbit"} value={this.props.body.stationaryOrbit > this.props.body.sphereOfInfluence ? "Not Possible" : formatNumber(this.props.body.stationaryOrbit, {fractionDigits: 3, units: DISTANCE_UNITS})} />

                <StaticTextField label={"Has Atmosphere?"} value={this.props.body.atmosphere.enabled ? 'Yes' : 'No'} />

                {this.props.body.atmosphere.enabled &&
                    <StaticTextField label={"Atmosphere Height"} value={formatNumber(this.props.body.atmosphere.height, {fractionDigits: 3, units: DISTANCE_UNITS})} />
                }

                {this.props.body.atmosphere.enabled &&
                    <StaticTextField label={"Has Oxygen?"} value={this.props.body.atmosphere.hasOxygen ? 'Yes' : 'No'} />
                }

                {this.props.body.atmosphere.enabled &&
                    <StaticTextField label={"Flying High Threshold"} value={formatNumber(this.props.body.atmosphere.flyingHighAltitude, {fractionDigits: 3, units: DISTANCE_UNITS})} />
                }

                <StaticTextField label={"High Space Threshold"}  value={formatNumber(this.props.body.highSpaceAltitude, {fractionDigits: 3, units: DISTANCE_UNITS})} />
                
            </fieldset>;
    }
};