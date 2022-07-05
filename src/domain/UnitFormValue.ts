import { UnitBasicInfo, UnitNumber } from './UnitBasicInfo';
import { unitBasicData } from '../data/unitBasicData';

export const FormChangeUnits = {
  Alexandra: 11,
  Leona: 31,
  BloodyPanther: 61,
  Emily: 68,
  Phantom: 73,
  Bulgasari: 84,
  InvincibleDragon: 85,
  Siren: 89,
  Rampart: 114,
  Fortress: 222
} as const;

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
  [FormChangeUnits.Rampart]: {
    default: 'normal',
    changed: 'offensive_tactics'
  },
  [FormChangeUnits.Fortress]: {
    default: 'mobility_position',
    changed: 'fixed_position'
  }
} as const;
export type UnitForms =
  typeof UnitForms[keyof typeof UnitForms][keyof typeof UnitForms[keyof typeof UnitForms]]

export type FormChangeUnitNumbers = typeof FormChangeUnits[keyof typeof FormChangeUnits]

export type FormPerUnit<N extends FormChangeUnitNumbers> = typeof UnitForms[N][keyof typeof UnitForms[N]]

export type AlexandraForm        = FormPerUnit<typeof FormChangeUnits.Alexandra>
export type LeonaForm            = FormPerUnit<typeof FormChangeUnits.Leona>
export type BloodyPantherForm    = FormPerUnit<typeof FormChangeUnits.BloodyPanther>
export type EmilyForm            = FormPerUnit<typeof FormChangeUnits.Emily>
export type PhantomForm          = FormPerUnit<typeof FormChangeUnits.Phantom>
export type BulgasariForm        = FormPerUnit<typeof FormChangeUnits.Bulgasari>
export type InvincibleDragonForm = FormPerUnit<typeof FormChangeUnits.InvincibleDragon>
export type SirenForm            = FormPerUnit<typeof FormChangeUnits.Siren>
export type RampartForm          = FormPerUnit<typeof FormChangeUnits.Rampart>
export type FortressForm         = FormPerUnit<typeof FormChangeUnits.Fortress>

const formChangeUnitNumbers: ReadonlySet<number> = new Set(Object.values(FormChangeUnits));

export function isFormChangeUnitNumber(arg: UnitNumber): arg is FormChangeUnitNumbers {
  return formChangeUnitNumbers.has(arg);
}

export type FormLessUnitBasicInfo = typeof unitBasicData[Exclude<UnitNumber, FormChangeUnitNumbers>]

export type FormChangeUnitBasicInfo<N extends FormChangeUnitNumbers> =
  (
    N extends typeof FormChangeUnits.Alexandra        ? typeof unitBasicData[typeof FormChangeUnits.Alexandra] :
    N extends typeof FormChangeUnits.Leona            ? typeof unitBasicData[typeof FormChangeUnits.Leona] :
    N extends typeof FormChangeUnits.BloodyPanther    ? typeof unitBasicData[typeof FormChangeUnits.BloodyPanther] :
    N extends typeof FormChangeUnits.Emily            ? typeof unitBasicData[typeof FormChangeUnits.Emily] :
    N extends typeof FormChangeUnits.Phantom          ? typeof unitBasicData[typeof FormChangeUnits.Phantom] :
    N extends typeof FormChangeUnits.Bulgasari        ? typeof unitBasicData[typeof FormChangeUnits.Bulgasari] :
    N extends typeof FormChangeUnits.InvincibleDragon ? typeof unitBasicData[typeof FormChangeUnits.InvincibleDragon] :
    N extends typeof FormChangeUnits.Siren            ? typeof unitBasicData[typeof FormChangeUnits.Siren] :
    N extends typeof FormChangeUnits.Rampart          ? typeof unitBasicData[typeof FormChangeUnits.Rampart] :
    N extends typeof FormChangeUnits.Fortress         ? typeof unitBasicData[typeof FormChangeUnits.Fortress] :
      never
  ) &
  // HACK: for UnitFormValue.build()
  { no: N }

export function isFormChangeUnitBasicInfo<N extends FormChangeUnitNumbers>(arg: UnitBasicInfo): arg is FormChangeUnitBasicInfo<N> {
  return formChangeUnitNumbers.has(arg.no);
}

class UnitFormValue<N extends FormChangeUnitNumbers> {

  static build<N extends FormChangeUnitNumbers>(unit: FormChangeUnitBasicInfo<N>): UnitFormValue<N> {
    return new UnitFormValue(unit.no);
  }

  readonly #unitNo: N;
  readonly #form: keyof typeof UnitForms[N]

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
