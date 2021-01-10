import React from 'react';
import classNames from 'classnames';

export default class TextField extends React.PureComponent {
    render() {
        const type = this.props.type || "text";
        const classes = classNames({
            'form-control' : true,
            'is-invalid' : !!this.props.error
        });

        return <div className="form-group row">
            <label htmlFor={this.props.name} className="col-form-label col-sm-4 text-right font-weight-bold">{this.props.label}</label>
            <div className="col-sm-6">
              <div className="input-group">
                  <input type={type}
                         className={classes}
                         id={this.props.name}
                         name={this.props.name}
                         value={this.props.value}
                         onChange={event => this.props.update(event.target.value)} />
                  {this.props.suffix && <div className="input-group-append"><span class="input-group-text">{this.props.suffix}</span></div>}
                  {this.props.error && <div className="invalidFeedback">{this.props.error}</div>}
              </div>
            </div>
          </div>;
    }
};