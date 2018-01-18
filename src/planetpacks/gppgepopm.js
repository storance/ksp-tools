import gppgep from './gppgep';
import PlanetPack from '../planetpack.js';
import Body from '../body.js';
import Orbit from '../orbit.js';
import { toDegrees } from '../utils';
import {attachSarnus, attachUrlum, attachNeidon, attachPlock } from './opm';

const Ciro = gppgep.sun.clone();
const Gael = Ciro.findByName('Gael');
const Grannus = Ciro.findByName('Grannus');

Grannus.orbit.semiMajorAxis = 1500000000000;
Grannus.orbit.eccentricity = 0.2;

const Robau = new Body({
    name: 'Robau',
    radius: 49360000,
    geeAsl: 40,
    atmosphereHeight: 900000,
    highSpaceBorder: 3e11,
    rotationalPeriod: 864000,
    orbit: new Orbit({
        parentBody: Ciro,
        semiMajorAxis: 4800000000000,
        eccentricity: 0.1,
        inclination: 10,
        longitudeOfAscendingNode: 60,
        argumentOfPeriapsis: 45,
        meanAnomoloyAtEpoch: toDegrees(-0.8)
    })
});

Ciro.addSatellite(Robau);

attachSarnus(Robau, {semiMajorAxis: 56774000000});
attachUrlum(Robau, {semiMajorAxis: 114775000000});
attachNeidon(Robau, {semiMajorAxis: 184744000000});
attachPlock(Robau, {semiMajorAxis: 241825000000});

export default new PlanetPack('Galileo\'s Planet Pack + Grannus Expansion + OPM', Ciro, Gael, gppgep.calendar);