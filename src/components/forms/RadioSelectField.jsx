import React from 'react';

export default class RadioSelectField extends React.PureComponent {
    render() {
        return <div className="form-group">
                <label className="control-label col-sm-3">{this.props.label}</label>
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

        return <div key={key} className="radio">
            <label>
                <input type="radio"
                       name={name}
                       value={option.value}
                       checked={selectedValue === option.value}
                       onChange={event => updateFunc(event.target.value)} />
                {option.label}
            </label>
        </div>;
    }
};