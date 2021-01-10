import React from 'react';

export default class ButtonField extends React.PureComponent {
    render() {
        return <div class="form-group row">
            <div className="col-sm-6 offset-sm-3">
                <button type="submit" className="btn btn-dark" onClick={e => {this.onClick(e)}}>{this.props.label}</button>
            </div>
        </div>;
    }

    onClick(event) {
        event.preventDefault();
        this.props.onClick();
    }
};