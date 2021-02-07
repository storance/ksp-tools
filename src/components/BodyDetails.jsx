import React from 'react';

import NumberFormat from './format/NumberFormat';
import DurationFormat from './format/DurationFormat';
import DefinitionList from './DefinitionList';
import { DISTANCE_UNITS_DISPLAY, DISTANCE_SQUARED_UNITS, VELOCITY_UNITS, toGees } from '../utils';

export default class BodyDetails extends React.PureComponent {
    render() {
        return <>
                <h4>Body Information</h4>
                <DefinitionList>
                    <DefinitionList.Item label="Radius">
                        <NumberFormat
                            value={this.props.body.radius}
                            fractionDigits={3}
                            units={DISTANCE_UNITS_DISPLAY} />
                    </DefinitionList.Item>

                    <DefinitionList.Item label="Equitorial Circumference">
                        <NumberFormat
                        value={this.props.body.equitorialCircumference}
                            fractionDigits={3}
                            units={DISTANCE_UNITS_DISPLAY} />
                    </DefinitionList.Item>

                    <DefinitionList.Item label="Surface Area">
                        <NumberFormat
                            value={this.props.body.surfaceArea}
                            fractionDigits={3}
                            units={DISTANCE_UNITS_DISPLAY}
                            exponential />
                    </DefinitionList.Item>

                    <DefinitionList.Item label="Mass">
                        <NumberFormat value={this.props.body.mass}
                            fractionDigits={6}
                            suffix=' kg'
                            exponential />
                    </DefinitionList.Item>

                    <DefinitionList.Item label="Density">
                        <NumberFormat
                            value={this.props.body.density}
                            fractionDigits={3}
                            suffix=' kg/m^3' />
                    </DefinitionList.Item>

                    <DefinitionList.Item label="Standard Gravitational Parameter (&mu;)">
                        <NumberFormat value={this.props.body.mu} fractionDigits={6} suffix=' m^3/s^2' />
                    </DefinitionList.Item>

                    <DefinitionList.Item label="Surface Gravity">
                        <NumberFormat value={this.props.body.aslGravity} fractionDigits={3} suffix=' m/s^2' />
                        &nbsp;(<NumberFormat
                            value={toGees(this.props.body.aslGravity)}
                            fractionDigits={3}
                            suffix="g" />)
                    </DefinitionList.Item>

                    <DefinitionList.Item label="Escape Velocity">
                        <NumberFormat
                            value={this.props.body.escapeVelocity}
                            fractionDigits={3}
                            units={VELOCITY_UNITS} />
                    </DefinitionList.Item>

                    <DefinitionList.Item label="Sphere Of Influence">
                        <NumberFormat
                            value={this.props.body.sphereOfInfluence}
                            fractionDigits={3}
                            units={DISTANCE_UNITS_DISPLAY} />
                    </DefinitionList.Item>

                    <DefinitionList.Item label="Tidally Locked?">
                        {this.props.body.tidallyLocked ? 'Yes' : 'No'}
                    </DefinitionList.Item>

                    <DefinitionList.Item label="Rotation Period">
                        <DurationFormat
                            value={this.props.body.rotationalPeriod}
                            calendar={this.props.calendar}
                            includeRaw />
                    </DefinitionList.Item>

                    <DefinitionList.Item label="Solar Day Length">
                        <DurationFormat
                            value={this.props.body.solarDayLength}
                            calendar={this.props.calendar}
                            includeRaw />
                    </DefinitionList.Item>

                    <DefinitionList.Item label="Rotational Velocity">
                        <NumberFormat
                            value={this.props.body.rotationalVelocity}
                            fractionDigits={3}
                            units={VELOCITY_UNITS} />
                    </DefinitionList.Item>

                    <DefinitionList.Item label="Stationary Orbit">
                        {this.props.body.stationaryOrbit > this.props.body.sphereOfInfluence
                            ? "Not Possible" 
                            : <NumberFormat
                                value={this.props.body.stationaryOrbit}
                                fractionDigits={3}
                                units={DISTANCE_UNITS_DISPLAY} /> }
                    </DefinitionList.Item>

                    <DefinitionList.Item label="Has Atmosphere?">
                        {this.props.body.atmosphere.enabled ? 'Yes' : 'No'}
                    </DefinitionList.Item>

                    {this.props.body.atmosphere.enabled &&
                        <>
                            <DefinitionList.Item label="Atmosphere Height">
                                <NumberFormat
                                    value={this.props.body.atmosphere.height}
                                    fractionDigits={3}
                                    units={DISTANCE_UNITS_DISPLAY} />
                            </DefinitionList.Item>

                            <DefinitionList.Item label="Has Oxygen?">
                                {this.props.body.atmosphere.hasOxygen ? 'Yes' : 'No'}
                            </DefinitionList.Item>

                            <DefinitionList.Item label="Flying High Threshold">
                                <NumberFormat 
                                    value={this.props.body.atmosphere.flyingHighAltitude}
                                    fractionDigits={3}
                                    units={DISTANCE_UNITS_DISPLAY} />
                            </DefinitionList.Item>
                        </>
                    }
                    <DefinitionList.Item label="High Space Threshold">
                        <NumberFormat
                            value={this.props.body.highSpaceAltitude}
                            fractionDigits={3}
                            units={DISTANCE_UNITS_DISPLAY} />
                    </DefinitionList.Item>
                </DefinitionList>
            </>;
    }
};