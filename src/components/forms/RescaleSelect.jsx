import React from 'react';
import { rescales } from '../../rescale.js';

export default class Rescale extends React.PureComponent {
    render() {
        return <div className="form-group">
                <label htmlFor="rescale" className="control-label col-sm-3">Rescale</label>
                <div className="col-sm-3">
                    <select id="rescale" className="form-control" value={this.props.rescale} 
                            onChange={event => this.props.updateRescale(event.target.value)}>
                        {rescales.map(this.renderOption)}
                    </select>
                </div>
            </div>;
    }

    renderOption(rescale) {
        return <option key={rescale.name} value={rescale.name}>{rescale.name}</option>;
    }
};