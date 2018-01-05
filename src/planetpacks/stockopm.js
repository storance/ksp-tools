import stock from './stock';
import PlanetPack from '../planetpack.js';
import {attachSarnus, attachUrlum, attachNeidon, attachPlock } from './opm';

const Kerbol = stock.sun.clone();
const Kerbin = Kerbol.findByName('Kerbin'); 

attachSarnus(Kerbol);
attachUrlum(Kerbol);
attachNeidon(Kerbol);
attachPlock(Kerbol);

export default new PlanetPack('Stock + OPM', Kerbol, Kerbin, stock.calendar);