import React from 'react';

import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Wifi1, Wifi2, Wifi, WifiOff } from 'react-bootstrap-icons';

import NumberFormat from '../format/NumberFormat';
import DefinitionList from '../DefinitionList';
import { POWER_UNITS, DISTANCE_UNITS_DISPLAY } from '../../utils';

export default class SignalToBodyDetails extends React.PureComponent {
    render() {
        return <>
                <h3>Signal To Bodies</h3>
                <hr />

                <DefinitionList className="mt-4">
                    <DefinitionList.Item label="Vessel Power">
                        <NumberFormat
                            value={this.props.signalDetails.get('vesselPower')}
                            fractionDigits={3}
                            units={POWER_UNITS} />
                    </DefinitionList.Item>

                    <DefinitionList.Item label="Max Range">
                        <NumberFormat
                            value={this.props.signalDetails.get('maxRange')}
                            fractionDigits={3}
                            units={DISTANCE_UNITS_DISPLAY} />
                    </DefinitionList.Item>

                    <DefinitionList.Item label="Signal">
                        <Table striped bordered>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Max Distance Signal</th>
                                    <th>Min Distance Signal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.signalDetails.get('bodies').map(this.renderBodySignal)}
                            </tbody>
                        </Table>
                    </DefinitionList.Item>
                </DefinitionList>
            </>;
    }

    renderBodySignal = (bodySignal) => {
        return <tr key={bodySignal.body.name}>
                <td>{bodySignal.body.name}</td>
                <td>
                    <NumberFormat
                        value={bodySignal.maxSignal * 100}
                        fractionDigits={1}
                        suffix="%" />
                    {this.renderSignalStrengthIcon(bodySignal.maxSignal)}
                </td>
                <td>
                    <NumberFormat
                        value={bodySignal.minSignal * 100}
                        fractionDigits={1}
                        suffix="%" />
                    {this.renderSignalStrengthIcon(bodySignal.minSignal)}
                </td>
            </tr>;
    }

    renderSignalStrengthIcon(strength) {
        const strengthRounded = strength.toFixed(3);
        if (strengthRounded >= 0.75) {
            return <Wifi className="text-success pl-1" size={24} />
        } else if (strengthRounded >= 0.25) {
            return <Wifi2 className="text-warning pl-1" size={24} />
        } else if (strengthRounded > 0) {
            return <Wifi1 className="text-danger pl-1" size={24} />
        } else {
            return <WifiOff className="text-danger pl-1" size={24} />
        }
    }
}