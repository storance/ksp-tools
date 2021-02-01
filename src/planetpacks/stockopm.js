import stock from './stock';
import { PlanetPack } from '../utils';
import { attachSarnus, attachUrlum, attachNeidon, attachPlock } from './opm';
import { allRescales } from './rescale';

const Kerbol = stock.sun.clone();
const Kerbin = Kerbol.findByName('Kerbin'); 

attachSarnus(Kerbol);
attachUrlum(Kerbol);
attachNeidon(Kerbol);
attachPlock(Kerbol);

export default new PlanetPack('Stock + OPM', Kerbol, Kerbin, stock.calendar, allRescales);