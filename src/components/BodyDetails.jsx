import React from 'react';
import NumberFormat from './format/NumberFormat';
import DurationFormat from './format/DurationFormat';
import { DISTANCE_UNITS, DISTANCE_SQUARED_UNITS, VELOCITY_UNITS } from '../consts.js';

export default class BodyDetails extends React.PureComponent {
    render() {
        return <fieldset>
                <legend>Body Information</legend>

                <div className="form-group">
                    <label className="col-sm-3 control-label">Radius</label>
                    <div className="col-sm-3">
                        <p className="form-control-static"><NumberFormat value={this.props.body.radius} fractionDigits={3} units={DISTANCE_UNITS} /></p>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-3 control-label">Equitorial Circumference</label>
                    <div className="col-sm-3">
                        <p className="form-control-static"><NumberFormat value={this.props.body.equitorialCircumference} fractionDigits={3} units={DISTANCE_UNITS} /></p>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-3 control-label">Mass</label>
                    <div className="col-sm-3">
                        <p className="form-control-static"><NumberFormat value={this.props.body.mass} exponential={true} fractionDigits={6} suffix={' kg'} /></p>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-3 control-label">Density</label>
                    <div className="col-sm-3">
                        <p className="form-control-static"><NumberFormat value={this.props.body.density} fractionDigits={3} suffix={' kg/m^3'} /></p>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-3 control-label">Surface Area</label>
                    <div className="col-sm-3">
                        <p className="form-control-static"><NumberFormat value={this.props.body.surfaceArea} exponential={true} fractionDigits={6} units={DISTANCE_SQUARED_UNITS} /></p>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-3 control-label">Standard Gravitional Parameter</label>
                    <div className="col-sm-3">
                        <p className="form-control-static"><NumberFormat value={this.props.body.mu} exponential={true} fractionDigits={6} suffix={' m^3/s^2'} /></p>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-3 control-label">Surface Gravity</label>
                    <div className="col-sm-3">
                        <p className="form-control-static"><NumberFormat value={this.props.body.aslGravity} fractionDigits={3} suffix={' m/s^2'} /></p>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-3 control-label">Escape Velocity</label>
                    <div className="col-sm-3">
                        <p className="form-control-static"><NumberFormat value={this.props.body.escapeVelocity} fractionDigits={3} units={VELOCITY_UNITS} /></p>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-3 control-label">Tidally Locked?</label>
                    <div className="col-sm-3">
                        <p className="form-control-static">{this.props.body.tidallyLocked ? 'Yes' : 'No'}</p>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-3 control-label">Rotational Period</label>
                    <div className="col-sm-3">
                        <p className="form-control-static"><DurationFormat value={this.props.body.rotationalPeriod} calendar={this.props.calendar} /></p>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-3 control-label">Rotational Speed</label>
                    <div className="col-sm-3">
                        <p className="form-control-static"><NumberFormat value={this.props.body.rotationalSpeed} fractionDigits={3} units={VELOCITY_UNITS} /></p>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-3 control-label">Has Atmosphere?</label>
                    <div className="col-sm-3">
                        <p className="form-control-static">{this.props.body.hasAtmosphere ? 'Yes' : 'No'}</p>
                    </div>
                </div>
                {this.props.body.hasAtmosphere ? <div className="form-group">
                    <label className="col-sm-3 control-label">Atmosphere Height</label>
                    <div className="col-sm-3">
                        <p className="form-control-static"><NumberFormat value={this.props.body.atmosphereHeight} fractionDigits={0} units={DISTANCE_UNITS} /></p>
                    </div>
                </div> : null}

            </fieldset>;
    }
};