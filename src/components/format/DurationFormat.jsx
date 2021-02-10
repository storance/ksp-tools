import React from 'react';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle} from '@fortawesome/free-solid-svg-icons';

import { formatNumber } from '../../utils';

export default class DurationFormat extends React.PureComponent {
    render() {
        const locale = 'en';

        return <span>{this.props.calendar.formatDuration(this.props.value)}
            {this.props.includeRaw &&
                <>
                    &nbsp;
                    <OverlayTrigger
                        key="top"
                        placement="top"
                        overlay={
                            <Tooltip>
                                {formatNumber(this.props.value, {fractionDigits: 3, suffix: 's'})}
                            </Tooltip>
                        }>
                        <FontAwesomeIcon icon={faInfoCircle} className="text-info" />
                    </OverlayTrigger>
                </>
            }
        </span>
    }
}