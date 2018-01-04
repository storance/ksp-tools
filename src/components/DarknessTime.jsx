import React from 'react';
import { connect } from 'react-redux';
import { OrbitingBodySelectContainer } from './forms/OrbitingBodySelect';
import ApsisField from './forms/ApsisField';
import DurationFormat from './format/DurationFormat';
import NumberFormat from './format/NumberFormat';
import * as actionCreators from '../action_creators';

export class DarknessTime extends React.PureComponent {
    render() {
        return <div className="container">
            <form className="form-horizontal">
                <OrbitingBodySelectContainer />
                <fieldset>
                    <legend>Darkness Time Calculator</legend>
                    <ApsisField label="Apoapsis" name="apoapsis" value={this.props.apoapsis}
                        unitsValue={this.props.apoapsisUnits}
                        updateField={newValue => this.props.updateDarknessTime('apoapsis', newValue)}
                        updateUnits={newValue => this.props.updateDarknessTime('apoapsisUnits', newValue)} />
                    <ApsisField label="Periapsis" name="periapsis" value={this.props.periapsis}
                        unitsValue={this.props.periapsisUnits}
                        updateField={newValue => this.props.updateDarknessTime('periapsis', newValue)}
                        updateUnits={newValue => this.props.updateDarknessTime('periapsisUnits', newValue)} />

                    <div className="col-sm-offset-3">
                        <button type="submit" className="btn btn-default" onClick={e => {this.calculateDarknessTime(e)}}>Calculate</button>
                    </div>

                    {this.props.darknessTime ? <div className="form-group">
                            <label className="col-sm-3 control-label">Darkness Time</label>
                            <div className="col-sm-3">
                                <p className="form-control-static"><DurationFormat value={this.props.darknessTime} calendar={this.props.planetpack.calendar} includeRaw={true} /></p>
                            </div>
                        </div> : null}
                </fieldset>
                <fieldset>
                    <legend>Battery Storage Calculator</legend>
                    <div className="form-group">
                        <label htmlFor="timeDarkness" className="col-sm-3 control-label">Darkness Time</label>
                        <div className="col-sm-6">
                            <div className="input-group">
                                <input type="text" id="timeDarkness" name="timeDarkness" className="form-control" value={this.props.darknessTimeManual} onChange={e => this.props.updateDarknessTime('darknessTimeManual', e.target.value)} />
                                <div className="input-group-addon">s</div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="energyUse" className="col-sm-3 control-label">Energy Use</label>
                        <div className="col-sm-6">
                            <div className="input-group">
                                <input type="text" id="energyUse" name="energyUse" className="form-control" value={this.props.energyUse} onChange={e => this.props.updateDarknessTime('energyUse', e.target.value)}  />
                                <div className="input-group-addon">ec/s</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-offset-3">
                        <button type="submit" className="btn btn-default" onClick={e => {this.calculateBatteryStorage(e)}}>Calculate</button>
                    </div>
                    {this.props.energyCapacity ? <div className="form-group">
                            <label className="col-sm-3 control-label">Battery Capacity</label>
                            <div className="col-sm-3">
                                <p className="form-control-static"><NumberFormat value={this.props.energyCapacity} fractionDigits={0} suffix={' ec'} /></p>
                            </div>
                        </div> : null}
                </fieldset>
            </form>
        </div>;
    }

    calculateDarknessTime(event) {
        event.preventDefault();
        this.props.calculateDarknessTime(this.props.body);
    }

    calculateBatteryStorage(event) {
        event.preventDefault();
        this.props.calculateBatteryStorage();
    }
}

function mapStateToProps(state) {
    return {
        apoapsis: state.getIn(['darknessTime', 'apoapsis']),
        apoapsisUnits: state.getIn(['darknessTime', 'apoapsisUnits']),
        periapsis: state.getIn(['darknessTime', 'periapsis']),
        periapsisUnits: state.getIn(['darknessTime', 'periapsisUnits']),
        darknessTime: state.getIn(['darknessTime', 'darknessTime']),
        darknessTimeManual: state.getIn(['darknessTime', 'darknessTimeManual']),
        energyUse: state.getIn(['darknessTime', 'energyUse']),
        energyCapacity: state.getIn(['darknessTime', 'energyCapacity']),
        planetpack: state.getIn(['celestialBody', 'selectedPlanetPack']),
        body: state.getIn(['celestialBody', 'selectedBody'])
    }
}

export const DarknessTimeContainer = connect(mapStateToProps, actionCreators)(DarknessTime);