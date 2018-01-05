import stock from './stock';
import gpp from './gpp';
import rss from './rss';

export const planetpacks = [stock, gpp, rss];

export function findPlanetPack(name) {
    return planetpacks.find(p => p.name === name);
}