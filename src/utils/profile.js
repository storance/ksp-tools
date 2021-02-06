
export class Profile {
	constructor({
		id,
		name,
		planetpack,
		rescale,
		customDsnLevels,
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
		this.customDsnLevels = customDsnLevels;
		this.dsnModifier = dsnModifier;
		this.rangeModifier = rangeModifier;
		this.atmOcclusion = atmOcclusion;
		this.vacOcclusion = vacOcclusion;
		this.editable = editable;
	}
};