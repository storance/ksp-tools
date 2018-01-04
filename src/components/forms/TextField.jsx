import React from 'react';

export default class TextField extends React.PureComponent {
    render() {
        const type = this.props.type || "text";

        return <div className="form-group">
            <label htmlFor={this.props.name} className="control-label col-sm-3">{this.props.label}</label>
            <div className="col-sm-6">
                <div className="input-group">
                    <input type={type}
                           className="form-control"
                           id={this.props.name}
                           name={this.props.name}
                           value={this.props.value}
                           onChange={event => this.props.update(event.target.value)} />
                    {this.props.suffix ? <div className="input-group-addon">{this.props.suffix}</div> : null}
                </div>
            </div>
        </div>;
    }
};