import React from 'react';

export default class RadioSelectField extends React.PureComponent {
    render() {
        return <div className="form-group row">
                <label className="col-form-label col-sm-4 text-right font-weight-bold">{this.props.label}</label>
                <div className="col-sm-3">
                    {this.props.options.map(this.renderOption.bind(this))}
                </div>
            </div>;
    }

    renderOption(option) {
        const key = option.key || option.value;
        const name = this.props.name;
        const selectedValue = this.props.value;
        const updateFunc = this.props.update;

        return <div key={key} className="form-check">
            <input type="radio"
                       id={name + "_" + option.value}
                       className="form-check-input"
                       name={name}
                       value={option.value}
                       checked={selectedValue === option.value}
                       onChange={event => updateFunc(event.target.value)} />
            <label className="form-check-label" htmlFor={name + "_" + option.value}>{option.label}</label>
        </div>;
    }
};