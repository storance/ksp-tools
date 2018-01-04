import React from 'react';

export default class SelectField extends React.PureComponent {
    render() {
        return <div className="form-group">
                <label htmlFor={this.props.name} className="control-label col-sm-3">{this.props.label}</label>
                <div className="col-sm-3">
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