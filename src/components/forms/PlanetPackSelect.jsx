import React from 'react';
import { planetpacks } from '../../planetpack.js';

export default class PlanetPack extends React.PureComponent {
    render() {
        return <div className="form-group">
                <label htmlFor="planetPack" className="control-label col-sm-3">Planet Pack</label>
                <div className="col-sm-3">
                    <select id="planetPack" className="form-control" value={this.props.planetpack}
                            onChange={event => this.props.updatePlanetPack(event.target.value)}>
                        {planetpacks.map(this.renderOption)}
                    </select>
                </div>
            </div>;
    }

    renderOption(planetpack) {
        return <option key={planetpack.name} value={planetpack.name}>
                {planetpack.name}
            </option>;
    }
};