import { List } from 'immutable';

export class Profile {
    constructor({
        id,
        name,
        planetpack,
        rescale,
        customDsnLevels=null,
        dsnModifier,
        rangeModifier,
        atmOcclusion,
        vacOcclusion,
        editable = true
    }) {
        this.id = id;
        this.name = name;
        this.planetpack = planetpack;
        this.rescale = rescale;
        this.hasCustomDsnLevels = !!customDsnLevels;
        this.customDsnLevels = this.hasCustomDsnLevels ? List(customDsnLevels) : null;
        this.dsnModifier = dsnModifier;
        this.rangeModifier = rangeModifier;
        this.atmOcclusion = atmOcclusion;
        this.vacOcclusion = vacOcclusion;
        this.editable = editable;
    }
};

export class ActiveProfile {
    constructor({
        id,
        name,
        planetpack,
        dsnLevels,
        antennas,
        atmOcclusion,
        vacOcclusion
    }) {
        this.id = id;
        this.name = name;
        this.planetpack = planetpack;
        this.dsnLevels = dsnLevels;
        this.antennas = antennas;
        this.antennasByMod = antennas.groupBy(a => a.mod);
        this.atmOcclusion = atmOcclusion;
        this.vacOcclusion = vacOcclusion;
    }

    findBodyByName(bodyName) {
        return this.planetpack.findByName(bodyName);
    }

    findAntennaByName(antennaName) {
        return this.antennas.find(antenna => antenna.name === antennaName);
    }
}