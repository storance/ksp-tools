import React from 'react';

export default class ApsisField extends React.PureComponent {
    render() {
        return <div className="form-group">
            <label htmlFor={this.props.name} className="control-label col-sm-3">{this.props.label}</label>
            <div className="col-sm-6">
                <div className="row">
                    <div className="col-sm-10">
                        <input type="number"
                               className="form-control"
                               id={this.props.name}
                               name={this.props.name}
                               value={this.props.value}
                               onChange={event => this.props.update(event.target.value)} />
                    </div>
                
                    <div className="col-sm-2">
                        <select className="form-control"
                                id={this.props.name + 'Units'}
                                name={this.props.name + 'Units'}
                                value={this.props.unitsValue}
                                onChange={event => this.props.updateUnits(event.target.value)}>
                            <option value="m">m</option>
                            <option value="km">km</option>
                            <option value="Mm">Mm</option>
                            <option value="Mm">Gm</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>;
    }
};