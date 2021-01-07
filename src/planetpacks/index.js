import stock from './stock';
import stockopm from './stockopm';
import gpp from './gpp';
import gppgep from './gppgep';
import gppgepopm from './gppgepopm';
import gppopm from './gppopm';
import rss from './rss';
import jnsq from './jnsq';


export const planetpacks = [stock, stockopm, gpp, gppgep, gppopm, gppgepopm, rss, jnsq];

export function findPlanetPack(name) {
    return planetpacks.find(p => p.name === name);
}