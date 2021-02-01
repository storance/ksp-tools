import React from 'react';
import { connect } from 'react-redux';

import Form from 'react-bootstrap/Form';

import { planetpacks } from '../../planetpacks';
import { CoreSelector } from '../../selectors';
import * as actionCreators from '../../action_creators';

export class PlanetPackSelect extends React.PureComponent {
    render() {
        return <Form inline>
            <Form.Label className="my-1 mr-2 navbar-text" htmlFor="planetpack-select">Planetpack</Form.Label>
            <Form.Control as="select" id="planetpack-select" size="sm" custom onChange={event => this.props.updatePlanetPack(event.target.value)} value={this.props.selectedPlanetpack}>
                {this.getPlanetPackOptions()}
            </Form.Control>
            <Form.Label className="my-1 mr-2 ml-2 navbar-text" htmlFor="rescale-select">Rescale</Form.Label>
            <Form.Control as="select" id="rescale-select" size="sm" custom onChange={event => this.props.updateRescale(event.target.value)} value={this.props.selectedRescale}>
                {this.getRescaleOptions()}
            </Form.Control>
            </Form>;
    }

    getPlanetPackOptions() {
        return planetpacks.map(planetpack => {
            return <option key={planetpack.name} value={planetpack.name}>{planetpack.name}</option>
        });
    }

    getRescaleOptions() {
        return this.props.planetpack.rescales.map(rescale => {
            return <option key={rescale.name} value={rescale.name}>{rescale.name}</option>
        });
    }
};

function mapStateToProps(state) {
    return {
        selectedPlanetpack : CoreSelector.getSelectedPlanetPack(state),
        selectedRescale : CoreSelector.getSelectedRescale(state),
        planetpack : CoreSelector.getPlanetPack(state)
    }
}

export const PlanetPackSelectContainer = connect(mapStateToProps, actionCreators)(PlanetPackSelect);