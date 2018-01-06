import React from 'react';
import { connect } from 'react-redux';
import { OrbitingBodySelectContainer } from './forms/OrbitingBodySelect';
import ApsisField from './forms/ApsisField';
import TextField from './forms/TextField';
import StaticTextField from './forms/StaticTextField';
import ButtonField from './forms/ButtonField';
import DurationFormat from './format/DurationFormat';
import NumberFormat from './format/NumberFormat';
import * as actionCreators from '../action_creators';

export class DarknessTime extends React.PureComponent {
    render() {
        return <div className="container">
            <h1>Darkness Time</h1>
            <p>The darkness time calculator calculates the maximum amount of time a spacecraft will spend on the dark
            side of the celestial body it's orbiting in a single revolution.</p>
            <p>The battery storage calculator calculates the amount of battery capacity a spacecraft requires to last
            passing through the dark side of the celestial body it's orbiting based on it's energy use.</p>
            <form className="form-horizontal">
                <OrbitingBodySelectContainer />
                <fieldset>
                    <legend>Darkness Time Calculator</legend>
                    <ApsisField label="Apoapsis"
                        name="apoapsis"
                        value={this.props.apoapsis}
                        unitsValue={this.props.apoapsisUnits}
                        error={this.props.errors.apoapsis}
                        update={newValue => this.props.updateDarknessTime('apoapsis', newValue)}
                        updateUnits={newValue => this.props.updateDarknessTime('apoapsisUnits', newValue)} />
                    <ApsisField label="Periapsis"
                        name="periapsis"
                        value={this.props.periapsis}
                        unitsValue={this.props.periapsisUnits}
                        error={this.props.errors.periapsis}
                        update={newValue => this.props.updateDarknessTime('periapsis', newValue)}
                        updateUnits={newValue => this.props.updateDarknessTime('periapsisUnits', newValue)} />

                    <ButtonField label={"Calculate"}
                                 onClick={() => this.props.calculateDarknessTime(this.props.body)} />

                    {this.props.darknessTime  &&
                        <StaticTextField label={"Darkness Time"}>
                            <DurationFormat value={this.props.darknessTime}
                                            calendar={this.props.planetpack.calendar}
                                            includeRaw={true} />
                        </StaticTextField>
                    }
                </fieldset>
                <fieldset>
                    <legend>Battery Storage Calculator</legend>
                    <TextField label={"Darkness Time"}
                               type="number"
                               name={"darknessTimeManual"}
                               value={this.props.darknessTimeManual}
                               error={this.props.errors.darknessTime}
                               update={newValue => this.props.updateDarknessTime('darknessTimeManual', newValue)}
                               suffix={"s"} />
                    <TextField label={"Energy Use"}
                               type="number"
                               name={"energyUse"}
                               value={this.props.energyUse}
                               error={this.props.errors.energyUse}
                               update={newValue => this.props.updateDarknessTime('energyUse', newValue)}
                               suffix={"ec/s"} />

                    <ButtonField label={"Calculate"} onClick={this.props.calculateBatteryStorage} />

                    {this.props.energyCapacity && 
                        <StaticTextField label={"Battery Capacity"}>
                            <NumberFormat value={this.props.energyCapacity} fractionDigits={0} suffix={' ec'} />
                        </StaticTextField>
                    }
                </fieldset>
            </form>
        </div>;
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
        errors: state.getIn(['darknessTime', 'errors']),
        planetpack: state.getIn(['celestialBody', 'selectedPlanetPack']),
        body: state.getIn(['celestialBody', 'selectedBody'])
    }
}

export const DarknessTimeContainer = connect(mapStateToProps, actionCreators)(DarknessTime);