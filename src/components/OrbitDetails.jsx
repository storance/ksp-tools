import React from 'react';
import NumberFormat from './format/NumberFormat';
import DurationFormat from './format/DurationFormat';
import { DISTANCE_UNITS, VELOCITY_UNITS } from '../consts.js';

export default class OrbitDetails extends React.PureComponent {
    render() {
        return <fieldset>
                <legend>Orbit Information</legend>

                <div className="form-group">
                    <label className="col-sm-3 control-label">Periapsis</label>
                    <div className="col-sm-3">
                        <p className="form-control-static"><NumberFormat value={this.props.orbit.periapsis} fractionDigits={3} units={DISTANCE_UNITS} /></p>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-3 control-label">Apoapsis</label>
                    <div className="col-sm-3">
                        <p className="form-control-static"><NumberFormat value={this.props.orbit.apoapsis} fractionDigits={3} units={DISTANCE_UNITS} /></p>
                    </div>
                </div>
                <div className="form-group">
                        <label className="col-sm-3 control-label">Eccentricity</label>
                        <div className="col-sm-3">
                            <p className="form-control-static"><NumberFormat value={this.props.orbit.eccentricity} fractionDigits={3} /></p>
                        </div>
                    </div>
                {this.props.orbit.hasInclination ? <div className="form-group">
                        <label className="col-sm-3 control-label">Inclination</label>
                        <div className="col-sm-3">
                            <p className="form-control-static"><NumberFormat value={this.props.orbit.inclination} fractionDigits={3} suffix={'\u00B0'} /></p>
                        </div>
                    </div> : null}
                {this.props.orbit.hasLongitudeOfAscendingNode ? <div className="form-group">
                        <label className="col-sm-3 control-label">Longitude Of the Ascending Node</label>
                        <div className="col-sm-3">
                            <p className="form-control-static"><NumberFormat value={this.props.orbit.longitudeOfAscendingNode} fractionDigits={3} suffix={'\u00B0'} /></p>
                        </div>
                    </div> : null}
                {this.props.orbit.hasArgumentOfPeriapsis ? <div className="form-group">
                        <label className="col-sm-3 control-label">Argument of the Periapsis</label>
                        <div className="col-sm-3">
                            <p className="form-control-static"><NumberFormat value={this.props.orbit.argumentOfPeriapsis} fractionDigits={3} suffix={'\u00B0'} /></p>
                        </div>
                    </div> : null}
                {this.props.orbit.hasMeanAnomoloyAtEpoch ? <div className="form-group">
                        <label className="col-sm-3 control-label">Argument of the Periapsis</label>
                        <div className="col-sm-3">
                            <p className="form-control-static"><NumberFormat value={this.props.orbit.meanAnomoloyAtEpochRadians} fractionDigits={3} suffix={' rads'} /></p>
                        </div>
                    </div> : null}
                <div className="form-group">
                    <label className="col-sm-3 control-label">Radius Of Periapsis</label>
                    <div className="col-sm-3">
                        <p className="form-control-static"><NumberFormat value={this.props.orbit.radiusOfPeriapsis} fractionDigits={3} units={DISTANCE_UNITS} /></p>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-3 control-label">Radius Apoapsis</label>
                    <div className="col-sm-3">
                        <p className="form-control-static"><NumberFormat value={this.props.orbit.radiusOfApoapsis} fractionDigits={3} units={DISTANCE_UNITS} /></p>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-3 control-label">Semi-Major Axis</label>
                    <div className="col-sm-3">
                        <p className="form-control-static"><NumberFormat value={this.props.orbit.semiMajorAxis} fractionDigits={3} units={DISTANCE_UNITS} /></p>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-3 control-label">Semi-Minor Axis</label>
                    <div className="col-sm-3">
                        <p className="form-control-static"><NumberFormat value={this.props.orbit.semiMinorAxis} fractionDigits={3} units={DISTANCE_UNITS} /></p>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-3 control-label">Velocity @ Periapsis</label>
                    <div className="col-sm-3">
                        <p className="form-control-static"><NumberFormat value={this.props.orbit.periapsisVelocity} fractionDigits={3} units={VELOCITY_UNITS} /></p>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-3 control-label">Velocity @ Apoapsis</label>
                    <div className="col-sm-3">
                        <p className="form-control-static"><NumberFormat value={this.props.orbit.apoapsisVelocity} fractionDigits={3} units={VELOCITY_UNITS} /></p>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-3 control-label">Orbital Period</label>
                    <div className="col-sm-3">
                        <p className="form-control-static"><DurationFormat value={this.props.orbit.period} calendar={this.props.calendar} includeRaw={true} /></p>
                    </div>
                </div>
            </fieldset>;
    }
};