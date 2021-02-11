import React from 'react';
import Select, { createFilter } from 'react-select';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const DropdownIndicator = () => (
    <div style={{ height: 24, width: 32 }}>
        <FontAwesomeIcon icon={faSearch} />
    </div>
);

const Menu = props => {
    const shadow = 'hsla(218, 50%, 10%, 0.1)';
    return <div
            style={{
                width: '94%',
                backgroundColor: 'white',
                borderRadius: 4,
                boxShadow: `0 0 0 1px ${shadow}, 0 4px 11px ${shadow}`,
                marginTop: 8,
                position: 'absolute',
                zIndex: 2,
            }}

            {...props}
        />;
};

const Blanket = props => (
    <div
        style={{
            bottom: 0,
            left: 0,
            top: 0,
            right: 0,
            position: 'fixed',
            zIndex: 1,
        }}
        {...props}
    />
);

const selectStyles = {
    control: provided => ({ ...provided, minWidth: 240, margin: 8 }),
    menu: () => ({ boxShadow: 'inset 0 1px 0 rgba(0, 0, 0, 0.1)' }),
};

export default class SelectField extends React.PureComponent {
    state = {
        isOpen: false
    };

    toggleOpen() {
        this.setState(state => {
            return { isOpen: !state.isOpen };
        });
    };

    render() {
        const shadow = 'hsla(218, 50%, 10%, 0.1)';
        const updateFunc = event => this.props.update(this.props.name, event.target.value);
        return <Form.Group as={Row} controlId={this.props.name}>
                <Form.Label column sm={4} className="text-right font-weight-bold">{this.props.label}</Form.Label>
                <Col sm={8}>
                    <select
                        id={this.props.name}
                        name={this.props.name}
                        value={this.props.value}
                        className="custom-select"
                        onClick={this.onClick.bind(this)}
                        onMouseDown={this.onMouseDown.bind(this)}
                        onKeyDown={this.onKeyDown.bind(this)}
                        onChange={updateFunc}>
                        {this.props.options.map(this.renderOption, this)}
                    </select>
                    {(this.props.searchable && this.state.isOpen) && 
                        <>
                            <Menu>
                                <Select
                                    autoFocus
                                    menuIsOpen
                                    isSearchable
                                    components={{ DropdownIndicator, IndicatorSeparator: null }}
                                    backspaceRemovesValue={false}
                                    controlShouldRenderValue={false}
                                    hideSelectedOptions={false}
                                    isClearable={false}
                                    tabSelectsValue={false}
                                    placeholder="Search..."
                                    name={this.props.name}
                                    filterOption={this.props.customFilter}
                                    onChange={this.onSelectChange.bind(this)}
                                    onKeyDown={this.onSelectKeyDown.bind(this)}
                                    options={this.props.options}
                                    styles={selectStyles}
                                    value={this.getSelectedOption()} />
                            </Menu>
                            <Blanket onClick={this.toggleOpen.bind(this)} />
                        </>
                    }
                </Col>
            </Form.Group>;
    }

    getSelectedOption() {
        return this.findInOptions(this.props.value, this.props.options);
    }

    findInOptions(value, options) {
        for (var option of options) {
            if (option.options) {
                let result = this.findInOptions(value, option.options);
                if (result) {
                    return result;
                }
            } else if (option.value === value) {
                return option;
            }
        }

        return undefined;
    }

    onClick(event) {
        if (this.props.searchable) {
            event.preventDefault();

            this.toggleOpen();
        }
    }

    onMouseDown(event) {
        if (this.props.searchable) {
            event.preventDefault();
        }
    }

    onKeyDown(event) {
        if (this.props.searchable) {
            event.preventDefault();
            switch (event.key) {
                case 'ArrowUp':
                case 'ArrowDown':
                case ' ':
                    this.toggleOpen();
                    break;
            }
        }
    }

    onSelectChange(inputValue, {action}) {
        if (action === 'select-option') {
            this.props.update(this.props.name, inputValue.value);
            this.toggleOpen();
        }
    }

    onSelectKeyDown(event) {
        if (event.key === 'Escape') {
            event.preventDefault();
            this.toggleOpen();
        }
    }

    renderOption(option) {
        if (option.options) {
            const key = option.key ? option.key : option.label;
            return <optgroup key={key} label={option.label}>{option.options.map(this.renderOption, this)}</optgroup>
        }

        const key = option.key ? option.key : option.value;
        return <option key={key} value={option.value}>{option.label}</option>;
    }
};