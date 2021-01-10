import React from 'react';

export default class StaticTextField extends React.PureComponent {
    render() {
        return <div className="form-group row">
            <label className="col-form-label col-sm-4 text-right font-weight-bold">{this.props.label}</label>
            <div className="col-sm-6">
            	<input type="text" readonly class="form-control-plaintext" value={this.props.value} />
            </div>
        </div>;
    }
};