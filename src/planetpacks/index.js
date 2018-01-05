import stock from './stock';
import stockopm from './stockopm';
import gpp from './gpp';
import gppopm from './gppopm';
import rss from './rss';


export const planetpacks = [stock, stockopm, gpp, gppopm, rss];

export function findPlanetPack(name) {
    return planetpacks.find(p => p.name === name);
}