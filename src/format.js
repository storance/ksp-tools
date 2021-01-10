export function formatNumber(value, { 
    locale = 'en',
    prefix = '',
    suffix = '',
    fractionDigits = 20,
    units = null,
    exponential = false
}) {
    if (value === null || value === undefined) {
        return value
    }

    if (units) {
        let unitSuffix = ' ' + units[0].suffix;

        for (const unit of Array.from(units).reverse()) {
            const threshold = unit.threshold || unit.scale;
            
            if (Math.abs(value) >= threshold) {
                value = value / unit.scale;
                unitSuffix = ' ' + unit.suffix;
                break;
            }
        }

        suffix = suffix + unitSuffix;
    }

    let formattedNumber = '';
    if (exponential) {
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

export function formatDuration(value, calendar, includeRaw=false) {
    let formmatedDuration = calendar.formatDuration(value);

    if (includeRaw) {
        formmatedDuration += ' (' + value.toFixed(3) + ' s)';
    }

    return formmatedDuration;
}