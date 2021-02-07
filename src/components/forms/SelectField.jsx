import React from 'react';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class SelectField extends React.PureComponent {
    render() {
        const updateFunc = event => this.props.update(this.props.name, event.target.value);
        return <Form.Group as={Row} controlId={this.props.name}>
                <Form.Label column sm={4} className="text-right font-weight-bold">{this.props.label}</Form.Label>
                <Col sm={8}>
                    <Form.Control as="select"
                        custom
                        value={this.props.value}
                        onChange={updateFunc}>
                        {this.props.options.map(this.renderOption)}
                    </Form.Control>
                </Col>
            </Form.Group>;
    }

    renderOption(option) {
        const key = option.key ? option.key : option.value;
        const disabled = !!option.disabled;
        return <option key={key} value={option.value} disabled={disabled}>{option.label}</option>;
    }
};