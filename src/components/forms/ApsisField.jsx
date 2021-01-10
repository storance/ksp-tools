import React from 'react';
import classNames from 'classnames';

export default class ApsisField extends React.PureComponent {
    render() {
        const classes = classNames({
            'form-control' : true,
            'is-invalid' : !!this.props.error
        });

        return <div className="form-group row">
            <label htmlFor={this.props.name} className="col-form-label col-sm-3 text-right font-weight-bold">{this.props.label}</label>
            <div class="col-sm-5">
                <div className="input-group">
                    <input type="number"
                           className={classes}
                           id={this.props.name}
                           name={this.props.name}
                           value={this.props.value}
                           onChange={event => this.props.update(event.target.value)} />
                    {this.props.error && <div className="invalid-feedback">{this.props.error}</div>}
                </div>
            </div>

            <div className="col-sm-1">
                <select className="form-control"
                        id={this.props.name + 'Units'}
                        name={this.props.name + 'Units'}
                        value={this.props.unitsValue}
                        onChange={event => this.props.updateUnits(event.target.value)}>
                    <option value="m">m</option>
                    <option value="km">km</option>
                    <option value="Mm">Mm</option>
                    <option value="Gm">Gm</option>
                </select>
            </div>
        </div>;
    }
};