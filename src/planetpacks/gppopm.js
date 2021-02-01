import gpp from './gpp';
import { PlanetPack } from '../utils';
import { attachSarnus, attachUrlum, attachNeidon, attachPlock } from './opm';

const Ciro = gpp.sun.clone();
const Grannus = Ciro.findByName('Grannus');
const Gael = Ciro.findByName('Gael');

attachSarnus(Grannus);
attachUrlum(Grannus, {semiMajorAxisMultiplier: 0.77});
attachNeidon(Grannus, {semiMajorAxisMultiplier: 0.7});
attachPlock(Grannus, {semiMajorAxisMultiplier: 0.75});

export default new PlanetPack('GPP + OPM', Ciro, Gael, gpp.calendar, gpp.rescales);