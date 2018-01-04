import React from 'react';

export default class ButtonField extends React.PureComponent {
    render() {
        return <div className="col-sm-offset-3">
            <button type="submit" className="btn btn-default" onClick={e => {this.onClick(e)}}>{this.props.label}</button>
        </div>;
    }

    onClick(event) {
        event.preventDefault();
        this.props.onClick();
    }
};