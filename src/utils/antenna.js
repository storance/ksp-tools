
export class Antenna {
    constructor(mod, type, power, combinabilityExp, combinable) {
        this.mod = mod;
        this.type = type;
        this.power = power;
        this.combinabilityExp = combinabilityExp;
        this.combinable = combinable
    }
}

export function calcCombinedPower(antennas) {
    let maxPower = 0;
    let sumPower = 0;
    let sumPowerExp = 0;

    for (var antenna of antennas) {
        maxPower = Math.max(antenna.power, maxPower);
        sumPower += antenna.power;
        sumPowerExp += (antenna.power * antenna.combinabilityExp)
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

//function minLOSCalc(body) {
//  var sat = inputs.satellites.value;
//  if (sat) return ( body.eqr * occmod() ) / (Math.cos(0.5 * (2 * Math.PI / sat))) - body.eqr;
//}