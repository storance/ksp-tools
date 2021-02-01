import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class DefinitionItem extends React.PureComponent {
    render() {
        return <> 
                <Col as="dt" sm={4} className="text-right">
                    {this.props.label}
                </Col>
                <Col as="dd" sm={8}>
                    {this.props.children}
                </Col>
            </>;
    }
}

class DefinitionList extends React.PureComponent {
    render() {
        return <Row as="dl">
                {this.props.children}
            </Row>;
    }
};

DefinitionList.Item = DefinitionItem;

export default DefinitionList;
