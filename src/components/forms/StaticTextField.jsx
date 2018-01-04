import React from 'react';

export default class StaticTextField extends React.PureComponent {
    render() {
        return <div className="form-group">
            <label className="col-sm-3 control-label">{this.props.label}</label>
            <div className="col-sm-3">
                <p className="form-control-static">{this.props.children}</p>
            </div>
        </div>;
    }
};