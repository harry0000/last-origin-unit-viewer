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
        conditions: [{ trigger: 'hit' }],
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
        conditions: [{ state: { self: [{ stack: { tag: 'plasma_generator', greater_or_equal: 3 } }] } }],
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
            damage_reduction_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ stack: { tag: 'plasma_generator', greater_or_equal: 3 } }] } }],
        details: {
          self: {
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } },
            damage_reduction_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { defense_penetration: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ stack: { tag: 'plasma_generator', greater_or_equal: 2 } }] } }],
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
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['bioroid'] },
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
        conditions: [{ state: { target: [{ affected: 'immovable' }] } }],
        target: { kind: 'enemy' },
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
        target: { kind: 'enemy' },
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
        target: { kind: 'ally' },
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
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
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
        conditions: [{ state: { target: [{ affected: 'marked' }, { affected: 'immovable' }] } }],
        target: { kind: 'enemy' },
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
        details: { self: { light_type_damage_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } } } }
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
        target: { kind: 'enemy' },
        details: {
          target: {
            immovable: { term: { for_rounds: 2 } },
            spd_down: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ affected: 'immovable' }, { affected: 'eva_down' }] } }],
        target: { kind: 'enemy' },
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
        conditions: [{ state: { target: [{ affected: 'immovable' }, { affected: 'eva_down' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 } } } }
      }]
    }],
    passive: [{
      area: 'line_adjacent',
      effects: [{
        conditions: [{ trigger: 'attack' }],
        target: { kind: 'ally', conditions: ['attacker', 'supporter'] },
        details: { target: { follow_up_attack: { term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ trigger: 'attack', state: { self: [{ affected: 'follow_up_attack' }, { affected: 'target_protect' }] } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            acc_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'kill' }],
        target: { kind: 'ally', conditions: ['attacker', 'supporter'] },
        details: { target: { ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 } } } }
      }]
    }, {
      area: 'front',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
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
        1: 'cross_small_explosion',
        10: 'circle_small_explosion'
      },
      effects: [{
        target: { kind: 'enemy' },
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
        target: { kind: 'enemy' },
        details: {
          target: {
            acc_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } },
            eva_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } },
          }
        }
      }, {
        conditions: [{ state: { target: [{ tagged: 'corrosion' }] } }],
        target: { kind: 'enemy' },
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
        target: { kind: 'enemy' },
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
        target: { kind: 'enemy' },
        details: { target: { buff_removal: { effect: 'damage_reduction_up' } } }
      }, {
        conditions: [{ state: { target: [{ tagged: 'corrosion' }] } }],
        target: { kind: 'enemy' },
        details: { target: { fixed_damage: { base: { milliPercentage: 33000 }, per_lv_up: { milliPercentage: 3000 } } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'spd_up' }] } }],
        details: {
          self: {
            buff_removal: { effect: 'spd_up' },
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
        conditions: [{ trigger: 'start_wave' }],
        target: { kind: 'ally', conditions: ['flying'] },
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
        base: { milliPercentage: 150000 },
        per_lv_up: { milliPercentage: 20000 }
      },
      range: 3,
      cost: 6,
      area: 'single',
      effects: [{
        target: { kind: 'enemy' },
        details: { target: { def_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 } } } }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 325000 },
        per_lv_up: { milliPercentage: 75000 }
      },
      range: 3,
      cost: 9,
      area: 'single',
      effects: [{
        conditions: [{ state: { target: [{ affected: 'def_down' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 2500 } } } }
      }, {
        conditions: [{ state: { target: [{ affected: 'damage_taken_increased' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 2500 } } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            cri_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 4000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'hit' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 }, max_stack: 1, cannot_be_dispelled: true },
            damage_taken_increased: { base: { milliPercentage: 100000 }, per_lv_up: { milliPercentage: -5000 }, term: { for_rounds: 2 }, max_stack: 1, cannot_be_dispelled: true }
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
        target: { kind: 'enemy' },
        details: {
          target: {
            spd_down: { tag: 'corrosion', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 3 }, max_stack: 3 },
            def_down: { tag: 'corrosion', base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 }, max_stack: 3 },
            fixed_damage_over_time: { tag: 'corrosion', base: { value: 40 }, per_lv_up: { value: 30 }, term: { for_rounds: 3 }, max_stack: 3 }
          }
        }
      }, {
        conditions: [{ state: { target: [{ tagged: 'corrosion' }] } }],
        target: { kind: 'enemy' },
        details: {
          target: {
            fixed_damage: { base: { milliPercentage: 33000 }, per_lv_up: { milliPercentage: 3000 } },
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
        target: { kind: 'enemy' },
        details: {
          target: {
            spd_down: { tag: 'corrosion', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 3 }, max_stack: 3 },
            def_down: { tag: 'corrosion', base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 }, max_stack: 3 },
            fixed_damage_over_time: { tag: 'corrosion', base: { value: 40 }, per_lv_up: { value: 30 }, term: { for_rounds: 3 }, max_stack: 3 },
          }
        }
      }, {
        conditions: [{ state: { target: [{ tagged: 'corrosion' }] } }],
        target: { kind: 'enemy' },
        details: {
          target: {
            fixed_damage: { base: { milliPercentage: 33000 }, per_lv_up: { milliPercentage: 3000 } },
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
        target: { kind: 'ally' },
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
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['bioroid'] },
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
        target: { kind: 'enemy' },
        details: {
          target: {
            spd_down: { tag: 'corrosion', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 3 }, max_stack: 3 },
            def_down: { tag: 'corrosion', base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 }, max_stack: 3 },
            fixed_damage_over_time: { tag: 'corrosion', base: { value: 40 }, per_lv_up: { value: 30 }, term: { for_rounds: 3 }, max_stack: 3 }
          }
        }
      }, {
        conditions: [{ state: { target: [{ tagged: 'corrosion' }] } }],
        target: { kind: 'enemy' },
        details: {
          target: {
            fixed_damage: { base: { milliPercentage: 33000 }, per_lv_up: { milliPercentage: 3000 } },
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
        target: { kind: 'ally' },
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
        conditions: [{ trigger: 'start_round', state: { target: [{ affected_by: { unit: 9 } }] } }],
        target: { kind: 'ally' },
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
        target: { kind: 'enemy' },
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
        conditions: [{ state: { target: [{ affected: 'ice_resist_down' }] } }],
        target: { kind: 'enemy' },
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
            heavy_type_damage_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'row_toward_front',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
        details: {
          target: {
            heavy_type_damage_up: { base: { milliPercentage: 8250 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            fire_resist_up: { base: { milliPercentage: 13250 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['defender'] },
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
            damage_reduction_up: { base: { milliPercentage: 21000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
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
          target: { kind: 'enemy' },
          details: {
            target: {
              ap_down: { base: { microValue: 300000 }, per_lv_up: { microValue: 15000 }, term: 'immediate' },
              eva_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 3 } }
            }
          }
        }, {
          conditions: [{ state: { target: [{ tagged: 'wet' }] } }],
          target: { kind: 'enemy' },
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
          target: { kind: 'enemy' },
          details: {
            target: {
              ap_down: { base: { microValue: 300000 }, per_lv_up: { microValue: 15000 }, term: 'immediate' },
              eva_down: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 3 } }
            }
          }
        }, {
          conditions: [{ state: { target: [{ tagged: 'wet' }] } }],
          target: { kind: 'enemy' },
          details: {
            self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } },
            target: { buff_removal: { effect: 'damage_reduction_up' } }
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
          target: { kind: 'enemy' },
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
          target: { kind: 'enemy' },
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
          conditions: [{ state: { self: [{ stack: { tag: 'electric_charge', greater_or_equal: 2 } }] } }],
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
        target: { kind: 'ally' },
        details: {
          target: {
            eva_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 4000 }, per_lv_up: { milliPercentage: 200 }, term: { for_rounds: 1 } },
            electric_resist_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ form: 'electric_emission' }] } }],
        target: { kind: 'ally' },
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
        target: { kind: 'ally' },
        details: { target: { exp_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2250 }, term: 'infinite' } } }
      }, {
        conditions: [{ trigger: 'attack' }],
        target: { kind: 'ally' },
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
        target: { kind: 'enemy' },
        details: { target: { def_down: { base: { milliPercentage: 32000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 3 } } } }
      }, {
        conditions: [{ state: { target: [{ affected: 'def_down' }] } }],
        target: { kind: 'enemy' },
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
        target: { kind: 'enemy' },
        details: { target: { def_down: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ state: { target: [{ affected: 'def_down' }] } }],
        target: { kind: 'enemy' },
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
        scale_factor: { per_units: { type: 'squad' } },
        details: { self: { atk_up: { base: { milliPercentage: 4500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'line_with_back',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['light'] },
        details: {
          target: {
            follow_up_attack: { term: { for_rounds: 1 } },
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ tagged: 'sadistic_chef' }] } }],
        target: { kind: 'ally', conditions: ['light'] },
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
        target: { kind: 'enemy' },
        details: {
          self: { ignore_protect: {} },
          target: {
            provoked: { term: { for_rounds: 2 } },
            atk_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            acc_down: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ affected: 'marked' }, { affected: 'eva_down' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }]
    }, {
      range: 6,
      cost: 9,
      area: 'single',
      effects: [{
        target: { kind: 'ally' },
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
        target: { kind: 'ally', conditions: ['attacker', 'supporter'] },
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
            damage_reduction_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            column_protect: { term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ affected: 'provoked' }] } }],
        target: { kind: 'enemy' },
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
        target: { kind: 'enemy' },
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
        target: { kind: 'ally' },
        details: {
          target: {
            damage_reduction_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 3 } },
            barrier: { base: { value: 150 }, per_lv_up: { value: 50 }, term: { for_rounds: 3 } }
          },
          self: {
            damage_reduction_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 3 } },
            barrier: { base: { value: 150 }, per_lv_up: { value: 50 }, term: { for_rounds: 3 } }
          }
        }
      }, {
        target: { kind: 'ally', conditions: ['attacker', 'supporter'] },
        details: { target: { target_protect: { term: { for_rounds: 3 } } } }
      }]
    }],
    passive: [{
      area: 'cross_adjacent_without_front',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        target: { kind: 'ally' },
        details: { target: { silenced: { term: 'infinite', cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
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
        target: { kind: 'enemy' },
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
        target: { kind: 'enemy' },
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
        conditions: [{ trigger: 'start_round', state: { self: [{ stack: { tag: 'output_increase', greater_or_equal: 3 } }] } }],
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
      area: 'twin',
      effects: [{
        target: { kind: 'enemy' },
        details: {
          target: {
            provoked: { term: { for_rounds: 2 } },
            atk_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            cri_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ affected: 'provoked' }] } }],
        target: { kind: 'enemy' },
        details: { target: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 2000 } } } }
      }, {
        conditions: [{ state: { self: [{ tagged: 'targeting' }] } }],
        details: { self: { additional_damage_focusing: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 2500 } } } }
      }]
    }, {
      range: 6,
      cost: 7,
      area: 'single',
      equipment_effects: [{
        target: { kind: 'ally' },
        details: {
          target: {
            target_protect: { term: { for_rounds: 3 } },
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 3 }, max_stack: 1 },
            acc_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 }, max_stack: 1 },
            nullify_damage: { term: { for_rounds: 3 }, times: 1, max_stack: 1 }
          },
          self: {
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 3 }, max_stack: 1 },
            acc_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 }, max_stack: 1 },
            nullify_damage: { term: { for_rounds: 3 }, times: 1, max_stack: 1 }
          }
        }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{
          trigger: 'start_wave',
          state: { self: [{ status_greater_or_equal_than: { status: 'def', than: 'atk', value: 25 } }] }
        }],
        details: { self: { battle_continuation: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 4000 }, times: 1, term: 'infinite' } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            status_resist_up: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            damage_reduction_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { num_of_units: { unit: 'ally', greater_or_equal: 1 } } } }],
        details: { self: { damage_reduction_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'be_hit' }],
        details: { self: { spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: 'infinite', max_stack: 3 } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{
          trigger: 'be_attacked',
          state: { self: [{ status_greater_or_equal_than: { status: 'atk', than: 'def', value: 400 } }] }
        }],
        details: { self: { counterattack: { base: { milliPercentage: 80000 }, per_lv_up: { milliPercentage: 5000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'kill' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: 'infinite' },
            cri_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: 'infinite' }
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
      }, {
        conditions: [{ trigger: 'start_round' }],
        details: { self: { defense_penetration: { tag: 'targeting', base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 4000 }, term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'all_adjacent_without_back_line',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
        details: {
          target: {
            target_protect: { term: { for_rounds: 1 } },
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ status_less_than_self: { status: 'atk' } }, { status_less_than_self: { status: 'spd' } }] } }],
        target: { kind: 'ally' },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 2500 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } },
            acc_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }]
  },
  17: {
    no: 17,
    active: [{
      damage_deal: {
        base: { milliPercentage: 118500 },
        per_lv_up: { milliPercentage: 13500 }
      },
      range: 3,
      cost: 4,
      area: 'single',
      effects: [{
        target: { kind: 'enemy' },
        details: {
          target: {
            def_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ affected: 'def_down' }] } }],
        target: { kind: 'enemy' },
        details: { target: { damage_taken_increased: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 1000 },
        per_lv_up: { milliPercentage: 1000 }
      },
      range: 4,
      cost: 9,
      area: 'all',
      effects: [{
        conditions: [{ trigger: 'use_this_active' }],
        details: {
          self: {
            ignore_protect: {},
            attack_hit: {}
          }
        }
      }, {
        target: { kind: 'enemy' },
        details: {
          self: {
            status_resist_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 4000 }, term: { for_rounds: 2 } },
            all_buff_removal_resist_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 4000 }, term: { for_rounds: 2 } }
          },
          target: {
            provoked: { tag: 'begin_containment', term: { for_rounds: 2 } },
            cri_down: { tag: 'begin_containment', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            acc_down: { tag: 'begin_containment', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } },
            eva_down: { tag: 'begin_containment', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } }
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
            eva_up: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } },
            damage_reduction_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'spd_up' }] } }],
        details: {
          self: {
            eva_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 1 }, cannot_be_dispelled: true },
            damage_reduction_up: { base: { milliPercentage: 12500 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 }, cannot_be_dispelled: true }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            merciless: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
            counterattack: { base: { milliPercentage: 75000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'be_attacked' }],
        details: { self: { atk_up: { tag: 'counterattack_posture', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 }, max_stack: 5 } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ stack: { tag: 'counterattack_posture', effect: 'atk_up', greater_or_equal: 5 } }] } }],
        details: { self: { cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'cats_hand',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        target: { kind: 'ally' },
        details: { target: { ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 100000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'attack' }],
        target: { kind: 'ally' },
        details: { target: { ap_up: { base: { microValue: 200000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['attacker', 'supporter'] },
        details: { target: { target_protect: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'spd_up' }, { affected: 'spd_down' }] } }],
        target: { kind: 'ally' },
        details: { target: { follow_up_attack: { tag: 'cats_hand', term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ state: { self: [{ tagged_affected: { tag: 'cats_hand', effect: 'follow_up_attack' } }] } }],
        details: { self: { absolutely_activated: { tag: 'begin_containment', effect: 'provoked' } } }
      }]
    }]
  },
  18: {
    no: 18,
    active: [{
      damage_deal: {
        base: { milliPercentage: 165000 },
        per_lv_up: { milliPercentage: 15000 }
      },
      range: 2,
      cost: 6,
      area: 'single',
      effects: [{
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: { target: { provoked: { term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ trigger: 'hit', state: { target: [{ affected: 'def_down' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 3000 } } } }
      }, {
        conditions: [{ trigger: 'hit', state: { target: [{ affected: 'damage_taken_increased' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 3000 } } } }
      }, {
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy', conditions: ['light', 'heavy'] },
        details: { target: { buff_removal: { effect: 'damage_reduction_up' } } }
      }]
    }, {
      range: 0,
      cost: 7,
      area: 'all',
      effects: [{
        conditions: [{ state: { target: [{ tagged: 'alert_mode' }] } }],
        target: { kind: 'ally' },
        details: {
          target: {
            ap_up:  { base: { microValue: 500000 }, per_lv_up: { microValue: 100000 }, term: 'immediate' },
            spd_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 3 } }
          }
        }
      }, {
        target: { kind: 'ally', conditions: [{ alias: 'companion_series', except: 18 }] },
        details: {
          target: {
            ap_up:  { base: { microValue: 250000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 3 } }
          }
        }
      }]
    }],
    passive: [{
      area: 'all_adjacent_without_front_line',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
        details: {
          self: {
            damage_reduction_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            counterattack: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 8000 }, term: { for_rounds: 1 } }
          },
          target: { target_protect: { tag: 'alert_mode', term: { for_rounds: 1 } } }
        }
      }, {
        conditions: [{ trigger: 'use_any_active' }],
        details: { self: { spd_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: { self: { battle_continuation: { tag: 'undying_will', base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 3000 }, term: 'infinite', times: 1 } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        details: { self: { def_up: { base: { milliPercentage: 60000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ hp_less_or_equal: 50 }] } }],
        details: {
          self: {
            ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 100000 }, term: 'immediate' },
            all_debuff_removal: { term: 'immediate' }
          }
        }
      }, {
        conditions: [{ trigger: 'be_attacked', state: { self: [{ not_tagged: 'undying_will' }] } }],
        details: { self: { battle_continuation: { tag: 'undying_will', base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 3000 }, term: 'infinite', times: 1, rate: { milliPercentage: 10000 } } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            status_resist_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
            all_buff_removal_resist_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
            cri_reduction_by_status: { status: 'def', base: { milliPercentage: 500 }, per_lv_up: { milliPercentage: 50 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'follow_up_attack' }] } }],
        details: {
          self: {
            row_protect: { term: { for_rounds: 1 } },
            column_protect: { term: { for_rounds: 1 } }
          }
        }
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
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
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
        details: { self: { battle_continuation: { base: { value: 50 }, per_lv_up: { value: 50 }, term: 'infinite', times: 1, cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'battle_continuation' }] } }],
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
            damage_reduction_up: { base: { milliPercentage: 22000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ hp_less_or_equal: 50 }] } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 8000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            damage_reduction_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
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
            eva_up: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 5000 }, term: 'infinite' },
            ignore_barrier_dr: { term: 'infinite' },
            buff_removal: { effect: 'column_protect', term: 'immediate' }
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
        target: { kind: 'enemy' },
        details: {
          target: {
            provoked: { term: { for_rounds: 2 } },
            atk_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            cri_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { self: [{ tagged: 'counterattack_initiation' }] } }],
        target: { kind: 'enemy' },
        details: { target: { def_down: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } } } }
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
        conditions: [{ state: { target: [{ stack: { tag: 'fire_net_building', greater_or_equal: 1 } }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } } }
      }, {
        conditions: [{ state: { target: [{ stack: { tag: 'fire_net_building', greater_or_equal: 2 } }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 } } } }
      }, {
        conditions: [{ state: { target: [{ stack: { tag: 'fire_net_building', greater_or_equal: 3 } }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 } } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            def_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 1 } },
            damage_reduction_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'be_hit' }],
        details: { self: { def_up: { tag: 'counterattack_initiation', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 }, max_stack: 3 } } }
      }, {
        conditions: [{ trigger: 'be_hit', state: { self: [{ stack: { tag: 'counterattack_initiation', greater_or_equal: 3 } }] } }],
        details: { self: { defense_penetration_resist_up_by_self_hp_rate: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally_except_self', conditions: ['light', 'steel_line'] },
        details: { target: { target_protect: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
        details: {
          target: {
            flying_type_damage_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['steel_line'] },
        details: {
          target: {
            flying_type_damage_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 2500 }, per_lv_up: { milliPercentage: 125 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_wave', state: { squad: { in_squad: 'steel_line' } } }],
        details: { self: { battle_continuation: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 5000 }, term: 'infinite', times: 1, cannot_be_dispelled: true } } }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'enemy' },
        details: { target: { eva_down: { tag: 'fire_net_building', base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: 'infinite', max_stack: 3 } } }
      }, {
        conditions: [{ trigger: 'hit', state: { target: [{ stack: { tag: 'fire_net_building', greater_or_equal: 2 } }] } }],
        target: { kind: 'enemy' },
        details: { target: { buff_removal: { effect: 'eva_up' } } }
      }, {
        conditions: [{ trigger: 'hit', state: { target: [{ stack: { tag: 'fire_net_building', greater_or_equal: 3 } }] } }],
        target: { kind: 'enemy' },
        details: { target: { damage_taken_increased: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 2 } } } }
      }]
    }]
  },
  22: {
    no: 22,
    active: [{
      damage_deal: {
        base: { milliPercentage: 200000 },
        per_lv_up: { milliPercentage: 20000 }
      },
      range: 5,
      cost: 8,
      area: 'single',
      effects: [{
        target: { kind: 'enemy' },
        details: {
          self: { ignore_protect: {} },
          target: {
            push: { value: 1 },
            ap_down: { base: { microValue: 1500000 }, per_lv_up: { microValue: 75000 } },
          }
        }
      }, {
        conditions: [{ state: { target: [{ affected: 'marked' }, { affected: 'immovable' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }, {
        conditions: [{ trigger: 'attack', state: { self: [{ tagged: 'leave_me_alone' }] } }],
        target: { kind: 'enemy' },
        details: { target: { buff_removal: { effect: 'area_damage_dispersion_up' } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 225000 },
        per_lv_up: { milliPercentage: 25000 },
        effective: 'next_round'
      },
      range: 6,
      cost: 10,
      area: 'cross_strong_explosion',
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: {
          target: {
            ap_down: { base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' },
            damage_taken_increased: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            buff_removal: { effect: 'counterattack', term: 'immediate' }
          }
        }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ tagged: 'leave_me_alone' }] } }],
        target: { kind: 'enemy' },
        details: { target: { buff_removal: { effect: 'area_damage_dispersion_up' } } }
      }]
    }],
    passive: [{
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
        details: {
          target: {
            acc_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
        details: { target: { debuff_removal: { effects: ['acc_down', 'cri_down'], term: 'immediate' } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            atk_up: { tag: 'rifled_mortar', base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            acc_up: { tag: 'rifled_mortar', base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            defense_penetration: { tag: 'rifled_mortar', base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'critical', state: { self: [{ tagged: 'rifled_mortar' }] } }],
        target: { kind: 'enemy' },
        details: { target: { buff_removal: { effects: ['target_protect', 'row_protect', 'column_protect'] } } }
      }]
    }, {
      area: 'leave_me_alone',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { squad: { not_in_squad: 'cross_adjacent' } } }],
        target: { kind: 'ally' },
        details: { target: { spd_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { not_in_squad: 'steel_line' } } }],
        target: { kind: 'ally_except_self' },
        details: {
          self: { buff_removal: { effect: 'spd_up' } },
          target: { spd_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { num_of_units: { unit: 'cross_adjacent', greater_or_equal: 1 } } } }],
        details: { self: { spd_up: { tag: 'leave_me_alone', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 }, cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { in_squad: 'steel_line' } } }],
        details: { self: { spd_up: { tag: 'leave_me_alone', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 }, cannot_be_dispelled: true } } }
      }]
    }]
  },
  23: {
    no: 23,
    active: [{
      damage_deal: {
        base: { milliPercentage: 127500 },
        per_lv_up: { milliPercentage: 12500 }
      },
      range: 4,
      cost: 4,
      area: 'single',
      effects: [{
        conditions: [{ state: { target: [{ affected: 'def_down' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 } } } }
      }, {
        conditions: [{ state: { target: [{ affected: 'eva_down' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 } } } }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ tagged: 'ammo_supplied' }] } }],
        target: { kind: 'enemy' },
        details: { target: { acc_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 2 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 125000 },
        per_lv_up: { milliPercentage: 15000 }
      },
      range: 4,
      cost: 8,
      area: 'line',
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ state: { target: [{ affected: 'def_down' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1500 } } } }
      }, {
        conditions: [{ state: { target: [{ affected: 'eva_down' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1500 } } } }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ tagged: 'ammo_supplied' }] } }],
        target: { kind: 'enemy' },
        details: { target: { acc_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 2 } } } }
      }]
    }],
    passive: [{
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: [{ alias: 'steel_line', except: 23 }] },
        details: { target: { follow_up_attack: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['supporter'] },
        details: { target: { follow_up_attack: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { in_squad: 25 } } }],
        target: { kind: 'ally' },
        details: { target: { buff_removal: { effect: 'damage_taken_increased' } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        scale_factor: { per_units: { type: 'squad', unit: 'supporter' } },
        details: { self: { spd_up: { tag: 'ammo_supplied', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'critical', state: { self: [{ tagged: 'ammo_supplied' }] } }],
        target: { kind: 'enemy' },
        details: { target: { buff_removal: { effect: 'damage_reduction_up' } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { cri_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { in_squad: { alias: 'steel_line', role: 'supporter' } } } }],
        details: { self: { cri_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'damage_multiplier_up' }] } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            re_attack: { term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'follow_up_attack' }, { trigger: 're_attack' }],
        details: {
          self: {
            defense_penetration: { base: { milliPercentage: 8000 }, per_lv_up: { milliPercentage: 400 }, term: 'infinite', max_stack: 5 },
            damage_multiplier_up: { base: { milliPercentage: 4000 }, per_lv_up: { milliPercentage: 400 }, term: 'infinite', max_stack: 5 }
          }
        }
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
      cost: 5,
      area: 'single',
      effects: [{
        conditions: [{ trigger: 'hit' }],
        details: { self: { def_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 4000 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 127000 },
        per_lv_up: { milliPercentage: 11000 }
      },
      range: 3,
      cost: 6,
      area: 'single_and_front',
      effects: [{
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } } }
      }, {
        conditions: [{ trigger: 'hit', state: { target: [{ affected: 'def_down' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 } } } }
      }, {
        conditions: [{ trigger: 'hit', state: { target: [{ affected: 'eva_down' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 } } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            light_type_damage_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            heavy_type_damage_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ grid: 'front_line' }] } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ grid: 'mid_line' }] } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 22500 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 37500 }, per_lv_up: { milliPercentage: 1875 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ grid: 'back_line' }] } }],
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
        conditions: [{ trigger: 'start_round', state: { squad: { num_of_units: { unit: 'attacker', greater_or_equal: 1 } } } }],
        target: { kind: 'ally', conditions: ['attacker'] },
        details: {
          self: { range_up: { value: 1, term: { for_rounds: 1 } } },
          target: { cri_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } } }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { num_of_units: { unit: 'defender', greater_or_equal: 2 } } } }],
        target: { kind: 'ally', conditions: ['defender'] },
        details: {
          self: {
            range_up: { value: 1, term: { for_rounds: 1 } },
            all_debuff_removal: { term: 'immediate' }
          },
          target: { all_debuff_removal: { term: 'immediate' } }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { num_of_units: { unit: 'supporter', greater_or_equal: 2 } } } }],
        target: { kind: 'ally', conditions: ['supporter'] },
        details: {
          self: {
            range_up: { value: 1, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          },
          target: { spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } }
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
        target: { kind: 'enemy' },
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
        conditions: [{ state: { target: [{ affected: 'def_down' }, { affected: 'eva_down' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }]
    }],
    passive: [{
      area: 'fixed_front_line',
      effects: [{
        conditions: [{ trigger: 'start_wave', state: { self: [{ grid: 'front_line' }] } }],
        target: { kind: 'ally' },
        details: {
          target: {
            ap_up: { tag: 'charging_in_sir', base: { microValue: 500000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' },
            atk_up: { tag: 'charging_in_sir', base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: 'infinite' },
            cri_up: { tag: 'charging_in_sir', base: { milliPercentage: 7500 }, per_lv_up: { milliPercentage: 500 }, term: 'infinite' },
            damage_taken_increased: { tag: 'charging_in_sir', base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: -1500 }, term: 'infinite' }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'follow_up_attack' }, { affected: 'target_protect' }] } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ affected_by: { unit: 23, effect: 'follow_up_attack' } }] } }],
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
        base: { milliPercentage: 125000 },
        per_lv_up: { milliPercentage: 10000 }
      },
      range: 3,
      cost: 4,
      area: 'single',
      effects: [{
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: {
          target: {
            immovable: { term: { for_rounds: 2 } },
            eva_down: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy', conditions: ['light', 'heavy'] },
        details: {
          target: {
            spd_down: { milliPercentage: 10000, term: { for_rounds: 2 } },
            eva_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 7500 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 2 } },
          }
        }
      }]
    }, {
      range: 6,
      cost: 7,
      area: 'single',
      effects: [{
        target: { kind: 'ally' },
        details: {
          target: {
            ap_up: { base: { microValue: 4000000 }, per_lv_up: { microValue: 200000 }, term: 'immediate' },
            all_debuff_removal: { term: 'immediate' }
          }
        }
      }, {
        target: { kind: 'ally', conditions: ['attacker'] },
        details: { target: { atk_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } } } }
      }, {
        target: { kind: 'ally', conditions: ['defender'] },
        details: { target: { def_up: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 2 } } } }
      }, {
        target: { kind: 'ally', conditions: ['supporter'] },
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
            damage_reduction_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 2000 } },
            status_resist_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 2000 } }
          }
        }
      }, {
        conditions: [{ trigger: 'be_hit' }],
        effective: 'only_this_attack',
        details: { self: { minimize_damage: { rate: 'constant' } } }
      }]
    }, {
      area: 'line_adjacent_with_backward',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['light', 'heavy'] },
        details: {
          target: {
            eva_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            damage_reduction_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ status_less_than_self: { status: 'spd' } }] } }],
        target: { kind: 'ally', conditions: ['light', 'heavy'] },
        details: { target: { acc_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'be_hit' }, { trigger: 'attack' }],
        target: { kind: 'ally', conditions: ['light', 'heavy'] },
        details: { target: { ap_up: { microValue: 1000000 } } }
      }]
    }, {
      area: 'all_adjacent_without_front_line_with_backward',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 3000 }, per_lv_up: { milliPercentage: 200 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['steel_line'] },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 3000 }, per_lv_up: { milliPercentage: 200 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ affected: 'spd_up' }] } }],
        target: { kind: 'ally' },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 3000 }, per_lv_up: { milliPercentage: 200 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }]
  },
  27: {
    no: 27,
    active: [{
      damage_deal: {
        base: { milliPercentage: 170000 },
        per_lv_up: { milliPercentage: 15000 }
      },
      range: 4,
      cost: 7,
      area: 'single',
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ state: { target: [{ affected: 'marked' }, { affected: 'immovable' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 } } } }
      }, {
        conditions: [{ state: { self: [{ tagged: 'ground_control_artillery' }] } }],
        target: { kind: 'enemy' },
        details: {
          target: {
            damage_taken_increased: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            ap_down: { base: { microValue: 100000 }, per_lv_up: { microValue: 40000 }, term: 'immediate' }
          }
        }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 150000 },
        per_lv_up: { milliPercentage: 15000 }
      },
      range: 3,
      cost: 9,
      area: '2_x_2',
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ state: { target: [{ affected: 'immovable' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 } } } }
      }, {
        conditions: [{ state: { target: [{ affected: 'eva_down' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 } } } }
      }, {
        conditions: [{ state: { self: [{ tagged: 'ground_control_artillery' }] } }],
        target: { kind: 'enemy' },
        details: {
          target: {
            damage_taken_increased: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            ap_down: { base: { microValue: 100000 }, per_lv_up: { microValue: 40000 }, term: 'immediate' }
          }
        }
      }]
    }],
    passive: [{
      area: 'fan_shape',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: [{ alias: 'steel_line', except: 27 }] },
        details: { target: { follow_up_attack: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ status_less_than_self: { status: 'spd' } }] } }],
        target: { kind: 'ally', conditions: ['light', 'heavy'] },
        details: { target: { follow_up_attack: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'follow_up_attack' }],
        details: { self: { ap_up: { base: { microValue: 200000 }, per_lv_up: { microValue: 30000 }, term: 'immediate' } } }
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
        conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'follow_up_attack' }, { affected: 'target_protect' }] } }],
        details: { self: { atk_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'self',
      equipment_effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: { self: { tag_stack: { tag: 'ground_control_artillery', term: 'infinite' } } }
      }, {
        conditions: [{ trigger: 'start_wave' }],
        scale_factor: { per_units: { type: 'enemy', variation: 'proportional', unit: 'light' } },
        details: { self: { atk_up: { milliPercentage: 5000, term: 'infinite', cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_wave' }],
        scale_factor: { per_units: { type: 'enemy', variation: 'proportional', unit: 'heavy' } },
        details: { self: { atk_up: { milliPercentage: 5000, term: 'infinite', cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_wave', state: { enemy: { num_of_units: { unit: 'heavy', greater_or_equal: 3 } } } }],
        details: { self: { atk_up: { milliPercentage: 20000, term: 'infinite', cannot_be_dispelled: true } } }
      }]
    }]
  },
  28: {
    no: 28,
    active: [{
      damage_deal: {
        base: { milliPercentage: 127500 },
        per_lv_up: { milliPercentage: 12500 }
      },
      range: 4,
      cost: 4,
      area: 'single',
      effects: [{
        target: { kind: 'enemy' },
        details: {
          target: {
            marked: { tag: 'support_fire', term: { for_rounds: 2 } },
            eva_down: { tag: 'support_fire', base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } },
            damage_taken_increased: { tag: 'support_fire', base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }, {
      range: 0,
      cost: 8,
      area: 'self',
      effects: [{
        details: {
          self: {
            row_protect: { term: { for_rounds: 3 }, max_stack: 1 },
            def_up: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 3 }, max_stack: 1 },
            status_resist_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 3 }, max_stack: 1 },
            defense_penetration_resist_up_by_self_hp_rate: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 3 }, max_stack: 1 }
          }
        }
      }]
    }],
    passive: [{
      area: 'all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { damage_reduction_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { in_squad: 'steel_line' } } }],
        target: { kind: 'ally', conditions: ['attacker', 'supporter'] },
        details: {
          target: {
            target_protect: { term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'enemy' },
        details: {
          target: {
            atk_down: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            cri_down: { milliPercentage: 5000, term: { for_rounds: 1 } },
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ tagged_affected: { tag: 'support_fire', effect: 'marked' } }] } }],
        target: { kind: 'enemy' },
        details: {
          target: {
            atk_down: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            cri_down: { milliPercentage: 5000, term: { for_rounds: 1 } },
            ap_down: { base: { microValue: 500000 }, per_lv_up: { microValue: 100000 }, term: 'immediate' }
          }
        }
      }, {
        conditions: [{ trigger: 'use_active_2' }],
        target: { kind: 'enemy' },
        details: { target: { provoked: { term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ trigger: 'use_active_2', state: { target: [{ grid: 'back_line' }] } }],
        target: { kind: 'enemy' },
        details: { target: { ignore_protect_deactivate: { term: { for_rounds: 2 } } } }
      }]
    }, {
      area: 'all',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: {
          self: {
            damage_reduction_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: 'infinite', cannot_be_dispelled: true },
            fire_resist_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: 'infinite', cannot_be_dispelled: true },
            ice_resist_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: 'infinite', cannot_be_dispelled: true },
            electric_resist_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: 'infinite', cannot_be_dispelled: true }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        details: { self: { ap_up: { base: { microValue: 100000 }, per_lv_up: { microValue: 40000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { in_squad: 'steel_line' } } }],
        details: { self: { ap_up: { base: { microValue: 100000 }, per_lv_up: { microValue: 40000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'follow_up_attack' }] } }],
        details: { self: { ap_up: { base: { microValue: 100000 }, per_lv_up: { microValue: 40000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['attacker', 'supporter'] },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
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
        target: { kind: 'enemy' },
        details: {
          target: {
            atk_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            cri_down: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ affected: 'def_down' }, { affected: 'eva_down' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }, {
        conditions: [{ state: { squad: { in_squad: 22 } } }],
        details: { self: { cooperative_attack: { unit: 22, active: 2 } } }
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
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: {
          target: {
            marked: { term: { for_rounds: 3 } },
            fixed_fire_damage_over_time: { tag: 'ignite', base: { value: 40 }, per_lv_up: { value: 30 }, term: { for_rounds: 3 } }
          }
        }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_damage: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 } } } }
      }]
    }],
    passive: [{
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
        details: { target: { spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ grid: 'front_line' }, { unit: 'steel_line' }] } }],
        target: { kind: 'ally' },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            status_resist_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['steel_line'] },
        details: { target: { prevents_effect: { effect: 'push', term: { for_rounds: 1 } } } }
      },  {
        conditions: [{ trigger: 'idle', state: { target: [{ hp_greater_or_equal: 25 }] } }],
        target: { kind: 'ally' },
        details: {
          target: {
            ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 } },
            fixed_damage_over_time: { base: { value: 30 }, per_lv_up: { value: 30 } }
          }
        }
      }, {
        conditions: [{ trigger: 'be_killed' }],
        target: { kind: 'ally' },
        details: { target: { ap_up: { base: { microValue: 2000000 }, per_lv_up: { microValue: 100000 } } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 24000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
            damage_reduction_up: { base: { milliPercentage: 18000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { in_squad: 'steel_line_officer_ranks' } } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 7500 }, per_lv_up: { milliPercentage: 375 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            damage_reduction_up: { base: { milliPercentage: 9000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { in_squad: 'steel_line_excluding_officer_ranks' } } }],
        details: { self: { spd_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }]
    }]
  },
  30: {
    no: 30,
    active: [{
      damage_deal: {
        base: { milliPercentage: 110000 },
        per_lv_up: { milliPercentage: 10000 }
      },
      range: 4,
      cost: 6,
      area: 'line',
      effects: [{
        conditions: [{ trigger: 'attack' }],
        target: { kind: 'enemy' },
        details: {
          target: {
            damage_multiplier_down: [
              { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
              { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
            ],
            acc_down: [
              { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
              { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
            ]
          }
        }
      }, {
        conditions: [{ trigger: 'hit' }],
        details: { self: { additional_damage: { base: { milliPercentage: 100000 }, per_lv_up: { milliPercentage: 5000 }, rate: 'rarely' } } }
      }]
    }, {
      range: 0,
      cost: 9,
      area: {
        1: 'cross',
        10: 'all'
      },
      effects: [{
        target: { kind: 'ally' },
        details: {
          target: {
            eva_up: [
              { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 }, max_stack: 1 },
              { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 }, max_stack: 1 },
              { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 }, max_stack: 1 }
            ],
            damage_multiplier_reduction_by_status: { status: 'eva', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 3 }, max_stack: 1 }
          }
        }
      }, {
        conditions: [{ state: { target: [{ status_less_than_self: { status: 'eva' } }] } }],
        target: { kind: 'ally' },
        details: { target: { debuff_removal: { effect: 'marked', term: 'immediate' } } }
      }, {
        conditions: [{ state: { target: [{ status_greater_than_self: { status: 'eva' } }] } }],
        target: { kind: 'ally' },
        details: { target: { marked: { term: { for_rounds: 3 }, max_stack: 1 } } }
      }]
    }],
    passive: [{
      area: {
        1: 'cross',
        10: 'fixed_all'
      },
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            eva_up: { base: { milliPercentage: 45000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
            damage_reduction_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ not_affected: ['marked'] }] } }],
        target: { kind: 'ally', conditions: ['attacker', 'supporter'] },
        details: { target: { target_protect: { term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { squad: { in_squad: 'light' } } }],
        target: { kind: 'ally' },
        details: {
          self: { spd_up: { base: { milliPercentage: 3000 }, per_lv_up: { milliPercentage: 300 }, term: { for_rounds: 1 } } },
          target: { defense_penetration: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { in_squad: 'heavy' } } }],
        target: { kind: 'ally' },
        details: {
          self: { spd_up: { base: { milliPercentage: 3000 }, per_lv_up: { milliPercentage: 300 }, term: { for_rounds: 1 } } },
          target: { defense_penetration: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { in_squad: 'attacker' } } }],
        target: { kind: 'ally' },
        details: {
          self: { spd_up: { base: { milliPercentage: 3000 }, per_lv_up: { milliPercentage: 300 }, term: { for_rounds: 1 } } },
          target: { acc_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { in_squad: 'supporter' } } }],
        target: { kind: 'ally' },
        details: {
          self: { spd_up: { base: { milliPercentage: 3000 }, per_lv_up: { milliPercentage: 300 }, term: { for_rounds: 1 } } },
          target: { acc_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } }
        }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            status_resist_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            damage_reduction_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ status_less_than_self: { status: 'eva' } }] } }],
        target: { kind: 'ally' },
        details: {
          target: {
            status_resist_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            damage_reduction_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { num_of_units: { unit: 'defender', greater_or_equal: 1 } } } }],
        target: { kind: 'ally' },
        details: { self: { ignore_protect: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        scale_factor: { per_units: { type: 'squad', unit: 'steel_line_officer_ranks', except: 'self' } },
        target: { kind: 'ally' },
        details: { target: { spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        scale_factor: { per_units: { type: 'squad', unit: 'steel_line_excluding_officer_ranks' } },
        target: { kind: 'ally' },
        details: { target: { atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
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
        target: { kind: 'enemy' },
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
        target: { kind: 'ally' },
        details: {
          target: {
            set_ap: { base: { microValue: 10000000 }, per_lv_up: { microValue: 250000 }, term: 'immediate' },
            all_debuff_removal: {}
          }
        }
      }, {
        target: { kind: 'ally' },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 2 } },
            acc_up: { base: { milliPercentage: 24000 }, per_lv_up: { milliPercentage: 1200 }, term: { for_rounds: 2 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        target: { kind: 'ally' },
        details: {
          target: {
            damage_reduction_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
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
          target: { kind: 'ally' },
          details: {
            target: {
              atk_up: { tag: 'attack_command', base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
              acc_up: { tag: 'attack_command', base: { milliPercentage: 24000 }, per_lv_up: { milliPercentage: 1200 }, term: { for_rounds: 1 } },
              spd_up: { tag: 'attack_command', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } }
            }
          }
        }, {
          conditions: [{ trigger: 'start_round', state: { self: [{ equipped: 'combat_observation_frame' }] } }],
          target: { kind: 'ally' },
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
          target: { kind: 'ally' },
          details: {
            target: {
              damage_reduction_up: { tag: 'defense_command', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
              def_up: { tag: 'defense_command', base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
              spd_up: { tag: 'defense_command', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } }
            }
          }
        }, {
          conditions: [{ trigger: 'start_round', state: { self: [{ equipped: 'combat_observation_frame' }] } }],
          target: { kind: 'ally' },
          details: {
            target: {
              damage_reduction_up: { tag: 'defense_command', base: { milliPercentage: 3333 }, per_lv_up: { milliPercentage: 166 }, term: { for_rounds: 1 } },
              def_up: { tag: 'defense_command', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } },
              spd_up: { tag: 'defense_command', base: { milliPercentage: 1666 }, per_lv_up: { milliPercentage: 83 }, term: { for_rounds: 1 } }
            }
          }
        }]
      }
    }, {
      attack_command: {
        area: 'all_adjacent_without_back_line',
        effects: [{
          conditions: [{ trigger: 'start_round' }],
          target: { kind: 'ally' },
          details: {
            target: {
              damage_reduction_up: { tag: 'attack_command_defence', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } },
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
          target: { kind: 'ally' },
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
        conditions: [{ trigger: 'start_wave', state: { self: [{ affected: 'reconnaissance' }] } }],
        target: { kind: 'ally', conditions: ['attacker'] },
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
        conditions: [{ state: { target: [{ affected: 'marked' }, { affected: 'eva_down' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ tagged: 'awakening' }] } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 23000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 2 }, max_stack: 1 },
            defense_penetration: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 2 }, max_stack: 1 }
          }
        }
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
        conditions: [{ state: { self: [{ grid: 'front_line' }] } }],
        details: { self: { ignore_barrier_dr: {} } }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ tagged: 'awakening' }] } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 23000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 2 }, max_stack: 1 },
            defense_penetration: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 2 }, max_stack: 1 }
          }
        }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { self: [{ grid: 'front_line' }] } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ grid: 'mid_line' }] } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ grid: 'back_line' }] } }],
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
            damage_reduction_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 } },
            counterattack: { base: { milliPercentage: 80000 }, per_lv_up: { milliPercentage: 5000 } }
          }
        }
      }, {
        conditions: [{ trigger: 'kill' }],
        details: { self: { debuff_removal: { effect: 'eva_down' } } }
      }]
    }, {
      area: 'line_with_backward',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { tag_stack: { tag: 'awakening', term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: [{ type: 'light', role: 'supporter' }] },
        details: { target: { follow_up_attack: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['sisters_of_valhalla'] },
        details: { target: { follow_up_attack: { term: { for_rounds: 1 }, enabledLv: 10 } } }
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
        conditions: [{ state: { target: [{ affected: 'def_down' }, { affected: 'eva_down' }] } }],
        target: { kind: 'enemy' },
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
        details: { self: { light_type_damage_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 } } } }
      }, {
        conditions: [{ state: { target: [{ affected: 'marked' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 } } } }
      }]
    }],
    passive: [{
      area: 'front',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        target: { kind: 'ally' },
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
        target: { kind: 'ally' },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ tagged: 'fire_support' }] } }],
        target: { kind: 'ally', conditions: ['light', 'heavy'] },
        details: {
          target: {
            eva_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            damage_reduction_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
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
        target: { kind: 'enemy' },
        details: {
          target: {
            marked: { term: { for_rounds: 2 } },
            eva_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }, {
      range: 6,
      cost: {
        1: 6,
        2: 5
      },
      area: 'single',
      effects: [{
        target: { kind: 'ally_grid' },
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
        target: { kind: 'ally' },
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
        base: { milliPercentage: 127000 },
        per_lv_up: { milliPercentage: 11000 }
      },
      range: 3,
      cost: 5,
      area: 'single',
      effects: [{
        target: { kind: 'enemy' },
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
        base: { milliPercentage: 210000 },
        per_lv_up: { milliPercentage: 18500 }
      },
      range: 3,
      cost: 8,
      area: 'single',
      effects: [{
        details: {
          self: {
            heavy_type_damage_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } },
            defense_penetration: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 4000 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ affected: 'provoked' }, { affected: 'def_down' }] } }],
        target: { kind: 'enemy' },
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
        details: { self: { damage_reduction_up: { base: { milliPercentage: 22000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 3 }, max_stack: 1 } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['light', 'heavy'] },
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
        target: { kind: 'enemy' },
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
        target: { kind: 'ally' },
        details: {
          target: {
            ap_up: { base: { microValue: 1500000 }, per_lv_up: { microValue: 100000 }, term: 'immediate' },
            range_up: { value: 1, term: { for_rounds: 2 } },
          }
        }
      }, {
        target: { kind: 'ally', conditions: ['defender', 'supporter'] },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 600 }, term: { for_rounds: 2 } },
            acc_up: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        target: { kind: 'ally', conditions: ['attacker'] },
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
        target: { kind: 'ally' },
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
        base: { milliPercentage: 125000 },
        per_lv_up: { milliPercentage: 15000 }
      },
      range: 3,
      cost: 4,
      area: 'single',
      effects: [{
        target: { kind: 'enemy' },
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
        1: 'cross',
        10: 'all'
      },
      effects: [{
        target: { kind: 'ally' },
        details: {
          target: {
            damage_reduction_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 }, max_stack: 1 },
            area_damage_dispersion_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 3 }, max_stack: 1 }
          }
        }
      }]
    }],
    passive: [{
      area: 'line_with_back_line',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        target: { kind: 'ally', conditions: [{ type: 'light', role: 'attacker' }, { type: 'light', role: 'supporter' }] },
        details: { target: { ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            def_up: { base: { milliPercentage: 45000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
            damage_reduction_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            ice_resist_up: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: [{ type: 'light', role: 'attacker' }, { type: 'light', role: 'supporter' }] },
        details: { target: { target_protect: { term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ status_less_than_self: { status: 'spd' } }] } }],
        target: { kind: 'enemy' },
        details: {
          target: {
            provoked: { term: { for_rounds: 1 } },
            eva_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ affected: 'provoked' }] } }],
        target: { kind: 'enemy' },
        details: { target: { damage_taken_increased: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 2000 }, times: 1, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        details: { self: { damage_reduction_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'fixed_all_adjacent_without_front',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['attacker', 'supporter'] },
        details: { target: { target_protect: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        scale_factor: { per_units: { type: 'squad', unit: ['bioroid_under_145cm_tall', 'sisters_of_valhalla'] } },
        target: { kind: 'ally' },
        details: {
          target: {
            atk_value_up: { base: { milliValue: 40000 }, per_lv_up: { milliValue: 4000 }, term: { for_rounds: 1 } },
            def_value_up: { base: { milliValue: 20000 }, per_lv_up: { milliValue: 2000 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 7500 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            ap_up: { base: { microValue: 100000 }, per_lv_up: { microValue: 20000 }, term: 'immediate' }
          }
        }
      }]
    }]
  },
  40: {
    no: 40,
    active: [{
      damage_deal: {
        base: { milliPercentage: 123010 },
        per_lv_up: { milliPercentage: 12310 }
      },
      range: 3,
      cost: 5,
      area: 'single',
      effects: [{
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: {
          target: {
            marked: { term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ grid: 'front_line' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 } } } }
      }, {
        conditions: [{ trigger: 'hit', state: { squad: { in_squad: 42 } } }],
        details: { self: { cooperative_attack: { unit: 42, active: 2 } } }
      }]
    }, {
      range: 6,
      cost: 7,
      area: 'single',
      effects: [{
        conditions: [{ state: { target: [{ grid: 'mid_line' }, { grid: 'back_line' }] } }],
        target: { kind: 'ally' },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            damage_reduction_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ grid: 'front_line' }] } }],
        target: { kind: 'ally' },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } },
            spd_up: { base: { milliPercentage: 7500 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 2 } },
            damage_reduction_up: { base: { milliPercentage: 7500 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ grid: 'front_line' }] } }],
        target: { kind: 'ally', conditions: ['anger_of_horde'] },
        details: { target: { ignore_protect: { term: { for_rounds: 2 } } } }
      }]
    }],
    passive: [{
      area: 'fixed_all',
      effects: [{
        conditions: [{
          trigger: 'start_round',
          round: { at: 1 },
          state: { target: [{ not_affected: ['battle_continuation'] }] }
        }],
        target: { kind: 'ally' },
        details: {
          target: {
            tag_stack: { tag: 'treatment_target_selection', term: 'infinite', cannot_be_dispelled: true },
            battle_continuation: { tag: 'first_aid', value: { 1: 1, 5: 2, 10: 3 }, term: 'infinite', times: 1, cannot_be_dispelled: true }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ tagged: 'treatment_target_selection', not_affected: ['battle_continuation'] }] } }],
        target: { kind: 'ally' },
        details: {
          target: {
            minimize_damage: { tag: 'first_aid', term: { for_rounds: 1 }, cannot_be_dispelled: true },
            status_resist_up: { tag: 'first_aid', base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_wave', state: { target: [{ status_greater_than_self: { status: 'atk' } }], squad: { not_in_squad: 41 } } }],
        target: { kind: 'ally' },
        details: { target: { tag_stack: { tag: 'unbreakable_tooth', term: 'infinite', cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_wave', state: { target: [{ status_greater_than_self: { status: 'def' } }], squad: { not_in_squad: 41 } } }],
        target: { kind: 'ally' },
        details: { target: { tag_stack: { tag: 'instinct_to_protect_horde', term: 'infinite', cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_wave', state: { target: [{ status_greater_than_self: { status: 'eva' } }], squad: { not_in_squad: 41 } } }],
        target: { kind: 'ally' },
        details: { target: { tag_stack: { tag: 'tireless_legs', term: 'infinite', cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ tagged: 'unbreakable_tooth' }] } }],
        target: { kind: 'ally' },
        details: { self: { spd_up: { tag: 'influence', base: { milliPercentage: 2000 }, per_lv_up: { milliPercentage: 300 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ tagged: 'instinct_to_protect_horde' }] } }],
        target: { kind: 'ally' },
        details: { self: { spd_up: { tag: 'influence', base: { milliPercentage: 2000 }, per_lv_up: { milliPercentage: 300 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ tagged: 'tireless_legs' }] } }],
        target: { kind: 'ally' },
        details: { self: { spd_up: { tag: 'influence', base: { milliPercentage: 2000 }, per_lv_up: { milliPercentage: 300 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ stack: { tag: 'influence', effect: 'spd_up', greater_or_equal: 3 } }] } }],
        details: { self: { tag_stack: { tag: 'scenery_in_my_mind', term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { in_squad: 41 } } }],
        details: { self: { spd_up: { tag: 'dreamed_ideals', base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 900 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'use_any_active', state: { self: [{ tagged: 'scenery_in_my_mind' }, { tagged: 'dreamed_ideals' }] } }],
        details: { self: { ap_up: { microValue: 1000000, term: 'immediate' } } }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { action_count_up: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ tagged_affected: { tag: 'first_aid', effect: 'minimize_damage' } }] } }],
        target: { kind: 'ally' },
        details: { target: { enmity: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 1 } } } }
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
        conditions: [{ trigger: 'start_wave', state: { self: [{ grid: 'front_line' }] } }],
        details: { self: { ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 } } } }
      }, {
        conditions: [{ trigger: 'start_wave', state: { self: [{ grid: 'front_line' }] } }],
        target: { kind: 'ally', conditions: ['light'] },
        details: { target: { ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 } } } }
      }, {
        conditions: [{ trigger: 'start_wave' }],
        target: { kind: 'ally', conditions: [{ alias: 'anger_of_horde', except: 193 }] },
        details: { target: { tag_stack: { tag: 'charging_order', term: 'infinite' } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ grid: 'front_line' }] } }],
        target: { kind: 'ally', conditions: ['light'] },
        details: {
          target: {
            acc_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ grid: 'front_line' }] } }],
        target: { kind: 'ally', conditions: ['heavy', 'flying'] },
        details: {
          target: {
            acc_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: [{ alias: 'anger_of_horde', except: 41 }] },
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
            light_type_damage_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            heavy_type_damage_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: { target: { marked: { tag: 'seize_opportunity', term: { for_rounds: 2 } } } }
      }, {
        // FIXME: special tagged effect
        conditions: [{ trigger: 'seize_opportunity' }],
        target: { kind: 'ally' },
        details: { target: { additional_damage: { milliPercentage: 20000 } } }
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
        conditions: [{ state: { target: [{ affected: 'def_down' }, { affected: 'eva_down' }] } }],
        target: { kind: 'enemy' },
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
            heavy_type_damage_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 } },
            defense_penetration: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 4000 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ affected: 'marked' }, { affected: 'immovable' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } } }
      }]
    }],
    passive: [{
      area: 'line_adjacent',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['light', 'heavy'] },
        details: { target: { follow_up_attack: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_wave' }],
        target: { kind: 'ally', conditions: ['light', 'heavy'] },
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
            damage_reduction_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        scale_factor: { per_units: { type: 'squad', unit: 'anger_of_horde' } },
        details: { self: { spd_up: { base: { milliPercentage: 4000 }, per_lv_up: { milliPercentage: 200 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['anger_of_horde'] },
        details: { target: { follow_up_attack: { term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'line_with_back',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['light'] },
        details: { target: { atk_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: [{ alias: 'anger_of_horde', type: 'light' }] },
        details: { target: { atk_up: { base: { milliPercentage: 5500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: [{ alias: 'anger_of_horde', type: 'flying' }] },
        details: { target: { atk_up: { base: { milliPercentage: 16500 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ tagged: 'charging_order' }] } }],
        target: { kind: 'ally', conditions: ['anger_of_horde'] },
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
        conditions: [{ state: { target: [{ affected: 'def_down' }, { affected: 'eva_down' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }, {
        conditions: [{ trigger: 'hit', state: { squad: { in_squad: 42 } } }],
        details: { self: { cooperative_attack: { unit: 42, active: 2 } } }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ tagged: 'rapid_acceleration', grid: 'front_line' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 2000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } } }
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
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ tagged: 'rapid_acceleration', grid: 'front_line' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 2000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'kill' }],
        details: { self: { atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: 'infinite', max_stack: 2 } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'follow_up_attack' }] } }],
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
        conditions: [{ trigger: 'start_round', state: { self: [{ grid: 'front_line' }] } }],
        details: {
          self: {
            acc_up: { tag: 'rapid_acceleration', base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            eva_up: { tag: 'rapid_acceleration', base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 6000 }, term: { for_rounds: 1 } },
            spd_up: { tag: 'rapid_acceleration', base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ grid: 'mid_line' }] } }],
        details: {
          self: {
            acc_up: { tag: 'rapid_acceleration', base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            eva_up: { tag: 'rapid_acceleration', base: { milliPercentage: 22500 }, per_lv_up: { milliPercentage: 4500 }, term: { for_rounds: 1 } },
            spd_up: { tag: 'rapid_acceleration', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ grid: 'back_line' }] } }],
        details: {
          self: {
            acc_up: { tag: 'rapid_acceleration', base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            eva_up: { tag: 'rapid_acceleration', base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
            spd_up: { tag: 'rapid_acceleration', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } }
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
        target: { kind: 'enemy' },
        details: {
          target: {
            marked: { term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ affected: 'def_down' }, { affected: 'eva_down' }] } }],
        target: { kind: 'enemy' },
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
        target: { kind: 'enemy' },
        details: {
          self: { ignore_protect: {} },
          target: {
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
        conditions: [{ trigger: 'start_wave' }],
        target: { kind: 'ally', conditions: ['light', 'heavy'] },
        details: { target: { ap_up: { base: { microValue: 800000 }, per_lv_up: { microValue: 40000 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'reconnaissance' }] } }],
        target: { kind: 'ally', conditions: ['light', 'heavy'] },
        details: { target: { ap_up: { base: { microValue: 400000 }, per_lv_up: { microValue: 20000 } } } }
      }]
    }, {
      area: 'fan_shape',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['light', 'heavy'] },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ grid: 'front_line' }] } }],
        details: { self: { eva_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ grid: 'mid_line' }] } }],
        details: { self: { eva_up: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 4000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ grid: 'back_line' }] } }],
        details: { self: { eva_up: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'end_wave' }],
        details: { self: { reconnaissance: {} } }
      }]
    }]
  },
  46: {
    no: 46,
    active: [{
      damage_deal: {
        base: { milliPercentage: 160000 },
        per_lv_up: { milliPercentage: 10000 }
      },
      range: 3,
      cost: 10,
      area: 'row_toward_front',
      effects: [{
        details: {
          self: {
            defense_penetration: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 3000 } },
            light_type_damage_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } }
          }
        }
      }, {
        conditions: [{ trigger: 'hit', state: { target: [{ affected: 'eva_down' }, { affected: 'def_down' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } } }
      }]
    }, {
      range: 0,
      cost: 8,
      area: 'cross',
      effects: [{
        target: { kind: 'ally' },
        details: {
          self: {
            fire_resist_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 3 } },
            ice_resist_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 3 } },
            electric_resist_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 3 } },
            counterattack: { base: { milliPercentage: 80000 }, per_lv_up: { milliPercentage: 8000 }, term: { for_rounds: 3 } }
          },
          target: {
            atk_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 3 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 3 } }
          }
        }
      }]
    }],
    passive: [{
      area: 'row_toward_front',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally_except_self' },
        details: {
          self: {
            row_protect: { term: { for_rounds: 1 } },
            column_protect: { term: { for_rounds: 1 } }
          },
          target: { target_protect: { term: { for_rounds: 1 } } }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { def_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        scale_factor: { per_units: { type: 'squad', unit: 'cross_adjacent' } },
        details: { self: { def_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { num_of_units: { unit: 'cross_adjacent', equal: 4 } } } }],
        details: { self: { status_resist_up: { milliPercentage: 100000, term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        target: { kind: 'enemy' },
        details: {
          target: {
            atk_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: 'infinite' },
            cri_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: 'infinite' }
          }
        }
      }]
    }]
  },
  47: {
    no: 47,
    active: [{
      damage_deal: {
        base: { milliPercentage: 150000 },
        per_lv_up: { milliPercentage: 15000 }
      },
      range: 2,
      cost: 7,
      area: 'single_and_front_middle_explosion',
      effects: [{
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: { target: { def_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ not_tagged: 'loosened_leash' }] } }],
        target: { kind: 'enemy' },
        details: { target: { stunned: { term: { for_rounds: 1 }, rate: 'constant' } } }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ tagged: 'loosened_leash' }] } }],
        target: { kind: 'enemy' },
        details: { target: { stunned: { term: { for_rounds: 2 }, rate: 'constant' } } }
      }, {
        conditions: [{ trigger: 'be_attacked', state: { self: [{ affected: 'counterattack' }] } }],
        details: { self: { acc_up: { base: { milliPercentage: 100000 }, per_lv_up: { milliPercentage: 10000 }, term: { for_rounds: 1 }, times: 1 } } }
      }]
    }, {
      range: 6,
      cost: 7,
      area: 'single',
      effects: [{
        target: { kind: 'ally' },
        details: {
          self: {
            def_up: { tag: 'hammer_and_anvil_tactic', base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 5000 }, term: 'infinite', max_stack: 1, cannot_be_dispelled: true },
            nullify_damage: { tag: 'hammer_and_anvil_tactic', term: { for_rounds: 1 }, times: 1, max_stack: 1 }
          },
          target: {
            def_up: { tag: 'hammer_and_anvil_tactic', base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 5000 }, term: 'infinite', max_stack: 1, cannot_be_dispelled: true },
            nullify_damage: { tag: 'hammer_and_anvil_tactic', term: { for_rounds: 1 }, times: 1, max_stack: 1 }
          }
        }
      }, {
        conditions: [{ state: { self: [{ tagged: 'tightened_leash' }] } }],
        target: { kind: 'ally' },
        details: { target: { target_protect: { tag: 'hammer_and_anvil_tactic', term: 'infinite', max_stack: 1, cannot_be_dispelled: true } } }
      }, {
        conditions: [{ state: { self: [{ tagged: 'tightened_leash' }], target: [{ tagged_affected: { tag: 'hammer_and_anvil_tactic', effect: 'follow_up_attack' } }] } }],
        target: { kind: 'ally' },
        details: { target: { effect_removal: { tag: 'hammer_and_anvil_tactic', effect: 'follow_up_attack' } } }
      }, {
        conditions: [{ state: { self: [{ tagged: 'loosened_leash' }] } }],
        target: { kind: 'ally' },
        details: { target: { follow_up_attack: { tag: 'hammer_and_anvil_tactic', term: 'infinite', max_stack: 1, cannot_be_dispelled: true } } }
      }, {
        conditions: [{ state: { self: [{ tagged: 'loosened_leash' }], target: [{ tagged_affected: { tag: 'hammer_and_anvil_tactic', effect: 'target_protect' } }] } }],
        target: { kind: 'ally' },
        details: { target: { effect_removal: { tag: 'hammer_and_anvil_tactic', effect: 'target_protect' } } }
      }]
    }],
    passive: [{
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { squad: { not_in_squad: 'defender' } } }],
        details: { self: { damage_reduction_up: { tag: 'tightened_leash', base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { in_squad: 'defender' } } }],
        details: { self: { atk_up: { tag: 'loosened_leash', base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_wave', state: { self: [{ tagged: 'tightened_leash' }] } }],
        target: { kind: 'ally_except_self' },
        details: { target: { target_protect: { term: { for_rounds: 2 }, cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ tagged: 'loosened_leash' }] } }],
        details: { self: { range_up: { value: 2, term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'self',
      equipment_effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { counterattack: { base: { milliPercentage: 90000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ tagged: 'tightened_leash' }] } }],
        details: {
          self: {
            column_protect: { term: { for_rounds: 1 } },
            status_resist_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ tagged: 'loosened_leash' }] } }],
        details: {
          self: {
            cri_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_wave', state: { squad: { num_of_units: { unit: 'ally', equal: 4 } } } }],
        details: { self: { damage_multiplier_up_by_status: { status: 'def', milliPercentage: 4000, term: 'infinite', cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { num_of_units: { unit: 'ally', greater_or_equal: 1 } } } }],
        scale_factor: { per_units: { type: 'squad' } },
        target: { kind: 'ally' },
        details: {
          target: {
            def_value_up: { base: { milliValue: 40000 }, per_lv_up: { milliValue: 4000 }, term: { for_rounds: 1 } },
            area_damage_dispersion_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
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
        conditions: [{ state: { target: [{ affected: 'marked' }, { affected: 'immovable' }] } }],
        target: { kind: 'enemy' },
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
        conditions: [{ state: { target: [{ affected: 'marked' }, { affected: 'immovable' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } } }
      }, {
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: {
          target: {
            fixed_fire_damage_over_time: { base: { value: 40 }, per_lv_up: { value: 30 }, term: { for_rounds: 3 } },
            buff_removal: { effect: 'counterattack', term: 'immediate' }
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
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['flying'] },
        details: {
          target: {
            atk_up: { tag: 'bombardment_squadron_command', base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            cri_up: { tag: 'bombardment_squadron_command', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { defense_penetration: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 4000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'enemy_killed' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 3000 }, per_lv_up: { milliPercentage: 150 }, term: 'infinite' },
            spd_up: { base: { milliPercentage: 3000 }, per_lv_up: { milliPercentage: 150 }, term: 'infinite' }
          }
        }
      }],
    }, {
      area: 'all_adjacent',
      effects: [{
        // TODO: investigation required for fixed_damage rate
        conditions: [{ trigger: 'be_killed' }],
        target: { kind: 'ally' },
        details: { target: { fixed_damage: { base: { milliPercentage: 500000 }, per_lv_up: { milliPercentage: 25000 }, rate: { base: { milliPercentage: 95000 }, per_lv_up: { milliPercentage: -5000 } } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ hp_less_or_equal: 50 }] } }],
        target: { kind: 'ally' },
        details: { target: { spd_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ hp_less_or_equal: 25 }] } }],
        target: { kind: 'ally' },
        details: { target: { ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' } } }
      }]
    }]
  },
  52: {
    no: 52,
    active: [{
      damage_deal: {
        base: { milliPercentage: 175000 },
        per_lv_up: { milliPercentage: 25000 }
      },
      range: 3,
      cost: 6,
      area: 'single',
      effects: [{
        details: {
          self: {
            light_type_damage_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } },
            heavy_type_damage_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ affected: 'eva_down' }, { affected: 'spd_down' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 150000 },
        per_lv_up: { milliPercentage: 20000 }
      },
      range: 4,
      cost: 9,
      area: 'row_toward_front',
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ state: { target: [{ affected: 'marked' }, { affected: 'immovable' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { defense_penetration: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 4000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ grid: 'mid_line' }, { grid: 'back_line' }] } }],
        details: {
          self:{
            acc_up: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 4000 }, term: { for_rounds: 1 } },
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
            atk_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { in_squad: 51 } } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: { self: { minimize_damage: { tag: 'stealth_mode', times: { 1: 1, 10: 2 }, term: 'infinite' } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        details: { self: { damage_multiplier_up_by_status: { status: 'eva', base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ tagged: 'stealth_mode' }] } }],
        details: { self: { atk_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
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
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: {
          target: {
            acc_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            cri_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            spd_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            buff_removal: { effect: 'acc_up' }
          }
        }
      }]
    }, {
      range: 0,
      cost: 8,
      area: 'cross_adjacent',
      effects: [{
        target: { kind: 'ally' },
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
        conditions: [{ trigger: 'start_round', state: { self: [{ grid: 'front_line' }] } }],
        details: { self: { eva_up: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ grid: 'mid_line' }] } }],
        details: { self: { eva_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ grid: 'back_line' }] } }],
        details: { self: { eva_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
        details: { target: { debuff_removal: { effects: ['acc_down', 'eva_down'] } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['light', 'heavy'] },
        details: {
          target: {
            acc_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            damage_reduction_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['flying'] },
        details: {
          target: {
            acc_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 18000 }, per_lv_up: { milliPercentage: 900 }, term: { for_rounds: 1 } },
            damage_reduction_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 600 }, term: { for_rounds: 1 } },
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
        target: { kind: 'enemy' },
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
        target: { kind: 'ally' },
        details: {
          target: {
            eva_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } },
            damage_reduction_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
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
        conditions: [{ trigger: 'start_round', state: { target: [{ tagged: 'bombardment_squadron_command' }] } }],
        target: { kind: 'ally', conditions: ['attacker', 'supporter'] },
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
        target: { kind: 'enemy', conditions: ['light', 'heavy'] },
        details: { target: { eva_down: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 2 } } } }
      }, {
        target: { kind: 'enemy', conditions: ['flying'] },
        details: { target: { eva_down: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ state: { target: [{ affected: 'marked' }, { affected: 'immovable' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
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
        details: { self: { flying_type_damage_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } } }
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
        details: { self: { flying_type_damage_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
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
        details: { self: { buff_removal: { tag: 'elation', effects: ['atk_up', 'acc_up', 'eva_up'] } } }
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
        target: { kind: 'ally' },
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
        conditions: [{ state: { target: [{ affected: 'marked' }, { affected: 'immovable' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: 'immediate' } } }
      }, {
        conditions: [{ state: { self: [{ tagged: 'slow_but_deadly' }] } }],
        details: {
          self: {
            heavy_type_damage_down: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: -3000 }, term: 'immediate' },
            flying_type_damage_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 3000 }, term: 'immediate' }
          }
        }
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
        conditions: [{ state: { target: [{ affected: 'marked' }, { affected: 'immovable' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: 'immediate' } } }
      }, {
        conditions: [{ state: { self: [{ tagged: 'slow_but_deadly' }] } }],
        details: {
          self: {
            flying_type_damage_down: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: -3000 }, term: 'immediate' },
            heavy_type_damage_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 3000 }, term: 'immediate' }
          }
        }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: { self: { ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 100000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            defense_penetration: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
            light_type_damage_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            heavy_type_damage_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ affected_by: { unit: 54 } }, { affected_by: { unit: 55 } }] } }],
        details: {
          self: {
            ap_up: { base: { microValue: 500000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' },
            light_type_damage_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            heavy_type_damage_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { tag_stack: { tag: 'slow_but_deadly', term: { for_rounds: 1 }, cannot_be_dispelled: true } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'idle' }],
        details: { self: { spd_down: { tag: 'load_capacity_increased', base: { milliPercentage: 70000 }, per_lv_up: { milliPercentage: -3000 }, term: 'infinite' } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ tagged: 'load_capacity_increased' }] } }],
        details: {
          self: {
            set_ap: { base: { microValue: 12000000 }, per_lv_up: { microValue: 400000 }, term: 'immediate' },
            range_up_active_2: { value: 4, term: 'infinite' }
          }
        }
      }, {
        conditions: [{ trigger: 'use_active_2', state: { self: [{ tagged: 'load_capacity_increased' }] } }],
        details: { self: { ignore_def: { term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'use_active_2', state: { self: [{ tagged: 'load_capacity_increased' }] } }],
        target: { kind: 'enemy', conditions: ['heavy'] },
        details: { target: { buff_removal: { effect: 'damage_reduction_up', term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'hit' }],
        details: { self: { buff_removal: { tag: 'load_capacity_increased', effect: 'spd_down' } } }
      }]
    }]
  },
  57: {
    no: 57,
    active: [{
      damage_deal: {
        base: { milliPercentage: 112500 },
        per_lv_up: { milliPercentage: 7500 }
      },
      range: 2,
      cost: 9,
      area: 'rows_on_both_sides_toward_front',
      effects: [{
        details: { self: { defense_penetration: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 4000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy', conditions: ['heavy'] },
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2500 }, term: 'immediate' } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 165000 },
        per_lv_up: { milliPercentage: 15000 }
      },
      range: 3,
      cost: 9,
      area: 'row_toward_front',
      effects: [{
        details: {
          self: {
            ignore_protect: {},
            defense_penetration: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 4000 }, term: 'immediate' }
          }
        }
      }, {
        conditions: [{ trigger: 'hit', state: { target: [{ affected: 'marked' }, { affected: 'immovable' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2500 }, term: 'immediate' } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'use_active_1', state: { self: [{ grid: 'mid_line' }] } }],
        details: { self: { spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ trigger: 'use_active_1', state: { self: [{ grid: 'back_line' }] } }],
        details: { self: { spd_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ trigger: 'use_active_2', state: { self: [{ grid: 'mid_line' }] } }],
        details: { self: { damage_multiplier_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ trigger: 'use_active_2', state: { self: [{ grid: 'back_line' }] } }],
        details: { self: { damage_multiplier_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 2500 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 2500 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_wave', state: { squad: { in_squad: 52 } } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: 'infinite' },
            cri_up: { base: { milliPercentage: 7500 }, per_lv_up: { milliPercentage: 750 }, term: 'infinite' },
            spd_up: { base: { milliPercentage: 7500 }, per_lv_up: { milliPercentage: 750 }, term: 'infinite' }
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
        target: { kind: 'enemy' },
        details: {
          self: { ignore_protect: {} },
          target: {
            marked: { term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ affected: 'immovable' }, { affected: 'eva_down' }] } }],
        target: { kind: 'enemy' },
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
        target: { kind: 'ally' },
        details: {
          target: {
            ap_up: { tag: 'f_armory_deployment', base: { microValue: 1500000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' },
            atk_up: { tag: 'f_armory_deployment', base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 2 } },
            ignore_barrier_dr: { tag: 'f_armory_deployment', term: { for_rounds: 1 } }
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
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['heavy'] },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            def_up: { base: { milliPercentage: 8000 }, per_lv_up: { milliPercentage: 800 }, term: { for_rounds: 1 } },
            damage_reduction_up: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 400 }, term: { for_rounds: 1 } }
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
        target: { kind: 'ally' },
        details: {
          target: {
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ tagged: 'f_armory_deployment' }] } }],
        target: { kind: 'ally' },
        details: { target: { debuff_removal: { effects: ['atk_down', 'cri_down'] } } }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: [{ type: 'heavy', role: 'attacker' }] },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ tagged: 'f_armory_deployment' }] } }],
        target: { kind: 'ally', conditions: [{ type: 'heavy', role: 'attacker' }] },
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
          target: { kind: 'enemy' },
          details: {
            target: {
              atk_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
              cri_down: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 2 } }
            }
          }
        }, {
          conditions: [{ state: { target: [{ affected: 'def_down' }] } }],
          target: { kind: 'enemy' },
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
              light_type_damage_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } },
              heavy_type_damage_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } },
              defense_penetration: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 4000 } }
            }
          }
        }, {
          conditions: [{ trigger: 'use_this_active' }],
          details: { self: { acc_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 10000 } } } }
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
              light_type_damage_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 } },
              heavy_type_damage_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 } },
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
      cruiser: {
        area: 'self',
        effects: [{
          conditions: [{ trigger: 'idle' }],
          details: {
            self: {
              form_change: { form: 'armor', term: { for_rounds: 999 } },
              damage_reduction_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
              row_protect: { term: { for_rounds: 1 } },
              fire_resist_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
              ice_resist_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
              electric_resist_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
              status_resist_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
            }
          }
        }, {
          conditions: [{ trigger: 'start_round' }],
          details: { self: { damage_reduction_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } } } }
        }, {
          conditions: [{ trigger: 'start_round', round: { until: 2 } }],
          details: { self: { ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 100000 }, term: 'immediate' } } }
        }]
      },
      armor: {
        area: 'self',
        effects: [{
          conditions: [{ trigger: 'start_round' }],
          details: {
            self: {
              row_protect: { term: { for_rounds: 1 } },
              damage_reduction_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } }
            }
          }
        }, {
          conditions: [{ trigger: 'be_hit' }],
          details: { self: { def_up: { tag: 'shock_absorption', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 3 }, max_stack: 3 } } }
        }, {
          conditions: [{ trigger: 'be_hit', state: { self: [{ stack: { tag: 'shock_absorption', equal: 1 } }] } }],
          details: { self: { counterattack: { milliPercentage: 120000, term: 'immediate' } } }
        }, {
          conditions: [{ trigger: 'be_hit', state: { self: [{ stack: { tag: 'shock_absorption', equal: 2 } }] } }],
          details: { self: { counterattack: { milliPercentage: 140000, term: 'immediate' } } }
        }, {
          conditions: [{ trigger: 'be_hit', state: { self: [{ stack: { tag: 'shock_absorption', equal: 3 } }] } }],
          details: { self: { counterattack: { milliPercentage: 160000, term: 'immediate' } } }
        }]
      }
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { self: [{ form: 'cruiser' }] } }],
        details: {
          self: {
            def_up: { base: { milliPercentage: 75000 }, per_lv_up: { milliPercentage: 4500 }, term: { for_rounds: 1 } },
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
            def_up: { base: { milliPercentage: 75000 }, per_lv_up: { milliPercentage: 4500 }, term: { for_rounds: 1 } },
            fire_resist_up: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            ice_resist_up: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            electric_resist_up: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            status_resist_up: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      cruiser: {
        area: 'under_watcher_with_self',
        effects: [{
          conditions: [{ trigger: 'start_round' }],
          target: {
            kind: 'ally',
            conditions: [
              { type: 'light', role: 'attacker' },
              { type: 'light', role: 'supporter' },
              { type: 'heavy', role: 'attacker' },
              { type: 'heavy', role: 'supporter' },
            ]
          },
          details: { target: { target_protect: { term: { for_rounds: 1 } } } }
        }, {
          conditions: [{ trigger: 'start_round' }],
          target: { kind: 'ally', conditions: ['heavy'] },
          details: {
            target: {
              atk_up: { base: { milliPercentage: 8000 }, per_lv_up: { milliPercentage: 400 }, term: { for_rounds: 1 } },
              spd_up: { base: { milliPercentage: 8000 }, per_lv_up: { milliPercentage: 400 }, term: { for_rounds: 1 } }
            }
          }
        }]
      },
      armor: {
        area: 'under_watcher_with_self',
        effects: [{
          conditions: [{ trigger: 'start_round' }],
          target: {
            kind: 'ally',
            conditions: [
              { type: 'light', role: 'attacker' },
              { type: 'light', role: 'supporter' },
              { type: 'heavy', role: 'attacker' },
              { type: 'heavy', role: 'supporter' },
            ]
          },
          details: {
            target: {
              target_protect: { term: { for_rounds: 1 } },
              fire_resist_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
              ice_resist_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
              electric_resist_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
              status_resist_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
            }
          }
        }, {
          conditions: [{ trigger: 'start_round' }],
          target: { kind: 'ally', conditions: ['heavy'] },
          details: {
            target: {
              atk_up: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 800 }, term: { for_rounds: 1 } },
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
        conditions: [{ state: { target: [{ grid: 'front_line' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } } }
      }, {
        conditions: [{ state: { target: [{ grid: 'mid_line' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 } } } }
      }, {
        conditions: [{ state: { target: [{ grid: 'back_line' }] } }],
        target: { kind: 'enemy' },
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
        target: { kind: 'enemy', conditions: ['defender'] },
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
        details: { self: { defense_penetration: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 4000 }, term: { for_rounds: 1 } } } }
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
        conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'target_protect' }] } }],
        details: {
          self: {
            buff_removal: { effect: 'target_protect', term: 'immediate' },
            atk_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            damage_reduction_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } }
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
        details: { self: { light_type_damage_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }, {
        conditions: [{ state: { target: [{ affected: 'def_down' }, { affected: 'eva_down' }] } }],
        target: { kind: 'enemy' },
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
        target: { kind: 'enemy' },
        details: {
          self: { additional_damage: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 } } },
          target: { ap_down: { base: { microValue: 500000 }, per_lv_up: { microValue: 25000 } } }
        }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'target_protect' }] } }],
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
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'enemy', conditions: ['attacker', 'defender'] },
        details: { target: { light_type_damage_up: { base: { milliPercentage: 26000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: {
          kind: 'ally',
          conditions: [
            { alias: 'aa_cannonier', role: 'attacker' },
            { alias: 'aa_cannonier', role: 'defender' },
            { alias: 'armored_maiden', role: 'attacker' },
            { alias: 'armored_maiden', role: 'defender' }
          ]
        },
        details: { target: { light_type_damage_up: { base: { milliPercentage: 13000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { self: [{ grid: 'front_line' }] } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 16500 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 21500 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 22000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ grid: 'mid_line' }] } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 27000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 32300 }, per_lv_up: { milliPercentage: 2300 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 33000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ grid: 'back_line' }] } }],
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
        base: { milliPercentage: 200000 },
        per_lv_up: { milliPercentage: 15000 }
      },
      range: 3,
      cost: 5,
      area: 'single',
      effects: [{
        details: {
          self: {
            heavy_type_damage_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 3000 } },
            defense_penetration: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 4000 } }
          }
        }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 255000 },
        per_lv_up: { milliPercentage: 20000 }
      },
      range: 5,
      cost: 7,
      area: 'single',
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ state: { target: [{ affected: 'marked' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 } } } }
      }, {
        conditions: [{ state: { target: [{ affected: 'immovable' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 } } } }
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
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'end_wave' }],
        details: { self: { spd_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: 'infinite' } } }
      }, {
        conditions: [{ trigger: 'start_wave', state: { self: [{ tagged: 'scoop_discovery' }] } }],
        details: { self: { spd_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: 'infinite' } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            acc_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 4000 }, term: { for_rounds: 1 } },
            range_up: { value: 1, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 4000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_wave' }],
        details: { self: { acc_up: { base: { milliPercentage: 100000 }, per_lv_up: { milliPercentage: 50000 }, term: 'infinite', times: { 1: 1, 10: 2 } } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { atk_up: { tag: 'scoop_discovery', base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { num_of_units: { unit: 'cross_adjacent', greater_or_equal: 2 } } } }],
        details: { self: { re_attack: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'critical' }],
        target: { kind: 'enemy' },
        details: { target: { buff_removal: { effect: 'damage_reduction_up', term: 'immediate' } } }
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
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy', conditions: ['heavy'] },
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }, {
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy', conditions: ['defender'] },
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }, {
        conditions: [{ trigger: 'hit', state: { squad: { in_squad: 69 } } }],
        details: { self: { cooperative_attack: { unit: 69, active: 1 } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 131500 },
        per_lv_up: { milliPercentage: 11500 }
      },
      range: 4,
      cost: 8,
      area: 'fan_shape',
      effects: [{
        details: {
          self: {
            ignore_protect: {},
            light_type_damage_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 } }
          }
        }
      }, {
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy', conditions: ['light'] },
        details: { target: { buff_removal: { effect: 'damage_reduction_up' } } }
      }, {
        conditions: [{ trigger: 'hit', state: { target: [{ grid: 'front_line' }] } }],
        target: { kind: 'enemy', conditions: ['flying', 'heavy'] },
        details: { target: { buff_removal: { effect: 'damage_reduction_up' } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { heavy_type_damage_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'kill' }],
        details: { self: { heavy_type_damage_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: 'infinite', max_stack: 3 } } }
      }, {
        conditions: [{ trigger: 'attack' }],
        details: { self: { merciless: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: 'immediate' } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { squad: { not_in_squad: { alias: 'aa_cannonier', role: 'supporter' } } } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { in_squad: { alias: 'aa_cannonier', role: 'supporter' } } } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        details: { self: { ignore_barrier_dr: { term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { squad: { not_in_squad: { alias: 'aa_cannonier', role: 'supporter' } } } }],
        scale_factor: { per_units: { type: 'squad', unit: 'heavy' } },
        target: { kind: 'enemy' },
        details: { target: { damage_taken_increased: { base: { milliPercentage: 1000 }, per_lv_up: { milliPercentage: 200 }, term: 'infinite', max_stack: 1, times: 1 } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { not_in_squad: { alias: 'aa_cannonier', role: 'supporter' } } } }],
        scale_factor: { per_units: { type: 'squad', unit: 'attacker' } },
        target: { kind: 'enemy' },
        details: { target: { spd_down: { base: { milliPercentage: 1000 }, per_lv_up: { milliPercentage: 100 }, term: { for_rounds: 1 }, times: 1 } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { in_squad: { alias: 'aa_cannonier', role: 'supporter' } } } }],
        scale_factor: { per_units: { type: 'squad', unit: 'heavy' } },
        target: { kind: 'enemy' },
        details: { target: { damage_taken_increased: { base: { milliPercentage: 1500 }, per_lv_up: { milliPercentage: 300 }, term: 'infinite', max_stack: 1, times: 1 } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { in_squad: { alias: 'aa_cannonier', role: 'supporter' } } } }],
        scale_factor: { per_units: { type: 'squad', unit: 'attacker' } },
        target: { kind: 'enemy' },
        details: { target: { spd_down: { base: { milliPercentage: 1500 }, per_lv_up: { milliPercentage: 150 }, term: { for_rounds: 1 }, times: 1 } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: [{ alias: 'aa_cannonier', role: 'attacker' }] },
        details: { target: { follow_up_attack: { term: { for_rounds: 1 } } } }
      }]
    }]
  },
  68: {
    no: 68,
    active: [{
      damage_deal: {
        base: { milliPercentage: 259000 },
        per_lv_up: { milliPercentage: 23500 }
      },
      range: 6,
      cost: 10,
      area: 'single',
      effects: [{
        conditions: [{ state: { target: [{ affected: 'marked' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 } } } }
      }]
    }, {
      normal: {
        damage_deal: {
          base: { milliPercentage: 182500 },
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
          target: { kind: 'enemy' },
          details: { target: { buff_removal: { effects: ['barrier', 'damage_reduction_up'] } } }
        }]
      },
      limiter_unlock:{
        damage_deal: {
          base: { milliPercentage: 241500 },
          per_lv_up: { milliPercentage: 21500 }
        },
        range: 6,
        cost: 10,
        area: 'row_toward_front',
        effects: [{
          target: { kind: 'enemy' },
          details: {
            self: { ignore_protect: {} },
            target: { buff_removal: { effects: ['barrier', 'damage_reduction_up'] } }
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
        conditions: [{ trigger: 'attack', state: { self: [{ affected: 'follow_up_attack' }] } }],
        details: { self: { ap_up: { base: { microValue: 1500000 }, per_lv_up: { microValue: 75000 } } } }
      }, {
        conditions: [{ trigger: 'attack', state: { self: [{ affected: 'target_protect' }] } }],
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
            eva_up: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 5000 }, term: 'infinite' }
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
        details: { self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'hit', state: { target: [{ affected: 'damage_taken_increased' }, { affected: 'def_down' }] } }],
        target: { kind: 'enemy' },
        details: { target: { buff_removal: { effect: 'damage_reduction_up' } } }
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
        details: { self: { defense_penetration: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 5000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_damage: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'hit', state: { squad: { in_squad: 67 } } }],
        details: { self: { cooperative_attack: { unit: 67, active: 2 } } }
      }]
    }],
    passive: [{
      area: 'fixed_mid_and_back_line',
      effects: [{
        conditions: [{ trigger: 'start_wave', state: { self: [{ grid: 'mid_line' }, { grid: 'back_line' }] } }],
        target: { kind: 'ally', conditions: [{ type: 'heavy', role: 'attacker' }] },
        details: { target: { ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 100000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'start_wave', state: { self: [{ grid: 'mid_line' }, { grid: 'back_line' }], target: [{ grid: 'same_line' }] } }],
        target: { kind: 'ally', conditions: [{ type: 'heavy', role: 'attacker' }] },
        details: { target: { ap_up: { microValue: 1000000, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'attack' }],
        target: { kind: 'ally', conditions: [{ type: 'heavy', role: 'attacker' }] },
        details: { target: { ap_up: { base: { microValue: 500000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' } } }
      }, {
        conditions: [
          { trigger: 'follow_up_attack', state: { self: [{ tagged: 'bombard' }] } },
          { trigger: 'cooperative_attack', state: { self: [{ tagged: 'bombard' }] } }
        ],
        target: { kind: 'ally', conditions: [{ type: 'heavy', role: 'attacker' }] },
        details: { target: { ap_up: { base: { microValue: 250000 }, per_lv_up: { microValue: 25000 }, term: 'immediate' } } }
      }]
    }, {
      area: 'fixed_mid_and_back_line',
      effects: [{
        conditions: [
          { trigger: 'idle' },
          { trigger: 'start_round', state: { self: [{ tagged: 'battery' }] } }
        ],
        target: { kind: 'ally', conditions: [{ type: 'heavy', role: 'attacker' }] },
        details: {
          target: {
            acc_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 }, cannot_be_dispelled: true },
            cri_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 }, cannot_be_dispelled: true },
            immovable: { term: { for_rounds: 1 }, cannot_be_dispelled: true },
            prevents_effect: { effects: ['push', 'pull'], term: { for_rounds: 1 }, cannot_be_dispelled: true }
          }
        }
      }, {
        conditions: [{ trigger: 'idle', state: { self: [{ not_tagged: 'battery', grid: 'area_of_effect' }] } }],
        details: { self: { tag_stack: { tag: 'battery', term: 'infinite', cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'idle', state: { self: [{ tagged: 'battery', grid: 'area_of_effect' }] } }],
        details: { self: { tag_release: { tag: 'battery', term: 'immediate' } } }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        scale_factor: { per_units: { type: 'squad', unit: 'heavy' } },
        details: { self: { atk_up: { tag: 'bombard', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: 'infinite', cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_wave' }],
        scale_factor: { per_units: { type: 'squad', unit: 'attacker' } },
        details: { self: { cri_up: { tag: 'bombard', milliPercentage: 10000, term: 'infinite', cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: [{ alias: 'aa_cannonier', role: 'supporter' }] },
        details: { target: { follow_up_attack: { term: { for_rounds: 1 } } } }
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
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: { target: { def_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy', conditions: ['light', 'heavy'] },
        details: { target: { buff_removal: { effect: 'def_up', term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'critical', state: { self: [{ not_tagged: 'point_woman' }] } }],
        target: { kind: 'enemy' },
        details: { target: { buff_removal: { effects: ['row_protect', 'column_protect', 'target_protect'], term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ tagged: 'point_woman' }] } }],
        target: { kind: 'enemy' },
        details: { target: { buff_removal: { effects: ['row_protect', 'column_protect', 'target_protect'], term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ tagged: 'foo' }], squad: { in_squad: 67 } } }],
        details: { self: { cooperative_attack: { unit: 67, active: 1, term: 'immediate' } } }
      }]
    }, {
      damage_deal: {
        milliPercentage: 3000
      },
      range: 4,
      cost: 7,
      area: 'single',
      effects: [{
        target: { kind: 'enemy' },
        details: {
          self: { ignore_protect: {} },
          target: {
            marked: { term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'critical', state: { self: [{ not_tagged: 'point_woman' }] } }],
        target: { kind: 'enemy' },
        details: { target: { buff_removal: { effects: ['eva_up', 'damage_reduction_up'] } } }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ tagged: 'point_woman' }] } }],
        target: { kind: 'enemy' },
        details: { target: { buff_removal: { effects: ['eva_up', 'damage_reduction_up'] } } }
      }, {
        conditions: [{ trigger: 'use_this_active' }],
        details: { self: { acc_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 30000 } } } }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ tagged: 'foo' }], squad: { in_squad: 69 } } }],
        details: { self: { cooperative_attack: { unit: 69, active: 2, term: 'immediate' } } }
      }]
    }],
    passive: [{
      area: {
        1: 'all',
        10: 'fixed_all'
      },
      effects: [{
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'ally', conditions: [{ type: 'heavy', role: 'attacker' }] },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 }, max_stack: 2 },
            acc_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 }, max_stack: 2 },
            ap_up: { base: { microValue: 500000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' }
          }
        }
      }, {
        conditions: [{ trigger: 'hit' }],
        details: {
          self: {
            eva_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 }, max_stack: 2 },
            acc_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 }, max_stack: 2 }
          }
        }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ tagged: 'foo' }], squad: { not_in_squad: [67, 69] } } }],
        details: { self: { ap_up: { base: { microValue: 500000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            ap_up: { tag: 'foo', base: { microValue: 500000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' },
            prevents_effect: { tag: 'foo', effect: 'acc_down', term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            eva_up: { tag: 'point_woman', base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 1 } },
            spd_up: { tag: 'point_woman', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_wave', state: { enemy: { num_of_units: { unit: 'defender', equal: 0 } } } }],
        target: { kind: 'ally', conditions: [{ alias: 'aa_cannonier', role: 'attacker' }] },
        details: { target: { ignore_protect: { term: { for_rounds: 1 }, cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_wave', state: { enemy: { num_of_units: { unit: 'defender', equal: 1 } } } }],
        target: { kind: 'ally', conditions: [{ alias: 'aa_cannonier', role: 'attacker' }] },
        details: { target: { ignore_protect: { term: { for_rounds: 2 }, cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_wave', state: { enemy: { num_of_units: { unit: 'defender', equal: 2 } } } }],
        target: { kind: 'ally', conditions: [{ alias: 'aa_cannonier', role: 'attacker' }] },
        details: { target: { ignore_protect: { term: { for_rounds: 3 }, cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_wave', state: { enemy: { num_of_units: { unit: 'defender', equal: 3 } } } }],
        target: { kind: 'ally', conditions: [{ alias: 'aa_cannonier', role: 'attacker' }] },
        details: { target: { ignore_protect: { term: { for_rounds: 4 }, cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_wave', state: { enemy: { num_of_units: { unit: 'defender', equal: 4 } } } }],
        target: { kind: 'ally', conditions: [{ alias: 'aa_cannonier', role: 'attacker' }] },
        details: { target: { ignore_protect: { term: { for_rounds: 5 }, cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_wave', state: { enemy: { num_of_units: { unit: 'defender', equal: 5 } } } }],
        target: { kind: 'ally', conditions: [{ alias: 'aa_cannonier', role: 'attacker' }] },
        details: { target: { ignore_protect: { term: { for_rounds: 6 }, cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_wave', state: { enemy: { num_of_units: { unit: 'defender', equal: 6 } } } }],
        target: { kind: 'ally', conditions: [{ alias: 'aa_cannonier', role: 'attacker' }] },
        details: { target: { ignore_protect: { term: { for_rounds: 7 }, cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_wave', state: { enemy: { num_of_units: { unit: 'defender', equal: 7 } } } }],
        target: { kind: 'ally', conditions: [{ alias: 'aa_cannonier', role: 'attacker' }] },
        details: { target: { ignore_protect: { term: { for_rounds: 8 }, cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_wave', state: { enemy: { num_of_units: { unit: 'defender', equal: 8 } } } }],
        target: { kind: 'ally', conditions: [{ alias: 'aa_cannonier', role: 'attacker' }] },
        details: { target: { ignore_protect: { term: { for_rounds: 9 }, cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_wave', state: { enemy: { num_of_units: { unit: 'defender', equal: 9 } } } }],
        target: { kind: 'ally', conditions: [{ alias: 'aa_cannonier', role: 'attacker' }] },
        details: { target: { ignore_protect: { term: { for_rounds: 10 }, cannot_be_dispelled: true } } }
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
        conditions: [{ state: { self: [{ stack: { tag: 'scrap_collect', greater_or_equal: 1 } }] } }],
        target: { kind: 'enemy' },
        details: { target: { ap_down: { base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 } } } }
      }, {
        conditions: [{ state: { self: [{ stack: { tag: 'scrap_collect', greater_or_equal: 2 } }] } }],
        target: { kind: 'enemy' },
        details: { target: { damage_taken_increased: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ state: { self: [{ stack: { tag: 'scrap_collect', greater_or_equal: 3 } }] } }],
        target: { kind: 'enemy' },
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
        target: { kind: 'enemy' },
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
        conditions: [{ state: { self: [{ stack: { tag: 'scrap_collect', greater_or_equal: 3 } }] } }],
        target: { kind: 'enemy' },
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
        target: { kind: 'ally' },
        details: {
          target: {
            damage_reduction_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            fire_resist_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            ice_resist_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            electric_resist_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ hp_less_or_equal: 50 }] } }],
        details: {
          self: {
            damage_reduction_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
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
            damage_reduction_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 } }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { atk_up: { tag: 'scrap_collect', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: 'infinite', max_stack: 3 } } }
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
        conditions: [{ state: { target: [{ affected: 'marked' }, { affected: 'def_down' }] } }],
        target: { kind: 'enemy' },
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
        target: { kind: 'enemy' },
        details: {
          self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } },
          target: { def_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 }, cannot_be_dispelled: true } }
        }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { self: [{ grid: 'front_line' }] } }],
        details: { self: { eva_up: { base: { milliPercentage: 41000 }, per_lv_up: { milliPercentage: 6000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ grid: 'mid_line' }] } }],
        details: { self: { eva_up: { base: { milliPercentage: 38000 }, per_lv_up: { milliPercentage: 5500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ grid: 'back_line' }] } }],
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
        scale_factor: { per_units: { type: 'enemy', variation: 'proportional' } },
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
          target: { kind: 'enemy' },
          details: {
            target: {
              marked: { term: { for_rounds: 2 } },
              damage_taken_increased: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
              eva_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } }
            }
          }
        }, {
          conditions: [{ trigger: 'critical' }],
          target: { kind: 'enemy' },
          details: { target: { buff_removal: { effect: 'counterattack' } } }
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
          target: { kind: 'enemy' },
          details: {
            self: { ignore_protect: {} },
            target: {
              acc_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
              cri_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
              spd_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
            }
          }
        }, {
          conditions: [{ trigger: 'critical' }],
          target: { kind: 'enemy' },
          details: {
            self: { additional_damage: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 } } },
            target: { buff_removal: { effect: 'counterattack' } }
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
          conditions: [{ state: { target: [{ affected: 'immovable' }, { affected: 'eva_down' }] } }],
          target: { kind: 'enemy' },
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
          target: { kind: 'enemy' },
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
              damage_reduction_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
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
          conditions: [{ trigger: 'attack', state: { self: [{ grid: 'mid_line' }, { grid: 'back_line' }] } }],
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
        base: { milliPercentage: 106500 },
        per_lv_up: { milliPercentage: 11500 }
      },
      range: 3,
      cost: 8,
      area: 'line_with_back',
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy', conditions: ['light', 'heavy'] },
        details: {
          target: {
            immovable: { term: { for_rounds: 2 }, max_stack: 1 },
            def_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 2 }, max_stack: 1 },
            spd_down: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 }, max_stack: 1 },
            damage_taken_increased: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 }, max_stack: 1 }
          }
        }
      }, {
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy', conditions: ['flying'] },
        details: {
          target: {
            immovable: { term: { for_rounds: 2 }, max_stack: 1 },
            def_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 }, max_stack: 1 },
            spd_down: { base: { milliPercentage: 2500 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 2 }, max_stack: 1 },
            damage_taken_increased: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 }, max_stack: 1 }
          }
        }
      }]
    }, {
      range: 0,
      cost: 9,
      area: {
        1: 'cross',
        10: 'all'
      },
      effects: [{
        target: { kind: 'ally' },
        details: {
          target: {
            barrier: { base: { value: 100 }, per_lv_up: { value: 50 }, term: { for_rounds: 3 } },
            damage_reduction_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 3 } },
            status_resist_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 3 } },
            fire_resist_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 3 } },
            ice_resist_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 3 } },
            electric_resist_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 3 } },
            all_buff_removal_resist_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 3 } }
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
            def_up: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
            damage_reduction_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            status_resist_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            electric_resist_up: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'be_hit_electric_active' }],
        details: { self: { ap_up: { base: { microValue: 500000 }, per_lv_up: { microValue: 100000 }, term: 'immediate' } } }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { squad: { num_of_units: { unit: 'heavy', less_or_equal: 1 } } } }],
        target: { kind: 'ally', conditions: ['light', 'flying'] },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { num_of_units: { unit: 'heavy', less_or_equal: 1 } } } }],
        target: {
          kind: 'ally',
          conditions: [
            { type: 'light', role: 'attacker' }, { type: 'light', role: 'supporter' },
            { type: 'flying', role: 'attacker' }, { type: 'flying', role: 'supporter' }
          ]
        },
        details: { target: { target_protect: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { num_of_units: { unit: 'light', greater_or_equal: 2 } } } }],
        details: { self: { row_protect: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { num_of_units: { unit: 'flying', greater_or_equal: 2 } } } }],
        details: { self: { column_protect: { term: { for_rounds: 1 } } } }
      }]
    }, {
      area: {
        1: 'fixed_cross',
        10: 'fixed_all'
      },
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        target: { kind: 'enemy' },
        details: { target: { immovable: { term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ trigger: 'start_wave' }, { trigger: 'kill' }],
        target: { kind: 'enemy', conditions: ['light'] },
        details: {
          target: {
            provoked: { term: { for_rounds: 2 }, cannot_be_dispelled: true },
            spd_down: { base: { milliPercentage: 1000 }, per_lv_up: { milliPercentage: 400 }, term: { for_rounds: 2 }, cannot_be_dispelled: true },
            damage_taken_increased: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 }, cannot_be_dispelled: true },
            damage_multiplier_down: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 }, cannot_be_dispelled: true }
          }
        }
      }, {
        conditions: [{ trigger: 'start_wave' }, { trigger: 'kill' }],
        target: { kind: 'enemy', conditions: ['heavy'] },
        details: {
          target: {
            provoked: { term: { for_rounds: 2 }, cannot_be_dispelled: true },
            spd_down: { base: { milliPercentage: 4200 }, per_lv_up: { milliPercentage: 600 }, term: { for_rounds: 2 }, cannot_be_dispelled: true },
            damage_taken_increased: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 }, cannot_be_dispelled: true },
            damage_multiplier_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 }, cannot_be_dispelled: true }
          }
        }
      }]
    }]
  },
  75: {
    no: 75,
    active: [{
      damage_deal: {
        base: { milliPercentage: 127000 },
        per_lv_up: { milliPercentage: 11000 },
        attribute: 'electric'
      },
      range: 3,
      cost: 6,
      area: 'single',
      effects: [{
        target: { kind: 'enemy' },
        details:{
          target: {
            eva_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 3 } },
            ap_down: { base: { microValue: 300000 }, per_lv_up: { microValue: 15000 }, term: 'immediate' }
          }
        }
      }, {
        conditions: [{ state: { target: [{ affected: 'marked' }, { affected: 'immovable' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 122500 },
        per_lv_up: { milliPercentage: 10500 },
        attribute: 'electric'
      },
      range: 5,
      cost: 8,
      area: 'row_toward_front',
      effects: [{
        target: { kind: 'enemy' },
        details:{
          target: {
            eva_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 3 } },
            ap_down: { base: { microValue: 300000 }, per_lv_up: { microValue: 15000 }, term: 'immediate' }
          }
        }
      }, {
        conditions: [{ state: { target: [{ affected: 'marked' }, { affected: 'immovable' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_wave', state: { squad: { in_squad: 'electric_active' } } }],
        scale_factor: { per_units: { type: 'squad', unit: 'electric_active', except: 'self' } },
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
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['electric_active'] },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 21000 }, per_lv_up: { milliPercentage: 1000 } },
            spd_up: { base: { milliPercentage: 5500 }, per_lv_up: { milliPercentage: 500 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: [{ alias: 'electric_active', type: 'flying' }] },
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
        scale_factor: { per_units: { type: 'squad' } },
        target: { kind: 'enemy' },
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
        target: { kind: 'enemy' },
        details: {
          target: {
            def_down: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            push: { value: 1 }
          }
        }
      }, {
        conditions: [{ state: { self: [{ tagged: 'max_output_burst' }] } }],
        target: { kind: 'enemy' },
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
        target: { kind: 'enemy' },
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
        details: { self: { activation_rate_percentage_up: { effect: 'all_buff_removal', milliPercentage: 50000 } } }
      }]
    }],
    passive: [{
      area: {
        1: 'line_adjacent',
        10: 'cross_adjacent'
      },
      effects: [{
        conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'atk_up' }] } }],
        target: { kind: 'ally' },
        details: { target: { atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'acc_up' }] } }],
        target: { kind: 'ally' },
        details: { target: { acc_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'cri_up' }] } }],
        target: { kind: 'ally' },
        details: { target: { cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'spd_up' }] } }],
        target: { kind: 'ally' },
        details: { target: { spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'damage_reduction_up' }] } }],
        target: { kind: 'ally' },
        details: { target: { damage_reduction_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
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
        conditions: [{ trigger: 'start_wave', state: { self: [{ affected: 'reconnaissance' }] } }],
        target: { kind: 'enemy' },
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
        target: { kind: 'enemy' },
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
        conditions: [{ state: { target: [{ affected: 'marked' }, { affected: 'immovable' }] } }],
        target: { kind: 'enemy' },
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
        scale_factor: { per_units: { type: 'squad', unit: 'light' } },
        details: {
          self: {
            cri_up: { base: { milliPercentage: 5500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            atk_up: { base: { milliPercentage: 3200 }, per_lv_up: { milliPercentage: 200 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        scale_factor: { per_units: { type: 'squad', unit: 'light' } },
        target: { kind: 'ally', conditions: ['light'] },
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
        target: { kind: 'ally' },
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
        target: { kind: 'enemy' },
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
        conditions: [{ state: { target: [{ affected: 'eva_down' }, { affected: 'immovable' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } } }
      }]
    }],
    passive: [{
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        scale_factor: { per_units: { type: 'squad', unit: 'tomos_friends' } },
        details: {
          self: {
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['tomos_friends'] },
        details: { target: { follow_up_attack: { term: { for_rounds: 1 } } } }
      }]
    }]
  },
  79: {
    no: 79,
    active: [{
      damage_deal: {
        base: { milliPercentage: 128500 },
        per_lv_up: { milliPercentage: 13500 },
        attribute: 'fire'
      },
      range: 4,
      cost: 5,
      area: 'single',
      effects: [{
        target: { kind: 'enemy' },
        details: {
          target: {
            def_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            fire_resist_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ affected: 'marked' }, { affected: 'immovable' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_fire_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 225000 },
        per_lv_up: { milliPercentage: 25000 }
      },
      range: 5,
      cost: 9,
      area: 'cross_small_explosion',
      effects: [{
        details: {
          self: {
            ignore_protect: {},
            ignore_def: {}
          }
        }
      }, {
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
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
            atk_up: { base: { milliPercentage: 17500 }, per_lv_up: { milliPercentage: 1750 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 3000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'reconnaissance' }] } }],
        details: { self: { atk_up: { base: { milliPercentage: 17500 }, per_lv_up: { milliPercentage: 1750 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'end_wave' }],
        details: { self: { reconnaissance: {} } }
      }]
    }, {
      area: 'all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
        details: {
          target: {
            acc_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 7500 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ affected: 'reconnaissance' }] } }],
        target: { kind: 'ally' },
        details: { target: { follow_up_attack: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', round: { from: 3 } }],
        target: { kind: 'ally' },
        details: {
          target: {
            acc_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 7500 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ affected: 'atk_up' }, { affected: 'atk_down' }] } }],
        target: { kind: 'enemy' },
        details: { target: { atk_down: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ affected: 'eva_up' }, { affected: 'eva_down' }] } }],
        target: { kind: 'enemy' },
        details: { target: { eva_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ affected: 'fire_resist_up' }, { affected: 'fire_resist_down' }] } }],
        target: { kind: 'enemy' },
        details: { target: { fire_resist_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ affected: 'ice_resist_up' }, { affected: 'ice_resist_down' }] } }],
        target: { kind: 'enemy' },
        details: { target: { ice_resist_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ affected: 'electric_resist_up' }, { affected: 'electric_resist_down' }] } }],
        target: { kind: 'enemy' },
        details: { target: { electric_resist_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ affected: 'damage_taken_increased' }] } }],
        target: { kind: 'enemy' },
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
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: {
          target: {
            marked: { term: { for_rounds: 2 } },
            ice_resist_down: { tag: 'wet', base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 2 } },
            electric_resist_down: { tag: 'wet', base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 2 } },
            fire_resist_up: { tag: 'wet', base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 2 } },
            spd_down: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'hit', state: { squad: { in_squad: 84 } } }],
        details: { self: { cooperative_attack: { unit: 84, active: 2, term: 'immediate' } } }
      }]
    }, {
      range: 6,
      cost: 10,
      area: 'fixed_all',
      effects: [{
        target: { kind: 'ally' },
        details: { target: { ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' } } }
      }, {
        conditions: [{ state: { squad: { not_in_squad: ['defender', 'armored_bulgasari'] } } }],
        target: { kind: 'ally' },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 }, max_stack: 1 },
            acc_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 }, max_stack: 1 },
            defense_penetration: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 }, max_stack: 1 }
          }
        }
      }, {
        conditions: [{ state: { squad: { num_of_units: { unit: ['defender', 'armored_bulgasari'], equal: 1 } } } }],
        target: { kind: 'ally' },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 3 }, max_stack: 1 },
            acc_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 3 }, max_stack: 1 },
            defense_penetration: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 3 }, max_stack: 1 }
          }
        }
      }, {
        conditions: [{ state: { squad: { num_of_units: { unit: ['defender', 'armored_bulgasari'], equal: 2 } } } }],
        target: { kind: 'ally' },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 4 }, max_stack: 1 },
            acc_up: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 4 }, max_stack: 1 },
            defense_penetration: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 4 }, max_stack: 1 }
          }
        }
      }, {
        conditions: [{ state: { squad: { num_of_units: { unit: ['defender', 'armored_bulgasari'], equal: 3 } } } }],
        target: { kind: 'ally' },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 5 }, max_stack: 1 },
            acc_up: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 5 }, max_stack: 1 },
            defense_penetration: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 5 }, max_stack: 1 }
          }
        }
      }, {
        conditions: [{ state: { squad: { num_of_units: { unit: ['defender', 'armored_bulgasari'], equal: 4 } } } }],
        target: { kind: 'ally' },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 6 }, max_stack: 1 },
            acc_up: { base: { milliPercentage: 60000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 6 }, max_stack: 1 },
            defense_penetration: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 6 }, max_stack: 1 }
          }
        }
      }, {
        conditions: [
          { state: { squad: { in_squad: { alias: 'mongoose_team', role: 'defender' } } } },
          { state: { squad: { in_squad: 'armored_bulgasari' } } }
        ],
        target: { kind: 'ally' },
        details: { target: { all_debuff_removal: { term: 'immediate' } } }
      }]
    }],
    passive: [{
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 7500 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 4000 }, per_lv_up: { milliPercentage: 400 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ affected_by: { alias: 'mongoose_team', except: 80 } }] } }],
        target: { kind: 'ally' },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 7500 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 4000 }, per_lv_up: { milliPercentage: 400 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'enemy' },
        details: {
          target: {
            damage_multiplier_down: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            acc_down: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: {
        1: 'all_adjacent_without_back_line',
        10: 'fixed_front_and_mid_line'
      },
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['defender'] },
        details: {
          target: {
            damage_reduction_up: { tag: 'suppression_formation', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            eva_up: { tag: 'suppression_formation', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            row_protect: { tag: 'suppression_formation', term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: [{ alias: 'mongoose_team', role: 'defender' }] },
        details: {
          target: {
            damage_reduction_up: { base: { milliPercentage: 2500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ equipped: 'counterterrorism_body_armor' }] } }],
        target: { kind: 'ally', conditions: [84] },
        details: {
          target: {
            damage_reduction_up: { base: { milliPercentage: 7500 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_wave' }],
        target: { kind: 'ally', conditions: ['defender'] },
        details: { target: { ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 } } } }
      }, {
        conditions: [{ trigger: 'start_wave', state: { target: [{ equipped: 'counterterrorism_body_armor' }] } }],
        target: { kind: 'ally', conditions: [84] },
        details: { target: { ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 } } } }
      }]
    }, {
      area: {
        1: 'fixed_back_line',
        10: 'fixed_mid_and_back_line'
      },
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: [{ type: 'light', role: 'attacker' }, { type: 'light', role: 'supporter' }, 'mongoose_team'] },
        details: {
          target: {
            atk_up: { tag: 'focused_sniping_instruction', base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            acc_up: { tag: 'focused_sniping_instruction', base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            cri_up: { tag: 'focused_sniping_instruction', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            defense_penetration: { tag: 'focused_sniping_instruction', base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['mongoose_team'] },
        details: { target: { range_up: { value: 1, term: { for_rounds: 1 } } } }
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
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: {
          target: {
            atk_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            spd_down: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'hit', state: { squad: { not_in_squad: 80 } } }],
        target: { kind: 'enemy' },
        details: { target: { stunned: { term: { for_rounds: 1 }, rate: { milliPercentage: 25000 } } } }
      }, {
        conditions: [{ trigger: 'hit', state: { squad: { in_squad: 80 } } }],
        target: { kind: 'enemy' },
        details: { target: { stunned: { term: { for_rounds: 1 }, rate: { milliPercentage: 75000 } } } }
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
            status_resist_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 3 } },
            all_buff_removal_resist_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 3 }, cannot_be_dispelled: true }
          }
        }
      }, {
        conditions: [{ state: { self: [{ affected: 'counterattack' }] } }],
        details: { self: { acc_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 3 } } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            def_up: { base: { milliPercentage: 60000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
            damage_reduction_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            row_protect: { term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ grid: 'front_line' }] } }],
        details: { self: { counterattack: { base: { milliPercentage: 80000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'be_hit' }],
        details: {
          self: {
            ap_up: { base: { microValue: 500000 }, per_lv_up: { microValue: 25000 }, term: 'immediate' },
            range_up: { value: 1, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'fixed_front_and_mid_line',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ grid: 'front_line' }] } }],
        target: { kind: 'ally', conditions: ['attacker', 'supporter'] },
        details: { target: { target_protect: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 600 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 400 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 3000 }, per_lv_up: { milliPercentage: 200 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ grid: 'front_line' }] } }],
        target: { kind: 'ally' },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 300 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 3000 }, per_lv_up: { milliPercentage: 200 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 1500 }, per_lv_up: { milliPercentage: 100 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ grid: 'front_line' }] } }],
        target: { kind: 'ally' },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 300 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 3000 }, per_lv_up: { milliPercentage: 200 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 1500 }, per_lv_up: { milliPercentage: 100 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'enemy', conditions: ['defender'] },
        details: {
          target: {
            provoked: { term: { for_rounds: 1 } },
            ignore_protect_deactivate: { term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'be_hit', state: { target: [{ affected: 'provoked' }] } }],
        target: { kind: 'enemy' },
        details: {
          target: {
            ap_down: { microValue: 600000, term: 'immediate' },
            damage_taken_increased: { milliPercentage: 12000, term: { for_rounds: 2 }, max_stack: 3 }
          }
        }
      }, {
        conditions: [{ trigger: 'use_active_2', state: { self: [{ affected: 'follow_up_attack' }] } }],
        target: { kind: 'ally_except_self' },
        details: {
          target: {
            status_resist_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 3 } },
            all_buff_removal_resist_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 3 }, cannot_be_dispelled: true }
          }
        }
      }, {
        conditions: [{ trigger: 'use_active_2', state: { self: [{ affected: ['follow_up_attack', 'counterattack'] }] } }],
        target: { kind: 'ally_except_self' },
        details: { target: { acc_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 3 } } } }
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
        conditions: [{ state: { target: [{ affected: 'provoked' }, { affected: 'marked' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } } }
      }, {
        conditions: [{ trigger: 'hit', state: { squad: { in_squad: 84 } } }],
        details: { self: { cooperative_attack: { unit: 84, active: 2 } } }
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
        conditions: [{ trigger: 'hit', state: { target: [{ affected: 'damage_taken_increased' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'hit', state: { squad: { in_squad: 80 } } }],
        details: { self: { defense_penetration: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 3000 }, term: 'immediate' } } }
      }]
    }],
    passive: [{
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_wave', state: { target: [{ grid: 'front_line' }, { grid: 'mid_line' }] } }],
        target: { kind: 'ally', conditions: ['defender'] },
        details: { target: { ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ grid: 'front_line' }, { grid: 'mid_line' }] } }],
        target: { kind: 'ally', conditions: ['defender'] },
        details: { target: { follow_up_attack: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_wave', state: { target: [{ grid: 'front_line', equipped: 'counterterrorism_body_armor' }, { grid: 'mid_line', equipped: 'counterterrorism_body_armor' }] } }],
        target: { kind: 'ally', conditions: [84] },
        details: { target: { ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ grid: 'front_line', equipped: 'counterterrorism_body_armor' }, { grid: 'mid_line', equipped: 'counterterrorism_body_armor' }] } }],
        target: { kind: 'ally', conditions: [84] },
        details: { target: { follow_up_attack: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ grid: 'front_line' }, { grid: 'mid_line' }] } }],
        target: { kind: 'ally', conditions: ['defender'] },
        details: {
          target: {
            def_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 3000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ grid: 'front_line', equipped: 'counterterrorism_body_armor' }, { grid: 'mid_line', equipped: 'counterterrorism_body_armor' }] } }],
        target: { kind: 'ally', conditions: [84] },
        details: {
          target: {
            def_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 3000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        scale_factor: { per_units: { type: 'squad', unit: 'defender' } },
        details: { self: { damage_multiplier_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { in_squad: 'armored_bulgasari' } } }],
        details: { self: { damage_multiplier_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ grid: 'front_line' }, { grid: 'mid_line' }] } }],
        target: { kind: 'ally', conditions: ['defender'] },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } },
            acc_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            row_protect: { term: { for_rounds: 1 } },
            counterattack: { base: { milliPercentage: 80000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ grid: 'front_line', equipped: 'counterterrorism_body_armor' }, { grid: 'mid_line', equipped: 'counterterrorism_body_armor' }] } }],
        target: { kind: 'ally', conditions: [84] },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } },
            acc_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            row_protect: { term: { for_rounds: 1 } },
            counterattack: { base: { milliPercentage: 80000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } },
            acc_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['mongoose_team'] },
        details: { target: { follow_up_attack: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        details: { self: { merciless: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 1 } } } }
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
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: {
          target: {
            provoked: { term: { for_rounds: 2 } },
            acc_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'hit', state: { squad: { in_squad: 84 } } }],
        details: { self: { cooperative_attack: { unit: 84, active: 2 } } }
      }]
    }, {
      normal: {
        range: 6,
        cost: 7,
        area: 'single',
        effects: [{
          target: { kind: 'ally' },
          details: {
            target: { target_protect: { term: { for_rounds: 3 } } },
            self: {
              damage_reduction_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 } },
              counterattack: { base: { milliPercentage: 80000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 3 } }
            }
          }
        }, {
          conditions: [{ state: { squad: { in_squad: 80 } } }],
          details: { self: { prevents_effect: { effect: 'eva_down', term: { for_rounds: 3 } } } }
        }]
      },
      true_power: {
        range: 6,
        cost: 7,
        area: 'single',
        effects: [{
          conditions: [{ trigger: 'hit' }],
          target: { kind: 'enemy' },
          details: { target: { buff_removal: { effects: ['acc_up', 'cri_up'], term: 'immediate' } } }
        }, {
          conditions: [{ state: { target: [{ affected: 'provoked' }] } }],
          target: { kind: 'enemy' },
          details: {
            target: {
              acc_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 2 } },
              all_buff_blocking: { term: { for_rounds: 2 } }
            }
          }
        }]
      }
    }],
    passive: [{
      area: 'line_with_backward',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        target: { kind: 'ally', conditions: ['flying'] },
        details: { target: { ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 100000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['flying'] },
        details: {
          target: {
            acc_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: [{ type: 'flying', role: 'attacker' }, { type: 'flying', role: 'supporter' }] },
        details: { target: { target_protect: { tag: 'squadron_escort', term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { in_squad: { affected_by: { unit: 83, effect: 'target_protect' } } } } }],
        details: {
          self: {
            acc_up: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'line_with_backward',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            eva_up: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } },
            row_protect: { term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally_except_self', conditions: ['mongoose_team'] },
        details: {
          target: {
            acc_up: { tag: 'squadron_escort', base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            eva_up: { tag: 'squadron_escort', base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally_except_self', conditions: [{ alias: 'mongoose_team', role: 'attacker' }, { alias: 'mongoose_team', role: 'supporter' }] },
        details: { target: { target_protect: { tag: 'squadron_escort', term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ tagged_affected: { tag: 'squadron_escort', effect: 'target_protect' } }] } }],
        target: { kind: 'ally' },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: { self: { form_change: { form: 'true_power', term: 'infinite' } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            status_resist_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
            ignore_protect: { term: { for_rounds: 1 } },
            damage_reduction_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            counterattack: { base: { milliPercentage: 80000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { in_squad: 80 } } }],
        details: { self: { prevents_effect: { effect: 'eva_down', term: { for_rounds: 1 } } } }
      }]
    }]
  },
  84: {
    no: 84,
    active: [{
      normal: {
        damage_deal: {
          base: { milliPercentage: 136500 },
          per_lv_up: { milliPercentage: 12000 }
        },
        range: 3,
        cost: 5,
        area: 'single',
        effects: [{
          conditions: [{ trigger: 'hit' }],
          target: { kind: 'enemy' },
          details: {
            target: {
              ap_down: { base: { microValue: 500000 }, per_lv_up: { microValue: 25000 }, term: 'immediate' },
              def_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
            }
          }
        }, {
          conditions: [{ trigger: 'critical' }],
          target: { kind: 'enemy' },
          details: { target: { def_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } } } }
        }]
      },
      blitz_pile_bunker: {
        damage_deal: {
          base: { milliPercentage: 162500 },
          per_lv_up: { milliPercentage: 16000 },
          attribute: 'electric'
        },
        range: 5,
        cost: 5,
        area: 'single',
        effects: [{
          target: { kind: 'enemy' },
          details: { target: { eva_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 3 } } } }
        }, {
          conditions: [{ trigger: 'hit' }],
          target: { kind: 'enemy' },
          details: {
            target: {
              ap_down: { base: { microValue: 500000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' },
              buff_removal: { effect: 'spd_up', term: 'immediate' }
            }
          }
        }]
      }
    }, {
      normal: {
        damage_deal: {
          base: { milliPercentage: 240000 },
          per_lv_up: { milliPercentage: 21500 }
        },
        range: 3,
        cost: 9,
        area: 'single',
        effects: [{
          details: {
            self: {
              ignore_protect: {},
              defense_penetration: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 5000 } }
            }
          }
        }, {
          conditions: [{ trigger: 'hit' }],
          target: { kind: 'enemy' },
          details: {
            target: {
              buff_removal: { effects: ['column_protect', 'row_protect', 'target_protect', 'damage_reduction_up'], term: 'immediate' },
              push: { value: 1, term: 'immediate' }
            }
          }
        }, {
          conditions: [{ trigger: 'hit', state: { target: [{ affected: 'def_down' }] } }],
          target: { kind: 'enemy' },
          details: { self: { additional_damage: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 2000 }, term: 'immediate' } } }
        }]
      },
      blitz_pile_bunker: {
        damage_deal: {
          base: { milliPercentage: 288750 },
          per_lv_up: { milliPercentage: 25500 },
          attribute: 'electric'
        },
        range: 5,
        cost: 9,
        area: 'single_and_front_strong_explosion',
        effects: [{
          details: { self: { ignore_protect: {} } }
        }, {
          conditions: [{ trigger: 'hit' }],
          target: { kind: 'enemy' },
          details: { target: { buff_removal: { effects: ['column_protect', 'row_protect', 'target_protect', 'damage_reduction_up'] } } }
        }, {
          conditions: [{ trigger: 'hit', state: { target: [{ affected: 'eva_down' }, { affected: 'spd_down' }] } }],
          target: { kind: 'enemy' },
          details: { self: { additional_damage: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 2000 }, term: 'immediate' } } }
        }]
      }
    }],
    passive: [{
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            light_type_damage_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            heavy_type_damage_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ tagged: 'suppression_formation' }, { tagged: 'focused_sniping_instruction' }] } }],
        target: { kind: 'ally_except_self' },
        details: {
          target: {
            light_type_damage_up: { base: { milliPercentage: 12500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            heavy_type_damage_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_wave', state: { self: [{ equipped: 'blitz_pile_bunker' }] } }],
        details: { self: { form_change: { form: 'blitz_pile_bunker' } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally_except_self', conditions: ['mongoose_team'] },
        details: {
          target: {
            atk_up: { tag: 'mongoose_breaching', base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            cri_up: { tag: 'mongoose_breaching', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            spd_up: { tag: 'mongoose_breaching', base: { milliPercentage: 4000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'fixed_front_and_back_line',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: [{ not_alias: 'mongoose_team', role: 'attacker' }, { not_alias: 'mongoose_team', role: 'defender' }] },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 2000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { not_in_squad: 82 } } }],
        target: { kind: 'ally_except_self', conditions: ['attacker', 'defender'] },
        details: { target: { follow_up_attack: { term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        scale_factor: { per_units: { type: 'squad' } },
        details: {
          self: {
            atk_up: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 400 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 2000 }, per_lv_up: { milliPercentage: 400 }, term: { for_rounds: 1 } },
            status_resist_up: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 400 }, term: { for_rounds: 1 } },
            damage_reduction_up: { base: { milliPercentage: 2000 }, per_lv_up: { milliPercentage: 400 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: [{ in_squad: 80 }, { in_squad: 82 }] } }],
        scale_factor: { per_units: { type: 'squad' } },
        target: { kind: 'ally' },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 3000 }, per_lv_up: { milliPercentage: 200 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 1000 }, per_lv_up: { milliPercentage: 200 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: [{ in_squad: 81 }, { in_squad: 83 }] } }],
        scale_factor: { per_units: { type: 'squad' } },
        target: { kind: 'ally' },
        details: {
          target: {
            status_resist_up: { base: { milliPercentage: 3000 }, per_lv_up: { milliPercentage: 200 }, term: { for_rounds: 1 } },
            damage_reduction_up: { base: { milliPercentage: 1000 }, per_lv_up: { milliPercentage: 200 }, term: { for_rounds: 1 } }
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
          target: { kind: 'enemy' },
          details: {
            target: {
              marked: { term: { for_rounds: 2 } },
              damage_taken_increased: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
            }
          }
        }, {
          conditions: [{ trigger: 'critical' }],
          target: { kind: 'enemy' },
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
          target: { kind: 'enemy' },
          details: { target: { buff_removal: { effect: 'barrier' } } }
        }, {
          conditions: [{ state: { self: [{ affected: 'reconnaissance' }] } }],
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
          target: { kind: 'ally' },
          details: {
            target: {
              ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 100000 }, term: 'immediate' },
              atk_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
            }
          }
        }, {
          target: { kind: 'ally', conditions: ['horizon', 'squad_21'] },
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
        1: 'all',
        10: 'fixed_all'
      },
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
        details: {
          target: {
            eva_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            damage_reduction_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            status_resist_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'be_killed' }],
        target: { kind: 'ally' },
        details: {
          target: {
            eva_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            damage_reduction_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
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
        target: { kind: 'ally' },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 800 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 8000 }, per_lv_up: { milliPercentage: 400 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 4000 }, per_lv_up: { milliPercentage: 200 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ affected: 'follow_up_attack' }] } }],
        target: { kind: 'ally' },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 8000 }, per_lv_up: { milliPercentage: 400 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 4000 }, per_lv_up: { milliPercentage: 200 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 2000 }, per_lv_up: { milliPercentage: 100 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ affected: 'reconnaissance' }] } }],
        target: { kind: 'ally' },
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
        conditions: [{ trigger: 'start_wave' }],
        target: { kind: 'ally', conditions: ['artillery_type_active'] },
        details: { target: { ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 100000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['artillery_type_active'] },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'reconnaissance' }] } }],
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
        base: { milliPercentage: 142500 },
        per_lv_up: { milliPercentage: 17500 }
      },
      range: 4,
      cost: 5,
      area: 'single',
      effects: [{
        details: { self: { flying_type_damage_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: 'immediate' } } }
      }, {
        conditions: [{ state: { target: [{ affected: 'marked' }, { affected: 'provoked' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: 'immediate' } } }
      }, {
        conditions: [{ state: { self: [{ tagged: 'artillery_command' }] } }],
        details: { self: { damage_multiplier_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 2000 }, term: 'immediate' } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 137500 },
        per_lv_up: { milliPercentage: 12500 }
      },
      range: 5,
      cost: 8,
      area: 'fan_shape_forward_targeting',
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_damage: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1500 }, term: 'immediate' } } }
      }, {
        conditions: [{ state: { self: [{ tagged: 'artillery_command' }] } }],
        target: { kind: 'enemy' },
        details: { target: { buff_removal: { effects: ['target_protect', 'row_protect', 'column_protect'], term: 'immediate' } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { damage_reduction_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ hp_less_or_equal: 50 }] } }],
        details: { self: { damage_reduction_up: { base: { milliPercentage: 7500 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'kill' }],
        details: {
          self: {
            atk_up: { tag: 'neri_wins', base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 400 }, term: 'infinite' },
            ap_up: { base: { microValue: 500000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' }
          }
        }
      }, {
        conditions: [{ trigger: 'be_hit' }],
        details: {
          self: {
            atk_up: { tag: 'ho_ho', base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 400 }, term: 'infinite', max_stack: 5 },
            ap_up: { base: { microValue: 500000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' }
          }
        }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ tagged: 'neri_wins' }, { tagged: 'ho_ho' }, { tagged: 'anti_air_formation' }] } }],
        details: { self: { ignore_barrier_dr: { term: 'immediate' } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: {
          self: {
            cri_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: 'infinite' },
            status_resist_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 3000 }, term: 'infinite' },
            battle_continuation: { base: { milliPercentage: 8000 }, per_lv_up: { milliPercentage: 2500 }, term: 'infinite', times: 1, cannot_be_dispelled: true }
          }
        }
      }, {
        conditions: [{ trigger: 'revive' }],
        details: { self: { enmity: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: 'infinite', cannot_be_dispelled: true } } }
      }]
    }, {
      area: 'left_spread_backward',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 8000 }, per_lv_up: { milliPercentage: 800 }, term: { for_rounds: 999 } },
            acc_up: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 1600 }, term: { for_rounds: 999 } },
            ap_up: { base: { microValue: 60000 }, per_lv_up: { microValue: 60000 }, term: 'immediate' }
          }
        }
      }, {
        conditions: [{ trigger: 'start_wave' }],
        scale_factor: { per_units: { type: 'enemy', variation: 'proportional', unit: 'flying' } },
        details: {
          self: {
            atk_up: { tag: 'anti_air_formation', base: { milliPercentage: 4000 }, per_lv_up: { milliPercentage: 400 }, term: { for_rounds: 999 } },
            acc_up: { tag: 'anti_air_formation', base: { milliPercentage: 8000 }, per_lv_up: { milliPercentage: 800 }, term: { for_rounds: 999 } },
            ap_up: { tag: 'anti_air_formation', base: { microValue: 30000 }, per_lv_up: { microValue: 30000 }, term: 'immediate' }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ tagged: 'arrogance_and_anger' }] } }],
        target: { kind: 'ally' },
        details: {
          target: {
            atk_up: { tag: 'anti_air_formation', base: { milliPercentage: 4000 }, per_lv_up: { milliPercentage: 400 }, term: { for_rounds: 1 } },
            acc_up: { tag: 'anti_air_formation', base: { milliPercentage: 8000 }, per_lv_up: { milliPercentage: 800 }, term: { for_rounds: 1 } },
            ap_up: { tag: 'anti_air_formation', base: { microValue: 30000 }, per_lv_up: { microValue: 30000 }, term: 'immediate' }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ tagged: 'artillery_command' }] } }],
        target: { kind: 'ally' },
        details: {
          target: {
            atk_up: { tag: 'anti_air_formation', base: { milliPercentage: 4000 }, per_lv_up: { milliPercentage: 400 }, term: { for_rounds: 1 } },
            acc_up: { tag: 'anti_air_formation', base: { milliPercentage: 8000 }, per_lv_up: { milliPercentage: 800 }, term: { for_rounds: 1 } },
            ap_up: { tag: 'anti_air_formation', base: { microValue: 30000 }, per_lv_up: { microValue: 30000 }, term: 'immediate' }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ tagged: 'tactical_air_relay' }] } }],
        target: { kind: 'ally' },
        details: {
          target: {
            atk_up: { tag: 'anti_air_formation', base: { milliPercentage: 4000 }, per_lv_up: { milliPercentage: 400 }, term: { for_rounds: 1 } },
            acc_up: { tag: 'anti_air_formation', base: { milliPercentage: 8000 }, per_lv_up: { milliPercentage: 800 }, term: { for_rounds: 1 } },
            ap_up: { tag: 'anti_air_formation', base: { microValue: 30000 }, per_lv_up: { microValue: 30000 }, term: 'immediate' }
          }
        }
      }]
    }]
  },
  88: {
    no: 88,
    active: [{
      damage_deal: {
        base: { milliPercentage: 127500 },
        per_lv_up: { milliPercentage: 12500 }
      },
      range: 3,
      cost: 5,
      area: 'single',
      effects: [{
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: {
          self: { damage_multiplier_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: 'infinite', max_stack: 2 } },
          target: {
            provoked: { term: { for_rounds: 2 } },
            acc_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            eva_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 248500 },
        per_lv_up: { milliPercentage: 23500 }
      },
      range: 4,
      cost: 8,
      area: 'single',
      effects: [{
        conditions: [{ state: { target: [{ affected: 'marked' }, { affected: 'provoked' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 2000 } } } }
      }, {
        conditions: [{ state: { self: [{ tagged: 'artillery_command' }, { tagged: 'tactical_air_relay' }] } }],
        target: { kind: 'enemy' },
        details: { target: { buff_removal: { effect: 'damage_reduction_up' } } }
      }]
    }],
    passive: [{
      area: 'right_spread_forward_adjacent',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
        details: {
          self: {
            acc_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } }
          },
          target: {
            acc_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            target_protect: { term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'attack' }],
        details: { self: { eva_up: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 2 }, max_stack: 1 } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: [{ in_squad: 87 }, { in_squad: 89 }, { in_squad: 90 }] } }],
        target: { kind: 'ally', conditions: ['flying', 'heavy'] },
        details: { target: { follow_up_attack: { term: { for_rounds: 1 } } } }
      }]
    }, {
      area: {
        1: 'cross',
        10: 'fixed_all'
      },
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 8000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 4000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'kill' }],
        target: { kind: 'ally' },
        details: {
          self: { eva_up: { base: { milliPercentage: 17500 }, per_lv_up: { milliPercentage: 2500 }, term: 'infinite', max_stack: 2 } },
          target: {
            atk_up: { tag: 'arrogance_and_anger', base: { milliPercentage: 8000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            cri_up: { tag: 'arrogance_and_anger', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            spd_up: { tag: 'arrogance_and_anger', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 8000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            damage_reduction_up: { base: { milliPercentage: 7000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            status_resist_up: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            range_up: { value: 1, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { in_squad: 85 } } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 4000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            damage_reduction_up: { base: { milliPercentage: 3500 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } },
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { in_squad: 87 } } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 4000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            damage_reduction_up: { base: { milliPercentage: 3500 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } },
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { in_squad: 89 } } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 4000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            damage_reduction_up: { base: { milliPercentage: 3500 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } },
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { in_squad: 90 } } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 4000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            damage_reduction_up: { base: { milliPercentage: 3500 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } },
          }
        }
      }, {
        conditions: [{ trigger: 'kill' }],
        target: { kind: 'enemy' },
        details: { target: { provoked: { term: { for_rounds: 2 } } } }
      }]
    }]
  },
  89: {
    no: 89,
    active: [{
      interception: {
        damage_deal: {
          base: { milliPercentage: 143500 },
          per_lv_up: { milliPercentage: 13500 }
        },
        range: 4,
        cost: 5,
        area: 'single',
        effects: [{
          target: { kind: 'enemy' },
          details: {
            self: { flying_type_damage_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 } } },
            target: {
              marked: { term: { for_rounds: 2 } },
              damage_taken_increased: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 }, max_stack: 1 }
            }
          }
        }]
      },
      bombarding: {
        damage_deal: {
          base: { milliPercentage: 200000 },
          per_lv_up: { milliPercentage: 20000 }
        },
        range: 5,
        cost: 10,
        area: 'line',
        effects: [{
          conditions: [{ state: { target: [{ affected: 'marked' }, { affected: 'provoked' }] } }],
          target: { kind: 'enemy' },
          details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 } } } }
        }, {
          conditions: [{ state: { self: [{ tagged: 'tactical_air_relay' }] } }],
          details: { self: { additional_damage_focusing: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2500 } } } }
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
          target: { kind: 'ally', conditions: ['light', 'flying'] },
          details: {
            target: {
              ap_up: { tag: 'artillery_command', base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' },
              atk_up: { tag: 'artillery_command', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
            }
          }
        }, {
          target: { kind: 'ally', conditions: [{ type: 'light', alias: 'horizon' }, { type: 'flying', alias: 'horizon' }] },
          details: {
            target: {
              ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' },
              atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
              follow_up_attack: { term: { for_rounds: 2 } }
            }
          }
        }, {
          target: { kind: 'ally', conditions: ['heavy'] },
          details: {
            target: {
              ap_up: { tag: 'artillery_command', base: { microValue: 2000000 }, per_lv_up: { microValue: 100000 }, term: 'immediate' },
              atk_up: { tag: 'artillery_command', base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
              follow_up_attack: { term: { for_rounds: 2 } }
            }
          }
        }]
      },
      bombarding: {
        damage_deal: {
          base: { milliPercentage: 197000 },
          per_lv_up: { milliPercentage: 17000 }
        },
        range: 6,
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
              spd_down: { tag: 'reloading', milliPercentage: 50000, term: { for_rounds: 2 }, cannot_be_dispelled: true }
            }
          }
        }, {
          conditions: [{ state: { target: [{ affected: 'marked' }, { affected: 'provoked' }] } }],
          target: { kind: 'enemy' },
          details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 } } } }
        }, {
          conditions: [{ trigger: 'start_round', state: { self: [{ stack: { tag: 'reloading', greater_or_equal: 2 } }] } }],
          details: {
            self: {
              ap_down: { base: { microValue: 8000000 }, per_lv_up: { microValue: -200000 }, term: 'immediate' },
              tag_release: { tag: 'reloading', term: 'immediate' }
            }
          }
        }]
      }
    }],
    passive: [{
      area: {
        1: 'cross',
        10: 'all'
      },
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
        details: {
          target: {
            acc_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 8000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ tagged: 'artillery_command' }] } }],
        target: { kind: 'ally' },
        details: {
          target: {
            acc_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 2500 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 4000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
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
              atk_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
              acc_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
              spd_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
              defense_penetration: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
              damage_reduction_up: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
            }
          }
        }, {
          conditions: [{ trigger: 'idle' }],
          details: { self: { form_change: { form: 'bombarding' } } }
        }]
      },
      bombarding: {
        area: 'self',
        effects: [{
          conditions: [{ trigger: 'start_round' }],
          details: {
            self: {
              atk_up: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
              defense_penetration: { base: { milliPercentage: 32000 }, per_lv_up: { milliPercentage: 4000 }, term: { for_rounds: 1 } },
              damage_reduction_up: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
            }
          }
        }, {
          conditions: [{ trigger: 'idle' }],
          details: { self: { form_change: { form: 'interception' } } }
        }]
      }
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { squad: { in_squad: 85 } } }],
        details: { self: { damage_multiplier_up: { base: { milliPercentage: 4000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { in_squad: 87 } } }],
        details: { self: { damage_multiplier_up: { base: { milliPercentage: 4000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { in_squad: 88 } } }],
        details: { self: { damage_multiplier_up: { base: { milliPercentage: 4000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        scale_factor: { per_units: { type: 'squad', unit: 'supporter' } },
        details: { self: { damage_multiplier_up: { base: { milliPercentage: 4000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'follow_up_attack', state: { self: [{ affected: 'follow_up_attack', form: 'interception' }] } }],
        details: { self: { ap_up: { base: { microValue: 140000 }, per_lv_up: { microValue: 30000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ affected: 'follow_up_attack', form: 'bombarding' }] } }],
        details: { self: { ignore_barrier_dr: { term: 'immediate' } } }
      }]
    }]
  },
  90: {
    no: 90,
    active: [{
      damage_deal: {
        base: { milliPercentage: 107500 },
        per_lv_up: { milliPercentage: 12500 }
      },
      range: 3,
      cost: 6,
      area: 'twin',
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: {
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
        conditions: [{ trigger: 'hit', state: { self: [{ tagged: 'hardpoint_equipment_support' }] } }],
        target: { kind: 'enemy' },
        details: {
          target: {
            ap_down: { base: { microValue: 50000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' },
            eva_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            acc_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'critical', state: { self: [{ tagged: 'hardpoint_equipment_armament' }] } }],
        target: { kind: 'enemy' },
        details: {
          self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: 'immediate' } },
          target: { buff_removal: { effect: 'minimize_damage', term: 'immediate' } }
        }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 220000 },
        per_lv_up: { milliPercentage: 20000 }
      },
      range: 4,
      cost: 7,
      area: 'single',
      effects: [{
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: {
          target: {
            marked: { term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            acc_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ tagged: 'hardpoint_equipment_support' }] } }],
        target: { kind: 'enemy' },
        details: {
          target: {
            damage_taken_increased: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            acc_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            buff_removal: { effect: 'acc_up', term: 'immediate' }
          }
        }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ tagged: 'hardpoint_equipment_armament' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 3000 } } } }
      }]
    }],
    passive: [{
      area: 'row_adjacent_with_self_and_left_direction',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 4000 }, per_lv_up: { milliPercentage: 400 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 4000 }, per_lv_up: { milliPercentage: 400 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ tagged: 'hardpoint_equipment_support' }] } }],
        target: { kind: 'ally' },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 4000 }, per_lv_up: { milliPercentage: 400 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 4000 }, per_lv_up: { milliPercentage: 400 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: [89] },
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
            atk_up: { tag: 'hardpoint_equipment_armament', base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            defense_penetration: { tag: 'hardpoint_equipment_armament', base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ equipped: 'recon_drone' }, { equipped: 'crystal_ball_of_fate' }, { equipped: 'enhanced_observation_gear' }] } }],
        details: {
          self: {
            acc_up: { tag: 'hardpoint_equipment_support', base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            eva_up: { tag: 'hardpoint_equipment_support', base: { milliPercentage: 24000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_wave', state: { self: [{ affected: 'reconnaissance' }] } }],
        target: { kind: 'ally' },
        details: { target: { ap_up: { base: { microValue: 300000 }, per_lv_up: { microValue: 100000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ tagged: 'hardpoint_equipment_armament' }] } }],
        target: { kind: 'ally' },
        details: { target: { atk_value_up_by_unit_value: { tag: 'tactical_air_relay', unit: 90, base: { milliPercentage: 2200 }, per_lv_up: { milliPercentage: 400 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ tagged: 'hardpoint_equipment_support' }] } }],
        target: { kind: 'ally' },
        details: {
          target: {
            status_resist_up: { tag: 'tactical_air_relay', base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            damage_reduction_up: { tag: 'tactical_air_relay', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ tagged: 'anti_air_formation' }] } }],
        target: { kind: 'ally' },
        details: { target: { damage_multiplier_up: { tag: 'tactical_air_relay', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ tagged: 'arrogance_and_anger' }] } }],
        target: { kind: 'ally' },
        details: { target: { damage_multiplier_up: { tag: 'tactical_air_relay', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ tagged: 'artillery_command' }] } }],
        target: { kind: 'ally' },
        details: { target: { damage_multiplier_up: { tag: 'tactical_air_relay', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
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
        target: { kind: 'enemy' },
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
        conditions: [{ state: { self: [{ grid: 'back_line' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } } }
      }, {
        conditions: [{ state: { self: [{ grid: 'mid_line' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 } } } }
      }, {
        conditions: [{ state: { self: [{ stack: { tag: 'where_are_you_looking_at', greater_or_equal: 3 } }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 2000 } } } }
      }, {
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: {
          target: {
            acc_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } },
            marked: { term: { for_rounds: 2 } },
            immovable: { term: { for_rounds: 2 } },
            buff_removal: { effect: 'counterattack' }
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
        target: { kind: 'ally' },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: [{ type: 'flying', role: 'attacker' }, { type: 'flying', role: 'supporter' }] },
        details: { target: { target_protect: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ stack: { tag: 'where_are_you_looking_at', greater_or_equal: 3 } }] } }],
        target: { kind: 'ally' },
        details: { target: { debuff_removal: { effects: ['eva_down', 'spd_down'] } } }
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
            debuff_removal: { effects: ['eva_down', 'spd_down'] },
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
        conditions: [{ state: { target: [{ affected: 'marked' }, { affected: 'immovable' }] } }],
        target: { kind: 'enemy' },
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
        conditions: [{ trigger: 'hit' }],
        details: { self: { additional_fire_damage: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 } } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            acc_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 4000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'end_wave' }],
        details: { self: { reconnaissance:{} } }
      }, {
        conditions: [{ trigger: 'start_wave', state: { self: [{ affected: 'reconnaissance' }] } }],
        details: { self: { ap_up: { base: { microValue: 100000 }, per_lv_up: { microValue: 100000 }, term: 'immediate' } } }
      }]
    }, {
      area: 'line_with_front',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 18250 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally_except_self', conditions: ['flying', 'squad_21'] },
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
        target: { kind: 'enemy' },
        details: {
          self: { flying_type_damage_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 } } },
          target: { eva_down: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 2 } } }
        }
      }, {
        conditions: [{ state: { target: [{ affected: 'marked' }, { affected: 'immovable' }] } }],
        target: { kind: 'enemy' },
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
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: {
          target: {
            marked: { term: { for_rounds: 2 } },
            immovable: { term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_damage: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 } } } }
      }, {
        conditions: [{ state: { self: [{ equipped: 'anti_light_os' }] } }],
        details: { self: { light_type_damage_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 } } } }
      }, {
        conditions: [{ state: { self: [{ equipped: 'anti_heavy_os' }] } }],
        details: { self: { heavy_type_damage_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 } } } }
      }, {
        conditions: [{ state: { self: [{ equipped: 'anti_air_os' }] } }],
        details: { self: { flying_type_damage_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 } } } }
      }, {
        conditions: [{ state: { self: [{ equipped: 'anti_light_flying_os' }] } }],
        details: {
          self: {
            light_type_damage_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 } },
            flying_type_damage_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 } }
          }
        }
      }, {
        conditions: [{ state: { self: [{ equipped: 'anti_heavy_light_os' }] } }],
        details: {
          self: {
            light_type_damage_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 } },
            heavy_type_damage_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 } }
          }
        }
      }, {
        conditions: [{ state: { self: [{ equipped: 'anti_flying_heavy_os' }] } }],
        details: {
          self: {
            heavy_type_damage_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 } },
            flying_type_damage_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 } }
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
        conditions: [{ trigger: 'start_wave' }],
        target: { kind: 'ally', conditions: ['flying'] },
        details: { target: { ap_up: { base: { microValue: 100000 }, per_lv_up: { microValue: 100000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['flying'] },
        details: {
          target: {
            acc_up: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['light', 'heavy'] },
        details: {
          target: {
            acc_up: { base: { milliPercentage: 8000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 8000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 5500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
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
            debuff_removal: { effect: 'range_down', term: 'immediate' }
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
        target: { kind: 'enemy' },
        details: { target: { acc_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ state: { target: [{ affected: 'provoked' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } } }
      }, {
        conditions: [{ state: { squad: { in_squad: 93 } } }],
        details: { self: { cooperative_attack: { unit: 93, active: 2 } } }
      }, {
        conditions: [{ trigger: 'use_this_active' }],
        details: { self: { acc_up: { base: { milliPercentage: 9000 }, per_lv_up: { milliPercentage: 9000 } } } }
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
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: {
          target: {
            provoked: { term: { for_rounds: 2 } },
            marked: { term: { for_rounds: 2 } },
            immovable: { term: { for_rounds: 2 } },
            acc_down: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 2 } },
            buff_removal: { effect: 'acc_up', term: 'immediate' }
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
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['attacker', 'supporter'] },
        details: { target: { target_protect: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ hp_less_or_equal: 50 }] } }],
        target: { kind: 'ally', conditions: ['attacker', 'supporter'] },
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
        details: { self: { flying_type_damage_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }, {
        conditions: [{ state: { target: [{ affected: 'marked' }, { affected: 'eva_down' }] } }],
        target: { kind: 'enemy' },
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
            heavy_type_damage_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } },
            defense_penetration: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 4000 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ affected: 'marked' }, { affected: 'immovable' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 27000 }, per_lv_up: { milliPercentage: 2000 } } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { self: [{ grid: 'front_line' }] } }],
        details: {
          self: {
            acc_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ grid: 'mid_line' }] } }],
        details: {
          self: {
            acc_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 4000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ grid: 'back_line' }] } }],
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
        details: { self: { buff_removal: { tag: 'overwhelming_cuteness', effect: 'atk_up' } } }
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
        details: { self: { cri_up: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'kill' }],
        details: { self: { ap_up: { base: { microValue: 100000 }, per_lv_up: { microValue: 100000 } } } }
      }]
    }]
  },
  99: {
    no: 99,
    active: [{
      damage_deal: {
        base: { milliPercentage: 303000 },
        per_lv_up: { milliPercentage: 29000 },
        attribute: 'fire'
      },
      range: 1,
      cost: 10,
      area: 'single',
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: {
          target: {
            effect_removal: { effects: ['fire_resist_up', 'fire_resist_down'], term: 'immediate' },
            fire_resist_down: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 3 } }
          }
        }
      }, {
        conditions: [{ trigger: 'attacked' }],
        details: { self: { effect_removal: { effects: ['range_up', 'range_down'], term: 'immediate' } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 303000 },
        per_lv_up: { milliPercentage: 29000 },
        attribute: 'electric'
      },
      range: 1,
      cost: 10,
      area: 'single',
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: {
          target: {
            effect_removal: { effects: ['electric_resist_up', 'electric_resist_down'], term: 'immediate' },
            electric_resist_down: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 3 } }
          }
        }
      }, {
        conditions: [{ trigger: 'attacked' }],
        details: { self: { effect_removal: { effects: ['range_up', 'range_down'], term: 'immediate' } } }
      }]
    }],
    passive: [{
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { squad: { in_squad: 'kunoichi' } } }],
        details: { self: { ignore_barrier_dr: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { not_in_squad: 'kunoichi' } } }],
        target: { kind: 'ally', conditions: ['attacker'] },
        details: { target: { follow_up_attack: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'hit', state: { target: [{ affected: 'fixed_fire_damage_over_time' }, { affected: 'eva_down' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: 'immediate' } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: { self: { ap_up: { microValue: 3000000, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'start_round', round: { from: 2 } }],
        details: { self: { set_ap: { microValue: 7000000, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'follow_up_attack' }, { trigger: 'cooperative_attack' }],
        details: { self: { damage_multiplier_up: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 5000 }, term: 'infinite', times: 1, max_stack: 1 } } }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { cri_up: { tag: 'full_proficiency', base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ tagged: 'full_proficiency' }] } }],
        target: { kind: 'ally', conditions: ['kunoichi'] },
        details: { target: { range_up: { value: 2, term: { for_rounds: 1 } } } }
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
        target: { kind: 'enemy' },
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
            spd_down: { base: { milliPercentage: 75000 }, per_lv_up: { milliPercentage: -2000 }, term: { for_rounds: 2 }, max_stack: 1, cannot_be_dispelled: true }
          }
        }
      }, {
        conditions: [{ state: { self: [{ affected: 'reconnaissance' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 } } } }
      }]
    }],
    passive: [{
      area: 'cross_adjacent',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['bioroid'] },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 600 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 8000 }, per_lv_up: { milliPercentage: 400 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 600 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['ags'] },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 18000 }, per_lv_up: { milliPercentage: 900 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 600 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 18000 }, per_lv_up: { milliPercentage: 900 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'all_adjacent',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['bioroid'] },
        details: {
          target: {
            spd_up: { base: { milliPercentage: 3000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } },
            ap_up: { base: { microValue: 500000 }, per_lv_up: { microValue: 25000 }, term: 'immediate' }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['ags'] },
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
        target: { kind: 'enemy' },
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
        target: { kind: 'ally' },
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
        target: { kind: 'ally' },
        details: {
          self: { column_protect: { term: { for_rounds: 1 } } },
          target: {
            eva_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            damage_reduction_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 }  }
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
        base: { milliPercentage: 127000 },
        per_lv_up: { milliPercentage: 11000 },
        attribute: 'fire'
      },
      range: 2,
      cost: 6,
      area: 'single_and_front_middle_explosion',
      effects: [{
        target: { kind: 'enemy' },
        details: { target: { fixed_fire_damage_over_time: { tag: 'ignite', base: { value: 40 }, per_lv_up: { value: 30 }, term: { for_rounds: 3 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 240000 },
        per_lv_up: { milliPercentage: 21500 }
      },
      range: 3,
      cost: 9,
      area: 'single',
      effects: [{
        details: { self: { defense_penetration: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 4000 } } } }
      }, {
        conditions: [{ state: { target: [{ affected: 'marked' }, { affected: 'immovable' }] } }],
        target: { kind: 'enemy' },
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
      cost: {
        1: 8,
        2: 7,
        7: 6
      },
      area: 'row_toward_front',
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: { target: { buff_removal: { effect: 'def_up' } } }
      }, {
        conditions: [{ trigger: 'critical' }],
        target: { kind: 'enemy' },
        details: {
          self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } },
          target: { buff_removal: { effect: 'damage_reduction_up' } }
        }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 249500 },
        per_lv_up: { milliPercentage: 22500 }
      },
      range: 2,
      cost: {
        1: 8,
        2: 7,
        7: 6
      },
      area: 'single',
      effects: [{
        details: { self: { merciless: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 2500 } } } }
      }, {
        conditions: [{ trigger: 'hit', state: { target: [{ affected: 'def_up' }, { affected: 'damage_reduction_up' }] } }],
        target: { kind: 'enemy' },
        details: {
          target: {
            atk_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'hit', state: { target: [{ not_affected: ['def_up', 'damage_reduction_up'] }] } }],
        target: { kind: 'enemy' },
        details: {
          target: {
            atk_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 }, cannot_be_dispelled: true },
            damage_taken_increased: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 }, cannot_be_dispelled: true }
          }
        }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { atk_up: { tag: 'receiving_observation_data', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: 'infinite', max_stack: 3 } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ stack: { tag: 'receiving_observation_data', greater_or_equal: 2 } }] } }],
        details: { self: { range_up: { value: 2, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ stack: { tag: 'receiving_observation_data', greater_or_equal: 3 } }] } }],
        details: { self: { acc_up: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            def_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
            damage_reduction_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            fire_resist_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            ice_resist_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            electric_resist_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            status_resist_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        details: { self: { defense_penetration: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 }, times: 1 } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_wave' }],
        details: {
          self: {
            ap_up: { base: { microValue: 2000000 }, per_lv_up: { microValue: 200000 }, term: 'immediate' },
            spd_down: { milliPercentage: 10000, term: 'infinite', cannot_be_dispelled: true },
            prevents_effect: { effects: ['spd_down', 'ap_down'], term: 'infinite', cannot_be_dispelled: true }
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
        target: { kind: 'enemy' },
        details: {
          target: {
            eva_down: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 2 } },
            immovable: { term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { self: [{ tagged: 'guiding_technique' }] } }],
        target: { kind: 'enemy' },
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
        target: { kind: 'enemy' },
        details: {
          target: {
            atk_down: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 2 } },
            cri_down: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { self: [{ tagged: 'secretive_research' }] } }],
        target: { kind: 'enemy' },
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
        target: { kind: 'ally' },
        details: { target: { ap_up: { base: { microValue: 2000000 }, per_lv_up: { microValue: 100000 } } } }
      }, {
        conditions: [{ state: { self: [{ tagged: 'guiding_technique' }] } }],
        target: { kind: 'ally' },
        details: {
          target: {
            eva_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } },
            spd_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { self: [{ tagged: 'balance_seeker' }] } }],
        target: { kind: 'ally' },
        details: {
          target: {
            def_up: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 2 } },
            damage_reduction_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { self: [{ tagged: 'secretive_research' }] } }],
        target: { kind: 'ally' },
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
        conditions: [{ trigger: 'start_round', state: { self: [{ grid: 'front_line' }] } }],
        details: { self: { spd_up: { tag: 'guiding_technique', base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ grid: 'mid_line' }] } }],
        details: { self: { damage_reduction_up: { tag: 'balance_seeker', base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ grid: 'back_line' }] } }],
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
        target: { kind: 'ally' },
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
      area: 'all',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ hp_less_or_equal: 90 }] } }],
        target: { kind: 'ally' },
        details: {
          target: {
            debuff_removal: { effect: 'def_down', term: 'immediate' },
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
        details: { self: { defense_penetration: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 5000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: { target: { buff_removal: { effect: 'damage_reduction_up', term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'hit', state: { target: [{ affected: 'immovable' }, { affected: 'marked' }] } }],
        target: { kind: 'enemy' },
        details: { target: { stunned: { term: { for_rounds: 1 } } } }
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
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: {
          target: {
            pull: { value: 2 },
            spd_down: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            immovable: { term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'use_this_active' }],
        details: { self: { acc_up: { base: { milliPercentage: 8000 }, per_lv_up: { milliPercentage: 8000 }, term: 'immediate' } } }
      }]
    }],
    passive: [{
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'enemy_killed' }],
        target: { kind: 'ally' },
        details: {
          target: {
            atk_value_up: { base: { milliValue: 5000 }, per_lv_up: { milliValue: 5000 }, term: 'infinite' },
            def_value_up: { base: { milliValue: 5000 }, per_lv_up: { milliValue: 5000 }, term: 'infinite' }
          }
        }
      }, {
        conditions: [{ trigger: 'start_wave' }],
        target: { kind: 'ally', conditions: ['bioroid'] },
        details: { target: { exp_up: { base: { milliPercentage: 21000 }, per_lv_up: { milliPercentage: 1000 }, term: 'infinite', cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_wave' }],
        target: { kind: 'ally', conditions: ['ags'] },
        details: { target: { exp_up: { base: { milliPercentage: 42000 }, per_lv_up: { milliPercentage: 2000 }, term: 'infinite', cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_wave', state: { squad: { in_squad: 110 } } }],
        details: { self: { spd_up: { base: { milliPercentage: 21000 }, per_lv_up: { milliPercentage: 1000 }, term: 'infinite' } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ rank_greater_or_equal: 's' }], squad: { in_squad: 110 } } }],
        target: { kind: 'ally' },
        details: { target: { ap_up: { tag: 'start_supply', base: { microValue: 550000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'enemy_killed', state: { self: [{ rank_greater_or_equal: 's' }], squad: { in_squad: 110 } } }],
        target: { kind: 'ally' },
        details: { target: { ap_up: { tag: 'salvage', base: { microValue: 150000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'kill', state: { self: [{ tagged: 'golden_wagon' }] } }],
        target: { kind: 'ally' },
        details: {
          target: {
            atk_value_up: { base: { milliValue: 5000 }, per_lv_up: { milliValue: 5000 }, term: 'infinite' },
            def_value_up: { base: { milliValue: 5000 }, per_lv_up: { milliValue: 5000 }, term: 'infinite' }
          }
        }
      }, {
        conditions: [{ trigger: 'kill', state: { self: [{ tagged: 'golden_wagon' }], squad: { in_squad: 110 } } }],
        target: { kind: 'ally' },
        details: { target: { ap_up: { tag: 'salvage', base: { microValue: 150000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' } } }
      }]
    }, {
      area: 'all',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { squad: { not_in_squad: 110 } } }],
        target: { kind: 'ally' },
        details: { target: { ap_up: { tag: 'start_supply', base: { microValue: 550000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'enemy_killed', state: { squad: { not_in_squad: 110 } } }],
        target: { kind: 'ally' },
        details: { target: { ap_up: { tag: 'salvage', base: { microValue: 150000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'kill', state: { self: [{ tagged: 'golden_wagon' }], squad: { not_in_squad: 110 } } }],
        target: { kind: 'ally' },
        details: { target: { ap_up: { tag: 'salvage', base: { microValue: 150000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            atk_up: { tag: 'golden_wagon', base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            def_up: { tag: 'golden_wagon', base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
            range_up: { tag: 'golden_wagon', value: 1, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'hit_active_2' }],
        details: { self: { cooperative_attack: { unit: 107, active: 1, term: 'immediate' } } }
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
        target: { kind: 'enemy' },
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
      cost: 7,
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
        conditions: [{ trigger: 'critical', state: { self: [{ tagged: 'new_blasting_tool' }] } }],
        target: { kind: 'enemy', conditions: ['light', 'heavy'] },
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
            light_type_damage_up: { tag: 'new_blasting_tool', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            heavy_type_damage_up: { tag: 'new_blasting_tool', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            damage_reduction_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            status_resist_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } }
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
        target: { kind: 'enemy' },
        details: {
          target: {
            def_down: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 2 } },
            buff_removal: { effect: 'def_up' }
          }
        }
      }, {
        conditions: [{ trigger: 'critical' }],
        target: { kind: 'enemy' },
        details: {
          self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } },
          target: { buff_removal: { effect: 'damage_reduction_up' } }
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
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: {
          target: {
            push: { value: 2 },
            damage_taken_increased: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ tagged: 'wet' }] } }],
        target: { kind: 'enemy' },
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
        conditions: [{ trigger: 'start_round', state: { self: [{ grid: 'front_line' }] } }],
        target: { kind: 'ally' },
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
        conditions: [{ trigger: 'start_round', state: { self: [{ grid: 'mid_line' }, { grid: 'back_line' }] } }],
        target: { kind: 'ally' },
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
            damage_reduction_up: { base: { milliPercentage: 23000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            ice_resist_up: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ tagged: 'wet' }] } }],
        target: { kind: 'ally' },
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
        target: { kind: 'enemy' },
        details: {
          target: {
            push: { value: 1 },
            ap_down: { base: { microValue: 550000 }, per_lv_up: { microValue: 50000 } }
          }
        }
      }, {
        conditions: [{ trigger: 'attack', state: { self: [{ tagged: 'constancy_protocol' }] } }],
        target: { kind: 'enemy' },
        details: { target: { buff_removal: { effect: 'eva_up', term: 'immediate' } } }
      }]
    }, {
      range: 3,
      cost: 7,
      area: {
        1: 'line',
        5: 'cross'
      },
      effects: [{
        target: { kind: 'enemy' },
        details: {
          self: { acc_up: { milliPercentage: 999000, term: 'immediate' } },
          target: {
            damage_taken_increased: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            status_resist_down: { base: { milliPercentage: 31000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            eva_down: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'attack', state: { self: [{ tagged: 'constancy_protocol' }] } }],
        target: { kind: 'enemy' },
        details: { target: { buff_removal: { effect: 'nullify_damage', term: 'immediate' } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        scale_factor: { per_units: { type: 'squad', unit: 'ags' } },
        details: { self: { ap_up: { base: { microValue: 550000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            status_resist_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
            prevents_effect: { effect: 'spd_down', term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['supporter'] },
        details: {
          target: {
            acc_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } },
            ignore_protect: { term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'enemy', conditions: ['supporter'] },
        details: {
          target: {
            acc_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } },
            ignore_protect_deactivate: { term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { spd_up: { tag: 'constancy_protocol', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [
          { trigger: 'start_wave', state: { squad: { in_squad: 107 } } },
          { trigger: 'revive', state: { squad: { in_squad: 107 } } }
        ],
        details: { self: { battle_continuation: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 5000 }, term: 'infinite', max_stack: 1, times: 1, cannot_be_dispelled: true } } }
      }]
    }]
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
        target: { kind: 'enemy' },
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
        target: { kind: 'enemy' },
        details: { target: { immovable: { term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ state: { target: [{ tagged: 'wet' }] } }],
        target: { kind: 'enemy' },
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
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['light', 'heavy'] },
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
            damage_reduction_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
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
        target: { kind: 'enemy' },
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
        base: { milliPercentage: 77500 },
        per_lv_up: { milliPercentage: 7000 }
      },
      range: 2,
      cost: 6,
      area: 'single_and_front',
      effects: [{
        target: { kind: 'enemy' },
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
            marked: { term: { for_rounds: 1 } },
            def_up: { base: { milliPercentage: 17000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            damage_reduction_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            fire_resist_up: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            ice_resist_up: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            electric_resist_up: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
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
        target: { kind: 'enemy' },
        details: {
          target: {
            provoked: { term: { for_rounds: 2 }, max_stack: 1 },
            electric_resist_down: { base: { milliPercentage: 2500 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 3 }, max_stack: 1 }
          }
        }
      }, {
        conditions: [{ state: { target: [{ affected: 'immovable' }] } }],
        target: { kind: 'enemy' },
        details: { target: { stunned: { term: { for_rounds: 2 }, max_stack: 1 } } }
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
        target: { kind: 'ally' },
        details: {
          self: {
            damage_reduction_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 3 } },
            counterattack: { base: { milliPercentage: 80000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 3 } },
            range_up: { value: 1, term: { for_rounds: 2 } }
          },
          target: { target_protect: { term: { for_rounds: 3 } } }
        }
      }]
    }],
    passive: [{
      area: {
        1: 'single_and_back',
        5: 'line_with_back',
        10: 'all'
      },
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
        details: {
          self: { def_up: { base: { milliPercentage: 9000 }, per_lv_up: { milliPercentage: 4000 }, term: { for_rounds: 1 } } },
          target: {
            cri_up: { base: { milliPercentage: 11500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            target_protect: { term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['attacker'] },
        details: { target: { follow_up_attack: { term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
        details: {
          self: { damage_reduction_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } } },
          target: {
            atk_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 600 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 3000 }, per_lv_up: { milliPercentage: 300 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['city_guard'] },
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
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['city_guard'] },
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
          target: { kind: 'enemy' },
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
        range: 4,
        cost: 6,
        area: 'row_toward_front',
        effects: [{
          target: { kind: 'enemy' },
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
        target: { kind: 'ally' },
        details: {
          self: { damage_reduction_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 3 } } },
          target: {
            target_protect: { term: { for_rounds: 3 } },
            ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' }
          }
        }
      }]
    }],
    passive: [{
      area: 'left',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
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
        conditions: [{ trigger: 'attack', state: { self: [{ equipped: 'output_limit_release_device' }, { equipped: 'enhanced_output_limit_release_device' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }, {
        conditions: [{ trigger: 'be_attacked', state: { self: [{ equipped: 'output_limit_release_device' }, { equipped: 'enhanced_output_limit_release_device' }] } }],
        details: { self: { counterattack: { base: { milliPercentage: 67000 }, per_lv_up: { milliPercentage: 4000 } } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        scale_factor: { per_units: { type: 'squad', unit: 'city_guard' } },
        details: {
          self: {
            def_up: { base: { milliPercentage: 3200 }, per_lv_up: { milliPercentage: 200 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 3200 }, per_lv_up: { milliPercentage: 200 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_wave', state: { self: [{ equipped: 'output_limit_release_device' }, { equipped: 'enhanced_output_limit_release_device' }] } }],
        details: { self: { form_change: { form: 'offensive_tactics' } } }
      }, {
        conditions: [{ trigger: 'start_wave', state: { self: [{ equipped: 'energy_shield' }, { equipped: 'enhanced_energy_shield' }] } }],
        details: {
          self: {
            barrier: { base: { value: 530 }, per_lv_up: { value: 30 }, term: 'infinite' },
            battle_continuation: { base: { milliPercentage: 53000 }, per_lv_up: { milliPercentage: 3000 }, term: 'infinite', times: 1 }
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
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: {
          target: {
            eva_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 3 } },
            ap_down: { base: { microValue: 500000 }, per_lv_up: { microValue: 25000 }, term: 'immediate' }
          }
        }
      }]
    }, {
      range: 4,
      cost: 4,
      area: 'single',
      effects: [{
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
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
        target: { kind: 'ally' },
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
        target: { kind: 'enemy' },
        details: {
          target: {
            push: { value: 1 },
            ap_down: { base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 } },
            stunned: { rate: 'constant' }
          }
        }
      }, {
        scale_factor: { per_stack: { tag: 'workaholic' } },
        target: { kind: 'enemy' },
        details: { target: { damage_taken_increased: { base: { milliPercentage: 8000 }, per_lv_up: { milliPercentage: 400 }, term: { for_rounds: 2 } } } }
      }]
    }, {
      range: 6,
      cost: 6,
      area: 'single',
      effects: [{
        target: { kind: 'ally' },
        details: { target: { ap_up: { base: { microValue: 2000000 }, per_lv_up: { microValue: 100000 } } } }
      }, {
        scale_factor: { per_stack: { tag: 'workaholic' } },
        target: { kind: 'ally' },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            cri_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 2 } },
            acc_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        target: { kind: 'ally' },
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
            damage_reduction_up: { tag: 'workaholic', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: 'infinite', max_stack: 3 }
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
        target: { kind: 'ally' },
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
        target: { kind: 'ally_grid' },
        details: { target: { deploy_rabbit_d_field: { term: { for_rounds: 10 }, times: 1 } } }
      }]
    }],
    passive: [{
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        target: { kind: 'ally', conditions: ['ags'] },
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
        conditions: [{ trigger: 'hit_vital_spot', state: { self: [{ tagged: 'power_of_true_blood_?' }] } }],
        details: {
          self: {
            ignore_barrier_dr: {},
            defense_penetration: { milliPercentage: 150000 }
          }
        }
      }, {
        conditions: [{ trigger: 'critical', state: { self: [{ tagged: 'one_who_inherits_true_blood' }] } }],
        target: { kind: 'enemy' },
        details: {
          target: {
            damage_taken_increased: { milliPercentage: 25000, term: { for_rounds: 2 } },
            all_buff_blocking: { term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ equipped: 'mark_of_the_dragonslayer' }], squad: { in_squad: 240 } } }],
        details: { self: { cooperative_attack: { unit: 240, active: 1 } } }
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
        target: { kind: 'enemy' },
        details: {
          target: {
            acc_down: { tag: 'cyclops_eternal_beam', base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } },
            ap_down: { tag: 'cyclops_eternal_beam', base: { microValue: 1500000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' },
            buff_removal: { effect: 'acc_up', term: 'immediate' }
          }
        }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ tagged: 'power_of_true_blood_?' }] } }],
        target: { kind: 'enemy' },
        details: { target: { buff_removal: { effects: ['atk_up', 'cri_up'], term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'critical', state: { self: [{ tagged: 'one_who_inherits_true_blood' }] } }],
        target: { kind: 'enemy' },
        details: { target: { buff_removal: { effect: 'ignore_barrier_dr', term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ equipped: 'mark_of_the_dragonslayer' }], squad: { in_squad: 240 } } }],
        details: { self: { cooperative_attack: { unit: 240, active: 2 } } }
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
        target: { kind: 'ally' },
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
        target: { kind: 'ally' },
        details: {
          target: {
            cri_up: { tag: 'power_of_true_blood_?', base: { milliPercentage: 1500 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            acc_up: { tag: 'power_of_true_blood_?', base: { milliPercentage: 2500 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 1 } },
            // FIXME: rate up for any effect activation
            activation_rate_percentage_up: { tag: 'lucky_hit', effect: 'additional_damage', base: { milliPercentage: 2000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'all',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        target: { kind: 'ally' },
        details: { target: { damage_multiplier_up: { tag: 'one_who_inherits_true_blood', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 1000 }, term: 'infinite', cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ tagged: 'power_overflows' }] } }],
        target: { kind: 'ally' },
        details: { target: { damage_multiplier_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }]
    }]
  },
  119: {
    no: 119,
    active: [{
      normal: {
        damage_deal: {
          base: { milliPercentage: 117000 },
          per_lv_up: { milliPercentage: 10000 }
        },
        range: 2,
        cost: 5,
        area: 'twin',
        effects: [{
          conditions: [{ trigger: 'hit', state: { self: [{ tagged: 'bulk_up' }] } }],
          details: { self: { additional_damage: { base: { milliPercentage: 21000 }, per_lv_up: { milliPercentage: 1000 }, term: 'immediate' } } }
        }]
      },
      maximum_pump_up: {
        damage_deal: {
          base: { milliPercentage: 117000 },
          per_lv_up: { milliPercentage: 15000 }
        },
        range: 2,
        cost: 5,
        area: 'twin',
        effects: [{
          conditions: [{ trigger: 'hit' }],
          target: { kind: 'enemy' },
          details: { self: { damage_taken_increased: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } } } }
        }]
      }
    }, {
      normal: {
        damage_deal: {
          base: { milliPercentage: 143000 },
          per_lv_up: { milliPercentage: 13000 }
        },
        range: 2,
        cost: 7,
        area: 'row_slightly_attenuate',
        effects: [{
          details: { self: { ignore_protect: {} } }
        }, {
          conditions: [{ trigger: 'hit', state: { self: [{ tagged: 'bulk_up' }] } }],
          target: { kind: 'enemy' },
          details: {
            self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: 'immediate' } },
            target: { ap_down: { base: { microValue: 1500000 }, per_lv_up: { microValue: 100000 }, term: 'immediate' } }
          }
        }]
      },
      maximum_pump_up: {
        damage_deal: {
          base: { milliPercentage: 143000 },
          per_lv_up: { milliPercentage: 13000 }
        },
        range: 2,
        cost: 10,
        area: 'row_toward_front_with_shock_wave',
        effects: [{
          details: { self: { ignore_protect: {} } }
        }, {
          conditions: [{ trigger: 'hit' }],
          target: { kind: 'enemy' },
          details: { target: { ap_down: { base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' } } }
        }, {
          conditions: [{ trigger: 'hit', state: { target: [{ grid: 'front_line' }] } }],
          target: { kind: 'enemy' },
          details: { target: { stunned: { term: { for_rounds: 2 } } } }
        }]
      }
    }],
    passive: [{
      normal: {
        area: 'fixed_all',
        effects: [{
          conditions: [{ trigger: 'attack' }],
          details: {
            self: {
              atk_up: { tag: 'bulk_up', base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: 'infinite', max_stack: 3 },
              spd_up: { tag: 'bulk_up', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: 'infinite', max_stack: 3 }
            }
          }
        }, {
          conditions: [{ trigger: 'start_round', state: { self: [{ stack: { tag: 'bulk_up', greater_or_equal: 3 } }] } }],
          details: {
            self: {
              form_change: { form: 'maximum_pump_up' },
              tag_release: { tag: 'bulk_up' }
            }
          }
        }, {
          conditions: [{ trigger: 'start_wave', state: { squad: { num_of_units: { unit: 'ally', equal: 4 } } } }],
          details: { self: { form_change: { form: 'maximum_pump_up' } } }
        }]
      },
      maximum_pump_up: {
        area: 'fixed_all',
        effects: [{
          conditions: [{ trigger: 'start_round' }],
          details: {
            self: {
              atk_up: { tag: 'maximum_pump_up', base: { milliPercentage: 45000 }, per_lv_up: { milliPercentage: 4500 }, term: { for_rounds: 1 } },
              spd_up: { tag: 'maximum_pump_up', base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } }
            }
          }
        }, {
          conditions: [{ trigger: 'start_round' }],
          target: { kind: 'ally_except_self', conditions: ['bioroid'] },
          details: {
            target: {
              atk_up: { tag: 'now_copy_me', base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
              spd_up: { tag: 'now_copy_me', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
            }
          }
        }, {
          conditions: [{ trigger: 'hit' }],
          target: { kind: 'ally_except_self', conditions: ['bioroid'] },
          details: {
            target: {
              atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 }, max_stack: 1 },
              spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 }, max_stack: 1 }
            }
          }
        }, {
          conditions: [{ trigger: 'start_round', state: { self: [{ tagged: 'miss_olympia' }] } }],
          target: { kind: 'ally', conditions: ['ags'] },
          details: {
            target: {
              atk_up: { tag: 'now_copy_me', base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
              spd_up: { tag: 'now_copy_me', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
            }
          }
        }, {
          conditions: [{ trigger: 'hit', state: { self: [{ tagged: 'miss_olympia' }] } }],
          target: { kind: 'ally', conditions: ['ags'] },
          details: {
            target: {
              atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 }, max_stack: 1 },
              spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 }, max_stack: 1 }
            }
          }
        }]
      }
    }, {
      normal: {
        area: 'fixed_all',
        effects: [{
          conditions: [{ trigger: 'start_round' }],
          target: { kind: 'ally', conditions: ['bioroid'] },
          details: { target: { exp_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
        }, {
          conditions: [{ trigger: 'start_round' }],
          target: { kind: 'ally', conditions: ['bioroid'] },
          scale_factor: { per_stack: { tag: 'bulk_up' } },
          details: { target: { exp_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
        }, {
          conditions: [{ trigger: 'start_round', state: { target: [{ tagged: 'bulk_up' }] } }],
          target: { kind: 'ally' },
          details: {
            target: {
              defense_penetration: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
              def_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
            }
          }
        }]
      },
      maximum_pump_up: {
        area: 'fixed_all',
        effects: [{
          conditions: [{ trigger: 'start_round' }],
          target: { kind: 'ally', conditions: ['bioroid'] },
          details: { target: { exp_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } } }
        }, {
          conditions: [{ trigger: 'start_round', state: { target: [{ tagged: 'maximum_pump_up' }, { tagged: 'now_copy_me' }] } }],
          target: { kind: 'ally' },
          details: {
            target: {
              defense_penetration: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
              def_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
            }
          }
        }, {
          conditions: [{ trigger: 'start_round', state: { self: [{ tagged: 'miss_olympia' }] } }],
          target: { kind: 'ally', conditions: ['ags'] },
          details: { target: { exp_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } } }
        }]
      }
    }, {
      normal: {
        area: 'fixed_all',
        effects: [{
          conditions: [{ trigger: 'start_round' }],
          details: { self: { status_resist_up: { tag: 'miss_olympia',base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 1 } } } }
        }, {
          conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'follow_up_attack', not_tagged: 'bulk_up' }] } }],
          details: { self: { buff_removal: { effect: 'follow_up_attack', term: 'immediate' } } }
        }, {
          conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'follow_up_attack', tagged: 'bulk_up' }] } }],
          details: {
            self: {
              buff_removal: { effect: 'follow_up_attack', term: 'immediate' },
              defense_penetration: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
              def_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
            }
          }
        }, {
          conditions: [{ trigger: 'start_round' }],
          target: { kind: 'ally', conditions: ['ags'] },
          details: { target: { exp_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
        }, {
          conditions: [{ trigger: 'start_round' }],
          target: { kind: 'ally', conditions: ['ags'] },
          scale_factor: { per_stack: { tag: 'bulk_up' } },
          details: { target: { exp_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
        }]
      },
      maximum_pump_up: {
        area: 'fixed_all',
        effects: [{
          conditions: [{ trigger: 'start_round' }],
          details: { self: { status_resist_up: { tag: 'miss_olympia',base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 1 } } } }
        }, {
          conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'follow_up_attack' }], target: [{ tagged: 'maximum_pump_up' }, { tagged: 'now_copy_me' }] } }],
          target: { kind: 'ally' },
          details: {
            target: {
              defense_penetration: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
              def_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
            }
          }
        }, {
          conditions: [{ trigger: 'attack', state: { self: [{ affected: 'follow_up_attack' }] } }],
          details: { self: { buff_removal: { effect: 'follow_up_attack', term: 'immediate' } } }
        }]
      }
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
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: { target: { buff_removal: { effect: 'counterattack', term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'attack', state: { self: [{ tagged: 'gold_forged_through_hundred_refinement' }] } }],
        details: { self: { ap_up: { base: { microValue: 50000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'critical', state: { self: [{ tagged: 'gold_forged_through_hundred_refinement' }] } }],
        details: { self: { ap_up: { base: { microValue: 25000 }, per_lv_up: { microValue: 25000 }, term: 'immediate' } } }
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
        details: { self: { defense_penetration: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 4000 }, term: 'immediate' } } }
      }, {
        conditions: [{ state: { target: [{ grid: 'front_line' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1000 }, term: 'immediate' } } }
      }, {
        conditions: [{ state: { target: [{ grid: 'mid_line' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1000 }, term: 'immediate' } } }
      }, {
        conditions: [{ state: { target: [{ grid: 'back_line' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'attack', state: { self: [{ tagged: 'gold_forged_through_hundred_refinement' }] } }],
        details: { self: { ap_up: { base: { microValue: 50000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'critical', state: { self: [{ tagged: 'gold_forged_through_hundred_refinement' }] } }],
        details: { self: { ap_up: { base: { microValue: 25000 }, per_lv_up: { microValue: 25000 }, term: 'immediate' } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            atk_up: { tag: 'gold_forged_through_hundred_refinement', base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            acc_up: { tag: 'gold_forged_through_hundred_refinement', base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'attack' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: 'infinite', max_stack: 3 },
            acc_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1500 }, term: 'infinite', max_stack: 3 }
          }
        }
      }, {
        conditions: [{ trigger: 'kill' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: 'infinite', max_stack: 3 },
            acc_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1500 }, term: 'infinite', max_stack: 3 }
          }
        }
      }, {
        conditions: [{ trigger: 'be_attacked' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: 'infinite', max_stack: 3 },
            acc_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1500 }, term: 'infinite', max_stack: 3 }
          }
        }
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
        target: { kind: 'enemy' },
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
            damage_reduction_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 3 } }
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
        target: { kind: 'enemy' },
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
        target: { kind: 'enemy' },
        details: { target: { stunned: { rate: 'constant' } } }
      }, {
        conditions: [{ state: { target: [{ tagged: 'overloaded' }] } }],
        target: { kind: 'enemy' },
        details: { target: { stunned: { rate: { milliPercentage: 100000 } } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'end_wave' }],
        details: { self: { reconnaissance: {} } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'reconnaissance' }] } }],
        details: {
          self: {
            acc_up: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } },
            ap_up: { base: { microValue: 500000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' }
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
        target: { kind: 'enemy' },
        details: {
          self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: 'immediate' } },
          target: { all_buff_removal: { term: 'immediate' } }
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
        details: { self: { additional_damage: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 2000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'critical', state: { self: [{ not_tagged: 'growing_magical_girl' }], target: [{ hp_greater_than: 25 }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { tag: 'hit_vital_spot', base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: 'immediate', rate: 'rarely' } } }
      }, {
        conditions: [{ trigger: 'critical', state: { self: [{ not_tagged: 'growing_magical_girl' }], target: [{ hp_less_or_equal: 25 }] } }],
        target: { kind: 'enemy' },
        details: {
          self: {
            additional_damage: { tag: 'hit_vital_spot', base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: 'immediate' },
            all_buff_removal: { term: 'immediate' }
          }
        }
      }, {
        conditions: [{ trigger: 'critical', state: { self: [{ tagged: 'growing_magical_girl' }], target: [{ hp_greater_than: 50 }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { tag: 'hit_vital_spot', base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: 'immediate', rate: 'rarely' } } }
      }, {
        conditions: [{ trigger: 'critical', state: { self: [{ tagged: 'growing_magical_girl' }], target: [{ hp_less_or_equal: 50 }] } }],
        target: { kind: 'enemy' },
        details: {
          self: {
            additional_damage: { tag: 'hit_vital_spot', base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: 'immediate' },
            all_buff_removal: { term: 'immediate' }
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
            atk_up: { tag: 'magical_girl_at_centurys_end', base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 }, rate: 'constant' },
            cri_up: { tag: 'magical_girl_at_centurys_end', base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 }, rate: 'constant' },
            acc_up: { tag: 'magical_girl_at_centurys_end', base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 }, rate: 'constant' },
            eva_up: { tag: 'magical_girl_at_centurys_end', base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 }, rate: 'constant' },
            damage_reduction_up: { tag: 'magical_girl_at_centurys_end', base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 }, rate: 'constant' }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { in_squad: 127 } } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'all',
      effects: [{
        conditions: [{ trigger: 'be_killed' }],
        target: { kind: 'ally' },
        details: {
          target: {
            all_debuff_removal: { term: 'immediate' },
            atk_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: { 1: 2, 10: 3 } } },
            cri_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: { 1: 2, 10: 3 } } },
            spd_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: { 1: 2, 10: 3 } } },
            damage_reduction_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: { 1: 2, 10: 3 } } }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            atk_up: { tag: 'growing_magical_girl', base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            cri_up: { tag: 'growing_magical_girl', base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            acc_up: { tag: 'growing_magical_girl', base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            eva_up: { tag: 'growing_magical_girl', base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } },
            damage_reduction_up: { tag: 'growing_magical_girl', base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            buff_removal: { tag: 'magical_girl_at_centurys_end', effects: ['atk_up', 'cri_up', 'acc_up', 'eva_up', 'damage_reduction_up'], term: 'immediate' }
          }
        }
      }, {
        conditions: [{ trigger: 'start_wave' }],
        details: { self: { battle_continuation: { value: 300, term: 'infinite', times: 1, cannot_be_dispelled: true } } }
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
        target: { kind: 'enemy' },
        details: {
          target: {
            provoked: { term: { for_rounds: 2 } },
            atk_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            spd_down: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'critical' }],
        target: { kind: 'enemy' },
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
        conditions: [{ state: { target: [{ affected: 'provoked' }] } }],
        target: { kind: 'enemy' },
        details: { target: { buff_removal: { effect: 'damage_reduction_up' } } }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_damage: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 } } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { damage_reduction_up: { base: { milliPercentage: 24000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ hp_less_than: 50 }] } }],
        details: {
          self: {
            damage_reduction_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'hit' }],
        details: { self: { atk_up: { tag: 'bravery', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: 'infinite', max_stack: 3 } } }
      }, {
        conditions: [{ trigger: 'be_attacked', state: { self: [{ tagged: 'bravery' }] } }],
        details: { self: { counterattack: { base: { milliPercentage: 80000 }, per_lv_up: { milliPercentage: 5000 } } } }
      }]
    }, {
      area: 'line',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['attacker', 'supporter'] },
        details: { target: { target_protect: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ stack: { tag: 'bravery', greater_or_equal: 1 } }] } }],
        target: { kind: 'ally', conditions: ['light', 'flying'] },
        details: { target: { cri_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 600 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ stack: { tag: 'bravery', greater_or_equal: 2 } }] } }],
        target: { kind: 'ally', conditions: ['light', 'flying'] },
        details: { target: { ap_up: { base: { microValue: 500000 }, per_lv_up: { microValue: 25000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ stack: { tag: 'bravery', greater_or_equal: 3 } }] } }],
        target: { kind: 'ally', conditions: ['light', 'flying'] },
        details: { target: { heavy_type_damage_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }]
    }]
  },
  125: {
    no: 125,
    active: [{
      damage_deal: {
        base: { milliPercentage: 127500 },
        per_lv_up: { milliPercentage: 12500 }
      },
      range: 3,
      cost: 4,
      area: 'single',
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        target: { kind: 'enemy' },
        details: {
          target: {
            marked: { term: { for_rounds: 2 } },
            provoked: { term: { for_rounds: 2 } },
            acc_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            spd_down: { base: { milliPercentage: 2500 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ status_less_than_self: { status: 'eva' } }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: 'immediate' } } }
      }, {
        conditions: [{ state: { target: [{ status_less_than_self: { status: 'spd' } }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: 'immediate' } } }
      }, {
        conditions: [{ state: { self: [{ tagged: 'counterattack_preparation' }] } }],
        details: { self: { defense_penetration: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: 'immediate' } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 262500 },
        per_lv_up: { milliPercentage: 37500 }
      },
      range: 3,
      cost: 7,
      area: 'single',
      effects: [{
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 } } } }
      }, {
        conditions: [{ state: { target: [{ affected: 'marked' }, { affected: 'provoked' }] } }],
        target: { kind: 'enemy' },
        details: {
          self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 } } },
          target: { all_buff_removal: {} }
        }
      }, {
        conditions: [{ trigger: 'kill' }],
        details: { self: { ap_up: { base: { microValue: 2000000 }, per_lv_up: { microValue: 100000 } } } }
      }, {
        conditions: [{ state: { self: [{ tagged: 'counterattack_preparation' }] } }],
        details: { self: { defense_penetration: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: 'immediate' } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: { self: { cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: 'infinite', cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_wave' }],
        scale_factor: { per_units: { type: 'all' } },
        // FIXME: Add cannot_be_dispelled attribute
        details: { self: { atk_up: { tag: 'duel_preparation', base: { milliPercentage: 2500 }, per_lv_up: { milliPercentage: 250 }, term: 'infinite'/*, cannot_be_dispelled: true*/ } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ stack: { tag: 'duel_preparation', greater_or_equal: 3 } }] } }],
        details: { self: { spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ stack: { tag: 'duel_preparation', greater_or_equal: 6 } }] } }],
        details: { self: { ignore_barrier_dr: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ stack: { tag: 'duel_preparation', greater_or_equal: 9 } }] } }],
        details: { self: { re_attack: { term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'ally' },
        details: { target: { ap_up: { base: { microValue: 200000 }, per_lv_up: { microValue: 20000 } } } }
      }, {
        conditions: [{ trigger: 'kill' }],
        target: { kind: 'ally' },
        details: { target: { ap_up: { base: { microValue: 500000 }, per_lv_up: { microValue: 30000 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: [{ alias: 'd_entertainment', role: 'defender' }, { alias: 'd_entertainment', role: 'supporter' }] },
        details: { target: { follow_up_attack: { term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            eva_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } },
            damage_reduction_up: { base: { milliPercentage: 14000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            counterattack: { base: { milliPercentage: 80000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'hit_active_1' }],
        details: { self: { damage_reduction_up: { tag: 'counterattack_preparation', base: { milliPercentage: 7000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 }, max_stack: 1 } } }
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
        target: { kind: 'enemy' },
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
        target: { kind: 'enemy' },
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
        target: { kind: 'ally' },
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
            damage_reduction_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            column_protect: { term: { for_rounds: 1 } },
            enmity: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ tagged: 'second_coming' }] } }],
        details: {
          self: {
            barrier: { base: { value: 90 }, per_lv_up: { value: 90 }, term: { for_rounds: 1 }, max_stack: 1 },
            damage_reduction_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
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
        target: { kind: 'ally' },
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
        target: { kind: 'ally' },
        details: {
          target: {
            battle_continuation: { base: { value: 60 }, per_lv_up: { value: 40 }, term: 'infinite', times: 1 },
            nullify_damage: { term: 'infinite', times: 1 }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ hp_less_or_equal: 50 }] } }],
        target: { kind: 'ally' },
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
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: {
          target: {
            provoked: { term: { for_rounds: 2 } },
            atk_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            acc_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'hit', state: { target: [{ affected: 'def_down' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: 'immediate' } } }
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
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: { target: { def_down: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 3500 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ trigger: 'critical' }],
        target: { kind: 'enemy' },
        details: {
          self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: 'immediate' } },
          target: { buff_removal: { effect: 'def_up', term: 'immediate' } }
        }
      }, {
        conditions: [{ trigger: 'hit', state: { squad: { in_squad: 123 } } }],
        details: { self: { cooperative_attack: { unit: 123, active: 2, term: 'immediate' } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            eva_up: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } },
            damage_reduction_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 5000 }, term: 'infinite', max_stack: 1, times: 1 }
          }
        }
      }, {
        conditions: [{ trigger: 'evade' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 }, max_stack: 1 },
            cri_up: { milliPercentage: 200000, term: { for_rounds: 1 }, max_stack: 1 }
          }
        }
      }, {
        conditions: [{ trigger: 'be_hit' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 }, max_stack: 1 },
            ignore_barrier_dr: { term: { for_rounds: 1 }, max_stack: 1 }
          }
        }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ status_less_than_self: { status: 'eva' } }] } }],
        target: { kind: 'ally', conditions: ['attacker', 'supporter'] },
        details: { target: { target_protect: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ status_less_than_self: { status: 'eva' }, affected: 'atk_up' }] } }],
        target: { kind: 'ally' },
        details: { target: { atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ status_less_than_self: { status: 'eva' }, affected: 'acc_up' }] } }],
        target: { kind: 'ally' },
        details: { target: { acc_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ status_less_than_self: { status: 'eva' }, affected: 'spd_up' }] } }],
        target: { kind: 'ally' },
        details: { target: { spd_up: { base: { milliPercentage: 3000 }, per_lv_up: { milliPercentage: 300 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'atk_up' }] } }],
        details: { self: { atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'acc_up' }] } }],
        details: { self: { acc_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'spd_up' }] } }],
        details: { self: { spd_up: { base: { milliPercentage: 3000 }, per_lv_up: { milliPercentage: 300 }, term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { damage_multiplier_up_by_status: { tag: 'moon_light_power', status: 'eva', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'be_attacked' }],
        details: { self: { counterattack: { base: { milliPercentage: 70000 }, per_lv_up: { milliPercentage: 5000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ affected: 'atk_up' }] } }],
        target: { kind: 'ally', conditions: [128] },
        details: { target: { atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ affected: 'acc_up' }] } }],
        target: { kind: 'ally', conditions: [128] },
        details: { target: { acc_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ affected: 'spd_up' }] } }],
        target: { kind: 'ally', conditions: [128] },
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
        target: { kind: 'enemy' },
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
        conditions: [{ state: { target: [{ affected: 'def_down' }, { affected: 'eva_down' }] } }],
        target: { kind: 'enemy' },
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
        details: { self: { battle_continuation: { base: { milliPercentage: 91000 }, per_lv_up: { milliPercentage: 1000 }, term: 'infinite', times: 1, cannot_be_dispelled: true } } }
      }, {
        conditions: [{ state: { self: [{ hp_less_or_equal: 90 }] } }],
        details: { self: { buff_removal: { effect: 'battle_continuation' } } }
      }]
    }, {
      area: {
        1: 'back',
        5: 'cross_adjacent_without_front',
        10: 'under_watcher'
      },
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: [{ type: 'light', role: 'attacker' }, { type: 'light', role: 'supporter' }] },
        details: { target: { target_protect: { tag: 'great_overlord_please_be_careful', term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'attack' }],
        target: { kind: 'ally', conditions: [{ type: 'light', role: 'attacker' }, { type: 'light', role: 'supporter' }] },
        details: {
          target: {
            status_resist_up: { tag: 'great_overlord_please_be_careful', base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } },
            fire_resist_up: { tag: 'great_overlord_please_be_careful', base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } },
            ice_resist_up: { tag: 'great_overlord_please_be_careful', base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } },
            electric_resist_up: { tag: 'great_overlord_please_be_careful', base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'hit', state: { target: [{ affected_by: { unit: 171, effect: 'marked' } }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: 'immediate' } } }
      }]
    }, {
      area: 'under_watcher_with_self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: [{ alias: 'magical_girl', except: 127 }] },
        details: { target: { target_protect: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { in_squad: 171 } } }],
        details: {
          self: {
            atk_up: { tag: 'great_overlords_order', base: { milliPercentage: 37500 }, per_lv_up: { milliPercentage: 4000 }, term: { for_rounds: 1 }, cannot_be_dispelled: true },
            defense_penetration: { tag: 'great_overlords_order', base: { milliPercentage: 37500 }, per_lv_up: { milliPercentage: 4000 }, term: { for_rounds: 1 }, cannot_be_dispelled: true }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { in_squad: 123 } } }],
        details: { self: { damage_multiplier_up: { tag: 'great_overlords_order', base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 }, cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { in_squad: 127 } } }],
        details: { self: { ignore_barrier_dr: { tag: 'great_overlords_order', term: { for_rounds: 1 }, cannot_be_dispelled: true } } }
      }, {
        conditions: [
          { trigger: 'start_wave', state: { self: [{ hp_greater_than: 90 }], squad: { in_squad: 171, num_of_units: { unit: 'ags', less_or_equal: 2 } } } },
          // TODO: investigation required for self hp state
          { trigger: 'revive', state: { squad: { in_squad: 171, num_of_units: { unit: 'ags', less_or_equal: 2 } } } }
        ],
        details: { self: { battle_continuation: { base: { milliPercentage: 91000 }, per_lv_up: { milliPercentage: 1000 }, term: 'infinite', times: 1, max_stack: 1, cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'attack' }],
        target: { kind: 'ally', conditions: ['magical_girl'] },
        details: {
          self: { status_resist_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } } },
          target: {
            status_resist_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } },
            fire_resist_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } },
            ice_resist_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } },
            electric_resist_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } }
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
        target: { kind: 'enemy' },
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
        target: { kind: 'enemy' },
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
        target: { kind: 'ally' },
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
        target: { kind: 'ally' },
        details: { target: { ap_up: { base: { microValue: 1500000 }, per_lv_up: { microValue: 50000 } } } }
      }, {
        conditions: [{ state: { target: [{ tagged: 'command_defense_troop' }] } }],
        target: { kind: 'ally' },
        details: { target: { ap_up: { base: { microValue: 1500000 }, per_lv_up: { microValue: 50000 } } } }
      }]
    }],
    passive: [{
      area: {
        1: 'cross',
        10: 'all'
      },
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['attacker'] },
        details: { target: { atk_up: { tag: 'command_offense_troop', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ equipped: 'anti_light_os' }] } }],
        target: { kind: 'ally', conditions: ['attacker'] },
        details: { target: { light_type_damage_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ equipped: 'anti_heavy_os' }] } }],
        target: { kind: 'ally', conditions: ['attacker'] },
        details: { target: { heavy_type_damage_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ equipped: 'anti_air_os' }] } }],
        target: { kind: 'ally', conditions: ['attacker'] },
        details: { target: { flying_type_damage_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ equipped: 'anti_light_flying_os' }] } }],
        target: { kind: 'ally', conditions: ['attacker'] },
        details: {
          target: {
            light_type_damage_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            flying_type_damage_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ equipped: 'anti_heavy_light_os' }] } }],
        target: { kind: 'ally', conditions: ['attacker'] },
        details: {
          target: {
            light_type_damage_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            heavy_type_damage_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ equipped: 'anti_flying_heavy_os' }] } }],
        target: { kind: 'ally', conditions: ['attacker'] },
        details: {
          target: {
            heavy_type_damage_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            flying_type_damage_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
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
        target: { kind: 'ally', conditions: ['defender'] },
        details: {
          target: {
            eva_up: { tag: 'command_defense_troop', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            damage_reduction_up: { tag: 'command_defense_troop', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'fire_resist_up' }] } }],
        target: { kind: 'ally', conditions: ['defender'] },
        details: { target: { fire_resist_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'ice_resist_up' }] } }],
        target: { kind: 'ally', conditions: ['defender'] },
        details: { target: { ice_resist_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'electric_resist_up' }] } }],
        target: { kind: 'ally', conditions: ['defender'] },
        details: { target: { electric_resist_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        target: { kind: 'enemy' },
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
        conditions: [{ trigger: 'start_wave', state: { self: [{ affected: 'reconnaissance' }] } }],
        target: { kind: 'enemy' },
        details: { target: { damage_taken_increased: { base: { milliPercentage: 4000 }, per_lv_up: { milliPercentage: 250 }, term: 'infinite' } } }
      }]
    }]
  },
  130: {
    no: 130,
    active: [{
      damage_deal: {
        base: { milliPercentage: 145000 },
        per_lv_up: { milliPercentage: 14500 }
      },
      range: 4,
      cost: 5,
      area: 'single',
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: {
          target: {
            provoked: { term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 7000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            atk_down: { base: { milliPercentage: 17000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'attack' }],
        target: { kind: 'enemy' },
        details: {
          self: {
            counterattack: { base: { milliPercentage: 77000 }, per_lv_up: { milliPercentage: 3000 }, term: 'infinite', times: 1 },
            range_up: { value: 2, term: { for_rounds: 2 }, times: 1 }
          },
          target: {
            counterattack: { base: { milliPercentage: 77000 }, per_lv_up: { milliPercentage: -7000 }, term: 'infinite', times: 1 },
            range_up: { value: 2, term: { for_rounds: 2 }, times: 1 }
          }
        }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 210000 },
        per_lv_up: { milliPercentage: 21000 }
      },
      range: 1,
      cost: 10,
      area: 'row_toward_front',
      effects: [{
        conditions: [{ trigger: 'hit' }],
        scale_factor: { per_stack: { tag: 'bunny' } },
        details: { self: { additional_damage: { base: { milliPercentage: 7000 }, per_lv_up: { milliPercentage: 1400 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ stack: { tag: 'bunny', greater_or_equal: 3 } }] } }],
        target: { kind: 'enemy' },
        details: { target: { all_buff_removal: { term: 'immediate' } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'hit' }],
        details: {
          self: {
            atk_up: { tag: 'bunny', base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 1000 }, term: 'infinite', max_stack: 3 },
            range_up_active_2: { value: 2, term: 'infinite', max_stack: 3  }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ not_tagged: 'bunny' }] } }],
        details: { self: { ap_up: { base: { microValue: 3000000 }, per_lv_up: { microValue: 200000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ stack: { tag: 'bunny', less_or_equal: 2 } }] } }],
        details: { self: { action_count_up: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ stack: { tag: 'bunny', greater_or_equal: 1 } }] } }],
        details: { self: { atk_up: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ stack: { tag: 'bunny', greater_or_equal: 2 } }] } }],
        details: { self: { ignore_barrier_dr: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ stack: { tag: 'bunny', greater_or_equal: 3 } }] } }],
        details: { self: { all_buff_removal_resist_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 7000 }, term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'be_attacked', state: { target: [{ affected: 'counterattack' }, { affected: 'follow_up_attack' }, { affected: 'provoked' }] } }],
        target: { kind: 'enemy' },
        details: { target: { buff_removal: { effects: ['row_protect', 'column_protect', 'target_protect'], term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        // TODO: per: { milliPercentage: 2500 }
        scale_factor: { per_units: { type: 'enemy', variation: 'proportional' } },
        details: { self: { damage_reduction_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 }, cannot_be_dispelled: true } } }
      }]
    }, {
      area: {
        1: 'cross',
        10: 'fixed_all'
      },
      effects: [{
        conditions: [{ trigger: 'be_attacked' }],
        details: {
          self: {
            acc_up: { tag: 'burning_bunny_spirit', base: { milliPercentage: 7000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 }, max_stack: 1 },
            spd_up: { tag: 'burning_bunny_spirit', base: { milliPercentage: 2000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 }, max_stack: 1 }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ tagged: 'burning_bunny_spirit' }] } }],
        target: { kind: 'ally' },
        details: {
          target: {
            acc_up: { base: { milliPercentage: 7000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 2000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
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
        target: { kind: 'enemy' },
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
        conditions: [{ state: { self: [{ stack: { tag: 'cheerleader', greater_or_equal: 2 } }] } }],
        target: { kind: 'enemy' },
        details: {
          target: {
            atk_down: { base: { milliPercentage: 7500 }, per_lv_up: { milliPercentage: 375 }, term: { for_rounds: 2 } },
            acc_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            cri_down: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { self: [{ stack: { tag: 'cheerleader', greater_or_equal: 3 } }] } }],
        target: { kind: 'enemy' },
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
        target: { kind: 'ally', conditions: ['bioroid'] },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            def_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 2 } },
            acc_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 2 } },
            eva_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { self: [{ stack: { tag: 'cheerleader', greater_or_equal: 2 } }] } }],
        target: { kind: 'ally', conditions: ['bioroid'] },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 2 } },
            def_up: { base: { milliPercentage: 7500 }, per_lv_up: { milliPercentage: 375 }, term: { for_rounds: 2 } },
            acc_up: { base: { milliPercentage: 7500 }, per_lv_up: { milliPercentage: 375 }, term: { for_rounds: 2 } },
            eva_up: { base: { milliPercentage: 7500 }, per_lv_up: { milliPercentage: 375 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { self: [{ stack: { tag: 'cheerleader', greater_or_equal: 3 } }] } }],
        target: { kind: 'ally', conditions: ['bioroid'] },
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
        conditions: [{ trigger: 'start_round', state: { self: [{ tagged: 'cheerleader' }] } }],
        target: { kind: 'ally', conditions: ['bioroid'] },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 8000 }, per_lv_up: { milliPercentage: 400 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'idle' }],
        target: { kind: 'ally', conditions: ['bioroid'] },
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
        target: { kind: 'enemy' },
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
        target: { kind: 'ally' },
        details: {
          target: {
            ap_up: { base: { microValue: 1500000 }, per_lv_up: { microValue: 75000 }, term: 'immediate' },
            acc_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } },
            cri_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 2 } },
            debuff_removal: { effect: 'acc_down', term: 'immediate' }
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
        target: { kind: 'ally' },
        details: {
          target: {
            acc_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            flying_type_damage_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
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
        target: { kind: 'ally' },
        details: {
          target: {
            eva_up: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 3000 }, term: 'infinite', times: 1, max_stack: 1 },
            damage_reduction_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1500 }, term: 'infinite', times: 1, max_stack: 1 }
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
        target: { kind: 'enemy' },
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
        target: { kind: 'enemy' },
        details: { target: { fire_resist_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ state: { target: [{ affected: 'def_down' }] } }],
        target: { kind: 'enemy' },
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
        target: { kind: 'ally' },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            damage_reduction_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { spd_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: [135, 176] },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            damage_reduction_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ affected_by: { unit: 135 } }] } }],
        target: { kind: 'ally' },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            damage_reduction_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { all_buff_removal_resist_up: { milliPercentage: 100000, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'attack' }],
        target: { kind: 'enemy' },
        details: { target: { damage_taken_increased: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } } } }
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
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: {
          target: {
            def_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } },
            fire_resist_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'use_this_active' }],
        details: { self: { acc_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 10000 }, term: 'immediate' } } }
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
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: {
          target: {
            cri_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } },
            fixed_fire_damage_over_time: { base: { value: 200 }, per_lv_up: { value: 20 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'hit', state: { target: [{ affected: 'fire_resist_down' }] } }],
        target: { kind: 'enemy' },
        details: { target: { fixed_fire_damage: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 5000 }, term: 'immediate' } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            def_up: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
            fire_resist_up: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
            status_resist_up: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'be_hit_fire_active' }],
        details: { self: { fire_resist_up: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 2 }, max_stack: 1 } } }
      }, {
        conditions: [{ trigger: 'be_hit_ice_active' }],
        details: { self: { ice_resist_up: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 2 }, max_stack: 1 } } }
      }, {
        conditions: [{ trigger: 'be_hit_electric_active' }],
        details: { self: { electric_resist_up: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 2 }, max_stack: 1 } } }
      }, {
        conditions: [{ trigger: 'be_hit_physical_active' }],
        details: { self: { def_up: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 2 }, max_stack: 1 } } }
      }]
    }, {
      area: 'row_toward_back',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { column_protect: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['attacker', 'supporter'] },
        details: { target: { target_protect: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ affected_by: { unit: 134, effect: 'target_protect' } }] } }],
        target: { kind: 'ally' },
        details: { self: { damage_reduction_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_wave', state: { self: [{ grid: 'front_line' }] } }],
        details: {
          self: {
            range_up: { value: 1, term: 'infinite', cannot_be_dispelled: true },
            counterattack: { base: { milliPercentage: 80000 }, per_lv_up: { milliPercentage: 2000 }, term: 'infinite' }
          }
        }
      }, {
        conditions: [{ trigger: 'idle', state: { self: [{ affected: 'counterattack' }] } }],
        details: { self: { buff_removal: { effect: 'counterattack', term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'idle', state: { self: [{ grid: 'front_line', not_affected: ['counterattack'] }] } }],
        details: { self: { counterattack: { base: { milliPercentage: 80000 }, per_lv_up: { milliPercentage: 2000 }, term: 'infinite' } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'fire_resist_up' }, { affected: 'fire_resist_down' }] } }],
        details: { self: { minimum_fire_resist_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'ice_resist_up' }, { affected: 'ice_resist_down' }] } }],
        details: { self: { minimum_ice_resist_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'electric_resist_up' }, { affected: 'electric_resist_down' }] } }],
        details: { self: { minimum_electric_resist_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 1 } } } }
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
        details: { self: { light_type_damage_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }, {
        conditions: [{ state: { target: [{ affected: 'def_down' }, { affected: 'eva_down' }] } }],
        target: { kind: 'enemy' },
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
        target: { kind: 'enemy' },
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
        target: { kind: 'enemy' },
        details: {
          self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } },
          target: { buff_removal: { effect: 'acc_up' } }
        }
      }]
    }],
    passive: [{
      area: 'backward',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        target: { kind: 'ally' },
        details: { target: { ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
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
        conditions: [{ trigger: 'start_wave' }],
        target: { kind: 'ally', conditions: [133, 176] },
        details: { target: { ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'start_wave', state: { target: [{ affected_by: { unit: 133 } }] } }],
        target: { kind: 'ally' },
        details: { target: { ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: [133, 176] },
        details: { target: { follow_up_attack: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ affected_by: { unit: 133 } }] } }],
        target: { kind: 'ally' },
        details: { target: { follow_up_attack: { term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { atk_value_up: { base: { milliValue: 200000 }, per_lv_up: { milliValue: 30000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'missed' }],
        details: { self: { acc_up: { base: { milliPercentage: 500000 }, per_lv_up: { milliPercentage: 50000 }, term: { for_rounds: 1 } } } }
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
        target: { kind: 'enemy' },
        details: {
          target: {
            marked: { term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 2 } },
            fire_resist_down: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 2 } },
            buff_removal: { effect: 'damage_reduction_up', term: 'immediate' }
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
        target: { kind: 'enemy' },
        details: {
          target: {
            acc_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } },
            buff_removal: { effect: 'acc_up', term: 'immediate' },
            silenced: { term: 'immediate' }
          }
        }
      }]
    }],
    passive: [{
      area: 'diagonal_adjacent',
      equipment_effects: [{
        conditions: [{ trigger: 'start_wave' }],
        target: { kind: 'ally', conditions: ['bioroid'] },
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
        conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'reconnaissance' }] } }],
        details: {
          self: {
            acc_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ equipped: 'crystal_ball_of_fate' }] } }],
        target: { kind: 'ally' },
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
        target: { kind: 'enemy' },
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
        target: { kind: 'enemy' },
        details: { target: { def_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ trigger: 'critical' }],
        target: { kind: 'enemy' },
        details: {
          target: {
            buff_removal: { effects: ['def_up', 'damage_reduction_up'], term: 'immediate' },
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
        target: { kind: 'ally' },
        details: { target: { defense_penetration: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['attacker', 'supporter'] },
        details: { target: { target_protect: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            status_resist_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
            damage_reduction_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }]
  },
  138: {
    no: 138,
    active: [{
      damage_deal: {
        base: { milliPercentage: 120000 },
        per_lv_up: { milliPercentage: 12500 }
      },
      range: 4,
      cost: 4,
      area: 'single',
      effects: [{
        target: { kind: 'enemy' },
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
        per_lv_up: { milliPercentage: 17500 }
      },
      range: 3,
      cost: 8,
      area: 'line',
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ state: { target: [{ affected: 'marked' }, { affected: 'damage_taken_increased' }] } }],
        target: { kind: 'enemy' },
        details: {
          self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } },
          target: { buff_removal: { effect: 'damage_reduction_up' } }
        }
      }]
    }],
    passive: [{
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ affected: 'row_protect' }] } }],
        target: { kind: 'ally', conditions: [{ not_alias: 'kouhei_church' }] },
        details: { target: { follow_up_attack: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: [{ alias: 'kouhei_church', except: 138 }] },
        details: { target: { follow_up_attack: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'hit', state: { target: [{ affected: 'row_protect' }] } }],
        target: { kind: 'ally', conditions: [{ not_alias: 'kouhei_church' }] },
        details: { target: { ap_up: { base: { microValue: 450000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'ally', conditions: [{ alias: 'kouhei_church', except: 138 }] },
        details: { target: { ap_up: { base: { microValue: 450000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        scale_factor: { per_units: { type: 'squad', unit: 'kouhei_church', except: 'self' } },
        details: { self: { defense_penetration: { base: { milliPercentage: 2000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: [{ alias: 'kouhei_church', except: 138 }] },
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
        conditions: [{ trigger: 'start_wave', state: { enemy: { num_of_units: { greater_or_equal: 1, less_or_equal: 2 } } } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 1000 }, term: 'infinite', cannot_be_dispelled: true },
            acc_up: { base: { milliPercentage: 9000 }, per_lv_up: { milliPercentage: 1000 }, term: 'infinite', cannot_be_dispelled: true },
            spd_up: { base: { milliPercentage: 500 }, per_lv_up: { milliPercentage: 500 }, term: 'infinite', cannot_be_dispelled: true }
          }
        }
      }, {
        conditions: [{ trigger: 'start_wave', state: { enemy: { num_of_units: { greater_or_equal: 3, less_or_equal: 4 } } } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 2000 }, term: 'infinite', cannot_be_dispelled: true },
            acc_up: { base: { milliPercentage: 18000 }, per_lv_up: { milliPercentage: 2000 }, term: 'infinite', cannot_be_dispelled: true },
            spd_up: { base: { milliPercentage: 1000 }, per_lv_up: { milliPercentage: 1000 }, term: 'infinite', cannot_be_dispelled: true }
          }
        }
      }, {
        conditions: [{ trigger: 'start_wave', state: { enemy: { num_of_units: { greater_or_equal: 5, less_or_equal: 6 } } } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 3000 }, term: 'infinite', cannot_be_dispelled: true },
            acc_up: { base: { milliPercentage: 27000 }, per_lv_up: { milliPercentage: 3000 }, term: 'infinite', cannot_be_dispelled: true },
            spd_up: { base: { milliPercentage: 1500 }, per_lv_up: { milliPercentage: 1500 }, term: 'infinite', cannot_be_dispelled: true }
          }
        }
      }, {
        conditions: [{ trigger: 'start_wave', state: { enemy: { num_of_units: { greater_or_equal: 7 } } } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 4000 }, term: 'infinite', cannot_be_dispelled: true },
            acc_up: { base: { milliPercentage: 36000 }, per_lv_up: { milliPercentage: 4000 }, term: 'infinite', cannot_be_dispelled: true },
            spd_up: { base: { milliPercentage: 2000 }, per_lv_up: { milliPercentage: 2000 }, term: 'infinite', cannot_be_dispelled: true }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        details: { self: { enmity: { base: { milliPercentage: 14000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'be_killed', state: { target: [{ affected: 'marked' }] } }],
        target: { kind: 'enemy' },
        details: { target: { fixed_damage: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 25000 } } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: { self: { battle_continuation: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: 'infinite', times: 1 } } }
      }, {
        conditions: [{ trigger: 'start_wave', state: { squad: { in_squad: 'kouhei_church' } } }],
        details: { self: { battle_continuation: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: 'infinite', times: 1 } } }
      }, {
        conditions: [{ trigger: 'revive' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 13000 }, per_lv_up: { milliPercentage: 1000 }, term: 'infinite', cannot_be_dispelled: true },
            spd_up: { base: { milliPercentage: 13000 }, per_lv_up: { milliPercentage: 1000 }, term: 'infinite', cannot_be_dispelled: true }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            cri_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            range_up: { value: 1, term: { for_rounds: 1 } }
          }
        }
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
        target: { kind: 'enemy' },
        details: { target: { marked: { term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ state: { self: [{ stack: { tag: 'asceticism', greater_or_equal: 1 } }] } }],
        target: { kind: 'enemy' },
        details: { target: { damage_taken_increased: { base: { milliPercentage: 1500 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ state: { self: [{ stack: { tag: 'asceticism', greater_or_equal: 3 } }] } }],
        target: { kind: 'enemy' },
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
        conditions: [{ state: { self: [{ stack: { tag: 'asceticism', greater_or_equal: 1 } }] } }],
        target: { kind: 'enemy' },
        details: { target: { damage_taken_increased: { base: { milliPercentage: 1500 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ state: { self: [{ stack: { tag: 'asceticism', greater_or_equal: 3 } }] } }],
        target: { kind: 'enemy' },
        details: { target: { damage_taken_increased: { base: { milliPercentage: 1500 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ state: { self: [{ stack: { tag: 'asceticism', greater_or_equal: 5 } }] } }],
        target: { kind: 'enemy' },
        details: { target: { damage_taken_increased: { base: { milliPercentage: 1500 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } } } }
      }]
    }],
    passive: [{
      area: 'inverted_fan_shape_wing',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
        details: {
          self: { electric_resist_up: { base: { milliPercentage: 6500 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } } },
          target: { electric_resist_up: { base: { milliPercentage: 13000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } } }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['attacker', 'supporter'] },
        details: { target: { target_protect: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'enemy_killed' }],
        target: { kind: 'ally' },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 1500 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            damage_reduction_up: { base: { milliPercentage: 500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_wave', state: { enemy: { num_of_units: { greater_or_equal: 1, less_or_equal: 2 } } } }],
        details: { self: { damage_reduction_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: 'infinite', cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_wave', state: { enemy: { num_of_units: { greater_or_equal: 3, less_or_equal: 4 } } } }],
        details: { self: { damage_reduction_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: 'infinite', cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_wave', state: { enemy: { num_of_units: { greater_or_equal: 5 } } } }],
        details: { self: { damage_reduction_up: { tag: 'fanaticism', base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 3000 }, term: 'infinite', cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ tagged: 'fanaticism' }] } }],
        details: { self: { marked: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'be_hit' }],
        details: { self: { status_resist_up: { tag: 'asceticism', base: { milliPercentage: 2000 }, per_lv_up: { milliPercentage: 2000 }, term: 'infinite', max_stack: 5 } } }
      }, {
        conditions: [{ trigger: 'be_hit', state: { self: [{ affected: 'marked' }] } }],
        details: { self: { ap_up: { base: { microValue: 500000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' } } }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        scale_factor: { per_units: { type: 'squad', unit: 'kouhei_church' } },
        target: { kind: 'enemy' },
        details: { target: { damage_taken_increased: { base: { milliPercentage: 2000 }, per_lv_up: { milliPercentage: 500 }, term: 'infinite' } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { in_squad: 126 } } }],
        details: { self: { atk_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: [{ in_squad: 138 }, { in_squad: 140 }, { in_squad: 236 }] } }],
        details: { self: { atk_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } } } }
      }]
    }]
  },
  140: {
    no: 140,
    active: [{
      damage_deal: {
        base: { milliPercentage: 212000 },
        per_lv_up: { milliPercentage: 12000 }
      },
      range: 2,
      cost: 7,
      area: 'single',
      effects: [{
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: {
          target: {
            buff_removal: { effect: 'counterattack', term: 'immediate' },
            marked: { term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 22000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }, {
      range: 6,
      cost: 9,
      area: 'fixed_all',
      effects: [{
        target: { kind: 'ally', conditions: ['attacker'] },
        details: {
          target: {
            set_ap: { microValue: 4800000, term: 'immediate' },
            counterattack: { base: { milliPercentage: 105000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 2 } },
            damage_reduction_up: { base: { milliPercentage: 43000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 2 } },
            range_up: { value: 2, term: { for_rounds: 2 } }
          }
        }
      }]
    }],
    passive: [{
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['attacker'] },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 16500 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 21500 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            heavy_type_damage_up: { base: { milliPercentage: 16500 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: [{ alias: 'kouhei_church', role: 'attacker' }] },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 8250 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 10750 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            heavy_type_damage_up: { base: { milliPercentage: 8250 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: [{ alias: 'kouhei_church', role: 'defender' }, { alias: 'kouhei_church', role: 'supporter' }] },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 24750 }, per_lv_up: { milliPercentage: 2250 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 32250 }, per_lv_up: { milliPercentage: 2250 }, term: { for_rounds: 1 } },
            heavy_type_damage_up: { base: { milliPercentage: 24750 }, per_lv_up: { milliPercentage: 2250 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: {
          self: {
            battle_continuation: { base: { value: 480 }, per_lv_up: { value: 40 }, term: 'infinite', times: 1 },
            barrier: { base: { value: 1650 }, per_lv_up: { value: 150 }, term: 'infinite' }
          }
        }
      }, {
        conditions: [{ trigger: 'revive' }],
        details: {
          self: {
            minimize_damage: { term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 16500 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } },
            status_resist_up: { base: { milliPercentage: 48000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', round: { from: 5 } }],
        details: { self: { range_up: { value: 3, term: { for_rounds: 1 } } } }
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
        target: { kind: 'enemy' },
        details: {
          self: { ignore_protect: {} },
          target: { eva_down: { base: { milliPercentage: 21000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 } } }
        }
      }, {
        conditions: [{ state: { target: [{ tagged: 'bleeding_hole' }] } }],
        target: { kind: 'enemy' },
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
        target: { kind: 'enemy' },
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
        conditions: [{ trigger: 'start_round', state: { self: [{ grid: 'back_line' }] } }],
        details: {
          self: {
            defense_penetration: { base: { milliPercentage: 21000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 22000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ grid: 'mid_line' }] } }],
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
        target: { kind: 'ally' },
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
        target: { kind: 'enemy' },
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
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['light', 'flying'] },
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
        conditions: [{ trigger: 'start_round', state: { self: [{ grid: 'front_line' }, { tagged: 'clear_and_serene' }] } }],
        details: { self: { eva_up: { base: { milliPercentage: 10500 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'evade' }],
        details: { self: { counterattack: { base: { milliPercentage: 80000 }, per_lv_up: { milliPercentage: 5000 } } } }
      }]
    }]
  },
  148: {
    no: 148,
    active: [{
      damage_deal: {
        base: { milliPercentage: 128000 },
        per_lv_up: { milliPercentage: 8000 },
        attribute: 'fire'
      },
      range: 3,
      cost: 4,
      area: 'row_slightly_attenuate',
      effects: [{
        target: { kind: 'enemy' },
        details: {
          target: {
            fixed_fire_damage_over_time: { base: { value: 640 }, per_lv_up: { value: 40 }, term: { for_rounds: 3 } },
            fire_resist_down: { base: { milliPercentage: 32000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 3 } },
            immovable: { term: { for_rounds: 2 } }
          }
        }
      }]
    }, {
      range: 6,
      cost: 7,
      area: 'fixed_diagonal',
      effects: [{
        target: { kind: 'ally' },
        details: {
          target: {
            ice_resist_up: { base: { milliPercentage: 33000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 2 } },
            barrier: { base: { value: 640 }, per_lv_up: { value: 40 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { self: [{ grid: 'area_of_effect' }] } }],
        target: { kind: 'ally', conditions: ['light'] },
        details: { target: { eva_up: { base: { milliPercentage: 22000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            ice_resist_up: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 1 } },
            damage_reduction_up: { base: { milliPercentage: 32000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_wave' }],
        details: { self: { ap_up: { base: { microValue: 2200000 }, per_lv_up: { microValue: 200000 }, term: 'immediate' } } }
      }]
    }, {
      area: 'fixed_diagonal',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
        details: {
          target: {
            target_protect: { term: { for_rounds: 1 } },
            ice_resist_up: { base: { milliPercentage: 21000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['attacker'] },
        details: { target: { atk_up: { base: { milliPercentage: 5500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['supporter'] },
        details: { target: { spd_up: { base: { milliPercentage: 5500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'end_wave' }],
        details: { self: { reconnaissance: {} } }
      }, {
        conditions: [{ trigger: 'start_wave', state: { self: [{ affected: 'reconnaissance' }] } }],
        details: { self: { minimize_damage: { times: 2, term: 'infinite' } } }
      }, {
        conditions: [{ trigger: 'start_wave' }],
        target: { kind: 'enemy' },
        details: {
          target: {
            status_resist_down: { base: { milliPercentage: 32000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } },
            fire_resist_down: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 } }
          }
        }
      }]
    }]
  },
  149: {
    no: 149,
    active: [{
      damage_deal: {
        base: { milliPercentage: 131500 },
        per_lv_up: { milliPercentage: 16500 }
      },
      range: 3,
      cost: 5,
      area: 'single',
      effects: [{
        target: { kind: 'enemy' },
        details: {
          target: { def_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } } }
        }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }, {
        conditions: [{ state: { target: [{ tagged: 'foresight' }] } }],
        target: { kind: 'enemy' },
        details: { target: { damage_taken_increased: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } } } }
      }, {
        details: { self: { damage_multiplier_up_by_status: { status: 'eva', base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 2500 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 345000 },
        per_lv_up: { milliPercentage: 95000 }
      },
      range: 3,
      cost: 10,
      area: 'single',
      effects: [{
        details: {
          self: {
            ignore_barrier_dr: {},
            heavy_type_damage_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } },
            enmity: { base: { milliPercentage: 3000 }, per_lv_up: { milliPercentage: 3000 } },
            fixed_damage: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: -1250 } }
          }
        }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_damage: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 2500 } } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { eva_up: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ status_less_than_self: { status: 'spd' } }] } }],
        target: { kind: 'enemy' },
        details: {
          target: {
            acc_down: { tag: 'foresight', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            eva_down: { tag: 'foresight', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'attack' }],
        details: { self: { atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 2000 }, term: 'infinite', max_stack: 3 } } }
      }, {
        conditions: [{ trigger: 'be_attacked' }],
        details: { self: { counterattack: { base: { milliPercentage: 80000 }, per_lv_up: { milliPercentage: 5000 }, term: 'immediate' } } }
      }]
    }, {
      area: 'wedge',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['flying'] },
        details: {
          target: {
            acc_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ grid: 'front_line' }] } }],
        target: { kind: 'ally', conditions: ['light', 'heavy'] },
        details: {
          target: {
            acc_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } }
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
        conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'reconnaissance' }] } }],
        details: {
          self: {
            acc_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }]
  },
  150: {
    no: 150,
    active: [{
      damage_deal: {
        base: { milliPercentage: 75000 },
        per_lv_up: { milliPercentage: 8500 }
      },
      range: 5,
      cost: 10,
      area: 'all',
      effects: [{
        target: { kind: 'enemy' },
        details: {
          self: { ignore_protect: {} },
          target: { buff_removal: { effect: 'eva_up', term: 'immediate' } }
        }
      }, {
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: {
          target: {
            acc_down: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } },
            eva_down: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'hit', state: { target: [{ tagged: 'take_down_a_peg_or_two' }] } }],
        target: { kind: 'enemy' },
        details: { target: { buff_removal: { effect: 'damage_reduction_up', term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'hit', state: { squad: { in_squad: 152 } } }],
        details: { self: { cooperative_attack: { unit: 152, active: 2, term: 'immediate' } } }
      }]
    }, {
      range: 0,
      cost: 10,
      area: 'fixed_all',
      effects: [{
        target: { kind: 'ally' },
        details: {
          target: {
            ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 100000 }, term: 'immediate' },
            all_debuff_removal: { term: 'immediate' },
            defense_penetration: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            damage_multiplier_up_by_status: { status: 'eva', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ affected_by: { alias: 'strikers', except: 150 } }] } }],
        target: { kind: 'ally' },
        details: {
          target: {
            defense_penetration: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            damage_multiplier_up_by_status: { status: 'eva', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }],
    passive: [{
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: {
          self: {
            eva_up: { tag: 'talaria', base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 4000 }, term: 'infinite', cannot_be_dispelled: true },
            spd_up: { tag: 'talaria', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 1000 }, term: 'infinite', cannot_be_dispelled: true }
          }
        }
      }, {
        conditions: [{ trigger: 'be_attacked' }],
        details: { self: { effect_removal: { tag: 'talaria', effects: ['eva_up', 'spd_up'], term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'reconnaissance' }] } }],
        details: { self: { eva_up: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 4000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ affected: 'reconnaissance' }] } }],
        target: { kind: 'ally' },
        details: { target: { prevents_effect: { effect: 'eva_down', term: { for_rounds: 1 }, cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'end_wave' }],
        details: { self: { reconnaissance: {} } }
      }, {
        conditions: [{ trigger: 'be_attacked', state: { self: [{ affected: 'counterattack' }] } }],
        // TODO: Change to effect_removal ?
        details: { self: { buff_removal: { effect: 'counterattack', term: 'immediate' } } }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        scale_factor: { per_units: { type: 'squad', unit: 'attacker' } },
        target: { kind: 'ally' },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            cri_up: { milliPercentage: 5000, term: { for_rounds: 1 } }
          }
        }
      }, {
        // Strikers supporter
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
        details: { target: { acc_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { in_squad: { alias: 'strikers', role: 'attacker' } } } }],
        target: { kind: 'ally' },
        details: { target: { damage_multiplier_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } } } }
      }, {
        // Strikers defender
        conditions: [{ trigger: 'start_round', state: { squad: { in_squad: 151 } } }],
        target: { kind: 'ally' },
        details: { target: { status_resist_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_wave', state: { target: [{ status_greater_than_self: { status: 'atk' } }] } }],
        target: { kind: 'enemy' },
        details: { target: { spd_down: { tag: 'take_down_a_peg_or_two', base: { milliPercentage: 2000 }, per_lv_up: { milliPercentage: 500 }, term: 'infinite' } } }
      }, {
        conditions: [{
          trigger: 'start_round',
          state: {
            target: [
              { affected: 'atk_up' }, { affected: 'atk_down' },
              { affected: 'acc_up' }, { affected: 'acc_down' },
              { affected: 'cri_up' }, { affected: 'cri_down' },
              { affected: 'damage_multiplier_up' }, { affected: 'damage_multiplier_down' },
            ]
          }
        }],
        target: { kind: 'enemy' },
        details: {
          target: {
            ap_down: { tag: 'take_down_a_peg_or_two', base: { microValue: 200000 }, per_lv_up: { microValue: 30000 }, term: 'immediate' },
            damage_taken_increased: { tag: 'take_down_a_peg_or_two', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
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
        target: { kind: 'enemy' },
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
        target: { kind: 'ally' },
        details: {
          self: {
            def_up: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 3 } },
            damage_reduction_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 3 } }
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
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['attacker'] },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['attacker', 'supporter'] },
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
        conditions: [{ trigger: 'kill' }],
        target: { kind: 'ally', conditions: ['attacker'] },
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
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['attacker', 'supporter'] },
        details: { target: { ice_resist_up: { base: { milliPercentage: 22000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['flying'] },
        details: { target: { damage_reduction_up: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
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
        conditions: [{ trigger: 'hit_any_active' }],
        target: { kind: 'ally' },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 3200 }, per_lv_up: { milliPercentage: 200 }, term: { for_rounds: 2 }, max_stack: 3 },
            ice_resist_up: { base: { milliPercentage: 5500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 }, max_stack: 3 }
          }
        }
      }]
    }]
  },
  152: {
    no: 152,
    active: [{
      close_range_response_mode: {
        damage_deal: {
          base: { milliPercentage: 150000 },
          per_lv_up: { milliPercentage: 20000 }
        },
        range: 3,
        cost: 8,
        area: 'line',
        effects: [{
          details: {
            self: {
              light_type_damage_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: 'immediate' },
              flying_type_damage_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: 'immediate' }
            }
          }
        }, {
          conditions: [{ state: { target: [{ affected: 'immovable' }, { affected: 'eva_down' }] } }],
          target: { kind: 'enemy' },
          details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: 'immediate' } } }
        }]
      },
      long_range_sniper_mode: {
        damage_deal: {
          base: { milliPercentage: 210000 },
          per_lv_up: { milliPercentage: 30000 }
        },
        range: 6,
        cost: 9,
        area: 'row_greatly_attenuate',
        effects: [{
          details: {
            self: {
              ignore_protect: {},
              defense_penetration: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 3000 }, term: 'immediate' }
            }
          }
        }, {
          conditions: [{ trigger: 'critical' }],
          target: { kind: 'enemy' },
          details: {
            self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: 'immediate' } },
            target: { buff_removal: { effect: 'counterattack', term: 'immediate' } }
          }
        }]
      }
    }, {
      close_range_response_mode: {
        damage_deal: {
          base: { milliPercentage: 115000 },
          per_lv_up: { milliPercentage: 15000 }
        },
        range: 4,
        cost: 10,
        area: 'all_round_fire',
        effects: [{
          conditions: [{ trigger: 'attack' }],
          target: { kind: 'enemy' },
          details: {
            self: { ignore_protect: {} },
            target: { buff_removal: { effect: 'eva_up', term: 'immediate' } }
          }
        }, {
          conditions: [{ trigger: 'critical' }],
          details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: 'immediate' } } }
        }, {
          conditions: [{ trigger: 'hit', state: { target: [{ affected: 'immovable' }, { affected: 'eva_down' }] } }],
          target: { kind: 'enemy' },
          details: { target: { damage_taken_increased: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 }, max_stack: 1 } } }
        }]
      },
      long_range_sniper_mode: {
        damage_deal: {
          base: { milliPercentage: 175000 },
          per_lv_up: { milliPercentage: 25000 }
        },
        range: 6,
        cost: 7,
        area: 'single',
        effects: [{
          details: { self: { ignore_protect: {} } }
        }, {
          conditions: [{ trigger: 'hit', state: { target: [{ affected: 'marked' }, { affected: 'eva_down' }] } }],
          target: { kind: 'enemy' },
          details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: 'immediate' } }, }
        }, {
          conditions: [{ trigger: 'critical' }],
          target: { kind: 'enemy' },
          details: {
            self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: 'immediate' } },
            target: { buff_removal: { effects: ['counterattack', 'damage_reduction_up'], term: 'immediate' } }
          }
        }]
      }
    }],
    passive: [{
      area: 'cross',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        scale_factor: { per_units: { type: 'squad', unit: 'cross_adjacent' } },
        details: {
          self: {
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            cri_up: { milliPercentage: 5000, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { not_in_squad: 'cross_adjacent' } } }],
        details: {
          self: {
            ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 100000 }, term: 'immediate' },
            acc_down: { milliPercentage: 160000, term: { for_rounds: 1 }, cannot_be_dispelled: true },
            buff_removal: { effect: 'acc_up', term: 'immediate' }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally_except_self', conditions: ['strikers', 'experimental_units'] },
        details: { target: { follow_up_attack: { tag: 'separation_anxiety', term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'follow_up_attack' }],
        target: { kind: 'ally_except_self', conditions: ['strikers', 'experimental_units'] },
        details: { target: { buff_removal: { tag: 'separation_anxiety',  effect: 'follow_up_attack', term: 'immediate' } } }
      }]
    }, {
      close_range_response_mode: {
        area: 'self',
        effects: [{
          conditions: [{ trigger: 'start_round', state: { self: [{ grid: 'front_line' }, { grid: 'mid_line' }] } }],
          details: {
            self: {
              spd_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
              ignore_barrier_dr: { term: { for_rounds: 1 } }
            }
          }
        }, {
          conditions: [{ trigger: 'start_round', state: { self: [{ grid: 'back_line' }] } }],
          details: { self: { form_change: { form: 'long_range_sniper_mode', term: 'immediate' } } }
        }]
      },
      long_range_sniper_mode: {
        area: 'self',
        effects: [{
          conditions: [{ trigger: 'start_round', state: { self: [{ grid: 'back_line' }] } }],
          details: {
            self: {
              acc_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: 'infinite', max_stack: 5 },
              defense_penetration: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 4000 }, term: { for_rounds: 1 } },
              debuff_removal: { effects: ['acc_down', 'cri_down'], term: 'immediate' }
            }
          }
        }, {
          conditions: [{ trigger: 'start_round', state: { self: [{ grid: 'front_line' }, { grid: 'mid_line' }] } }],
          details: { self: { form_change: { form: 'close_range_response_mode', term: 'immediate' } } }
        }]
      }
    }, {
      area: 'cross',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        target: { kind: 'ally_except_self', conditions: ['strikers', 'experimental_units'] },
        details: { target: { nullify_damage: { term: 'infinite', times: 1, cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            minimize_damage_less_than_value: { base: { value: 100 }, per_lv_up: { value: 125 }, term: { for_rounds: 1 } },
            status_resist_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 1 } },
            all_buff_removal_resist_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'be_hit' }],
        details: { self: { damage_multiplier_up: { tag: 'energy_focusing', base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1500 }, term: 'infinite', max_stack: 3 } } }
      }, {
        conditions: [{ trigger: 'hit' }],
        details: { self: { tag_release: { tag: 'energy_focusing', term: 'immediate' } } }
      }]
    }]
  },
  154: {
    no: 154,
    active: [{
      normal: {
        damage_deal: {
          base: { milliPercentage: 128500 },
          per_lv_up: { milliPercentage: 13500 }
        },
        range: 2,
        cost: 4,
        area: 'single',
        effects: [{
          conditions: [{ trigger: 'follow_up_attack' }, { trigger: 're_attack' }],
          details: { self: { damage_multiplier_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 }, max_stack: 1 } } }
        }]
      },
      remote_bomb_placement: {
        damage_deal: {
          base: { milliPercentage: 110000 },
          per_lv_up: { milliPercentage: 10000 }
        },
        range: 6,
        cost: 10,
        area: 'all',
        effects: [{
          details: {
            self: {
              ignore_protect: {},
              form_change: { form: 'normal', term: 'immediate' }
            }
          }
        }, {
          conditions: [{ trigger: 'follow_up_attack' }, { trigger: 're_attack' }],
          details: { self: { damage_multiplier_up: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 2 }, max_stack: 1 } } }
        }]
      }
    }, {
      normal: {
        damage_deal: {
          base: { milliPercentage: 1000 },
          per_lv_up: { milliPercentage: 1000 }
        },
        range: 4,
        cost: 6,
        area: 'all',
        effects: [{
          target: { kind: 'enemy' },
          details: {
            self: {
              ignore_protect: {},
              form_change: { form: 'remote_bomb_placement', term: 'immediate' }
            },
            target: { buff_removal: { effect: 'eva_up', term: 'immediate' } }
          }
        }]
      },
      remote_bomb_placement: {
        damage_deal: {
          base: { milliPercentage: 110000 },
          per_lv_up: { milliPercentage: 10000 }
        },
        range: 6,
        cost: 10,
        area: 'all',
        effects: [{
          details: {
            self: {
              ignore_protect: {},
              form_change: { form: 'normal', term: 'immediate' }
            }
          }
        }, {
          conditions: [{ trigger: 'follow_up_attack' }, { trigger: 're_attack' }],
          details: { self: { damage_multiplier_up: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 2 }, max_stack: 1 } } }
        }]
      }
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { defense_penetration: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: [{ not_in_squad: 'attacker' }, { in_squad: 'empress_hound' }] } }],
        details: { self: { ignore_barrier_dr: { term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'kill' }],
        details: { self: { cri_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: -1500 }, term: 'infinite' } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'target_protect' }] } }],
        details: { self: { debuff_removal: { effect: 'cri_down', term: 'immediate' } } }
      }]
    }, {
      area: 'cross',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['defender', 'supporter'] },
        details: { target: { follow_up_attack: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { num_of_units: { unit: 'cross_adjacent', greater_or_equal: 2 } } } }],
        details: { self: { defense_penetration: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { num_of_units: { unit: 'cross_adjacent', equal: 4 } } } }],
        details: { self: { additional_damage_focusing: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } } }
      }]
    }]
  },
  155: {
    no: 155,
    active: [{
      damage_deal: {
        base: { milliPercentage: 125000 },
        per_lv_up: { milliPercentage: 15000 }
      },
      range: 3,
      cost: 5,
      area: '2_x_2',
      effects: [{
        conditions: [{ trigger: 'critical' }],
        target: { kind: 'enemy' },
        details: { target: { buff_removal: { effect: 'counterattack', term: 'immediate' } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 125000 },
        per_lv_up: { milliPercentage: 15000 }
      },
      range: 3,
      cost: 5,
      area: 'row_toward_front',
      effects: [{
        conditions: [{ trigger: 'critical' }],
        target: { kind: 'enemy' },
        details: { target: { buff_removal: { effect: 'damage_reduction_up', term: 'immediate' } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { not_in_squad: 'cross_adjacent' } } }],
        details: {
          self: {
            re_attack: { term: { for_rounds: 1 } },
            action_count_up: { term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { in_squad: 'empress_hound' } } }],
        details: { self: { ignore_protect: { term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'hit_active_1', round: 'odd' }],
        details: { self: { cooperative_attack: { unit: 155, active: 2 } } }
      }, {
        conditions: [{ trigger: 'hit_active_2', round: 'even' }],
        details: { self: { cooperative_attack: { unit: 155, active: 1 } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'ice_resist_up' }] } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ affected_by: { equipment: 'hot_pack', effect: 'minimum_ice_resist_up' } }] } }],
        details: {
          self: {
            atk_up: { milliPercentage: 5000, term: { for_rounds: 1 } },
            spd_up: { milliPercentage: 5000, term: { for_rounds: 1 } }
          }
        }
      }]
    }]
  },
  156: {
    no: 156,
    active: [{
      damage_deal: {
        base: { milliPercentage: 172000 },
        per_lv_up: { milliPercentage: 13300 }
      },
      range: 2,
      cost: 5,
      area: 'single',
      effects: [{
        conditions: [{ trigger: 'hit', state: { self: [{ tagged: 'skoll' }, { tagged: 'solagarmr' }] } }],
        details: { self: { atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 }, max_stack: 3 } } }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ tagged: 'hati' }, { tagged: 'managarmr' }] } }],
        details: { self: { damage_multiplier_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 }, max_stack: 3 } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 199000 },
        per_lv_up: { milliPercentage: 19900 }
      },
      range: 2,
      cost: 10,
      area: 'diagonal',
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ tagged: 'skoll' }, { tagged: 'solagarmr' }] } }],
        target: { kind: 'enemy' },
        details: { target: { atk_down: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 }, max_stack: 3 } } }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ tagged: 'hati' }, { tagged: 'managarmr' }] } }],
        target: { kind: 'enemy' },
        details: { target: { damage_multiplier_down: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 }, max_stack: 3 } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: {
          self: {
            counterattack: { base: { milliPercentage: 60000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 2 } },
            barrier: { base: { value: 1000 }, per_lv_up: { value: 100 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'use_active_2' }],
        details: {
          self: {
            counterattack: { base: { milliPercentage: 60000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 3 } },
            barrier: { base: { value: 1000 }, per_lv_up: { value: 100 }, term: { for_rounds: 3 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'barrier' }] } }],
        details: { self: { marked: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'be_hit', state: { self: [{ not_affected: ['barrier'] }] } }],
        details: { self: { effect_removal: { effect: 'marked', term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ equipped: 'lunch_box' }] } }],
        details: {
          self: {
            atk_up: { milliPercentage: 5000, term: { for_rounds: 1 } },
            spd_up: { milliPercentage: 5000, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round', round: 'odd', state: { self: [{ not_tagged: 'solagarmr' }] } }],
        details: { self: { re_attack: { tag: 'skoll', term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', round: 'even', state: { self: [{ not_tagged: 'managarmr' }] } }],
        details: { self: { ignore_protect: { tag: 'hati', term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'kill' }],
        details: {
          self: {
            re_attack: { tag: 'solagarmr', term: { for_rounds: 2 }, max_stack: 1 },
            ignore_protect: { tag: 'managarmr', term: { for_rounds: 2 }, max_stack: 1 }
          }
        }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ tagged: ['solagarmr', 'managarmr'] }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 2500 }, term: 'immediate' } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            status_resist_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: {
          target: {
            def_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            ap_down: { base: { microValue: 200000 }, per_lv_up: { microValue: 20000 }, term: 'immediate' }
          }
        }
      }, {
        conditions: [{ trigger: 'hit', state: { target: [{ status_greater_than_self: { status: 'def' } }] } }],
        target: { kind: 'enemy' },
        details: { target: { def_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ trigger: 'hit', state: { target: [{ status_greater_than_self: { status: 'spd' } }] } }],
        target: { kind: 'enemy' },
        details: { target: { ap_down: { base: { microValue: 200000 }, per_lv_up: { microValue: 20000 }, term: 'immediate' } } }
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
      range: 3,
      cost: 6,
      area: 'fan_shape',
      effects: [{
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: {
          target: {
            spd_down: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            ice_resist_down: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'hit', state: { target: [{ tagged: 'wet' }] } }],
        target: { kind: 'enemy' },
        details: {
          target: {
            damage_taken_increased: { tag: 'freeze', base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } },
            immovable: { tag: 'freeze', term: { for_rounds: 2 } }
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
        conditions: [{ trigger: 'hit', state: { target: [{ tagged: 'wet' }] } }],
        target: { kind: 'enemy' },
        details: {
          target: {
            damage_taken_increased: { tag: 'freeze', base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } },
            immovable: { tag: 'freeze', term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ tagged: 'great_antarctica_adventure' }], target: [{ tagged: 'wet' }] } }],
        target: { kind: 'enemy' },
        details: { target: { all_buff_removal: { term: 'immediate' } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_wave' }, { trigger: 'idle' }],
        details: { self: { minimize_damage: { tag: 'mimesis', term: 'infinite', times: 2, max_stack: 1 } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ tagged: 'mimesis' }] } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 } },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 3 } }
          }
        }
      }]
    }, {
      area: {
        1: 'all',
        10: 'fixed_all'
      },
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
        details: {
          self: { ice_resist_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } } },
          target: { ice_resist_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } } }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ affected: 'target_protect' }] } }],
        target: { kind: 'ally' },
        details: { target: { ap_up: { base: { microValue: 100000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' } } }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { spd_up: { tag: 'great_antarctica_adventure', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ tagged: 'mimesis' }] } }],
        details: { self: { ignore_protect: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ tagged: 'freeze' }] } }],
        target: { kind: 'enemy' },
        details: { target: { ice_resist_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } } }
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
        target: { kind: 'enemy' },
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
        target: { kind: 'enemy' },
        details: {
          self: { damage_reduction_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } } },
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
        target: { kind: 'ally' },
        details: { target: { ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            def_up: { base: { milliPercentage: 60000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
            column_protect: { term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'be_hit' }],
        details: { self: { status_resist_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1350 }, max_stack: 3 } } }
      }]
    }, {
      area: 'fixed_back_line',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['attacker', 'supporter'] },
        details: { target: { target_protect: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'damage_reduction_up' }] } }],
        target: { kind: 'ally', conditions: ['attacker', 'supporter'] },
        details: { target: { atk_up: { base: { milliPercentage: 19000 }, per_lv_up: { milliPercentage: 1600 }, term: { for_rounds: 1 } } } }
      }]
    }]
  },
  165: {
    no: 165,
    active: [{
      damage_deal: {
        base: { milliPercentage: 131000 },
        per_lv_up: { milliPercentage: 11000 }
      },
      range: 4,
      cost: 5,
      area: 'single',
      effects: [{
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: {
          target: {
            ap_down: { tag: 'pre_cooking', base: { microValue: 500000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' },
            eva_down: { tag: 'pre_cooking', base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 2 } },
            damage_taken_increased: { tag: 'pre_cooking', base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }, {
      range: 6,
      cost: 8,
      area: 'single',
      effects: [{
        target: { kind: 'ally', conditions: ['bioroid'] },
        details: {
          target: {
            atk_up: { tag: 'best_desserts', base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            acc_up: { tag: 'best_desserts', base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } },
            status_resist_up: { tag: 'best_desserts', base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } },
            ap_up: { tag: 'best_desserts', base: { microValue: 2000000 }, per_lv_up: { microValue: 100000 }, term: 'immediate' },
            all_debuff_removal: { tag: 'best_desserts', term: 'immediate' }
          }
        }
      }]
    }],
    passive: [{
      area: 'cross',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
        details: {
          target: {
            eva_up: { tag: 'psychic_barrier', base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            damage_reduction_up: { tag: 'psychic_barrier', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            barrier: { tag: 'psychic_barrier', base: { value: 100 }, per_lv_up: { value: 30 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'all_adjacent',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['bioroid'] },
        details: {
          target: {
            cri_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ tagged: 'psychic_barrier' }] } }],
        target: { kind: 'ally', conditions: ['bioroid'] },
        details: {
          target: {
            cri_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ hp_less_or_equal: 50 }] } }],
        target: { kind: 'ally', conditions: ['bioroid'] },
        details: {
          target: {
            cri_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        scale_factor: { per_units: { type: 'squad', unit: 'bioroid', except: 'self' } },
        details: { self: { ap_up: { base: { microValue: 500000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ tagged: 'best_desserts' }] } }],
        target: { kind: 'ally' },
        details: {
          target: {
            status_resist_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 4000 }, term: { for_rounds: 1 } },
            all_buff_removal_resist_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 4000 }, term: { for_rounds: 1 } },
            ignore_protect: { term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ tagged: 'pre_cooking' }] } }],
        target: { kind: 'enemy' },
        details: {
          target: {
            all_buff_removal: { term: 'immediate' },
            all_buff_blocking: { term: { for_rounds: 1 }, cannot_be_dispelled: true }
          }
        }
      }]
    }]
  },
  169: {
    no: 169,
    active: [{
      damage_deal: {
        base: { milliPercentage: 124000 },
        per_lv_up: { milliPercentage: 12400 }
      },
      range: 3,
      cost: 4,
      area: 'single',
      effects: [{
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: { target: { provoked: { term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ trigger: 'hit', state: { target: [{ affected: 'provoked' }] } }],
        target: { kind: 'enemy' },
        details: { target: { light_type_damage_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 }, max_stack: 2 } } }
      }, {
        conditions: [{ trigger: 'hit', state: { squad: { in_squad: { tagged: 'younger_sister' } } } }],
        details: { self: { ignore_barrier_dr: { term: { for_rounds: 1 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 212000 },
        per_lv_up: { milliPercentage: 21200 }
      },
      range: 3,
      cost: 8,
      area: 'single_and_front',
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ trigger: 'hit', state: { target: [{ affected: 'provoked' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 2500 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'hit', state: { squad: { in_squad: { tagged: 'younger_sister' } } } }],
        details: { self: { additional_damage_focusing: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 2500 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'hit', state: { target: [{ affected: 'provoked' }], squad: { in_squad: { tagged: 'younger_sister' } } } }],
        target: { kind: 'enemy' },
        details: { target: { stunned: { term: { for_rounds: 2 } } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_wave', state: { squad: { num_of_units: { unit: 'ally', less_or_equal: 3 } } } }],
        details: { self: { status_resist_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 3000 }, term: 'infinite', cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_wave', state: { squad: { num_of_units: { unit: 'ally', equal: 4 } } } }],
        details: { self: { status_resist_up: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 5000 }, term: 'infinite', cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_wave', state: { squad: { num_of_units: { unit: 'ally', greater_or_equal: 1 } } } }],
        details: { self: { battle_continuation: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 4000 }, term: 'infinite', cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_wave', state: { squad: { num_of_units_less_than_enemies: {} } } }],
        details: { self: { battle_continuation: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 4000 }, term: 'infinite', cannot_be_dispelled: true } } }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { atk_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ hp_greater_or_equal: 25 }] } }],
        target: { kind: 'ally_except_self' },
        details: { target: { atk_up: { tag: 'younger_sister', base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { in_squad: 'd_entertainment' } } }],
        details: { self: { defense_penetration: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'hit' }],
        details: { self: { spd_up: { base: { milliPercentage: 3000 }, per_lv_up: { milliPercentage: 400 }, term: { for_rounds: 2 }, max_stack: 3 } } }
      }, {
        conditions: [{ trigger: 'hit', state: { target: [{ tagged: 'younger_sister' }] } }],
        target: { kind: 'ally' },
        details: { target: { spd_up: { base: { milliPercentage: 3000 }, per_lv_up: { milliPercentage: 400 }, term: { for_rounds: 2 }, max_stack: 3 } } }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_wave', state: { target: [{ hp_rate_greater_or_equal_than_self: {} }] } }],
        target: { kind: 'enemy' },
        details: { target: { provoked: { tag: 'villain', term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ trigger: 'enemy_killed', state: { target: [{ tagged: 'villain' }] } }],
        target: { kind: 'enemy' },
        details: { target: { status_resist_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 3 }, max_stack: 3 } } }
      }, {
        conditions: [{ trigger: 'be_attacked', state: { target: [{ affected: 'provoked' }] } }],
        target: { kind: 'enemy' },
        details: { target: { damage_taken_increased: { base: { milliPercentage: 3000 }, per_lv_up: { milliPercentage: 400 }, term: { for_rounds: 3 }, max_stack: 3 } } }
      }, {
        conditions: [{ trigger: 'revive' }],
        details: { self: { all_debuff_removal: { term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'revive', state: { target: [{ tagged: 'villain' }] } }],
        target: { kind: 'enemy' },
        details: { target: { all_buff_removal: { term: 'immediate' } } }
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
        target: { kind: 'enemy' },
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
        target: { kind: 'ally_grid' },
        details: { target: { summon_hologram_tiger: { times: { 1: 1, 10: 2 } } } }
      }]
    }],
    passive: [{
      area: 'cross_adjacent_without_front',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { eva_up: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['attacker', 'supporter'] },
        details: { target: { target_protect: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'hit' }, { trigger: 'evade' }],
        target: { kind: 'ally' },
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
              { affected: 'atk_down' },
              { affected: 'def_down' },
              { affected: 'cri_down' },
              { affected: 'acc_down' },
              { affected: 'eva_down' },
              { affected: 'spd_down' }
            ]
          }
        }],
        details: {
          self: {
            eva_up: { base: { milliPercentage: 2000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 }, max_stack: 1 },
            damage_reduction_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 }, max_stack: 1 },
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
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: {
          target: {
            marked: { term: { for_rounds: 2 }, max_stack: 1 },
            damage_taken_increased: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 }, max_stack: 1 },
            fire_resist_down: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } },
            fixed_fire_damage_over_time: { base: { value: 40 }, per_lv_up: { value: 30 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'hit', state: { target: [{ affected: 'fixed_fire_damage_over_time' }] } }],
        target: { kind: 'enemy' },
        details: {
          target: {
            damage_taken_increased: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            fire_resist_down: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            fixed_fire_damage_over_time: { base: { value: 80 }, per_lv_up: { value: 60 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 120000 },
        per_lv_up: { milliPercentage: 9000 },
        attribute: 'fire'
      },
      range: 3,
      cost: 9,
      area: '2_x_2',
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: {
          target: {
            marked: { term: { for_rounds: 2 } },
            fixed_fire_damage_over_time: { base: { value: 40 }, per_lv_up: { value: 30 }, term: { for_rounds: 2 } },
            ap_down: { base: { microValue: 500000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' }
          }
        }
      }, {
        conditions: [{ trigger: 'critical' }],
        target: { kind: 'enemy' },
        details: {
          self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } },
          target: { all_buff_removal: {} }
        }
      }]
    }],
    passive: [{
      area: 'all_adjacent',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['bioroid'] },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'idle' }],
        target: { kind: 'ally', conditions: ['bioroid'] },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 }, max_stack: 1 },
            acc_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 }, max_stack: 1 },
            cri_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 }, max_stack: 1 },
            defense_penetration: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 }, max_stack: 1 }
          }
        }
      }, {
        conditions: [{ trigger: 'idle', state: { self: [{ not_equipped: ['horns_of_the_evil_overlord'] }] } }],
        target: { kind: 'ally', conditions: ['bioroid'] },
        details: { target: { fixed_damage_over_time: { base: { value: 30 }, per_lv_up: { value: 30 }, term: { for_rounds: 2 }, max_stack: 1 } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ hp_greater_or_equal: 50 }] } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 2500 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ hp_less_or_equal: 50 }] } }],
        details: {
          self: {
            eva_up: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } },
            damage_reduction_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
        details: { target: { prevents_effect: { effect: 'marked', term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: [{ except: 128 }] },
        details: {
          target: {
            damage_multiplier_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            damage_taken_increased: { milliPercentage: 10000, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: [128] },
        details: {
          target: {
            damage_multiplier_up: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            damage_taken_increased: { milliPercentage: 20000, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: [128] },
        details: {
          target: {
            atk_up: { tag: 'brainwashing_wave', base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            acc_up: { tag: 'brainwashing_wave', base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            cri_up: { tag: 'brainwashing_wave', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            defense_penetration: { tag: 'brainwashing_wave', base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
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
        details: { self: { heavy_type_damage_up: { base: { milliPercentage: 16500 }, per_lv_up: { milliPercentage: 1500 } } } }
      }, {
        conditions: [{ state: { target: [{ affected: 'def_down' }] } }],
        target: { kind: 'enemy' },
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
        target: { kind: 'enemy' },
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
        target: { kind: 'enemy' },
        details: {
          target: {
            atk_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            eva_down: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ affected: 'fixed_fire_damage_over_time' }] } }],
        target: { kind: 'enemy' },
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
        target: { kind: 'enemy' },
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
        conditions: [{ state: { target: [{ affected: 'fixed_fire_damage_over_time' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }, {
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
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
            damage_reduction_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 4 } }
          }
        }
      }, {
        conditions: [{ trigger: 'be_hit_fire_active' }],
        details: {
          self: {
            fire_resist_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 3 } },
            damage_reduction_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 } }
          }
        }
      }]
    }, {
      area: 'inverted_fan_shape_adjacent',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
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
        target: { kind: 'enemy' },
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
        details: { self: { heavy_type_damage_up: { base: { milliPercentage: 5500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
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
        target: { kind: 'enemy' },
        details: {
          self: { ignore_protect: {} },
          target: {
            ap_down: { base: { microValue: 165000 }, per_lv_up: { microValue: 15000 }, term: 'immediate' },
            eva_down: { base: { milliPercentage: 11500 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            electric_resist_down: { base: { milliPercentage: 22000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ affected: 'fire_resist_down' }, { affected: 'ice_resist_down' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_electric_damage: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 } } } }
      }]
    }],
    passive: [{
      area: 'single_and_back',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
        details: {
          target: {
            eva_up: { tag: 'wind_style', base: { milliPercentage: 11500 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            acc_up: { tag: 'wind_style', base: { milliPercentage: 21000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            cri_up: { tag: 'wind_style', base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            spd_up: { tag: 'wind_style', base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 4 } }
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
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        // FIXME: Add cannot_be_dispelled attribute
        details: { self: { light_type_damage_up: { tag: 'full_proficiency', base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: 'infinite' } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['kunoichi'] },
        details: {
          target: {
            eva_up: { base: { milliPercentage: 11500 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 21000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ not_tagged_affected: { tag: 'wind_style', effect: 'spd_up' } }] } }],
        target: { kind: 'ally', conditions: ['kunoichi'] },
        details: { target: { spd_up: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 4 } } } }
      }, {
        conditions: [{ trigger: 'hit_active_1', state: { squad: { in_squad: 99 } } }],
        details: { self: { cooperative_attack: { unit: 99, active: 2 } } }
      }, {
        conditions: [{ trigger: 'kill', state: { self: [{ tagged: 'full_proficiency' }], squad: { in_squad: 99 } } }],
        target: { kind: 'ally_except_self', conditions: ['kunoichi'] },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 } },
            ap_up: { base: { microValue: 600000 }, per_lv_up: { microValue: 100000 }, term: 'immediate' }
          }
        }
      }, {
        conditions: [{ trigger: 'be_killed' }],
        target: { kind: 'ally', conditions: [99] },
        details: { target: { atk_up: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 2 } } } }
      }]
    }]
  },
  175: {
    no: 175,
    active: [{
      damage_deal: {
        base: { milliPercentage: 156500 },
        per_lv_up: { milliPercentage: 11500 },
        attribute: 'ice'
      },
      range: 4,
      cost: 5,
      area: 'single',
      effects: [{
        target: { kind: 'enemy' },
        details: { target: { ice_resist_down: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } } } }
      }, {
        target: { kind: 'enemy' },
        details: {
          target: {
            ice_resist_down: { tag: 'wet', base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 2 } },
            electric_resist_down: { tag: 'wet', base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 2 } },
            fire_resist_up: { tag: 'wet', base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ affected: 'immovable' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 17000 }, per_lv_up: { milliPercentage: 2000 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 113500 },
        per_lv_up: { milliPercentage: 8500 },
        attribute: 'ice'
      },
      range: 5,
      cost: 8,
      area: 'line',
      effects: [{
        target: { kind: 'enemy' },
        details: {
          target: {
            immovable: { term: { for_rounds: 2 } },
            spd_down: { base: { milliPercentage: 7000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } },
            acc_down: { base: { milliPercentage: 7000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ tagged: 'wet' }] } }],
        target: { kind: 'enemy' },
        details: {
          target: {
            damage_taken_increased: { tag: 'freeze', base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: { for_rounds: 2 } },
            stunned: { tag: 'freeze', term: { for_rounds: 2 }, rate: { milliPercentage: 75000 } }
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
            eva_up: { base: { milliPercentage: 63000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
            damage_reduction_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'attack' }],
        details: { self: { eva_up: { base: { milliPercentage: 27000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ trigger: 'be_attacked', state: { self: [{ affected: 'fire_resist_up' }, { affected: 'ice_resist_up' }, { affected: 'electric_resist_up' }] } }],
        details: { self: { counterattack: { base: { milliPercentage: 80000 }, per_lv_up: { milliPercentage: 5000 } } } }
      }, {
        conditions: [{ trigger: 'enemy_killed' }],
        details: { self: { atk_up: { base: { milliPercentage: 5500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 }, max_stack: 3 } } }
      }]
    }, {
      area: 'cross_adjacent_without_front',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
        details: {
          self: { fire_resist_up: { base: { milliPercentage: 17000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 3 }, max_stack: 3 } },
          target: {
            target_protect: { term: { for_rounds: 1 } },
            fire_resist_up: { base: { milliPercentage: 17000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 3 }, max_stack: 3 }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['attacker', 'supporter'] },
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
        target: { kind: 'enemy' },
        details: { target: { immovable: { term: { for_rounds: 3 } } } }
      }, {
        conditions: [{ state: { target: [{ tagged: 'wet' }] } }],
        target: { kind: 'enemy' },
        details: { target: { all_buff_removal: {} } }
      }]
    }, {
      range: 0,
      cost: 9,
      area: 'fixed_all',
      effects: [{
        target: { kind: 'ally', conditions: ['light', 133, 135] },
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
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['light', 133, 135] },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 1000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 1000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { in_squad: 133 } } }],
        target: { kind: 'ally', conditions: ['light'] },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 1000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 1000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { in_squad: 135 } } }],
        target: { kind: 'ally', conditions: ['light'] },
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
        conditions: [{ trigger: 'start_round', state: { target: [{ affected: 'column_protect' }] } }],
        target: { kind: 'ally' },
        details: { target: { damage_reduction_up: { base: { milliPercentage: 23000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } } } }
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
        target: { kind: 'enemy' },
        details: { target: { marked: { term: { for_rounds: 2 } } } }
      }]
    }, {
      range: 0,
      cost: 8,
      area: 'fixed_all',
      effects: [{
        target: { kind: 'ally', conditions: ['attacker'] },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 } },
            cri_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 } }
          }
        }
      }, {
        target: { kind: 'ally', conditions: [{ alias: 'sisters_of_valhalla', role: 'attacker' }] },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 } },
            cri_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 } },
            ice_resist_up: { base: { milliPercentage: 1000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 } }
          }
        }
      }, {
        target: { kind: 'ally', conditions: ['defender'] },
        details: {
          target: {
            def_up: { base: { milliPercentage: 17000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 3 } },
            eva_up: { base: { milliPercentage: 17000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 3 } }
          }
        }
      }, {
        target: { kind: 'ally', conditions: [{ alias: 'sisters_of_valhalla', role: 'defender' }] },
        details: {
          target: {
            def_up: { base: { milliPercentage: 17000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 3 } },
            eva_up: { base: { milliPercentage: 17000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 3 } },
            ice_resist_up: { base: { milliPercentage: 1000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 } }
          }
        }
      }, {
        target: { kind: 'ally', conditions: ['supporter'] },
        details: {
          target: {
            acc_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 } },
            spd_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 } }
          }
        }
      }, {
        target: { kind: 'ally', conditions: [{ alias: 'sisters_of_valhalla', role: 'supporter' }] },
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
        target: { kind: 'ally' },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 7500 }, per_lv_up: { milliPercentage: 375 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 600 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 2500 }, per_lv_up: { milliPercentage: 125 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ tagged: 'attack_command_defence' }] } }],
        target: { kind: 'ally' },
        details: {
          target: {
            def_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } },
            damage_reduction_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ tagged: 'defense_command' }] } }],
        target: { kind: 'ally' },
        details: {
          target: {
            def_up: { base: { milliPercentage: 7500 }, per_lv_up: { milliPercentage: 375 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 2500 }, per_lv_up: { milliPercentage: 125 }, term: { for_rounds: 1 } },
            damage_reduction_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ tagged: 'defense_command_attack' }] } }],
        target: { kind: 'ally' },
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
        target: { kind: 'enemy' },
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
            heavy_type_damage_up: { base: { milliPercentage: 17000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'all_adjacent',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 1000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 1000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 1000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { in_squad: 7 } } }],
        target: { kind: 'ally' },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 1000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 1000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 1000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { in_squad: 8 } } }],
        target: { kind: 'ally' },
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
        target: { kind: 'ally' },
        details: {
          self: { atk_up: { base: { milliPercentage: 27000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } },
          target: {
            eva_up: { base: { milliPercentage: 32000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            heavy_type_damage_up: { base: { milliPercentage: 27000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
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
        target: { kind: 'enemy' },
        details: { target: { electric_resist_down: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 } } } }
      }, {
        conditions: [{ state: { self: [{ tagged: 'high_voltage' }] } }],
        target: { kind: 'enemy' },
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
        conditions: [{ state: { target: [{ affected: 'electric_resist_down' }] } }],
        target: { kind: 'enemy' },
        details: { target: { spd_down: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 3 } } } }
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
        conditions: [{ trigger: 'start_round', state: { squad: { num_of_units: { unit: 'ally', equal: 4 } } } }],
        details: { self: { cri_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: [{ type: 'light', role: 'defender' }, 'city_guard'] },
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
        target: { kind: 'ally' },
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
        scale_factor: { per_units: { type: 'squad', unit: 'city_guard' } },
        details: {
          self: {
            atk_up: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
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
        target: { kind: 'enemy' },
        details: {
          self: { tag_release: { tag: 'death_blow' } },
          target: { status_resist_down: { base: { milliPercentage: 17000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } } }
        }
      }, {
        conditions: [{ trigger: 'critical' }],
        target: { kind: 'enemy' },
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
        target: { kind: 'enemy' },
        details: {
          self: {
            ignore_protect: {},
            tag_release: { tag: 'death_blow' }
          },
          target: { fire_resist_down: { base: { milliPercentage: 22000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } } }
        }
      }, {
        conditions: [{ state: { target: [{ affected: 'ice_resist_down' }, { affected: 'electric_resist_down' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_fire_damage: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 } } } }
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
        conditions: [{ trigger: 'start_round', round: { at: 1 }, state: { self: [{ not_tagged: 'ash_kagura' }] } }],
        details: { self: { atk_up: { base: { milliPercentage: 24000 }, per_lv_up: { milliPercentage: 4000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', round: { at: 2 }, state: { self: [{ not_tagged: 'ash_kagura' }] } }],
        details: { self: { atk_up: { base: { milliPercentage: 18000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', round: { at: 3 }, state: { self: [{ not_tagged: 'ash_kagura' }] } }],
        details: { self: { atk_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', round: { at: 4 }, state: { self: [{ not_tagged: 'ash_kagura' }] } }],
        details: { self: { atk_up: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'be_killed' }],
        target: { kind: 'ally', conditions: [174] },
        details: { target: { atk_up: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 2 } } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [
          { trigger: 'start_wave' },
          { trigger: 'idle', state: { self: [{ tagged: 'full_proficiency' }], squad: { in_squad: 99 } } }
        ],
        details: { self: { tag_stack: { tag: 'death_blow', term: 'infinite', max_stack: 1, cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        details: { self: { spd_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        // FIXME: Add cannot_be_dispelled attribute
        details: { self: { light_type_damage_up: { tag: 'full_proficiency', base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: 'infinite' } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        details: { self: { atk_up: { tag: 'ash_kagura', milliPercentage: 60000, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'hit_active_1', state: { squad: { in_squad: 99 } } }],
        details: { self: { cooperative_attack: { unit: 99, active: 1, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'be_killed' }],
        target: { kind: 'ally', conditions: [99] },
        details: { target: { atk_up: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 2 } } } }
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
            light_type_damage_up: { base: { milliPercentage: 7000 }, per_lv_up: { milliPercentage: 2000 } },
            heavy_type_damage_up: { base: { milliPercentage: 14000 }, per_lv_up: { milliPercentage: 4000 } }
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
        target: { kind: 'enemy' },
        details: {
          self: { ignore_protect: {} },
          target: {
            immovable: { term: { for_rounds: 2 } },
            acc_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 10000 }, term: { for_rounds: 2 } },
            flying_type_damage_down: { base: { milliPercentage: 23000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 2 } },
            buff_removal: { effects: ['acc_up', 'flying_type_damage_up'], term: 'immediate' }
          }
        }
      }]
    }],
    passive: [{
      area: 'fixed_cross',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
        details: {
          target: {
            eva_up: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            light_type_damage_up: { base: { milliPercentage: 7000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            heavy_type_damage_up: { base: { milliPercentage: 17000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
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
        target: { kind: 'enemy' },
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
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ trigger: 'hit' }],
        details: {
          self: { spd_down: { base: { milliPercentage: 69000 }, per_lv_up: { milliPercentage: -1000 }, term: { for_rounds: 2 }, cannot_be_dispelled: true } },
          target: { damage_taken_increased: { base: { milliPercentage: 23000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 2 } } }
        }
      }, {
        conditions: [{ trigger: 'hit', state: { squad: { in_squad: 51 } } }],
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
        target: { kind: 'ally' },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 1000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['doom_bringer'] },
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
        target: { kind: 'enemy' },
        details: {
          self: { ignore_protect: {} },
          target: {
            def_down: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            acc_down: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { self: [{ tagged: 'overexcitement' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 22000 }, per_lv_up: { milliPercentage: 2000 } } } }
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
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: [{ type: 'light', role: 'defender' }, 'companion_series'] },
        details: { target: { follow_up_attack: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        details: { self: { eva_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ tagged: 'controlling_excitement' }] } }],
        details: { self: { eva_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } } } }
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
        target: { kind: 'enemy' },
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
        target: { kind: 'enemy' },
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
            ap_up: { base: { microValue: 100000 }, per_lv_up: { microValue: 100000 }, term: 'immediate' },
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
        target: { kind: 'ally' },
        details: { target: { reconnaissance: { term: 'infinite' } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
        details: {
          target: {
            eva_up: { base: { milliPercentage: 2000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            fire_resist_up: { base: { milliPercentage: 1500 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            ice_resist_up: { base: { milliPercentage: 1500 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            electric_resist_up: { base: { milliPercentage: 1500 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            damage_reduction_up: { base: { milliPercentage: 1000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ affected: 'atk_up' }, { affected: 'atk_down' }] } }],
        target: { kind: 'enemy' },
        details: { target: { atk_down: { base: { milliPercentage: 1000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ affected: 'eva_up' }, { affected: 'eva_down' }] } }],
        target: { kind: 'enemy' },
        details: { target: { eva_down: { base: { milliPercentage: 13000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ affected: 'fire_resist_up' }, { affected: 'fire_resist_down' }] } }],
        target: { kind: 'enemy' },
        details: { target: { fire_resist_down: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ affected: 'ice_resist_up' }, { affected: 'ice_resist_down' }] } }],
        target: { kind: 'enemy' },
        details: { target: { ice_resist_down: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ affected: 'electric_resist_up' }, { affected: 'electric_resist_down' }] } }],
        target: { kind: 'enemy' },
        details: { target: { electric_resist_down: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ affected: 'damage_taken_increased' }] } }],
        target: { kind: 'enemy' },
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
        target: { kind: 'enemy' },
        details: { target: { def_down: { base: { milliPercentage: 17000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 3 } } } }
      }, {
        conditions: [{ state: { self: [{ tagged: 'fury' }] } }],
        target: { kind: 'enemy' },
        details: {
          target: {
            buff_removal: { effect: 'damage_reduction_up', term: 'immediate' },
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
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ state: { self: [{ tagged: 'fury' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 26000 }, per_lv_up: { milliPercentage: 6000 } } } }
      }]
    }],
    passive: [{
      area: 'right',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        target: { kind: 'ally' },
        details: {
          target: {
            nullify_damage: { times: 2, term: { for_rounds: 99 } },
            damage_reduction_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 99 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
        details: { target: { target_protect: { term: { for_rounds: 1 }, cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ hp_greater_than: 25 }] } }],
        target: { kind: 'ally' },
        details: { self: { tag_stack: { tag: 'devotion', term: { for_rounds: 1 }, cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ hp_greater_than: 25 }] } }],
        target: { kind: 'ally', conditions: ['attacker', 'defender'] },
        details: { target: { atk_up: { base: { milliPercentage: 8000 }, per_lv_up: { milliPercentage: 8000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ hp_greater_than: 25 }] } }],
        target: { kind: 'ally', conditions: ['supporter'] },
        details: { target: { spd_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ hp_less_or_equal: 25 }] } }],
        target: { kind: 'ally' },
        details: {
          self: { tag_stack: { tag: 'fury', term: { for_rounds: 1 }, cannot_be_dispelled: true } },
          target: { def_up: { base: { milliPercentage: 8000 }, per_lv_up: { milliPercentage: 8000 }, term: { for_rounds: 1 } } }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: { self: { battle_continuation: { milliPercentage: 50000, times: 1, term: { for_rounds: 99 }, cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            def_up: { base: { milliPercentage: 28000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
            damage_reduction_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ tagged: 'devotion' }] } }],
        details: {
          self: {
            status_resist_up: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 }, cannot_be_dispelled: true },
            def_up: { base: { milliPercentage: 7000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 }, cannot_be_dispelled: true },
            damage_reduction_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 }, cannot_be_dispelled: true }
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
        conditions: [{ trigger: 'start_wave', state: { self: [{ affected: 'reconnaissance' }] } }],
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
        target: { kind: 'enemy' },
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
        target: { kind: 'ally_grid' },
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
        conditions: [{ trigger: 'start_wave', state: { self: [{ equipped: 'energy_shield' }, { equipped: 'enhanced_energy_shield' }] } }],
        details: { self: { ap_up: { base: { microValue: 600000 }, per_lv_up: { microValue: 100000 }, term: 'immediate' } } }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        scale_factor: { per_units: { type: 'enemy', variation: 'proportional' } },
        target: { kind: 'enemy' },
        details: { target: { atk_down: { base: { milliPercentage: 800 }, per_lv_up: { milliPercentage: 300 }, term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        target: { kind: 'ally', conditions: ['ags'] },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 17000 }, per_lv_up: { milliPercentage: 2000 }, term: 'infinite' },
            def_up: { base: { milliPercentage: 17000 }, per_lv_up: { milliPercentage: 2000 }, term: 'infinite' },
            spd_up: { base: { milliPercentage: 1000 }, per_lv_up: { milliPercentage: 1000 }, term: 'infinite' }
          }
        }
      }, {
        conditions: [{ trigger: 'start_wave', state: { squad: { in_squad: 117 } } }],
        target: { kind: 'ally', conditions: ['ags'] },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 7000 }, per_lv_up: { milliPercentage: 2000 }, term: 'infinite' },
            def_up: { base: { milliPercentage: 7000 }, per_lv_up: { milliPercentage: 2000 }, term: 'infinite' },
            spd_up: { base: { milliPercentage: 800 }, per_lv_up: { milliPercentage: 300 }, term: 'infinite' }
          }
        }
      }, {
        conditions: [{ trigger: 'idle' }],
        target: { kind: 'ally' },
        details: { target: { damage_reduction_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } } }
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
        target: { kind: 'enemy' },
        details: {
          self: { ignore_protect: {} },
          target: { fixed_damage: { base: { milliPercentage: 60000 }, per_lv_up: { milliPercentage: 10000 } } }
        }
      }, {
        target: { kind: 'enemy' },
        details: {
          target: {
            fixed_damage: { base: { milliPercentage: 14000 }, per_lv_up: { milliPercentage: 3000 }, rate: { milliPercentage: 50000 } },
            damage_taken_increased: { base: { milliPercentage: 26000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 }, rate: { milliPercentage: 40000 } },
            silenced: { rate: { milliPercentage: 30000 } },
          }
        }
      }, {
        conditions: [{ state: { target: [{ hp_greater_or_equal: 100 }] } }],
        target: { kind: 'enemy' },
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
        target: { kind: 'enemy' },
        details: {
          self: { ignore_protect: {} },
          target: {
            fixed_damage: { base: { milliPercentage: 90000 }, per_lv_up: { milliPercentage: 5000 } },
            push: { value: 1 }
          }
        }
      }, {
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: {
          target: {
            buff_removal: { effects: ['row_protect', 'column_protect', 'target_protect'], term: 'immediate' },
            eva_down: { base: { milliPercentage: 34000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 2 } },
            range_down: { value: 1, term: { for_rounds: 2 } }
          }
        }
      }]
    }],
    passive: [{
      area: 'fixed_all',
      equipment_effects: [{
        conditions: [{ trigger: 'start_wave', state: { squad: { num_of_units: { unit: 'light', greater_or_equal: 2 } } } }],
        target: { kind: 'ally', conditions: ['light'] },
        details: { target: { defense_penetration: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 99 }, cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_wave', state: { squad: { num_of_units: { unit: 'light', greater_or_equal: 2 } } } }],
        target: { kind: 'enemy', conditions: ['flying', 'heavy'] },
        details: { target: { damage_taken_increased: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 99 }, cannot_be_dispelled: true } } }
      }]
    }, {
      area: 'fixed_all',
      equipment_effects: [{
        conditions: [{ trigger: 'start_wave', state: { squad: { num_of_units: { unit: 'flying', greater_or_equal: 2 } } } }],
        target: { kind: 'ally', conditions: ['flying'] },
        details: {
          target: {
            range_up: { value: 1, term: { for_rounds: 99 }, cannot_be_dispelled: true },
            acc_up: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 99 }, cannot_be_dispelled: true }
          }
        }
      }, {
        conditions: [{ trigger: 'start_wave', state: { squad: { num_of_units: { unit: 'flying', greater_or_equal: 2 } } } }],
        target: { kind: 'enemy', conditions: ['light', 'heavy'] },
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
        conditions: [{ trigger: 'start_wave', state: { squad: { num_of_units: { unit: 'heavy', greater_or_equal: 1 } } } }],
        target: { kind: 'ally', conditions: ['heavy'] },
        details: {
          target: {
            ap_up: { base: { microValue: 1800000 }, per_lv_up: { microValue: 200000 }, term: 'immediate' },
            spd_up: { base: { milliPercentage: 7000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 99 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_wave', state: { squad: { num_of_units: { unit: 'heavy', greater_or_equal: 1 } } } }],
        target: { kind: 'enemy', conditions: ['light', 'flying'] },
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
        target: { kind: 'enemy' },
        details: { target: { acc_down: { base: { milliPercentage: 17000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } } } }
      }]
    }, {
      range: 3,
      cost: 10,
      area: 'fixed_all',
      effects: [{
        target: { kind: 'ally' },
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
        details: { self: { damage_reduction_up: { base: { milliPercentage: 43000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', round: { at: 2 } }],
        details: { self: { damage_reduction_up: { base: { milliPercentage: 32000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', round: { at: 3 } }],
        details: { self: { damage_reduction_up: { base: { milliPercentage: 21000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'be_hit' }],
        details: { self: { eva_up: { base: { milliPercentage: 1000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 99 }, max_stack: 3 } } }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { self: [{ not_equipped: ['fire_spray', 'frost_spray', 'shock_spray'] }] } }],
        target: { kind: 'enemy' },
        details: {
          target: {
            fire_resist_down: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            ice_resist_down: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            electric_resist_down: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ equipped: 'fire_spray' }] } }],
        target: { kind: 'enemy' },
        details: { target: { fire_resist_down: { base: { milliPercentage: 33000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ equipped: 'frost_spray' }] } }],
        target: { kind: 'enemy' },
        details: { target: { ice_resist_down: { base: { milliPercentage: 33000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ equipped: 'shock_spray' }] } }],
        target: { kind: 'enemy' },
        details: { target: { electric_resist_down: { base: { milliPercentage: 33000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: { self: { spd_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 3 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ tagged: 'light_of_sky' }] } }],
        target: { kind: 'ally' },
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
  189: {
    no: 189,
    active: [{
      damage_deal: {
        base: { milliPercentage: 165000 },
        per_lv_up: { milliPercentage: 15000 }
      },
      range: 3,
      cost: 6,
      area: 'single',
      effects: [{
        target: { kind: 'enemy' },
        details: { target: { stunned: { term: { for_rounds: 2 }, rate: 'constant' } } }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_damage: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 265000 },
        per_lv_up: { milliPercentage: 15000 }
      },
      range: 4,
      cost: 9,
      area: 'single_and_front_middle_explosion',
      effects: [{
        target: { kind: 'enemy' },
        details: {
          self: { ignore_protect: {} },
          target: { def_down: { base: { milliPercentage: 43000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 3 } } }
        }
      }, {
        conditions: [{ state: { squad: { in_squad: 84 } } }],
        details: { self: { cooperative_attack: { unit: 84, active: 2 } } }
      }, {
        conditions: [{ state: { squad: { in_squad: 119 } } }],
        details: { self: { cooperative_attack: { unit: 119, active: 1 } } }
      }, {
        conditions: [{ state: { squad: { in_squad: 120 } } }],
        details: { self: { cooperative_attack: { unit: 120, active: 2 } } }
      }, {
        conditions: [{ state: { squad: { in_squad: 122 } } }],
        details: { self: { cooperative_attack: { unit: 122, active: 2 } } }
      }, {
        conditions: [{ state: { squad: { in_squad: 133 } } }],
        details: { self: { cooperative_attack: { unit: 133, active: 2 } } }
      }, {
        conditions: [{ state: { squad: { in_squad: 137 } } }],
        details: { self: { cooperative_attack: { unit: 137, active: 2 } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        scale_factor: { per_units: { type: 'squad' } },
        details: {
          self: {
            atk_up: { base: { milliPercentage: 8000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 4300 }, per_lv_up: { milliPercentage: 300 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'tag_team',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 10500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'idle' }],
        target: { kind: 'ally' },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 21000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            spd_up: { base: { milliPercentage: 10500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            defense_penetration: { base: { milliPercentage: 21000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }, {
      area: 'tag_team',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: [84, 119, 120, 122, 133, 137, 189] },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 8000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 5250 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'idle' }],
        target: { kind: 'ally', conditions: [84, 119, 120, 122, 133, 137, 189] },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 10500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            spd_up: { base: { milliPercentage: 5250 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 2 } },
            defense_penetration: { base: { milliPercentage: 10500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
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
        target: { kind: 'enemy' },
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
        target: { kind: 'ally', conditions: ['attacker'] },
        details: { target: { atk_up: { base: { milliPercentage: 32000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } } } }
      }, {
        target: { kind: 'ally', conditions: ['defender'] },
        details: {
          target: {
            marked: { term: { for_rounds: 2 } },
            def_up: { base: { milliPercentage: 32000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } },
            eva_up: { base: { milliPercentage: 32000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        target: { kind: 'ally', conditions: ['supporter'] },
        details: { target: { ap_up: { base: { microValue: 2100000 }, per_lv_up: { microValue: 100000 }, term: 'immediate' } } }
      }]
    }],
    passive: [{
      area: 'line_adjacent',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['attacker'] },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 26000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 21000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{
          trigger: 'start_round',
          state: { target: [{ hp_greater_or_equal: 95 }] }
        }],
        target: { kind: 'ally', conditions: [{ type: 'light', role: 'attacker' }, { type: 'flying', role: 'attacker' }] },
        details: { target: { ignore_barrier_dr: { term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'front',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['defender'] },
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
        target: { kind: 'enemy' },
        details: { target: { acc_down: { base: { milliPercentage: 22000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } } } }
      }]
    }, {
      range: 6,
      cost: 8,
      area: 'fixed_all',
      effects: [{
        target: { kind: 'ally', conditions: ['flying'] },
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
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['flying'] },
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
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: [{ type: 'flying', role: 'supporter' }] },
        details: { target: { ap_up: { base: { microValue: 550000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' } } }
      }]
    }, {
      area: 'cross_adjacent_without_back',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['flying'] },
        details: {
          target: {
            light_type_damage_up: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            heavy_type_damage_up: { base: { milliPercentage: 27000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }]
  },
  192: {
    no: 192,
    active: [{
      damage_deal: {
        base: { milliPercentage: 210000 },
        per_lv_up: { milliPercentage: 10000 },
        attribute: 'fire'
      },
      range: 4,
      cost: 6,
      area: 'single',
      effects: [{
        target: { kind: 'enemy' },
        details: { target: { fixed_fire_damage_over_time: { base: { value: 230 }, per_lv_up: { value: 10 }, term: { for_rounds: 3 } } } }
      }, {
        conditions: [{ state: { squad: { in_squad: 42 } } }],
        details: { self: { cooperative_attack: { unit: 42, active: 2 } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 180000 },
        per_lv_up: { milliPercentage: 10000 },
        attribute: 'fire'
      },
      range:5,
      cost: 8,
      area: '2_x_2',
      effects: [{
        target: { kind: 'enemy' },
        details: { target: { fire_resist_down: { base: { milliPercentage: 26000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } } } }
      }]
    }],
    passive: [{
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { ice_resist_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        scale_factor: { per_units: { type: 'enemy', variation: 'proportional' } },
        details: { self: { atk_up: { base: { milliPercentage: 6200 }, per_lv_up: { milliPercentage: 200 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: [{ alias: 'anger_of_horde', except: 192 }] },
        details: { target: { follow_up_attack: { term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'enemy_killed' }],
        target: { kind: 'enemy' },
        details: { target: { fire_resist_down: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 }, max_stack: 6 } } }
      }]
    }]
  },
  193: {
    no: 193,
    active: [{
      damage_deal: {
        base: { milliPercentage: 55000 },
        per_lv_up: { milliPercentage: 5000 }
      },
      range: 3,
      cost: 6,
      area: '2_x_2',
      effects: [{
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: {
          target: {
            def_down: { tag: 'tenderizer', base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } },
            damage_taken_increased: { tag: 'tenderizer', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ tagged: 'caffeine_charged' }] } }],
        target: { kind: 'enemy' },
        details: {
          self: { tag_unstack: { tag: 'caffeine_charged', value: 1 } },
          target: {
            marked: { tag: 'tenderizer', term: { for_rounds: 2 } },
            immovable: { tag: 'tenderizer', term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { squad: { in_squad: 194 } } }],
        details: { self: { cooperative_attack: { unit: 194, active: 1 } } }
      }, {
        conditions: [{ state: { squad: { in_squad: 192 } } }],
        details: { self: { cooperative_attack: { unit: 192, active: 2 } } }
      }, {
        conditions: [{ trigger: 'use_this_active' }],
        details: { self: { acc_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 20000 } } } }
      }]
    }, {
      range: 6,
      cost: 9,
      area: 'single',
      effects: [{
        conditions: [{ state: { self: [{ affected: 'atk_up' }] } }],
        target: { kind: 'ally', conditions: [{ not_alias: 'anger_of_horde' }] },
        details: {
          self: { buff_removal: { effect: 'atk_up', term: 'immediate' } },
          target: { atk_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: 'infinite', times: 2 } }
        }
      }, {
        conditions: [{ state: { self: [{ affected: 'acc_up' }] } }],
        target: { kind: 'ally', conditions: [{ not_alias: 'anger_of_horde' }] },
        details: {
          self: { buff_removal: { effect: 'acc_up', term: 'immediate' } },
          target: { acc_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: 'infinite', times: 2 } }
        }
      }, {
        conditions: [{ state: { self: [{ affected: 'cri_up' }] } }],
        target: { kind: 'ally', conditions: [{ not_alias: 'anger_of_horde' }] },
        details: {
          self: { buff_removal: { effect: 'cri_up', term: 'immediate' } },
          target: { cri_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: 'infinite', times: 2 } }
        }
      }, {
        conditions: [{ state: { self: [{ affected: 'atk_up' }] } }],
        target: { kind: 'ally', conditions: ['anger_of_horde'] },
        details: {
          self: { buff_removal: { effect: 'atk_up', term: 'immediate' } },
          target: { atk_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } } }
        }
      }, {
        conditions: [{ state: { self: [{ affected: 'acc_up' }] } }],
        target: { kind: 'ally', conditions: ['anger_of_horde'] },
        details: {
          self: { buff_removal: { effect: 'acc_up', term: 'immediate' } },
          target: { acc_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } } }
        }
      }, {
        conditions: [{ state: { self: [{ affected: 'cri_up' }] } }],
        target: { kind: 'ally', conditions: ['anger_of_horde'] },
        details: {
          self: { buff_removal: { effect: 'cri_up', term: 'immediate' } },
          target: { cri_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } } }
        }
      }, {
        conditions: [{ state: { self: [{ tagged: 'nicotine_charged' }] } }],
        target: { kind: 'ally' },
        details: {
          self: { tag_unstack: { tag: 'nicotine_charged', value: 1 } },
          target: {
            set_ap: { base: { microValue: 10000000 }, per_lv_up: { microValue: 200000 }, term: 'immediate' },
            range_up: { value: 2, term: { for_rounds: 2 } }
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
            status_resist_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 2500 }, term: 'infinite', cannot_be_dispelled: true },
            barrier: { base: { value: 500 }, per_lv_up: { value: 100 }, term: 'infinite', cannot_be_dispelled: true }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'follow_up_attack' }] } }],
        details: {
          self: {
            buff_removal: { effect: 'follow_up_attack', term: 'immediate' },
            ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 100000 }, term: 'immediate' }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'action_count_up' }] } }],
        details: {
          self: {
            buff_removal: { effect: 'action_count_up', term: 'immediate' },
            ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 100000 }, term: 'immediate' }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'action_count_down' }] } }],
        details: {
          self: {
            debuff_removal: { effect: 'action_count_down', term: 'immediate' },
            ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 100000 }, term: 'immediate' }
          }
        }
      }]
    }, {
      area: 'all_adjacent',
      effects: [{
        conditions: [{ trigger: 'start_wave' }, { trigger: 'idle', state: { self: [{ not_tagged: 'caffeine_charged' }] } }],
        details: { self: { spd_up: { tag: 'caffeine_charged', base: { milliPercentage: 4000 }, per_lv_up: { milliPercentage: 400 }, term: 'infinite', times: 2, cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_wave' }, { trigger: 'idle', state: { self: [{ not_tagged: 'nicotine_charged' }] } }],
        details: { self: { spd_up: { tag: 'nicotine_charged', base: { milliPercentage: 4000 }, per_lv_up: { milliPercentage: 400 }, term: 'infinite', times: 2, cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'idle', state: { self: [{ not_tagged: 'caffeine_charged' }, { not_tagged: 'nicotine_charged' }] } }],
        target: { kind: 'ally' },
        details: { target: { spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } } } }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'enemy_killed' }],
        target: { kind: 'ally' },
        details: {
          self: {
            atk_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            acc_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            cri_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
          },
          target: {
            light_type_damage_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 }, max_stack: 1 },
            heavy_type_damage_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 }, max_stack: 1 }
          }
        }
      }, {
        conditions: [{ trigger: 'enemy_killed' }],
        target: { kind: 'enemy' },
        details: {
          target: {
            acc_down: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 }, max_stack: 1 },
            damage_multiplier_down: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 }, max_stack: 1 }
          }
        }
      }, {
        conditions: [{ trigger: 'enemy_killed', state: { target: [{ tagged: 'tenderizer' }] } }],
        target: { kind: 'enemy' },
        details: {
          target: {
            acc_down: { base: { milliPercentage: 7500 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 2 }, max_stack: 1 },
            damage_multiplier_down: { base: { milliPercentage: 2500 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 2 }, max_stack: 1 }
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
        scale_factor: { per_units: { type: 'squad', unit: 'anger_of_horde' } },
        target: { kind: 'enemy' },
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
        scale_factor: { per_units: { type: 'squad', unit: 'anger_of_horde' } },
        target: { kind: 'enemy' },
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
        scale_factor: { per_units: { type: 'squad', unit: 'anger_of_horde' } },
        target: { kind: 'ally' },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 5500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 2100 }, per_lv_up: { milliPercentage: 100 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }]
  },
  200: {
    no: 200,
    active: [{
      damage_deal: {
        base: { milliPercentage: 160000 },
        per_lv_up: { milliPercentage: 10000 }
      },
      range: 6,
      cost: 5,
      area: 'line_middle_explosion',
      effects: [{
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: {
          target: {
            atk_down: { base: { milliPercentage: 10500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            def_down: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ tagged: 'output_limit_release' }] } }],
        details: { self: { ignore_barrier_dr: { term: 'immediate' } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 230000 },
        per_lv_up: { milliPercentage: 10000 }
      },
      range: 6,
      cost: 10,
      area: 'all_strong_explosion',
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ trigger: 'hit', state: { target: [{ status_less_than_self: { status: 'atk' } }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 22000 }, per_lv_up: { milliPercentage: 2000 }, term: 'immediate' } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: { self: { prevents_effect: { effects: ['ap_down', 'provoked'], term: 'infinite', cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'hit' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 } },
            defense_penetration: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 } }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { spd_up: { tag: 'output_increase', base: { milliPercentage: 5500 }, per_lv_up: { milliPercentage: 500 }, term: 'infinite' } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { self: [{ stack: { tag: 'output_increase', greater_or_equal: 3 } }] } }],
        details: { self: { action_count_up: { tag: 'output_limit_release', term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'hit_active_1', state: { self: [{ tagged: 'output_limit_release' }] } }],
        details: { self: { cooperative_attack: { unit: 200, active: 2, term: 'immediate' } } }
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
        target: { kind: 'enemy' },
        details: {
          target: {
            provoked: { term: { for_rounds: 2 } },
            atk_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            acc_down: { base: { milliPercentage: 22000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ affected: 'marked' }, { affected: 'immovable' }] } }],
        target: { kind: 'enemy' },
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
        target: { kind: 'enemy' },
        details: {
          target: {
            eva_down: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 3 } },
            stunned: { rate: { milliPercentage: 25000 } }
          }
        }
      }, {
        conditions: [{ state: { target: [{ affected: 'marked' }, { affected: 'immovable' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 31500 }, per_lv_up: { milliPercentage: 1500 } } } }
      }, {
        conditions: [{ state: { target: [{ tagged: 'wet' }] } }],
        target: { kind: 'enemy' },
        details: { self: { activation_rate_percentage_up: { effect: 'stunned', milliPercentage: 75000 } } }
      }]
    }],
    passive: [{
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['bioroid'] },
        details: { target: { atk_up: { base: { milliPercentage: 10500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['ags'] },
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
        target: { kind: 'ally' },
        details: { target: { ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
        details: {
          target: {
            acc_up: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: [{ type: 'flying', role: 'attacker' }, { type: 'flying', role: 'supporter' }] },
        details: { target: { target_protect: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ equipped: 'output_limit_release_device' }, { equipped: 'enhanced_output_limit_release_device' }, { equipped: 'hq1_commander_os' }] } }],
        details: {
          self: {
            column_protect: { term: { for_rounds: 1 } },
            eva_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 4000 }, term: { for_rounds: 1 } }
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
        target: { kind: 'ally' },
        details: {
          self: { set_ap: { microValue: 0 } },
          target: { nullify_damage: { term: { for_rounds: 2 }, times: 1 } }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ equipped: 'defense_os' }, { equipped: 'hq1_commander_os' }] } }],
        details: {
          self: {
            row_protect: { term: { for_rounds: 1 } },
            damage_reduction_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }]
  },
  202: {
    no: 202,
    active: [{
      damage_deal: {
        base: { milliPercentage: 182000 },
        per_lv_up: { milliPercentage: 16000 }
      },
      range: 4,
      cost: 9,
      area: 'line',
      effects: [{
        conditions: [{ state: { target: [{ affected: 'marked' }, { affected: 'immovable' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 241000 },
        per_lv_up: { milliPercentage: 21500 },
        effective: 'next_round'
      },
      range: 6,
      cost: 10,
      area: 'cross_strong_explosion',
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ state: { target: [{ affected: 'marked' }, { affected: 'immovable' }] } }],
        target: { kind: 'enemy' },
        details: {
          self: {
            ignore_barrier_dr: {},
            additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } }
          },
          target: { buff_removal: { effect: 'counterattack' } }
        }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { light_type_damage_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } } } }
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
        target: { kind: 'enemy' },
        details: { target: { stunned: { rate: { milliPercentage: 25000 } } } }
      }, {
        conditions: [{ trigger: 'critical' }],
        target: { kind: 'enemy' },
        details: {
          self: {
            additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } },
            activation_rate_percentage_up: { effect: 'stunned', milliPercentage: 25000 }
          },
          target: { buff_removal: { effect: 'damage_reduction_up' } }
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
        target: { kind: 'enemy' },
        details: {
          target: {
            buff_removal: { effects: ['row_protect', 'column_protect'] },
            push: { value: 1 }
          }
        }
      }, {
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
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
        details: { self: { damage_reduction_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'range_up' }] } }],
        details: {
          self: {
            buff_removal: { effect: 'range_up', term: 'immediate' },
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
        base: { milliPercentage: 127500 },
        per_lv_up: { milliPercentage: 12500 }
      },
      range: 4,
      cost: 4,
      area: 'single',
      effects: [{
        conditions: [{ state: { target: [{ affected: 'def_down' }, { affected: 'eva_down' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 22000 }, per_lv_up: { milliPercentage: 2000 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 11000 },
        per_lv_up: { milliPercentage: 1000 }
      },
      range: 4,
      cost: 7,
      area: 'single',
      effects: [{
        target: { kind: 'enemy' },
        details: {
          target: {
            def_down: { base: { milliPercentage: 45000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: { 1: 2, 10: 3 } } },
            buff_removal: { effects: ['def_up', 'damage_reduction_up'] }
          }
        }
      }]
    }],
    passive: [{
      area: 'line',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
        details: {
          target: {
            acc_up: { base: { milliPercentage: 22500 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ grid: 'front_line' }] } }],
        target: { kind: 'ally' },
        details: { target: { damage_reduction_up: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ grid: 'mid_line' }] } }],
        target: { kind: 'ally' },
        details: { target: { defense_penetration: { base: { milliPercentage: 16500 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ grid: 'back_line' }] } }],
        target: { kind: 'ally' },
        details: { target: { cri_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'cross',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        scale_factor: { per_units: { type: 'squad', unit: 'bioroid' } },
        target: { kind: 'ally' },
        details: { target: { area_damage_dispersion_up: { base: { milliPercentage: 5500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { num_of_units: { unit: 'bioroid', greater_or_equal: 3 } } } }],
        target: { kind: 'ally' },
        details: { target: { all_buff_removal_resist_up: { base: { milliPercentage: 16500 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        scale_factor: { per_units: { type: 'squad', unit: 'ags' } },
        target: { kind: 'ally' },
        details: { target: { status_resist_up: { base: { milliPercentage: 5500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { num_of_units: { unit: 'ags', greater_or_equal: 3 } } } }],
        target: { kind: 'ally' },
        details: {
          target: {
            fire_resist_up: { base: { milliPercentage: 16500 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            ice_resist_up: { base: { milliPercentage: 16500 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            electric_resist_up: { base: { milliPercentage: 16500 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { ignore_protect: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ affected: 'ignore_protect' }] } }],
        target: { kind: 'enemy' },
        details: { target: { damage_taken_increased: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        scale_factor: { per_units: { type: 'squad', unit: 'cross_adjacent' } },
        target: { kind: 'ally' },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 2750 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } },
            damage_multiplier_up: { base: { milliPercentage: 2750 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { num_of_units: { unit: 'cross_adjacent', greater_or_equal: 3 } } } }],
        target: { kind: 'ally' },
        details: { target: { action_count_up: { term: { for_rounds: 1 } } } }
      }]
    }]
  },
  205: {
    no: 205,
    active: [{
      damage_deal: {
        base: { milliPercentage: 130000 },
        per_lv_up: { milliPercentage: 10000 }
      },
      range: 3,
      cost: 5,
      area: 'single_and_front',
      effects: [{
        target: { kind: 'enemy' },
        details: {
          self: { defense_penetration: { base: { milliPercentage: 32000 }, per_lv_up: { milliPercentage: 2000 }, term: 'immediate' } },
          target: { acc_down: { base: { milliPercentage: 33000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 2 } } }
        }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 87000 },
        per_lv_up: { milliPercentage: 7000 }
      },
      range: 6,
      cost: 8,
      area: 'cross',
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: {
          target: {
            def_down: { base: { milliPercentage: 43000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 2 } },
            buff_removal: { effects: ['target_protect', 'column_protect', 'row_protect'], term: 'immediate' }
          }
        }
      }]
    }],
    passive: [{
      area: 'cross',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 21000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['smart_enjoy'] },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 8000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 10500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'cross',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
        details: {
          target: {
            eva_up: { base: { milliPercentage: 26500 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 5500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            fire_resist_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            ice_resist_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            electric_resist_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['smart_enjoy'] },
        details: {
          target: {
            eva_up: { base: { milliPercentage: 13250 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 2750 }, per_lv_up: { milliPercentage: 250 }, term: { for_rounds: 1 } },
            fire_resist_up: { base: { milliPercentage: 5500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            ice_resist_up: { base: { milliPercentage: 5500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            electric_resist_up: { base: { milliPercentage: 5500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }]
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
        target: { kind: 'enemy' },
        details: {
          self: { additional_damage: { base: { milliPercentage: 48000 }, per_lv_up: { milliPercentage: 3000 } } },
          target: { buff_removal: { effect: 'counterattack' } }
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
        target: { kind: 'enemy' },
        details: { target: { buff_removal: { effect: 'counterattack' } } }
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
  208: {
    no: 208,
    active: [{
      damage_deal: { milliPercentage: 1000 },
      range: 4,
      cost: 5,
      area: 'single',
      effects: [{
        target: { kind: 'enemy' },
        details: {
          self: { ignore_protect: {} },
          target: {
            buff_removal: { effect: 'eva_up', term: 'immediate' },
            eva_down: { tag: 'you_are_already_my_fan', base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 4000 }, term: { for_rounds: 3 } }
          }
        }
      }, {
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: {
          target: {
            buff_removal: { effect: 'counterattack', term: 'immediate' },
            pull: { tag: 'charmed', value: 1, term: { for_rounds: 3 }, max_stack: 1 }
          }
        }
      }]
    }, {
      range: 6,
      cost: 10,
      area: 'all_adjacent',
      effects: [{
        target: { kind: 'ally' },
        details: {
          self: { atk_down: { tag: 'vocal_nodules', milliPercentage: 40000, cannot_be_dispelled: true } },
          target: { atk_value_up_by_unit_value: { unit: 208, base: { milliPercentage: 3000 }, per_lv_up: { milliPercentage: 200 }, term: { for_rounds: 2 } } }
        }
      }, {
        conditions: [{ trigger: 'start_round' }, { trigger: 'use_any_active' }],
        details: { self: { buff_removal: { effect: 'atk_value_up_by_unit_value', term: 'immediate' } } }
      }]
    }],
    passive: [{
      area: 'all_adjacent',
      effects: [{
        conditions: [{ trigger: 'start_wave', state: { target: [{ status_less_than_self: { status: 'spd' } }] } }],
        target: { kind: 'ally' },
        details: { target: { ap_up: { base: { microValue: 1500000 }, per_lv_up: { microValue: 150000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        details: { self: { prevents_effect: { effects: ['atk_down', 'def_down', 'ap_down'], term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['attacker'] },
        details: { target: { prevents_effect: { effect: 'atk_down', term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['defender'] },
        details: { target: { prevents_effect: { effect: 'def_down', term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['supporter'] },
        details: { target: { prevents_effect: { effect: 'ap_down', term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { atk_up: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 }, cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'enemy_killed' }],
        details: { self: { effect_removal: { tag: 'vocal_nodules', effect: 'atk_down' } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ not_tagged: 'vocal_nodules' }] } }],
        details: { self: { spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ stack: { tag: 'you_are_already_my_fan', equal: 1 }, grid: 'front_line' }] } }],
        target: { kind: 'enemy' },
        details: { target: { spd_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 }, cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ stack: { tag: 'you_are_already_my_fan', equal: 1 }, grid: 'mid_line' }] } }],
        target: { kind: 'enemy' },
        details: { target: { spd_down: { base: { milliPercentage: 7500 }, per_lv_up: { milliPercentage: 750 }, term: { for_rounds: 1 }, cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ stack: { tag: 'you_are_already_my_fan', equal: 1 }, grid: 'back_line' }] } }],
        target: { kind: 'enemy' },
        details: { target: { spd_down: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 }, cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ stack: { tag: 'you_are_already_my_fan', equal: 2 }, grid: 'front_line' }] } }],
        target: { kind: 'enemy' },
        details: { target: { damage_taken_increased: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 }, cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ stack: { tag: 'you_are_already_my_fan', equal: 2 }, grid: 'mid_line' }] } }],
        target: { kind: 'enemy' },
        details: { target: { damage_taken_increased: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 }, cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ stack: { tag: 'you_are_already_my_fan', equal: 2 }, grid: 'back_line' }] } }],
        target: { kind: 'enemy' },
        details: { target: { damage_taken_increased: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 }, cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ stack: { tag: 'you_are_already_my_fan', equal: 3 }, grid: 'front_line' }] } }],
        target: { kind: 'enemy' },
        details: {
          target: {
            all_buff_blocking: { term: { for_rounds: 1 }, cannot_be_dispelled: true },
            stunned: { term: { for_rounds: 1 }, cannot_be_dispelled: true }
          }
        }
      }]
    }]
  },
  209: {
    no: 209,
    active: [{
      damage_deal: {
        milliPercentage: 10000
      },
      range: 4,
      cost: 7,
      area: 'line_toward_front_greatly_attenuate',
      effects: [{
        target: { kind: 'enemy' },
        details: {
          self: { ignore_protect: {} },
          target: {
            acc_down: { base: { milliPercentage: 32000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } },
            buff_removal: { effect: 'acc_up', term: 'immediate' }
          }
        }
      }]
    }, {
      range: 6,
      cost: 7,
      area: 'single',
      effects: [{
        target: { kind: 'ally' },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 32000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 }, max_stack: 1 },
            def_up: { base: { milliPercentage: 32000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 }, max_stack: 1 },
            eva_up: { base: { milliPercentage: 32000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 }, max_stack: 1 },
            spd_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 }, max_stack: 1 },
            defense_penetration: { base: { milliPercentage: 25600 }, per_lv_up: { milliPercentage: 1600 }, term: { for_rounds: 2 }, max_stack: 1 }
          }
        }
      }]
    }],
    passive: [{
      area: 'all_forward',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        target: { kind: 'ally' },
        details: { target: { spd_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
        details: { target: { prevents_effect: { effects: ['eva_down', 'spd_down'], term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: { self: { battle_continuation: { base: { milliPercentage: 53000 }, per_lv_up: { milliPercentage: 3000 }, term: 'infinite', cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        details: { self: { all_debuff_removal: { term: 'immediate' } } }
      }]
    }]
  },
  210: {
    no: 210,
    active: [{
      damage_deal: {
        base: { milliPercentage: 110000 },
        per_lv_up: { milliPercentage: 10000 }
      },
      range: 2,
      cost: 7,
      area: 'line',
      effects: [{
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_damage: { base: { milliPercentage: 48000 }, per_lv_up: { milliPercentage: 3000 } } } }
      }, {
        conditions: [{ trigger: 'hit', state: { target: [{ tagged: 'smooth' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 48000 }, per_lv_up: { milliPercentage: 3000 } } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 75000 },
        per_lv_up: { milliPercentage: 5000 }
      },
      range: 4,
      cost: 6,
      area: 'line',
      effects: [{
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: {
          self: { range_up: { value: 2, term: { for_rounds: 2 } } },
          target: {
            atk_down: { tag: 'smooth', base: { milliPercentage: 21000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            def_down: { tag: 'smooth', base: { milliPercentage: 48000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 2 } }
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
            acc_up: { base: { milliPercentage: 55000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'cross_adjacent_without_back',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 5500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 3200 }, per_lv_up: { milliPercentage: 200 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['attacker'] },
        details: { target: { follow_up_attack: { term: { for_rounds: 1 } } } }
      }]
    }]
  },
  211: {
    no: 211,
    active: [{
      damage_deal: {
        base: { milliPercentage: 55000 },
        per_lv_up: { milliPercentage: 5000 }
      },
      range: 6,
      cost: 4,
      area: 'single',
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: {
          target: {
            fixed_damage: { base: { milliPercentage: 60000 }, per_lv_up: { milliPercentage: 10000 }, term: 'immediate' },
            all_buff_blocking: { term: { for_rounds: 2 } }
          }
        }
      }]
    }, {
      range: 6,
      cost: 9,
      area: 'fixed_all',
      effects: [{
        target: { kind: 'ally' },
        details: { target: { atk_value_up_by_unit_value: { unit: 211, base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } } } }
      }]
    }],
    passive: [{
      area: 'fixed_all',
      equipment_effects: [{
        conditions: [{ trigger: 'start_wave', state: { squad: { num_of_units: { unit: 'flying', less_or_equal: 2 } } } }],
        target: { kind: 'ally' },
        details: {
          target: {
            damage_multiplier_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 99 } },
            cri_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 99 } }
          }
        }
      }]
    }, {
      area: 'fixed_all',
      equipment_effects: [{
        conditions: [{ trigger: 'start_wave', state: { squad: { num_of_units: { unit: 'heavy', less_or_equal: 2 } } } }],
        target: { kind: 'ally' },
        details: {
          target: {
            atk_value_up: { base: { milliValue: 150000 }, per_lv_up: { milliValue: 10000 }, term: { for_rounds: 99 } },
            def_value_up: { base: { milliValue: 150000 }, per_lv_up: { milliValue: 10000 }, term: { for_rounds: 99 } }
          }
        }
      }]
    }, {
      area: 'fixed_all',
      equipment_effects: [{
        conditions: [{ trigger: 'start_wave', state: { squad: { num_of_units: { unit: 'light', less_or_equal: 1 } } } }],
        target: { kind: 'ally' },
        details: {
          target: {
            acc_up: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 99 } },
            range_up: { value: { 1: 1, 10: 2 }, term: { for_rounds: 99 } }
          }
        }
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
        target: { kind: 'enemy' },
        details: {
          target: {
            marked: { term: { for_rounds: 2 } },
            eva_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'critical', state: { self: [{ stack: { tag: 'tactical_data_link', greater_or_equal: 2 } }] } }],
        target: { kind: 'enemy' },
        details: { target: { acc_down: { milliPercentage: 25000, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ trigger: 'critical', state: { self: [{ stack: { tag: 'tactical_data_link', greater_or_equal: 3 } }] } }],
        target: { kind: 'enemy' },
        details: { target: { all_buff_removal: {} } }
      }]
    }, {
      range: 6,
      cost: 6,
      area: 'single',
      effects: [{
        target: { kind: 'ally', conditions: ['bioroid'] },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            spd_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        target: { kind: 'ally', conditions: ['ags'] },
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
        conditions: [{ trigger: 'start_wave' }],
        target: { kind: 'ally', conditions: [{ alias: 'spartan_series', except: 215 }] },
        details: { target: { atk_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: 'infinite', cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: [{ alias: 'spartan_series', except: 215 }] },
        details: {
          target: {
            follow_up_attack: { term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            damage_reduction_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
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
        target: { kind: 'enemy' },
        details: {
          target: {
            atk_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            cri_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'critical', state: { self: [{ stack: { tag: 'tactical_data_link', greater_or_equal: 1 } }] } }],
        target: { kind: 'enemy' },
        details: {
          self: { tag_release: { tag: 'tactical_data_link' } },
          target: { def_down: { milliPercentage: 25000, term: { for_rounds: 2 } } }
        }
      }, {
        conditions: [{ trigger: 'critical', state: { self: [{ stack: { tag: 'tactical_data_link', greater_or_equal: 2 } }] } }],
        target: { kind: 'enemy' },
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
        target: { kind: 'enemy' },
        details: {
          target: {
            acc_down: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 1750 }, term: { for_rounds: 2 } },
            ap_down: { base: { microValue: 1000000 }, per_lv_up: { microValue: 50000 } },
            buff_removal: { effect: 'acc_up' }
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
        conditions: [{ trigger: 'start_round' }, { trigger: 'attack' }],
        target: { kind: 'ally', conditions: ['ags'] },
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
        conditions: [{ state: { target: [{ affected: 'eva_down' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } } }
      }, {
        conditions: [{ trigger: 'critical', state: { self: [{ stack: { tag: 'tactical_data_link', greater_or_equal: 1 } }] } }],
        target: { kind: 'enemy' },
        details: {
          self: { tag_release: { tag: 'tactical_data_link' } },
          target: { spd_down: { milliPercentage: 15000, term: { for_rounds: 2 } } }
        }
      }, {
        conditions: [{ trigger: 'critical', state: { self: [{ stack: { tag: 'tactical_data_link', greater_or_equal: 2 } }] } }],
        target: { kind: 'enemy' },
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
        conditions: [{ state: { target: [{ affected: 'marked' }] } }],
        target: { kind: 'enemy' },
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
        conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'follow_up_attack' }] } }],
        details: {
          self: {
            atk_up: { tag: 'command_induction', base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            cri_up: { tag: 'command_induction', base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            acc_up: { tag: 'command_induction', base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'follow_up_attack' }], squad: { in_squad: 215 } } }],
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
        target: { kind: 'enemy' },
        details: {
          self: { ignore_protect: {} },
          target: {
            eva_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } },
            ap_down: { base: { microValue: 400000 }, per_lv_up: { microValue: 20000 }, term: 'immediate' }
          }
        }
      }, {
        conditions: [{ state: { target: [{ affected: 'marked' }, { affected: 'immovable' }] } }],
        target: { kind: 'enemy' },
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
        target: { kind: 'enemy' },
        details: {
          self: { flying_type_damage_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 } } },
          target: {
            eva_down: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } },
            ap_down: { base: { microValue: 600000 }, per_lv_up: { microValue: 30000 }, term: 'immediate' }
          }
        }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_damage: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 } } } }
      }, {
        conditions: [{ state: { self: [{ stack: { tag: 'energy_convert', greater_or_equal: 2 } }] } }],
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
        target: { kind: 'ally' },
        details: {
          self: { eva_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 4000 }, term: { for_rounds: 1 } } },
          target: {
            eva_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 4000 }, term: 'infinite', max_stack: 1, times: 1 },
            counterattack: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 5000 }, term: 'infinite', max_stack: 1, times: 1 }
          }
        }
      }, {
        conditions: [{ trigger: 'be_attacked' }],
        details: { self: { counterattack: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 5000 }, term: 'immediate' } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            atk_up: { tag: 'energy_convert', base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2500 }, term: 'infinite', max_stack: 2 },
            electric_resist_up: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ stack: { tag: 'energy_convert', greater_or_equal: 2 } }] } }],
        details: { self: { spd_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'hit_active_1' }],
        // TODO: per: { base: { milliPercentage: 3000 }, per_lv_up: { milliPercentage: 500 } } && enemy > 2
        scale_factor: { per_units: { type: 'enemy', variation: 'proportional' } },
        details: { self: { additional_electric_damage: { base: { milliPercentage: 23000 }, per_lv_up: { milliPercentage: 3000 } } } }
      }, {
        conditions: [{ trigger: 'hit_active_2' }],
        // TODO: per: { base: { milliPercentage: 3500 }, per_lv_up: { milliPercentage: 1000 } }
        scale_factor: { per_units: { type: 'enemy', variation: 'inversely_proportional' } },
        details: { self: { additional_electric_damage: { base: { milliPercentage: 28000 }, per_lv_up: { milliPercentage: 8000 } } } }
      }]
    }]
  },
  222: {
    no: 222,
    active: [{
      hull_down_mode: {
        damage_deal: {
          base: { milliPercentage: 117000 },
          per_lv_up: { milliPercentage: 10000 }
        },
        range: 3,
        cost: 5,
        area: 'single',
        effects: [{
          conditions: [
            { trigger: 'hit' },
            { trigger: 'attack', state: { self: [{ rank_greater_or_equal: 's' }], target: [{ unit: 'flying' }] } }
          ],
          target: { kind: 'enemy' },
          details: {
            target: {
              marked: { term: { for_rounds: 2 } },
              atk_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
              cri_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
            }
          }
        }]
      },
      turret_down_mode: {
        damage_deal: {
          base: { milliPercentage: 127000 },
          per_lv_up: { milliPercentage: 11000 }
        },
        range: 4,
        cost: 5,
        area: 'single',
        effects: [{
          conditions: [
            { trigger: 'hit' },
            { trigger: 'attack', state: { self: [{ rank_greater_or_equal: 's' }], target: [{ unit: 'flying' }] } }
          ],
          target: { kind: 'enemy' },
          details: {
            target: {
              provoked: { term: { for_rounds: 2 } },
              eva_down: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } },
              buff_removal: { effect: 'eva_up', term: 'immediate' }
            }
          }
        }, {
          conditions: [{ trigger: 'use_this_active' }],
          details: { self: { acc_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 5000 }, term: 'immediate' } } }
        }]
      }
    }, {
      hull_down_mode: {
        damage_deal: {
          base: { milliPercentage: 190500 },
          per_lv_up: { milliPercentage: 16500 }
        },
        range: 3,
        cost: 8,
        area: 'single',
        effects: [{
          conditions: [
            { trigger: 'hit' },
            { trigger: 'attack', state: { self: [{ rank_greater_or_equal: 's' }], target: [{ unit: 'flying' }] } }
          ],
          target: { kind: 'enemy' },
          details: {
            target: {
              marked: { term: { for_rounds: 2 } },
              damage_taken_increased: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
              buff_removal: { effect: 'damage_reduction_up', term: 'immediate' }
            }
          }
        }]
      },
      turret_down_mode: {
        damage_deal: {
          base: { milliPercentage: 122500 },
          per_lv_up: { milliPercentage: 10500 }
        },
        range: 3,
        cost: 8,
        area: 'fan_shape_strong_explosion',
        effects: [{
          conditions: [
            { trigger: 'hit' },
            { trigger: 'attack', state: { self: [{ rank_greater_or_equal: 's' }], target: [{ unit: 'flying' }] } }
          ],
          target: { kind: 'enemy' },
          details: {
            target: {
              provoked: { term: { for_rounds: 2 } },
              spd_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
              ap_down: { base: { microValue: 550000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' }
            }
          }
        }, {
          conditions: [{ trigger: 'use_this_active' }],
          details: { self: { acc_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 5000 }, term: 'immediate' } } }
        }]
      }
    }],
    passive: [{
      hull_down_mode: {
        area: 'all_backward_with_self',
        effects: [{
          conditions: [{ trigger: 'start_round' }],
          target: { kind: 'ally', conditions: ['attacker', 'supporter'] },
          details: { target: { target_protect: { term: { for_rounds: 1 } } } }
        }, {
          conditions: [{ trigger: 'start_round' }],
          details: {
            self: {
              def_up: { base: { milliPercentage: 100000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } },
              acc_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } }
            }
          }
        }, {
          conditions: [{ trigger: 'idle' }],
          details: {
            self: {
              form_change: { form: 'turret_down_mode' },
              damage_reduction_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
              row_protect: { term: { for_rounds: 1 } },
            }
          }
        }]
      },
      turret_down_mode: {
        area: 'all_backward_with_self',
        effects:[{
          conditions: [{ trigger: 'start_round' }],
          target: { kind: 'ally', conditions: ['attacker', 'supporter'] },
          details: { target: { target_protect: { term: { for_rounds: 1 } } } }
        }, {
          conditions: [{ trigger: 'start_round' }],
          details: {
            self: {
              def_up: { base: { milliPercentage: 70000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } },
              damage_reduction_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
              row_protect: { term: { for_rounds: 1 } },
              immovable: { term: { for_rounds: 1 }, cannot_be_dispelled: true }
            }
          }
        }, {
          conditions: [{ trigger: 'be_hit' }],
          details: { self: { minimize_damage: { term: 'immediate', rate: 'rarely' } } }
        }, {
          conditions: [{ trigger: 'idle' }],
          details: {
            self: {
              form_change: { form: 'hull_down_mode' },
              acc_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } }
            }
          }
        }]
      }
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
        details: { target: { flying_type_damage_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'be_hit', state: { target: [{ unit: 'flying' }, { affected: 'marked' }, { affected: 'provoked' }] } }],
        target: { kind: 'enemy' },
        details: {
          target: {
            eva_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            damage_multiplier_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }, {
      hull_down_mode: {
        area: 'self',
        effects: [{
          conditions: [{ trigger: 'start_wave' }],
          details: { self: { battle_continuation: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 5000 }, term: 'infinite', times: 1, cannot_be_dispelled: true } } }
        }, {
          conditions: [{ trigger: 'revive' }],
          details: {
            self: {
              form_change: { form: 'turret_down_mode', term: 'immediate' },
              ap_up: { microValue: 2000000, term: 'immediate' },
              all_debuff_removal: { term: 'immediate' },
              def_up: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 3 } },
              damage_reduction_up: [
                { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
                { base: { milliPercentage: 7500 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 3 } }
              ],
              row_protect: { term: { for_rounds: 1 } }
            }
          }
        }, {
          conditions: [{ trigger: 'start_round' }],
          details: {
            self: {
              status_resist_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
              all_buff_removal_resist_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 }, cannot_be_dispelled: true }
            }
          }
        }, {
          conditions: [{ trigger: 'idle' }],
          details: {
            self: {
              ap_up: { microValue: 2000000, term: 'immediate' },
              all_debuff_removal: { term: 'immediate' }
            }
          }
        }]
      },
      turret_down_mode: {
        area: 'fixed_all',
        effects:[{
          conditions: [{ trigger: 'start_round' }],
          details: {
            self: {
              status_resist_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
              all_buff_removal_resist_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 }, cannot_be_dispelled: true }
            }
          }
        }, {
          conditions: [{ trigger: 'start_round', state: { enemy: { num_of_units: { unit: 'flying', greater_or_equal: 1 } } } }],
          target: { kind: 'ally_except_self' },
          details: {
            target: {
              status_resist_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
              all_buff_removal_resist_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 }, cannot_be_dispelled: true }
            }
          }
        }, {
          conditions: [{ trigger: 'start_round', state: { target: [{ status_greater_than_self: { status: 'eva' } }] } }],
          target: { kind: 'enemy' },
          details: { target: { action_count_down: { term: { for_rounds: 1 } } } }
        }, {
          conditions: [{ trigger: 'idle' }],
          details: {
            self: {
              ap_up: { microValue: 2000000, term: 'immediate' },
              all_debuff_removal: { term: 'immediate' }
            }
          }
        }]
      }
    }]
  },
  224: {
    no: 224,
    active: [{
      damage_deal: {
        base: { milliPercentage: 262000 },
        per_lv_up: { milliPercentage: 23000 }
      },
      range: 2,
      cost: 9,
      area: 'single',
      effects: [{
        target: { kind: 'enemy' },
        details: {
          self: {
            merciless: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 2000 }, term: 'immediate' },
            tag_stack: { tag: 'predator', term: { for_rounds: 999 }, max_stack: 5 }
          },
          target: { def_down: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 2 } } }
        }
      }, {
        conditions: [{ state: { self: [{ hp_greater_or_equal: 50 }] } }],
        target: { kind: 'enemy' },
        details: { target: { buff_removal: { effect: 'damage_reduction_up' } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 166500 },
        per_lv_up: { milliPercentage: 15000 },
        attribute: 'fire'
      },
      range: 5,
      cost: 10,
      area: {
        1: 'row_toward_front',
        10: 'row_toward_front_with_front_line'
      },
      effects: [{
        target: { kind: 'enemy' },
        details: {
          self: {
            ignore_protect: {},
            tag_unstack: { tag: 'predator', value: 1 }
          },
          target: { fire_resist_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } } }
        }
      }, {
        conditions: [{ state: { self: [{ stack: { tag: 'predator', greater_or_equal: 1 } }] } }],
        target: { kind: 'enemy' },
        details: { target: { fire_resist_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ state: { self: [{ stack: { tag: 'predator', greater_or_equal: 2 } }] } }],
        target: { kind: 'enemy' },
        details: { target: { fire_resist_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { self: [{ grid: 'front_line' }] } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 24000 }, per_lv_up: { milliPercentage: 1200 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 600 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 34000 }, per_lv_up: { milliPercentage: 4000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ grid: 'mid_line' }] } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 18000 }, per_lv_up: { milliPercentage: 900 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 9000 }, per_lv_up: { milliPercentage: 450 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 23000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ grid: 'back_line' }] } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 600 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 300 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 17000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ tagged: 'predator' }] } }],
        details: { self: { ignore_barrier_dr: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'critical', state: { self: [{ equipped: 'output_limit_release_device' }, { equipped: 'enhanced_output_limit_release_device' }] } }],
        details: { self: { additional_damage: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 1250 }, term: 'immediate' } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            def_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 4000 }, term: { for_rounds: 1 } },
            status_resist_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
            damage_reduction_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
            buff_removal: { effect: 'target_protect', term: 'immediate' }
          }
        }
      }, {
        conditions: [{ trigger: 'attack' }],
        details: {
          self: {
            marked: { term: { for_rounds: 2 } },
            buff_removal: { effect: 'target_protect', term: 'immediate' }
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
            buff_removal: { effect: 'battle_continuation', term: 'immediate' }
          }
        }
      }, {
        conditions: [{ trigger: 'be_killed', state: { self: [{ tagged: 'last_roar' }] } }],
        target: { kind: 'enemy' },
        details: { target: { fixed_damage: { base: { milliPercentage: 150000 }, per_lv_up: { milliPercentage: 20000 }, term: 'immediate' } } }
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
        conditions: [{ state: { target: [{ affected: 'def_down' }] } }],
        target: { kind: 'enemy' },
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
        target: { kind: 'enemy' },
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
        details: { self: { minimize_damage: { times: 2, term: 'infinite' } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        details: { self: { acc_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'line_with_front_line',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['defender', 'spartan_series', 'steel_line'] },
        details: { target: { follow_up_attack: { term: { for_rounds: 1 } } } }
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
        conditions: [{ trigger: 'enemy_killed' }],
        target: { kind: 'ally', conditions: ['defender', 'spartan_series', 'steel_line'] },
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
            atk_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        scale_factor: { per_units: { type: 'squad', unit: 'ags', except: 'self' } },
        details: {
          self: {
            atk_up: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 3500 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        scale_factor: { per_units: { type: 'squad', unit: 'bioroid' } },
        details: {
          self: {
            atk_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
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
        target: { kind: 'enemy' },
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
        target: { kind: 'enemy' },
        details: {
          target: {
            ap_down: { base: { microValue: 600000 }, per_lv_up: { microValue: 100000 } },
            silenced: { rate: 'rarely' }
          }
        }
      }, {
        conditions: [{ state: { target: [{ affected: 'immovable' }] } }],
        target: { kind: 'enemy' },
        details: { self: { activation_rate_percentage_up: { effect: 'silenced', milliPercentage: 100000 } } }
      }, {
        target: { kind: 'enemy', conditions: ['light'] },
        details: {
          target: {
            atk_down: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } },
            acc_down: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        target: { kind: 'enemy', conditions: ['flying'] },
        details: {
          target: {
            eva_down: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } },
            spd_down: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        target: { kind: 'enemy', conditions: ['heavy'] },
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
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['light'] },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['flying'] },
        details: {
          target: {
            eva_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['heavy'] },
        details: {
          target: {
            atk_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            def_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['ags'] },
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
        conditions: [{ trigger: 'start_round', state: { target: [{ affected: 'atk_down' }] } }],
        target: { kind: 'ally' },
        details: { target: { atk_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ affected: 'def_down' }] } }],
        target: { kind: 'ally' },
        details: { target: { def_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ affected: 'acc_down' }] } }],
        target: { kind: 'ally' },
        details: { target: { acc_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ affected: 'cri_down' }] } }],
        target: { kind: 'ally' },
        details: { target: { cri_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ affected: 'eva_down' }] } }],
        target: { kind: 'ally' },
        details: { target: { eva_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ affected: 'spd_down' }] } }],
        target: { kind: 'ally' },
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
      cost: 5,
      area: 'single',
      effects: [{
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: {
          target: {
            marked: { term: { for_rounds: 2 } },
            damage_taken_increased: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } },
            buff_removal: { effect: 'def_up', term: 'immediate' }
          }
        }
      }]
    }, {
      range: 0,
      cost: 8,
      area: 'fixed_all',
      effects: [{
        target: { kind: 'ally' },
        details: { target: { debuff_removal: { effects: ['spd_down', 'damage_multiplier_down'], term: 'immediate' } } }
      }, {
        scale_factor: { per_units: { type: 'squad', unit: 'heavy' } },
        target: { kind: 'ally', conditions: ['heavy'] },
        details: { target: { spd_up: { base: { milliPercentage: 3000 }, per_lv_up: { milliPercentage: 300 }, term: { for_rounds: 4 }, max_stack: 1 } } }
      }, {
        scale_factor: { per_units: { type: 'squad', unit: 'light' } },
        target: { kind: 'ally', conditions: ['light'] },
        details: { target: { damage_multiplier_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 4 }, max_stack: 1 } } }
      }]
    }],
    passive: [{
      area: {
        1: 'all_adjacent',
        10: 'fixed_all'
      },
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { merciless: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['light', 'heavy'] },
        details: {
          target: {
            follow_up_attack: { term: { for_rounds: 1 } },
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
            atk_up: { base: { milliPercentage: 13000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 12000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 14000 }, per_lv_up: { milliPercentage: 4000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'hit' }],
        details: {
          self: {
            re_attack: { term: { for_rounds: 2 }, max_stack: 1 },
            damage_multiplier_up: { base: { milliPercentage: 14000 }, per_lv_up: { milliPercentage: 4000 }, term: { for_rounds: 2 }, max_stack: 1 }
          }
        }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        details: { self: { reconnaissance: { term: 'infinite', cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ affected: 'reconnaissance' }] } }],
        target: { kind: 'ally' },
        details: { target: { ignore_barrier_dr: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [
          { trigger: 'follow_up_attack', state: { target: [{ affected: 'marked' }] } },
          { trigger: 're_attack', state: { target: [{ affected: 'marked' }] } }
        ],
        // TODO: only the attacked target
        target: { kind: 'enemy' },
        details: { target: { status_resist_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } } } }
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
        target: { kind: 'enemy' },
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
        target: { kind: 'enemy' },
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
        details: { self: { damage_reduction_up: { base: { milliPercentage: 52000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', round: { at: 2 } }],
        details: { self: { damage_reduction_up: { base: { milliPercentage: 42000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', round: { from: 3 } }],
        details: { self: { damage_reduction_up: { base: { milliPercentage: 32000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'all_backward',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
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
        target: { kind: 'enemy' },
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
  229: {
    no: 229,
    active: [{
      damage_deal: {
        base: { milliPercentage: 155000 },
        per_lv_up: { milliPercentage: 15000 }
      },
      range: 3,
      cost: 6,
      area: 'line',
      effects: [{
        details: {
          self: {
            defense_penetration: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 4000 }, term: 'immediate' },
            light_type_damage_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: 'immediate' }
          }
        }
      }, {
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: {
          target: {
            status_resist_down: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 3 } },
            debuff_removal: { tag: 'wet', effect: 'fire_resist_up', term: 'immediate' }
          }
        }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 135000 },
        per_lv_up: { milliPercentage: 13000 },
        attribute: 'fire'
      },
      range: 3,
      cost: 9,
      area: 'cross',
      effects: [{
        target: { kind: 'enemy' },
        details: {
          self: { ignore_protect: {} },
          target: { eva_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } } }
        }
      }, {
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: { target: { atk_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_fire_damage: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 2500 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'hit', state: { squad: { in_squad: 179 } } }],
        details: { self: { cooperative_attack: { unit: 179, active: 2, term: 'immediate' } } }
      }]
    }],
    passive: [{
      area: 'fixed_cross',
      effects: [{
        conditions: [{ trigger: 'enemy_killed' }],
        target: { kind: 'ally' },
        details: { target: { atk_value_up: { base: { milliValue: 50000 }, per_lv_up: { milliValue: 5000 }, term: { for_rounds: 3 }, max_stack: 3 } } }
      }, {
        conditions: [{ trigger: 'enemy_killed', state: { self: [{ grid: 'area_of_effect' }] } }],
        details: { self: { atk_value_up: { base: { milliValue: 50000 }, per_lv_up: { milliValue: 5000 }, term: { for_rounds: 3 }, max_stack: 3 } } }
      }, {
        conditions: [{ trigger: 'end_wave' }],
        target: { kind: 'ally' },
        details: { target: { reconnaissance: { term: 'infinite' } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ affected: 'reconnaissance' }] } }],
        target: { kind: 'ally' },
        details: {
          target: {
            acc_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_wave', state: { enemy: { num_of_units: { greater_or_equal: 6 } } } }],
        details: {
          self: {
            ap_up: { base: { microValue: 2000000 }, per_lv_up: { microValue: 200000 }, term: 'immediate' },
            atk_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 2500 }, term: 'infinite' }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { enemy: { num_of_units: { equal: 1 } } } }],
        details: { self: { spd_up: { milliPercentage: 6000, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { enemy: { num_of_units: { equal: 2 } } } }],
        details: { self: { spd_up: { milliPercentage: 9000, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { enemy: { num_of_units: { equal: 3 } } } }],
        details: { self: { spd_up: { milliPercentage: 12000, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { enemy: { num_of_units: { equal: 4 } } } }],
        details: { self: { spd_up: { milliPercentage: 15000, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { enemy: { num_of_units: { equal: 5 } } } }],
        details: { self: { spd_up: { milliPercentage: 18000, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { enemy: { num_of_units: { equal: 6 } } } }],
        details: { self: { spd_up: { milliPercentage: 21000, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { enemy: { num_of_units: { equal: 7 } } } }],
        details: { self: { spd_up: { milliPercentage: 24000, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { enemy: { num_of_units: { equal: 8 } } } }],
        details: { self: { spd_up: { milliPercentage: 27000, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { enemy: { num_of_units: { equal: 9 } } } }],
        details: { self: { spd_up: { milliPercentage: 30000, term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ affected: 'counterattack' }] } }],
        target: { kind: 'enemy' },
        details: {
          target: {
            atk_down: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            cri_down: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ affected: 'immovable' }] } }],
        target: { kind: 'enemy' },
        details: { target: { status_resist_down: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ affected: 'stunned' }] } }],
        target: { kind: 'enemy' },
        details: { target: { damage_taken_increased: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }]
    }]
  },
  230: {
    no: 230,
    active: [{
      damage_deal: {
        base: { milliPercentage: 90000 },
        per_lv_up: { milliPercentage: 10000 },
        attribute: 'electric'
      },
      range: 3,
      cost: 4,
      area: 'single',
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: {
          target: {
            ap_down: { base: { microValue: 500000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' },
            immovable: { term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'hit', state: { target: [{ status_greater_than_self: { status: 'spd' } }] } }],
        target: { kind: 'enemy' },
        details: { target: { ap_down: { base: { microValue: 1500000 }, per_lv_up: { microValue: 150000 }, term: 'immediate' } } }
      }]
    }, {
      range: 1,
      cost: 7,
      area: 'fixed_all',
      effects: [{
        target: { kind: 'ally' },
        details: {
          self: {
            counterattack: { base: { milliPercentage: 80000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 3 } },
            nullify_damage: { term: { for_rounds: 3 }, times: 1 }
          },
          target: {
            barrier: { base: { value: 200 }, per_lv_up: { value: 20 }, term: { for_rounds: 3 } },
            status_resist_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 3 } }
          }
        }
      }, {
        conditions: [{ state: { self: [{ not_affected: ['reconnaissance'] }] } }],
        target: { kind: 'ally' },
        details: { target: { area_damage_dispersion_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 5000 }, term: 'infinite', times: 1 } } }
      }, {
        conditions: [{ state: { self: [{ affected: 'reconnaissance' }] } }],
        target: { kind: 'ally' },
        details: { target: { area_damage_dispersion_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 5000 }, term: 'infinite', times: 2 } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            column_protect: { term: { for_rounds: 1 } },
            damage_reduction_up: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 }, cannot_be_dispelled: true }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'damage_reduction_up' }] } }],
        details: {
          self: {
            buff_removal: { effect: 'damage_reduction_up', term: 'immediate' },
            all_buff_removal_resist_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 }, cannot_be_dispelled: true }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'reconnaissance' }] } }],
        details: { self: { acc_up: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 4000 }, term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
        details: { target: { area_damage_dispersion_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['attacker', 'supporter'] },
        details: { target: { target_protect: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'be_hit' }],
        target: { kind: 'ally' },
        details: { target: { atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 }, max_stack: 3 } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_wave', state: { squad: { num_of_units: { unit: 'ally', equal: 4 } } } }],
        details: { self: { reconnaissance: { term: 'infinite' } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { num_of_units: { unit: 'cross_adjacent', greater_or_equal: 2, less_or_equal: 3 } } } }],
        details: { self: { marked: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { num_of_units: { unit: 'cross_adjacent', equal: 4 } } } }],
        details: { self: { marked: { term: { for_rounds: 1 }, cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ hp_greater_than: 50 }] } }],
        details: { self: { minimize_damage_less_than_value: { base: { value: 500 }, per_lv_up: { value: 50 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ hp_less_or_equal: 50 }] } }],
        details: { self: { minimize_damage_less_than_value: { base: { value: 750 }, per_lv_up: { value: 75 }, term: { for_rounds: 1 } } } }
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
        target: { kind: 'enemy' },
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
        target: { kind: 'enemy' },
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
        conditions: [{ trigger: 'hit', state: { self: [{ stack: { tag: 'charge_electrically', greater_or_equal: 2 } }] } }],
        target: { kind: 'enemy' },
        details: { target: { fixed_electric_damage_over_time: { base: { value: 275 }, per_lv_up: { value: 25 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ stack: { tag: 'charge_electrically', greater_or_equal: 3 } }] } }],
        target: { kind: 'enemy' },
        details: { target: { fixed_electric_damage_over_time: { base: { value: 550 }, per_lv_up: { value: 50 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ stack: { tag: 'charge_electrically', greater_or_equal: 4 } }] } }],
        target: { kind: 'enemy' },
        details: { target: { fixed_electric_damage_over_time: { base: { value: 550 }, per_lv_up: { value: 50 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ stack: { tag: 'charge_electrically', greater_or_equal: 5 } }] } }],
        target: { kind: 'enemy' },
        details: { target: { fixed_electric_damage_over_time: { base: { value: 550 }, per_lv_up: { value: 50 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ stack: { tag: 'charge_electrically', greater_or_equal: 6 } }] } }],
        target: { kind: 'enemy' },
        details: { target: { fixed_electric_damage_over_time: { base: { value: 550 }, per_lv_up: { value: 50 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ stack: { tag: 'charge_electrically', greater_or_equal: 7 } }] } }],
        target: { kind: 'enemy' },
        details: { target: { fixed_electric_damage_over_time: { base: { value: 550 }, per_lv_up: { value: 50 }, term: { for_rounds: 2 } } } }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
        details: {
          target: {
            acc_down: { base: { milliPercentage: 3200 }, per_lv_up: { milliPercentage: 200 }, term: { for_rounds: 1 } },
            cri_down: { base: { milliPercentage: 3200 }, per_lv_up: { milliPercentage: 200 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'enemy' },
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
        target: { kind: 'enemy' },
        details: { target: { buff_removal: { effect: 'damage_reduction_up' } } }
      }, {
        conditions: [{ state: { target: [{ tagged: 'wet' }] } }],
        target: { kind: 'enemy' },
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
        conditions: [{ state: { target: [{ affected: 'ice_resist_down' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_ice_damage: { base: { milliPercentage: 27000 }, per_lv_up: { milliPercentage: 2000 } } } }
      }, {
        conditions: [{ state: { target: [{ tagged: 'wet' }] } }],
        target: { kind: 'enemy' },
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
        target: { kind: 'ally' },
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
        target: { kind: 'enemy' },
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
        target: { kind: 'enemy' },
        details: {
          self: { additional_damage: { base: { milliPercentage: 27000 }, per_lv_up: { milliPercentage: 2000 }, term: 'immediate' } },
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
        conditions: [{ trigger: 'attack' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 5500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            def_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: {
          target: {
            immovable: { term: { for_rounds: 2 } },
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
            atk_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 }, max_stack: 1 },
            eva_up: { base: { milliPercentage: 53000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 3 }, max_stack: 1 },
            range_up: { value: 3, term: { for_rounds: 3 }, max_stack: 1 },
            counterattack: { base: { milliPercentage: 73000 }, per_lv_up: { milliPercentage: 3000 }, times: 1, term: { for_rounds: 4 }, max_stack: 1 }
          }
        }
      }]
    }, {
      area: 'line',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
        details: {
          target: {
            light_type_damage_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            heavy_type_damage_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { num_of_units: { unit: 'ally', equal: 4 } } } }],
        target: { kind: 'ally' },
        details: {
          target: {
            light_type_damage_up: { base: { milliPercentage: 5500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            heavy_type_damage_up: { base: { milliPercentage: 5500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }]
  },
  234: {
    no: 234,
    active: [{
      damage_deal: {
        base: { milliPercentage: 220000 },
        per_lv_up: { milliPercentage: 20000 },
        attribute: 'ice'
      },
      range: 5,
      cost: 6,
      area: 'single',
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: {
          self: { tag_stack: { tag: 'heat_absorption', term: { for_rounds: 99 }, max_stack: 1 } },
          target: {
            atk_down: { base: { milliPercentage: 10500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 2 } },
            ice_resist_down: { base: { milliPercentage: 16000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 110000 },
        per_lv_up: { milliPercentage: 10000 },
        attribute: 'ice'
      },
      range: 6,
      cost: 9,
      area: 'row_toward_front',
      effects: [{
        conditions: [{ state: { self: [{ tagged: 'heat_absorption' }] } }],
        details: { self: { tag_release: { tag: 'heat_absorption', term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ tagged: 'heat_absorption' }] } }],
        target: { kind: 'enemy' },
        details: {
          self: { additional_ice_damage: { base: { milliPercentage: 33000 }, per_lv_up: { milliPercentage: 3000 }, term: 'immediate' } },
          target: {
            ice_resist_down: { tag: 'wet', base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 2 } },
            electric_resist_down: { tag: 'wet', base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 2 } },
            fire_resist_up: { tag: 'wet', base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 2 } }
          }
        }
      }]
    }],
    passive: [{
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'enemy' },
        details: { target: { spd_down: { base: { milliPercentage: 5500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', round: { at: 1 } }],
        target: { kind: 'enemy' },
        details: {
          target: {
            atk_down: { base: { milliPercentage: 27000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            ice_resist_down: { base: { milliPercentage: 27000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', round: { at: 2 } }],
        target: { kind: 'enemy' },
        details: {
          target: {
            atk_down: { base: { milliPercentage: 21500 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } },
            ice_resist_down: { base: { milliPercentage: 21500 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', round: { from: 3 } }],
        target: { kind: 'enemy' },
        details: {
          target: {
            atk_down: { base: { milliPercentage: 5500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            ice_resist_down: { base: { milliPercentage: 10500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            damage_reduction_up: { base: { milliPercentage: 37000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            fire_resist_up: { base: { milliPercentage: 37000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ tagged: 'heat_absorption' }] } }],
        details: { self: { range_down: { value: 3, term: { for_rounds: 1 }, cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'be_hit' }],
        details: { self: { counterattack: { base: { milliPercentage: 105000 }, per_lv_up: { milliPercentage: 5000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'counter' }],
        details: { self: { fire_resist_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 }, max_stack: 3 } } }
      }]
    }, {
      area: 'line_with_forward',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
        details: {
          target: {
            fire_resist_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            status_resist_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            target_protect: { term: { for_rounds: 1 } }
          }
        }
      }]
    }]
  },
  235: {
    no: 235,
    active: [{
      damage_deal: {
        base: { milliPercentage: 110000 },
        per_lv_up: { milliPercentage: 10000 },
        attribute: 'electric'
      },
      range: 4,
      cost: 6,
      area: 'line',
      effects: [{
        target: { kind: 'enemy' },
        details: { target: { acc_down: { base: { milliPercentage: 21000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 }, max_stack: 2 } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 165000 },
        per_lv_up: { milliPercentage: 15000 },
        attribute: 'electric'
      },
      range: 5,
      cost: 6,
      area: 'single',
      effects: [{
        target: { kind: 'enemy' },
        details: {
          self: { ignore_protect: {} },
          target: { electric_resist_down: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 }, max_stack: 3 } }
        }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'be_hit' }],
        details: { self: { counterattack: { base: { milliPercentage: 85000 }, per_lv_up: { milliPercentage: 5000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'counter' }],
        details: {
          self: {
            eva_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 }, max_stack: 3 },
            status_resist_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 }, max_stack: 3 }
          }
        }
      }, {
        conditions: [{ trigger: 'attack' }],
        details: { self: { merciless: { base: { milliPercentage: 32000 }, per_lv_up: { milliPercentage: 2000 }, term: 'immediate' } } }
      }]
    }]
  },
  236: {
    no: 236,
    active: [{
      damage_deal: {
        base: { milliPercentage: 182000 },
        per_lv_up: { milliPercentage: 12000 },
        attribute: 'fire'
      },
      range: 1,
      cost: 8,
      area: 'single',
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ not_tagged: 'bridle_of_sins' }] } }],
        details: { self: { additional_fire_damage: { base: { milliPercentage: 27000 }, per_lv_up: { milliPercentage: 2000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ tagged: 'bridle_of_sins' }] } }],
        details: {
          self: {
            additional_fire_damage: { base: { milliPercentage: 82000 }, per_lv_up: { milliPercentage: 2000 }, term: 'immediate' },
            ignore_barrier_dr: { term: 'immediate' }
          }
        }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 157000 },
        per_lv_up: { milliPercentage: 7000 },
        attribute: 'fire'
      },
      range: 6,
      cost: 9,
      area: 'all',
      effects: [{
        details: {
          self: {
            ignore_protect: {},
            silenced: { term: { for_rounds: 2 }, cannot_be_dispelled: true }
          }
        }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ not_tagged: 'bridle_of_sins' }] } }],
        target: { kind: 'enemy' },
        details: { target: { fixed_fire_damage_over_time: { base: { value: 55 }, per_lv_up: { value: 5 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ tagged: 'bridle_of_sins' }] } }],
        target: { kind: 'enemy' },
        details: {
          self: { ignore_barrier_dr: { term: 'immediate' } },
          target: { fixed_fire_damage_over_time: { base: { value: 1650 }, per_lv_up: { value: 150 }, term: { for_rounds: 3 } } }
        }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { self: [{ hp_greater_than: 25 }] } }],
        details: { self: { fixed_fire_damage_over_time: { base: { value: 83 }, per_lv_up: { value: 89 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ hp_less_or_equal: 25 }] } }],
        details: { self: { tag_stack: { tag: 'bridle_of_sins', term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 21000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            cri_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 22000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { enemy: { num_of_units: { equal: 1 } } } }],
        details: { self: { range_up: { value: 2, term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
        details: { target: { ice_resist_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ tagged: 'bridle_of_sins' }] } }],
        target: { kind: 'enemy' },
        details: { target: { fire_resist_down: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }]
    }]
  },
  237: {
    no: 237,
    active: [{
      damage_deal: {
        base: { milliPercentage: 140000 },
        per_lv_up: { milliPercentage: 10000 }
      },
      range: 2,
      cost: 5,
      area: 'single',
      effects: [{
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: { target: { ap_down: { base: { microValue: 550000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 75000 },
        per_lv_up: { milliPercentage: 5000 }
      },
      range: 3,
      cost: 9,
      area: 'line_with_front_line',
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: {
          target: {
            damage_multiplier_down: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            acc_down: { base: { milliPercentage: 55000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 2 } },
            buff_removal: { effect: 'acc_up', term: 'immediate' }
          }
        }
      }]
    }],
    passive: [{
      area: 'all_adjacent',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        target: { kind: 'ally' },
        details: { target: { reconnaissance: { term: 'infinite' } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
        details: { target: { acc_up: { base: { milliPercentage: 33000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['attacker'] },
        details: {
          target: {
            defense_penetration: { base: { milliPercentage: 10500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            debuff_removal: { effects: ['atk_down', 'acc_down', 'cri_down'], term: 'immediate' }
          }
        }
      }]
    }, {
      area: 'fixed_front_line',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
        details: { target: { damage_reduction_up: { base: { milliPercentage: 5500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['defender'] },
        details: {
          target: {
            damage_reduction_up: { base: { milliPercentage: 5500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            marked: { term: { for_rounds: 1 } }
          }
        }
      }]
    }]
  },
  238: {
    no: 238,
    active: [{
      damage_deal: {
        base: { milliPercentage: 145000 },
        per_lv_up: { milliPercentage: 15000 }
      },
      range: 2,
      cost: 5,
      area: 'circle_tiny_explosion',
      effects: [{
        conditions: [{ trigger: 'kill' }],
        details: {
          around: {
            fixed_damage: { base: { milliPercentage: 60000 }, per_lv_up: { milliPercentage: 6000 }, term: 'immediate' },
            def_down: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 3 } }
          }
        }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 132000 },
        per_lv_up: { milliPercentage: 12000 }
      },
      range: 4,
      cost: 8,
      area: 'line_toward_front_wavelets',
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: { target: { spd_down: { base: { milliPercentage: 2000 }, per_lv_up: { milliPercentage: 200 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ trigger: 'hit' }],
        scale_factor: { per_units: { type: 'enemy', variation: 'proportional' } },
        details: { self: { spd_up: { base: { milliPercentage: 2000 }, per_lv_up: { milliPercentage: 200 }, term: { for_rounds: 2 } } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            spd_up: { base: { milliPercentage: 500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { in_squad: 133 } } }],
        details: {
          self: {
            spd_up: { base: { milliPercentage: 500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { in_squad: 135 } } }],
        details: {
          self: {
            spd_up: { base: { milliPercentage: 500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { additional_damage_focusing: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'be_hit' }],
        details: { self: { atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 3 } } } }
      }]
    }, {
      area: 'row_toward_front',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
        details: { target: { acc_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['supporter', 'defender'] },
        details: { target: { row_protect: { term: { for_rounds: 1 } } } }
      }]
    }]
  },
  239: {
    no: 239,
    active: [{
      falcon_form: {
        damage_deal: {
          base: { milliPercentage: 165000 },
          per_lv_up: { milliPercentage: 15000 }
        },
        range: 5,
        cost: 7,
        area: 'fan_shape_without_front',
        effects: [{
          conditions: [{ trigger: 'hit' }],
          target: { kind: 'enemy' },
          details: { target: { def_down: { base: { milliPercentage: 6000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 } } } }
        }, {
          conditions: [{ trigger: 'critical' }],
          details: { self: { additional_damage: { base: { milliPercentage: 21000 }, per_lv_up: { milliPercentage: 1000 }, term: 'immediate' } } }
        }]
      },
      human_form: {
        damage_deal: {
          base: { milliPercentage: 165000 },
          per_lv_up: { milliPercentage: 15000 }
        },
        range: 4,
        cost: 8,
        area: 'circle_middle_explosion',
        effects: [{
          conditions: [{ trigger: 'hit' }],
          target: { kind: 'enemy' },
          details: { target: { eva_down: { base: { milliPercentage: 16500 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 3 } } } }
        }, {
          conditions: [{ trigger: 'hit', state: { target: [{ affected: 'row_protect' }, { affected: 'column_protect' }] } }],
          target: { kind: 'enemy' },
          details: { self: { additional_damage: { base: { milliPercentage: 33000 }, per_lv_up: { milliPercentage: 3000 }, term: 'immediate' } } }
        }]
      }
    }, {
      falcon_form: {
        damage_deal: {
          base: { milliPercentage: 170000 },
          per_lv_up: { milliPercentage: 20000 }
        },
        range: 5,
        cost: 6,
        area: 'single',
        effects: [{
          details: {
            self: {
              ignore_barrier_dr: { term: 'immediate' },
              damage_multiplier_up_by_status: { status: 'eva', base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: 'immediate' }
            }
          }
        }]
      },
      human_form: {
        damage_deal: {
          base: { milliPercentage: 165000 },
          per_lv_up: { milliPercentage: 15000 }
        },
        range: 6,
        cost: 10,
        area: 'row_toward_front_with_shock_wave',
        effects: [{
          details: {
            self: {
              ignore_protect: {},
              defense_penetration: { base: { milliPercentage: 45000 }, per_lv_up: { milliPercentage: 5000 }, term: 'immediate' },
              form_change: { form: 'falcon_form', term: 'immediate' },
              tag_release: { tag: 'form_change_preparation', term: 'immediate' }
            }
          }
        }, {
          conditions: [{ trigger: 'hit' }],
          target: { kind: 'enemy' },
          details: { target: { buff_removal: { effect: 'barrier', term: 'immediate' } } }
        }, {
          conditions: [{ trigger: 'hit' }],
          scale_factor: { per_units: { type: 'enemy', variation: 'proportional' } },
          target: { kind: 'enemy' },
          details: { target: { area_damage_dispersion_down: { base: { milliPercentage: 5500 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
        }]
      }
    }],
    passive: [{
      falcon_form: {
        area: 'self',
        effects: [{
          conditions: [{ trigger: 'start_wave' }],
          details: { self: { tag_stack: { tag: 'form_change_preparation', term: 'infinite', cannot_be_dispelled: true } } }
        }, {
          conditions: [{ trigger: 'idle', state: { self: [{ tagged: 'form_change_preparation' }] } }],
          details: { self: { form_change: { form: 'human_form', term: 'immediate' } } }
        }, {
          conditions: [{ trigger: 'start_round' }],
          details: {
            self: {
              cri_up: { tag: 'falcon_form', base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: 'infinite', max_stack: 5 },
              eva_up: { tag: 'falcon_form', base: { milliPercentage: 16500 }, per_lv_up: { milliPercentage: 1500 }, term: 'infinite', max_stack: 5 }
            }
          }
        }]
      },
      human_form: {
        area: 'self',
        effects: [{
          conditions: [{ trigger: 'start_round' }],
          details: { self: { additional_damage_focusing: { tag: 'human_form', base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: 'infinite', max_stack: 5 } } }
        }]
      }
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 22000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            spd_up: { base: { milliPercentage: 1000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            damage_multiplier_up_by_status: { status: 'eva', base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        scale_factor: { per_stack: { tag: 'falcon_form', effect: 'eva_up' } },
        details: { self: { ap_up: { base: { microValue: 550000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        scale_factor: { per_stack: { tag: 'human_form', effect: 'additional_damage_focusing' } },
        details: { self: { atk_up: { base: { milliPercentage: 11000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }]
    }]
  },
  240: {
    no: 240,
    active: [{
      damage_deal: {
        base: { milliPercentage: 60000 },
        per_lv_up: { milliPercentage: 20000 }
      },
      range: 3,
      cost: 5,
      area: 'single',
      effects: [{
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: {
          target: {
            def_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 }, cannot_be_dispelled: true },
            status_resist_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 }, cannot_be_dispelled: true }
          }
        }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ tagged: 'power_of_true_blood_death_eye' }] } }],
        target: { kind: 'enemy' },
        details: {
          target: {
            def_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 }, cannot_be_dispelled: true },
            status_resist_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 }, cannot_be_dispelled: true }
          }
        }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ tagged: 'power_of_true_blood_fate_control' }] } }],
        target: { kind: 'enemy' },
        details: {
          target: {
            def_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 }, cannot_be_dispelled: true },
            status_resist_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 }, cannot_be_dispelled: true }
          }
        }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ tagged: 'power_of_true_blood_deathless' }] } }],
        target: { kind: 'enemy' },
        details: {
          target: {
            def_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 }, cannot_be_dispelled: true },
            status_resist_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 }, cannot_be_dispelled: true }
          }
        }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ hp_greater_or_equal: 40 }] } }],
        target: { kind: 'enemy' },
        details: {
          self: { additional_damage: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 5000 }, term: 'immediate' } },
          target: { buff_removal: { effects: ['counterattack', 'minimize_damage'], term: 'immediate' } }
        }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 45000 },
        per_lv_up: { milliPercentage: 15000 }
      },
      range: 5,
      cost: 10,
      area: {
        1: 'fan_shape',
        10: 'all'
      },
      effects: [{
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: { target: { buff_removal: { effect: 'counterattack', term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ tagged: 'power_of_true_blood_death_eye' }] } }],
        target: { kind: 'enemy' },
        details: { target: { damage_reduction_down: { tag: 'eternal_true_bloods_flash', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ tagged: 'power_of_true_blood_fate_control' }] } }],
        target: { kind: 'enemy' },
        details: { target: { damage_reduction_down: { tag: 'eternal_true_bloods_flash', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ tagged: 'power_of_true_blood_deathless' }] } }],
        target: { kind: 'enemy' },
        details: { target: { damage_reduction_down: { tag: 'eternal_true_bloods_flash', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { self: [{ not_affected: ['follow_up_attack'] }] } }],
        details: { self: { cri_up: { tag: 'power_of_true_blood_death_eye', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ not_affected: ['follow_up_attack', 'target_protect'] }] } }],
        details: { self: { ignore_protect: { tag: 'power_of_true_blood_fate_control', term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'kill' }],
        details: { self: { battle_continuation: { tag: 'power_of_true_blood_deathless', base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 4000 }, term: 'infinite', max_stack: 3 } } }
      }]
    }, {
      area: 'diagonal',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { self: [{ tagged: 'power_of_true_blood_death_eye' }] } }],
        target: { kind: 'ally' },
        details: {
          target: {
            atk_up: { tag: 'power_overflows', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            spd_up: { tag: 'power_overflows', base: { milliPercentage: 4000 }, per_lv_up: { milliPercentage: 400 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ tagged: 'power_of_true_blood_fate_control' }] } }],
        target: { kind: 'ally' },
        details: {
          target: {
            atk_up: { tag: 'power_overflows', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            spd_up: { tag: 'power_overflows', base: { milliPercentage: 4000 }, per_lv_up: { milliPercentage: 400 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ tagged: 'power_of_true_blood_deathless' }] } }],
        target: { kind: 'ally' },
        details: {
          target: {
            atk_up: { tag: 'power_overflows', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            spd_up: { tag: 'power_overflows', base: { milliPercentage: 4000 }, per_lv_up: { milliPercentage: 400 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ tagged: 'power_of_true_blood_?' }] } }],
        target: { kind: 'ally' },
        details: {
          target: {
            atk_up: { tag: 'power_overflows', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            spd_up: { tag: 'power_overflows', base: { milliPercentage: 4000 }, per_lv_up: { milliPercentage: 400 }, term: { for_rounds: 1 } },
            defense_penetration: { tag: 'power_overflows', base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'revive' }],
        target: { kind: 'ally' },
        details: { target: { ap_up: { base: { microValue: 1000000 }, per_lv_up: { microValue: 200000 }, term: 'immediate' } } }
      }]
    }, {
      area: 'fixed_all',
      equipment_effects: [{
        conditions: [{
          trigger: 'hit',
          state: { self: [{ stack: { tag: ['power_of_true_blood_death_eye', 'power_of_true_blood_fate_control', 'power_of_true_blood_deathless'], greater_or_equal: 2 } }] }
        }],
        target: { kind: 'enemy' },
        details: {
          target: {
            buff_removal: { effects: ['follow_up_attack', 'target_protect'], term: 'immediate' },
            damage_taken_increased: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ tagged: 'eternal_true_bloods_flash' }] } }],
        target: { kind: 'enemy' },
        details: { target: { damage_taken_increased: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ tagged: ['eternal_true_bloods_flash', 'cyclops_eternal_beam'] }] } }],
        target: { kind: 'enemy' },
        details: { target: { action_count_down: { term: { for_rounds: 1 } } } }
      }]
    }]
  },
  246: {
    no: 246,
    active: [{
      damage_deal: {
        base: { milliPercentage: 142000 },
        per_lv_up: { milliPercentage: 14200 },
        attribute: 'fire'
      },
      range: 3,
      cost: 5,
      area: 'single',
      effects: [{
        details: { self: { fixed_fire_damage_over_time: { value: 100, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: { target: { marked: { term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ trigger: 'hit', state: { target: [{ not_tagged: 'vafrlogi', affected: 'fixed_fire_damage_over_time' }] } }],
        target: { kind: 'enemy' },
        details: {
          target: {
            fixed_fire_damage: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 5000 }, term: 'immediate' },
            debuff_removal: { effect: 'fixed_fire_damage_over_time', term: 'immediate' }
          }
        }
      }, {
        conditions: [{ trigger: 'hit', state: { target: [{ tagged: 'vafrlogi' }] } }],
        target: { kind: 'enemy' },
        details: {
          target: {
            fixed_fire_damage: { base: { milliPercentage: 100000 }, per_lv_up: { milliPercentage: 10000 }, term: 'immediate' },
            damage_taken_increased: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            tag_release: { tag: 'vafrlogi', term: 'immediate' },
            debuff_removal: { effect: 'fixed_fire_damage_over_time', term: 'immediate' }
          }
        }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 131000 },
        per_lv_up: { milliPercentage: 13100 },
        attribute: 'fire'
      },
      range: 4,
      cost: 10,
      area: 'left_spread_forward',
      effects: [{
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: { target: { fire_resist_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ trigger: 'hit', state: { target: [{ affected: 'marked' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 2500 }, term: 'immediate' } } }
      }, {
        // TODO: Including fixed_fire_damage_over_time effect by vafrlogi
        conditions: [{ trigger: 'hit', state: { target: [{ affected: 'fixed_fire_damage_over_time' }] } }],
        target: { kind: 'enemy' },
        details: { target: { buff_removal: { effect: 'fire_resist_up', term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'hit', state: { target: [{ tagged: 'vafrlogi' }] } }],
        target: { kind: 'enemy' },
        details: { target: { status_resist_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 2 } } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'fixed_fire_damage_over_time' }] } }],
        details: { self: { atk_up: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }, { trigger: 'attack' }],
        details: { self: { debuff_removal: { effects: ['fixed_damage_over_time', 'fixed_ice_damage_over_time', 'fixed_electric_damage_over_time'], term: 'immediate' } } }
      }]
    }, {
      area: 'all_adjacent',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
        details: {
          target: {
            fixed_fire_damage_over_time: { value: 100, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { not_in_squad: 'cross_adjacent' } } }],
        details: {
          self: {
            ap_up: { base: { microValue: 500000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' },
            ignore_protect: { term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { num_of_units: { unit: 'cross_adjacent', greater_or_equal: 1 } } } }],
        details: {
          self: {
            spd_down: { milliPercentage: 15000, term: { for_rounds: 1 } },
            damage_multiplier_up: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 2500 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { minimum_fire_resist_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 }, cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally' },
        details: {
          target: {
            ice_resist_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            debuff_removal: { effect: 'ice_resist_down', term: 'immediate' }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', round: { at: 1 } }],
        target: { kind: 'enemy' },
        details: { target: { fixed_fire_damage_over_time: { tag: 'vafrlogi', base: { value: 200 }, per_lv_up: { value: 80 }, term: { for_rounds: 1 }, cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_round', round: { at: 2 } }],
        target: { kind: 'enemy' },
        details: { target: { fixed_fire_damage_over_time: { tag: 'vafrlogi', base: { value: 400 }, per_lv_up: { value: 160 }, term: { for_rounds: 1 }, cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_round', round: { at: 3 } }],
        target: { kind: 'enemy' },
        details: { target: { fixed_fire_damage_over_time: { tag: 'vafrlogi', base: { value: 600 }, per_lv_up: { value: 240 }, term: { for_rounds: 1 }, cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_round', round: { at: 4 } }],
        target: { kind: 'enemy' },
        details: { target: { fixed_fire_damage_over_time: { tag: 'vafrlogi', base: { value: 800 }, per_lv_up: { value: 320 }, term: { for_rounds: 1 }, cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'start_round', round: { from: 5 } }],
        target: { kind: 'enemy' },
        details: { target: { fixed_fire_damage_over_time: { tag: 'vafrlogi', base: { value: 1000 }, per_lv_up: { value: 400 }, term: { for_rounds: 1 }, cannot_be_dispelled: true } } }
      }]
    }]
  },
  247: {
    no: 247,
    active: [{
      damage_deal: {
        base: { milliPercentage: 234700 },
        per_lv_up: { milliPercentage: 6700 }
      },
      range: 3,
      cost: 7,
      area: 'row_toward_front',
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: {
          self: { spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 3 }, max_stack: 1 } },
          target: { spd_down: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 3 }, max_stack: 1 } }
        }
      }, {
        conditions: [{ trigger: 'hit' }],
        scale_factor: { per_stack: { tag: 'claw' } },
        target: { kind: 'enemy' },
        details: {
          self: { spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 3 }, max_stack: 1 } },
          target: { spd_down: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 3 }, max_stack: 1 } }
        }
      }, {
        conditions: [{ trigger: 'critical' }],
        target: { kind: 'enemy' },
        details: { target: { effect_removal: { effect: 'area_damage_dispersion_up', term: 'immediate' } } }
      }]
    }, {
      range: 6,
      cost: 7,
      area: 'single',
      effects: [{
        target: { kind: 'ally' },
        details: {
          target: {
            tag_stack: { tag: 'reinforced_exoskeleton', term: 'infinite', cannot_be_dispelled: true },
            def_value_up: { base: { milliValue: 500000 }, per_lv_up: { milliValue: 50000 }, term: { for_rounds: 1 } },
            cri_reduction_by_status: { status: 'def', milliPercentage: 1000, term: { for_rounds: 1 } },
            effect_removal: { effect: 'eva_up', term: 'immediate' }
          }
        }
      }]
    }],
    passive: [{
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'enemy_killed' }],
        target: { kind: 'ally', conditions: ['ags'] },
        details: {
          self: { cri_up: { tag: 'claw', base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: 'infinite', max_stack: 3 } },
          target: { atk_up: { tag: 'claw', base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 3 } } }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ tagged: 'reinforced_exoskeleton' }] } }],
        target: { kind: 'ally' },
        details: {
          target: {
            def_value_up: { base: { milliValue: 500000 }, per_lv_up: { milliValue: 50000 }, term: { for_rounds: 1 } },
            cri_reduction_by_status: { status: 'def', milliPercentage: 1000, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ tagged: 'reinforced_exoskeleton' }] } }],
        target: { kind: 'ally' },
        details: { target: { acc_up: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { in_squad: { tagged: 'reinforced_exoskeleton' } } } }],
        details: { self: { ap_up: { base: { microValue: 500000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' } } }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { damage_reduction_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        scale_factor: { per_stack: { tag: 'claw' } },
        details: { self: { damage_reduction_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'idle' }],
        target: { kind: 'ally', conditions: ['ags'] },
        details: { target: { ap_up: { base: { microValue: 500000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'idle' }],
        scale_factor: { per_stack: { tag: 'claw' } },
        target: { kind: 'ally', conditions: ['ags'] },
        details: {
          self: { tag_release: { tag: 'claw', term: 'immediate' } },
          target: { ap_up: { base: { microValue: 500000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' } }
        }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'enemy' },
        details: { target: { def_down: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 1000 }, term: 'infinite', max_stack: 5 } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ tagged: 'claw' }] } }],
        target: { kind: 'enemy' },
        details: { target: { buff_removal: { effect: 'def_up', term: 'immediate' } } }
      }]
    }]
  },
  250: {
    no: 250,
    active: [{
      damage_deal: {
        base: { milliPercentage: 180000 },
        per_lv_up: { milliPercentage: 18000 }
      },
      range: 5,
      cost: 6,
      area: 'single',
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ trigger: 'hit', state: { target: [{ affected: 'eva_down' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'hit', state: { target: [{ affected: 'atk_down' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: 'immediate' } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 125000 },
        per_lv_up: { milliPercentage: 12500 }
      },
      range: 6,
      cost: 10,
      area: 'row_toward_front_with_shock_wave',
      effects: [{
        conditions: [{ trigger: 'hit', state: { target: [{ hp_greater_or_equal: 100 }] } }],
        target: { kind: 'enemy' },
        details: { target: { buff_removal: { effect: 'nullify_damage', term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'hit', state: { target: [{ hp_greater_or_equal: 50 }] } }],
        target: { kind: 'enemy' },
        details: { target: { buff_removal: { effect: 'def_up', term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ stack: { tag: 'be_grateful', effect: 'acc_up', greater_or_equal: 3 } }] } }],
        details: {
          self: {
            additional_damage: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 5000 }, term: 'immediate' },
            buff_removal: { tag: 'be_grateful', effect: 'acc_up', term: 'immediate' }
          }
        }
      }, {
        conditions: [{ trigger: 'attack', state: { squad: { not_in_squad: 'mermaid' } } }],
        details: { self: { spd_down: { tag: 'tired', base: { milliPercentage: 90000 }, per_lv_up: { milliPercentage: -2000 }, term: { for_rounds: 2 }, cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'attack', state: { squad: { in_squad: 'mermaid' } } }],
        details: { self: { spd_down: { tag: 'competent_subordinate', base: { milliPercentage: 70000 }, per_lv_up: { milliPercentage: -2000 }, term: { for_rounds: 2 }, cannot_be_dispelled: true } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'def_up' }] } }],
        details: { self: { atk_up: { tag: 'come_to_me', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'eva_up' }] } }],
        details: { self: { atk_up: { tag: 'come_to_me', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'barrier' }] } }],
        details: { self: { atk_up: { tag: 'come_to_me', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'damage_reduction_up' }] } }],
        details: { self: { atk_up: { tag: 'come_to_me', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'target_protect' }] } }],
        details: { self: { atk_up: { tag: 'come_to_me', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'status_resist_up' }] } }],
        details: { self: { atk_up: { tag: 'come_to_me', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ stack: { tag: 'come_to_me', effect: 'atk_up', greater_or_equal: 2 } }] } }],
        details: { self: { damage_multiplier_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ stack: { tag: 'come_to_me', effect: 'atk_up', greater_or_equal: 4 } }] } }],
        details: { self: { ignore_protect: { term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: [{ type: 'heavy', role: 'defender' }, { type: 'heavy', role: 'supporter' }] },
        details: { target: { follow_up_attack: { term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'follow_up_attack' }],
        details: {
          self: {
            defense_penetration: { tag: 'be_grateful', base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: 'infinite', max_stack: 3 },
            acc_up: { tag: 'be_grateful', base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: 'infinite', max_stack: 3 }
          }
        }
      }, {
        conditions: [{ trigger: 'follow_up_attack', state: { self: [{ tagged: 'tired' }, { tagged: 'competent_subordinate' }] } }],
        details: { self: { ap_up: { base: { microValue: 500000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' } } }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_wave' }],
        target: { kind: 'enemy' },
        details: { target: { damage_taken_increased: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 2500 }, term: 'infinite', times: 1, cannot_be_dispelled: true } } }
      }, {
        conditions: [{ trigger: 'end_wave' }],
        details: { self: { atk_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: 'infinite', cannot_be_dispelled: true } } }
      }]
    }]
  },
  251: {
    no: 251,
    active: [{
      damage_deal: {
        base: { milliPercentage: 140000 },
        per_lv_up: { milliPercentage: 20000 }
      },
      range: 5,
      cost: 8,
      area: 'row_toward_front',
      effects: [{
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: { target: { buff_removal: { effects: ['damage_reduction_up', 'row_protect', 'column_protect'], term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy', conditions: ['defender'] },
        details: { target: { all_buff_blocking: { term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ trigger: 'hit', state: { target: [{ not_affected: ['row_protect'] }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: 'immediate' } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 110000 },
        per_lv_up: { milliPercentage: 10000 }
      },
      range: 5,
      cost: 8,
      area: 'cross',
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: { target: { buff_removal: { effects: ['spd_up', 'target_protect'], term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'hit', state: { target: [{ affected: 'immovable' }, { affected: 'eva_down' }] } }],
        target: { kind: 'enemy' },
        details: {
          self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: 'immediate' } },
          target: { ap_down: { base: { microValue: 250000 }, per_lv_up: { microValue: 50000 }, term: 'immediate' } }
        }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { defense_penetration: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 3500 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        scale_factor: { per_units: { type: 'squad', except: 'self' } },
        details: { self: { acc_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'use_active_1' }],
        details: { self: { atk_up: { tag: 'assault_formation', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 }, max_stack: 2 } } }
      }, {
        conditions: [{ trigger: 'use_active_2' }],
        details: { self: { spd_up: { tag: 'flanking_formation', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 3 }, max_stack: 2 } } }
      }]
    }, {
      area: 'fixed_fleet_formation',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['attacker'] },
        details: {
          target: {
            atk_up: { tag: 'command_sharing', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            defense_penetration: { tag: 'command_sharing', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['defender'] },
        details: {
          target: {
            damage_reduction_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            status_resist_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['mermaid'] },
        details: {
          target: {
            damage_reduction_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 500 }, term: { for_rounds: 1 } },
            status_resist_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ tagged: 'assault_formation' }] } }],
        target: { kind: 'ally' },
        details: { target: { atk_up: { tag: 'assault_formation', base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ tagged: 'flanking_formation' }] } }],
        target: { kind: 'ally' },
        details: { target: { spd_up: { tag: 'flanking_formation', base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_wave', state: { squad: { not_in_squad: 252 } } }],
        target: { kind: 'enemy' },
        details: {
          target: {
            eva_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: 'infinite' },
            damage_taken_increased: { base: { milliPercentage: 4000 }, per_lv_up: { milliPercentage: 400 }, term: 'infinite' }
          }
        }
      }, {
        conditions: [{ trigger: 'start_wave', state: { squad: { in_squad: 252 } } }],
        target: { kind: 'enemy' },
        details: {
          target: {
            eva_down: { tag: 'radar_detection', base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: 'infinite' },
            damage_taken_increased: { tag: 'radar_detection', base: { milliPercentage: 8000 }, per_lv_up: { milliPercentage: 800 }, term: 'infinite' },
            atk_down: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 } },
            ignore_protect_deactivate: { term: { for_rounds: 2 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: [252] },
        details: { target: { follow_up_attack: { term: { for_rounds: 1 } } } }
      }]
    }]
  },
  252: {
    no: 252,
    active: [{
      damage_deal: {
        base: { milliPercentage: 128500 },
        per_lv_up: { milliPercentage: 13500 }
      },
      range: 5,
      cost: 9,
      area: 'cross',
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ trigger: 'hit', state: { target: [{ tagged: 'radar_detection' }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'hit', state: { target: [{ not_affected: ['spd_up'] }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: 'immediate' } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 152000 },
        per_lv_up: { milliPercentage: 22000 }
      },
      range: 5,
      cost: 8,
      area: 'row_toward_front',
      effects: [{
        conditions: [{ trigger: 'critical' }],
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'hit', state: { target: [{ not_affected: ['damage_reduction_up'] }] } }],
        target: { kind: 'enemy' },
        details: { self: { additional_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: 'immediate' } } }
      }]
    }],
    passive: [{
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            cri_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 35000 }, per_lv_up: { milliPercentage: 3500 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ tagged: 'command_sharing' }] } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            defense_penetration: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            spd_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            damage_multiplier_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { in_squad: 251 } } }],
        details: {
          self: {
            spd_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            ignore_protect: { term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ tagged: 'assault_formation' }, { tagged: 'flanking_formation' }] } }],
        details: { self: { damage_multiplier_up: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'self',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { squad: { not_in_squad: 'attacker' } } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { num_of_units: { unit: 'attacker', equal: 1 } } } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 30000 }, per_lv_up: { milliPercentage: 3000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { num_of_units: { unit: 'attacker', equal: 2 } } } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 4000 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 4000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { num_of_units: { unit: 'attacker', equal: 3 } } } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 50000 }, per_lv_up: { milliPercentage: 5000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { num_of_units: { unit: 'attacker', equal: 4 } } } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 60000 }, per_lv_up: { milliPercentage: 6000 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 60000 }, per_lv_up: { milliPercentage: 6000 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { squad: { in_squad: 253 } } }],
        details: {
          self: {
            atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } },
            acc_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }]
  },
  253: {
    no: 253,
    active: [{
      damage_deal: {
        base: { milliPercentage: 135000 },
        per_lv_up: { milliPercentage: 11100 }
      },
      range: 3,
      cost: 5,
      area: 'single',
      effects: [{
        conditions: [{ trigger: 'attack' }],
        target: { kind: 'enemy' },
        details: { target: { eva_down: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: { target: { atk_down: { base: { milliPercentage: 15000 }, per_lv_up: { milliPercentage: 1500 }, term: { for_rounds: 2 } } } }
      }, {
        conditions: [{ trigger: 'use_this_active' }],
        details: { self: { acc_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 10000 }, term: 'immediate' } } }
      }]
    }, {
      damage_deal: {
        base: { milliPercentage: 163000 },
        per_lv_up: { milliPercentage: 9000 }
      },
      range: 2,
      cost: 8,
      area: 'row_toward_front',
      effects: [{
        details: { self: { ignore_protect: {} } }
      }, {
        conditions: [{ trigger: 'hit' }],
        target: { kind: 'enemy' },
        details: {
          self: { all_debuff_removal: { term: 'immediate' } },
          target: { provoked: { term: { for_rounds: 2 } } }
        }
      }, {
        conditions: [{ trigger: 'hit', state: { squad: { not_in_squad: 'mermaid' } } }],
        details: { self: { fixed_damage: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: -1000 }, term: 'immediate' } } }
      }, {
        conditions: [{ trigger: 'hit', state: { squad: { in_squad: 'mermaid' } } }],
        details: {
          self: {
            fixed_damage: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: -500 }, term: 'immediate' },
            defense_penetration: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 4000 }, term: 'immediate' }
          }
        }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ affected: 'def_up' }] } }],
        target: { kind: 'enemy' },
        details: {
          target: {
            damage_taken_increased: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 2500 }, term: 'immediate' },
            buff_removal: { effect: 'def_up', term: 'immediate' }
          }
        }
      }, {
        conditions: [{ trigger: 'hit', state: { self: [{ affected: 'spd_up' }] } }],
        target: { kind: 'enemy' },
        details: {
          target: {
            damage_taken_increased: { base: { milliPercentage: 25000 }, per_lv_up: { milliPercentage: 2500 }, term: 'immediate' },
            buff_removal: { effect: 'spd_up', term: 'immediate' }
          }
        }
      }]
    }],
    passive: [{
      area: 'fixed_all',
      effects:[{
        conditions: [{ trigger: 'start_round' }],
        details: { self: { barrier: { tag: 'circling_formation', base: { value: 200 }, per_lv_up: { value: 20 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round' }],
        target: { kind: 'ally', conditions: ['supporter'] },
        details: {
          target: {
            target_protect: { tag: 'circling_formation', term: { for_rounds: 1 } },
            barrier: { tag: 'circling_formation', base: { value: 200 }, per_lv_up: { value: 20 }, term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ grid: 'mid_line' }] } }],
        target: { kind: 'ally', conditions: ['supporter'] },
        details: { target: { spd_up: { base: { milliPercentage: 5000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ grid: 'back_line' }] } }],
        target: { kind: 'ally', conditions: ['supporter'] },
        details: { target: { atk_up: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { target: [{ tagged: 'command_sharing' }] } }],
        target: { kind: 'ally', conditions: ['attacker'] },
        details: {
          target: {
            target_protect: { tag: 'circling_formation', term: { for_rounds: 1 } },
            barrier: { tag: 'circling_formation', base: { value: 200 }, per_lv_up: { value: 20 }, term: { for_rounds: 1 } }
          }
        }
      }]
    }, {
      area: 'self',
      effects:[{
        conditions: [{ trigger: 'start_round' }],
        details: {
          self: {
            def_up: { base: { milliPercentage: 40000 }, per_lv_up: { milliPercentage: 4000 }, term: { for_rounds: 1 } },
            defense_penetration_resist_up_by_self_hp_rate: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } },
            row_protect: { term: { for_rounds: 1 } }
          }
        }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'damage_reduction_up' }] } }],
        details: { self: { def_up: { base: { milliPercentage: 20000 }, per_lv_up: { milliPercentage: 2000 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'start_round', state: { self: [{ affected: 'follow_up_attack' }] } }],
        details: { self: { defense_penetration_resist_up_by_self_hp_rate: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 1 } } } }
      }]
    }, {
      area: 'fixed_all',
      effects: [{
        conditions: [{ trigger: 'start_round', state: { target: [{ affected: 'damage_taken_increased' }] } }],
        target: { kind: 'enemy' },
        details: { target: { spd_down: { tag: 'heroic_virtue', base: { milliPercentage: 2000 }, per_lv_up: { milliPercentage: 400 }, term: { for_rounds: 1 } } } }
      }, {
        conditions: [{ trigger: 'be_hit', state: { target: [{ tagged_affected: { tag: 'heroic_virtue', effect: 'spd_down' } }] } }],
        target: { kind: 'enemy' },
        details: { target: { heavy_type_damage_down: { base: { milliPercentage: 10000 }, per_lv_up: { milliPercentage: 1000 }, term: { for_rounds: 2 }, max_stack: 3 } } }
      }, {
        conditions: [{ trigger: 'be_hit', state: { target: [{ tagged_affected: { tag: 'circling_formation', effect: 'barrier' } }] } }],
        target: { kind: 'ally' },
        details: { target: { ap_up: { microValue: 400000, term: 'immediate' } } }
      }]
    }]
  }
} as const;
