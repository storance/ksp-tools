import React from 'react';
import { Map } from 'immutable';

import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class ApsisField extends React.PureComponent {
    render() {
        const valueUpdateFunc = event => this.props.update([this.props.name, 'value'], event.target.value);
        const unitsUpdateFunc = event => this.props.update([this.props.name, 'units'], event.target.value);
        const field = Map.isMap(this.props.field) ? this.props.field.toObject() : this.props.field;

        return <Form.Group as={Row}>
                    <Form.Label htmlFor={this.props.name} column sm={4} className="text-right font-weight-bold">{this.props.label}</Form.Label>
                    <InputGroup as={Col} sm={8}>
                        <Form.Control
                           id={this.props.name}
                           name={this.props.name}
                           value={field.value}
                           isInvalid={field.error !== null}
                           onChange={valueUpdateFunc} />
                        <InputGroup.Append>
                            <Form.Control
                                as="select"
                                custom
                                id={this.props.name + '-units'}
                                name={this.props.name + '-units'}
                                value={field.units}
                                onChange={unitsUpdateFunc}>

                                <option value="m">m</option>
                                <option value="km">km</option>
                                <option value="Mm">Mm</option>
                                <option value="Gm">Gm</option>
                            </Form.Control>
                        </InputGroup.Append>
                        {field.error && <FormControl.Feedback type="invalid">{field.error}</FormControl.Feedback>}
                    </InputGroup>
                </Form.Group>;
    }
};