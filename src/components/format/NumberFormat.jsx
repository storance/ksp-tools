import React from 'react';

export default class NumberFormat extends React.PureComponent {
    render() {
        return <span>{this.formattedNumber()}</span>
    }

    formattedNumber() {
        const locale = this.props.locale || 'en';
        const prefix = this.props.prefix || '';
        let suffix = this.props.suffix || '';
        let value = this.props.value;

        let fractionDigits = 20;
        if (this.props.hasOwnProperty('fractionDigits')) {
            fractionDigits = this.props.fractionDigits;
        }

        if (this.props.units) {
            suffix = ' ' + this.props.units[0].suffix;

            for (const unit of Array.from(this.props.units).reverse()) {
                const threshold = unit.threshold || unit.scale;
                
                if (Math.abs(value) >= threshold) {
                    value = value / unit.scale;
                    suffix = ' ' + unit.suffix;
                    break;
                }
            }
        }

        let formattedNumber = ''
        if (this.props.exponential) {
            formattedNumber = value.toExponential(fractionDigits);
        } else {
            // special case the desire for 0 fractional digits
            if (fractionDigits === 0) {
                value = Math.round(value);
            }

            formattedNumber = value.toLocaleString(locale, {
                maximumFractionDigits: fractionDigits
            });
        }

        return prefix + formattedNumber + suffix;
    }
}