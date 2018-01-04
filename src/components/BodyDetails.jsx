import React from 'react';
import NumberFormat from './format/NumberFormat';
import DurationFormat from './format/DurationFormat';
import StaticTextField from './forms/StaticTextField';
import { DISTANCE_UNITS, DISTANCE_SQUARED_UNITS, VELOCITY_UNITS } from '../consts.js';

export default class BodyDetails extends React.PureComponent {
    render() {
        return <fieldset>
                <legend>Body Information</legend>

                <StaticTextField label={"Radius"}>
                    <NumberFormat value={this.props.body.radius} fractionDigits={3} units={DISTANCE_UNITS} />
                </StaticTextField>

                <StaticTextField label={"Equitorial Circumference"}>
                    <NumberFormat value={this.props.body.equitorialCircumference} fractionDigits={3} units={DISTANCE_UNITS} />
                </StaticTextField>

                <StaticTextField label={"Surface Area"}>
                    <NumberFormat value={this.props.body.surfaceArea} exponential={true} fractionDigits={6} units={DISTANCE_SQUARED_UNITS} />
                </StaticTextField>

                <StaticTextField label={"Mass"}>
                    <NumberFormat value={this.props.body.mass} exponential={true} fractionDigits={6} suffix={' kg'} />
                </StaticTextField>

                <StaticTextField label={"Density"}>
                    <NumberFormat value={this.props.body.density} fractionDigits={3} suffix={' kg/m^3'} />
                </StaticTextField>

                <StaticTextField label={"Standard Gravitional Parameter"}>
                    <NumberFormat value={this.props.body.mu} exponential={true} fractionDigits={6} suffix={' m^3/s^2'} />
                </StaticTextField>

                <StaticTextField label={"Surface Gravity"}>
                    <NumberFormat value={this.props.body.aslGravity} fractionDigits={3} suffix={' m/s^2'} />
                </StaticTextField>

                <StaticTextField label={"Escape Velocity"}>
                    <NumberFormat value={this.props.body.escapeVelocity} fractionDigits={3} units={VELOCITY_UNITS} />
                </StaticTextField>

                <StaticTextField label={"Tidally Locked?"}>
                    {this.props.body.tidallyLocked ? 'Yes' : 'No'}
                </StaticTextField>

                <StaticTextField label={"Rotational Period"}>
                    <DurationFormat value={this.props.body.rotationalPeriod} calendar={this.props.calendar} />
                </StaticTextField>

                <StaticTextField label={"Rotational Velocity"}>
                    <NumberFormat value={this.props.body.rotationalVelocity} fractionDigits={3} units={VELOCITY_UNITS} />
                </StaticTextField>

                <StaticTextField label={"Has Atmosphere?"}>
                    {this.props.body.hasAtmosphere ? 'Yes' : 'No'}
                </StaticTextField>

                {this.props.body.hasAtmosphere &&
                    <StaticTextField label={"Atmosphere Height"}>
                        <NumberFormat value={this.props.body.atmosphereHeight} fractionDigits={3} units={DISTANCE_UNITS} />
                    </StaticTextField>
                }
            </fieldset>;
    }
};