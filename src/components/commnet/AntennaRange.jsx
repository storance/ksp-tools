import React from 'react';
import { connect } from 'react-redux';

import Form from 'react-bootstrap/Form';

import  { AntennaRangeSelector } from '../../selectors';
import AntennaPowerField from '../forms/AntennaPowerField';
import ButtonField from '../forms/ButtonField';
import SelectField from '../forms/SelectField';
import TextField from '../forms/TextField';
import { POWER_UNITS, formatNumber } from '../../utils';
import * as actionCreators from '../../action_creators';

export class AntennaRange extends React.PureComponent {
    render() {
        return <>
            <h1>Antenna Helper</h1>
            <p>Helper to calculate the maximum CommNet range of your vessel.  Under construction...</p>

            <Form>
                <h4>DSN</h4>
                    <SelectField
                        label="DSN Level"
                        name="dsnLevel"
                        value={this.props.dsnLevel}
                        options={this.getDSNLevelOptions()}
                        update={this.props.updateAntennaRange} />
                <h4>Vessel</h4>
            </Form>
            </>
    }

    getDSNLevelOptions() {
        return this.props.activeProfile.dsnLevels.map((power, index) => {
            const level = index + 1;
            return {
                label: 'Level ' + level + ' (' + formatNumber(power, {fractionDigits: 3, units: POWER_UNITS}) + ')',
                value: level
            }
        })
    }
}

function mapStateToProps(state) {
    return {
        dsnLevel : AntennaRangeSelector.getDsnLevel(state),
        activeProfile : AntennaRangeSelector.getActiveProfile(state)
    }
}

export const AntennaRangeContainer = connect(mapStateToProps, actionCreators)(AntennaRange);