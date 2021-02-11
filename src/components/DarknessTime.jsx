import React from 'react';
import { connect } from 'react-redux';

import Form from 'react-bootstrap/Form';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';

import  { DarknessTimeSelector } from '../selectors';
import ApsisField from './forms/ApsisField';
import BodySelect from './forms/BodySelect';
import TextField from './forms/TextField';
import ButtonField from './forms/ButtonField';
import DurationFormat from './format/DurationFormat';
import NumberFormat from './format/NumberFormat';
import DefinitionList from './DefinitionList';

import * as actionCreators from '../action_creators';

export class DarknessTime extends React.PureComponent {
    render() {
        return <>
            <h1>Darkness Time</h1>
            <p>The darkness time calculator calculates the maximum amount of time a spacecraft will spend on the dark
            side of the celestial body it's orbiting in a single revolution.</p>
            <p>The battery storage calculator calculates the amount of battery capacity a spacecraft requires to last
            passing through the dark side of the celestial body it's orbiting based on it's energy use.</p>
            <Form>
                <h3>Darkness Time Calculator</h3>
                <hr />
                <BodySelect
                    planetpack={this.props.planetpack}
                    body={this.props.body.name}
                    update={this.props.updateBodyInformation} />
                <ApsisField label="Apoapsis"
                    name="apoapsis"
                    field={this.props.apoapsis}
                    update={this.props.updateDarknessTime} />
                <ApsisField label="Periapsis"
                    name="periapsis"
                    field={this.props.periapsis}
                    update={this.props.updateDarknessTime} />

                <ButtonField label="Calculate"
                             icon={faCalculator}
                             onClick={this.props.calculateDarknessTime} />

                {this.props.darknessTimeComputed  &&
                    <DefinitionList>
                        <DefinitionList.Item label="Darkness Time">
                            <DurationFormat
                                value={this.props.darknessTimeComputed}
                                calendar={this.props.planetpack.calendar}
                                includeRaw />
                        </DefinitionList.Item>
                    </DefinitionList>
                }

                <h3>Battery Storage Calculator</h3>
                <hr />
                <TextField label="Darkness Time"
                           type="number"
                           name="darknessTime"
                           field={this.props.darknessTime}
                           update={this.props.updateDarknessTime}
                           suffix={"s"} />
                <TextField label="Energy Use"
                           type="number"
                           name="energyUse"
                           field={this.props.energyUse}
                           update={this.props.updateDarknessTime}
                           suffix={"ec/s"} />

                <ButtonField label="Calculate" icon={faCalculator} onClick={this.props.calculateBatteryStorage} />

                {this.props.energyCapacity && 
                    <DefinitionList>
                        <DefinitionList.Item label="Battery Capacity">
                            <NumberFormat value={this.props.energyCapacity} fractionDigits={0} suffix=' ec' />
                        </DefinitionList.Item>
                    </DefinitionList>
                }
            </Form>
        </>;
    }
}

function mapStateToProps(state) {
    return {
        apoapsis: DarknessTimeSelector.getApoapsis(state),
        periapsis: DarknessTimeSelector.getPeriapsis(state),
        darknessTimeComputed: DarknessTimeSelector.getDarknessTimeComputed(state),
        darknessTime: DarknessTimeSelector.getDarknessTime(state),
        energyUse: DarknessTimeSelector.getEnergyUse(state),
        energyCapacity: DarknessTimeSelector.getEnergyCapacity(state),
        planetpack: DarknessTimeSelector.getPlanetPack(state),
        body: DarknessTimeSelector.getBody(state)
    }
}

export const DarknessTimeContainer = connect(mapStateToProps, actionCreators)(DarknessTime);