import Body from '../body.js';
import Orbit from '../orbit.js';
import { toDegrees } from '../utils';
import stock from './stock';

// not a selectable planetpack, just adds the ability to attach to another planet
export function attachSarnus(parentBody, semiMajorAxisMultiplier=1) {
    const Sarnus = new Body({
        name: 'Sarnus',
        radius: 5300000,
        mass: 1.2300220256e24,
        atmosphereHeight: 580000,
        highSpaceBorder: 3500000,
        rotationalPeriod: 28500,
        orbit: new Orbit({
            parentBody: parentBody,
            semiMajorAxis: 125798522368 * semiMajorAxisMultiplier,
            eccentricity: 0.0534,
            inclination: 2.02,
            longitudeOfAscendingNode: 184,
            argumentOfPeriapsis: 0,
            meanAnomoloyAtEpoch: toDegrees(2.88114666938782)
        })
    });

    const Hale = new Body({
        name: 'Hale',
        radius: 6000,
        mass: 1.21667678578e16,
        highSpaceBorder: 5000,
        tidallyLocked: true,
        sphereOfInfluence: 41000,
        orbit: new Orbit({
            parentBody: Sarnus,
            semiMajorAxis: 10488231,
            eccentricity: 0,
            inclination: 1,
            longitudeOfAscendingNode: 5,
            argumentOfPeriapsis: 0,
            meanAnomoloyAtEpoch: 0
        })
    });

    const Ovok = new Body({
        name: 'Ovok',
        radius: 26000,
        mass: 1.98665098354e17,
        highSpaceBorder: 20000,
        tidallyLocked: true,
        sphereOfInfluence: 94000,
        orbit: new Orbit({
            parentBody: Sarnus,
            semiMajorAxis: 12169413,
            eccentricity: 0.01,
            inclination: 1.5,
            longitudeOfAscendingNode: 55,
            argumentOfPeriapsis: 0,
            meanAnomoloyAtEpoch: toDegrees(1.72)
        })
    });

    const Eeloo = moveEeloo(parentBody);
    Eeloo.orbit.parentBody = Sarnus;
    Eeloo.orbit.semiMajorAxis = 19105978;
    Eeloo.orbit.eccentricity = 0.0034;
    Eeloo.orbit.inclination = 2.3;
    Eeloo.orbit.longitudeOfAscendingNode = 55;

    const Slate = new Body({
        name: 'Slate',
        radius: 540000,
        mass: 2.96509422593e22,
        highSpaceBorder: 216000,
        tidallyLocked: true,
        orbit: new Orbit({
            parentBody: Sarnus,
            semiMajorAxis: 42592946,
            eccentricity: 0.04,
            inclination: 2.3,
            longitudeOfAscendingNode: 55,
            argumentOfPeriapsis: 0,
            meanAnomoloyAtEpoch: toDegrees(1.1)
        })
    });

    const Tekto = new Body({
        name: 'Tekto',
        radius: 280000,
        mass: 2.88351222696e21,
        atmosphereHeight: 95000,
        highSpaceBorder: 208000,
        tidallyLocked: true,
        orbit: new Orbit({
            parentBody: Sarnus,
            semiMajorAxis: 97355304,
            eccentricity: 0.028,
            inclination: 9.4,
            longitudeOfAscendingNode: 55,
            argumentOfPeriapsis: 0,
            meanAnomoloyAtEpoch: toDegrees(2.1)
        })
    });

    Sarnus.satellites = [Hale, Ovok, Eeloo, Slate, Tekto];
    parentBody.addSatellite(Sarnus);
}

function moveEeloo(parentBody) {
    // find back to the root body
    let rootBody = parentBody;
    while (rootBody.parentBody != null) {
        rootBody = rootBody.parentBody;
    }

    // find eeloo from the root body
    const eeloo = rootBody.findByName('Eeloo');
    if (eeloo) {
        // remove eeloo from its parent's list of satellites
        const eelooParent = eeloo.orbit.parentBody;
        eelooParent.satellites = eelooParent.satellites.filter(body => body.name !== eeloo.name);

        return eeloo;
    } else {
        // the planetpack doesn't have eeloo, so clone it from the stock planetpack
        return stock.sun.findByName('Eeloo').clone();
    }
}

