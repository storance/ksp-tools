import React from 'react';
import classNames from 'classnames';

export default class ApsisField extends React.PureComponent {
    render() {
        const classes = classNames({
            'form-group' : true,
            'has-error' : !!this.props.error
        });

        return <div className={classes}>
            <label htmlFor={this.props.name} className="control-label col-sm-3">{this.props.label}</label>
            <div className="col-sm-6">
                <div className="row">
                    {this.props.error && <span className="col-sm-12 help-block">{this.props.error}</span>}
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