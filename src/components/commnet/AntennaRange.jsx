import React from 'react';
import { connect } from 'react-redux';

import Form from 'react-bootstrap/Form';

import  { AntennaRangeSelector } from '../../selectors';
import AntennaPowerField from '../forms/AntennaPowerField';
import ButtonField from '../forms/ButtonField';
import SelectField from '../forms/SelectField';
import TextField from '../forms/TextField';

import * as actionCreators from '../../action_creators';

export class AntennaRange extends React.PureComponent {
    render() {
        return <>
            <h1>Antenna Helper</h1>
            <p>Helper to calculate the maximum CommNet range of your vessel.  Under construction...</p>

            <Form>
                <h4>KSP Settings</h4>

                <TextField
                    label="DSN Range Multiplier"
                    type="number"
                    name="dsnRangeMultiplier"
                    field={this.props.dsnRangeMultiplier}
                    update={this.props.updateAntennaRange} />

                <TextField
                    label="Antenna Range Multiplier"
                    type="number"
                    name="antennaRangeMultiplier"
                    field={this.props.antennaRangeMultiplier}
                    update={this.props.updateAntennaRange} />

                <h4>DSN</h4>
                    <SelectField
                        label="DSN Level"
                        name="dsnLevel"
                        value={this.props.dsnLevel}
                        options={this.getDSNLevelOptions()}
                        update={this.props.updateAntennaRange} />

                    {this.props.dsnLevel === 'custom' && <AntennaPowerField
                        label="DSN Power"
                        type="number"
                        name="dsnCustomPower"
                        field={this.props.dsnCustomPower}
                        update={this.props.updateAntennaRange} /> }
                <h4>Vessel</h4>
            </Form>
            </>
    }

    getDSNLevelOptions() {
        return [
            {
                value: 'level1',
                label: 'Level 1 (2G)'
            },
            {
                value: 'level2',
                label: 'Level 2 (50G)'
            },
            {
                value: 'level3',
                label: 'Level 3 (250G)'
            },
            {
                value: 'custom',
                label: 'Custom'
            }
        ];
    }
}

function mapStateToProps(state) {
    return {
        dsnLevel : AntennaRangeSelector.getDsnLevel(state),
        dsnCustomPower : AntennaRangeSelector.getDsnCustomPower(state),
        dsnRangeMultiplier: AntennaRangeSelector.getDsnRangeMultiplier(state),
        antennaRangeMultiplier: AntennaRangeSelector.getAntennaRangeMultiplier(state)
    }
}

export const AntennaRangeContainer = connect(mapStateToProps, actionCreators)(AntennaRange);