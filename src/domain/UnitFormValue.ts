import { UnitBasicInfo, UnitNumber } from './UnitBasicInfo';
import { unitBasicData } from '../data/unitBasicData';

export const FormChangeUnits = {
  Alexandra: 11,
  Leona: 31,
  BloodyPanther: 61,
  Emily: 68,
  Phantom: 73,
  Pinto: 83,
  Bulgasari: 84,
  InvincibleDragon: 85,
  Siren: 89,
  Olivia: 98,
  Spartoia: 104,
  Rampart: 114,
  MightyR: 119,
  Ullr: 152,
  JangHwa: 154,
  Fortress: 222,
  Peregrinus: 239
} as const satisfies Record<string, UnitNumber>;

const NormalForm = 'normal';

export const UnitForms = {
  [FormChangeUnits.Alexandra]: {
    default: NormalForm,
    changed: 'electric_emission'
  },
  [FormChangeUnits.Leona]: {
    default: 'attack_command',
    changed: 'defense_command'
  },
  [FormChangeUnits.BloodyPanther]: {
    default: 'cruiser',
    changed: 'armor'
  },
  [FormChangeUnits.Emily]: {
    default: NormalForm,
    changed: 'limiter_unlock'
  },
  [FormChangeUnits.Phantom]: {
    default: NormalForm,
    changed: 'optical_camouflage'
  },
  [FormChangeUnits.Pinto]: {
    default: NormalForm,
    changed: 'true_power'
  },
  [FormChangeUnits.Bulgasari]: {
    default: NormalForm,
    changed: 'blitz_pile_bunker'
  },
  [FormChangeUnits.InvincibleDragon]: {
    default: NormalForm,
    changed: 'fleet_shelling_mode'
  },
  [FormChangeUnits.Siren]: {
    default: 'interception',
    changed: 'bombarding'
  },
  [FormChangeUnits.Olivia]: {
    default: 'normal',
    changed: 'thimble'
  },
  [FormChangeUnits.Spartoia]: {
    default: 'normal',
    changed: 'space'
  },
  [FormChangeUnits.Rampart]: {
    default: 'normal',
    changed: 'offensive_tactics'
  },
  [FormChangeUnits.MightyR]: {
    default: 'normal',
    changed: 'maximum_pump_up'
  },
  [FormChangeUnits.Ullr]: {
    default: 'close_range_response_mode',
    changed: 'long_range_sniper_mode'
  },
  [FormChangeUnits.JangHwa]: {
    default: 'normal',
    changed: 'remote_bomb_placement'
  },
  [FormChangeUnits.Fortress]: {
    default: 'hull_down_mode',
    changed: 'turret_down_mode'
  },
  [FormChangeUnits.Peregrinus]: {
    default: 'falcon_form',
    changed: 'human_form'
  }
} as const satisfies { [K in typeof FormChangeUnits[keyof typeof FormChangeUnits]]: Record<'default' | 'changed', string> };
export type UnitForms =
  typeof UnitForms[keyof typeof UnitForms][keyof typeof UnitForms[keyof typeof UnitForms]]

export type FormChangeUnitNumbers = typeof FormChangeUnits[keyof typeof FormChangeUnits]

export type FormPerUnit<N extends FormChangeUnitNumbers> = typeof UnitForms[N][keyof typeof UnitForms[N]]

export type AlexandraForm        = FormPerUnit<typeof FormChangeUnits.Alexandra>
export type LeonaForm            = FormPerUnit<typeof FormChangeUnits.Leona>
export type BloodyPantherForm    = FormPerUnit<typeof FormChangeUnits.BloodyPanther>
export type EmilyForm            = FormPerUnit<typeof FormChangeUnits.Emily>
export type PhantomForm          = FormPerUnit<typeof FormChangeUnits.Phantom>
export type PintoForm            = FormPerUnit<typeof FormChangeUnits.Pinto>
export type BulgasariForm        = FormPerUnit<typeof FormChangeUnits.Bulgasari>
export type InvincibleDragonForm = FormPerUnit<typeof FormChangeUnits.InvincibleDragon>
export type SirenForm            = FormPerUnit<typeof FormChangeUnits.Siren>
export type OliviaForm           = FormPerUnit<typeof FormChangeUnits.Olivia>
export type SpartoiaForm         = FormPerUnit<typeof FormChangeUnits.Spartoia>
export type RampartForm          = FormPerUnit<typeof FormChangeUnits.Rampart>
export type MightyRForm          = FormPerUnit<typeof FormChangeUnits.MightyR>
export type UllrForm             = FormPerUnit<typeof FormChangeUnits.Ullr>
export type JangHwaForm          = FormPerUnit<typeof FormChangeUnits.JangHwa>
export type FortressForm         = FormPerUnit<typeof FormChangeUnits.Fortress>
export type PeregrinusForm       = FormPerUnit<typeof FormChangeUnits.Peregrinus>

