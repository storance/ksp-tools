import React from 'react';
import { Map } from 'immutable';

import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class TextField extends React.PureComponent {
    render() {
        const type = this.props.type || "text";
        const updateFunc = event => this.props.update([this.props.name, 'value'], event.target.value);
        const field = Map.isMap(this.props.field) ? this.props.field.toObject() : this.props.field;

        return <Form.Group as={Row} controlId={this.props.name}>
                    <Form.Label column sm={4} className="text-right font-weight-bold">{this.props.label}</Form.Label>
                    <InputGroup as={Col} sm={8}>
                        <Form.Control
                           type={type}
                           name={this.props.name}
                           value={field.value}
                           isInvalid={field.error !== null}
                           onChange={updateFunc} />
                        {this.props.suffix && <InputGroup.Append><InputGroup.Text>{this.props.suffix}</InputGroup.Text></InputGroup.Append>}
                        {field.error && <FormControl.Feedback type="invalid">{field.error}</FormControl.Feedback>}
                    </InputGroup>
                </Form.Group>;
    }
};