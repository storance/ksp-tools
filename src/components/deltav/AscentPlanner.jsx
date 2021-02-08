import React from 'react';
import { connect } from 'react-redux';

import Form from 'react-bootstrap/Form';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';

import  { AscentPlannerSelector } from '../../selectors';
import ApsisField from '../forms/ApsisField';
import BodySelect from '../forms/BodySelect';
import DefinitionList from '../DefinitionList';
import TextField from '../forms/TextField';
import ButtonField from '../forms/ButtonField';
import NumberFormat from '../format/NumberFormat';
import * as actionCreators from '../../action_creators';

export class AscentPlanner extends React.PureComponent {
    render() {
        return <>
            <h1>Ascent/Descent Planner</h1>
            <p>Calculates the theoretical minimum &Delta;V required to get into or land from a circular orbit 
            of a given altitude. The calculation only works for atmosphere-less bodies, so if the body does 
            have an atmosphere, you'll want to budget an extra 30%-50% more &Delta;V.</p>
            <Form className="form-horizontal">
                <h4>Orbit Details</h4>
                <BodySelect
                    planetpack={this.props.planetpack}
                    body={this.props.body.name}
                    update={this.props.updateAscentDeltaV} />
                <ApsisField label="Altitude"
                    name="altitude"
                    field={this.props.altitude}
                    update={this.props.updateAscentDeltaV} />

                <ButtonField label="Calculate" icon={faCalculator} onClick={this.props.calculateAscentDeltaV} />

                {this.props.ascentDeltav  &&
                    <DefinitionList>
                        <DefinitionList.Item label="&Delta;V">
                            <NumberFormat value={this.props.ascentDeltav} fractionDigits={3} suffix=" m/s" />
                        </DefinitionList.Item>
                    </DefinitionList>
                }
            </Form>
        </>;
    }
}

function mapStateToProps(state) {
    return {
        altitude: AscentPlannerSelector.getAltitude(state),
        ascentDeltav: AscentPlannerSelector.getAscentDeltaV(state),
        planetpack: AscentPlannerSelector.getPlanetPack(state),
        body: AscentPlannerSelector.getBody(state)
    }
}

export const AscentPlannerContainer = connect(mapStateToProps, actionCreators)(AscentPlanner);