export type FormLessUnitBasicInfo = typeof unitBasicData[Exclude<UnitNumber, FormChangeUnitNumbers>]

export type FormChangeUnitBasicInfo<N extends FormChangeUnitNumbers> =
  (
    N extends typeof FormChangeUnits.Alexandra        ? typeof unitBasicData[typeof FormChangeUnits.Alexandra] :
    N extends typeof FormChangeUnits.Leona            ? typeof unitBasicData[typeof FormChangeUnits.Leona] :
    N extends typeof FormChangeUnits.BloodyPanther    ? typeof unitBasicData[typeof FormChangeUnits.BloodyPanther] :
    N extends typeof FormChangeUnits.Emily            ? typeof unitBasicData[typeof FormChangeUnits.Emily] :
    N extends typeof FormChangeUnits.Phantom          ? typeof unitBasicData[typeof FormChangeUnits.Phantom] :
    N extends typeof FormChangeUnits.Pinto            ? typeof unitBasicData[typeof FormChangeUnits.Pinto] :
    N extends typeof FormChangeUnits.Bulgasari        ? typeof unitBasicData[typeof FormChangeUnits.Bulgasari] :
    N extends typeof FormChangeUnits.InvincibleDragon ? typeof unitBasicData[typeof FormChangeUnits.InvincibleDragon] :
    N extends typeof FormChangeUnits.Siren            ? typeof unitBasicData[typeof FormChangeUnits.Siren] :
    N extends typeof FormChangeUnits.Olivia           ? typeof unitBasicData[typeof FormChangeUnits.Olivia] :
    N extends typeof FormChangeUnits.Spartoia         ? typeof unitBasicData[typeof FormChangeUnits.Spartoia] :
    N extends typeof FormChangeUnits.Rampart          ? typeof unitBasicData[typeof FormChangeUnits.Rampart] :
    N extends typeof FormChangeUnits.MightyR          ? typeof unitBasicData[typeof FormChangeUnits.MightyR] :
    N extends typeof FormChangeUnits.Ullr             ? typeof unitBasicData[typeof FormChangeUnits.Ullr] :
    N extends typeof FormChangeUnits.JangHwa          ? typeof unitBasicData[typeof FormChangeUnits.JangHwa] :
    N extends typeof FormChangeUnits.Fortress         ? typeof unitBasicData[typeof FormChangeUnits.Fortress] :
    N extends typeof FormChangeUnits.Peregrinus       ? typeof unitBasicData[typeof FormChangeUnits.Peregrinus] :
      never
  ) &
  // HACK: for UnitFormValue.build()
  { no: N }

const formChangeUnitNumbers: ReadonlySet<number> = new Set(Object.values(FormChangeUnits));

export function isFormChangeUnitNumber(arg: UnitNumber): arg is FormChangeUnitNumbers {
  return formChangeUnitNumbers.has(arg);
}

/**
 * @param arg
 * @see {@link https://github.com/microsoft/TypeScript/issues/30506}
 */
export function hasFormChangeUnitNumber<T extends { no: UnitNumber }>(arg: T): arg is Extract<T, { no: FormChangeUnitNumbers }> {
  return isFormChangeUnitNumber(arg.no);
}

export function isFormChangeUnitBasicInfo<N extends FormChangeUnitNumbers>(arg: UnitBasicInfo): arg is FormChangeUnitBasicInfo<N> {
  return hasFormChangeUnitNumber(arg);
}

class UnitFormValue<N extends FormChangeUnitNumbers> {

  static build<N extends FormChangeUnitNumbers>(unit: FormChangeUnitBasicInfo<N>): UnitFormValue<N> {
    return new UnitFormValue(unit.no);
  }

  readonly #unitNo: N;
  readonly #form: keyof typeof UnitForms[N];

  constructor(unitNo: N, form?: keyof typeof UnitForms[N]) {
    this.#unitNo = unitNo;
    this.#form   = form ?? 'default';
  }

  changeForm(): UnitFormValue<N> {
    return new UnitFormValue(
      this.#unitNo,
      this.#form === 'default' ? 'changed' : 'default'
    );
  }

  get unitForm(): FormPerUnit<N> {
    return UnitForms[this.#unitNo][this.#form];
  }
}

export default UnitFormValue;
