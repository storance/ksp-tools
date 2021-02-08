import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class ButtonField extends React.PureComponent {
    render() {
        return <Form.Group as={Row}>
                <Col sm={{span: 8, offset: 4}}>
                    <Button type="submit" variant="primary" onClick={e => this.onClick(e)}>
                        {this.props.icon && <FontAwesomeIcon icon={this.props.icon} />} {this.props.label}
                    </Button>
                </Col>
            </Form.Group>;
    }

    onClick(event) {
        event.preventDefault();
        this.props.onClick();
    }
};