export function attachUrlum(parentBody, semiMajorAxisMultiplier=1) {
    const Urlum = new Body({
        name: 'Urlum',
        radius: 2177000,
        mass: 1.78976028338e23,
        atmosphereHeight: 325000,
        highSpaceBorder: 1450000,
        rotationalPeriod: 41000,
        orbit: new Orbit({
            parentBody: parentBody,
            semiMajorAxis: 254317012787 * semiMajorAxisMultiplier,
            eccentricity: 0.045214674,
            inclination: 0.64,
            longitudeOfAscendingNode: 61,
            argumentOfPeriapsis: 0,
            meanAnomoloyAtEpoch: toDegrees(5.59607362747192)
        })
    });

    const Tal = new Body({
        name: 'Tal',
        radius: 22000,
        mass: 3.2003889365e18,
        highSpaceBorder: 20000,
        tidallyLocked: true,
        orbit: new Orbit({
            parentBody: Urlum,
            semiMajorAxis: 3109163,
            eccentricity: 0,
            inclination: 1.9,
            longitudeOfAscendingNode: 40,
            argumentOfPeriapsis: 0,
            meanAnomoloyAtEpoch: 0
        })
    });

    const Polta = new Body({
        name: 'Polta',
        radius: 220000,
        mass: 1.35127532875e21,
        highSpaceBorder: 208000,
        tidallyLocked: true,
        orbit: new Orbit({
            parentBody: Urlum,
            semiMajorAxis: 11727895,
            eccentricity: 0.0015,
            inclination: 2.45,
            longitudeOfAscendingNode: 40,
            argumentOfPeriapsis: 60,
            meanAnomoloyAtEpoch: toDegrees(1.5209)
        })
    });

    const Priax = new Body({
        name: 'Priax',
        radius: 74000,
        mass: 5.06931027744e19,
        highSpaceBorder: 5000,
        tidallyLocked: true,
        orbit: new Orbit({
            parentBody: Urlum,
            semiMajorAxis: 11727895,
            eccentricity: 0.0015,
            inclination: 2.5,
            longitudeOfAscendingNode: 40,
            argumentOfPeriapsis: 0,
            meanAnomoloyAtEpoch: toDegrees(1.5209)
        })
    });

    const Wal = new Body({
        name: 'Wal',
        radius: 370000,
        mass: 7.44303493116e21,
        highSpaceBorder: 216000,
        tidallyLocked: true,
        orbit: new Orbit({
            parentBody: Urlum,
            semiMajorAxis: 67553668,
            eccentricity: 0.023,
            inclination: 1.9,
            longitudeOfAscendingNode: 40,
            argumentOfPeriapsis: 0,
            meanAnomoloyAtEpoch: toDegrees(2.9615)
        })
    });

    Urlum.satellites = [Tal, Polta, Priax, Wal];
    parentBody.addSatellite(Urlum);
}

export function attachNeidon(parentBody, semiMajorAxisMultiplier=1) {
    const Neidon = new Body({
        name: 'Neidon',
        radius: 2145000,
        mass: 2.12289799131e23,
        atmosphereHeight: 260000,
        highSpaceBorder: 1500000,
        rotationalPeriod: 40250,
        orbit: new Orbit({
            parentBody: parentBody,
            semiMajorAxis: 409355191706 * semiMajorAxisMultiplier,
            eccentricity: 0.0127567,
            inclination: 1.27,
            longitudeOfAscendingNode: 259,
            argumentOfPeriapsis: 0,
            meanAnomoloyAtEpoch: toDegrees(2.27167344093323)
        })
    });

    const Thatmo = new Body({
        name: 'Thatmo',
        radius: 286000,
        mass: 2.7884633205e21,
        atmosphereHeight: 35000,
        highSpaceBorder: 216000,
        tidallyLocked: true,
        orbit: new Orbit({
            parentBody: Neidon,
            semiMajorAxis: 32300895,
            eccentricity: 0.00043,
            inclination: 161.1,
            longitudeOfAscendingNode: 66,
            argumentOfPeriapsis: 0,
            meanAnomoloyAtEpoch: toDegrees(2.04731106758118)
        })
    });

    const Nissee = new Body({
        name: 'Nissee',
        radius: 30000,
        mass: 5.95113645218e18,
        highSpaceBorder: 20000,
        rotationalPeriod: 27924.8723,
        orbit: new Orbit({
            parentBody: Neidon,
            semiMajorAxis: 487743514,
            eccentricity: 0.72,
            inclination: 29.56,
            longitudeOfAscendingNode: 66,
            argumentOfPeriapsis: 0,
            meanAnomoloyAtEpoch: toDegrees(2.04731106758118)
        })
    });

    Neidon.satellites = [Thatmo, Nissee];
    parentBody.addSatellite(Neidon);
}

export function attachPlock(parentBody, semiMajorAxisMultiplier=1) {
    const Plock = new Body({
        name: 'Plock',
        radius: 189000,
        mass: 7.76837547921e20,
        highSpaceBorder: 53100,
        rotationalPeriod: 106309.606989054,
        orbit: new Orbit({
            parentBody: parentBody,
            semiMajorAxis: 535833706086 * semiMajorAxisMultiplier,
            eccentricity: 0.26,
            inclination: 6.15,
            longitudeOfAscendingNode: 260,
            argumentOfPeriapsis: 50,
            meanAnomoloyAtEpoch: 0
        })
    });

    const Karen = new Body({
        name: 'Karen',
        radius: 85050,
        mass: 7.01515799187e19,
        highSpaceBorder: 216000,
        tidallyLocked: true,
        orbit: new Orbit({
            parentBody: Plock,
            semiMajorAxis: 2457800,
            eccentricity: 0,
            inclination:0,
            longitudeOfAscendingNode: 260,
            argumentOfPeriapsis: 50,
            meanAnomoloyAtEpoch: 0
        })
    });

    Plock.satellites = [Karen];
    parentBody.addSatellite(Plock);
}