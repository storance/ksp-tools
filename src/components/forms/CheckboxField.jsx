import React from 'react';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class CheckboxField extends React.PureComponent {
    render() {
        const updateFunc = event => this.props.update(this.props.name, event.target.checked);
        return <Form.Group as={Row} controlId={this.props.name}>
                <Col sm={{span: 8, offset: 4}}>
                    <Form.Check 
                        type="switch"
                        id={this.props.name}
                        value={this.props.value}
                        name={this.props.name}
                        label={this.props.label}
                        onChange={updateFunc} />
                </Col>
            </Form.Group>;
    }
};