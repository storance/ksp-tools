import { ANTENNAS as STOCK_ANTENNAS } from './stock';
import { ANTENNAS as BREAKING_GROUND_ANTENNAS } from './breaking-ground';
import { ANTENNAS as BDB_ANTENNAS } from './bdb';
import { ANTENNAS as COATL_ANTENNAS } from './coatl';
import { ANTENNAS as CAE_ANTENNAS } from './commnet-extension';
import { ANTENNAS as JX2_ANTENNAS } from './jx2';
import { ANTENNAS as KIWI_ANTENNAS } from './kiwi';
import { ANTENNAS as KNES_ANTENNAS } from './knes';
import { ANTENNAS as LUCIOLE_ANTENNAS } from './luciole';
import { ANTENNAS as NF_ANTENNAS, REFLECTORS as NF_REFLECTORS } from './nearfuture-exploration';
import { ANTENNAS as RESTOCK_ANTENNAS } from './restockplus';
import { ANTENNAS as SOCK_ANTENNAS } from './sock';
import { ANTENNAS as TANTARES_ANTENNAS } from './tantares';
import { ANTENNAS as TANTARES_SP_ANTENNAS } from './tantaressp';

export const ANTENNAS = STOCK_ANTENNAS.withMutations(antennas => {
    antennas.concat(BREAKING_GROUND_ANTENNAS);
    antennas.concat(BDB_ANTENNAS);
    antennas.concat(COATL_ANTENNAS);
    antennas.concat(CAE_ANTENNAS);
    antennas.concat(JX2_ANTENNAS);
    antennas.concat(KIWI_ANTENNAS);
    antennas.concat(KNES_ANTENNAS);
    antennas.concat(LUCIOLE_ANTENNAS);
    antennas.concat(NF_ANTENNAS);
    antennas.concat(RESTOCK_ANTENNAS);
    antennas.concat(SOCK_ANTENNAS);
    antennas.concat(TANTARES_ANTENNAS);
    antennas.concat(TANTARES_SP_ANTENNAS);
});

export const REFLECTORS = NF_REFLECTORS;

export const REFLECTORS_BY_MOD = REFLECTORS.groupBy(reflector => reflector.mod);
