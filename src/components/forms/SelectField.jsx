import React from 'react';

export default class SelectField extends React.PureComponent {
    render() {
        return <div className="form-group row">
                <label htmlFor={this.props.name} className="col-form-label col-sm-4 text-right font-weight-bold">{this.props.label}</label>
                <div className="col-sm-6">
                    <select id={this.props.name} className="form-control" value={this.props.value} 
                            onChange={event => this.props.update(event.target.value)}>
                        {this.props.options.map(this.renderOption)}
                    </select>
                </div>
            </div>;
    }

    renderOption(option) {
        const key = option.key || option.value;
        return <option key={key} value={option.value}>{option.label}</option>;
    }
};