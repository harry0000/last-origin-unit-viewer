import { UnitSkillData } from '../domain/skill/UnitSkillData';

export const unitSkillData: UnitSkillData = {
  2: {
    no: 2,
    active: [{
      damage_deal: {
        base: { milliPercentage: 156500 },
        per_lv_up: { milliPercentage: 14000 }
      },
      range: 1,
      cost: 4,
      area: 'line',
      effects: [{
        conditions: [{ trigger: 'attacked' }],
        details: { self: { additional_damage: { tag: 'plasma_generator', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, max_stack: 3 } } }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_damage: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 251000 },
        per_lv_up: { milliPercentage: 21000 }
      },
      range: 1,
      cost: 10,
      area: 'row_toward_front',
      effects: [{
        details: {
          self: {
            ignore_protect: {},
            tag_unstack: { tag: 'plasma_generator', value: 1 }
          }
        }
      }, {
        conditions: [{ state: { self: [{ stack_ge: { tag: 'plasma_generator', value: 3 } }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 60000 }, per_lv_up: { milliPercentage: 3000 } } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            spd_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            damage_reduction: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ stack_ge: { tag: 'plasma_generator', value: 3 } }] } }],
        details: {
          self: {
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } },
            damage_reduction: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { defense_penetration: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ stack_ge: { tag: 'plasma_generator', value: 2 } }] } }],
        details: {
          self: {
            defense_penetration: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 1 } },
            ignore_barrier_dr: { term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'bioroid' }] } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }]
  },
  3: {
    no: 3,
    active: [{
      damage_deal: {
        base: { milliPercentage: 127000 },
        per_lv_up: { milliPercentage: 11000 }
      },
      range: 5,
      cost: 4,
      area: 'single',
      effects: [{
        conditions: [{ state: { target: [{ effected: 'immovable' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 53500 },
        per_lv_up: { milliPercentage: 4500 }
      },
      range: 5,
      cost: 4,
      area: 'single',
      effects: [{
        details: {
          target: {
            spd_down: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 1 } },
            marked: { term: { for_rounds: 2 } },
            immovable: { term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: { self: { ap_up: { base: { microValue: 4000000 }, per_lv_up: { microValue: 200000 } } } }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'attack' }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 3 }, max_stack: 1 },
            acc_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 }, max_stack: 1 },
            cri_up: { base: { milliPercentage:  5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 3 }, max_stack: 1 }
          }
        }
      }]
    }]
  },
  4: {
    no: 4,
    active: [{
      damage_deal: {
        base: { milliPercentage: 176000 },
        per_lv_up: { milliPercentage: 16000 }
      },
      range: 3,
      cost: 7,
      area: 'single',
      effects: [{
        details: {
          target: {
            marked: { term: { for_rounds: 2 } },
            acc_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 159500 },
        per_lv_up: { milliPercentage: 14500 }
      },
      range: 4,
      cost: 9,
      area: 'cross',
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{
          state: { target: [{ effected: 'marked' }, { effected: 'immovable' }] }
        }],
        details: { self: { additional_damage: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 } } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { self: [{ hp_greater_or_equal: 50 }] } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            merciless: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'attack' }],
        details: { self: { spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, max_stack: 3 } } }
      }, {
        conditions: [{ trigger: 'kill' }],
        details: { self: { refund_ap: { rate: 'rarely' } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: { self: { ignore_barrier_dr: { times: { 1: 2, 10: 3 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        details: { self: { anti_light_type: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'idle' }],
        details: { self: { ignore_barrier_dr: { times: { 1: 2, 10: 3 } } } }
      }]
    }]
  },
  5: {
    no: 5,
    active: [{
      damage_deal: {
        base: { milliPercentage: 117000 },
        per_lv_up: { milliPercentage: 10000 }
      },
      range: 4,
      cost: 4,
      area: 'single',
      effects: [{
        details: {
          target: {
            immovable: { term: { for_rounds: 2 } },
            spd_down: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ effected: 'immovable' }, { effected: 'eva_down' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 143500 },
        per_lv_up: { milliPercentage: 13000 },
        attribute: 'fire'
      },
      range: 3,
      cost: 6,
      area: 'single_and_front_strong_explosion',
      effects: [{
        conditions: [{ state: { target: [{ effected: 'immovable' }, { effected: 'eva_down' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 } } } }
      }]
    }],
    passive: [{
      area: 'line_adjacent',
      effects: [{
        conditions: [{ trigger: 'attack', state: { target: [{ unit: 'attacker' }, { unit: 'supporter' }] } }],
        details: { target: { follow_up_attack: { term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ trigger: 'attack', state: { self: [{ effected: 'follow_up_attack' }, { effected: 'target_protect' }] } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            acc_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'kill', state: { target: [{ unit: 'attacker' }, { unit: 'supporter' }] } }],
        details: { target: { ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 } } } }
      }]
    }, {
      area: 'front',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          target: {
            row_protect: { term: { for_rounds: 1 } },
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            follow_up_attack: { term: { for_rounds: 1 } }
          }
        }
      }]
    }]
  },
  6: {
    no: 6,
    active: [{
      damage_deal: {
        base: { milliPercentage: 140000 },
        per_lv_up: { milliPercentage: 7000 },
        attribute: 'electric'
      },
      range: 5,
      cost: 10,
      area: {
        1: 'circle_small_explosion',
        10: 'circle_small_explosion'
      },
      effects: [{
        details: {
          self: { ignore_protect: {} },
          target: {
            ice_resist_down: { tag: 'wet', base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 2 } },
            electric_resist_down: { tag: 'wet', base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 2 } },
            fire_resist_up: { tag: 'wet', base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: {
          target: {
            acc_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } },
            eva_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } },
          }
        }
      }, {
        conditions: [{ state: { target: [{ tagged: 'corrosion' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 70000 },
        per_lv_up: { milliPercentage: 3500 },
        attribute: 'ice',
      },
      range: 5,
      cost: 10,
      area: {
        1: 'cross',
        10: 'all'
      },
      effects: [{
        details: {
          self: {
            ignore_protect: {},
            additional_fire_damage: { milliPercentage: 100000 }
          },
          target: {
            def_down: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: { target: { effect_removal: { effect: 'damage_reduction' } } }
      }, {
        conditions: [{ state: { target: [{ tagged: 'corrosion' }] } }],
        details: { target: { fixed_damage: { base: { milliPercentage: 33000 }, per_lv_up: { milliPercentage: 3000 } } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { self: [{ effected: 'spd_up' }] } }],
        details: {
          self: {
            effect_removal: { effect: 'spd_up' },
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: {
        1: 'cross_adjacent',
        10: 'all_adjacent'
      },
      effects: [{
        conditions: [{ trigger: 'start_wave', state: { target: [{ unit: 'flying' }] } }],
        details: {
          target: {
            ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: 'infinite' },
            fire_resist_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: 'infinite' },
            ice_resist_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: 'infinite' },
            electric_resist_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: 'infinite' }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'attack' }],
        details: { self: { atk_up: { milliPercentage: 100000, rate: 'rate_up_by_level' } } }
      }, {
        conditions: [{ trigger: 'be_hit' }],
        details: { self: { minimize_damage: { rate: 'rate_up_by_level' } } }
      }]
    }]
  },
  7: {
    no: 7,
    active: [{
      damage_deal: {
        base: { milliPercentage: 131000 },
        per_lv_up: { milliPercentage: 11500 }
      },
      range: 3,
      cost: 6,
      area: 'single',
      effects: [{
        details: { target: { def_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 } } } }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 277000 },
        per_lv_up: { milliPercentage: 25000 }
      },
      range: 3,
      cost: 9,
      area: 'single',
      effects: [{
        conditions: [{ state: { target: [{ effected: 'def_down' }, { effected: 'damage_taken_increased' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 2000 } } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 12500 }, per_lv_up: { milliPercentage: 625 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ hp_less_or_equal: 50 }] } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 12500 }, per_lv_up: { milliPercentage: 625 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            damage_taken_increased: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: -2500 }, term: { for_rounds: 1 }, cannot_be_dispelled: true }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: { self: { ap_up: { base: { microValue: 2200000 }, per_lv_up: { microValue: 200000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'start_wave', state: { squad: { in_squad: 12 } } }],
        details: { self: { spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 1250 }, term: 'infinite' } } }
      }, {
        conditions: [{ trigger: 'start_wave', state: { squad: { in_squad: 16 } } }],
        details: { self: { spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 1250 }, term: 'infinite' } } }
      }, {
        conditions: [{ trigger: 'kill' }],
        details: { self: { spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 1250 }, term: 'infinite', max_stack: 1 } } }
      }]
    }]
  },
  8: {
    no: 8,
    active: [{
      damage_deal: {
        base: { milliPercentage: 80000 },
        per_lv_up: { milliPercentage: 4000 }
      },
      range: 3,
      cost: 5,
      area: 'single',
      effects: [{
        details: {
          target: {
            spd_down: { tag: 'corrosion', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 3 }, max_stack: 3 },
            def_down: { tag: 'corrosion', base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 }, max_stack: 3 },
            fixed_damage_over_time: { tag: 'corrosion', base: { value: 40 }, per_lv_up: { value: 30 }, term: { for_rounds: 3 }, max_stack: 3 }
          }
        }
      }, {
        conditions: [{ state: { target: [{ tagged: 'corrosion' }] } }],
        details: {
          target: {
            damage_over_time: { base: { milliPercentage: 33000 }, per_lv_up: { milliPercentage: 3000 } },
            damage_taken_increased: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 }, max_stack: 1 }
          }
        }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 50000 },
        per_lv_up: { milliPercentage: 2500 }
      },
      range: 3,
      cost: 8,
      area: {
        1: 'line',
        10: 'cross'
      },
      effects: [{
        details: {
          target: {
            spd_down: { tag: 'corrosion', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 3 }, max_stack: 3 },
            def_down: { tag: 'corrosion', base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 }, max_stack: 3 },
            fixed_damage_over_time: { tag: 'corrosion', base: { value: 40 }, per_lv_up: { value: 30 }, term: { for_rounds: 3 }, max_stack: 3 },
          }
        }
      }, {
        conditions: [{ state: { target: [{ tagged: 'corrosion' }] } }],
        details: {
          target: {
            damage_over_time: { base: { milliPercentage: 33000 }, per_lv_up: { milliPercentage: 3000 } },
            damage_taken_increased: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 }, max_stack: 1 }
          }
        }
      }]
    }],
    passive: [{
      area: {
        1: 'line',
        10: 'cross'
      },
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          target: {
            cri_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            range_up: { value: 1, term: { for_rounds: 1 }, enabledLv: 10 }
          }
        }
      }]
    }, {
      area: 'cross',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'bioroid' }] } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }]
  },
  9: {
    no: 9,
    active:[{
      damage_deal: {
        base: { milliPercentage: 80000 },
        per_lv_up: { milliPercentage: 4000 }
      },
      range: 3,
      cost: 5,
      area: 'single',
      effects: [{
        details: {
          target: {
            spd_down: { tag: 'corrosion', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 3 }, max_stack: 3 },
            def_down: { tag: 'corrosion', base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 }, max_stack: 3 },
            fixed_damage_over_time: { tag: 'corrosion', base: { value: 40 }, per_lv_up: { value: 30 }, term: { for_rounds: 3 }, max_stack: 3 }
          }
        }
      }, {
        conditions: [{ state: { target: [{ tagged: 'corrosion' }] } }],
        details: {
          target: {
            damage_over_time: { base: { milliPercentage: 33000 }, per_lv_up: { milliPercentage: 3000 } },
            damage_taken_increased: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 }, max_stack: 1 }
          }
        }
      }]
    }, {
      range: 2,
      cost: 6,
      area: {
        1: 'single_and_front',
        5: '2_x_2'
      },
      effects: [{
        details: {
          target: {
            all_debuff_removal: {},
            status_resist_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } },
            fire_resist_up: { tag: 'wet', base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 2 } },
            ice_resist_down: { tag: 'wet', base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 2 } },
            electric_resist_down: { tag: 'wet', base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }],
    passive: [{
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ effected_by: 9 }] } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 150000 }, term: 'immediate' }
          }
        }
      }]
    }]
  },
  10: {
    no: 10,
    active: [{
      damage_deal: {
        base: { milliPercentage: 164000 },
        per_lv_up: { milliPercentage: 14000 },
        attribute: 'ice'
      },
      range: 3,
      cost: 6,
      area: 'single',
      effects: [{
        conditions: [{ trigger: 'hit' }],
        details: {
          target: {
            immovable: { term: { for_rounds: 2 } },
            ice_resist_down: { base: { milliPercentage: 5500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            fixed_ice_damage_over_time: { base: { value: 550 }, per_lv_up: { value: 50 }, term: { for_rounds: 3 } }
          }
        }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 148000 },
        per_lv_up: { milliPercentage: 8000 },
        attribute: 'ice'
      },
      range: 6,
      cost: 9,
      area: 'all',
      effects: [{
        details: {
          self: {
            ignore_protect: {},
            spd_down: { tag: 'frost_storm', milliPercentage: 55000, term: { for_rounds: 2 }, cannot_be_dispelled: true }
          }
        }
      }, {
        conditions: [{ state: { target: [{ effected: 'ice_resist_down' }] } }],
        details: { self: { additional_ice_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            anti_heavy_type: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'row_toward_front',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          target: {
            anti_heavy_type: { base: { milliPercentage: 8250 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            fire_resist_up: { base: { milliPercentage: 13250 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'defender' }] } }],
        details: { target: { prevents_effect: { effect: 'fire_resist_down', term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { self: [{ tagged: 'frost_storm' }] } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 32000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 53000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
            damage_reduction: { base: { milliPercentage: 21000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            counterattack: { milliPercentage: 80000, term: { for_rounds: 1 } },
            range_up: { value: 2, term: { for_rounds: 1 } }
          }
        }
      }]
    }]
  },
  11: {
    no: 11,
    active: [{
      normal: {
        damage_deal: {
          base: { milliPercentage: 117000 },
          per_lv_up: { milliPercentage: 10000 },
          attribute: 'electric'
        },
        range: 3,
        cost: 4,
        area: 'single',
        effects: [{
          details: {
            target: {
              ap_down: { base: { microValue: 300000 }, per_lv_up: { microValue: 15000 }, term: 'immediate' },
              eva_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 3 } }
            }
          }
        }, {
          conditions: [{ state: { target: [{ tagged: 'wet' }] } }],
          details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
        }]
      },
      electric_emission: {
        damage_deal: {
          base: { milliPercentage: 156500 },
          per_lv_up: { milliPercentage: 14000 },
          attribute: 'electric'
        },
        range: 3,
        cost: 6,
        area: 'single',
        effects: [{
          details: {
            target: {
              ap_down: { base: { microValue: 300000 }, per_lv_up: { microValue: 15000 }, term: 'immediate' },
              eva_down: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 3 } }
            }
          }
        }, {
          conditions: [{ state: { target: [{ tagged: 'wet' }] } }],
          details: {
            self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } },
            target: { effect_removal: { effect: 'damage_reduction' } }
          }
        }]
      }
    }, {
      normal: {
        damage_deal: {
          base: { milliPercentage: 122500 },
          per_lv_up: { milliPercentage: 10500 },
          attribute: 'electric'
        },
        range: 5,
        cost: 6,
        area: 'row_toward_front',
        effects: [{
          details: {
            self: { ignore_protect: {} },
            target: {
              ap_down: { base: { microValue: 300000 }, per_lv_up: { microValue: 15000 }, term: 'immediate' },
              eva_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 3 } }
            }
          }
        }, {
          conditions: [{ trigger: 'critical' }],
          details: { self: { additional_damage: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 } } } }
        }]
      },
      electric_emission: {
        damage_deal: {
          base: { milliPercentage: 143500 },
          per_lv_up: { milliPercentage: 13000 },
          attribute: 'electric'
        },
        range: 5,
        cost: 9,
        area: {
          1: 'cross',
          10: 'all'
        },
        effects: [{
          details: {
            target: {
              ap_down: { base: { microValue: 300000 }, per_lv_up: { microValue: 15000 }, term: 'immediate' },
              eva_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 3 } }
            }
          }
        }, {
          conditions: [{ trigger: 'critical' }],
          details: { self: { additional_damage: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 } } } }
        }]
      }
    }],
    passive: [{
      normal: {
        area: 'self',
        effects: [{
          conditions: [{ trigger: 'kill' }],
          details: {
            self: {
              atk_up: { tag: 'electric_charge', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: 'infinite' },
              cri_up: { tag: 'electric_charge', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: 'infinite' },
              spd_up: { tag: 'electric_charge', base: { milliPercentage: 2500 }, per_lv_up: { milliPercentage: 125 }, term: 'infinite' }
            }
          }
        }, {
          conditions: [{ state: { self: [{ stack_ge: { tag: 'electric_charge', value: 2 } }] } }],
          details: { self: { form_change: { form: 'electric_emission' } } }
        }]
      },
      electric_emission: {
        area: 'self',
        effects: [{
          conditions: [{ trigger: 'start_round' }],
          details: {
            self: {
              atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
              cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
              spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } }
            }
          }
        }]
      }
    }, {
      area: 'all_adjacent',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { self: [{ form: 'normal' }] } }],
        details: {
          target: {
            eva_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 4000 }, per_lv_up: { milliPercentage: 200 }, term: { for_rounds: 1 } },
            electric_resist_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ form: 'electric_emission' }] } }],
        details: {
          target: {
            eva_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } },
            electric_resist_up: { base: { milliPercentage: 37500 }, per_lv_up: { milliPercentage: 1875 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: { target: { exp_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2250 }, term: 'infinite' } } }
      }, {
        conditions: [{ trigger: 'attack' }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 2 } },
            acc_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }]
  },
  12: {
    no: 12,
    active: [{
      damage_deal: {
        base: { milliPercentage: 137500 },
        per_lv_up: { milliPercentage: 12500 }
      },
      range: 4,
      cost: 5,
      area: 'single',
      effects: [{
        details: { target: { def_down: { base: { milliPercentage: 32000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 3 } } } }
      }, {
        conditions: [{ state: { target: [{ effected: 'def_down' }] } }],
        details: { target: { damage_taken_increased: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 2 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 170500 },
        per_lv_up: { milliPercentage: 15500 }
      },
      range: 3,
      cost: 7,
      area: 'fan_shape_without_front',
      effects: [{
        details: { target: { def_down: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ state: { target: [{ effected: 'def_down' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 34000 }, per_lv_up: { milliPercentage: 2000 } } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'hit' }],
        details: {
          self: {
            atk_up: { tag: 'sadistic_chef', base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            acc_up: { tag: 'sadistic_chef', base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } },
            cri_up: { tag: 'sadistic_chef', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            spd_up: { tag: 'sadistic_chef', base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        scale_factor: { num_of_units: 'ally' },
        details: { self: { atk_up: { base: { milliPercentage: 4500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'line_with_back',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: { type: 'light', role: 'attacker' } }] } }],
        details: {
          target: {
            follow_up_attack: {},
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ tagged: 'sadistic_chef' }], target: [{ unit: { type: 'light', role: 'attacker' } }] } }],
        details: {
          target: {
            atk_up: { tag: 'practice_begins', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            acc_up: { tag: 'practice_begins', base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            cri_up: { tag: 'practice_begins', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            enmity: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            merciless: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }]
  },
  13: {
    no: 13,
    active: [{
      damage_deal: {
        base: { milliPercentage: 127000 },
        per_lv_up: { milliPercentage: 11500 }
      },
      range: 3,
      cost: 7,
      area: 'single_and_front',
      effects: [{
        details: {
          self: { ignore_protect: {} },
          target: {
            provoked: { term: { for_rounds: 2 } },
            atk_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            acc_down: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ effected: 'marked' }, { effected: 'eva_down' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }]
    }, {
      range: 6,
      cost: 9,
      area: 'single',
      effects: [{
        details: {
          self: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 } },
            spd_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 } },
            barrier: { base: { value: 75 }, per_lv_up: { value: 75 }, term: { for_rounds: 3 } }
          },
          target: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 } },
            spd_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ unit: 'attacker' }, { unit: 'supporter' }] } }],
        details: { target: { target_protect: { term: { for_rounds: 3 } } } }
      }],
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            eva_up: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } },
            status_resist_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            damage_reduction: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            column_protect: { term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ effected: 'provoked' }] } }],
        details: {
          target: {
            marked: { term: { for_rounds: 1 } },
            eva_down: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 1 } },
            damage_taken_increased: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }]
  },
  14: {
    no: 14,
    active: [{
      damage_deal: {
        base: { milliPercentage: 110000 },
        per_lv_up: { milliPercentage: 10000 }
      },
      range: 2,
      cost: 4,
      area: 'single',
      effects: [{
        conditions: [{ trigger: 'hit' }],
        details: {
          target: {
            provoked: { term: { for_rounds: 2 } },
            atk_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            cri_down: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 2 } },
            spd_down: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }, {
      range: 6,
      cost: 6,
      area: 'single',
      effects: [{
        details: {
          target: {
            damage_reduction: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 3 } },
            barrier: { base: { value: 150 }, per_lv_up: { value: 50 }, term: { for_rounds: 3 } }
          },
          self: {
            damage_reduction: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 3 } },
            barrier: { base: { value: 150 }, per_lv_up: { value: 50 }, term: { for_rounds: 3 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ unit: 'attacker' }, { unit: 'supporter' }] } }],
        details: { target: { target_protect: { term: { for_rounds: 3 } } } }
      }]
    }],
    passive: [{
      area: 'cross_adjacent_without_front',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: { target: { silenced: { cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }]
  },
  15: {
    no: 15,
    active: [{
      damage_deal: {
        base: { milliPercentage: 107500 },
        per_lv_up: { milliPercentage: 9000 },
        attribute: 'fire'
      },
      range: 4,
      cost: 4,
      area: 'single',
      effects: [{
        details: {
          target: {
            fire_resist_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            fixed_fire_damage_over_time: { tag: 'ignite', base: { value: 40 }, per_lv_up: { value: 30 }, term: { for_rounds: 3 } }
          }
        }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 97500 },
        per_lv_up: { milliPercentage: 8500 },
        attribute: 'fire'
      },
      range: 3,
      cost: 6,
      area: {
        1: 'single_and_front',
        5: 'row_toward_front'
      },
      effects: [{
        details: {
          self: { ignore_protect: {} },
          target: {
            fire_resist_down: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 2 } },
            fixed_fire_damage_over_time: { tag: 'ignite', base: { value: 40 }, per_lv_up: { value: 30 }, term: { for_rounds: 3 } }
          }
        }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { atk_up: { tag: 'output_increase', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: 'infinite', max_stack: 3 } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ stack_ge: { tag: 'output_increase', value: 3 } }] } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 }, times: 1 },
            ignore_barrier_dr: { term: { for_rounds: 1 }, times: 1 }
          }
        }
      }]
    }]
  },
  16: {
    no: 16,
    active: [{
      damage_deal: {
        base: { milliPercentage: 187000 },
        per_lv_up: { milliPercentage: 17000 }
      },
      range: 3,
      cost: 4,
      area: 'single',
      effects: [{
        details: {
          target: {
            provoked: { term: { for_rounds: 2 } },
            atk_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            cri_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ effected: 'provoked' }] } }],
        details: { target: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } } }
      }]
    }, {
      range: 6,
      cost: 7,
      area: 'single',
      effects: [{
        details: {
          target: {
            target_protect: { term: { for_rounds: 3 } },
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, max_stack: 1 },
            acc_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, max_stack: 1 },
            nullify_damage: { times: 1, max_stack: 1 }
          },
          self: {
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, max_stack: 1 },
            acc_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, max_stack: 1 },
            nullify_damage: { times: 1, max_stack: 1 }
          }
        }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'be_hit' }],
        details: {
          self: {
            spd_up: { base: { milliPercentage: 6700 }, per_lv_up: { milliPercentage: 350 }, max_stack: 3 },
            damage_reduction: { tag: 'masochistic_nature', base: { milliPercentage: 13700 }, per_lv_up: { milliPercentage: 700 }, max_stack: 3 }
          }
        }
      }, {
        conditions: [{
          trigger: 'start_round',
          state: { self: [{ stack_ge: { tag: 'masochistic_nature', effect: 'damage_reduction', value: 3 } }] }
        }],
        details: {
          self: {
            status_resist_up: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 2000 } },
            battle_continuation: { value: 1, rate: { milliPercentage: 10000 } }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'be_attacked' }],
        details: { self: { counterattack: { base: { milliPercentage: 80000 }, per_lv_up: { milliPercentage: 5000 } } } }
      }, {
        conditions: [{ trigger: 'kill' }],
        details: {
          self: {
            atk_up: { tag: 'sadistic_nature', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: 'infinite' },
            cri_up: { tag: 'sadistic_nature', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: 'infinite' }
          }
        }
      }, {
        conditions: [{ trigger: 'ally_killed' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: 'infinite' },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: 'infinite' }
          }
        }
      }]
    }, {
      area: 'front_line_adjacent',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          target: {
            target_protect: { term: { for_rounds: 1 } },
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ tagged: 'sadistic_nature' }] } }],
        details: {
          target: {
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } },
            acc_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }]
  },
  17: {
    no: 17,
    active: [{
      damage_deal: {
        base: { milliPercentage: 117000 },
        per_lv_up: { milliPercentage: 10000 }
      },
      range: 3,
      cost: 4,
      area: 'single',
      effects: [{
        details: {
          target: {
            def_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            acc_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ effected: 'def_down' }] } }],
        details: { target: { damage_taken_increased: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } } } }
      }]
    }, {
      range: 6,
      cost: {
        1: 6,
        2: 5,
        7: 4
      },
      area: 'single',
      effects: [{
        details: {
          target: {
            ap_up: { base: { microValue: 500000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' },
            target_protect: { term: { for_rounds: 3 } },
            follow_up_attack: { term: { for_rounds: 3 } }
          }
        }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            eva_up: { base: { milliPercentage: 17500 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 1 } },
            damage_reduction: { base: { milliPercentage: 17500 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'be_attacked', state: { self: [{ hp_greater_than: 50 }] } }],
        effective: 'only_this_attack',
        details: {
          self: {
            eva_up: { base: { milliPercentage: 17500 }, per_lv_up: { milliPercentage: 2500 } },
            counterattack: { base: { milliPercentage: 80000 }, per_lv_up: { milliPercentage: 5000 } },
            damage_reduction: { base: { milliPercentage: 17500 }, per_lv_up: { milliPercentage: 1500 }, rate: { milliPercentage: 50000 } },
          }
        }
      }, {
        conditions: [{ trigger: 'be_attacked', state: { self: [{ hp_less_or_equal: 50 }] } }],
        effective: 'only_this_attack',
        details: {
          self: {
            eva_up: { base: { milliPercentage: 17500 }, per_lv_up: { milliPercentage: 2500 } },
            counterattack: { base: { milliPercentage: 100000 }, per_lv_up: { milliPercentage: 6250 } },
            damage_reduction: { base: { milliPercentage: 17500 }, per_lv_up: { milliPercentage: 1500 }, rate: { milliPercentage: 100000 } }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            merciless: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'cats_hand',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: {
          target: {
            ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 100000 } },
            follow_up_attack: {},
            target_protect: {}
          }
        }
      }, {
        conditions: [{ trigger: 'attack' }],
        details: { target: { ap_up: { base: { microValue: 200000 }, per_lv_up: { microValue: 50000 } } } }
      }]
    }]
  },
  18: {
    no: 18,
    active: [{
      damage_deal: {
        base: { milliPercentage: 136500 },
        per_lv_up: { milliPercentage: 12000 }
      },
      range: 2,
      cost: 6,
      area: 'single',
      effects: [{
        details: { target: { provoked: { term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ state: { target: [{ effected: 'marked' }, { effected: 'immovable' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } } }
      }]
    }, {
      range: 0,
      cost: 7,
      area: 'fixed_all',
      effects: [{
        details: { self: { damage_reduction: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 3 } } } }
      }, {
        conditions: [{ state: { target: [{ tagged: 'alert_mode' }] } }],
        details: {
          target: {
            ap_up:  { base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' },
            spd_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 3 } }
          }
        }
      }]
    }],
    passive: [{
      area: 'cross_adjacent_without_front',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { target: { target_protect: { tag: 'alert_mode', term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'use_any_active' }],
        details: {
          self: {
            spd_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 2 } },
            counterattack: { base: { milliPercentage: 80000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: { self: { battle_continuation: { tag: 'undying_will', base: { value: 100 }, per_lv_up: { value: 100 }, term: 'infinite', times: 1 } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        details: { self: { def_up: { base: { milliPercentage: 60000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ hp_less_or_equal: 33 }] } }],
        details: {
          self: {
            ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 100000 }, term: 'immediate' },
            all_debuff_removal: { term: 'immediate' }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ not_tagged: 'undying_will' }] } }],
        details: { self: { battle_continuation: { tag: 'undying_will', base: { value: 100 }, per_lv_up: { value: 100 }, term: 'infinite', times: 1, rate: { milliPercentage: 10000 } } } }
      }]
    }]
  },
  19: {
    no: 19,
    active: [{
      damage_deal: {
        base: { milliPercentage: 127000 },
        per_lv_up: { milliPercentage: 11000 }
      },
      range: 2,
      cost: 4,
      area: 'single',
      effects: [{
        details: {
          target: {
            provoked: { term: { for_rounds: 2 } },
            def_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            eva_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 236500 },
        per_lv_up: { milliPercentage: 21500 }
      },
      range: 3,
      cost: 10,
      area: 'single_and_front_middle_explosion',
      effects: [{
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }, {
        details: { self: { enmity: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: { self: { battle_continuation: { base: { value: 50 }, per_lv_up: { value: 50 }, term: 'infinite', times: 1 } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ effected: 'battle_continuation' }] } }],
        details: { self: { column_protect: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'kill' }],
        details: { self: { ap_up: { base: { microValue: 500000 }, per_lv_up: { microValue: 100000 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ equipped: 'lunch_box' }] } }],
        details: {
          self: {
            atk_up: { tag: 'yummy', milliPercentage: 5000, term: { for_rounds: 1 } },
            spd_up: { tag: 'yummy', milliPercentage: 5000, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            damage_reduction: { base: { milliPercentage: 22000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ hp_less_or_equal: 50 }] } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 8000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            damage_reduction: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'be_hit' }],
        details: {
          self: {
            ap_up: { base: { microValue: 40000 }, per_lv_up: { microValue: 40000 } },
            counterattack: { base: { milliPercentage: 80000 }, per_lv_up: { milliPercentage: 5000 } }
          }
        }
      }, {
        conditions: [{ trigger: 'revive' }],
        details: {
          self: {
            eva_up: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } },
            ignore_barrier_dr: { term: { for_rounds: 1 } },
            effect_removal: { effect: 'column_protect', term: 'immediate' }
          }
        }
      }]
    }]
  },
  21: {
    no: 21,
    active: [{
      damage_deal: {
        base: { milliPercentage: 105000 },
        per_lv_up: { milliPercentage: 9500 }
      },
      range: 3,
      cost: 4,
      area: 'single',
      effects: [{
        details: {
          target: {
            provoked: { term: { for_rounds: 2 } },
            atk_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            cri_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { self: [{ tagged: 'counterattack_initiation' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 97500 },
        per_lv_up: { milliPercentage: 8500 }
      },
      range: 4,
      cost: 10,
      area: {
        1: 'cross',
        5: 'cross_with_front_line',
        10: 'all'
      },
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ state: { self: [{ stack_ge: { tag: 'fire_net_building', value: 1 } }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } } }
      }, {
        conditions: [{ state: { self: [{ stack_ge: { tag: 'fire_net_building', value: 2 } }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } } }
      }, {
        conditions: [{ state: { self: [{ stack_ge: { tag: 'fire_net_building', value: 3 } }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { self: [{ in_front_line: {} }] } }],
        details: {
          self: {
            def_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
            damage_reduction: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ in_mid_line: {} }] } }],
        details: {
          self: {
            def_up: { base: { milliPercentage: 12500 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 1 } },
            damage_reduction: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ in_back_line: {} }] } }],
        details: {
          self: {
            def_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            damage_reduction: { base: { milliPercentage: 8000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'be_hit' }],
        details: { self: { atk_up: { tag: 'counterattack_initiation', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: 'infinite', max_stack: 5 } } }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'light' }] } }],
        details: {
          target: {
            anti_flying_type: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } },
            target_protect: { term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { target: { eva_down: { tag: 'fire_net_building', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: 'infinite', max_stack: 3 } } }
      }, {
        conditions: [{ trigger: 'hit', state: { target: [{ stack_ge: { tag: 'fire_net_building', value: 2 } }] } }],
        details: { target: { damage_taken_increased: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ trigger: 'hit', state: { target: [{ stack_ge: { tag: 'fire_net_building', value: 3 } }] } }],
        details: { target: { effect_removal: { effect: 'eva_up' } } }
      }]
    }]
  },
  22: {
    no: 22,
    active: [{
      damage_deal: {
        base: { milliPercentage: 210000 },
        per_lv_up: { milliPercentage: 18500 }
      },
      range: 5,
      cost: 8,
      area: 'single',
      effects: [{
        details: {
          self: { ignore_protect: {} },
          target: {
            push: { value: 1 },
            ap_down: { base: { microValue: 1500000 }, per_lv_up: { microValue: 75000 } },
          }
        }
      }, {
        conditions: [{ state: { target: [{ effected: 'marked' }, { effected: 'immovable' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 210000 },
        per_lv_up: { milliPercentage: 18500 },
        effective: 'next_round'
      },
      range: 5,
      cost: 10,
      area: 'cross_strong_explosion',
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ trigger: 'hit' }],
        details: {
          target: {
            ap_down: { base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 } },
            damage_taken_increased: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            effect_removal: { effect: 'counterattack' }
          }
        }
      }]
    }],
    passive: [{
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: {
          target: {
            acc_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1500 } },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 } }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { self: [{ in_mid_line: {} }, { in_back_line: {} }] } }],
        details: {
          self: {
            atk_up: { tag: 'rifled_mortar', base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } },
            acc_up: { tag: 'rifled_mortar', base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 } },
            defense_penetration: { tag: 'rifled_mortar', base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 3000 } }
          }
        }
      }, {
        conditions: [{ trigger: 'critical', state: { self: [{ tagged: 'rifled_mortar' }] } }],
        details: { target: { effect_removal: { effects: ['target_protect', 'column_protect'] } } }
      }]
    }]
  },
  23: {
    no: 23,
    active: [{
      damage_deal: {
        base: { milliPercentage: 117000 },
        per_lv_up: { milliPercentage: 10000 }
      },
      range: 4,
      cost: 4,
      area: 'single',
      effects: [{
        conditions: [{ state: { target: [{ effected: 'def_down' }, { effected: 'eva_down' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 109500 },
        per_lv_up: { milliPercentage: 9500 }
      },
      range: 4,
      cost: 7,
      area: 'line',
      effects: [{
        details: { self: { anti_flying_type: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 } } } }
      }, {
        conditions: [{ state: { target: [{ effected: 'def_down' }, { effected: 'eva_down' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 } } } }
      }]
    }],
    passive: [{
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_wave', state: { squad: { in_squad: 25 } } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: 'infinite' },
            acc_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: 'infinite' },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: 'infinite' }
          }
        }
      }, {
        conditions: [{ trigger: 'start_wave', state: { target: [{ tagged: 'charging_in_sir' }] } }],
        details: {
          target: {
            effect_removal: { tag: 'charging_in_sir', effect: 'damage_taken_increased' },
            follow_up_attack: { term: 'infinite' }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: {
          self: {
            atk_up: { tag: 'bullet_curtain_max', base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 300 }, term: { for_rounds: 2 } },
            spd_up: { tag: 'bullet_curtain_max', base: { milliPercentage: 3000 }, per_lv_up: { milliPercentage: 150 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_wave' }],
        details: {
          self: {
            atk_up: { tag: 'bullet_curtain_many', base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 600 }, term: { for_rounds: 3 } },
            spd_up: { tag: 'bullet_curtain_many', base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 300 }, term: { for_rounds: 3 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_wave' }],
        details: {
          self: {
            atk_up: { tag: 'bullet_curtain_usual', base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 300 }, term: { for_rounds: 1 } },
            spd_up: { tag: 'bullet_curtain_usual', base: { milliPercentage: 3000 }, per_lv_up: { milliPercentage: 150 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'critical', state: { self: [{ tagged: 'bullet_curtain_max' }] } }],
        details: { target: { effect_removal: { effect: 'damage_reduction' } } }
      }, {
        conditions: [{ trigger: 'critical', state: { self: [{ tagged: 'bullet_curtain_many' }] } }],
        details: { target: { effect_removal: { effect: 'eva_up' } } }
      }]
    }]
  },
  24: {
    no: 24,
    active: [{
      damage_deal: {
        base: { milliPercentage: 164000 },
        per_lv_up: { milliPercentage: 14500 }
      },
      range: 3,
      cost: 7,
      area: 'single',
      effects: [{
        details: { self: { defense_penetration: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 4000 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 127000 },
        per_lv_up: { milliPercentage: 11000 }
      },
      range: 3,
      cost: 6,
      area: 'single_and_front_strong_explosion',
      effects: [{
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_fire_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        details: { self: { anti_heavy_type: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ in_front_line: {} }] } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            acc_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            atk_up: { base: { milliPercentage: 5500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 5500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        scale_factor: { num_of_units: 'steel_line' },
        details: {
          self: {
            atk_up: { base: { milliPercentage: 5500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 5500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }]
  },
  25: {
    no: 25,
    active: [{
      damage_deal: {
        base: { milliPercentage: 107500 },
        per_lv_up: { milliPercentage: 9000 }
      },
      range: 3,
      cost: 4,
      area: 'single',
      effects: [{
        details: {
          target: {
            eva_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } },
            acc_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 182500 },
        per_lv_up: { milliPercentage: 16000 }
      },
      range: 4,
      cost: 6,
      area: 'single',
      effects: [{
        conditions: [{ state: { target: [{ effected: 'def_down' }, { effected: 'eva_down' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }]
    }],
    passive: [{
      area: 'fixed_front_line',
      effects: [{
        conditions: [{ trigger: 'start_wave', state: { self: [{ in_front_line: {} }] } }],
        details: {
          target: {
            ap_up: { base: { microValue: 500000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' },
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: 'infinite' },
            cri_up: { base: { milliPercentage: 7500 }, per_lv_up: { milliPercentage: 500 }, term: 'infinite' },
            damage_taken_increased: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: -1500 }, term: 'infinite' }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { self: [{ effected: 'follow_up_attack' }, { effected: 'target_protect' }] } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ effected: 'follow_up_attack', effected_by: 23 }] } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 7500 }, per_lv_up: { milliPercentage: 375 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 2500 }, per_lv_up: { milliPercentage: 125 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }]
  },
  26: {
    no: 26,
    active: [{
      damage_deal: {
        base: { milliPercentage: 100000 },
        per_lv_up: { milliPercentage: 5000 }
      },
      range: 3,
      cost: 4,
      area: 'single',
      effects: [{
        details: {
          target: {
            immovable: { term: { for_rounds: 2 } },
            eva_up: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 13000 }, per_lv_up: { milliPercentage: 1750 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }, {
      range: 6,
      cost: 7,
      area: 'single',
      effects: [{
        details: {
          target: {
            ap_up: { base: { microValue: 4000000 }, per_lv_up: { microValue: 200000 }, term: 'immediate' },
            all_debuff_removal: { term: 'immediate' }
          }
        }
      }, {
        conditions: [{ state: { target: [{ unit: 'attacker' }] } }],
        details: { target: { atk_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ state: { target: [{ unit: 'defender' }] } }],
        details: { target: { def_up: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ state: { target: [{ unit: 'supporter' }] } }],
        details: { target: { ap_up: { base: { microValue: 2000000 }, per_lv_up: { microValue: 100000 }, term: 'immediate' } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'be_attacked' }],
        effective: 'only_this_attack',
        details: {
          self: {
            def_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 3000 } },
            damage_reduction: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 2000 } }
          }
        }
      }]
    }, {
      area: 'backward',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'light' }, { unit: 'heavy' }] } }],
        details: {
          target: {
            eva_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            damage_reduction: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            acc_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }]
  },
  27: {
    no: 27,
    active: [{
      damage_deal: {
        base: { milliPercentage: 166500 },
        per_lv_up: { milliPercentage: 15000 }
      },
      range: 4,
      cost: 7,
      area: 'single',
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ state: { target: [{ effected: 'marked' }, { effected: 'immovable' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 143500 },
        per_lv_up: { milliPercentage: 13000 }
      },
      range: 3,
      cost: 9,
      area: '2_x_2',
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ state: { target: [{ effected: 'immovable' }, { effected: 'eva_down' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }]
    }],
    passive: [{
      area: 'front_line_adjacent',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { self: [{ effected: 'target_protect' }] } }],
        details: { self: { ap_up: { base: { microValue: 50000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'attack', state: { target: [{ unit: 'light' }] } }],
        details: { target: { follow_up_attack: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'attack', state: { target: [{ unit: 'heavy' }] } }],
        details: { target: { follow_up_attack: { term: { for_rounds: 2 } } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            acc_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 4000 }, term: { for_rounds: 1 } },
            range_up: { value: 1, term: { for_rounds: 1 }, enabledLv: 10 }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ effected: 'follow_up_attack' }] } }],
        details: { self: { atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } } } }
      }]
    }]
  },
  28: {
    no: 28,
    active: [{
      damage_deal: {
        base: { milliPercentage: 97500 },
        per_lv_up: { milliPercentage: 8500 }
      },
      range: 4,
      cost: 4,
      area: 'single',
      effects: [{
        details: {
          target: {
            marked: { term: { for_rounds: 2 } },
            eva_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }, {
      range: 6,
      cost: 6,
      area: 'single',
      effects: [{
        details: { target: { deploy_defensive_wall: { times: 1 } } }
      }]
    }],
    passive: [{
      area: 'all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { damage_reduction: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{
          trigger: 'start_round',
          state: { target: [{ effected_by: 23, unit: 'attacker' }, { effected_by: 23, unit: 'supporter' }, { effected_by: 25, unit: 'attacker' }, { effected_by: 25, unit: 'supporter' }] }
        }],
        details: { target: { target_protect: { term: { for_rounds: 1 } } } }
      }]
    }]
  },
  29: {
    no: 29,
    active: [{
      damage_deal: {
        base: { milliPercentage: 141500 },
        per_lv_up: { milliPercentage: 12500 }
      },
      range: 3,
      cost: 6,
      area: 'single',
      effects: [{
        details: {
          target: {
            atk_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            cri_down: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ effected: 'def_down' }, { effected: 'eva_down' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 143500 },
        per_lv_up: { milliPercentage: 13000 },
        attribute: 'fire'
      },
      range: 4,
      cost: 8,
      area: 'line',
      effects: [{
        details: { target: { fixed_fire_damage_over_time: { tag: 'ignite', base: { value: 40 }, per_lv_up: { value: 30 }, term: { for_rounds: 3 } } } }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_damage: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 } } } }
      }]
    }],
    passive: [{
      area: 'front_line_adjacent',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } },
            status_resist_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'idle', state: { target: [{ hp_greater_or_equal: 25 }] } }],
        details: {
          target: {
            ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 } },
            fixed_damage_over_time: { base: { value: 30 }, per_lv_up: { value: 30 } }
          }
        }
      }, {
        conditions: [{ trigger: 'be_killed' }],
        details: { target: { ap_up: { base: { microValue: 2000000 }, per_lv_up: { microValue: 100000 } } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { self: [{ in_front_line: {} }, { in_mid_line: {} }] } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 24000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
            damage_reduction: { base: { milliPercentage: 18000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ in_back_line: {} }] } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 7500 }, per_lv_up: { milliPercentage: 375 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            damage_reduction: { base: { milliPercentage: 9000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_wave', state: { squad: { in_squad: 25 } } }],
        details: { self: { spd_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: 'infinite' } } }
      }]
    }]
  },
  31: {
    no: 31,
    active: [{
      damage_deal: {
        base: { milliPercentage: 100000 },
        per_lv_up: { milliPercentage: 5000 }
      },
      range: 4,
      cost: 4,
      area: 'single',
      effects: [{
        details: {
          target: {
            marked: { term: { for_rounds: 2 } },
            eva_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }, {
      range: 6,
      cost: {
        1: 10,
        2: 9,
        7: 8
      },
      area: 'single',
      effects: [{
        details: {
          target: {
            set_ap: { base: { microValue: 10000000 }, per_lv_up: { microValue: 250000 }, term: 'immediate' },
            all_debuff_removal: {}
          }
        }
      }, {
        details: {
          target: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 2 } },
            acc_up: { base: { milliPercentage: 24000 }, per_lv_up: { milliPercentage: 1200 }, term: { for_rounds: 2 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        details: {
          target: {
            damage_reduction: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            def_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 2 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }],
    passive: [{
      attack_command: {
        area: 'all_adjacent_without_front_line',
        effects: [{
          conditions: [{ trigger: 'start_round' }],
          details: {
            target: {
              atk_up: { tag: 'attack_command', base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
              acc_up: { tag: 'attack_command', base: { milliPercentage: 24000 }, per_lv_up: { milliPercentage: 1200 }, term: { for_rounds: 1 } },
              spd_up: { tag: 'attack_command', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } }
            }
          }
        }, {
          conditions: [{ trigger: 'start_round', state: { self: [{ equipped: 'combat_observation_frame' }] } }],
          details: {
            target: {
              atk_up: { tag: 'attack_command', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } },
              acc_up: { tag: 'attack_command', base: { milliPercentage: 8000 }, per_lv_up: { milliPercentage: 400 }, term: { for_rounds: 1 } },
              spd_up: { tag: 'attack_command', base: { milliPercentage: 1666 }, per_lv_up: { milliPercentage: 83 }, term: { for_rounds: 1 } }
            }
          }
        }]
      },
      defense_command: {
        area: 'all_adjacent_without_back_line',
        effects: [{
          conditions: [{ trigger: 'start_round' }],
          details: {
            target: {
              damage_reduction: { tag: 'defense_command', base: { milliPercentage: 3333 }, per_lv_up: { milliPercentage: 166 }, term: { for_rounds: 1 } },
              def_up: { tag: 'defense_command', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } },
              spd_up: { tag: 'defense_command', base: { milliPercentage: 1666 }, per_lv_up: { milliPercentage: 83 }, term: { for_rounds: 1 } }
            }
          }
        }, {
          conditions: [{ trigger: 'start_round', state: { self: [{ equipped: 'combat_observation_frame' }] } }],
          details: {
            target: {
              damage_reduction: { tag: 'defense_command', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
              def_up: { tag: 'defense_command', base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
              spd_up: { tag: 'defense_command', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } }
            }
          }
        }]
      }
    }, {
      attack_command: {
        area: 'all_adjacent_without_back_line',
        effects: [{
          conditions: [{ trigger: 'start_round' }],
          details: {
            target: {
              damage_reduction: { tag: 'attack_command_defence', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } },
              def_up: { tag: 'attack_command_defence', base: { milliPercentage: 7500 }, per_lv_up: { milliPercentage: 375 }, term: { for_rounds: 1 } },
              spd_up: { tag: 'attack_command_defence', base: { milliPercentage: 2500 }, per_lv_up: { milliPercentage: 125 }, term: { for_rounds: 1 } }
            }
          }
        }, {
          conditions: [{ trigger: 'idle' }],
          details: { self: { form_change: { form: 'defense_command' } } }
        }]
      },
      defense_command: {
        area: 'all_adjacent_without_front_line',
        effects: [{
          conditions: [{ trigger: 'start_round' }],
          details: {
            target: {
              atk_up: { tag: 'defense_command_attack', base: { milliPercentage: 7500 }, per_lv_up: { milliPercentage: 375 }, term: { for_rounds: 1 } },
              acc_up: { tag: 'defense_command_attack', base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 600 }, term: { for_rounds: 1 } },
              spd_up: { tag: 'defense_command_attack', base: { milliPercentage: 2500 }, per_lv_up: { milliPercentage: 125 }, term: { for_rounds: 1 } }
            }
          }
        }, {
          conditions: [{ trigger: 'idle' }],
          details: { self: { form_change: { form: 'attack_command' } } }
        }]
      }
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { spd_up: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 300 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'end_wave' }],
        details: { self: { reconnaissance: {} } }
      }, {
        conditions: [{ trigger: 'start_wave', state: { self: [{ effected: 'reconnaissance' }], target: [{ unit: 'attacker' }] } }],
        details: { target: { ap_up: { base: { microValue: 180000 }, per_lv_up: { microValue: 120000 } } } }
      }]
    }]
  },
  32: {
    no: 32,
    active: [{
      damage_deal: {
        base: { milliPercentage: 101500 },
        per_lv_up: { milliPercentage: 9000 }
      },
      range: 4,
      cost: 4,
      area: 'single',
      effects: [{
        conditions: [{ state: { target: [{ effected: 'marked' }, { effected: 'eva_down' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 165000 },
        per_lv_up: { milliPercentage: 15000 }
      },
      range: 4,
      cost: 7,
      area: 'single',
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } } }
      }, {
        conditions: [{ state: { self: [{ in_front_line: {} }] } }],
        details: { self: { ignore_barrier_dr: {} } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { self: [{ in_front_line: {} }] } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ in_mid_line: {} }] } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ in_back_line: {} }] } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 12500 }, per_lv_up: { milliPercentage: 625 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 7500 }, per_lv_up: { milliPercentage: 375 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'attack' }],
        details: { self: { eva_up: { tag: 'camouflage', base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 2 }, max_stack: 1 } } }
      }, {
        conditions: [{ trigger: 'be_attacked', state: { self: [{ tagged: 'camouflage' }] } }],
        details: {
          self: {
            damage_reduction: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 } },
            counterattack: { base: { milliPercentage: 80000 }, per_lv_up: { milliPercentage: 5000 } }
          }
        }
      }, {
        conditions: [{ trigger: 'kill', state: { self: [{ tagged: 'camouflage' }] } }],
        details: { self: { effect_removal: { effect: 'eva_down' } } }
      }]
    }, {
      area: 'line_with_backward',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { tag_stack: { tag: 'awakening', term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: { type: 'light', role: 'supporter' } }] } }],
        details: { target: { follow_up_attack: { term: { for_rounds: 1 } } } }
      }, {
        // TODO: investigation required target light supporter of sisters_of_valhalla
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'sisters_of_valhalla' }] } }],
        details: { target: { follow_up_attack: { term: { for_rounds: 1 }, enabledLv: 10 } } }
      }, {
        conditions: [{ trigger: 'attack', state: { self: [{ tagged: 'awakening' }] } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 23000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 2 }, max_stack: 1 },
            defense_penetration: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 2 }, max_stack: 1 }
          }
        }
      }]
    }]
  },
  33: {
    no: 33,
    active: [{
      damage_deal: {
        base: { milliPercentage: 117000 },
        per_lv_up: { milliPercentage: 10000 }
      },
      range: 4,
      cost: 4,
      area: 'single',
      effects: [{
        conditions: [{ state: { target: [{ effected: 'def_down' }, { effected: 'eva_down' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 109500 },
        per_lv_up: { milliPercentage: 9500 }
      },
      range: 4,
      cost: 7,
      area: 'line',
      effects: [{
        details: { self: { anti_light_type: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 } } } }
      }, {
        conditions: [{ state: { target: [{ effected: 'marked' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 } } } }
      }]
    }],
    passive: [{
      area: 'front',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: {
          target: {
            follow_up_attack: { tag: 'fire_support', term: 'infinite' },
            ap_up: { tag: 'fire_support', base: { microValue: 1500000 }, per_lv_up: { microValue: 100000 }, term: 'immediate' }
          }
        }
      }]
    }, {
      area: 'single_and_front',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ tagged: 'fire_support', unit: 'light' }, { tagged: 'fire_support', unit: 'heavy' }] } }],
        details: {
          target: {
            eva_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            damage_reduction: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            counterattack: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 4000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }]
  },
  34: {
    no: 34,
    active: [{
      damage_deal: {
        base: { milliPercentage: 100000 },
        per_lv_up: { milliPercentage: 5000 }
      },
      range: 3,
      cost: 4,
      area: 'single',
      effects: [{
        details: {
          target: {
            marked: { term: { for_rounds: 2 } },
            eva_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }, {
      range: 2,
      cost: {
        1: 6,
        2: 5
      },
      area: 'single',
      effects: [{
        details: { target: { amg_11_construction: { times: { 1: 1, 5: 2 } } } }
      }]
    }],
    passive: [{
      area: {
        1: 'line_adjacent',
        10: 'cross_adjacent'
      },
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            range_down: { value: 1, term: { for_rounds: 1 }, cannot_be_dispelled: true }
          }
        }
      }]
    }]
  },
  35: {
    no: 35,
    active: [{
      damage_deal: {
        base: { milliPercentage: 120000 },
        per_lv_up: { milliPercentage: 6000 }
      },
      range: 3,
      cost: 5,
      area: 'single',
      effects: [{
        details: {
          target: {
            atk_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            cri_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            provoked: { term: { for_rounds: 2 } }
          }
        }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 160000 },
        per_lv_up: { milliPercentage: 8000 }
      },
      range: 3,
      cost: 8,
      area: 'single',
      effects: [{
        details: {
          self: {
            anti_heavy_type: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } },
            defense_penetration: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 4000 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ effected: 'provoked' }, { effected: 'def_down' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }]
    }],
    passive: [{
      area: 'line_with_backward',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { def_up: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'attack' }],
        details: { self: { damage_reduction: { base: { milliPercentage: 22000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 3 }, max_stack: 1 } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'light' }, { unit: 'heavy' }] } }],
        details: {
          target: {
            target_protect: { term: { for_rounds: 1 } },
            ap_up: { base: { microValue: 300000 }, per_lv_up: { microValue: 100000 }, term: 'immediate' }
          }
        }
      }]
    }]
  },
  36: {
    no: 36,
    active: [{
      damage_deal: {
        base: { milliPercentage: 120000 },
        per_lv_up: { milliPercentage: 6000 }
      },
      range: 4,
      cost: 5,
      area: 'single',
      effects: [{
        details: {
          target: {
            marked: { term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 18000 }, per_lv_up: { milliPercentage: 900 }, term: { for_rounds: 2 } },
            eva_down: { base: { milliPercentage: 36000 }, per_lv_up: { milliPercentage: 1800 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }, {
      range: 6,
      cost: 7,
      area: 'single',
      effects: [{
        details: {
          target: {
            ap_up: { base: { microValue: 1500000 }, per_lv_up: { microValue: 100000 }, term: 'immediate' },
            range_up: { value: 1, term: { for_rounds: 2 } },
          }
        }
      }, {
        conditions: [{ state: { target: [{ unit: 'defender' }, { unit: 'supporter' }] } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 600 }, term: { for_rounds: 2 } },
            acc_up: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ unit: 'attacker' }] } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 18000 }, per_lv_up: { milliPercentage: 900 }, term: { for_rounds: 2 } },
            acc_up: { base: { milliPercentage: 60000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 2 } },
            cri_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }],
    passive: [{
      area: {
        1: 'line_adjacent',
        10: 'cross_adjacent_without_back'
      },
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ hp_less_or_equal: 90 }] } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            def_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            follow_up_attack: { term: { for_rounds: 1 } }
          }
        }
      }]
    }]
  },
  37: {
    no: 37,
    active: [{
      damage_deal: {
        base: { milliPercentage: 105000 },
        per_lv_up: { milliPercentage: 9500 }
      },
      range: 3,
      cost: 4,
      area: 'single',
      effects: [{
        details: {
          target: {
            provoked: { term: { for_rounds: 2 } },
            atk_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            cri_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            spd_down: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }, {
      range: 0,
      cost: 8,
      area: {
        1: 'line',
        10: 'cross'
      },
      effects: [{
        details: {
          self: {
            eva_up: { base: { milliPercentage: 12500 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 3 } },
            damage_reduction: { base: { milliPercentage: 7500 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 3 } }
          },
          target: {
            eva_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 3 } },
            damage_reduction: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 3 } },
            range_down: { value: 1, term: { for_rounds: 3 } },
          }
        }
      }]
    }],
    passive: [{
      area: 'line_with_back_line',
      effects: [{
        conditions: [{ trigger: 'start_wave', state: { target: [{ unit: { type: 'light', role: 'attacker' } }, { unit: { type: 'light', role: 'supporter' } }] } }],
        details: { target: { ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            def_up: { base: { milliPercentage: 45000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
            ice_resist_up: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: { type: 'light', role: 'attacker' } }, { unit: { type: 'light', role: 'supporter' } }] } }],
        details: { target: { target_protect: { term: { for_rounds: 1 } } } }
      }]
    }]
  },
  41: {
    no: 41,
    active: [{
      damage_deal: {
        base: { milliPercentage: 127000 },
        per_lv_up: { milliPercentage: 11000 }
      },
      range: 3,
      cost: 4,
      area: 'single',
      effects: [{
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }, {
        conditions: [{ state: { squad: { in_squad: 42 } } }],
        details: { self: { cooperative_attack: { unit: 42, active: 2 } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 240000 },
        per_lv_up: { milliPercentage: 21500 }
      },
      range: 3,
      cost: 8,
      area: 'single',
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_damage: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 2000 } } } }
      }, {
        conditions: [{ state: { squad: { in_squad: 42 } } }],
        details: { self: { cooperative_attack: { unit: 42, active: 2 } } }
      }]
    }],
    passive: [{
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_wave', state: { self: [{ in_front_line: {} }] } }],
        details: { self: { ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 } } } }
      }, {
        conditions: [{ trigger: 'start_wave', state: { self: [{ in_front_line: {} }], target: [{ unit: 'light' }] } }],
        details: { target: { ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 } } } }
      }, {
        conditions: [{ trigger: 'start_wave', state: { target: [{ unit: 'anger_of_horde' }] } }],
        details: { target: { tag_stack: { tag: 'charging_order', term: 'infinite' } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ in_front_line: {} }], target: [{ unit: 'light' }] } }],
        details: {
          target: {
            acc_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ in_front_line: {} }], target: [{ unit: 'heavy' }, { unit: 'flying' }] } }],
        details: {
          target: {
            acc_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: { alias: 'anger_of_horde', except: 41 } }] } }],
        details: { target: { atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            eva_up: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 4000 }, term: { for_rounds: 1 } },
            anti_light_type: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            anti_heavy_type: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'hit' }],
        details: { target: { marked: { tag: 'seize_opportunity', term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ unit: { alias: 'anger_of_horde', except: 41 } }], target: [{ tagged: 'seize_opportunity' }] } }],
        details: { self: { additional_damage: { milliPercentage: 20000 } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 8000 }, per_lv_up: { milliPercentage: 400 }, term: 'infinite', max_stack: 3 },
            spd_up: { base: { milliPercentage: 4000 }, per_lv_up: { milliPercentage: 200 }, term: 'infinite', max_stack: 3 }
          }
        }
      }, {
        conditions: [{ trigger: 'kill' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 8000 }, per_lv_up: { milliPercentage: 400 }, term: { for_rounds: 2 } },
            spd_up: { base: { milliPercentage: 4000 }, per_lv_up: { milliPercentage: 200 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }]
  },
  42: {
    no: 42,
    active: [{
      damage_deal: {
        base: { milliPercentage: 127000 },
        per_lv_up: { milliPercentage: 11000 }
      },
      range: 3,
      cost: 4,
      area: 'single',
      effects: [{
        conditions: [{ state: { target: [{ effected: 'def_down' }, { effected: 'eva_down' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 241500 },
        per_lv_up: { milliPercentage: 21500 }
      },
      range: 4,
      cost: 8,
      area: 'single',
      effects: [{
        details: {
          self: {
            anti_heavy_type: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 } },
            defense_penetration: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 4000 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ effected: 'marked' }, { effected: 'immovable' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } } }
      }]
    }],
    passive: [{
      area: 'line_adjacent',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'light' }, { unit: 'heavy' }] } }],
        details: { target: { follow_up_attack: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_wave', state: { target: [{ unit: 'light' }, { unit: 'heavy' }] } }],
        details: { target: { ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 } } } }
      }]
    }, {
      area: 'all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            damage_reduction: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        scale_factor: { num_of_units: 'anger_of_horde' },
        details: { self: { spd_up: { base: { milliPercentage: 4000 }, per_lv_up: { milliPercentage: 200 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'anger_of_horde' }] } }],
        details: { target: { follow_up_attack: { term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'line_with_back',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'light' }] } }],
        details: { target: { atk_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: { alias: 'anger_of_horde', type: 'light' } }] } }],
        details: { target: { atk_up: { base: { milliPercentage: 5500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: { alias: 'anger_of_horde', type: 'flying' } }] } }],
        details: { target: { atk_up: { base: { milliPercentage: 16500 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ tagged: 'charging_order', unit: 'anger_of_horde' }] } }],
        details: { target: { ignore_barrier_dr: { term: { for_rounds: 1 } } } }
      }]
    }]
  },
  43: {
    no: 43,
    active: [{
      damage_deal: {
        base: { milliPercentage: 127000 },
        per_lv_up: { milliPercentage: 11000 }
      },
      range: 3,
      cost: 4,
      area: 'single',
      effects: [{
        conditions: [{ state: { target: [{ effected: 'def_down' }, { effected: 'eva_down' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }, {
        conditions: [{ trigger: 'hit', state: { squad: { in_squad: 42 } } }],
        details: { self: { cooperative_attack: { unit: 42, active: 2 } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 241500 },
        per_lv_up: { milliPercentage: 21500 }
      },
      range: 2,
      cost: 7,
      area: 'single',
      effects: [{
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_damage: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 2000 } } } }
      }, {
        conditions: [{ trigger: 'hit', state: { squad: { in_squad: 42 } } }],
        details: { self: { cooperative_attack: { unit: 42, active: 2 } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'kill' }],
        details: { self: { atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: 'infinite', max_stack: 2 } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ effected: 'follow_up_attack' }] } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { self: [{ in_front_line: {} }] } }],
        details: {
          self: {
            acc_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 6000 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            additional_damage: { base: { milliPercentage: 2000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ in_mid_line: {} }] } }],
        details: {
          self: {
            acc_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 22500 }, per_lv_up: { milliPercentage: 4500 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ in_back_line: {} }] } }],
        details: {
          self: {
            acc_up: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }]
  },
  44: {
    no: 44,
    active: [{
      damage_deal: {
        base: { milliPercentage: 122500 },
        per_lv_up: { milliPercentage: 10500 }
      },
      range: 3,
      cost: 5,
      area: 'single',
      effects: [{
        details: {
          target: {
            marked: { term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ effected: 'def_down' }, { effected: 'eva_down' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 } } } }
      }, {
        conditions: [{ trigger: 'hit', state: { squad: { in_squad: 42 } } }],
        details: { self: { cooperative_attack: { unit: 42, active: 2 } } }
      }]
    }, {
      damage_deal: {
        milliPercentage: 5000
      },
      range: 4,
      cost: 9,
      area: {
        1: 'cross',
        10: 'all'
      },
      effects: [{
        details: {
          target: {
            ignore_protect: {},
            acc_down: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 2 } },
            eva_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } },
            cri_down: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            range_down: { value: 1, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'use_this_active' }],
        details: { self: { acc_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 30000 } } } }
      }]
    }],
    passive: [{
      area: 'fixed_front_line',
      effects: [{
        conditions: [{ trigger: 'start_wave', state: { target: [{ unit: 'light' }, { unit: 'heavy' }] } }],
        details: { target: { ap_up: { base: { microValue: 800000 }, per_lv_up: { microValue: 40000 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ effected: 'reconnaissance' }], target: [{ unit: 'light' }, { unit: 'heavy' }] } }],
        details: { self: { ap_up: { base: { microValue: 400000 }, per_lv_up: { microValue: 20000 } } } }
      }]
    }, {
      area: 'front_line_adjacent',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'light' }, { unit: 'heavy' }] } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ in_front_line: {} }] } }],
        details: { self: { eva_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ in_mid_line: {} }] } }],
        details: { self: { eva_up: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 4000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ in_back_line: {} }] } }],
        details: { self: { eva_up: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'end_wave' }],
        details: { self: { reconnaissance: {} } }
      }]
    }]
  },
  51: {
    no: 51,
    active: [{
      damage_deal: {
        base: { milliPercentage: 127000 },
        per_lv_up: { milliPercentage: 11500 }
      },
      range: 5,
      cost: 9,
      area: 'row_toward_front',
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ state: { target: [{ effected: 'marked' }, { effected: 'immovable' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 232500 },
        per_lv_up: { milliPercentage: 20500 },
        effective: 'next_round'
      },
      range: 6,
      cost: 10,
      area: 'all_strong_explosion',
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ state: { target: [{ effected: 'marked' }, { effected: 'immovable' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } } }
      }, {
        conditions: [{ trigger: 'hit' }],
        details: {
          target: {
            fixed_fire_damage_over_time: { base: { value: 40 }, per_lv_up: { value: 30 }, term: { for_rounds: 3 } },
            effect_removal: { effect: 'counterattack', term: 'immediate' }
          }
        }
      }]
    }],
    passive: [{
      area: {
        1: 'all',
        10: 'fixed_all'
      },
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'flying' }] } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { defense_penetration: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 4000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'kill' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 4000 }, per_lv_up: { milliPercentage: 250 }, term: 'infinite' },
            spd_up: { base: { milliPercentage: 2000 }, per_lv_up: { milliPercentage: 100 }, term: 'infinite' }
          }
        }
      }],
    }, {
      area: 'all_adjacent',
      effects: [{
        // TODO: investigation required for fixed_damage rate
        conditions: [{ trigger: 'be_killed' }],
        details: { target: { fixed_damage: { base: { milliPercentage: 500000 }, per_lv_up: { milliPercentage: 25000 }, rate: { base: { milliPercentage: 95000 }, per_lv_up: { milliPercentage: -5000 } } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ hp_less_or_equal: 50 }] } }],
        details: { target: { spd_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ hp_less_or_equal: 25 }] } }],
        details: { target: { ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' } } }
      }]
    }]
  },
  52: {
    no: 52,
    active: [{
      damage_deal: {
        base: { milliPercentage: 131500 },
        per_lv_up: { milliPercentage: 11500 }
      },
      range: 3,
      cost: 6,
      area: 'single',
      effects: [{
        details: {
          self: {
            anti_light_type: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } },
            anti_heavy_type: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } },
            defense_penetration: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 4000 } }
          }
        }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 127000 },
        per_lv_up: { milliPercentage: 11500 }
      },
      range: 4,
      cost: 9,
      area: 'row_toward_front',
      effects: [{
        details: {
          self: {
            ignore_protect: {},
            defense_penetration: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 4000 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ effected: 'marked' }, { effected: 'immovable' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { self: [{ in_back_line: {} }] } }],
        details: {
          self:{
            acc_up: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 4000 }, term: { for_rounds: 1 } },
            range_up: { value: 1, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ in_mid_line: {} }] } }],
        details: {
          self: {
            acc_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            range_up: { value: 1, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_wave', state: { squad: { in_squad: 51 } } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: 'infinite' },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: 'infinite' },
            spd_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: 'infinite' }
          }
        }
      }]
    }]
  },
  53: {
    no: 53,
    active: [{
      damage_deal: {
        base: { milliPercentage: 80000 },
        per_lv_up: { milliPercentage: 6000 }
      },
      range: 3,
      cost: 8,
      area: '2_x_2',
      effects: [{
        details: {
          target: {
            acc_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            cri_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            spd_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            effect_removal: { effect: 'acc_up' }
          }
        }
      }]
    }, {
      range: 0,
      cost: 8,
      area: 'cross_adjacent',
      effects: [{
        details: {
          target: {
            ap_up: { base: { microValue: 2000000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            acc_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } },
            range_up: { value: 1, term: { for_rounds: 2 } }
          }
        }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'end_wave' }],
        details: { self: { reconnaissance: {} } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ in_front_line: {} }] } }],
        details: { self: { eva_up: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ in_mid_line: {} }] } }],
        details: { self: { eva_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ in_back_line: {} }] } }],
        details: { self: { eva_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { target: { effect_removal: { effects: ['acc_down', 'eva_down'] } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'light' }, { unit: 'heavy' }] } }],
        details: {
          target: {
            acc_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            damage_reduction: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'flying' }] } }],
        details: {
          target: {
            acc_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 18000 }, per_lv_up: { milliPercentage: 900 }, term: { for_rounds: 1 } },
            damage_reduction: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 600 }, term: { for_rounds: 1 } },
          }
        }
      }]
    }]
  },
  54: {
    no: 54,
    active: [{
      damage_deal: {
        base: { milliPercentage: 118500 },
        per_lv_up: { milliPercentage: 10000 }
      },
      range: 3,
      cost: 5,
      area: 'single',
      effects: [{
        details: {
          target: {
            provoked: { term: { for_rounds: 2 } },
            acc_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }, {
      range: 6,
      cost: 6,
      area: '2_x_2',
      effects: [{
        details: {
          target: {
            eva_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } },
            damage_reduction: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }],
    passive: [{
      area: 'all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { eva_up: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{
          trigger: 'start_round',
          state: { target: [{ tagged: 'bombardment_squadron_command', unit: 'attacker' }, { tagged: 'bombardment_squadron_command', unit: 'supporter' }] }
        }],
        details: { target: { target_protect: { term: { for_rounds: 1 } } } }
      }]
    }]
  },
  55: {
    no: 55,
    active: [{
      damage_deal: {
        base: { milliPercentage: 127000 },
        per_lv_up: { milliPercentage: 11000 }
      },
      range: 3,
      cost: 5,
      area: 'single',
      effects: [{
        conditions: [{ state: { target: [{ unit: 'light' }, { unit: 'heavy' }] } }],
        details: { target: { eva_down: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ state: { target: [{ unit: 'flying' }] } }],
        details: { target: { eva_down: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ state: { target: [{ effected: 'marked' }, { effected: 'immovable' }] } }],
        details: { self: { anti_flying_type: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 209500 },
        per_lv_up: { milliPercentage: 19000 }
      },
      range: 4,
      cost: 7,
      area: 'single',
      effects: [{
        details: { self: { anti_flying_type: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } } }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } } }
      }, {
        conditions: [{ trigger: 'use_this_active' }],
        details: { self: { acc_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 10000 } } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { anti_flying_type: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'hit' }],
        details: {
          self: {
            atk_up: { tag: 'elation', base: { milliPercentage: 8000 }, per_lv_up: { milliPercentage: 400 }, term: 'infinite', max_stack: 3 },
            acc_up: { tag: 'elation', base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: 'infinite', max_stack: 3 },
            eva_up: { tag: 'elation', base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: 'infinite', max_stack: 3 }
          }
        }
      }, {
        conditions: [{ trigger: 'be_hit' }],
        details: { self: { effect_removal: { tag: 'elation', effects: ['atk_up', 'acc_up', 'eva_up'] } } }
      }]
    }, {
      area: {
        1: 'cross',
        10: 'all'
      },
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ tagged: 'bombardment_squadron_command' }] } }],
        details: {
          target: {
            follow_up_attack: { term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }]
  },
  56: {
    no: 56,
    active: [{
      damage_deal: {
        base: { milliPercentage: 143500 },
        per_lv_up: { milliPercentage: 13000 }
      },
      range: 2,
      cost: 8,
      area: 'row_toward_front',
      effects: [{
        conditions: [{ state: { target: [{ effected: 'marked' }, { effected: 'immovable' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 210000 },
        per_lv_up: { milliPercentage: 18500 }
      },
      range: 4,
      cost: 8,
      area: 'single',
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ state: { target: [{ effected: 'marked' }, { effected: 'immovable' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: { self: { ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 100000 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            defense_penetration: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
            anti_light_type: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            anti_heavy_type: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ effected_by: 54 }, { effected_by: 55 }] } }],
        details: {
          self: {
            ap_up: { base: { microValue: 500000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' },
            anti_light_type: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            anti_heavy_type: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }]
  },
  60: {
    no: 60,
    active: [{
      damage_deal: {
        base: { milliPercentage: 146000 },
        per_lv_up: { milliPercentage: 13000 }
      },
      range: 4,
      cost: 5,
      area: 'single',
      effects: [{
        details: {
          self: { ignore_protect: {} },
          target: {
            marked: { term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ effected: 'immovable' }, { effected: 'eva_down' }] } }],
        details: { target: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }]
    }, {
      range: 6,
      cost: 10,
      area: {
        1: 'twin',
        10: '2_x_2'
      },
      effects: [{
        details: {
          target: {
            ap_up: { base: { microValue: 1500000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' },
            atk_up: { tag: 'f_armory_deployment', base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 2 } },
            ignore_barrier_dr: { term: { for_rounds: 1 } }
          }
        }
      }]
    }],
    passive: [{
      area: {
        1: 'cross',
        10: 'all'
      },
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'heavy' }] } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            def_up: { base: { milliPercentage: 8000 }, per_lv_up: { milliPercentage: 800 }, term: { for_rounds: 1 } },
            damage_reduction: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 400 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: {
        1: 'cross_adjacent',
        10: 'all_adjacent'
      },
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          target: {
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ tagged: 'f_armory_deployment' }] } }],
        details: { target: { effect_removal: { effects: ['atk_down', 'cri_down'] } } }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: { type: 'heavy', role: 'attacker' } }] } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: { type: 'heavy', role: 'attacker' }, tagged: 'f_armory_deployment' }] } }],
        details: { target: { ap_up: { base: { microValue: 500000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' } } }
      }]
    }]
  },
  61: {
    no: 61,
    active: [{
      cruiser: {
        damage_deal: {
          base: { milliPercentage: 136500 },
          per_lv_up: { milliPercentage: 12000 }
        },
        range: 3,
        cost: 5,
        area: 'single',
        effects: [{
          details: {
            target: {
              atk_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
              cri_down: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 2 } }
            }
          }
        }, {
          conditions: [{ state: { target: [{ effected: 'def_down' }] } }],
          details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
        }]
      },
      armor: {
        damage_deal: {
          base: { milliPercentage: 240000 },
          per_lv_up: { milliPercentage: 21500 }
        },
        range: 4,
        cost: 10,
        area: 'single',
        effects: [{
          details: {
            self: {
              anti_light_type: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } },
              anti_heavy_type: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } },
              defense_penetration: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 4000 } }
            }
          }
        }, {
          conditions: [{ trigger: 'use_this_active' }],
          details: { self: { acc_up: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 6000 } } } }
        }]
      }
    }, {
      cruiser: {
        damage_deal: {
          base: { milliPercentage: 210000 },
          per_lv_up: { milliPercentage: 18500 }
        },
        range: 4,
        cost: 8,
        area: 'single',
        effects: [{
          details: {
            self: {
              anti_light_type: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 } },
              anti_heavy_type: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 } },
              defense_penetration: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 3000 } }
            }
          }
        }]
      },
      armor: {
        range: 0,
        cost: 2,
        area: 'self',
        effects: [{
          details: {
            self: {
              form_change: { form: 'cruiser' },
              all_debuff_removal: {}
            }
          }
        }]
      }
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'idle', state: { self: [{ form: 'cruiser' }] } }],
        details: { self: { form_change: { form: 'armor' } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ form: 'armor' }] } }],
        details: {
          self: {
            row_protect: { term: { for_rounds: 1 } },
            damage_reduction: { base: { milliPercentage: 23000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            def_up: { base: { milliPercentage: 75000 }, per_lv_up: { milliPercentage: 3750 }, term: { for_rounds: 1 } },
            fire_resist_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            ice_resist_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            electric_resist_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            status_resist_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ form: 'armor' }] } }],
        details: {
          self: {
            fire_resist_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            ice_resist_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            electric_resist_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            status_resist_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      cruiser: {
        area: 'all_adjacent_without_front_line',
        effects: [{
          conditions: [{
            trigger: 'start_round',
            state: {
              target: [
                { unit: { type: 'light', role: 'attacker' } },
                { unit: { type: 'light', role: 'supporter' } },
                { unit: { type: 'heavy', role: 'attacker' } },
                { unit: { type: 'heavy', role: 'supporter' } },
              ]
            }
          }],
          details: { target: { target_protect:{ term: { for_rounds: 1 } } } }
        }, {
          conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'heavy' }] } }],
          details: {
            target: {
              atk_up: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 800 }, term: { for_rounds: 1 } },
              spd_up: { base: { milliPercentage: 8000 }, per_lv_up: { milliPercentage: 400 }, term: { for_rounds: 1 } }
            }
          }
        }]
      },
      armor: {
        area: 'all_adjacent_without_front_line',
        effects: [{
          conditions: [{
            trigger: 'start_round',
            state: {
              target: [
                { unit: { type: 'light', role: 'attacker' } },
                { unit: { type: 'light', role: 'supporter' } },
                { unit: { type: 'heavy', role: 'attacker' } },
                { unit: { type: 'heavy', role: 'supporter' } },
              ]
            }
          }],
          details: { target: { target_protect:{ term: { for_rounds: 1 } } } }
        }, {
          conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'heavy' }] } }],
          details: {
            target: {
              atk_up: { base: { milliPercentage: 8000 }, per_lv_up: { milliPercentage: 400 }, term: { for_rounds: 1 } },
              spd_up: { base: { milliPercentage: 4000 }, per_lv_up: { milliPercentage: 200 }, term: { for_rounds: 1 } }
            }
          }
        }]
      }
    }]
  },
  62: {
    no: 62,
    active: [{
      damage_deal: {
        base: { milliPercentage: 195000 },
        per_lv_up: { milliPercentage: 17000 }
      },
      range: 4,
      cost: 7,
      area: 'single',
      effects: [{
        conditions: [{ state: { target: [{ in_front_line: {} }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } } }
      }, {
        conditions: [{ state: { target: [{ in_mid_line: {} }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 } } } }
      }, {
        conditions: [{ state: { target: [{ in_back_line: {} }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }, {
        conditions: [{ trigger: 'use_this_active' }],
        details: { self: { acc_up: { base: { milliPercentage: 4000 }, per_lv_up: { milliPercentage: 4000 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 166500 },
        per_lv_up: { milliPercentage: 15000 }
      },
      range: 4,
      cost: 8,
      area: 'line',
      effects: [{
        conditions: [{ state: { target: [{ unit: 'defender' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } } }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_damage: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 } } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { defense_penetration: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_wave' }, { trigger: 'idle' }],
        details: {
          self: {
            spd_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: { 1: 2, 10: 3 } }, max_stack: 1 },
            re_attack: { term: { for_rounds: { 1: 2, 10: 3 } }, max_stack: 1 }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { self: [{ effected: 'target_protect' }] } }],
        details: {
          self: {
            effect_removal: { effect: 'target_protect', term: 'immediate' },
            atk_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            damage_reduction: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }]
  },
  65: {
    no: 65,
    active: [{
      damage_deal: {
        base: { milliPercentage: 195000 },
        per_lv_up: { milliPercentage: 17000 }
      },
      range: 4,
      cost: 7,
      area: 'single',
      effects: [{
        details: { self: { anti_light_type: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }, {
        conditions: [{ state: { target: [{ effected: 'def_down' }, { effected: 'eva_down' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 138000 },
        per_lv_up: { milliPercentage: 12500 }
      },
      range: 6,
      cost: 8,
      area: 'fan_shape',
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: {
          self: { additional_damage: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 } } },
          target: { ap_down: { base: { microValue: 500000 }, per_lv_up: { microValue: 25000 } } }
        }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { self: [{ effected: 'target_protect' }] } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 } },
            acc_up: { base: { milliPercentage: 32000 }, per_lv_up: { milliPercentage: 2000 } },
            cri_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 } },
            spd_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 } }
          }
        }
      }]
    }, {
      area: 'line_with_front_line',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'attacker' }, { unit: 'defender' }] } }],
        details: { target: { anti_light_type: { base: { milliPercentage: 26000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{
          trigger: 'start_round',
          state: {
            target: [
              { unit: { alias: 'aa_cannonier', role: 'attacker' } }, { unit: { alias: 'aa_cannonier', role: 'defender' } },
              { unit: { alias: 'armored_maiden', role: 'attacker' } }, { unit: { alias: 'armored_maiden', role: 'defender' } }
            ]
          }
        }],
        details: { target: { anti_light_type: { base: { milliPercentage: 13000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { self: [{ in_front_line: {} }] } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 16500 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 21500 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 22000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ in_mid_line: {} }] } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 27000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 32300 }, per_lv_up: { milliPercentage: 2300 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 33000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ in_back_line: {} }] } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 33000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 43000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 44000 }, per_lv_up: { milliPercentage: 4000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }]
  },
  66: {
    no: 66,
    active: [{
      damage_deal: {
        base: { milliPercentage: 166500 },
        per_lv_up: { milliPercentage: 15000 }
      },
      range: 3,
      cost: 5,
      area: 'single',
      effects: [{
        details: {
          self: {
            anti_heavy_type: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } },
            defense_penetration: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 4000 } }
          }
        }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 219500 },
        per_lv_up: { milliPercentage: 19500 }
      },
      range: 5,
      cost: 7,
      area: 'single',
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ state: { target: [{ effected: 'marked' }, { effected: 'immovable' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 2000 } } } }
      }, {
        conditions: [{ trigger: 'use_this_active' }],
        details: { self: { acc_up: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 6000 } } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'end_wave' }],
        details: { self: { spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 1000 }, term: 'infinite' } } }
      }]
    }]
  },
  67: {
    no: 67,
    active: [{
      damage_deal: {
        base: { milliPercentage: 210000 },
        per_lv_up: { milliPercentage: 18500 }
      },
      range: 5,
      cost: 7,
      area: 'single',
      effects: [{
        details: { self: { defense_penetration: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 4000 } } } }
      }, {
        conditions: [{ state: { target: [{ unit: 'defender' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 141500 },
        per_lv_up: { milliPercentage: 11500 }
      },
      range: 4,
      cost: 8,
      area: {
        1: 'fan_shape_strong_explosion',
        5: 'fan_shape'
      },
      effects: [{
        details: { target: { effect_removal: { effect: 'damage_reduction', rate: 'rate_up_by_level' } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'kill' }],
        details: { self: { atk_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1000 }, term: 'infinite', times: 1 } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'attack', state: { self: [{ effected: 'atk_up' }] } }],
        details: { self: { ignore_barrier_dr: { rate: 'rate_up_by_level' } } }
      }]
    }]
  },
  68: {
    no: 68,
    active: [{
      damage_deal: {
        base: { milliPercentage: 269000 },
        per_lv_up: { milliPercentage: 23500 }
      },
      range: 6,
      cost: 10,
      area: 'single',
      effects: [{
        conditions: [{ state: { target: [{ effected: 'marked' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 } } } }
      }]
    }, {
      normal: {
        damage_deal: {
          base: { milliPercentage: 192500 },
          per_lv_up: { milliPercentage: 16000 }
        },
        range: 6,
        cost: 10,
        area: 'row_toward_front',
        effects: [{
          details: { self: { ignore_protect: {} } }
        }, {
          conditions: [{ trigger: 'critical' }],
          details: { self: { additional_damage: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 } } } }
        }, {
          conditions: [{ state: { self: [{ tagged: 'enhance_output' }] } }],
          details: { target: { effect_removal: { effects: ['barrier', 'damage_reduction'] } } }
        }]
      },
      limiter_unlock:{
        damage_deal: {
          base: { milliPercentage: 251500 },
          per_lv_up: { milliPercentage: 21500 }
        },
        range: 6,
        cost: 10,
        area: 'row_toward_front',
        effects: [{
          details: {
            self: { ignore_protect: {} },
            target: { effect_removal: { effects: ['barrier', 'damage_reduction'] } }
          }
        }, {
          conditions: [{ trigger: 'critical' }],
          details: { self: { additional_damage: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 1500 } } } }
        }]
      }
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'idle' }],
        details: {
          self: {
            atk_up: { tag: 'enhance_output', base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: { 1: 2, 10: 3 } } },
            cri_up: { tag: 'enhance_output', base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: { 1: 2, 10: 3 } } },
            defense_penetration: { tag: 'enhance_output', base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: { 1: 2, 10: 3 } } },
            ignore_barrier_dr: { tag: 'enhance_output', term: { for_rounds: { 1: 2, 10: 3 } } }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'attack', state: { self: [{ effected: 'follow_up_attack' }] } }],
        details: { self: { ap_up: { base: { microValue: 1500000 }, per_lv_up: { microValue: 75000 } } } }
      }, {
        conditions: [{ trigger: 'attack', state: { self: [{ effected: 'target_protect' }] } }],
        details: { self: { ap_up: { base: { microValue: 1500000 }, per_lv_up: { microValue: 75000 } } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ state: { self: [{ hp_less_or_equal: 33, form: 'normal' }] } }],
        details: {
          self: {
            form_change: { form: 'limiter_unlock' },
            atk_up: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: 'infinite' },
            spd_up: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: 'infinite' },
            acc_up: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 5000 }, term: 'infinite' }
          }
        }
      }, {
        conditions: [{ trigger: 'attack', state: { self: [{ form: 'limiter_unlock' }] } }],
        details: { self: { fixed_damage_over_time: { base: { value: 30 }, per_lv_up: { value: 15 } } } }
      }]
    }]
  },
  69: {
    no: 69,
    active: [{
      damage_deal: {
        base: { milliPercentage: 259000 },
        per_lv_up: { milliPercentage: 23500 }
      },
      range: 5,
      cost: 9,
      area: 'single',
      effects: [{
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_fire_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } } }
      }, {
        conditions: [{ state: { target: [{ effected: 'damage_taken_increased' }, { effected: 'def_down' }] } }],
        details: { target: { effect_removal: { effect: 'damage_reduction' } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 275000 },
        per_lv_up: { milliPercentage: 25000 }
      },
      range: 4,
      cost: 8,
      area: 'single',
      effects: [{
        details: { self: { defense_penetration: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 5000 } } } }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_damage: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 } } } }
      }]
    }],
    passive: [{
      area: 'line_adjacent',
      effects: [{
        conditions: [{ trigger: 'start_wave', state: { target: [{ unit: { type: 'heavy', role: 'attacker' } }] } }],
        details: { target: { ap_up: { base: { microValue: 2000000 }, per_lv_up: { microValue: 100000 } } } }
      }, {
        conditions: [{ trigger: 'attack', state: { target: [{ unit: { type: 'heavy', role: 'attacker' } }] } }],
        details: { target: { ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 } } } }
      }]
    }]
  },
  70: {
    no: 70,
    active: [{
      damage_deal: {
        base: { milliPercentage: 122000 },
        per_lv_up: { milliPercentage: 10500 }
      },
      range: 3,
      cost: 6,
      area: 'single',
      effects: [{
        details: {
          self: {
            anti_light_type: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 } },
            anti_heavy_type: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 } },
            defense_penetration: { base: { milliPercentage: 28000 }, per_lv_up: { milliPercentage: 3000 } } } }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: { target: { effect_removal: { effect: 'def_up' } } }
      }]
    }, {
      damage_deal: {
        milliPercentage: 3000
      },
      range: 4,
      cost: 7,
      area: 'single',
      effects: [{
        details: {
          self: { ignore_protect: {} },
          target: {
            marked: { term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: { target: { effect_removal: { effects: ['eva_up', 'damage_reduction'] } } }
      }, {
        conditions: [{ trigger: 'use_this_active' }],
        details: { self: { acc_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 30000 } } } }
      }]
    }],
    passive: [{
      area: {
        1: 'cross_adjacent',
        10: 'all_adjacent'
      },
      effects: [{
        conditions: [{ trigger: 'hit', state: { target: [{ unit: { type: 'heavy', role: 'attacker' } }] } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 3 } },
            acc_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 3 } },
            ap_up: { base: { microValue: 450000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' }
          }
        }
      }]
    }]
  },
  71: {
    no: 71,
    active: [{
      damage_deal: {
        base: { milliPercentage: 155000 },
        per_lv_up: { milliPercentage: 7750 }
      },
      range: 4,
      cost: 7,
      area: 'single',
      effects: [{
        conditions: [{ state: { self: [{ stack_ge: { tag: 'scrap_collect', value: 1 } }] } }],
        details: { target: { ap_down: { base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 } } } }
      }, {
        conditions: [{ state: { self: [{ stack_ge: { tag: 'scrap_collect', value: 2 } }] } }],
        details: { target: { damage_taken_increased: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ state: { self: [{ stack_ge: { tag: 'scrap_collect', value: 3 } }] } }],
        details: { target: { all_buff_removal: {} } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 60000 },
        per_lv_up: { milliPercentage: 3000 }
      },
      range: 4,
      cost: 9,
      area: {
        1: 'cross',
        10: 'all'
      },
      effects: [{
        details: {
          self: {
            ignore_protect:{},
            tag_release: { tag: 'scrap_collect' }
          },
          target: {
            def_up: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 2 } },
            eva_down: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 2 } },
            spd_down: { base: { milliPercentage: 7500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            range_down: { value: 1, term: { for_rounds: 2 } },
            immovable: { term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { self: [{ stack_ge: { tag: 'scrap_collect', value: 3 } }] } }],
        details: {
          target: {
            eva_down: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 2 } },
            spd_down: { base: { milliPercentage: 7500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            all_buff_removal: {}
          }
        }
      },{
        conditions: [{ trigger: 'use_this_active' }],
        details: { self: { acc_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 30000 } } } }
      }]
    }],
    passive: [{
      area: 'all',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { self: [{ hp_greater_than: 50 }] } }],
        details: {
          target: {
            damage_reduction: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            fire_resist_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            ice_resist_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            electric_resist_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ hp_less_or_equal: 50 }] } }],
        details: {
          self: {
            damage_reduction: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            fire_resist_up: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            ice_resist_up: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            electric_resist_up: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'be_hit' }],
        effective: 'only_this_attack',
        scale_factor: { per_stack: { tag: 'scrap_collect' } },
        details: {
          self: {
            def_up: { base: { milliPercentage: 33000 }, per_lv_up: { milliPercentage: 2000 } },
            damage_reduction: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 } }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { atk_up: { tag: 'scrap_collect', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, max_stack: 3 } } }
      }]
    }]
  },
  72: {
    no: 72,
    active: [{
      damage_deal: {
        base: { milliPercentage: 126500 },
        per_lv_up: { milliPercentage: 11500 },
        attribute: 'fire'
      },
      range: 2,
      cost: 4,
      area: 'single',
      effects: [{
        conditions: [{ state: { target: [{ effected: 'marked' }, { effected: 'def_down' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 150000 },
        per_lv_up: { milliPercentage: 10000 },
        attribute: 'fire'
      },
      range: 5,
      cost: 6,
      area: '2_x_2',
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: {
          self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } },
          target: { def_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 }, cannot_be_dispelled: true } }
        }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { self: [{ in_back_line: {} }] } }],
        details: { self: { eva_up: { base: { milliPercentage: 41000 }, per_lv_up: { milliPercentage: 6000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ in_mid_line: {} }] } }],
        details: { self: { eva_up: { base: { milliPercentage: 38000 }, per_lv_up: { milliPercentage: 5500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ in_front_line: {} }] } }],
        details: { self: { eva_up: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'be_attacked' }],
        details: { self: { counterattack: { base: { milliPercentage: 80000 }, per_lv_up: { milliPercentage: 5000 } } } }
      }, {
        conditions: [{ trigger: 'attack' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            cri_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'kill' }],
        details: { self: { ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 100000 }, term: 'immediate' } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: { self: { atk_up: { base: { milliPercentage: 155000 }, per_lv_up: { milliPercentage: 5000 }, term: 'infinite' } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        scale_factor: { num_of_enemies: 'proportion' },
        details: { self: { atk_down: { milliPercentage: 15000, term: { for_rounds: 1 } } } }
      }]
    }]
  },
  73: {
    no: 73,
    active: [{
      normal: {
        damage_deal: {
          base: { milliPercentage: 118500 },
          per_lv_up: { milliPercentage: 10000 }
        },
        range: 3,
        cost: 4,
        area: 'single',
        effects: [{
          details: {
            target: {
              marked: { term: { for_rounds: 2 } },
              damage_taken_increased: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
              eva_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } }
            }
          }
        }, {
          conditions: [{ trigger: 'critical' }],
          details: { target: { effect_removal: { effect: 'counterattack' } } }
        }]
      },
      optical_camouflage: {
        damage_deal: {
          base: { milliPercentage: 127000 },
          per_lv_up: { milliPercentage: 11000 }
        },
        range: 3,
        cost: 5,
        area: 'single',
        effects: [{
          details: {
            self: { ignore_protect: {} },
            target: {
              acc_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } },
              cri_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 } },
              spd_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 } }
            }
          }
        }, {
          conditions: [{ trigger: 'critical' }],
          details: {
            self: { additional_damage: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 } } },
            target: { effect_removal: { effect: 'counterattack' } }
          }
        }]
      }
    }, {
      normal: {
        damage_deal: {
          base: { milliPercentage: 177500 },
          per_lv_up: { milliPercentage: 16000 }
        },
        range: 4,
        cost: 6,
        area: 'single',
        effects: [{
          conditions: [{ state: { target: [{ effected: 'immovable' }, { effected: 'eva_down' }] } }],
          details: {
            self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } },
            target: { status_resist_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } }
          }
        }]
      },
      optical_camouflage: {
        damage_deal: {
          base: { milliPercentage: 173000 },
          per_lv_up: { milliPercentage: 15500 }
        },
        range: 3,
        cost: 7,
        area: 'single',
        effects: [{
          details: { self: { ignore_protect: {} } }
        }, {
          conditions: [{ trigger: 'critical' }],
          details: {
            target: {
              all_buff_removal: {},
              damage_taken_increased: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } }
            }
          }
        }]
      }
    }],
    passive: [{
      normal: {
        area: 'self',
        effects: [{
          conditions: [{ trigger: 'start_round' }],
          details: {
            self: {
              cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
              eva_up: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } },
              damage_reduction: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
            }
          }
        }, {
          conditions: [{ trigger: 'kill' }],
          details: { self: { ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 } } } }
        }]
      },
      optical_camouflage: {
        area: 'self',
        effects: [{
          conditions: [{ trigger: 'start_round' }],
          details: {
            self: {
              cri_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
              eva_up: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } }
            }
          }
        }, {
          conditions: [{ trigger: 'kill' }],
          details: { self: { eva_up: { base: { milliPercentage: 17500 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 2 } } } }
        }]
      }
    }, {
      normal: {
        area: 'self',
        effects: [{
          conditions: [{ trigger: 'idle' }],
          details: {
            self: {
              form_change: { form: 'optical_camouflage' },
              attack_critical: { term: { for_rounds: 2 } }
            }
          }
        }]
      },
      optical_camouflage: {
        area: 'self',
        effects: [{
          conditions: [{ trigger: 'start_round' }],
          details: {
            self: {
              atk_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
              spd_down: { base: { milliPercentage: 12500 }, per_lv_up: { milliPercentage: -625 }, term: { for_rounds: 1 } }
            }
          }
        }, {
          conditions: [{ trigger: 'idle' }],
          details: {
            self: {
              form_change: { form: 'normal' },
              all_debuff_removal: {},
              ap_up: { base: { microValue: 2000000 }, per_lv_up: { microValue: 100000 } }
            }
          }
        }]
      }
    }, {
      normal: {
        area: 'self_and_row_adjacent',
        effects: [{
          conditions: [{ trigger: 'start_round' }],
          details: {
            self: {
              follow_up_attack: { term: { for_rounds: 1 } },
              acc_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
            }
          }
        }, {
          conditions: [{ trigger: 'attack', state: { self: [{ in_mid_line: {} }, { in_back_line: {} }] } }],
          details: {
            self: {
              form_change: { form: 'optical_camouflage' },
              atk_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
              attack_critical: { term: { for_rounds: 2 } }
            }
          }
        }]
      },
      optical_camouflage: {
        area: 'self_and_row_adjacent',
        effects: [{
          conditions: [{ trigger: 'start_round' }],
          details: {
            self: {
              follow_up_attack: { term: { for_rounds: 1 } },
              acc_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
            }
          }
        }]
      }
    }]
  },
  74: {
    no: 74,
    active: [{
      damage_deal: {
        base: { milliPercentage: 100000 },
        per_lv_up: { milliPercentage: 7500 }
      },
      range: 2,
      cost: 8,
      area: 'fan_shape_without_front',
      effects: [{
        details: {
          self: {
            ignore_protect: {},
            def_up: { tag: 'devour', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, max_stack: 3 }
          },
          target: { immovable: { term: { for_rounds: 2 } } }
        }
      }, {
        conditions: [{ state: { target: [{ unit: 'light' }, { unit: 'heavy' }] } }],
        details: {
          target: {
            def_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            spd_down: { base: { milliPercentage: 8000 }, per_lv_up: { milliPercentage: 400 }, term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 600 }, term: { for_rounds: 2 } },
          }
        }
      }, {
        conditions: [{ state: { target: [{ unit: 'flying' }] } }],
        details: {
          target: {
            def_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            spd_down: { base: { milliPercentage: 4000 }, per_lv_up: { milliPercentage: 200 }, term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 300 }, term: { for_rounds: 2 } },
          }
        }
      }]
    }, {
      range: 0,
      cost: 9,
      area: 'cross',
      effects: [{
        details: {
          self: { tag_unstack: { tag: 'devour', value: 1 } },
          target: {
            barrier: { base: { value: 50 }, per_lv_up: { value: 50 }, term: { for_rounds: 3 } },
            damage_reduction: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 3 } },
            status_resist_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 3 } },
            electric_resist_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 3 } }
          }
        }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            column_protect: { term: { for_rounds: 1 } },
            def_up: { base: { milliPercentage: 33000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
            electric_resist_up: { base: { milliPercentage: 33000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
            status_resist_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'inverted_fan_shape_adjacent',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'light' }, { unit: 'flying' }] } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } },
            target_protect: { term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: {
        1: 'fixed_cross',
        10: 'fixed_all'
      },
      effects: [{
        conditions: [{ trigger: 'start_wave', state: { target: [{ unit: 'light' }] } }],
        details: {
          target: {
            immovable: { term: { for_rounds: 2 } },
            spd_down: { base: { milliPercentage: 3000 }, per_lv_up: { milliPercentage: 200 }, term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 4000 }, per_lv_up: { milliPercentage: 300 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_wave', state: { target: [{ unit: 'heavy' }] } }],
        details: {
          target: {
            immovable: { term: { for_rounds: 2 } },
            spd_down: { base: { milliPercentage: 4500 }, per_lv_up: { milliPercentage: 300 }, term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 400 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }]
  },
  75: {
    no: 75,
    active: [{
      damage_deal: {
        base: { milliPercentage: 142000 },
        per_lv_up: { milliPercentage: 11000 },
        attribute: 'electric'
      },
      range: 3,
      cost: 6,
      area: 'single',
      effects: [{
        details:{
          target: {
            eva_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } },
            ap_down: { base: { microValue: 300000 }, per_lv_up: { microValue: 15000 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ effected: 'marked' }, { effected: 'immovable' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 137500 },
        per_lv_up: { milliPercentage: 10500 },
        attribute: 'electric'
      },
      range: 4,
      cost: 8,
      area: 'row_toward_front',
      effects: [{
        details:{
          target: {
            eva_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } },
            ap_down: { base: { microValue: 300000 }, per_lv_up: { microValue: 15000 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ effected: 'marked' }, { effected: 'immovable' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_wave', state: { squad: { in_squad: 'electric_active' } } }],
        scale_factor: { num_of_units: 'electric_active', except: 'self' },
        details: { self: { atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: 'infinite' } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { in_squad: 'electric_active' } } }],
        details: {
          self: {
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'self_and_left_direction',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'electric_active' }] } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 21000 }, per_lv_up: { milliPercentage: 1000 } },
            spd_up: { base: { milliPercentage: 5500 }, per_lv_up: { milliPercentage: 500 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: { alias: 'electric_active', type: 'flying' } }] } }],
        details: {
          target: {
            cri_up: { base: { milliPercentage: 4500 }, per_lv_up: { milliPercentage: 500 } },
            acc_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 } },
            eva_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 } }
          }
        }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        scale_factor: { num_of_units: 'ally' },
        details: {
          target: {
            electric_resist_down: { base: { milliPercentage: 3300 }, per_lv_up: { milliPercentage: 300 } },
            eva_down: { base: { milliPercentage: 3200 }, per_lv_up: { milliPercentage: 200 } },
            acc_down: { base: { milliPercentage: 2200 }, per_lv_up: { milliPercentage: 200 } }
          }
        }
      }]
    }]
  },
  76: {
    no: 76,
    active: [{
      damage_deal: {
        base: { milliPercentage: 262000 },
        per_lv_up: { milliPercentage: 23000 }
      },
      range: 2,
      cost: 10,
      area: 'single',
      effects: [{
        details: {
          target: {
            def_down: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            push: { value: 1 }
          }
        }
      }, {
        conditions: [{ state: { self: [{ tagged: 'max_output_burst' }] } }],
        details: {
          target: {
            damage_taken_increased: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            stunned: { rate: { milliPercentage: 50000 } }
          }
        }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 122000 },
        per_lv_up: { milliPercentage: 10500 }
      },
      range: 3,
      cost: 8,
      area: 'line',
      effects: [{
        details: {
          target: {
            pull: { value: 2 },
            immovable: { term: { for_rounds: 2 } },
            ap_down: { base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' },
            all_buff_removal: { rate: { milliPercentage: 50000 } }
          }
        }
      }, {
        conditions: [{ state: { self: [{ tagged: 'max_output_burst' }] } }],
        details: { target: { activation_rate_percentage_up: { effect: 'all_buff_removal', milliPercentage: 50000 } } }
      }]
    }],
    passive: [{
      area: {
        1: 'line_adjacent',
        10: 'cross_adjacent'
      },
      effects: [{
        conditions: [{ trigger: 'start_round', state: { self: [{ effected: 'atk_up' }] } }],
        details: { target: { atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ effected: 'acc_up' }] } }],
        details: { target: { acc_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ effected: 'cri_up' }] } }],
        details: { target: { cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ effected: 'spd_up' }] } }],
        details: { target: { spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ effected: 'damage_reduction' }] } }],
        details: { target: { damage_reduction: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'idle' }],
        details: {
          self: {
            atk_up: { tag: 'max_output_burst', base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: { 1: 2, 10: 3 } } },
            cri_up: { tag: 'max_output_burst', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: { 1: 2, 10: 3 } } },
            spd_up: { tag: 'max_output_burst', base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: { 1: 2, 10: 3 } } }
          }
        }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: { self: { ap_up: { base: { microValue: 4000000 }, per_lv_up: { microValue: 200000 } } } }
      }, {
        conditions: [{ trigger: 'end_wave' }],
        details: { self: { reconnaissance: {} } }
      }, {
        conditions: [{ trigger: 'start_wave', state: { self: [{ effected: 'reconnaissance' }] } }],
        details: {
          target: {
            atk_down: { base: { milliPercentage: 600 }, per_lv_up: { milliPercentage: 400 }, term: 'infinite' },
            cri_down: { base: { milliPercentage: 600 }, per_lv_up: { milliPercentage: 400 }, term: 'infinite' }
          }
        }
      }]
    }]
  },
  77: {
    no: 77,
    active: [{
      damage_deal: {
        base: { milliPercentage: 127000 },
        per_lv_up: { milliPercentage: 11000 }
      },
      range: 2,
      cost: 4,
      area: 'single',
      effects: [{
        details: {
          target: {
            marked: { term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 190500 },
        per_lv_up: { milliPercentage: 16500 }
      },
      range: 5,
      cost: 7,
      area: 'single',
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ state: { target: [{ effected: 'marked' }, { effected: 'immovable' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { merciless: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'kill' }],
        details: { self: { ap_up: { base: { microValue: 2000000 }, per_lv_up: { microValue: 100000 } } } }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        scale_factor: { num_of_units: 'light' },
        details: {
          self: {
            cri_up: { base: { milliPercentage: 5500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            atk_up: { base: { milliPercentage: 3200 }, per_lv_up: { milliPercentage: 200 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'light' }] } }],
        scale_factor: { num_of_units: 'light' },
        details: {
          target: {
            cri_up: { base: { milliPercentage: 5500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            atk_up: { base: { milliPercentage: 3200 }, per_lv_up: { milliPercentage: 200 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { ignore_barrier_dr: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'kill' }],
        details: {
          self: { ap_down: { base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 } } },
          target: { ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 } } }
        }
      }]
    }]
  },
  78: {
    no: 78,
    active: [{
      damage_deal: {
        base: { milliPercentage: 127000 },
        per_lv_up: { milliPercentage: 11000 }
      },
      range: 3,
      cost: 4,
      area: 'single',
      effects: [{
        details: {
          target: {
            eva_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 194500 },
        per_lv_up: { milliPercentage: 17000 },
        attribute: 'fire'
      },
      range: 4,
      cost: 6,
      area: 'single',
      effects: [{
        conditions: [{ state: { target: [{ effected: 'eva_down' }, { effected: 'immovable' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } } }
      }]
    }],
    passive: [{
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        scale_factor: { num_of_units: 'tomos_friends' },
        details: {
          self: {
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'tomos_friends' }] } }],
        details: { target: { follow_up_attack: { term: { for_rounds: 1 } } } }
      }]
    }]
  },
  79: {
    no: 79,
    active: [{
      damage_deal: {
        base: { milliPercentage: 127000 },
        per_lv_up: { milliPercentage: 11000 },
        attribute: 'fire'
      },
      range: 4,
      cost: 5,
      area: 'single',
      effects: [{
        details: {
          target: {
            def_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            fire_resist_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ effected: 'marked' }, { effected: 'immovable' }] } }],
        details: { self: { additional_fire_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 210000 },
        per_lv_up: { milliPercentage: 18500 }
      },
      range: 5,
      cost: 9,
      area: 'cross_small_explosion',
      effects: [{
        details: {
          self: {
            ignore_protect: {},
            defense_penetration: { milliPercentage: 100000 }
          }
        }
      }, {
        conditions: [{ trigger: 'hit' }],
        details: {
          target: {
            immovable: { term: { for_rounds: 2 } },
            ap_down: { base: { microValue: 50000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' }
          }
        }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 800 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 3000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'end_wave' }],
        details: { self: { reconnaissance: {} } }
      }]
    }, {
      area: 'cross_adjacent',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { target: { spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ effected: 'reconnaissance' }] } }],
        details: { target: { follow_up_attack: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ effected: 'reconnaissance' }] } }],
        details: {
          target: {
            acc_up: { base: { milliPercentage: 2500 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 2000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'idle' }],
        details: { target: { spd_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } } } }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ effected: 'atk_up' }, { effected: 'atk_down' }] } }],
        details: { target: { atk_down: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ effected: 'eva_up' }, { effected: 'eva_down' }] } }],
        details: { target: { eva_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ effected: 'fire_resist_up' }, { effected: 'fire_resist_down' }] } }],
        details: { target: { fire_resist_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ effected: 'ice_resist_up' }, { effected: 'ice_resist_down' }] } }],
        details: { target: { ice_resist_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ effected: 'electric_resist_up' }, { effected: 'electric_resist_down' }] } }],
        details: { target: { electric_resist_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ effected: 'damage_taken_increased' }] } }],
        details: { target: { damage_taken_increased: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }]
    }]
  },
  80: {
    no: 80,
    active: [{
      damage_deal: {
        base: { milliPercentage: 113500 },
        per_lv_up: { milliPercentage: 9500 },
        attribute: 'ice'
      },
      range: 4,
      cost: 4,
      area: 'single',
      effects: [{
        details: {
          self: { tag_stack: { tag: 'shot_frost_bolt', term: { for_rounds: 99 } } },
          target: {
            marked: { term: { for_rounds: 2 } },
            eva_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } },
            spd_down: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ tagged: 'wet' }] } }],
        details: {
          target: {
            eva_down: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 2 } },
            spd_down: { base: { milliPercentage: 2500 }, per_lv_up: { milliPercentage: 125 }, term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 7500 }, per_lv_up: { milliPercentage: 375 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }, {
      range: 6,
      cost: 10,
      area: 'fixed_all',
      effects: [{
        details: {
          target: {
            atk_up: { base: { milliPercentage: 10500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            acc_up: { base: { milliPercentage: 21000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            defense_penetration: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 }, max_stack: 1 },
            ap_up: { base: { microValue: 1050000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ stack_ge: { tag: 'shot_frost_bolt', value: 3 } }] } }],
        details: {
          self: { tag_release: { tag: 'shot_frost_bolt' } },
          target: {
            atk_up: { base: { milliPercentage: 10500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            acc_up: { base: { milliPercentage: 21000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            defense_penetration: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 }, max_stack: 1 },
            ap_up: { base: { microValue: 1050000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' }
          }
        }
      }]
    }],
    passive: [{
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ effected_by: { alias: 'mongoose_team', except: 80 } }] } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: {
        1: 'front_line_adjacent',
        10: 'all_adjacent_without_back_line'
      },
      effects: [{
        conditions: [{ trigger: 'start_wave', state: { target: [{ unit: 'defender' }] } }],
        details: { target: { ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'defender' }] } }],
        details: {
          target: {
            damage_reduction: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            row_protect: { term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'fixed_back_line',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: { type: 'light', role: 'attacker' } }, { unit: { type: 'light', role: 'supporter' } }] } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }]
  },
  81: {
    no: 81,
    active: [{
      damage_deal: {
        base: { milliPercentage: 136500 },
        per_lv_up: { milliPercentage: 12000 }
      },
      range: 2,
      cost: 6,
      area: 'single',
      effects: [{
        details: {
          target: {
            atk_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            spd_down: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 2 } },
            stunned: { rate: { milliPercentage: 10000 } }
          }
        }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }, {
        conditions: [{ trigger: 'hit', state: { squad: { in_squad: 84 } } }],
        details: { self: { cooperative_attack: { unit: 84, active: 2 } } }
      }]
    }, {
      range: 0,
      cost: 7,
      area: 'self',
      effects: [{
        details: {
          self: {
            damage_reduction: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 3 } },
            status_resist_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 3 } },
            counterattack: { base: { milliPercentage: 80000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 3 } }
          }
        }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            def_up: { base: { milliPercentage: 60000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
            row_protect: { term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'be_hit' }],
        details: { self: { ap_up: { base: { microValue: 500000 }, per_lv_up: { microValue: 25000 } } } }
      }]
    }, {
      area: 'fixed_front_line',
      effects: [{
        conditions: [{
          trigger: 'start_round',
          state: { target: [{ unit: { type: 'light', role: 'attacker' } }, { unit: { type: 'light', role: 'supporter' } }, { unit: { type: 'heavy', role: 'attacker' } }, { unit: { type: 'heavy', role: 'supporter' } }] }
        }],
        details: { target: { target_protect: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ in_front_line: {} }] } }],
        details: { self: { counterattack: { base: { milliPercentage: 80000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } } } }
      }]
    }]
  },
  82: {
    no: 82,
    active: [{
      damage_deal: {
        base: { milliPercentage: 122000 },
        per_lv_up: { milliPercentage: 10500 }
      },
      range: 4,
      cost: 6,
      area: 'single',
      effects: [{
        conditions: [{ state: { target: [{ effected: 'provoked' }, { effected: 'marked' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 156500 },
        per_lv_up: { milliPercentage: 14000 }
      },
      range: 4,
      cost: 7,
      area: 'single',
      effects: [{
        details: {
          self: {
            ignore_protect: {},
            merciless: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ effected: 'damage_taken_increased' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 } } } }
      }]
    }],
    passive: [{
      area: 'row_toward_front',
      effects: [{
        conditions: [{ trigger: 'start_wave', state: { target: [{ unit: 'defender' }] } }],
        details: {
          target: {
            ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' },
            follow_up_attack: { term: 'infinite' }
          }
        }
      }]
    }, {
      area: 'row_toward_front',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'defender' }] } }],
        details: {
          target: {
            def_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 3000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'row_toward_front',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 22000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 7000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'defender' }] } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 22000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 7000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            row_protect: { term: { for_rounds: 1 } },
            counterattack: { base: { milliPercentage: 80000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }]
  },
  83: {
    no: 83,
    active: [{
      damage_deal: {
        base: { milliPercentage: 122500 },
        per_lv_up: { milliPercentage: 10500 }
      },
      range: 3,
      cost: 5,
      area: 'single',
      effects: [{
        details: {
          target: {
            provoked: { term: { for_rounds: 2 } },
            cri_down: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 2 } },
            acc_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'hit', state: { squad: { in_squad: 84 } } }],
        details: { self: { cooperative_attack: { unit: 84, active: 2 } } }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ tagged: 'forceful_breakthrough' }] } }],
        details: { target: { damage_taken_increased: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } } } }
      }]
    }, {
      range: 6,
      cost: 7,
      area: 'single',
      effects: [{
        details: {
          target: { target_protect: { term: { for_rounds: 3 } } },
          self: {
            eva_up: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 2 } },
            damage_reduction: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 } },
            counterattack: { base: { milliPercentage: 80000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 3 } }
          }
        }
      }]
    }],
    passive: [{
      area: 'cross_adjacent_without_front',
      effects: [{
        conditions: [{ trigger: 'start_wave', state: { target: [{ unit: 'flying' }] } }],
        details: { target: { ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 100000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'flying' }] } }],
        details: {
          target: {
            target_protect: { tag: 'squadron_escort', term: { for_rounds: 1 } },
            acc_up: { tag: 'squadron_escort', base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            eva_up: { tag: 'squadron_escort', base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 600 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 24000 }, per_lv_up: { milliPercentage: 1200 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ tagged: 'squadron_escort' }] } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 600 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 24000 }, per_lv_up: { milliPercentage: 1200 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            status_resist_up: { tag: 'forceful_breakthrough', base: { milliPercentage: 23000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
            row_protect: { tag: 'forceful_breakthrough', term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ tagged: 'squadron_escort', unit: 'supporter' }] } }],
        details: { target: { target_protect: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'end_wave' }],
        details: { self: { reconnaissance: {} } }
      }, {
        conditions: [{ trigger: 'start_wave', state: { self: [{ effected: 'reconnaissance' }] } }],
        details: { self: { ap_up: { base: { microValue: 2000000 }, per_lv_up: { microValue: 100000 } } } }
      }]
    }]
  },
  84: {
    no: 84,
    active: [{
      damage_deal: {
        base: { milliPercentage: 136000 },
        per_lv_up: { milliPercentage: 12000 },
        attribute: 'electric'
      },
      range: 2,
      cost: 5,
      area: 'single',
      effects: [{
        details: {
          target: {
            ap_down: { base: { microValue: 500000 }, per_lv_up: { microValue: 25000 }, term: 'immediate' },
            eva_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 3 } },
            effect_removal: { effect: 'spd_up', rate: 'constant', term: 'immediate' }
          }
        }
      }]
    }, {
      // FIXME: change to form change unit if implement Electric Pile Bunker
      damage_deal: {
        base: { milliPercentage: 239500 },
        per_lv_up: { milliPercentage: 21500 }
      },
      range: 2,
      cost: 9,
      area: 'single',
      effects: [{
        details: {
          self: {
            ignore_protect: {},
            defense_penetration: { base: { milliPercentage: 43000 }, per_lv_up: { milliPercentage: 3000 } }
          },
          target: {
            effect_removal: { effects: ['column_protect', 'row_protect', 'target_protect', 'damage_reduction'] },
            push: { value: 1 }
          }
        }
      }, {
        conditions: [{ state: { target: [{ effected: 'def_down' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 26500 }, per_lv_up: { milliPercentage: 1500 } } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: {
          self: {
            anti_light_type: { base: { milliPercentage: 21000 }, per_lv_up: { milliPercentage: 1000 }, term: 'infinite' },
            anti_heavy_type: { base: { milliPercentage: 31500 }, per_lv_up: { milliPercentage: 1500 }, term: 'infinite' }
          }
        }
      }]
    }, {
      area: 'line_with_backward',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'attacker' }, { unit: 'defender' }] } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 1000 } },
            cri_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 } },
            spd_up: { base: { milliPercentage: 4300 }, per_lv_up: { milliPercentage: 300 } },
            follow_up_attack: { rate: { base: { milliPercentage: 55000 }, per_lv_up: { milliPercentage: 5000 } } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: { alias: 'mongoose_team', role: 'attacker' } }, { unit: { alias: 'mongoose_team', role: 'defender' } }] } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 1000 } },
            cri_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 } },
            spd_up: { base: { milliPercentage: 4300 }, per_lv_up: { milliPercentage: 300 } },
            follow_up_attack: { rate: { base: { milliPercentage: 55000 }, per_lv_up: { milliPercentage: 5000 } } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: { alias: 'mongoose_team', role: 'supporter' } }] } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 32000 }, per_lv_up: { milliPercentage: 2000 } },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 } },
            spd_up: { base: { milliPercentage: 8600 }, per_lv_up: { milliPercentage: 600 } },
            follow_up_attack: { rate: { base: { milliPercentage: 55000 }, per_lv_up: { milliPercentage: 5000 } } }
          }
        }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        // TODO: investigation required including myself in target of mongoose_team
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'mongoose_team' }] } }],
        details: { target: { follow_up_attack: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        scale_factor: { num_of_units: 'mongoose_team' },
        details: {
          self: {
            atk_up: { base: { milliPercentage: 5500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 3200 }, per_lv_up: { milliPercentage: 200 }, term: { for_rounds: 1 } },
            damage_reduction: { base: { milliPercentage: 4800 }, per_lv_up: { milliPercentage: 300 }, term: { for_rounds: 1 } },
            fire_resist_up: { base: { milliPercentage: 3200 }, per_lv_up: { milliPercentage: 200 }, term: { for_rounds: 1 } },
            ice_resist_up: { base: { milliPercentage: 3200 }, per_lv_up: { milliPercentage: 200 }, term: { for_rounds: 1 } },
            electric_resist_up: { base: { milliPercentage: 3200 }, per_lv_up: { milliPercentage: 200 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }]
  },
  85: {
    no: 85,
    active: [{
      normal: {
        damage_deal: {
          base: { milliPercentage: 122500 },
          per_lv_up: { milliPercentage: 10500 }
        },
        range: 3,
        cost: 4,
        area: 'single',
        effects: [{
          details: {
            target: {
              marked: { term: { for_rounds: 2 } },
              damage_taken_increased: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
            }
          }
        }, {
          conditions: [{ trigger: 'critical' }],
          details: {
            self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } },
            target: { status_resist_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } } }
          }
        }]
      },
      fleet_shelling_mode: {
        damage_deal: {
          base: { milliPercentage: 200000 },
          per_lv_up: { milliPercentage: 10000 }
        },
        range: 6,
        cost: 10,
        area: 'all',
        effects: [{
          details: {
            self: {
              ignore_protect: {},
              defense_penetration: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 5000 } },
              form_change: { form: 'normal' },
              tag_release: { tag: 'readying_bombardment' }
            }
          }
        }, {
          conditions: [{ trigger: 'critical' }],
          details: { target: { effect_removal: { effect: 'barrier' } } }
        }, {
          conditions: [{ state: { self: [{ effected: 'reconnaissance' }] } }],
          details: { self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } } }
        }]
      }
    }, {
      normal: {
        range: 0,
        cost: 10,
        area: {
          1: 'all_adjacent',
          10: 'fixed_all'
        },
        effects: [{
          details: {
            target: {
              ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 100000 }, term: 'immediate' },
              atk_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
            }
          }
        }, {
          conditions: [{ state: { target: [{ unit: 'horizon' }, { unit: 'squad_21' }] } }],
          details: {
            target: {
              ap_up: { base: { microValue: 500000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' },
              atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
            }
          }
        }]
      },
      fleet_shelling_mode: {
        range: 0,
        cost: 2,
        area: 'self',
        effects: [{
          details: {
            self: {
              form_change: { form: 'normal' },
              all_debuff_removal: {}
            }
          }
        }]
      }
    }],
    passive: [{
      area: {
        1: 'all_adjacent',
        10: 'fixed_all'
      },
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          target: {
            eva_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            damage_reduction: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            status_resist_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'be_killed' }],
        details: {
          target: {
            eva_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            damage_reduction: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            status_resist_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } },
            counterattack: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 10000 }, term: { for_rounds: 2 } },
          }
        }
      }]
    }, {
      area: {
        1: 'cross_adjacent',
        10: 'all_adjacent'
      },
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 800 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 8000 }, per_lv_up: { milliPercentage: 400 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 4000 }, per_lv_up: { milliPercentage: 200 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ effected: 'follow_up_attack' }] } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 8000 }, per_lv_up: { milliPercentage: 400 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 4000 }, per_lv_up: { milliPercentage: 200 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 2000 }, per_lv_up: { milliPercentage: 100 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ effected: 'reconnaissance' }] } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 8000 }, per_lv_up: { milliPercentage: 400 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 4000 }, per_lv_up: { milliPercentage: 200 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 2000 }, per_lv_up: { milliPercentage: 100 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: { self: { tag_stack: { tag: 'readying_bombardment', term: 'infinite' } } }
      }, {
        conditions: [{ trigger: 'idle', state: { self: [{ tagged: 'readying_bombardment' }] } }],
        details: { self: { form_change: { form: 'fleet_shelling_mode' } } }
      }, {
        conditions: [{ trigger: 'start_wave', state: { target: [{ unit: 'artillery_type_active' }] } }],
        details: { target: { ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 100000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'artillery_type_active' }] } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ effected: 'reconnaissance' }] } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'end_wave' }],
        details: { self: { reconnaissance: {} } }
      }]
    }]
  },
  87: {
    no: 87,
    active: [{
      damage_deal: {
        base: { milliPercentage: 137500 },
        per_lv_up: { milliPercentage: 12500 }
      },
      range: 4,
      cost: 5,
      area: 'single',
      effects: [{
        details: { self: { anti_flying_type: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }, {
        conditions: [{ state: { target: [{ effected: 'def_down' }, { effected: 'eva_down' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 132000 },
        per_lv_up: { milliPercentage: 12000 }
      },
      range: 4,
      cost: 8,
      area: 'fan_shape',
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_damage: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 } } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: { self: { damage_reduction: { base: { milliPercentage: 8000 }, per_lv_up: { milliPercentage: 1000 }, term: 'infinite' } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ hp_less_or_equal: 75 }] } }],
        details: { self: { damage_reduction: { base: { milliPercentage: 8000 }, per_lv_up: { milliPercentage: 1000 }, term: 'infinite', max_stack: 1 } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ hp_less_or_equal: 50 }] } }],
        details: { self: { damage_reduction: { base: { milliPercentage: 8000 }, per_lv_up: { milliPercentage: 1000 }, term: 'infinite', max_stack: 1 } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        details: { self: { enmity: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'kill' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 300 }, term: 'infinite' },
            ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' }
          }
        }
      }, {
        conditions: [{ trigger: 'be_hit' }],
        details: { self: { spd_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: { self: { battle_continuation: { base: { value: 120 }, per_lv_up: { value: 120 }, term: 'infinite', times: 1, cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'revive' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: 'infinite', cannot_be_dispelled: true },
            cri_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: 'infinite', cannot_be_dispelled: true },
            spd_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: 'infinite', cannot_be_dispelled: true },
            ignore_barrier_dr: { term: 'infinite', cannot_be_dispelled: true }
          }
        }
      }]
    }]
  },
  88: {
    no: 88,
    active: [{
      damage_deal: {
        base: { milliPercentage: 127000 },
        per_lv_up: { milliPercentage: 11000 }
      },
      range: 3,
      cost: 5,
      area: 'single',
      effects: [{
        details: {
          target: {
            provoked: { term: { for_rounds: 2 } },
            acc_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 241500 },
        per_lv_up: { milliPercentage: 21500 }
      },
      range: 4,
      cost: 8,
      area: 'single',
      effects: [{
        conditions: [{ state: { target: [{ effected: 'provoked' }, { effected: 'def_down' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 2000 } } } }
      }]
    }],
    passive: [{
      area: 'right_direction',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            acc_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 4000 }, term: { for_rounds: 1 } }
          },
          target: {
            acc_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            target_protect: { term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'attack' }],
        details: { self: { eva_up: { base: { milliPercentage: 17500 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 2 }, max_stack: 2 } } }
      }, {
        conditions: [{ trigger: 'attack', state: { target: [{ unit: 'flying' }, { unit: 'heavy' }] } }],
        details: { target: { follow_up_attack: { term: { for_rounds: 2 } } } }
      }]
    }, {
      area: {
        1: 'cross',
        10: 'fixed_all'
      },
      effects: [{
        conditions: [{ trigger: 'attack' }],
        details: {
          self: {
            atk_up: { tag: 'hubris', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: 'infinite', max_stack: 2 },
            acc_up: { tag: 'hubris', base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: 'infinite', max_stack: 2 },
            cri_up: { tag: 'hubris', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: 'infinite', max_stack: 2 },
            spd_up: { tag: 'hubris', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: 'infinite', max_stack: 2 }
          }
        }
      }, {
        conditions: [{ trigger: 'be_hit' }],
        details: { self: { effect_removal: { tag: 'hubris', effects: ['atk_up', 'acc_up', 'cri_up', 'spd_up'] } } }
      }, {
        conditions: [{ trigger: 'kill' }],
        details: {
          self: {
            atk_up: { tag: 'arrogance_and_anger', base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            acc_up: { tag: 'arrogance_and_anger', base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } },
            cri_up: { tag: 'arrogance_and_anger', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            spd_up: { tag: 'arrogance_and_anger', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            eva_up: [
              { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } },
              { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 2 } }
            ]
          },
          target: {
            atk_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            acc_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            spd_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'kill', state: { self: [{ tagged: 'arrogance_and_anger' }] } }],
        details: { self: { eva_up: { base: { milliPercentage: 17500 }, per_lv_up: { milliPercentage: 2500 }, term: 'infinite' } } }
      }]
    }]
  },
  89: {
    no: 89,
    active: [{
      interception: {
        damage_deal: {
          base: { milliPercentage: 143500 },
          per_lv_up: { milliPercentage: 13000 }
        },
        range: 4,
        cost: 5,
        area: 'single',
        effects: [{
          details: {
            self: { anti_flying_type: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } },
            target: {
              marked: { term: { for_rounds: 2 } },
              damage_taken_increased: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 2 } }
            }
          }
        }]
      },
      bombarding: {
        damage_deal: {
          base: { milliPercentage: 195000 },
          per_lv_up: { milliPercentage: 17000 }
        },
        range: 5,
        cost: 10,
        area: 'twin',
        effects: [{
          conditions: [{ state: { target: [{ effected: 'marked' }, { effected: 'immovable' }] } }],
          details: { self: { additional_damage: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 } } } }
        }]
      }
    }, {
      interception: {
        range: 0,
        cost: 9,
        area: {
          1: 'cross_adjacent',
          10: 'all_adjacent'
        },
        effects: [{
          conditions: [{ trigger: 'start_wave', state: { target: [{ unit: 'light' }, { unit: 'flying' }] } }],
          details: {
            target: {
              ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' },
              atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
            }
          }
        }, {
          conditions: [{ trigger: 'start_wave', state: { target: [{ unit: { type: 'light', alias: 'horizon' } }, { unit: { type: 'flying', alias: 'horizon' } }] } }],
          details: {
            target: {
              ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' },
              atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
              follow_up_attack: { term: { for_rounds: 2 } }
            }
          }
        }, {
          conditions: [{ trigger: 'start_wave', state: { target: [{ unit: 'heavy' }] } }],
          details: {
            target: {
              ap_up: { base: { microValue: 2000000 }, per_lv_up: { microValue: 100000 }, term: 'immediate' },
              atk_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
              follow_up_attack: { term: { for_rounds: 2 } }
            }
          }
        }]
      },
      bombarding: {
        damage_deal: {
          base: { milliPercentage: 195000 },
          per_lv_up: { milliPercentage: 17000 }
        },
        range: 5,
        cost: 10,
        area: {
          1: 'cross_strong_explosion',
          10: 'all_strong_explosion'
        },
        effects: [{
          details: {
            self: {
              ignore_protect: {},
              ap_down: { base: { microValue: 10000000 }, per_lv_up: { microValue: -340000 }, term: 'immediate' },
              spd_down: { base: { milliPercentage: 95000 }, per_lv_up: { milliPercentage: -2500 }, term: { for_rounds: 2 }, cannot_be_dispelled: true }
            }
          }
        }, {
          conditions: [{ state: { target: [{ effected: 'marked' }, { effected: 'immovable' }] } }],
          details: { self: { additional_damage: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 500 } } } }
        }]
      }
    }],
    passive: [{
      area: {
        1: 'cross_adjacent',
        10: 'all_adjacent'
      },
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          target: {
            acc_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      interception: {
        area: 'self',
        effects: [{
          conditions: [{ trigger: 'start_round' }],
          details: {
            self: {
              atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
              acc_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 1 } },
              spd_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
              defense_penetration: { base: { milliPercentage: 22000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
              damage_reduction: { base: { milliPercentage: 22000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
            }
          }
        }, {
          conditions: [{ trigger: 'idle' }],
          details: {
            self: {
              form_change: { form: 'bombarding' },
              atk_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } },
              defense_penetration: { base: { milliPercentage: 8000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
            }
          }
        }]
      },
      bombarding: {
        area: 'self',
        effects: [{
          conditions: [{ trigger: 'start_round' }],
          details: {
            self: {
              atk_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
              defense_penetration: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 4000 }, term: { for_rounds: 1 } },
              damage_reduction: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
              anti_light_type: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
              anti_heavy_type: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            }
          }
        }, {
          conditions: [{ trigger: 'idle' }],
          details: {
            self: {
              form_change: { form: 'interception' },
              acc_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 1 } },
              spd_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
              damage_reduction: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
            }
          }
        }]
      }
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { self: [{ effected: 'follow_up_attack' }] } }],
        details: {
          self: {
            acc_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ effected: 'follow_up_attack', form: 'bombarding' }] } }],
        details: { self: { ignore_barrier_dr: { term: { for_rounds: 1 } } } }
      }]
    }]
  },
  90: {
    no: 90,
    active: [{
      damage_deal: {
        base: { milliPercentage: 101000 },
        per_lv_up: { milliPercentage: 9000 }
      },
      range: 3,
      cost: 6,
      area: 'twin',
      effects: [{
        details: {
          self: { ignore_protect: {} },
          target: {
            ap_down: { base: { microValue: 50000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' },
            eva_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            acc_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'use_this_active' }],
        details: { self: { acc_down: { milliPercentage: 30000 } } }
      }, {
        conditions: [{ state: { self: [{ tagged: 'hardpoint_mount_support' }] } }],
        details: {
          target: {
            ap_down: { base: { microValue: 50000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' },
            eva_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            acc_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'critical', state: { self: [{ tagged: 'hardpoint_mount_equipment' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 188500 },
        per_lv_up: { milliPercentage: 17000 }
      },
      range: 4,
      cost: 7,
      area: 'single',
      effects: [{
        details: {
          target: {
            marked: { term: { for_rounds: 2 }, max_stack: 1 },
            damage_taken_increased: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            acc_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { self: [{ tagged: 'hardpoint_mount_support' }] } }],
        details: {
          target: {
            damage_taken_increased: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            acc_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            effect_removal: { effect: 'acc_up' }
          }
        }
      }, {
        conditions: [{ trigger: 'critical', state: { self: [{ tagged: 'hardpoint_mount_equipment' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } } }
      }]
    }],
    passive: [{
      area: 'row_adjacent_with_self_and_left_direction',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          target: {
            cri_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ tagged: 'hardpoint_mount_support' }] } }],
        details: {
          target: {
            cri_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { in_squad: 'horizon' } } }],
        details: { target: { atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 89 }] } }],
        details: { target: { follow_up_attack: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'end_wave' }],
        details: { self: { reconnaissance: {} } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { eva_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ equipped: 'armor_penetrating_round' }, { equipped: 'tactical_bombing_equipment' }, { equipped: 'horns_of_the_evil_overlord' }] } }],
        details: {
          self: {
            atk_up: { tag: 'hardpoint_mount_equipment', base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            defense_penetration: { tag: 'hardpoint_mount_equipment', base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ equipped: 'recon_drone' }, { equipped: 'crystal_ball_of_fate' }, { equipped: 'enhanced_observation_gear' }] } }],
        details: { self: { acc_up: { tag: 'hardpoint_mount_support', base: { milliPercentage: 3000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } } } }
      }]
    }]
  },
  91: {
    no: 91,
    active: [{
      damage_deal: {
        base: { milliPercentage: 136500 },
        per_lv_up: { milliPercentage: 12000 }
      },
      range: 2,
      cost: 6,
      area: 'single',
      effects: [{
        details: {
          target: {
            provoked: { term: { for_rounds: 2 } },
            acc_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            cri_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            spd_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { squad: { in_squad: 93 } } }],
        details: { self: { cooperative_attack: { unit: 93, active: 2 } } }
      }, {
        conditions: [{ trigger: 'use_this_active' }],
        details: { self: { acc_up: { base: { milliPercentage: 9000 }, per_lv_up: { milliPercentage: 9000 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 122500 },
        per_lv_up: { milliPercentage: 10500 }
      },
      range: 4,
      cost: 8,
      area: 'row_toward_front',
      effects: [{
        details: {
          self: {
            ignore_protect:{},
            defense_penetration: { base: { milliPercentage: 48000 }, per_lv_up: { milliPercentage: 2000 } }
          }
        }
      }, {
        conditions: [{ state: { self: [{ in_back_line: {} }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } } }
      }, {
        conditions: [{ state: { self: [{ in_mid_line: {} }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 } } } }
      }, {
        conditions: [{ state: { self: [{ stack_ge: { tag: 'where_are_you_looking_at', value: 3 } }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 2000 } } } }
      }, {
        conditions: [{ trigger: 'hit' }],
        details: {
          target: {
            acc_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } },
            marked: { term: { for_rounds: 2 } },
            immovable: { term: { for_rounds: 2 } },
            effect_removal: { effect: 'counterattack' }
          }
        }
      }, {
        conditions: [{ trigger: 'use_this_active' }],
        details: { self: { acc_up: { base: { milliPercentage: 9000 }, per_lv_up: { milliPercentage: 9000 } } } }
      }]
    }],
    passive: [{
      area: {
        1: 'all',
        10: 'fixed_all'
      },
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: { type: 'flying', role: 'attacker' } }, { unit: { type: 'flying', role: 'supporter' } }] } }],
        details: { target: { target_protect: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ stack_ge: { tag: 'where_are_you_looking_at', value: 3 } }] } }],
        details: { target: { effect_removal: { effects: ['eva_down', 'spd_down'] } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'evade' }],
        details: { self: { spd_up: { tag: 'where_are_you_looking_at', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: 'infinite', max_stack: 3 } } }
      }, {
        conditions: [{ trigger: 'be_attacked' }],
        details: { self: { eva_up: { base: { milliPercentage: 33000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 2 }, max_stack: 2 } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { eva_up: { base: { milliPercentage: 45000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'attack' }],
        details: {
          self: {
            effect_removal: { effects: ['eva_down', 'spd_down'] },
            eva_up: { base: { milliPercentage: 53000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 2 }, max_stack: 2 }
          }
        }
      }]
    }]
  },
  92: {
    no: 92,
    active: [{
      damage_deal: {
        base: { milliPercentage: 136500 },
        per_lv_up: { milliPercentage: 12000 }
      },
      range: 3,
      cost: 6,
      area: 'single',
      effects: [{
        conditions: [{ state: { target: [{ effected: 'marked' }, { effected: 'immovable' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 27000 }, per_lv_up: { milliPercentage: 2000 } } } }
      }, {
        conditions: [{ trigger: 'hit', state: { squad: { in_squad: 91 } } }],
        details: { self: { cooperative_attack: { unit: 91, active: 2 } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 122500 },
        per_lv_up: { milliPercentage: 10500 }
      },
      range: 4,
      cost: 8,
      area: {
        1: 'line_strong_explosion',
        10: 'cross_strong_explosion'
      },
      effects: [{
        details: { self: { additional_fire_damage: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 } } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: {
          self: {
            acc_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 3000 }, term: 'infinite' },
            eva_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 5000 }, term: 'infinite' },
            defense_penetration: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 4000 }, term: 'infinite' }
          }
        }
      }, {
        conditions: [{ trigger: 'end_wave' }],
        details: { self: { reconnaissance:{} } }
      }, {
        conditions: [{ trigger: 'start_wave', state: { self: [{ effected: 'reconnaissance' }] } }],
        details: { self: { ap_up: { base: { microValue: 100000 }, per_lv_up: { microValue: 100000 } } } }
      }]
    }, {
      area: 'cross_adjacent_without_back',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 18250 }, per_lv_up: { milliPercentage: 750 } },
            cri_up: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 1000 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'flying' }, { unit: 'squad_21' }] } }],
        details: { target: { follow_up_attack: { term: { for_rounds: 1 } } } }
      }]
    }]
  },
  93: {
    no: 93,
    active: [{
      damage_deal: {
        base: { milliPercentage: 161500 },
        per_lv_up: { milliPercentage: 14500 }
      },
      range: 3,
      cost: 8,
      area: 'line',
      effects: [{
        details: {
          self: { anti_flying_type: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 } } },
          target: { eva_down: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 2 } } }
        }
      }, {
        conditions: [{ state: { target: [{ effected: 'marked' }, { effected: 'immovable' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 27000 }, per_lv_up: { milliPercentage: 2000 } } } }
      }, {
        conditions: [{ state: { squad: { in_squad: 91 } } }],
        details: { self: { cooperative_attack: { unit: 91, active: 2 } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 210000 },
        per_lv_up: { milliPercentage: 18500 }
      },
      range: 5,
      cost: 8,
      area: 'single',
      effects: [{
        details: {
          self: {
            ignore_protect: {},
            defense_penetration: { base: { milliPercentage: 5500 }, per_lv_up: { milliPercentage: 500 } }
          }
        }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_damage: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 } } } }
      }, {
        conditions: [{ state: { self: [{ equipped: 'anti_light_os' }] } }],
        details: { self: { anti_light_type: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 } } } }
      }, {
        conditions: [{ state: { self: [{ equipped: 'anti_heavy_os' }] } }],
        details: { self: { anti_heavy_type: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 } } } }
      }, {
        conditions: [{ state: { self: [{ equipped: 'anti_air_os' }] } }],
        details: { self: { anti_flying_type: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 } } } }
      }, {
        conditions: [{ state: { self: [{ equipped: 'anti_light_flying_os' }] } }],
        details: {
          self: {
            anti_light_type: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 } },
            anti_flying_type: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 } }
          }
        }
      }, {
        conditions: [{ state: { self: [{ equipped: 'anti_heavy_light_os' }] } }],
        details: {
          self: {
            anti_light_type: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 } },
            anti_heavy_type: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 } }
          }
        }
      }, {
        conditions: [{ state: { self: [{ equipped: 'anti_flying_heavy_os' }] } }],
        details: {
          self: {
            anti_heavy_type: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 } },
            anti_flying_type: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 } }
          }
        }
      }, {
        conditions: [{ trigger: 'use_this_active' }],
        details: { self: { acc_up: { base: { milliPercentage: 9000 }, per_lv_up: { milliPercentage: 9000 } } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { eva_up: { base: { milliPercentage: 45000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_wave' }],
        details: { self: { minimize_damage: { tag: 'stealth_camouflage', times: { 1: 1, 10: 2 }, term: 'infinite' } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ tagged: 'stealth_camouflage' }] } }],
        details: { self: { atk_up: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'cross',
      effects: [{
        conditions: [{ trigger: 'start_wave', state: { target: [{ unit: 'flying' }] } }],
        details: { target: { ap_up: { base: { microValue: 100000 }, per_lv_up: { microValue: 100000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'flying' }] } }],
        details: {
          target: {
            acc_up: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'light' }, { unit: 'heavy' }] } }],
        details: {
          target: {
            acc_up: { base: { milliPercentage: 8000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 8000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 5500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 4000 }, term: { for_rounds: 1 } },
            effect_removal: { effect: 'range_down', term: 'immediate' }
          }
        }
      }]
    }]
  },
  95: {
    no: 95,
    active: [{
      damage_deal: {
        base: { milliPercentage: 127000 },
        per_lv_up: { milliPercentage: 11000 }
      },
      range: 3,
      cost: 6,
      area: 'single',
      effects: [{
        details: { target: { acc_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ state: { target: [{ effected: 'provoked' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } } }
      }, {
        conditions: [{ state: { squad: { in_squad: 93 } } }],
        details: { self: { cooperative_attack: { unit: 93, active: 2 } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 110500 },
        per_lv_up: { milliPercentage: 10000 }
      },
      range: 4,
      cost: 8,
      area: 'line',
      effects: [{
        details: {
          target: {
            provoked: { term: { for_rounds: 2 } },
            acc_down: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 2 } },
            effect_removal: { effect: 'acc_up' }
          }
        }
      }, {
        conditions: [{ trigger: 'hit' }],
        details: {
          target: {
            marked: { term: { for_rounds: 2 } },
            immovable: { term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'use_this_active' }],
        details: { self: { acc_up: { base: { milliPercentage: 9000 }, per_lv_up: { milliPercentage: 9000 } } } }
      }]
    }],
    passive: [{
      area: {
        1: 'line',
        5: 'cross',
        10: 'fixed_all'
      },
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'attacker' }, { unit: 'supporter' }] } }],
        details: { target: { target_protect: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'attacker', hp_less_or_equal: 50 }, { unit: 'supporter', hp_less_or_equal: 50 }] } }],
        details: { target: { ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { eva_up: { base: { milliPercentage: 45000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'hit' }],
        details: { self: { eva_up: { base: { milliPercentage: 22500 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 2 }, max_stack: 3 } } }
      }, {
        conditions: [{ trigger: 'evade' }],
        details: { self: { ap_up: { base: { microValue: 500000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' } } }
      }]
    }]
  },
  96: {
    no: 96,
    active: [{
      damage_deal: {
        base: { milliPercentage: 127000 },
        per_lv_up: { milliPercentage: 11000 }
      },
      range: 3,
      cost: 5,
      area: 'single',
      effects: [{
        details: { self: { anti_flying_type: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }, {
        conditions: [{ state: { target: [{ effected: 'marked' }, { effected: 'eva_down' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }, {
        conditions: [{ trigger: 'hit', state: { squad: { in_squad: 91 } } }],
        details: { self: { cooperative_attack: { unit: 91, active: 2 } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 241500 },
        per_lv_up: { milliPercentage: 21500 }
      },
      range: 4,
      cost: 8,
      area: 'single',
      effects: [{
        details: {
          self: {
            anti_heavy_type: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } },
            defense_penetration: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 4000 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ effected: 'marked' }, { effected: 'immovable' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 27000 }, per_lv_up: { milliPercentage: 2000 } } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { self: [{ in_front_line: {} }] } }],
        details: {
          self: {
            acc_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ in_mid_line: {} }] } }],
        details: {
          self: {
            acc_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 4000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ in_back_line: {} }] } }],
        details: {
          self: {
            acc_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'evade' }],
        details: {
          self: {
            atk_up: { tag: 'overwhelming_cuteness', base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 1000 }, max_stack: 3 },
            counterattack: { base: { milliPercentage: 67000 }, per_lv_up: { milliPercentage: 4000 } }
          }
        }
      }, {
        conditions: [{ trigger: 'be_hit' }],
        details: { self: { effect_removal: { tag: 'overwhelming_cuteness', effect: 'atk_up' } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: {
          self: {
            marked: { term: { for_rounds: { 1: 2, 10: 3 } } },
            eva_up: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: { 1: 2, 10: 3 } } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        details: { self: { cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 } } } }
      }, {
        conditions: [{ trigger: 'kill' }],
        details: { self: { ap_up: { base: { microValue: 100000 }, per_lv_up: { microValue: 100000 } } } }
      }]
    }]
  },
  101: {
    no: 101,
    active: [{
      damage_deal: {
        base: { milliPercentage: 100000 },
        per_lv_up: { milliPercentage: 7500 }
      },
      range: 3,
      cost: 9,
      area: 'row_toward_front',
      effects: [{
        details: {
          target: {
            marked: { term: { for_rounds: 2 }, max_stack: 1 },
            damage_taken_increased: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 2 } },
            eva_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'use_this_active' }],
        details: { self: { acc_up: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 6000 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 200000 },
        per_lv_up: { milliPercentage: 10000 }
      },
      range: 5,
      cost: 10,
      area: 'all_strong_explosion',
      effects: [{
        details: {
          self: {
            ignore_protect: {},
            spd_down: { base: { milliPercentage: 75000 }, per_lv_up: { milliPercentage: -2000 }, cannot_be_dispelled: true }
          }
        }
      }, {
        conditions: [{ state: { self: [{ effected: 'reconnaissance' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 } } } }
      }]
    }],
    passive: [{
      area: 'cross_adjacent',
      effects: [{
        conditions: [{ trigger: 'idle' }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            cri_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            defense_penetration: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }, {
      area: 'all_adjacent',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'bioroid' }] } }],
        details: {
          target: {
            spd_up: { base: { milliPercentage: 3000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } },
            ap_up: { base: { microValue: 500000 }, per_lv_up: { microValue: 25000 }, term: 'immediate' }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'ags' }] } }],
        details: {
          target: {
            spd_up: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { defense_penetration: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'end_wave' }],
        details: { self: { reconnaissance: {} } }
      }]
    }]
  },
  102: {
    no: 102,
    active: [{
      damage_deal: {
        base: { milliPercentage: 136500 },
        per_lv_up: { milliPercentage: 12000 }
      },
      range: 2,
      cost: 6,
      area: 'single',
      effects: [{
        details: {
          target: {
            def_down: [
              { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 1750 }, term: { for_rounds: 1 } },
              { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 3 } }
            ]
          }
        }
      }]
    }, {
      range: 6,
      cost: 8,
      area: 'single',
      effects: [{
        details: {
          self: { barrier: { base: { value: 150 }, per_lv_up: { value: 150 }, term: { for_rounds: 3 } } },
          target: { target_protect: { term: { for_rounds: 3 } } }
        }
      }]
    }],
    passive: [{
      area: 'back',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: { column_protect: { term: { for_rounds: 1 } } },
          target: {
            eva_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            damage_reduction: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 }  }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            def_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 }  },
            fire_resist_up: { base: { milliPercentage: 33000 }, per_lv_up: { milliPercentage: 1750 }, term: { for_rounds: 1 }  },
            ice_resist_up: { base: { milliPercentage: 33000 }, per_lv_up: { milliPercentage: 1750 }, term: { for_rounds: 1 }  },
            electric_resist_up: { base: { milliPercentage: 33000 }, per_lv_up: { milliPercentage: 1750 }, term: { for_rounds: 1 }  },
            status_resist_up: { base: { milliPercentage: 33000 }, per_lv_up: { milliPercentage: 1750 }, term: { for_rounds: 1 }  }
          }
        }
      }]
    }]
  },
  103: {
    no: 103,
    active: [{
      damage_deal: {
        base: { milliPercentage: 142000 },
        per_lv_up: { milliPercentage: 11000 },
        attribute: 'fire'
      },
      range: 2,
      cost: 6,
      area: 'single_and_front_middle_explosion',
      effects: [{
        details: { target: { fixed_fire_damage_over_time: { tag: 'ignite', base: { value: 40 }, per_lv_up: { value: 30 }, term: { for_rounds: 3 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 255000 },
        per_lv_up: { milliPercentage: 21500 }
      },
      range: 3,
      cost: 9,
      area: 'single',
      effects: [{
        details: { self: { defense_penetration: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 4000 } } } }
      }, {
        conditions: [{ state: { target: [{ effected: 'marked' }, { effected: 'immovable' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 } } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'attack' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 2 } },
            eva_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 2 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 2 } },
          }
        }
      }]
    }]
  },
  104: {
    no: 104,
    active: [{
      damage_deal: {
        base: { milliPercentage: 152500 },
        per_lv_up: { milliPercentage: 13500 }
      },
      range: 4,
      cost: 8,
      area: 'row_toward_front',
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: {
          self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } },
          target: { effect_removal: { effect: 'damage_reduction' } }
        }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 249500 },
        per_lv_up: { milliPercentage: 22500 }
      },
      range: 2,
      cost: 8,
      area: 'single',
      effects: [{
        details: {
          self: {
            ignore_barrier_dr: {},
            enmity: { base: { milliPercentage: 23000 }, per_lv_up: { milliPercentage: 3000 } }
          }
        }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            acc_up: { tag: 'observation_data_reception', base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 500 }, term: 'infinite', max_stack: 2 },
            cri_up: { tag: 'observation_data_reception', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: 'infinite', max_stack: 2 }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ stack_ge: { tag: 'observation_data_reception', effect: 'acc_up', value: 2 } }] } }],
        details: { self: { effect_removal: { effect: 'acc_down' } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ stack_ge: { tag: 'observation_data_reception', effect: 'cri_up', value: 2 } }] } }],
        details: { self: { atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            def_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
            damage_reduction: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            fire_resist_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            ice_resist_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            electric_resist_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            status_resist_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }]
  },
  106: {
    no: 106,
    active: [{
      damage_deal: {
        base: { milliPercentage: 94500 },
        per_lv_up: { milliPercentage: 8000 }
      },
      range: 4,
      cost: 5,
      area: 'single',
      effects: [{
        details: {
          target: {
            eva_down: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 2 } },
            immovable: { term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { self: [{ tagged: 'guiding_technique' }] } }],
        details: {
          target: {
            damage_taken_increased: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } },
            fire_resist_down: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 2 } },
            ice_resist_down: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 2 } },
            electric_resist_down: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { self: [{ tagged: 'balance_seeker' }] } }],
        details: {
          target: {
            atk_down: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 2 } },
            cri_down: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { self: [{ tagged: 'secretive_research' }] } }],
        details: {
          target: {
            acc_down: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 2 } },
            spd_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }, {
      range: 6,
      cost: 6,
      area: 'single',
      effects: [{
        details: { target: { ap_up: { base: { microValue: 2000000 }, per_lv_up: { microValue: 100000 } } } }
      }, {
        conditions: [{ state: { self: [{ tagged: 'guiding_technique' }] } }],
        details: {
          target: {
            eva_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } },
            spd_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { self: [{ tagged: 'balance_seeker' }] } }],
        details: {
          target: {
            def_up: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 2 } },
            damage_reduction: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { self: [{ tagged: 'secretive_research' }] } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 2 } },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { self: [{ in_front_line: {} }] } }],
        details: { self: { spd_up: { tag: 'guiding_technique', base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ in_mid_line: {} }] } }],
        details: { self: { damage_reduction: { tag: 'balance_seeker', base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ in_back_line: {} }] } }],
        details: {
          self: {
            acc_up: { tag: 'secretive_research', base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } },
            eva_up: { tag: 'secretive_research', base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } }
          }
        }
      },]
    }, {
      area: 'right_direction',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'all_adjacent',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ hp_less_or_equal: 90 }] } }],
        details: {
          target: {
            effect_removal: { effect: 'def_down', term: 'immediate' },
            barrier: { base: { value: 60 }, per_lv_up: { value: 30 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }]
  },
  107: {
    no: 107,
    active: [{
      damage_deal: {
        base: { milliPercentage: 313000 },
        per_lv_up: { milliPercentage: 28000 }
      },
      range: 1,
      cost: 10,
      area: 'single',
      effects: [{
        details: { target: { effect_removal: { effect: 'damage_reduction' } } }
      }, {
        conditions: [{ state: { target: [{ effected: 'immovable' }, { effected: 'marked' }] } }],
        details: { target: { stunned: { rate: { milliPercentage: 50000 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 127000 },
        per_lv_up: { milliPercentage: 11000 }
      },
      range: 3,
      cost: 6,
      area: 'single',
      effects: [{
        details: {
          target: {
            pull: { value: 2 },
            spd_down: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 2 } },
            immovable: { term: { for_rounds: 2 } }
          }
        }
      }]
    }],
    passive: [{
      area: 'cross',
      effects: [{
        conditions: [{ trigger: 'start_wave', state: { squad: { in_squad: 110 } } }],
        details: { self: { spd_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 500 }, term: 'infinite' } } }
      }, {
        conditions: [{ trigger: 'enemy_killed' }],
        details: {
          target: {
            atk_up: { tag: 'wreckage_recycling', base: { milliPercentage: 3000 }, per_lv_up: { milliPercentage: 150 }, term: 'infinite' },
            def_up: { tag: 'wreckage_recycling', base: { milliPercentage: 4000 }, per_lv_up: { milliPercentage: 200 }, term: 'infinite' },
            exp_up: { tag: 'wreckage_recycling', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: 'infinite' }
          }
        }
      }]
    }, {
      area: {
        1: 'cross_adjacent',
        10: 'all_adjacent'
      },
      effects: [{
        conditions: [{ trigger: 'start_round', state: { self: [{ tagged: 'wreckage_recycling' }] } }],
        details: { target: { ap_up: { base: { microValue: 550000 }, per_lv_up: { microValue: 50000 } } } }
      }]
    }]
  },
  108: {
    no: 108,
    active: [{
      damage_deal: {
        base: { milliPercentage: 113500 },
        per_lv_up: { milliPercentage: 9500 }
      },
      range: 3,
      cost: 4,
      area: 'single',
      effects: [{
        details: { target: { def_down: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 3 } } } }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 99500 },
        per_lv_up: { milliPercentage: 9000 }
      },
      range: 4,
      cost: 6,
      area: {
        1: 'line',
        5: 'cross'
      },
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ trigger: 'kill' }],
        details: { around: { fixed_damage: { base: { milliPercentage: 75000 }, per_lv_up: { milliPercentage: 3750 } } } }
      }, {
        conditions: [{ trigger: 'critical', state: { self: [{ tagged: 'new_blasting_tool' }], target: [{ unit: 'light' }, { unit: 'heavy' }] } }],
        details: { target: { damage_taken_increased: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 33000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            anti_light_type: { tag: 'new_blasting_tool', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 } },
            anti_heavy_type: { tag: 'new_blasting_tool', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 } },
            damage_reduction: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 } },
            status_resist_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 3000 } }
          }
        }
      }]
    }]
  },
  109: {
    no: 109,
    active: [{
      damage_deal: {
        base: { milliPercentage: 195000 },
        per_lv_up: { milliPercentage: 17000 }
      },
      range: 2,
      cost: 7,
      area: 'single',
      effects: [{
        details: {
          target: {
            def_down: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 2 } },
            effect_removal: { effect: 'def_up' }
          }
        }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: {
          self: {
            additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } },
            effect_removal: { effect: 'damage_reduction' }
          }
        }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 110500 },
        per_lv_up: { milliPercentage: 10000 },
        attribute: 'ice'
      },
      range: 3,
      cost: 8,
      area: 'row_toward_front',
      effects: [{
        details: {
          self: { ignore_protect: {} },
          target: { push: { value: 2 } }
        }
      }, {
        conditions: [{ trigger: 'hit' }],
        details: { target: { damage_taken_increased: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ state: { target: [{ tagged: 'wet' }] } }],
        details: {
          target: {
            all_buff_removal: { tag: 'freeze' },
            stunned: { tag: 'freeze', rate: { milliPercentage: 50000 } }
          }
        }
      }]
    }],
    passive: [{
      area: 'line_with_back',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { self: [{ in_front_line: {} }] } }],
        details: {
          target: {
            spd_up: { base: { milliPercentage: 7500 }, per_lv_up: { milliPercentage: 375 }, term: { for_rounds: 1 } },
            fire_resist_up: { base: { milliPercentage: 22500 }, per_lv_up: { milliPercentage: 1125 }, term: { for_rounds: 1 } },
            ice_resist_up: { base: { milliPercentage: 22500 }, per_lv_up: { milliPercentage: 1125 }, term: { for_rounds: 1 } },
            electric_resist_up: { base: { milliPercentage: 22500 }, per_lv_up: { milliPercentage: 1125 }, term: { for_rounds: 1 } },
            status_resist_up: { base: { milliPercentage: 22500 }, per_lv_up: { milliPercentage: 1125 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ in_mid_line: {} }, { in_back_line: {} }] } }],
        details: {
          target: {
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } },
            fire_resist_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            ice_resist_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            electric_resist_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            status_resist_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'line_with_back',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            damage_reduction: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
            ice_resist_up: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ tagged: 'wet' }] } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 7500 }, per_lv_up: { milliPercentage: 375 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 12500 }, per_lv_up: { milliPercentage: 625 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ tagged: 'wet' }] } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 7500 }, per_lv_up: { milliPercentage: 375 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 12500 }, per_lv_up: { milliPercentage: 625 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }]
  },
  110: {
    no: 110,
    active: [{
      damage_deal: {
        base: { milliPercentage: 110000 },
        per_lv_up: { milliPercentage: 5500 }
      },
      range: 3,
      cost: 5,
      area: 'single',
      effects: [{
        details: {
          target: {
            push: { value: 1 },
            ap_down: { base: { microValue: 500000 }, per_lv_up: { microValue: 25000 } }
          }
        }
      }]
    }, {
      range: 3,
      cost: 7,
      area: {
        1: 'line',
        5: 'cross'
      },
      effects: [{
        details: {
          target: {
            damage_taken_increased: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            status_resist_down: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 2 } },
            eva_down: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }],
    passive: []
  },
  111: {
    no: 111,
    active: [{
      damage_deal: {
        base: { milliPercentage: 53500 },
        per_lv_up: { milliPercentage: 4500 },
        attribute: 'ice'
      },
      range: 3,
      cost: 7,
      area: 'cross',
      effects: [{
        details: {
          target: {
            ice_resist_down: { tag: 'wet', base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 2 } },
            electric_resist_down: { tag: 'wet', base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 2 } },
            fire_resist_up: { tag: 'wet', base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 107500 },
        per_lv_up: { milliPercentage: 9000 },
        attribute: 'ice'
      },
      range: 3,
      cost: 7,
      area: 'single',
      effects: [{
        details: { target: { immovable: { term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ state: { target: [{ tagged: 'wet' }] } }],
        details: {
          target: {
            damage_taken_increased: { tag: 'freeze', base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } },
            stunned: { tag: 'freeze' }
          }
        }
      }, {
        conditions: [{ state: { squad: { in_squad: 179 } } }],
        details: { self: { cooperative_attack: { unit: 179, active: 2 } } }
      }]
    }],
    passive: [{
      area: 'all_adjacent_without_front_line',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'light' }, { unit: 'heavy' }] } }],
        details: {
          target: {
            spd_up: { base: { milliPercentage: 4000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            target_protect: { term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: { self: { battle_continuation: { base: { value: 100 }, per_lv_up: { value: 100 }, term: 'infinite', times: 1 } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            damage_reduction: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 3000 }, per_lv_up: { milliPercentage: 150 }, term: { for_rounds: 1 } },
            fire_resist_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            ice_resist_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }]
  },
  112: {
    no: 112,
    active: [{
      damage_deal: {
        base: { milliPercentage: 99500 },
        per_lv_up: { milliPercentage: 9000 }
      },
      range: 3,
      cost: 4,
      area: 'single',
      effects: [{
        details: {
          target: {
            provoked: { term: { for_rounds: 2 } },
            acc_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'hit', state: { squad: { in_squad: 115 } } }],
        details: { self: { cooperative_attack: { unit: 115, active: 2 } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 70000 },
        per_lv_up: { milliPercentage: 4750 }
      },
      range: 2,
      cost: 6,
      area: 'single_and_front',
      effects: [{
        details: {
          target: {
            atk_down: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            def_down: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            marked: { term: { for_rounds: 2 } },
            def_up: { base: { milliPercentage: 17000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } },
            damage_reduction: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } },
            fire_resist_up: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            ice_resist_up: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            electric_resist_up: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }]
  },
  113: {
    no: 113,
    active: [{
      damage_deal: {
        base: { milliPercentage: 107500 },
        per_lv_up: { milliPercentage: 9000 },
        attribute: 'electric'
      },
      range: 2,
      cost: 4,
      area: 'single',
      effects: [{
        details: {
          target: {
            provoked: { term: { for_rounds: 2 } },
            electric_resist_down: { base: { milliPercentage: 2500 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 3 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ effected: 'immovable' }] } }],
        details: { target: { stunned: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ state: { squad: { in_squad: 184 } } }],
        details: { self: { cooperative_attack: { unit: 184, active: 1 } } }
      }, {
        conditions: [{ state: { self: [{ equipped: 'chop_maker_ii' }] } }],
        details: { self: { additional_damage: { milliPercentage: 20000 } } }
      }]
    }, {
      range: 6,
      cost: 6,
      area: 'single',
      effects: [{
        details: {
          self: {
            damage_reduction: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 3 } },
            counterattack: { base: { milliPercentage: 80000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 3 } },
            range_up: { value: 1, term: { for_rounds: 2 } }
          },
          target: { target_protect: { term: { for_rounds: 3 } } }
        }
      }]
    }],
    passive: [{
      area: {
        1: 'back',
        5: 'cross_adjacent_without_front',
        10: 'all_adjacent'
      },
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: { def_up: { base: { milliPercentage: 9000 }, per_lv_up: { milliPercentage: 4000 }, term: { for_rounds: 1 } } },
          target: {
            cri_up: { base: { milliPercentage: 11500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            target_protect: { term: { for_rounds: 1 } },
            follow_up_attack: { term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: { damage_reduction: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } } },
          target: {
            atk_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 600 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 3000 }, per_lv_up: { milliPercentage: 300 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'city_guard' }] } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 600 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 3000 }, per_lv_up: { milliPercentage: 300 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 19000 }, per_lv_up: { milliPercentage: 4000 }, term: { for_rounds: 1 } },
            fire_resist_up: { base: { milliPercentage: 7000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            electric_resist_up: { base: { milliPercentage: 7000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'city_guard' }] } }],
        details: { target: { follow_up_attack: { term: { for_rounds: 1 } } } }
      }]
    }]
  },
  114: {
    no: 114,
    active: [{
      normal: {
        damage_deal: {
          base: { milliPercentage: 117000 },
          per_lv_up: { milliPercentage: 10000 }
        },
        range: 3,
        cost: 4,
        area: 'single',
        effects: [{
          details: {
            target: {
              atk_down: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
              acc_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
            }
          }
        }, {
          conditions: [{ trigger: 'hit', state: { squad: { in_squad: 112 } } }],
          details: { self: { cooperative_attack: { unit: 112, active: 2 } } }
        }]
      },
      offensive_tactics: {
        damage_deal: {
          base: { milliPercentage: 176000 },
          per_lv_up: { milliPercentage: 10000 }
        },
        range: 3,
        cost: 4,
        area: 'row_toward_front',
        effects: [{
          details: {
            target: {
              atk_down: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
              acc_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
            }
          }
        }, {
          conditions: [{ state: { squad: { in_squad: 179 } } }],
          details: { self: { cooperative_attack: { unit: 179, active: 1 } } }
        }]
      }
    }, {
      range: 6,
      cost: 6,
      area: 'single',
      effects: [{
        details: {
          self: { damage_reduction: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 3 } } },
          target: {
            target_protect: { term: { for_rounds: 3 } },
            ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 } }
          }
        }
      }]
    }],
    passive: [{
      area: 'left',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          target: {
            target_protect: { term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            def_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            row_protect: { term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'attack', state: { self: [{ equipped: 'output_limit_release_device' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }, {
        conditions: [{ trigger: 'be_attacked', state: { self: [{ equipped: 'output_limit_release_device' }] } }],
        details: { self: { counterattack: { base: { milliPercentage: 67000 }, per_lv_up: { milliPercentage: 4000 } } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        scale_factor: { num_of_units: 'city_guard' },
        details: {
          self: {
            def_up: { base: { milliPercentage: 3200 }, per_lv_up: { milliPercentage: 200 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 3200 }, per_lv_up: { milliPercentage: 200 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_wave', state: { self: [{ equipped: 'output_limit_release_device' }] } }],
        details: { self: { form_change: { form: 'offensive_tactics' } } }
      }, {
        conditions: [{ trigger: 'start_wave', state: { self: [{ equipped: 'energy_shield' }] } }],
        details: {
          self: {
            barrier: { base: { value: 530 }, per_lv_up: { value: 30 }, term: 'infinite' },
            battle_continuation_with_hp_rate: { base: { milliPercentage: 53000 }, per_lv_up: { milliPercentage: 3000 }, term: 'infinite', times: 1 }
          }
        }
      }]
    }]
  },
  115: {
    no: 115,
    active: [{
      damage_deal: {
        base: { milliPercentage: 100000 },
        per_lv_up: { milliPercentage: 5000 },
        attribute: 'electric'
      },
      range: 2,
      cost: 4,
      area: 'single',
      effects: [{
        details: {
          target: {
            eva_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } },
            ap_down: { base: { microValue: 500000 }, per_lv_up: { microValue: 25000 } }
          }
        }
      }]
    }, {
      range: 4,
      cost: 4,
      area: 'single',
      effects: [{
        details: {
          target: {
            pull: { value: 2 },
            immovable: { term: { for_rounds: 2 } },
            marked: { term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'hit', state: { squad: { in_squad: 114 } } }],
        details: { self: { cooperative_attack: { unit: 114, active: 1 } } }
      }]
    }],
    passive: [{
      area: {
        1: 'line_adjacent',
        5: 'cross_adjacent',
        10: 'all_adjacent'
      },
      effects: [{
        conditions: [{ trigger: 'hit' }],
        details: {
          target: {
            ap_up: { base: { microValue: 150000 }, per_lv_up: { microValue: 30000 }, term: 'immediate' },
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            cri_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            acc_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }]
  },
  116: {
    no: 116,
    active: [{
      damage_deal: {
        base: { milliPercentage: 130000 },
        per_lv_up: { milliPercentage: 6500 }
      },
      range: 3,
      cost: 6,
      area: 'single',
      effects: [{
        details: {
          target: {
            push: { value: 1 },
            ap_down: { base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 } },
            stunned: { rate: 'constant' }
          }
        }
      }, {
        scale_factor: { per_stack: { tag: 'workaholic' } },
        details: { target: { damage_taken_increased: { base: { milliPercentage: 8000 }, per_lv_up: { milliPercentage: 400 }, term: { for_rounds: 2 } } } }
      }]
    }, {
      range: 6,
      cost: 6,
      area: 'single',
      effects: [{
        details: { target: { ap_up: { base: { microValue: 2000000 }, per_lv_up: { microValue: 100000 } } } }
      }, {
        scale_factor: { per_stack: { tag: 'workaholic' } },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            cri_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 2 } },
            acc_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        details: {
          target: {
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 }, rate: 'rarely' },
            cri_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 2 }, rate: 'rarely' },
            acc_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 2 }, rate: 'rarely' },
          }
        }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'hit_any_active' }],
        details: {
          self: {
            spd_up: { tag: 'workaholic', base: { milliPercentage: 3000 }, per_lv_up: { milliPercentage: 150 }, term: 'infinite', max_stack: 3 },
            damage_reduction: { tag: 'workaholic', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: 'infinite', max_stack: 3 }
          }
        }
      }]
    }, {
      area: {
        1: 'cross_adjacent',
        10: 'all_adjacent'
      },
      effects: [{
        conditions: [{ trigger: 'start_round', state: { self: [{ tagged: 'workaholic' }] } }],
        details: { target: { ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' } } }
      }]
    }]
  },
  117: {
    no: 117,
    active: [{
      damage_deal: {
        base: { milliPercentage: 107500 },
        per_lv_up: { milliPercentage: 9000 }
      },
      range: 3,
      cost: 4,
      area: 'single',
      effects: [{
        details: { self: { defense_penetration: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 4000 } } } }
      }]
    }, {
      range: 6,
      cost: 6,
      area: 'single',
      effects: [{
        details: { target: { deploy_rabbit_d_field: { term: { for_rounds: 10 }, times: 1 } } }
      }]
    }],
    passive: [{
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_wave', state: { target: [{ unit: 'ags' }] } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: 'infinite' },
            def_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: 'infinite' },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: 'infinite' }
          }
        }
      }]
    }]
  },
  118: {
    no: 118,
    active: [{
      damage_deal: {
        base: { milliPercentage: 125000 },
        per_lv_up: { milliPercentage: 6250 }
      },
      range: 2,
      cost: 4,
      area: 'single',
      effects: [{
        conditions: [{ trigger: 'hit_vital_spot' }],
        details: { self: { additional_damage: { tag: 'lucky_hit', base: { milliPercentage: 100000 }, per_lv_up: { milliPercentage: 5000 }, rate: 'rate_up_by_level' } } }
      }, {
        conditions: [{ trigger: 'hit_vital_spot', state: { self: [{ tagged: 'power_of_pureblood' }] } }],
        details: {
          self: {
            ignore_barrier_dr: {},
            defense_penetration: { milliPercentage: 150000 }
          }
        }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 1000 },
        per_lv_up: { milliPercentage: 1000 }
      },
      range: 4,
      cost: 8,
      area: {
        1: 'fan_shape',
        10: 'all'
      },
      effects: [{
        details: {
          target: {
            acc_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } },
            ap_down: { base: { microValue: 1500000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' },
            effect_removal: { effect: 'acc_up' }
          }
        }
      }, {
        conditions: [{ state: { self: [{ tagged: 'power_of_pureblood' }] } }],
        details: { self: { effect_removal: { effects: ['atk_up', 'cri_up'] } } }
      }]
    }],
    passive: [{
      area: {
        1: 'line_adjacent',
        5: 'cross_adjacent',
        10: 'all_adjacent'
      },
      effects: [{
        conditions: [{ trigger: 'attack' }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            eva_up: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            spd_up: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }, {
      area: 'cross',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          target: {
            cri_up: { tag: 'power_of_pureblood', base: { milliPercentage: 1500 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            acc_up: { tag: 'power_of_pureblood', base: { milliPercentage: 2500 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 1 } },
            activation_rate_percentage_up: { tag: 'lucky_hit', effect: 'additional_damage', base: { milliPercentage: 2000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }]
  },
  119: {
    no: 119,
    active: [{
      damage_deal: {
        base: { milliPercentage: 117000 },
        per_lv_up: { milliPercentage: 10000 }
      },
      range: 2,
      cost: 5,
      area: 'twin',
      effects: [{
        conditions: [{ state: { self: [{ tagged: 'bulk_up' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 21000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 143000 },
        per_lv_up: { milliPercentage: 13000 }
      },
      range: 2,
      cost: 7,
      area: 'row_slightly_attenuate',
      effects: [{
        conditions: [{ state: { self: [{ stack_ge: { tag: 'bulk_up', value: 2 } }] } }],
        details: {
          self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } },
          target: { ap_down: { base: { microValue: 1500000 }, per_lv_up: { microValue: 100000 } } }
        }
      }, {
        conditions: [{ state: { self: [{ stack_ge: { tag: 'bulk_up', value: 5 } }] } }],
        details: { target: { stunned: {} } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'hit' }],
        details: {
          self: {
            atk_up: { tag: 'bulk_up', base: { milliPercentage: 8000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 5 }, max_stack: 5 },
            spd_up: { tag: 'bulk_up', base: { milliPercentage: 1500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 5 }, max_stack: 5 }
          }
        }
      }]
    }, {
      area: 'all_adjacent_without_front_line',
      effects: [{
        conditions: [{ trigger: 'hit' }],
        details: {
          target: {
            atk_up: { tag: 'now_copy_me', base: { milliPercentage: 8000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 5 }, max_stack: 5 },
            spd_up: { tag: 'now_copy_me', base: { milliPercentage: 1500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 5 }, max_stack: 5 }
          }
        }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ tagged: 'bulk_up' }, { tagged: 'now_copy_me' }] } }],
        details: {
          target: {
            def_up: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }]
  },
  120: {
    no: 120,
    active: [{
      damage_deal: {
        base: { milliPercentage: 117000 },
        per_lv_up: { milliPercentage: 10000 }
      },
      range: 3,
      cost: 4,
      area: 'single',
      effects: [{
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_fire_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 156500 },
        per_lv_up: { milliPercentage: 14000 }
      },
      range: 2,
      cost: 5,
      area: 'single',
      effects: [{
        details: { self: { defense_penetration: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 4000 } } } }
      }, {
        conditions: [{ state: { target: [{ effected: 'eva_down' }, { effected: 'immovable' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 } } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'attack' }],
        details: { self: { ap_up: { base: { microValue: 50000 }, per_lv_up: { microValue: 50000 } } } }
      }]
    }]
  },
  121: {
    no: 121,
    active: [{
      damage_deal: {
        base: { milliPercentage: 120000 },
        per_lv_up: { milliPercentage: 6000 }
      },
      range: 2,
      cost: 4,
      area: 'single',
      effects: [{
        details: {
          target: {
            provoked: { term: { for_rounds: 2 } },
            atk_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            cri_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }, {
      range: 0,
      cost: {
        1: 10,
        2: 9,
        7: 8
      },
      area: 'self',
      effects: [{
        details: {
          self: {
            row_protect: { term: { for_rounds: 3 } },
            column_protect: { term: { for_rounds: 3 } },
            damage_reduction: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 3 } }
          }
        }
      }]
    }],
    passive: []
  },
  122: {
    no: 122,
    active: [{
      range: 4,
      cost: 4,
      area: 'single',
      effects: [{
        details: {
          target: {
            fixed_damage_over_time: { tag: 'overloaded', base: { value: 80 }, per_lv_up: { value: 40 }, term: { for_rounds: 2 } },
            atk_up: { tag: 'overloaded', base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            acc_down: { tag: 'overloaded', base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } },
            damage_taken_increased: { tag: 'overloaded', base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 308000 },
        per_lv_up: { milliPercentage: 28000 }
      },
      range: 1,
      cost: 8,
      area: 'single',
      effects: [{
        details: { target: { stunned: { rate: 'constant' } } }
      }, {
        conditions: [{ state: { target: [{ tagged: 'overloaded' }] } }],
        details: { target: { stunned: { rate: { milliPercentage: 100000 } } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'end_wave' }],
        details: { self: { reconnaissance: {} } }
      }, {
        conditions: [{ trigger: 'start_wave', state: { self: [{ effected: 'reconnaissance' }] } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 99 } },
            def_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 99 } }
          }
        }
      }]
    }]
  },
  123: {
    no: 123,
    active: [{
      damage_deal: {
        base: { milliPercentage: 144500 },
        per_lv_up: { milliPercentage: 13000 }
      },
      range: 3,
      cost: 8,
      area: 'zigzag',
      effects: [{
        conditions: [{ trigger: 'critical' }],
        details: {
          self: { additional_damage: { base: { milliPercentage: 100000 }, per_lv_up: { milliPercentage: 5000 } } },
          target: { all_buff_removal: {} }
        }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 210000 },
        per_lv_up: { milliPercentage: 18500 }
      },
      range: 2,
      cost: 7,
      area: 'single',
      effects: [{
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_damage: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 2000 } } } }
      }, {
        conditions: [{ trigger: 'hit_vital_spot' }],
        details: { self: { additional_damage: { tag: 'hit_vital_spot', base: { milliPercentage: 500000 }, per_lv_up: { milliPercentage: 25000 }, rate: { milliPercentage: 1000 } } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 }, rate: 'constant' },
            cri_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 }, rate: 'constant' },
            acc_up: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 }, rate: 'constant' },
            eva_up: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 }, rate: 'constant' },
            damage_reduction: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 }, rate: 'constant' }
          }
        }
      }]
    }, {
      area: 'all_adjacent',
      effects: [{
        conditions: [{ trigger: 'be_killed' }],
        details: {
          target: {
            all_debuff_removal: {},
            atk_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: { 1: 2, 10: 3 } } },
            cri_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: { 1: 2, 10: 3 } } },
            spd_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: { 1: 2, 10: 3 } } },
            damage_reduction: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: { 1: 2, 10: 3 } } }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } },
            damage_reduction: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_wave' }],
        details: { self: { battle_continuation: { value: 300, term: 'infinite', times: 1, cannot_be_dispelled: true, enabledLv: 10 } } }
      }, {
        details: { self: { activation_rate_percentage_up: { tag: 'hit_vital_spot', effect: 'additional_damage', milliPercentage: 1000 } } }
      }]
    }]
  },
  124: {
    no: 124,
    active: [{
      damage_deal: {
        base: { milliPercentage: 117000 },
        per_lv_up: { milliPercentage: 10000 }
      },
      range: 3,
      cost: 4,
      area: 'single',
      effects: [{
        details: {
          target: {
            provoked: { term: { for_rounds: 2 } },
            atk_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            spd_down: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: { target: { damage_taken_increased: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 2 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 190500 },
        per_lv_up: { milliPercentage: 16500 }
      },
      range: 3,
      cost: 7,
      area: 'single',
      effects: [{
        conditions: [{ state: { target: [{ effected: 'provoked' }] } }],
        details: { target: { effect_removal: { effect: 'damage_reduction' } } }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_damage: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 } } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { damage_reduction: { base: { milliPercentage: 24000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ hp_less_than: 50 }] } }],
        details: {
          self: {
            damage_reduction: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'hit' }],
        details: { self: { atk_up: { tag: 'bravery', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: 'infinite' } } }
      }, {
        conditions: [{ trigger: 'be_attacked', state: { self: [{ tagged: 'bravery' }] } }],
        details: { self: { counterattack: { base: { milliPercentage: 80000 }, per_lv_up: { milliPercentage: 5000 } } } }
      }]
    }, {
      area: 'line',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'attacker' }, { unit: 'supporter' }] } }],
        details: { target: { target_protect: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ stack_ge: { tag: 'bravery', value: 1 } }], target: [{ unit: 'light' }, { unit: 'flying' }] } }],
        details: { target: { cri_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 600 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ stack_ge: { tag: 'bravery', value: 2 } }], target: [{ unit: 'light' }, { unit: 'flying' }] } }],
        details: { target: { ap_up: { base: { microValue: 500000 }, per_lv_up: { microValue: 25000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ stack_ge: { tag: 'bravery', value: 3 } }], target: [{ unit: 'light' }, { unit: 'flying' }] } }],
        details: { target: { anti_heavy_type: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }]
    }]
  },
  125: {
    no: 125,
    active: [{
      damage_deal: {
        base: { milliPercentage: 127000 },
        per_lv_up: { milliPercentage: 11000 }
      },
      range: 3,
      cost: 4,
      area: 'single',
      effects: [{
        details: {
          target: {
            marked: { tag: 'duel_target', term: { for_rounds: 2 } },
            provoked: { tag: 'duel_target', term: { for_rounds: 2 } },
            acc_down: { tag: 'duel_target', base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            spd_down: { tag: 'duel_target', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 254500 },
        per_lv_up: { milliPercentage: 22500 }
      },
      range: 3,
      cost: 7,
      area: 'single',
      effects: [{
        conditions: [{ state: { target: [{ effected: 'marked' }, { effected: 'provoked' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }, {
        conditions: [{ state: { target: [{ tagged: 'duel_target' }] } }],
        details: {
          self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } },
          target: { all_buff_removal: {} }
        }
      }, {
        conditions: [{ trigger: 'kill' }],
        details: { self: { ap_up: { base: { microValue: 2000000 }, per_lv_up: { microValue: 100000 } } } }
      }, {
        details: { self: { tag_unstack: { tag: 'duelist', effect: 'atk_up', value: 2 } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'attack' }],
        details: { self: { atk_up: { tag: 'duelist', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: 'infinite', max_stack: 3 } } }
      }, {
        conditions: [{ trigger: 'attack', state: { self: [{ stack_ge: { tag: 'duelist', value: 3 } }] } }],
        details: { self: { re_attack: {} } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ tagged: 'duelist' }] } }],
        details: { self: { ignore_barrier_dr: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        scale_factor: { per_stack: { tag: 'duelist' } },
        details: { self: { spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } } } }
      }]
    }, {
      area: {
        1: 'cross_adjacent',
        10: 'all_adjacent'
      },
      effects: [{
        conditions: [{ trigger: 'hit' }],
        details: { target: { ap_up: { base: { microValue: 150000 }, per_lv_up: { microValue: 20000 } } } }
      }, {
        conditions: [{ trigger: 'kill' }],
        details: { target: { ap_up: { base: { microValue: 500000 }, per_lv_up: { microValue: 30000 } } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'be_attacked', state: { self: [{ tagged: 'duelist' }] } }],
        details: {
          self: {
            eva_up: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 }, max_stack: 1 },
            damage_reduction: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 }, max_stack: 1 },
            counterattack: { base: { milliPercentage: 80000 }, per_lv_up: { milliPercentage: 5000 } }
          }
        }
      }, {
        conditions: [{ state: { self: [{ stack_ge: { tag: 'duelist', value: 3 } }] } }],
        details: { self: { counterattack_critical: {} } }
      }]
    }]
  },
  126: {
    no: 126,
    active: [{
      damage_deal: {
        base: { milliPercentage: 95000 },
        per_lv_up: { milliPercentage: 8000 }
      },
      range: 4,
      cost: 8,
      area: 'fan_shape',
      effects: [{
        details: {
          target: {
            marked: { term: { for_rounds: 2 } },
            atk_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            cri_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { self: [{ tagged: 'second_coming' }] } }],
        details: {
          target: {
            atk_down: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 2 } },
            cri_down: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }, {
      range: 0,
      cost: 9,
      area: {
        1: 'cross_adjacent',
        10: 'all_adjacent'
      },
      effects: [{
        details: {
          target: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 2 } },
            def_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            acc_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            eva_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            barrier: { base: { value: 50 }, per_lv_up: { value: 50 } }
          }
        }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            barrier: { base: { value: 60 }, per_lv_up: { value: 60 }, term: { for_rounds: 1 }, max_stack: 1 },
            damage_reduction: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            row_protect: { term: { for_rounds: 1 } },
            enmity: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ tagged: 'second_coming' }] } }],
        details: {
          self: {
            barrier: { base: { value: 90 }, per_lv_up: { value: 90 }, term: { for_rounds: 1 }, max_stack: 1 },
            damage_reduction: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: { self: { battle_continuation: { base: { value: 120 }, per_lv_up: { value: 80 }, term: 'infinite', times: 1, cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'revive' }],
        details: {
          self: {
            spd_up: { tag: 'second_coming', base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: 'infinite' },
            status_resist_up: { tag: 'second_coming', base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: 'infinite' },
            minimize_damage: { term: { for_rounds: 1 } }
          },
          target: { target_protect: { term: { for_rounds: 1 } } }
        }
      }]
    }, {
      area: {
        1: 'cross_adjacent',
        10: 'all_adjacent'
      },
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: {
          target: {
            battle_continuation: { base: { value: 60 }, per_lv_up: { value: 40 }, term: 'infinite', times: 1 },
            nullify_damage: { term: 'infinite', times: 1 }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ hp_less_or_equal: 50 }] } }],
        details: { target: { target_protect: { term: { for_rounds: 1 } } } }
      }]
    }]
  },
  127: {
    no: 127,
    active: [{
      damage_deal: {
        base: { milliPercentage: 117000 },
        per_lv_up: { milliPercentage: 10000 }
      },
      range: 3,
      cost: 4,
      area: 'single',
      effects: [{
        details: {
          target: {
            provoked: { term: { for_rounds: 2 } },
            atk_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            acc_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 210000 },
        per_lv_up: { milliPercentage: 18500 }
      },
      range: 3,
      cost: 8,
      area: 'single',
      effects: [{
        details: { target: { def_down: { base: { milliPercentage: 33000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: {
          self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } },
          target: { effect_removal: { effect: 'def_up' } }
        }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { eva_up: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        details: { self: { damage_reduction: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 5000 }, term: 'infinite', max_stack: 1, times: 1 } } }
      }, {
        conditions: [{ trigger: 'evade' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: 'infinite', max_stack: 1, times: 1 },
            cri_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: 'infinite', max_stack: 1, times: 1 }
          }
        }
      }]
    }, {
      area: 'fixed_middle_row',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'attacker' }, { unit: 'supporter' }] } }],
        details: { target: { target_protect: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ effected: 'atk_up' }] } }],
        details: { target: { atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ effected: 'acc_up' }] } }],
        details: { target: { acc_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ effected: 'eva_up' }] } }],
        details: { target: { eva_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ effected: 'spd_up' }] } }],
        details: { target: { spd_up: { base: { milliPercentage: 3000 }, per_lv_up: { milliPercentage: 300 }, term: { for_rounds: 1 } } } }
      }]
    }]
  },
  128: {
    no: 128,
    active: [{
      damage_deal: {
        base: { milliPercentage: 116000 },
        per_lv_up: { milliPercentage: 10000 }
      },
      range: 3,
      cost: 4,
      area: 'single',
      effects: [{
        details: {
          target: {
            def_down: { base: { milliPercentage: 21000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            eva_down: { base: { milliPercentage: 21000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 143000 },
        per_lv_up: { milliPercentage: 13000 }
      },
      range: 4,
      cost: 9,
      area: 'fan_shape_greatly_attenuate',
      effects: [{
        conditions: [{ state: { target: [{ effected: 'def_down' }, { effected: 'eva_down' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 } } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [
          { trigger: 'start_wave', state: { self: [{ hp_greater_than: 90 }], squad: { num_of_units: { unit: 'ags', greater_or_equal: 3 } } } },
          { trigger: 'revive', state: { squad: { num_of_units: { unit: 'ags', greater_or_equal: 3 } } } },
        ],
        details: { self: { battle_continuation_with_hp_rate: { base: { milliPercentage: 91000 }, per_lv_up: { milliPercentage: 1000 }, term: 'infinite', times: 1, cannot_be_dispelled: true } } }
      }, {
        conditions: [{ state: { self: [{ hp_less_or_equal: 90 }] } }],
        details: { self: { effect_removal: { effect: 'battle_continuation_with_hp_rate' } } }
      }]
    }, {
      area: {
        1: 'back',
        5: 'cross_adjacent_without_front',
        10: 'under_watcher'
      },
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: { not_alias: 'magical_girl', type: 'light' } }] } }],
        details: { target: { target_protect: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'attack', state: { target: [{ unit: { not_alias: 'magical_girl', type: 'light' } }] } }],
        details: {
          target: {
            status_resist_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } },
            fire_resist_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } },
            ice_resist_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } },
            electric_resist_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { in_squad: 171 } } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }]
  },
  129: {
    no: 129,
    active: [{
      damage_deal: {
        base: { milliPercentage: 130000 },
        per_lv_up: { milliPercentage: 6500 }
      },
      range: 4,
      cost: 7,
      area: 'single',
      effects: [{
        details: {
          self: { ignore_protect: {} },
          target: {
            marked: { term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            status_resist_down: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: {
          self: { additional_damage: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 } } },
          target: { all_buff_removal: {} }
        }
      }]
    }, {
      range: 0,
      cost: 9,
      area: {
        1: 'all',
        10: 'fixed_all'
      },
      effects: [{
        details: {
          target: {
            all_debuff_removal: {},
            status_resist_up: [
              { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
              { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
            ]
          }
        }
      }, {
        conditions: [{ state: { target: [{ tagged: 'command_offense_troop' }] } }],
        details: { target: { ap_up: { base: { microValue: 1500000 }, per_lv_up: { microValue: 50000 } } } }
      }, {
        conditions: [{ state: { target: [{ tagged: 'command_defense_troop' }] } }],
        details: { target: { ap_up: { base: { microValue: 1500000 }, per_lv_up: { microValue: 50000 } } } }
      }]
    }],
    passive: [{
      area: {
        1: 'cross_adjacent',
        10: 'all_adjacent'
      },
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'attacker' }] } }],
        details: { target: { atk_up: { tag: 'command_offense_troop', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ equipped: 'anti_light_os' }], target: [{ unit: 'attacker' }] } }],
        details: { target: { anti_light_type: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ equipped: 'anti_heavy_os' }], target: [{ unit: 'attacker' }] } }],
        details: { target: { anti_heavy_type: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ equipped: 'anti_air_os' }], target: [{ unit: 'attacker' }] } }],
        details: { target: { anti_flying_type: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ equipped: 'anti_light_flying_os' }], target: [{ unit: 'attacker' }] } }],
        details: {
          target: {
            anti_light_type: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            anti_flying_type: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ equipped: 'anti_heavy_light_os' }], target: [{ unit: 'attacker' }] } }],
        details: {
          target: {
            anti_light_type: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            anti_heavy_type: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ equipped: 'anti_flying_heavy_os' }], target: [{ unit: 'attacker' }] } }],
        details: {
          target: {
            anti_heavy_type: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            anti_flying_type: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: {
        1: 'cross_adjacent',
        10: 'all_adjacent'
      },
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'defender' }] } }],
        details: {
          target: {
            eva_up: { tag: 'command_defense_troop', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            damage_reduction: { tag: 'command_defense_troop', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ effected: 'fire_resist_up' }], target: [{ unit: 'defender' }] } }],
        details: { target: { fire_resist_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ effected: 'ice_resist_up' }], target: [{ unit: 'defender' }] } }],
        details: { target: { ice_resist_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ effected: 'electric_resist_up' }], target: [{ unit: 'defender' }] } }],
        details: { target: { electric_resist_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: {
          target: {
            def_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: 'infinite' },
            acc_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: 'infinite' },
            eva_down: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 500 }, term: 'infinite' },
            spd_down: { base: { milliPercentage: 1000 }, per_lv_up: { milliPercentage: 250 }, term: 'infinite' }
          }
        }
      }, {
        conditions: [{ trigger: 'end_wave' }],
        details: { self: { reconnaissance: {} } }
      }, {
        conditions: [{ trigger: 'start_wave', state: { self: [{ effected: 'reconnaissance' }] } }],
        details: { target: { damage_taken_increased: { base: { milliPercentage: 4000 }, per_lv_up: { milliPercentage: 250 }, term: 'infinite' } } }
      }]
    }]
  },
  131: {
    no: 131,
    active: [{
      damage_deal: {
        base: { milliPercentage: 119000 },
        per_lv_up: { milliPercentage: 10000 }
      },
      range: 3,
      cost: 8,
      area: 'row_toward_front',
      effects: [{
        details: {
          self: {
            ignore_protect: {},
            tag_release: { tag: 'cheerleader' }
          },
          target: {
            atk_down: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 2 } },
            acc_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            cri_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { self: [{ stack_ge: { tag: 'cheerleader', value: 2 } }] } }],
        details: {
          target: {
            atk_down: { base: { milliPercentage: 7500 }, per_lv_up: { milliPercentage: 375 }, term: { for_rounds: 2 } },
            acc_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            cri_down: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { self: [{ stack_ge: { tag: 'cheerleader', value: 3 } }] } }],
        details: {
          target: {
            atk_down: { base: { milliPercentage: 7500 }, per_lv_up: { milliPercentage: 375 }, term: { for_rounds: 2 } },
            acc_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            cri_down: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }, {
      range: 0,
      cost: 8,
      area: {
        1: 'cross',
        10: 'all'
      },
      effects: [{
        conditions: [{ state: { target: [{ unit: 'bioroid' }] } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            def_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 2 } },
            acc_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 2 } },
            eva_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { self: [{ stack_ge: { tag: 'cheerleader', value: 2 } }], target: [{ unit: 'bioroid' }] } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 2 } },
            def_up: { base: { milliPercentage: 7500 }, per_lv_up: { milliPercentage: 375 }, term: { for_rounds: 2 } },
            acc_up: { base: { milliPercentage: 7500 }, per_lv_up: { milliPercentage: 375 }, term: { for_rounds: 2 } },
            eva_up: { base: { milliPercentage: 7500 }, per_lv_up: { milliPercentage: 375 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { self: [{ stack_ge: { tag: 'cheerleader', value: 3 } }], target: [{ unit: 'bioroid' }] } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 2 } },
            def_up: { base: { milliPercentage: 7500 }, per_lv_up: { milliPercentage: 375 }, term: { for_rounds: 2 } },
            acc_up: { base: { milliPercentage: 7500 }, per_lv_up: { milliPercentage: 375 }, term: { for_rounds: 2 } },
            eva_up: { base: { milliPercentage: 7500 }, per_lv_up: { milliPercentage: 375 }, term: { for_rounds: 2 } },
            all_debuff_removal: {}
          }
        }
      }]
    }],
    passive: [{
      area: {
        1: 'cross_adjacent',
        10: 'all_adjacent'
      },
      effects: [{
        conditions: [{ trigger: 'start_round', state: { self: [{ tagged: 'cheerleader' }], target: [{ unit: 'bioroid' }] } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 8000 }, per_lv_up: { milliPercentage: 400 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'idle', state: { target: [{ unit: 'bioroid' }] } }],
        details: {
          target: {
            spd_up: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 300 }, term: { for_rounds: 2 } },
            ap_up: { base: { microValue: 500000 }, per_lv_up: { microValue: 25000 }, term: 'immediate' }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'hit_any_active' }],
        details: { self: { spd_up: { tag: 'cheerleader', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: 'infinite', max_stack: 3 } } }
      }]
    }]
  },
  132: {
    no: 132,
    active: [{
      damage_deal: {
        base: { milliPercentage: 94500 },
        per_lv_up: { milliPercentage: 8000 },
        attribute: 'electric'
      },
      range: 4,
      cost: 4,
      area: 'single',
      effects: [{
        details: {
          target: {
            ap_down: { base: { microValue: 500000 }, per_lv_up: { microValue: 25000 }, term: 'immediate' },
            acc_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } },
            eva_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } },
            range_down: { value: 1, term: { for_rounds: 2 } }
          }
        }
      }]
    }, {
      range: 0,
      cost: 8,
      area: {
        1: 'cross_adjacent',
        10: 'all_adjacent'
      },
      effects: [{
        details: {
          target: {
            ap_up: { base: { microValue: 1500000 }, per_lv_up: { microValue: 75000 }, term: 'immediate' },
            acc_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } },
            cri_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 2 } },
            effect_removal: { effect: 'acc_down', term: 'immediate' }
          }
        }
      }]
    }],
    passive: [{
      area: {
        1: 'cross_adjacent',
        10: 'all_adjacent'
      },
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          target: {
            acc_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            anti_flying_type: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            range_up: { value: 1, term: { for_rounds: 1 }, enabledLv: 10 }
          }
        }
      }]
    }, {
      area: {
        1: 'cross_adjacent',
        10: 'all_adjacent'
      },
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          target: {
            eva_up: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 3000 }, term: 'infinite', times: 1, max_stack: 1 },
            damage_reduction: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1500 }, term: 'infinite', times: 1, max_stack: 1 }
          }
        }
      }]
    }]
  },
  133: {
    no: 133,
    active: [{
      damage_deal: {
        base: { milliPercentage: 110500 },
        per_lv_up: { milliPercentage: 10000 },
        attribute: 'ice'
      },
      range: 3,
      cost: 7,
      area: 'row_toward_front',
      effects: [{
        details: {
          target: {
            ice_resist_down: { tag: 'wet', base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 2 } },
            electric_resist_down: { tag: 'wet', base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 2 } },
            fire_resist_up: { tag: 'wet', base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 220000 },
        per_lv_up: { milliPercentage: 20000 }
      },
      range: 2,
      cost: 8,
      area: 'single',
      effects: [{
        details: { target: { fire_resist_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ state: { target: [{ effected: 'def_down' }] } }],
        details: {
          target: {
            damage_taken_increased: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 2 } },
            stunned: { rate: 'constant' }
          }
        }
      }]
    }],
    passive: [{
      area: 'backward',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            damage_reduction: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { spd_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ effected_by: 135 }, { unit: 135 }, { unit: 176 }] } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            damage_reduction: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }]
  },
  134: {
    no: 134,
    active: [{
      damage_deal: {
        base: { milliPercentage: 143500 },
        per_lv_up: { milliPercentage: 13000 },
        attribute: 'fire'
      },
      range: 1,
      cost: 7,
      area: 'row_greatly_attenuate',
      effects: [{
        details: {
          target: {
            def_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            eva_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            fire_resist_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 122500 },
        per_lv_up: { milliPercentage: 10500 },
        attribute: 'fire'
      },
      range: 2,
      cost: 9,
      area: 'fan_shape',
      effects: [{
        conditions: [{ trigger: 'hit' }],
        details: { target: { eva_down: { tag: 'with_flammables', base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ trigger: 'hit_fire_active', state: { target: [{ tagged: 'with_flammables' }] } }],
        details: { target: { fixed_damage: { milliPercentage: 50000 } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            def_up: { base: { milliPercentage: 33000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
            fire_resist_up: { base: { milliPercentage: 33000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
            status_resist_up: { base: { milliPercentage: 33000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'be_hit_fire_active' }],
        details: { self: { fire_resist_up: { base: { milliPercentage: 33000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ trigger: 'be_hit_ice_active' }],
        details: { self: { ice_resist_up: { base: { milliPercentage: 33000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ trigger: 'be_hit_electric_active' }],
        details: { self: { electric_resist_up: { base: { milliPercentage: 33000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 2 } } } }
      }]
    }, {
      area: 'back',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { column_protect: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'attacker' }, { unit: 'supporter' }] } }],
        details: { target: { target_protect: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'idle' }],
        details: { self: { damage_reduction: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 3 } } } }
      }]
    }]
  },
  135: {
    no: 135,
    active: [{
      damage_deal: {
        base: { milliPercentage: 146000 },
        per_lv_up: { milliPercentage: 13000 }
      },
      range: 2,
      cost: 5,
      area: 'single',
      effects: [{
        details: { self: { anti_light_type: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }, {
        conditions: [{ state: { target: [{ effected: 'def_down' }, { effected: 'eva_down' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 241500 },
        per_lv_up: { milliPercentage: 21500 }
      },
      range: 4,
      cost: 7,
      area: 'single',
      effects: [{
        details: {
          target: {
            acc_down: [
              { base: { milliPercentage: 17500 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 1 } },
              { base: { milliPercentage: 17500 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 2 } }
            ],
            cri_down: [
              { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
              { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
            ]
          }
        }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: {
          self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } },
          target: { effect_removal: { effect: 'acc_up' } }
        }
      }]
    }],
    passive: [{
      area: 'backward',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: { target: { ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        details: { target: { follow_up_attack: { term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 9000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_wave', state: { target: [{ effected_by: 133 }, { unit: 133 }, { unit : 176 }] } }],
        details: { target: { ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ effected_by: 133 }, { unit: 133 }, { unit : 176 }] } }],
        details: { target: { follow_up_attack: { term: { for_rounds: 1 } } } }
      }]
    }]
  },
  136: {
    no: 136,
    active: [{
      damage_deal: {
        base: { milliPercentage: 122500 },
        per_lv_up: { milliPercentage: 10500 },
        attribute: 'fire'
      },
      range: 3,
      cost: 7,
      area: 'single',
      effects: [{
        details: {
          target: {
            marked: { term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 2 } },
            fire_resist_down: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 2 } },
            effect_removal: { effect: 'damage_reduction', term: 'immediate' }
          }
        }
      }]
    }, {
      damage_deal: {
        milliPercentage: 5000
      },
      range: 4,
      cost: 8,
      area: {
        1: 'cross',
        10: 'all'
      },
      effects: [{
        details: {
          target: {
            acc_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } },
            effect_removal: { effect: 'acc_up', term: 'immediate' },
            silenced: { term: 'immediate' }
          }
        }
      }]
    }],
    passive: [{
      area: 'diagonal_adjacent',
      equipment_effects: [{
        conditions: [{ trigger: 'start_wave', state: { target: [{ unit: 'bioroid' }] } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 16500 }, per_lv_up: { milliPercentage: 1000 }, term: 'infinite', cannot_be_dispelled: true },
            eva_up: { base: { milliPercentage: 14000 }, per_lv_up: { milliPercentage: 1000 }, term: 'infinite', cannot_be_dispelled: true },
            spd_up: { base: { milliPercentage: 2000 }, per_lv_up: { milliPercentage: 500 }, term: 'infinite', cannot_be_dispelled: true },
            acc_down: { base: { milliPercentage: 28500 }, per_lv_up: { milliPercentage: 1500 }, term: 'infinite', cannot_be_dispelled: true }
          }
        }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            acc_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'end_wave' }],
        details: { self: { reconnaissance: {} } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ effected: 'reconnaissance' }] } }],
        details: {
          self: {
            acc_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ equipped: 'crystal_ball_of_fate' }] } }],
        details: { target: { ap_up: { base: { microValue: 40000 }, per_lv_up: { microValue: 30000 }, term: 'immediate' } } }
      }]
    }]
  },
  137: {
    no: 137,
    active: [{
      damage_deal: {
        base: { milliPercentage: 140000 },
        per_lv_up: { milliPercentage: 12500 }
      },
      range: 2,
      cost: 8,
      area: 'twin',
      effects: [{
        details: {
          target: {
            atk_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            cri_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            provoked: { term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 253000 },
        per_lv_up: { milliPercentage: 23000 }
      },
      range: 3,
      cost: 9,
      area: 'single',
      effects: [{
        details: { target: { def_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: {
          target: {
            effect_removal: { effects: ['def_up', 'damage_reduction'], term: 'immediate' },
            damage_taken_increased: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 33000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'fixed_back_line',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { target: { defense_penetration: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'attacker' }, { unit: 'supporter' }] } }],
        details: { target: { target_protect: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            status_resist_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
            damage_reduction: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }]
  },
  138: {
    no: 138,
    active: [{
      damage_deal: {
        base: { milliPercentage: 117000 },
        per_lv_up: { milliPercentage: 10000 }
      },
      range: 4,
      cost: 4,
      area: 'single',
      effects: [{
        details: {
          target: {
            marked: { term: { for_rounds: 2 } },
            eva_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 150000 },
        per_lv_up: { milliPercentage: 13000 }
      },
      range: 3,
      cost: 8,
      area: 'line',
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ state: { target: [{ effected: 'marked' }, { effected: 'damage_taken_increased' }] } }],
        details: {
          self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } },
          target: { effect_removal: { effect: 'damage_reduction' } }
        }
      }]
    }],
    passive: [{
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ effected: 'row_protect' }, { effected: 'column_protect' }] } }],
        details: { target: { follow_up_attack: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'hit', state: { target: [{ effected: 'row_protect' }, { effected: 'column_protect' }] } }],
        details: { target: { ap_up: { base: { microValue: 450000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 126 }] } }],
        details: {
          target: {
            ap_up: { base: { microValue: 450000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' },
            counterattack: { base: { milliPercentage: 45000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { enmity: { base: { milliPercentage: 14000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'attack' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 9500 }, per_lv_up: { milliPercentage: 500 }, term: 'infinite', max_stack: 3 },
            acc_up: { base: { milliPercentage: 9000 }, per_lv_up: { milliPercentage: 1000 }, term: 'infinite', max_stack: 3 }
          }
        }
      }, {
        conditions: [{ trigger: 'kill' }],
        details: { self: { spd_up: { base: { milliPercentage: 4500 }, per_lv_up: { milliPercentage: 500 }, term: 'infinite', max_stack: 3 } } }
      }, {
        conditions: [{ trigger: 'be_killed', state: { target: [{ effected: 'marked' }] } }],
        details: { target: { fixed_damage: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 15000 } } } }
      }]
    }]
  },
  139: {
    no: 139,
    active: [{
      damage_deal: {
        base: { milliPercentage: 130000 },
        per_lv_up: { milliPercentage: 10000 },
        attribute: 'electric'
      },
      range: 3,
      cost: 8,
      area: 'row_toward_front',
      effects: [{
        details: { target: { marked: { term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ state: { self: [{ stack_ge: { tag: 'asceticism', value: 1 } }] } }],
        details: { target: { damage_taken_increased: { base: { milliPercentage: 1500 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ state: { self: [{ stack_ge: { tag: 'asceticism', value: 3 } }] } }],
        details: { target: { damage_taken_increased: { base: { milliPercentage: 1500 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 220000 },
        per_lv_up: { milliPercentage: 20000 },
        attribute: 'electric'
      },
      range: 3,
      cost: 9,
      area: 'single',
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ state: { self: [{ stack_ge: { tag: 'asceticism', value: 1 } }] } }],
        details: { target: { damage_taken_increased: { base: { milliPercentage: 1500 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ state: { self: [{ stack_ge: { tag: 'asceticism', value: 3 } }] } }],
        details: { target: { damage_taken_increased: { base: { milliPercentage: 1500 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ state: { self: [{ stack_ge: { tag: 'asceticism', value: 5 } }] } }],
        details: { target: { damage_taken_increased: { base: { milliPercentage: 1500 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } } } }
      }]
    }],
    passive: [{
      area: 'inverted_fan_shape_wing',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: { electric_resist_up: { base: { milliPercentage: 6500 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } } },
          target: { electric_resist_up: { base: { milliPercentage: 13000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } } }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'attacker' }, { unit: 'supporter' }] } }],
        details: { target: { target_protect: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'enemy_killed' }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 1500 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            damage_reduction: { base: { milliPercentage: 500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_wave', state: { enemy: { num_of_units: { greater_or_equal: 1, less_or_equal: 2 } } } }],
        details: { self: { damage_reduction: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: 'infinite', cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_wave', state: { enemy: { num_of_units: { greater_or_equal: 3, less_or_equal: 4 } } } }],
        details: { self: { damage_reduction: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: 'infinite', cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_wave', state: { enemy: { num_of_units: { greater_or_equal: 5 } } } }],
        details: { self: { damage_reduction: { tag: 'fanaticism', base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 3000 }, term: 'infinite', cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ tagged: 'fanaticism' }] } }],
        details: { self: { marked: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'be_hit' }],
        details: { self: { status_resist_up: { tag: 'asceticism', base: { milliPercentage: 2000 }, per_lv_up: { milliPercentage: 2000 }, term: 'infinite', max_stack: 5 } } }
      }, {
        conditions: [{ trigger: 'be_hit', state: { self: [{ effected: 'marked' }] } }],
        details: { self: { ap_up: { base: { microValue: 500000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' } } }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        scale_factor: { num_of_units: 'kouhei_church' },
        details: { target: { damage_taken_increased: { base: { milliPercentage: 2000 }, per_lv_up: { milliPercentage: 500 }, term: 'infinite' } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { in_squad: 'kouhei_church' } } }],
        scale_factor: { num_of_units: 'kouhei_church', except: 'self' },
        details: { self: { atk_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } } } }
      }]
    }]
  },
  141: {
    no: 141,
    active: [{
      damage_deal: {
        base: { milliPercentage: 132000 },
        per_lv_up: { milliPercentage: 12000 }
      },
      range: 1,
      cost: 8,
      area: 'fan_shape_slightly_attenuate',
      effects: [{
        details: {
          self: { ignore_protect: {} },
          target: { eva_down: { base: { milliPercentage: 21000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 } } }
        }
      }, {
        conditions: [{ state: { target: [{ tagged: 'bleeding_hole' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 26000 }, per_lv_up: { milliPercentage: 6000 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 32000 },
        per_lv_up: { milliPercentage: 2000 }
      },
      range: 3,
      cost: 4,
      area: 'single',
      effects: [{
        details: {
          target: { fixed_damage_over_time: { tag: 'bleeding_hole', base: { value: 280 }, per_lv_up: { value: 80 }, term: { for_rounds: 4 } } },
          self: {
            atk_up: { tag: 'night_of_blood_queen', base: { milliPercentage: 53000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 4 } },
            defense_penetration: { tag: 'night_of_blood_queen', base: { milliPercentage: 21000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 4 } },
            range_up: { tag: 'night_of_blood_queen', value: 3, term: { for_rounds: 4 } }
          }
        }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { defense_penetration: { base: { milliPercentage: 21000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'attack' }],
        details: { self: { merciless: { base: { milliPercentage: 53000 }, per_lv_up: { milliPercentage: 3000 } } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { self: [{ in_back_line: {} }] } }],
        details: {
          self: {
            defense_penetration: { base: { milliPercentage: 21000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 22000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ in_mid_line: {} }] } }],
        details: {
          self: {
            defense_penetration: { base: { milliPercentage: 10500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 5500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: { target: { reconnaissance: { term: 'infinite' } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ tagged: 'night_of_blood_queen' }] } }],
        details: {
          self: {
            cri_up: { base: { milliPercentage: 5500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }]
  },
  147: {
    no: 147,
    active: [{
      damage_deal: {
        base: { milliPercentage: 118500 },
        per_lv_up: { milliPercentage: 10000 }
      },
      range: 2,
      cost: 4,
      area: 'single',
      effects: [{
        details: {
          target: {
            provoked: { term: { for_rounds: 2 } },
            eva_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } },
            spd_down: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 } }
          }
        }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }]
    }, {
      range: 0,
      cost: 5,
      area: 'self',
      effects: [{
        details: {
          self: {
            atk_up: { tag: 'clear_and_serene', base: { milliPercentage: 21000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 } },
            acc_up: { tag: 'clear_and_serene', base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 3 } },
            range_up: { tag: 'clear_and_serene', value: { 1: 1, 10: 2 }, term: { for_rounds: 3 } },
            damage_taken_increased: { tag: 'clear_and_serene', base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: -2500 }, term: { for_rounds: 3 } }
          }
        }
      }]
    }],
    passive: [{
      area: 'fixed_front_line',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'light' }, { unit: 'flying' }] } }],
        details: {
          target: {
            target_protect: { term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 18000 }, per_lv_up: { milliPercentage: 900 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 300 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            acc_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ in_front_line: {} }, { tagged: 'clear_and_serene' }] } }],
        details: { self: { eva_up: { milliPercentage: 30000, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'evade' }],
        details: { self: { counterattack: { base: { milliPercentage: 80000 }, per_lv_up: { milliPercentage: 5000 } } } }
      }]
    }]
  },
  149: {
    no: 149,
    active: [{
      damage_deal: {
        base: { milliPercentage: 127000 },
        per_lv_up: { milliPercentage: 11000 }
      },
      range: 3,
      cost: 5,
      area: 'single',
      effects: [{
        details: {
          self: { anti_light_type: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 } } },
          target: { def_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } } }
        }
      }, {
        conditions: [{ state: { target: [{ unit: 'defender' }] } }],
        details: { target: { damage_taken_increased: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 332500 },
        per_lv_up: { milliPercentage: 30000 }
      },
      range: 3,
      cost: 10,
      area: 'single',
      effects: [{
        details: {
          self: {
            ignore_barrier_dr: {},
            anti_heavy_type: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } },
            fixed_damage: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: -1250 } }
          }
        }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_damage: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 2000 } } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'attack' }],
        details: {
          self: {
            atk_up: { tag: 'foresight', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: 'infinite', max_stack: 3 },
            eva_up: { tag: 'foresight', base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 2 }, max_stack: 1 }
          }
        }
      }, {
        conditions: [{ trigger: 'be_attacked', state: { self: [{ tagged: 'foresight' }] } }],
        details: { self: { counterattack: { base: { milliPercentage: 80000 }, per_lv_up: { milliPercentage: 5000 } } } }
      }, {
        conditions: [{ trigger: 'be_hit' }],
        details: { self: { effect_removal: { tag: 'foresight', effect: 'atk_up' } } }
      }]
    }, {
      area: 'inverted_fan_shape',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { self: [{ in_front_line: {} }], target: [{ unit: 'flying' }] } }],
        details: {
          target: {
            acc_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ in_mid_line: {} }], target: [{ unit: 'flying' }] } }],
        details: {
          target: {
            acc_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 7500 }, per_lv_up: { milliPercentage: 350 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 3000 }, per_lv_up: { milliPercentage: 150 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ in_back_line: {} }], target: [{ unit: 'flying' }] } }],
        details: {
          target: {
            acc_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 2500 }, per_lv_up: { milliPercentage: 125 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { defense_penetration: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 4000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'end_wave' }],
        details: { self: { reconnaissance: {} } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ effected: 'reconnaissance' }] } }],
        details: {
          self: {
            acc_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 13500 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 4000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }]
  },
  151: {
    no: 151,
    active: [{
      damage_deal: {
        base: { milliPercentage: 166500 },
        per_lv_up: { milliPercentage: 15000 },
        attribute: 'fire'
      },
      range: 2,
      cost: 7,
      area: 'single_and_front',
      effects: [{
        details: {
          target: {
            def_down: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 2 } },
            fire_resist_down: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 2 } }
          },
          self: { eva_up: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 2 } } }
        }
      }, {
        conditions: [{ trigger: 'kill' }],
        details: { self: { eva_up: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 2 } } } }
      }]
    }, {
      range: 6,
      cost: 6,
      area: 'single',
      effects: [{
        details: {
          self: {
            def_up: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 3 } },
            damage_reduction: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 3 } }
          },
          target: { target_protect: { term: { for_rounds: 3 } } }
        }
      }]
    }],
    passive: [{
      area: 'cross',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            fire_resist_up: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 1 } },
            ice_resist_up: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'attacker' }] } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'attacker' }, { unit: 'supporter' }] } }],
        details: { target: { target_protect: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'kill' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            spd_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'kill', state: { target: [{ unit: 'attacker' }] } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            spd_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }, {
      area: 'cross',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { atk_up: { base: { milliPercentage: 10500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'attacker' }, { unit: 'supporter' }] } }],
        details: { target: { ice_resist_up: { base: { milliPercentage: 22000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'flying' }] } }],
        details: { target: { damage_reduction: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'cross',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            cri_up: { base: { milliPercentage: 10500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'hit' }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 3200 }, per_lv_up: { milliPercentage: 200 }, term: { for_rounds: 2 }, max_stack: 3 },
            ice_resist_up: { base: { milliPercentage: 5500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 }, max_stack: 3 }
          }
        }
      }]
    }]
  },
  161: {
    no: 161,
    active: [{
      damage_deal: {
        base: { milliPercentage: 122500 },
        per_lv_up: { milliPercentage: 10500 },
        attribute: 'ice'
      },
      range: 2,
      cost: 7,
      area: 'fan_shape_without_front',
      effects: [{
        details: {
          target: {
            spd_down: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            ice_resist_down: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ tagged: 'wet' }] } }],
        details: {
          target: {
            damage_taken_increased: { tag: 'freeze', base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 2 } },
            stunned: { tag: 'freeze', term: 'immediate', rate: 'constant' }
          }
        }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 176000 },
        per_lv_up: { milliPercentage: 16000 },
        attribute: 'ice'
      },
      range: 4,
      cost: 7,
      area: 'single',
      effects: [{
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } } }
      }, {
        conditions: [{ state: { target: [{ tagged: 'wet' }] } }],
        details: {
          target: {
            fixed_damage: { base: { milliPercentage: 33000 }, per_lv_up: { milliPercentage: 3000 } },
            damage_taken_increased: { tag: 'freeze', base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 2 } },
            stunned: { tag: 'freeze', term: 'immediate', rate: 'constant' }
          }
        }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: { self: { minimize_damage: { tag: 'mimesis', term: 'infinite', times: { 1: 1, 5: 2, 10: 3 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ tagged: 'mimesis' }] } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: {
        1: 'cross',
        10: 'all'
      },
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: { ice_resist_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } } },
          target: { ice_resist_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } } }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ effected: 'target_protect' }] } }],
        details: { target: { ap_up: { base: { microValue: 50000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' } } }
      }]
    }]
  },
  162: {
    no: 162,
    active: [{
      damage_deal: {
        base: { milliPercentage: 21000 },
        per_lv_up: { milliPercentage: 1500 }
      },
      range: 2,
      cost: 8,
      area: {
        1: 'twin',
        10: '2_x_2'
      },
      effects: [{
        details: {
          target: {
            atk_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            acc_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            cri_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 159500 },
        per_lv_up: { milliPercentage: 14500 }
      },
      range: 3,
      cost: 7,
      area: 'single',
      effects: [{
        details: {
          self: { damage_reduction: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } } },
          target: {
            ap_down: { base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 } },
            provoked: { term: { for_rounds: 2 } },
          }
        }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_damage: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 2000 } } } }
      }]
    }],
    passive: [{
      area: 'line',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: { target: { ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            def_up: { base: { milliPercentage: 60000 }, per_lv_up: { milliPercentage: 3000 } },
            column_protect: {}
          }
        }
      }, {
        conditions: [{ trigger: 'be_hit' }],
        details: { self: { status_resist_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1350 }, max_stack: 3 } } }
      }]
    }, {
      area: 'fixed_back_line',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'attacker' }, { unit: 'supporter' }] } }],
        details: { target: { target_protect: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ effected: 'damage_reduction' }], target: [{ unit: 'attacker' }, { unit: 'supporter' }] } }],
        details: { target: { atk_up: { base: { milliPercentage: 19000 }, per_lv_up: { milliPercentage: 1600 } } } }
      }]
    }]
  },
  165: {
    no: 165,
    active: [{
      damage_deal: {
        base: { milliPercentage: 127000 },
        per_lv_up: { milliPercentage: 11000 }
      },
      range: 3,
      cost: 5,
      area: 'single',
      effects: [{
        conditions: [{ trigger: 'hit' }],
        details: {
          target: {
            eva_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            ap_down: { base: { microValue: 100000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' }
          }
        }
      }]
    }, {
      range: 6,
      cost: 8,
      area: 'single',
      effects: [{
        conditions: [{ state: { target: [{ unit: 'bioroid' }] } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            eva_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            ap_up: { base: { microValue: 2000000 }, per_lv_up: { microValue: 100000 }, term: 'immediate' },
            all_debuff_removal: { term: 'immediate' }
          }
        }
      }, {
        conditions: [{ state: { target: [{ unit: 'bioroid', hp_greater_or_equal: 90 }] } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            eva_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' },
          }
        }
      }]
    }],
    passive: [{
      area: 'cross',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          target: {
            damage_reduction: { tag: 'psychic_barrier', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            barrier: { tag: 'psychic_barrier', base: { value: 65 }, per_lv_up: { value: 35 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'all_adjacent',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'bioroid' }] } }],
        details: {
          target: {
            cri_up: { base: { milliPercentage: 500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'bioroid', tagged: 'psychic_barrier' }] } }],
        details: {
          target: {
            cri_up: { base: { milliPercentage: 500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'bioroid', hp_greater_or_equal: 90 }] } }],
        details: {
          target: {
            cri_up: { base: { milliPercentage: 500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }]
  },
  170: {
    no: 170,
    active: [{
      damage_deal: {
        base: { milliPercentage: 127000 },
        per_lv_up: { milliPercentage: 11000 },
        attribute: 'fire'
      },
      range: 2,
      cost: 4,
      area: 'single',
      effects: [{
        details: {
          target: {
            atk_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            acc_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            fire_resist_down: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 2 } },
            provoked: { term: { for_rounds: 2 } }
          }
        }
      }]
    }, {
      range: 6,
      cost: {
        1: 7,
        2: 6,
        10: 5
      },
      area: 'single',
      effects: [{
        details: { target: { summon_hologram_tiger: { times: { 1: 1, 10: 2 } } } }
      }]
    }],
    passive: [{
      area: 'cross_adjacent_without_front',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { eva_up: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'attacker' }, { unit: 'supporter' }] } }],
        details: { target: { target_protect: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'hit' }, { trigger: 'evade' }],
        details: { target: { spd_up: { base: { milliPercentage: 500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: { self: { battle_continuation: { base: { value: 60 }, per_lv_up: { value: 60 }, term: 'infinite', times: 1 } } }
      }, {
        conditions: [{
          trigger: 'be_attacked',
          state: {
            self: [
              { effected: 'atk_down' },
              { effected: 'def_down' },
              { effected: 'cri_down' },
              { effected: 'acc_down' },
              { effected: 'eva_down' },
              { effected: 'spd_down' }
            ]
          }
        }],
        details: {
          self: {
            eva_up: { base: { milliPercentage: 2000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 }, max_stack: 1 },
            damage_reduction: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 }, max_stack: 1 },
            status_resist_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 2 }, max_stack: 1 }
          }
        }
      }]
    }]
  },
  171: {
    no: 171,
    active: [{
      damage_deal: {
        base: { milliPercentage: 120000 },
        per_lv_up: { milliPercentage: 6000 },
        attribute: 'fire'
      },
      range: 4,
      cost: 6,
      area: 'single',
      effects: [{
        details: {
          target: {
            marked: { term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 2 } },
            fire_resist_down: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 2 } },
            fixed_fire_damage_over_time: { base: { value: 40 }, per_lv_up: { value: 30 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ effected: 'fixed_fire_damage_over_time' }] } }],
        details: { target: { fixed_fire_damage_over_time: { base: { value: 120 }, per_lv_up: { value: 90 }, term: { for_rounds: 2 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 120000 },
        per_lv_up: { milliPercentage: 9000 }
      },
      range: 3,
      cost: 9,
      area: '2_x_2',
      effects: [{
        details: {
          self: { ignore_protect: {} },
          target: { ap_down: { base: { microValue: 500000 }, per_lv_up: { microValue: 25000 } } }
        }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: {
          self: { additional_fire_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } },
          target: { all_buff_removal: {} }
        }
      }]
    }],
    passive: [{
      area: 'cross_adjacent',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { self: [{ hp_greater_or_equal: 50 }] } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'idle' }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            fixed_damage_over_time: { base: { value: 30 }, per_lv_up: { value: 30 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { self: [{ hp_greater_or_equal: 75 }] } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { self: [{ hp_less_or_equal: 50 }] } }],
        details: {
          self: {
            eva_up: { base: { milliPercentage: 45000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 10500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            damage_reduction: { base: { milliPercentage: 18000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }]
  },
  172: {
    no: 172,
    active: [{
      damage_deal: {
        base: { milliPercentage: 149500 },
        per_lv_up: { milliPercentage: 13000 }
      },
      range: 3,
      cost: 7,
      area: 'line_middle_explosion',
      effects: [{
        details: { self: { anti_heavy_type: { base: { milliPercentage: 16500 }, per_lv_up: { milliPercentage: 1500 } } } }
      }, {
        conditions: [{ state: { target: [{ effected: 'def_down' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 26500 }, per_lv_up: { milliPercentage: 1500 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 242500 },
        per_lv_up: { milliPercentage: 22000 }
      },
      range: 2,
      cost: 8,
      area: 'single',
      effects: [{
        details: {
          target: {
            def_down: { base: { milliPercentage: 27500 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 3 } },
            spd_down: { base: { milliPercentage: 8750 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 3 } }
          }
        }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'hit_any_active' }],
        details: {
          self: {
            spd_up: { base: { milliPercentage: 3300 }, per_lv_up: { milliPercentage: 1300 }, term: { for_rounds: 4 }, max_stack: 3 },
            defense_penetration: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 4 }, max_stack: 3 },
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 650 }, term: { for_rounds: 4 }, max_stack: 3 },
          }
        }
      }]
    }]
  },
  173: {
    no: 173,
    active: [{
      damage_deal: {
        base: { milliPercentage: 191500 },
        per_lv_up: { milliPercentage: 17000 }
      },
      range: 3,
      cost: 6,
      area: 'single',
      effects: [{
        details: {
          target: {
            atk_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            eva_down: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ effected: 'fixed_fire_damage_over_time' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 23000 }, per_lv_up: { milliPercentage: 3000 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 180500 },
        per_lv_up: { milliPercentage: 16000 },
        attribute: 'fire'
      },
      range: 5,
      cost: 9,
      area: 'cross_small_explosion',
      effects: [{
        details: {
          target: {
            def_down: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            cri_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            fire_resist_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_damage: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }, {
        conditions: [{ state: { target: [{ effected: 'fixed_fire_damage_over_time' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }, {
        conditions: [{ trigger: 'hit' }],
        details: { target: { fixed_fire_damage_over_time: { base: { value: 30 }, per_lv_up: { value: 30 } } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            def_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            damage_reduction: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 4 } }
          }
        }
      }, {
        conditions: [{ trigger: 'be_hit_fire_active' }],
        details: {
          self: {
            fire_resist_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } },
            damage_reduction: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }, {
      area: 'inverted_fan_shape_adjacent',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          target: {
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            fire_resist_up: { base: { milliPercentage: 45000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            status_resist_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            target_protect: { term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { target: { fire_resist_down: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 4 }, max_stack: 2 } } }
      }]
    }]
  },
  174: {
    no: 174,
    active: [{
      damage_deal: {
        base: { milliPercentage: 168000 },
        per_lv_up: { milliPercentage: 14500 },
        attribute: 'electric'
      },
      range: 2,
      cost: 5,
      area: 'single',
      effects: [{
        conditions: [{ trigger: 'attack' }],
        details: { self: { anti_heavy_type: { base: { milliPercentage: 5500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_electric_damage: { base: { milliPercentage: 16500 }, per_lv_up: { milliPercentage: 1500 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 143000 },
        per_lv_up: { milliPercentage: 13000 },
        attribute: 'electric'
      },
      range: 5,
      cost: 7,
      area: 'row_toward_front',
      effects: [{
        details: {
          self: { ignore_protect: {} },
          target: {
            ap_down: { base: { microValue: 165000 }, per_lv_up: { microValue: 15000 }, term: 'immediate' },
            eva_down: { base: { milliPercentage: 11500 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            electric_resist_down: { base: { milliPercentage: 22000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ effected: 'fire_resist_down' }, { effected: 'ice_resist_down' }] } }],
        details: { target: { additional_electric_damage: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 } } } }
      }]
    }],
    passive: [{
      area: 'single_and_back',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          target: {
            eva_up: { base: { milliPercentage: 11500 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 21000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 4 } }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { electric_resist_up: { base: { milliPercentage: 22000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'kill' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 } },
            ap_up: { base: { microValue: 600000 }, per_lv_up: { microValue: 100000 }, term: 'immediate' }
          }
        }
      }]
    }]
  },
  175: {
    no: 175,
    active: [{
      damage_deal: {
        base: { milliPercentage: 130500 },
        per_lv_up: { milliPercentage: 11500 },
        attribute: 'ice'
      },
      range: 4,
      cost: 5,
      area: 'single',
      effects: [{
        details: { target: { ice_resist_down: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } } } }
      }, {
        details: {
          target: {
            ice_resist_down: { tag: 'wet', base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 2 } },
            electric_resist_down: { tag: 'wet', base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 2 } },
            fire_resist_up: { tag: 'wet', base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ effected: 'immovable' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 98500 },
        per_lv_up: { milliPercentage: 8500 },
        attribute: 'ice'
      },
      range: 5,
      cost: 8,
      area: 'line',
      effects: [{
        details: {
          target: {
            immovable: { term: { for_rounds: 2 } },
            spd_down: { base: { milliPercentage: 7000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } },
            acc_down: { base: { milliPercentage: 7000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            eva_up: { base: { milliPercentage: 32000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            damage_reduction: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'be_attacked', state: { self: [{ effected: 'fire_resist_up' }, { effected: 'ice_resist_up' }, { effected: 'electric_resist_up' }] } }],
        details: { self: { counterattack: { base: { milliPercentage: 80000 }, per_lv_up: { milliPercentage: 5000 } } } }
      }, {
        conditions: [{ trigger: 'enemy_killed' }],
        details: { self: { atk_up: { base: { milliPercentage: 5500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 }, max_stack: 3 } } }
      }]
    }, {
      area: 'cross_adjacent_without_front',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          target: {
            target_protect: { term: { for_rounds: 1 } },
            fire_resist_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 }, max_stack: 3 }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'attacker' }, { unit: 'supporter' }] } }],
        details: {
          target: {
            spd_up: { base: { milliPercentage: 5500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 3 }, max_stack: 3 },
            eva_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 }, max_stack: 3 }
          }
        }
      }]
    }]
  },
  176: {
    no: 176,
    active: [{
      damage_deal: {
        base: { milliPercentage: 110000 },
        per_lv_up: { milliPercentage: 10000 }
      },
      range: 3,
      cost: 8,
      area: 'diagonal',
      effects: [{
        details: { target: { immovable: { term: { for_rounds: 3 } } } }
      }, {
        conditions: [{ state: { target: [{ tagged: 'wet' }] } }],
        details: { target: { all_buff_removal: {} } }
      }]
    }, {
      range: 0,
      cost: 9,
      area: 'fixed_all',
      effects: [{
        conditions: [{ state: { target: [{ unit: 'light' }, { unit: 133 }, { unit: 135 }] } }],
        details: {
          target: {
            all_debuff_removal: {},
            ap_up: { base: { microValue: 200000 }, per_lv_up: { microValue: 200000 }, term: 'immediate' },
            atk_up: { base: { milliPercentage: 17000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 3 } },
            cri_up: { base: { milliPercentage: 17000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 3 } },
            defense_penetration: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 } },
            fixed_damage: { milliPercentage: 2000 }
          }
        }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: { self: { barrier: { base: { value: 60 }, per_lv_up: { value: 60 }, term: { for_rounds: 3 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        details: { self: { spd_up: { base: { milliPercentage: 500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { in_squad: 133 } } }],
        details: { self: { spd_up: { base: { milliPercentage: 500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { in_squad: 135 } } }],
        details: { self: { spd_up: { base: { milliPercentage: 500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'light' }, { unit: 133 }, { unit: 135 }] } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 1000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 1000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'light' }], squad: { in_squad: 133 } } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 1000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 1000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'light' }], squad: { in_squad: 135 } } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 1000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 1000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'line',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ effected: 'column_protect' }] } }],
        details: { target: { damage_reduction: { base: { milliPercentage: 23000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } } } }
      }]
    }]
  },
  177: {
    no: 177,
    active: [{
      damage_deal: {
        base: { milliPercentage: 100000 },
        per_lv_up: { milliPercentage: 8000 }
      },
      range: 3,
      cost: 4,
      area: 'single',
      effects: [{
        details: { target: { marked: { term: { for_rounds: 2 } } } }
      }]
    }, {
      range: 0,
      cost: 8,
      area: 'fixed_all',
      effects: [{
        conditions: [{ state: { target: [{ unit: 'attacker' }] } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 } },
            cri_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ unit: { alias: 'sisters_of_valhalla', role: 'attacker' } }] } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 } },
            cri_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 } },
            ice_resist_up: { base: { milliPercentage: 1000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ unit: 'defender' }] } }],
        details: {
          target: {
            def_up: { base: { milliPercentage: 17000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 3 } },
            eva_up: { base: { milliPercentage: 17000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 3 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ unit: { alias: 'sisters_of_valhalla', role: 'defender' } }] } }],
        details: {
          target: {
            def_up: { base: { milliPercentage: 17000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 3 } },
            eva_up: { base: { milliPercentage: 17000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 3 } },
            ice_resist_up: { base: { milliPercentage: 1000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ unit: 'supporter' }] } }],
        details: {
          target: {
            acc_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 } },
            spd_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ unit: { alias: 'sisters_of_valhalla', role: 'supporter' } }] } }],
        details: {
          target: {
            acc_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 } },
            spd_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 } },
            ice_resist_up: { base: { milliPercentage: 1000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 } }
          }
        }
      }]
    }],
    passive: [{
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ tagged: 'attack_command' }] } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 7500 }, per_lv_up: { milliPercentage: 375 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 600 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 2500 }, per_lv_up: { milliPercentage: 125 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ tagged: 'attack_command_defence' }] } }],
        details: {
          target: {
            def_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } },
            damage_reduction: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ tagged: 'defense_command' }] } }],
        details: {
          target: {
            def_up: { base: { milliPercentage: 7500 }, per_lv_up: { milliPercentage: 375 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 2500 }, per_lv_up: { milliPercentage: 125 }, term: { for_rounds: 1 } },
            damage_reduction: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ tagged: 'defense_command_attack' }] } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 24000 }, per_lv_up: { milliPercentage: 1200 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }]
  },
  178: {
    no: 178,
    active: [{
      damage_deal: {
        base: { milliPercentage: 138500 },
        per_lv_up: { milliPercentage: 12000 }
      },
      range: 4,
      cost: 7,
      area: 'line',
      effects: [{
        details: {
          target: {
            def_down: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 281500 },
        per_lv_up: { milliPercentage: 25000 }
      },
      range: 5,
      cost: 8,
      area: 'single',
      effects: [{
        details: {
          self: {
            ignore_protect: {},
            spd_down: { milliPercentage: 50000, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_damage: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            cri_up: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            anti_heavy_type: { base: { milliPercentage: 17000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'all_adjacent',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 1000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 1000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 1000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { in_squad: 7 } } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 1000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 1000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 1000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { in_squad: 8 } } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 1000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 1000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 1000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'fan_shape',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: { atk_up: { base: { milliPercentage: 27000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } },
          target: {
            eva_up: { base: { milliPercentage: 32000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            anti_heavy_type: { base: { milliPercentage: 27000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }]
  },
  179: {
    no: 179,
    active: [{
      damage_deal: {
        base: { milliPercentage: 143000 },
        per_lv_up: { milliPercentage: 13000 },
        attribute: 'electric'
      },
      range: 3,
      cost: 8,
      area: 'line',
      effects: [{
        details: { target: { electric_resist_down: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 } } } }
      }, {
        conditions: [{ state: { self: [{ tagged: 'high_voltage' }] } }],
        details: {
          target: {
            electric_resist_down: { base: { milliPercentage: 23000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 3 } },
            stunned: { term: { for_rounds: 1 } },
            tag_release: { tag: 'high_voltage' }
          }
        }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 138500 },
        per_lv_up: { milliPercentage: 12000 },
        attribute: 'electric'
      },
      range: 4,
      cost: 9,
      area: 'cross',
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ state: { target: [{ effected: 'electric_resist_down' }] } }],
        details: { target: { spd_down: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 } } } }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_electric_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 2000 } } } }
      }]
    }],
    passive: [{
      area: 'line',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { num_of_units: { unit: 'ally', greater_or_equal: 2 } } } }],
        details: { self: { atk_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { num_of_units: { unit: 'ally', greater_or_equal: 4 } } } }],
        details: { self: { cri_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: { type: 'light', role: 'defender' } }, { unit: 'city_guard' }] } }],
        details: { target: { follow_up_attack: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_wave' }],
        details: { self: { tag_stack: { tag: 'charge_electrically', term: { for_rounds: 10 } } } }
      }, {
        conditions: [{ trigger: 'idle', state: { self: [{ tagged: 'charge_electrically' }] } }],
        details: {
          self: {
            tag_release: { tag: 'charge_electrically' },
            tag_stack: { tag: 'high_voltage', term: { for_rounds: 3 } }
          }
        }
      }]
    }, {
      area: 'line',
      effects: [{
        conditions: [{ trigger: 'hit' }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 1500 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 3 }, max_stack: 3 },
            spd_up: { base: { milliPercentage: 1000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 }, max_stack: 3 }
          }
        }
      }]
    }, {
      area: 'line',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        scale_factor: { num_of_units: 'city_guard' },
        details: {
          self: {
            atk_up: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        details: { target: { electric_resist_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }]
    }]
  },
  180: {
    no: 180,
    active: [{
      damage_deal: {
        base: { milliPercentage: 143000 },
        per_lv_up: { milliPercentage: 13000 },
        attribute: 'fire'
      },
      range: 2,
      cost: 5,
      area: 'single',
      effects: [{
        details: {
          self: { tag_release: { tag: 'death_blow' } },
          target: { status_resist_down: { base: { milliPercentage: 17000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } } }
        }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: { target: { fixed_fire_damage_over_time: { base: { value: 140 }, per_lv_up: { value: 20 } } } }
      }, {
        conditions: [{ state: { self: [{ tagged: 'death_blow' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 60000 }, per_lv_up: { milliPercentage: 10000 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 111500 },
        per_lv_up: { milliPercentage: 10000 },
        attribute: 'fire'
      },
      range: 5,
      cost: 7,
      area: 'row_toward_front',
      effects: [{
        details: {
          self: {
            ignore_protect: {},
            tag_release: { tag: 'death_blow' }
          },
          target: { fire_resist_down: { base: { milliPercentage: 22000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } } }
        }
      }, {
        conditions: [{ state: { target: [{ effected: 'ice_resist_down' }, { effected: 'electric_resist_down' }] } }],
        details: { target: { additional_fire_damage: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 } } } }
      }, {
        conditions: [{ state: { self: [{ tagged: 'death_blow' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 5000 } } } }
      }]
    }],
    passive: [{
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { atk_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', round: { at: 1 } }],
        details: { self: { atk_up: { base: { milliPercentage: 24000 }, per_lv_up: { milliPercentage: 4000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', round: { at: 2 } }],
        details: { self: { atk_up: { base: { milliPercentage: 18000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', round: { at: 3 } }],
        details: { self: { atk_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', round: { at: 4 } }],
        details: { self: { atk_up: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'be_killed', state: { squad: { in_squad: 174 } } }],
        details: { target: { atk_up: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 2 } } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: { self: { tag_stack: { tag: 'death_blow', term: { for_rounds: 10 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        details: { self: { spd_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } } }
      }]
    }]
  },
  181: {
    no: 181,
    active: [{
      damage_deal: {
        base: { milliPercentage: 81000 },
        per_lv_up: { milliPercentage: 7000 }
      },
      range: 3,
      cost: 5,
      area: 'single_and_front',
      effects: [{
        details: {
          self: {
            anti_light_type: { base: { milliPercentage: 7000 }, per_lv_up: { milliPercentage: 2000 } },
            anti_heavy_type: { base: { milliPercentage: 14000 }, per_lv_up: { milliPercentage: 4000 } }
          }
        }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 66000 },
        per_lv_up: { milliPercentage: 6000 }
      },
      range: 5,
      cost: 7,
      area: '2_x_2',
      effects: [{
        details: {
          self: { ignore_protect: {} },
          target: {
            immovable: { term: { for_rounds: 2 } },
            acc_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 10000 }, term: { for_rounds: 2 } },
            anti_flying_type: { base: { milliPercentage: -23000 }, per_lv_up: { milliPercentage: -3000 }, term: { for_rounds: 2 } },
            effect_removal: { effects: ['acc_up', 'anti_flying_type'], term: 'immediate' }
          }
        }
      }]
    }],
    passive: [{
      area: 'fixed_cross',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          target: {
            eva_up: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            anti_light_type: { base: { milliPercentage: 7000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            anti_heavy_type: { base: { milliPercentage: 17000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round', round: { at: 1 } }],
        details: { self: { nullify_damage: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', round: { at: 2 } }],
        details: {
          self: {
            barrier: { base: { value: 100 }, per_lv_up: { value: 100 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 7000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', round: { from: 3 } }],
        details: { self: { spd_up: { base: { milliPercentage: 8000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } } } }
      }]
    }]
  },
  182: {
    no: 182,
    active: [{
      damage_deal: {
        base: { milliPercentage: 109000 },
        per_lv_up: { milliPercentage: 9500 }
      },
      range: 3,
      cost: 5,
      area: 'single',
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ trigger: 'hit' }],
        details: {
          target: {
            def_down: { base: { milliPercentage: 7000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } },
            eva_down: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_damage: { base: { milliPercentage: 8000 }, per_lv_up: { milliPercentage: 3000 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 5000 },
        per_lv_up: { milliPercentage: 5000 }
      },
      range: 5,
      cost: 10,
      area: 'all_strong_explosion',
      effects: [{
        details: {
          self: { ignore_protect: {} },
          target: { damage_taken_increased: { base: { milliPercentage: 23000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 2 } } }
        }
      }, {
        conditions: [{ trigger: 'hit' }],
        details: { self: { spd_down: { base: { milliPercentage: 69000 }, per_lv_up: { milliPercentage: -1000 }, term: { for_rounds: 2 }, cannot_be_dispelled: true } } }
      }, {
        conditions: [{ state: { squad: { in_squad: 51 } } }],
        details: { self: { cooperative_attack: { unit: 51, active: 2 } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            acc_up: { base: { milliPercentage: 7000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 7000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'front_of_cross',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 1000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'doom_bringer' }] } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 3000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }]
  },
  183: {
    no: 183,
    active: [{
      damage_deal: {
        base: { milliPercentage: 143000 },
        per_lv_up: { milliPercentage: 13000 }
      },
      range: 3,
      cost: 5,
      area: 'single',
      effects: [{
        details: { self: { ignore_barrier_dr: {} } }
      }, {
        conditions: [{ state: { self: [{ tagged: 'overexcitement' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 5000 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 130500 },
        per_lv_up: { milliPercentage: 11500 }
      },
      range: 5,
      cost: 7,
      area: 'merciless_cat',
      effects: [{
        details: {
          self: { ignore_protect: {} },
          target: {
            def_down: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            acc_down: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { self: [{ not_tagged: 'controlling_excitement' }] } }],
        details: { self: { tag_stack: { tag: 'overexcitement', term: { for_rounds: 99 }, max_stack: 1 } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        details: { self: { atk_up: { base: { milliPercentage: 7000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ tagged: 'overexcitement' }] } }],
        details: { self: { defense_penetration: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'be_hit' }],
        details: {
          self: {
            tag_release: { tag: 'overexcitement' },
            tag_stack: { tag: 'controlling_excitement', term: { for_rounds: 99 }, max_stack: 1 }
          }
        }
      }, {
        conditions: [{ trigger: 'idle', state: { self: [{ tagged: 'controlling_excitement' }] } }],
        details: { self: { tag_stack: { tag: 'excitement', term: { for_rounds: 99 }, max_stack: 1 } } }
      }, {
        conditions: [{ trigger: 'idle', state: { self: [{ tagged: 'excitement' }] } }],
        details: { self: { tag_release: [{ tag: 'controlling_excitement' }, { tag: 'excitement' }] } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { spd_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ tagged: 'overexcitement' }] } }],
        details: { self: { spd_up: { base: { milliPercentage: 1000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: { type: 'light', role: 'defender' } }, { unit: 'companion_series' }] } }],
        details: { target: { follow_up_attack: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        details: { self: { eva_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ tagged: 'controlling_excitement' }] } }],
        details: { self: { eva_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 5000 } } } }
      }]
    }]
  },
  184: {
    no: 184,
    active: [{
      damage_deal: {
        base: { milliPercentage: 90000 },
        per_lv_up: { milliPercentage: 10000 }
      },
      range: 3,
      cost: 5,
      area: 'single',
      effects: [{
        details: {
          self: { ignore_protect: {} },
          target: {
            marked: { term: { for_rounds: 2 } },
            atk_down: { base: { milliPercentage: 1000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            eva_down: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { squad: { in_squad: 112 } } }],
        details: { self: { cooperative_attack: { unit: 112, active: 2 } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 10000 },
        per_lv_up: { milliPercentage: 10000 }
      },
      range: 5,
      cost: 8,
      area: 'all',
      effects: [{
        details: {
          self: { ignore_protect: {} },
          target: {
            atk_down: { base: { milliPercentage: 1000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            fire_resist_down: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } },
            ice_resist_down: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } },
            electric_resist_down: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } },
            status_resist_down: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 1000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: { self: { ap_up: { base: { microValue: 900000 }, per_lv_up: { microValue: 100000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'idle' }],
        details: {
          self: {
            ap_up: { base: { microValue: 900000 }, per_lv_up: { microValue: 100000 }, term: 'immediate' },
            barrier: { base: { value: 100 }, per_lv_up: { value: 100 }, term: { for_rounds: 2 } },
            fire_resist_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            ice_resist_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            electric_resist_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            status_resist_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: { target: { reconnaissance: { term: 'infinite' } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        details: {
          target: {
            eva_up: { base: { milliPercentage: 2000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            fire_resist_up: { base: { milliPercentage: 1500 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            ice_resist_up: { base: { milliPercentage: 1500 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            electric_resist_up: { base: { milliPercentage: 1500 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            damage_reduction: { base: { milliPercentage: 1000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ effected: 'atk_up' }, { effected: 'atk_down' }] } }],
        details: { target: { atk_down: { base: { milliPercentage: 1000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ effected: 'eva_up' }, { effected: 'eva_down' }] } }],
        details: { target: { eva_down: { base: { milliPercentage: 13000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ effected: 'fire_resist_up' }, { effected: 'fire_resist_down' }] } }],
        details: { target: { fire_resist_down: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ effected: 'ice_resist_up' }, { effected: 'ice_resist_down' }] } }],
        details: { target: { ice_resist_down: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ effected: 'electric_resist_up' }, { effected: 'electric_resist_down' }] } }],
        details: { target: { electric_resist_down: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ effected: 'damage_taken_increased' }] } }],
        details: { target: { damage_taken_increased: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }]
    }]
  },
  185: {
    no: 185,
    active: [{
      damage_deal: {
        base: { milliPercentage: 150000 },
        per_lv_up: { milliPercentage: 9500 }
      },
      range: 3,
      cost: 6,
      area: 'single',
      effects: [{
        conditions: [{ state: { self: [{ tagged: 'devotion' }] } }],
        details: { self: { def_up: { base: { milliPercentage: 1000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 } } } }
      }, {
        conditions: [{ state: { self: [{ not_tagged: 'fury' }] } }],
        details: { target: { def_down: { base: { milliPercentage: 17000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 3 } } } }
      }, {
        conditions: [{ state: { self: [{ tagged: 'fury' }] } }],
        details: {
          target: {
            effect_removal: { effect: 'damage_reduction', term: 'immediate' },
            def_down: { base: { milliPercentage: 17000 }, per_lv_up: { milliPercentage: 7000 }, term: { for_rounds: 3 } }
          }
        }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 200000 },
        per_lv_up: { milliPercentage: 15000 }
      },
      range: 4,
      cost: 9,
      area: 'line_with_front_line',
      effects: [{
        conditions: [{ state: { self: [{ tagged: 'fury' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 26000 }, per_lv_up: { milliPercentage: 6000 } } } }
      }]
    }],
    passive: [{
      area: 'right',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: {
          target: {
            nullify_damage: { times: 2, term: { for_rounds: 99 } },
            damage_reduction: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 99 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        details: { target: { target_protect: { term: { for_rounds: 1 }, cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ hp_greater_than: 25 }] } }],
        details: { self: { tag_stack: { tag: 'devotion', term: { for_rounds: 1 }, cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ hp_greater_than: 25, unit: 'attacker' }, { hp_greater_than: 25, unit: 'defender' }] } }],
        details: { target: { atk_up: { base: { milliPercentage: 8000 }, per_lv_up: { milliPercentage: 8000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ hp_greater_than: 25, unit: 'supporter' }] } }],
        details: { target: { spd_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ hp_less_or_equal: 25 }] } }],
        details: {
          self: { tag_stack: { tag: 'fury', term: { for_rounds: 1 }, cannot_be_dispelled: true } },
          target: { def_up: { base: { milliPercentage: 8000 }, per_lv_up: { milliPercentage: 8000 }, term: { for_rounds: 1 } } }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: { self: { battle_continuation_with_hp_rate: { milliPercentage: 50000, times: 1, term: { for_rounds: 99 }, cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            def_up: { base: { milliPercentage: 28000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
            damage_reduction: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ tagged: 'devotion' }] } }],
        details: {
          self: {
            status_resist_up: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 }, cannot_be_dispelled: true },
            def_up: { base: { milliPercentage: 7000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 }, cannot_be_dispelled: true },
            damage_reduction: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 }, cannot_be_dispelled: true }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 17000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ tagged: 'fury' }] } }],
        details: {
          self: {
            counterattack: { milliPercentage: 150000, term: { for_rounds: 1 }, cannot_be_dispelled: true },
            atk_up: { base: { milliPercentage: 23000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 }, cannot_be_dispelled: true },
            defense_penetration: { base: { milliPercentage: 18000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 }, cannot_be_dispelled: true }
          }
        }
      }]
    }]
  },
  186: {
    no: 186,
    active: [{
      damage_deal: {
        base: { milliPercentage: 128000 },
        per_lv_up: { milliPercentage: 11000 }
      },
      range: 4,
      cost: 5,
      area: 'single',
      effects: [{
        conditions: [{ trigger: 'start_wave', state: { self: [{ effected: 'reconnaissance' }] } }],
        details: { self: { tag_stack: { tag: 'intelligence_collecting', term: { for_rounds: 99 } } } }
      }, {
        conditions: [{ trigger: 'idle', state: { self: [{ tagged: 'intelligence_collecting' }] } }],
        details: {
          self: {
            tag_release: { tag: 'intelligence_collecting' },
            tag_stack: { tag: 'collection_complete', term: { for_rounds: 99 } }
          }
        }
      }, {
        conditions: [{ trigger: 'attack', state: { self: [{ tagged: 'collection_complete' }] } }],
        details: {
          self: { tag_release: { tag: 'collection_complete' }, },
          target: { stunned: {} }
        }
      }]
    }, {
      range: 6,
      cost: 8,
      area: 'single',
      effects: [{
        details: { target: { golden_factory_construction: { times: 1 } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { in_squad: 'golden_factory' } } }],
        details: { self: { tag_stack: { tag: 'parts_acquired', term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'idle', state: { self: [{ tagged: 'parts_acquired' }] } }],
        details: {
          self: {
            marked: { term: { for_rounds: 1 } },
            nullify_damage: { term: { for_rounds: 1 } }
          }
        }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { spd_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_wave', state: { self: [{ equipped: 'energy_shield' }] } }],
        details: { self: { ap_up: { base: { microValue: 600000 }, per_lv_up: { microValue: 100000 }, term: 'immediate' } } }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        scale_factor: { num_of_enemies: 'proportion' },
        details: { target: { atk_down: { base: { milliPercentage: 800 }, per_lv_up: { milliPercentage: 300 }, term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_wave', state: { target: [{ unit: 'ags' }] } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 17000 }, per_lv_up: { milliPercentage: 2000 }, term: 'infinite' },
            def_up: { base: { milliPercentage: 17000 }, per_lv_up: { milliPercentage: 2000 }, term: 'infinite' },
            spd_up: { base: { milliPercentage: 1000 }, per_lv_up: { milliPercentage: 1000 }, term: 'infinite' }
          }
        }
      }, {
        conditions: [{ trigger: 'start_wave', state: { squad: { in_squad: 117 }, target: [{ unit: 'ags' }] } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 7000 }, per_lv_up: { milliPercentage: 2000 }, term: 'infinite' },
            def_up: { base: { milliPercentage: 7000 }, per_lv_up: { milliPercentage: 2000 }, term: 'infinite' },
            spd_up: { base: { milliPercentage: 800 }, per_lv_up: { milliPercentage: 300 }, term: 'infinite' }
          }
        }
      }, {
        conditions: [{ trigger: 'idle' }],
        details: { target: { damage_reduction: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } } }
      }]
    }]
  },
  187: {
    no: 187,
    active: [{
      damage_deal: {
        base: { milliPercentage: 95000 },
        per_lv_up: { milliPercentage: 5000 }
      },
      range: 6,
      cost: 4,
      area: 'single',
      effects: [{
        details: {
          self: { ignore_protect: {} },
          target: { fixed_damage: { base: { milliPercentage: 60000 }, per_lv_up: { milliPercentage: 10000 } } }
        }
      }, {
        details: {
          target: {
            fixed_damage: { base: { milliPercentage: 14000 }, per_lv_up: { milliPercentage: 3000 }, rate: { milliPercentage: 50000 } },
            damage_taken_increased: { base: { milliPercentage: 14000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 2 }, rate: { milliPercentage: 40000 } },
            silenced: { rate: { milliPercentage: 30000 } },
          }
        }
      }, {
        conditions: [{ state: { target: [{ hp_greater_or_equal: 100 }] } }],
        details: { target: { status_resist_down: { base: { milliPercentage: 60000 }, per_lv_up: { milliPercentage: 10000 }, term: { for_rounds: 5 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 95000 },
        per_lv_up: { milliPercentage: 5000 }
      },
      range: 6,
      cost: 9,
      area: 'line_with_front_line',
      effects: [{
        details: {
          self: { ignore_protect: {} },
          target: {
            fixed_damage: { base: { milliPercentage: 90000 }, per_lv_up: { milliPercentage: 5000 } },
            push: { value: 1 }
          }
        }
      }, {
        conditions: [{ trigger: 'hit' }],
        details: {
          target: {
            effect_removal: { effects: ['row_protect', 'column_protect', 'target_protect'], term: 'immediate' },
            eva_down: { base: { milliPercentage: 34000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 2 } },
            range_down: { value: 1, term: { for_rounds: 2 } }
          }
        }
      }]
    }],
    passive: [{
      area: 'fixed_all',
      equipment_effects: [{
        conditions: [{ trigger: 'start_wave', state: { squad: { num_of_units: { unit: 'light', greater_or_equal: 2 } }, target: [{ unit: 'light' }] } }],
        details: { target: { defense_penetration: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 99 }, cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_wave', state: { squad: { num_of_units: { unit: 'light', greater_or_equal: 2 } }, target: [{ unit: 'flying' }, { unit: 'heavy' }] } }],
        details: { target: { damage_taken_increased: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 99 }, cannot_be_dispelled: true } } }
      }]
    }, {
      area: 'fixed_all',
      equipment_effects: [{
        conditions: [{ trigger: 'start_wave', state: { squad: { num_of_units: { unit: 'flying', greater_or_equal: 2 } }, target: [{ unit: 'flying' }] } }],
        details: {
          target: {
            range_up: { value: 1, term: { for_rounds: 99 }, cannot_be_dispelled: true },
            acc_up: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 99 }, cannot_be_dispelled: true }
          }
        }
      }, {
        conditions: [{ trigger: 'start_wave', state: { squad: { num_of_units: { unit: 'flying', greater_or_equal: 2 } }, target: [{ unit: 'light' }, { unit: 'heavy' }] } }],
        details: {
          target: {
            range_down: { value: 1, term: { for_rounds: 99 }, cannot_be_dispelled: true },
            acc_down: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 99 }, cannot_be_dispelled: true }
          }
        }
      }]
    }, {
      area: 'fixed_all',
      equipment_effects: [{
        conditions: [{ trigger: 'start_wave', state: { squad: { num_of_units: { unit: 'heavy', greater_or_equal: 1 } }, target: [{ unit: 'heavy' }] } }],
        details: {
          target: {
            ap_up: { base: { microValue: 1800000 }, per_lv_up: { microValue: 200000 }, term: 'immediate' },
            spd_up: { base: { milliPercentage: 7000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 99 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_wave', state: { squad: { num_of_units: { unit: 'heavy', greater_or_equal: 1 } }, target: [{ unit: 'light' }, { unit: 'flying' }] } }],
        details: {
          target: {
            fire_resist_down: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 99 }, cannot_be_dispelled: true },
            ice_resist_down: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 99 }, cannot_be_dispelled: true },
            electric_resist_down: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 99 }, cannot_be_dispelled: true },
            spd_down: { base: { milliPercentage: 7000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 99 }, cannot_be_dispelled: true }
          }
        }
      }]
    }]
  },
  188: {
    no: 188,
    active: [{
      damage_deal: {
        base: { milliPercentage: 102000 },
        per_lv_up: { milliPercentage: 7000 }
      },
      range: 3,
      cost: 6,
      area: 'row_toward_front',
      effects: [{
        details: { target: { acc_down: { base: { milliPercentage: 17000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } } } }
      }]
    }, {
      range: 3,
      cost: 10,
      area: 'fixed_all',
      effects: [{
        details: {
          target: {
            fire_resist_up: { tag: 'light_of_sky', base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            ice_resist_up: { tag: 'light_of_sky', base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            electric_resist_up: { tag: 'light_of_sky', base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            all_debuff_removal: { term: 'immediate' }
          }
        }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: { self: { eva_up: { base: { milliPercentage: 32000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 99 } } } }
      }, {
        conditions: [{ trigger: 'start_round', round: { at: 1 } }],
        details: { self: { damage_reduction: { base: { milliPercentage: 43000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', round: { at: 2 } }],
        details: { self: { damage_reduction: { base: { milliPercentage: 32000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', round: { at: 3 } }],
        details: { self: { damage_reduction: { base: { milliPercentage: 21000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'be_hit' }],
        details: { self: { eva_up: { base: { milliPercentage: 1000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 99 }, max_stack: 3 } } }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { self: [{ not_equipped: ['fire_spray', 'frost_spray', 'shock_spray'] }] } }],
        details: {
          target: {
            fire_resist_down: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            ice_resist_down: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            electric_resist_down: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ equipped: 'fire_spray' }] } }],
        details: { target: { fire_resist_down: { base: { milliPercentage: 33000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ equipped: 'frost_spray' }] } }],
        details: { target: { ice_resist_down: { base: { milliPercentage: 33000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ equipped: 'shock_spray' }] } }],
        details: { target: { electric_resist_down: { base: { milliPercentage: 33000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: { self: { spd_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 3 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ tagged: 'light_of_sky' }] } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 26000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            status_resist_up: { base: { milliPercentage: 26000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 150000 }, term: 'immediate' }
          }
        }
      }]
    }]
  },
  190: {
    no: 190,
    active: [{
      damage_deal: {
        base: { milliPercentage: 63000 },
        per_lv_up: { milliPercentage: 3000 }
      },
      range: 3,
      cost: 5,
      area: '2_x_2',
      effects: [{
        details: {
          target: {
            atk_down: { base: { milliPercentage: 5500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            acc_down: { base: { milliPercentage: 17000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } },
            eva_down: { base: { milliPercentage: 17000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }, {
      range: 6,
      cost: 8,
      area: 'single',
      effects: [{
        conditions: [{ state: { target: [{ unit: 'attacker' }] } }],
        details: { target: { atk_up: { base: { milliPercentage: 32000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ state: { target: [{ unit: 'defender' }] } }],
        details: {
          target: {
            def_up: { base: { milliPercentage: 32000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } },
            eva_up: { base: { milliPercentage: 32000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ unit: 'supporter' }] } }],
        details: { target: { ap_up: { base: { microValue: 2100000 }, per_lv_up: { microValue: 100000 }, term: 'immediate' } } }
      }]
    }],
    passive: [{
      area: 'line_adjacent',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'attacker' }] } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 26000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 21000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{
          trigger: 'start_round',
          state: { target: [{ unit: { type: 'light', role: 'attacker' }, hp_greater_or_equal: 95 }, { unit: { type: 'flying', role: 'attacker' }, hp_greater_or_equal: 95 }] }
        }],
        details: { target: { ignore_barrier_dr: { term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'front',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'defender' }] } }],
        details: {
          target: {
            def_up: { base: { milliPercentage: 32000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 32000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }]
  },
  191: {
    no: 191,
    active: [{
      damage_deal: {
        base: { milliPercentage: 72000 },
        per_lv_up: { milliPercentage: 2000 }
      },
      range: 3,
      cost: 6,
      area: '2_x_2',
      effects: [{
        details: { target: { acc_down: { base: { milliPercentage: 22000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } } } }
      }]
    }, {
      range: 6,
      cost: 8,
      area: 'fixed_all',
      effects: [{
        conditions: [{ state: { target: [{ unit: 'flying' }] } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            acc_up: { base: { milliPercentage: 22000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } },
            eva_up: { base: { milliPercentage: 33000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }],
    passive: [{
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'flying' }] } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: { self: { ap_up: { base: { microValue: 900000 }, per_lv_up: { microValue: 100000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: { type: 'flying', role: 'supporter' } }] } }],
        details: { target: { ap_up: { base: { microValue: 550000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' } } }
      }]
    }, {
      area: 'cross_adjacent_without_back',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'flying' }] } }],
        details: {
          target: {
            anti_light_type: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            anti_heavy_type: { base: { milliPercentage: 27000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }]
  },
  194: {
    no: 194,
    active: [{
      damage_deal: {
        base: { milliPercentage: 159000 },
        per_lv_up: { milliPercentage: 9000 }
      },
      range: 2,
      cost: 5,
      area: '2_x_2',
      effects: [{
        scale_factor: { num_of_units: 'anger_of_horde' },
        details: {
          target: {
            acc_down: { base: { milliPercentage: 5300 }, per_lv_up: { milliPercentage: 300 }, term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 3100 }, per_lv_up: { milliPercentage: 100 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { squad: { in_squad: 42 } } }],
        details: { self: { cooperative_attack: { unit: 42, active: 2 } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 282000 },
        per_lv_up: { milliPercentage: 12000 }
      },
      range: 3,
      cost: 7,
      area: 'single',
      effects: [{
        scale_factor: { num_of_units: 'anger_of_horde' },
        details: { target: { def_down: { base: { milliPercentage: 10500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } } }
      }]
    }],
    passive: [{
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        scale_factor: { num_of_units: 'anger_of_horde' },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 5500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 2100 }, per_lv_up: { milliPercentage: 100 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }]
  },
  201: {
    no: 201,
    active: [{
      damage_deal: {
        base: { milliPercentage: 152000 },
        per_lv_up: { milliPercentage: 12000 }
      },
      range: 4,
      cost: 8,
      area: 'row_toward_front',
      effects: [{
        details: {
          target: {
            provoked: { term: { for_rounds: 2 } },
            atk_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            acc_down: { base: { milliPercentage: 22000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ effected: 'marked' }, { effected: 'immovable' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 26000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 233500 },
        per_lv_up: { milliPercentage: 18500 },
        attribute: 'electric'
      },
      range: 2,
      cost: 9,
      area: 'single',
      effects: [{
        details: {
          target: {
            eva_down: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 3 } },
            stunned: { rate: { milliPercentage: 25000 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ effected: 'marked' }, { effected: 'immovable' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 31500 }, per_lv_up: { milliPercentage: 1500 } } } }
      }, {
        conditions: [{ state: { target: [{ tagged: 'wet' }] } }],
        details: { target: { activation_rate_percentage_up: { effect: 'stunned', milliPercentage: 75000 } } }
      }]
    }],
    passive: [{
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'bioroid' }] } }],
        details: { target: { atk_up: { base: { milliPercentage: 10500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'ags' }] } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 24000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'attack' }],
        details: {
          self: {
            eva_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 4000 }, term: { for_rounds: 2 } },
            barrier: { base: { value: 80 }, per_lv_up: { value: 60 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }, {
      area: 'all_adjacent_without_front_line',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: { target: { ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        details: {
          target: {
            acc_up: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{
          trigger: 'start_round',
          state: { target: [{ unit: { type: 'flying', role: 'attacker' } }, { unit: { type: 'flying', role: 'supporter' } }] }
        }],
        details: { target: { target_protect: { term: { for_rounds: 1 } } } }
      }, {
        // FIXME: add HQ1 Commander OS
        conditions: [{ trigger: 'start_round', state: { self: [{ equipped: 'output_limit_release_device' }] } }],
        details: {
          self: {
            column_protect: { term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: {
        1: 'cross',
        10: 'all'
      },
      effects: [{
        conditions: [{ trigger: 'idle' }],
        details: {
          self: { set_ap: { microValue: 0 } },
          target: { nullify_damage: { term: { for_rounds: 2 }, times: 1 } }
        }
      }, {
        // FIXME: add HQ1 Commander OS
        conditions: [{ trigger: 'start_round', state: { self: [{ equipped: 'defense_os' }] } }],
        details: {
          self: {
            row_protect: { term: { for_rounds: 1 } },
            damage_reduction: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }]
  },
  202: {
    no: 202,
    active: [{
      damage_deal: {
        base: { milliPercentage: 192000 },
        per_lv_up: { milliPercentage: 16000 }
      },
      range: 4,
      cost: 9,
      area: 'line',
      effects: [{
        conditions: [{ state: { target: [{ effected: 'marked' }, { effected: 'immovable' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 251000 },
        per_lv_up: { milliPercentage: 21500 },
        effective: 'next_round'
      },
      range: 6,
      cost: 10,
      area: 'cross_strong_explosion',
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ state: { target: [{ effected: 'marked' }, { effected: 'immovable' }] } }],
        details: {
          self: {
            ignore_barrier_dr: {},
            additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } }
          },
          target: { effect_removal: { effect: 'counterattack' } }
        }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        details: { self: { anti_light_type: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: { self: { ap_up: { base: { microValue: 4000000 }, per_lv_up: { microValue: 200000 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        details: { self: { cri_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }]
    }]
  },
  203: {
    no: 203,
    active: [{
      damage_deal: {
        base: { milliPercentage: 259000 },
        per_lv_up: { milliPercentage: 23500 }
      },
      range: 1,
      cost: 10,
      area: 'single',
      effects: [{
        details: { target: { stunned: { rate: { milliPercentage: 25000 } } } }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: {
          self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } },
          target: {
            activation_rate_percentage_up: { effect: 'stunned', milliPercentage: 25000 },
            effect_removal: { effect: 'damage_reduction' }
          }
        }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 210000 },
        per_lv_up: { milliPercentage: 18500 }
      },
      range: 2,
      cost: 9,
      area: 'single',
      effects: [{
        details: {
          target: {
            effect_removal: { effects: ['row_protect', 'column_protect'] },
            push: { value: 1 }
          }
        }
      }, {
        conditions: [{ trigger: 'hit' }],
        details: {
          target: {
            atk_down: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 2 } },
            spd_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            def_up: { base: { milliPercentage: 75000 }, per_lv_up: { milliPercentage: 3750 }, term: { for_rounds: 1 } },
            status_resist_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            row_protect: { term: { for_rounds: 1 } },
            column_protect: { term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'attack' }],
        details: { self: { damage_reduction: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { self: [{ effected: 'range_up' }] } }],
        details: {
          self: {
            effect_removal: { effect: 'range_up', term: 'immediate' },
            atk_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            acc_up: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 2 } },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            ap_up: { base: { microValue: 1500000 }, per_lv_up: { microValue: 100000 }, term: 'immediate' }
          }
        }
      }]
    }]
  },
  204: {
    no: 204,
    active: [{
      damage_deal: {
        base: { milliPercentage: 110000 },
        per_lv_up: { milliPercentage: 5500 }
      },
      range: 3,
      cost: 4,
      area: 'single',
      effects: [{
        conditions: [{ state: { target: [{ effected: 'def_down' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }]
    }, {
      range: 3,
      cost: 6,
      area: 'single',
      effects: [{
        details: {
          target: {
            def_down: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: { 1: 1, 10: 2 } } },
            effect_removal: { effect: 'damage_reduction' }
          }
        }
      }]
    }],
    passive: []
  },
  206: {
    no: 206,
    active: [{
      damage_deal: {
        base: { milliPercentage: 110000 },
        per_lv_up: { milliPercentage: 10000 }
      },
      range: 3,
      cost: 6,
      area: 'single',
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: {
          self: { additional_damage: { base: { milliPercentage: 48000 }, per_lv_up: { milliPercentage: 3000 } } },
          target: { effect_removal: { effect: 'counterattack' } }
        }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 110000 },
        per_lv_up: { milliPercentage: 10000 }
      },
      range: 6,
      cost: 10,
      area: 'cross_strong_explosion',
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ trigger: 'hit' }],
        details: { target: { effect_removal: { effect: 'counterattack' } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 21000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 53000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 53000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
            defense_penetration: { milliPercentage: 100000, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            eva_up: { base: { milliPercentage: 53000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 8800 }, per_lv_up: { milliPercentage: 800 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'attack' }],
        details: { self: { re_attack: { rate: 'constant' } } }
      }]
    }]
  },
  215: {
    no: 215,
    active: [{
      damage_deal: {
        base: { milliPercentage: 117000 },
        per_lv_up: { milliPercentage: 10000 }
      },
      range: 4,
      cost: 4,
      area: 'single',
      effects: [{
        details: {
          target: {
            marked: { term: { for_rounds: 2 } },
            eva_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'critical', state: { self: [{ stack_ge: { tag: 'tactical_data_link', value: 2 } }] } }],
        details: { target: { acc_down: { milliPercentage: 25000, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ trigger: 'critical', state: { self: [{ stack_ge: { tag: 'tactical_data_link', value: 3 } }] } }],
        details: { target: { all_buff_removal: {} } }
      }]
    }, {
      range: 6,
      cost: 6,
      area: 'single',
      effects: [{
        conditions: [{ state: { target: [{ unit: 'bioroid' }] } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            spd_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ unit: 'ags' }] } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } },
            cri_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 2 } },
            spd_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }],
    passive: [{
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_wave', state: { target: [{ unit: { alias: 'spartan_series', except: 215 } }] } }],
        details: { target: { atk_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: 'infinite' } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: { alias: 'spartan_series', except: 215 } }] } }],
        details: {
          target: {
            follow_up_attack: { term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            damage_reduction: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { target: { cri_up: { tag: 'tactical_data_link', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: 'infinite', max_stack: 3 } } }
      }]
    }]
  },
  216: {
    no: 216,
    active: [{
      damage_deal: {
        base: { milliPercentage: 117000 },
        per_lv_up: { milliPercentage: 10000 }
      },
      range: 3,
      cost: 4,
      area: 'single',
      effects: [{
        details: {
          target: {
            atk_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            cri_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'critical', state: { self: [{ stack_ge: { tag: 'tactical_data_link', value: 1 } }] } }],
        details: {
          self: { tag_release: { tag: 'tactical_data_link' } },
          target: { def_down: { milliPercentage: 25000, term: { for_rounds: 2 } } }
        }
      }, {
        conditions: [{ trigger: 'critical', state: { self: [{ stack_ge: { tag: 'tactical_data_link', value: 2 } }] } }],
        details: {
          self: { tag_release: { tag: 'tactical_data_link' } },
          target: { all_buff_removal: {} }
        }
      }]
    }, {
      damage_deal: {
        milliPercentage: 6500
      },
      range: 4,
      cost: 5,
      area: 'single_and_front',
      effects: [{
        details: {
          target: {
            acc_down: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 1750 }, term: { for_rounds: 2 } },
            ap_down: { base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 } },
            effect_removal: { effect: 'acc_up' }
          }
        }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ tagged: 'passive_radar' }], squad: { in_squad: 217 } } }],
        details: { self: { cooperative_attack: { unit: 217, active: 2 } } }
      }]
    }],
    passive: [{
      area: 'all',
      effects: [{
        conditions: [
          { trigger: 'start_round', state: { target: [{ unit: 'ags' }] } },
          { trigger: 'attack', state: { target: [{ unit: 'ags' }] } }
        ],
        details: {
          target: {
            atk_up: { tag: 'passive_radar', base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            cri_up: { tag: 'passive_radar', base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            spd_up: { tag: 'passive_radar', base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }]
  },
  217: {
    no: 217,
    active: [{
      damage_deal: {
        base: { milliPercentage: 117000 },
        per_lv_up: { milliPercentage: 10000 }
      },
      range: 3,
      cost: 4,
      area: 'single',
      effects: [{
        conditions: [{ state: { target: [{ effected: 'eva_down' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }, {
        conditions: [{ trigger: 'critical', state: { self: [{ stack_ge: { tag: 'tactical_data_link', value: 1 } }] } }],
        details: {
          self: { tag_release: { tag: 'tactical_data_link' } },
          target: { spd_down: { milliPercentage: 15000, term: { for_rounds: 2 } } }
        }
      }, {
        conditions: [{ trigger: 'critical', state: { self: [{ stack_ge: { tag: 'tactical_data_link', value: 2 } }] } }],
        details: {
          self: { tag_release: { tag: 'tactical_data_link' } },
          target: { stunned: {} }
        }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 122500 },
        per_lv_up: { milliPercentage: 10500 }
      },
      range: 4,
      cost: 6,
      area: 'single_and_front',
      effects: [{
        conditions: [{ state: { target: [{ effected: 'marked' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } } }
      }, {
        conditions: [{ state: { self: [{ tagged: 'command_induction' }] } }],
        details: { self: { defense_penetration: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 3000 } } } }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ tagged: 'command_induction' }], squad: { in_squad: 216 } } }],
        details: { self: { cooperative_attack: { unit: 216, active: 2 } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { self: [{ effected: 'follow_up_attack' }] } }],
        details: {
          self: {
            atk_up: { tag: 'command_induction', base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            cri_up: { tag: 'command_induction', base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            acc_up: { tag: 'command_induction', base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ effected: 'follow_up_attack' }], squad: { in_squad: 215 } } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }]
  },
  221: {
    no: 221,
    active: [{
      damage_deal: {
        base: { milliPercentage: 126500 },
        per_lv_up: { milliPercentage: 11500 },
        attribute: 'electric'
      },
      range: 3,
      cost: 8,
      area: 'line',
      effects: [{
        details: {
          self: { ignore_protect: {} },
          target: {
            eva_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } },
            ap_down: { base: { microValue: 400000 }, per_lv_up: { microValue: 20000 }, term: 'immediate' }
          }
        }
      }, {
        conditions: [{ state: { target: [{ effected: 'marked' }, { effected: 'immovable' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 219500 },
        per_lv_up: { milliPercentage: 19500 },
        attribute: 'electric'
      },
      range: 3,
      cost: 9,
      area: 'single',
      effects: [{
        details: {
          self: { anti_flying_type: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } },
          target: {
            eva_down: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } },
            ap_down: { base: { microValue: 600000 }, per_lv_up: { microValue: 30000 }, term: 'immediate' }
          }
        }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } } }
      }, {
        conditions: [{ state: { self: [{ stack_ge: { tag: 'energy_convert', value: 3 } }] } }],
        details: { self: { ignore_barrier_dr: {} } }
      }]
    }],
    passive: [{
      area: {
        1: 'line',
        10: 'cross'
      },
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: { eva_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 4000 }, term: { for_rounds: 1 } } },
          target: {
            eva_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 4000 }, term: 'infinite', max_stack: 1, times: 1 },
            counterattack: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 5000 }, term: 'infinite', max_stack: 1, times: 1 }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            atk_up: { tag: 'energy_convert', base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 600 }, term: 'infinite', max_stack: 3 },
            electric_resist_up: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ stack_ge: { tag: 'energy_convert', value: 3 } }] } }],
        details: { self: { spd_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }]
    }, {
      area: {
        1: 'fixed_cross',
        10: 'fixed_all'
      },
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ effected: 'electric_resist_down' }] } }],
        details: { target: { tag_stack: { tag: 'electromagnetic_induction_target', term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'hit', state: { target: [{ tagged: 'electromagnetic_induction_target' }] } }],
        details: { target: { fixed_damage: { base: { milliPercentage: 22000 }, per_lv_up: { milliPercentage: 2000 } } } }
      }]
    }]
  },
  222: {
    no: 222,
    active: [{
      mobility_position: {
        damage_deal: {
          base: { milliPercentage: 117000 },
          per_lv_up: { milliPercentage: 10000 }
        },
        range: 3,
        cost: 5,
        area: 'single',
        effects: [{
          details: {
            target: {
              marked: { term: { for_rounds: 2 } },
              eva_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } },
              damage_taken_increased: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
            }
          }
        }]
      },
      fixed_position: {
        damage_deal: {
          base: { milliPercentage: 127000 },
          per_lv_up: { milliPercentage: 11000 }
        },
        range: 4,
        cost: 5,
        area: 'single',
        effects: [{
          details: {
            target: {
              provoked: { term: { for_rounds: 2 } },
              atk_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
              cri_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
            }
          }
        }]
      }
    }, {
      mobility_position: {
        damage_deal: {
          base: { milliPercentage: 190500 },
          per_lv_up: { milliPercentage: 16500 }
        },
        range: 3,
        cost: 8,
        area: 'single',
        effects: [{
          conditions: [{ state: { target: [{ effected: 'marked' }, { effected: 'eva_down' }] } }],
          details: { self: { additional_damage: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 } } } }
        }]
      },
      fixed_position: {
        damage_deal: {
          base: { milliPercentage: 122500 },
          per_lv_up: { milliPercentage: 10500 }
        },
        range: 3,
        cost: 8,
        area: 'fan_shape_strong_explosion',
        effects: [{
          details: {
            target: {
              provoked: { term: { for_rounds: 2 } },
              spd_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
            }
          }
        }]
      }
    }],
    passive: [{
      mobility_position: {
        area: 'row_toward_back',
        effects: [{
          conditions: [{ trigger: 'start_round' }],
          details: {
            self: { def_up: { base: { milliPercentage: 70000 }, per_lv_up: { milliPercentage: 3500 }, term: { for_rounds: 1 } } },
            target: { target_protect: { term: { for_rounds: 1 } } }
          }
        }, {
          conditions: [{ trigger: 'idle' }],
          details: {
            self: {
              form_change: { form: 'fixed_position' },
              damage_reduction: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
              row_protect: { term: { for_rounds: 1 } }
            }
          }
        }]
      },
      fixed_position: {
        area: 'self',
        effects:[{
          conditions: [{ trigger: 'start_round' }],
          details: {
            self: {
              def_up: { base: { milliPercentage: 70000 }, per_lv_up: { milliPercentage: 3500 }, term: { for_rounds: 1 } },
              damage_reduction: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
              row_protect: { term: { for_rounds: 1 } },
              immovable: { term: { for_rounds: 1 }, cannot_be_dispelled: true }
            }
          }
        }, {
          conditions: [{ trigger: 'idle' }],
          details: { self: { form_change: { form: 'mobility_position' } } }
        }]
      }
    }]
  },
  224: {
    no: 224,
    active: [{
      damage_deal: {
        base: { milliPercentage: 270000 },
        per_lv_up: { milliPercentage: 13500 }
      },
      range: 2,
      cost: 9,
      area: 'single',
      effects: [{
        details: {
          self: {
            merciless: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 2000 } },
            tag_stack: { tag: 'predator', max_stack: 5 }
          },
          target: { def_down: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 2 } } }
        }
      }, {
        conditions: [{ state: { self: [{ hp_greater_or_equal: 50 }] } }],
        details: { target: { effect_removal: { effect: 'damage_reduction' } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 160000 },
        per_lv_up: { milliPercentage: 8000 },
        attribute: 'fire'
      },
      range: 5,
      cost: 10,
      area: {
        1: 'row_toward_front',
        10: 'row_toward_front_with_front_line'
      },
      effects: [{
        details: {
          self: {
            ignore_protect: {},
            tag_unstack: { tag: 'predator', value: 1 }
          },
          target: { fire_resist_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } } }
        }
      }, {
        conditions: [{ state: { self: [{ stack_ge: { tag: 'predator', value: 1 } }] } }],
        details: { target: { fire_resist_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ state: { self: [{ stack_ge: { tag: 'predator', value: 2 } }] } }],
        details: { target: { fire_resist_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { self: [{ in_front_line: {} }] } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 24000 }, per_lv_up: { milliPercentage: 1200 } },
            cri_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 600 } },
            defense_penetration: { base: { milliPercentage: 34000 }, per_lv_up: { milliPercentage: 4000 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ in_mid_line: {} }] } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 18000 }, per_lv_up: { milliPercentage: 900 } },
            cri_up: { base: { milliPercentage: 9000 }, per_lv_up: { milliPercentage: 450 } },
            defense_penetration: { base: { milliPercentage: 23000 }, per_lv_up: { milliPercentage: 3000 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ in_back_line: {} }] } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 600 } },
            cri_up: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 300 } },
            defense_penetration: { base: { milliPercentage: 17000 }, per_lv_up: { milliPercentage: 2000 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ tagged: 'predator' }] } }],
        details: { self: { ignore_barrier_dr: {} } }
      }, {
        conditions: [{ trigger: 'critical', state: { self: [{ equipped: 'output_limit_release_device' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 } } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            def_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 4000 } },
            status_resist_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 3000 } },
            damage_reduction: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 3000 } },
            effect_removal: { effect: 'target_protect' }
          }
        }
      }, {
        conditions: [{ trigger: 'attack' }],
        details: {
          self: {
            marked: { term: { for_rounds: 2 } },
            effect_removal: { effect: 'target_protect' }
          }
        }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: { self: { battle_continuation: { base: { value: 100 }, per_lv_up: { value: 100 }, term: 'infinite' } } }
      }, {
        conditions: [{ trigger: 'revive' }],
        details: {
          self: {
            spd_up: { tag: 'last_roar', base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 2000 }, term: 'infinite', cannot_be_dispelled: true },
            effect_removal: { effect: 'battle_continuation' }
          }
        }
      }, {
        conditions: [{ trigger: 'be_killed', state: { self: [{ tagged: 'last_roar' }] } }],
        details: { target: { fixed_damage: { base: { milliPercentage: 150000 }, per_lv_up: { milliPercentage: 20000 } } } }
      }]
    }]
  },
  225: {
    no: 225,
    active: [{
      damage_deal: {
        base: { milliPercentage: 128000 },
        per_lv_up: { milliPercentage: 11000 }
      },
      range: 4,
      cost: 5,
      area: 'single',
      effects: [{
        conditions: [{ state: { target: [{ effected: 'def_down' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 201000 },
        per_lv_up: { milliPercentage: 18000 }
      },
      range: 6,
      cost: 8,
      area: 'single_and_front',
      effects: [{
        details: {
          self: {
            ignore_protect: {},
            ignore_barrier_dr: {}
          },
          target: {
            def_down: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            range_down: { value: 1, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_damage: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }]
    }],
    passive: [{
      area: 'single',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: { self: { minimize_damage: { times: 2 } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        details: { self: { acc_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }]
    }, {
      area: 'line_with_front_line',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'defender' }, { unit: 'spartan_series' }, { unit: 'steel_line' }] } }],
        details: { target: { follow_up_attack: {} } }
      }, {
        conditions: [{ trigger: 'enemy_killed' }],
        details: {
          self: {
            ap_up: { base: { microValue: 110000 }, per_lv_up: { microValue: 10000 }, term: 'immediate' },
            eva_up: { base: { milliPercentage: 7000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 }, max_stack: 1 },
            def_up: { base: { milliPercentage: 7000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 }, max_stack: 1 }
          }
        }
      }, {
        conditions: [{ trigger: 'enemy_killed', state: { target: [{ unit: 'defender' }, { unit: 'spartan_series' }, { unit: 'steel_line' }] } }],
        details: {
          target: {
            ap_up: { base: { microValue: 110000 }, per_lv_up: { microValue: 10000 }, term: 'immediate' },
            eva_up: { base: { milliPercentage: 7000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 }, max_stack: 1 },
            def_up: { base: { milliPercentage: 7000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 }, max_stack: 1 }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 } },
            cri_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 } },
            acc_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        scale_factor: { num_of_units: 'ags', except: 'self' },
        details: {
          self: {
            atk_up: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 1000 } },
            defense_penetration: { base: { milliPercentage: 3500 }, per_lv_up: { milliPercentage: 1000 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        scale_factor: { num_of_units: 'bioroid' },
        details: {
          self: {
            atk_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 } },
            cri_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 } }
          }
        }
      }]
    }]
  },
  226: {
    no: 226,
    active: [{
      damage_deal: {
        base: { milliPercentage: 126500 },
        per_lv_up: { milliPercentage: 11500 }
      },
      range: 3,
      cost: 6,
      area: 'row_toward_front',
      effects: [{
        details: {
          target: {
            damage_taken_increased: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } },
            spd_down: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } },
            immovable: { term: { for_rounds: 2 } }
          }
        }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 180500 },
        per_lv_up: { milliPercentage: 16000 }
      },
      range: 5,
      cost: 9,
      area: 'cross',
      effects: [{
        details: {
          target: {
            ap_down: { base: { microValue: 600000 }, per_lv_up: { microValue: 100000 } },
            silenced: { rate: 'rarely' }
          }
        }
      }, {
        conditions: [{ state: { target: [{ effected: 'immovable' }] } }],
        details: { target: { activation_rate_percentage_up: { effect: 'silenced', milliPercentage: 100000 } } }
      }, {
        conditions: [{ state: { target: [{ unit: 'light' }] } }],
        details: {
          target: {
            atk_down: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } },
            acc_down: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ unit: 'flying' }] } }],
        details: {
          target: {
            eva_down: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } },
            spd_down: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ unit: 'heavy' }] } }],
        details: {
          target: {
            atk_down: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } },
            def_down: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }],
    passive: [{
      area: 'all_adjacent',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'light' }] } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'flying' }] } }],
        details: {
          target: {
            eva_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'heavy' }] } }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            def_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'ags' }] } }],
        details: { target: { defense_penetration: { base: { milliPercentage: 13000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round', round: { until: 4 } }],
        details: {
          self: {
            barrier: { value: 250, term: { for_rounds: 1 } },
            def_up: { base: { milliPercentage: 4000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', round: { until: 3 } }],
        details: {
          self: {
            barrier: { value: 250, term: { for_rounds: 1 } },
            def_up: { base: { milliPercentage: 4000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', round: { until: 2 } }],
        details: {
          self: {
            barrier: { value: 250, term: { for_rounds: 1 } },
            def_up: { base: { milliPercentage: 4000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', round: { until: 1 } }],
        details: {
          self: {
            barrier: { value: 250, term: { for_rounds: 1 } },
            def_up: { base: { milliPercentage: 4000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ effected: 'atk_down' }] } }],
        details: { target: { atk_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ effected: 'def_down' }] } }],
        details: { target: { def_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ effected: 'acc_down' }] } }],
        details: { target: { acc_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ effected: 'cri_down' }] } }],
        details: { target: { cri_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ effected: 'eva_down' }] } }],
        details: { target: { eva_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ effected: 'spd_down' }] } }],
        details: { target: { spd_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } } }
      }]
    }]
  },
  227: {
    no: 227,
    active: [{
      damage_deal: {
        base: { milliPercentage: 143000 },
        per_lv_up: { milliPercentage: 13000 }
      },
      range: 4,
      cost: 6,
      area: 'single',
      effects: [{
        details: {
          target: {
            marked: { term: { for_rounds: 2 } },
            eva_down: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } },
            effect_removal: { effect: 'def_up', term: 'immediate' }
          }
        }
      }]
    }, {
      range: 3,
      cost: 8,
      area: 'cross_adjacent',
      effects: [{
        conditions: [{ state: { target: [{ unit: 'heavy' }] } }],
        scale_factor: { num_of_enemies: 'proportion' },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 2500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            acc_up: { base: { milliPercentage: 2500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ unit: 'light' }] } }],
        scale_factor: { num_of_enemies: 'inverse_proportion' },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 9000 }, per_lv_up: { milliPercentage: 4500 }, term: { for_rounds: 2 } },
            spd_up: { base: { milliPercentage: 16200 }, per_lv_up: { milliPercentage: 2700 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }],
    passive: [{
      area: 'all_adjacent',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: { type: 'light', role: 'attacker' } }, { unit: { type: 'light', role: 'supporter' } }, { unit: { type: 'heavy', role: 'attacker' } }, { unit: { type: 'heavy', role: 'supporter' } }] } }],
        details: { target: { follow_up_attack: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'attacker' }] } }],
        details: { target: { cri_up: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'defender' }] } }],
        details: { target: { def_up: { base: { milliPercentage: 7000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ unit: 'supporter' }] } }],
        details: { target: { spd_up: { base: { milliPercentage: 1000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }]
    }]
  },
  228: {
    no: 228,
    active: [{
      damage_deal: {
        base: { milliPercentage: 118000 },
        per_lv_up: { milliPercentage: 8000 }
      },
      range: 3,
      cost: 6,
      area: 'wing',
      effects: [{
        details: {
          self: { ignore_protect: {} },
          target: {
            immovable: { term: { for_rounds: 2 } },
            def_down: { base: { milliPercentage: 21000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            spd_down: { base: { milliPercentage: 5500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 15500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 270000 },
        per_lv_up: { milliPercentage: 20000 }
      },
      range: 2,
      cost: 9,
      area: 'single',
      effects: [{
        details: { target: { spd_down: { base: { milliPercentage: 10500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            def_up: { base: { milliPercentage: 93000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
            status_resist_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            row_protect: { term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', round: { at: 1 } }],
        details: { self: { damage_reduction: { base: { milliPercentage: 52000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', round: { at: 2 } }],
        details: { self: { damage_reduction: { base: { milliPercentage: 42000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', round: { from: 3 } }],
        details: { self: { damage_reduction: { base: { milliPercentage: 32000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'all_backward',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          target: {
            target_protect: { term: { for_rounds: 1 } },
            atk_up: { base: { milliPercentage: 11700 }, per_lv_up: { milliPercentage: 700 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 27000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: {
          target: {
            immovable: { term: { for_rounds: 2 } },
            spd_down: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 5500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }]
  },
  231: {
    no: 231,
    active: [{
      damage_deal: {
        base: { milliPercentage: 220000 },
        per_lv_up: { milliPercentage: 20000 },
        attribute: 'electric'
      },
      range: 2,
      cost: 6,
      area: 'single',
      effects: [{
        conditions: [{ trigger: 'hit' }],
        details: {
          self: { tag_stack: { tag: 'charge_electrically', term: { for_rounds: 10 } } },
          target: {
            ap_down: { base: { microValue: 450000 }, per_lv_up: { microValue: 30000 }, term: 'immediate' },
            electric_resist_down: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 110000 },
        per_lv_up: { milliPercentage: 10000 },
        attribute: 'electric'
      },
      range: 5,
      cost: 8,
      area: 'wing',
      effects: [{
        details: { self: { fixed_electric_damage_over_time: { base: { value: 110 }, per_lv_up: { value: 10 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ trigger: 'hit' }],
        details: {
          self: { tag_stack: { tag: 'charge_electrically', term: { for_rounds: 10 } } },
          target: {
            ap_down: { base: { microValue: 250000 }, per_lv_up: { microValue: 20000 }, term: 'immediate' },
            electric_resist_down: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 4550 }, per_lv_up: { milliPercentage: 300 }, term: { for_rounds: 1 } },
            electric_resist_up: { base: { milliPercentage: 41000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'hit', state: { self: [{ stack_ge: { tag: 'charge_electrically', value: 2 } }] } }],
        details: { target: { fixed_electric_damage_over_time: { base: { value: 275 }, per_lv_up: { value: 25 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ stack_ge: { tag: 'charge_electrically', value: 3 } }] } }],
        details: { target: { fixed_electric_damage_over_time: { base: { value: 550 }, per_lv_up: { value: 50 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ stack_ge: { tag: 'charge_electrically', value: 4 } }] } }],
        details: { target: { fixed_electric_damage_over_time: { base: { value: 550 }, per_lv_up: { value: 50 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ stack_ge: { tag: 'charge_electrically', value: 5 } }] } }],
        details: { target: { fixed_electric_damage_over_time: { base: { value: 550 }, per_lv_up: { value: 50 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ stack_ge: { tag: 'charge_electrically', value: 6 } }] } }],
        details: { target: { fixed_electric_damage_over_time: { base: { value: 550 }, per_lv_up: { value: 50 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ stack_ge: { tag: 'charge_electrically', value: 7 } }] } }],
        details: { target: { fixed_electric_damage_over_time: { base: { value: 550 }, per_lv_up: { value: 50 }, term: { for_rounds: 2 } } } }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          target: {
            acc_down: { base: { milliPercentage: 3200 }, per_lv_up: { milliPercentage: 200 }, term: { for_rounds: 1 } },
            cri_down: { base: { milliPercentage: 3200 }, per_lv_up: { milliPercentage: 200 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        details: { target: { damage_taken_increased: { base: { milliPercentage: 21000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }]
    }]
  },
  232: {
    no: 232,
    active: [{
      damage_deal: {
        base: { milliPercentage: 270000 },
        per_lv_up: { milliPercentage: 20000 },
        attribute: 'ice'
      },
      range: 2,
      cost: 7,
      area: 'single',
      effects: [{
        details: {
          self: {
            ignore_protect: {},
            merciless: { base: { milliPercentage: 27000 }, per_lv_up: { milliPercentage: 2000 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ hp_less_or_equal: 50 }] } }],
        details: { target: { effect_removal: { effect: 'damage_reduction' } } }
      }, {
        conditions: [{ state: { target: [{ tagged: 'wet' }] } }],
        details: {
          target: {
            all_buff_removal: { term: 'immediate' },
            stunned: { term: { for_rounds: 2 } }
          }
        }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 190000 },
        per_lv_up: { milliPercentage: 10000 },
        attribute: 'ice'
      },
      range: 5,
      cost: 9,
      area: '2_x_3',
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ state: { target: [{ effected: 'ice_resist_down' }] } }],
        details: { self: { additional_ice_damage: { base: { milliPercentage: 27000 }, per_lv_up: { milliPercentage: 2000 } } } }
      }, {
        conditions: [{ state: { target: [{ tagged: 'wet' }] } }],
        details: {
          target: {
            all_buff_removal: { term: 'immediate' },
            immovable: { term: { for_rounds: 2 } },
            spd_down: { base: { milliPercentage: 5500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 43000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 99 } },
            cri_up: { base: { milliPercentage: 10500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 99 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', round: { from: 2 } }],
        details: { self: { atk_down: { base: { milliPercentage: 5500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 7 } } } }
      }, {
        conditions: [{ trigger: 'kill' }],
        details: { self: { atk_up: { base: { milliPercentage: 3200 }, per_lv_up: { milliPercentage: 200 }, term: { for_rounds: 99 } } } }
      }]
    }, {
      area: 'middle_staircase',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          target: {
            atk_up: { base: { milliPercentage: 10500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 21000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 4800 }, per_lv_up: { milliPercentage: 300 }, term: { for_rounds: 1 } },
            fire_resist_up: { base: { milliPercentage: 22000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: {
          target: {
            eva_down: { base: { milliPercentage: 22000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 5 } },
            spd_down: { base: { milliPercentage: 5500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 5 } },
            ice_resist_down: { base: { milliPercentage: 10500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 5 } }
          }
        }
      }]
    }]
  },
  233: {
    no: 233,
    active: [{
      damage_deal: {
        base: { milliPercentage: 220000 },
        per_lv_up: { milliPercentage: 20000 }
      },
      range: 2,
      cost: 6,
      area: 'single',
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: {
          self: { additional_damage: { base: { milliPercentage: 27000 }, per_lv_up: { milliPercentage: 2000 } } },
          target: { fixed_damage_over_time: { base: { value: 870 }, per_lv_up: { value: 70 }, term: { for_rounds: 2 } } }
        }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 130000 },
        per_lv_up: { milliPercentage: 10000 }
      },
      range: 5,
      cost: 8,
      area: 'line',
      effects: [{
        conditions: [{ trigger: 'hit' }],
        details: {
          target: {
            immovable: {},
            stunned: { rate: { milliPercentage: 40000 } }
          }
        }
      }, {
        scale_factor: { per_stack: { tag: 'hunt_preparation' } },
        details: { self: { activation_rate_percentage_up: { effect: 'stunned', milliPercentage: 30000 } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 21000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 10500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'idle' }],
        details: {
          self: {
            tag_stack: { tag: 'hunt_preparation', term: { for_rounds: 3 } },
            atk_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 } },
            eva_up: { base: { milliPercentage: 53000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 3 } },
            range_up: { value: 3, term: { for_rounds: 3 } },
            counterattack: { base: { milliPercentage: 73000 }, per_lv_up: { milliPercentage: 3000 }, times: 1, term: { for_rounds: 4 } }
          }
        }
      }]
    }, {
      area: 'line',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          target: {
            anti_light_type: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            anti_heavy_type: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { num_of_units: { unit: 'ally', greater_or_equal: 4 } } } }],
        details: {
          target: {
            anti_light_type: { base: { milliPercentage: 5500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            anti_heavy_type: { base: { milliPercentage: 5500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }]
  }
} as const;
