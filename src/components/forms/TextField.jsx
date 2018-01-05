import React from 'react';
import classNames from 'classnames';

export default class TextField extends React.PureComponent {
    render() {
        const type = this.props.type || "text";
        const classes = classNames({
            'form-group' : true,
            'has-error' : !!this.props.error
        });

        return <div className={classes}>
            <label htmlFor={this.props.name} className="control-label col-sm-3">{this.props.label}</label>
            <div className="col-sm-6">
                {this.props.error && <span className="help-block">{this.props.error}</span>}
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