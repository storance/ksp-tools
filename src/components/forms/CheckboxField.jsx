import React from 'react';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class CheckboxField extends React.PureComponent {
    render() {
        const updateFunc = event => this.props.update(this.props.name, event.target.checked);
        return <Form.Group as={Row} controlId={this.props.name}>
                <Form.Label column sm={4} className="text-right font-weight-bold">{this.props.label}</Form.Label>
                <Col sm="8" className="my-auto">
                    <Form.Check 
                        type="switch"
                        id={this.props.name}
                        checked={this.props.value}
                        name={this.props.name}
                        onChange={updateFunc} />
                </Col>
            </Form.Group>;
    }
};