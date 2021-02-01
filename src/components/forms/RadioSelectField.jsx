import React from 'react';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class RadioSelectField extends React.PureComponent {
    render() {
        return <Form.Group as={Row}>
                <Form.Label column sm={4} className="text-right font-weight-bold">{this.props.label}</Form.Label>
                <Col sm={8}>
                    {this.props.options.map(this.renderOption.bind(this))}
                </Col>
            </Form.Group>;
    }

    renderOption(option) {
        const key = option.key || option.value;
        const name = this.props.name;
        const selectedValue = this.props.value;
        const updateFunc = event => this.props.update(this.props.name, event.target.value);

        return <Form.Check type="radio"
                custom
                id={name + "_" + option.value}
                name={name}
                value={option.value}
                label={option.label}
                checked={selectedValue === option.value}
                onChange={updateFunc} />
    }
};