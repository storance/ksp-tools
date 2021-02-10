import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ButtonField from './ButtonField';

export default class DsnLevelEditor extends React.PureComponent {
    render() {
        const isLastDsnLevel = this.props.dsnLevels.size <= 1;

        return <>
                <Row>
                    <Col sm={4} className="text-right font-weight-bold mt-3">
                        DSN Levels
                    </Col>
                    <Col sm={8}>
                        <Table striped bordered>
                            <thead>
                                <tr>
                                    <th>Level</th>
                                    <th>Power</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.dsnLevels.map((power, level) => 
                                    this.renderLevel(power, level, !isLastDsnLevel))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <ButtonField label="Add" icon={faPlus} onClick={this.props.addLevel} />
            </>;
    }

    renderLevel(power, level, isDeletable) {
        const updatePower = e => this.props.update([this.props.fieldName, level, 'value'], e.target.value);
        const updatePowerUnits = e => this.props.update([this.props.fieldName, level, 'units'], e.target.value);

        const deleteOnClick = e => {
            e.preventDefault();
            this.props.deleteLevel(level);
        };

        return <tr key={level+1}>
                <td>{level+1}</td>
                <td>
                    <InputGroup>
                        <Form.Control
                           type="text"
                           name={this.props.fieldName}
                           value={power.get('value')}
                           isInvalid={power.get('error') !== null}
                           onChange={updatePower} />
                        <InputGroup.Append>
                            <Form.Control
                                as="select"
                                custom
                                name={this.props.fieldName + "Units"}
                                value={power.get('units')}
                                onChange={updatePowerUnits}>

                                <option value="k">k</option>
                                <option value="M">M</option>
                                <option value="G">G</option>
                                <option value="T">T</option>
                            </Form.Control>
                        </InputGroup.Append>
                        {power.get('error') && 
                            <Form.Control.Feedback type="invalid">{power.get('error')}</Form.Control.Feedback>}
                    </InputGroup>
                </td>
                <td>
                    {isDeletable && 
                        <a href="#" title="Delete" onClick={deleteOnClick}>
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </a>
                    }
                </td>
            </tr>
    }
}