export const TYPE_INTERNAL = 'internal';
export const TYPE_DIRECT = 'direct';
export const TYPE_RELAY = 'relay';

export class Antenna {
    constructor({
            mod,
            name,
            type,
            power,
            combinable = false,
            combinabilityExp = 0}) {
        this.mod = mod;
        this.name = name;
        this.type = type;
        this.power = power;
        this.combinabilityExp = combinabilityExp;
    }
}

const antennas = [
    new Antenna({
        mod = 'Stock',
        name = 'Internal',
        type = TYPE_INTERNAL,
        power = 5000
    }),
    new Antenna({
        mod = 'Stock',
        name = 'Communotron 16',
        type = TYPE_DIRECT,
        power = 500000
    }),
    new Antenna({
        mod = 'Stock',
        name = 'Communotron 16-S',
        type = TYPE_DIRECT,
        power = 500000
    }),
    new Antenna({
        mod = 'Stock',
        name = 'HG-5 High Gain',
        type = TYPE_RELAY,
        power = 5000000
    }),
    new Antenna({
        mod = 'Stock',
        name = 'Communotron DTS-M1',
        type = TYPE_DIRECT,
        power = 2000000000
    }),
    new Antenna({
        mod = 'Stock',
        name = 'RA-2 Relay Antenna',
        type = TYPE_RELAY,
        power = 2000000000
    }),
    new Antenna({
        mod = 'Stock',
        name = 'Communotron HG-55',
        type = TYPE_DIRECT,
        power = 15000000000
    }),
    new Antenna({
        mod = 'Stock',
        name = 'RA-15 Relay Antenna',
        type = TYPE_RELAY,
        power = 15000000000
    }),
    new Antenna({
        mod = 'Stock',
        name = 'Communotron 88-88',
        type = TYPE_DIRECT,
        power = 100000000000
    }),
    new Antenna({
        mod = 'Stock',
        name = 'RA-100 Relay Antenna',
        type = TYPE_RELAY,
        power = 100000000000
    }),
];

export function calcCombinedPower(antennas) {
    let maxPower = 0;
    let sumPower = 0;
    let sumPowerExp = 0;

    for (var antenna of antennas) {
        if (antenna.combinable) {
            maxPower = Math.max(antenna.power, maxPower);
            sumPower += antenna.power;
            sumPowerExp += (antenna.power * antenna.combinabilityExp);
        }
    }

    let avgExp = sumPowerExp / sumPower;
    return sumPower * Math.pow(sumPower / maxPower, avgExp);
}

export function calcMaxRange(power1, power2) {
    return Math.sqrt(power1 * power2);
}

export function calcSignal(maxRange, distance) {
    let relativeDist = 1 - (distance / maxRange);

    return (3 - 2 * relativeDist) * (relativeDist * relativeDist);
}