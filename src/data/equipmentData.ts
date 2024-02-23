export const equipmentData = {
  hp_chip: {
    type: 'chip',
    id: 'hp_chip',
    max_rank: 'ss',
    status_effects: [
      { hp_up: { value: { ss: 200, s: 160, a: 120, b:  80 } } },
      { hp_up: { value: { ss: 240, s: 192, a: 144, b:  96 } } },
      { hp_up: { value: { ss: 280, s: 224, a: 168, b: 112 } } },
      { hp_up: { value: { ss: 320, s: 256, a: 192, b: 128 } } },
      { hp_up: { value: { ss: 360, s: 288, a: 216, b: 144 } } },
      { hp_up: { value: { ss: 400, s: 320, a: 240, b: 160 } } },
      { hp_up: { value: { ss: 440, s: 352, a: 264, b: 176 } } },
      { hp_up: { value: { ss: 480, s: 384, a: 288, b: 192 } } },
      { hp_up: { value: { ss: 520, s: 416, a: 312, b: 208 } } },
      { hp_up: { value: { ss: 560, s: 448, a: 336, b: 224 } } },
      { hp_up: { value: { ss: 600, s: 480, a: 360, b: 240 } } }
    ]
  },
  hp_chip_beta: {
    type: 'chip',
    id: 'hp_chip_beta',
    max_rank: 'sss',
    status_effects: [
      { hp_up: { value: { sss:  300, ss: 240, s: 192,   a: 144,   b:  96   } }, atk_down: { milliValue: { sss: 32000, ss: 25000, s: 25000, a: 25000, b: 25000 } } },
      { hp_up: { value: { sss:  315, ss: 288, s: 230.4, a: 172.8, b: 115.2 } }, atk_down: { milliValue: { sss: 35000, ss: 27500, s: 27500, a: 27500, b: 27500 } } },
      { hp_up: { value: { sss:  330, ss: 336, s: 268.8, a: 201.6, b: 134.4 } }, atk_down: { milliValue: { sss: 35000, ss: 30000, s: 30000, a: 30000, b: 30000 } } },
      { hp_up: { value: { sss:  360, ss: 384, s: 307.2, a: 230.4, b: 153.6 } }, atk_down: { milliValue: { sss: 35000, ss: 32500, s: 32500, a: 32500, b: 32500 } } },
      { hp_up: { value: { sss:  405, ss: 432, s: 345.6, a: 259.2, b: 172.8 } }, atk_down: { milliValue: { sss: 35000, ss: 35000, s: 35000, a: 35000, b: 35000 } } },
      { hp_up: { value: { sss:  465, ss: 480, s: 384,   a: 288,   b: 192   } }, atk_down: { milliValue: { sss: 35000, ss: 37500, s: 37500, a: 37500, b: 37500 } } },
      { hp_up: { value: { sss:  510, ss: 528, s: 422.4, a: 316.8, b: 211.2 } }, atk_down: { milliValue: { sss: 35000, ss: 40000, s: 40000, a: 40000, b: 40000 } } },
      { hp_up: { value: { sss:  600, ss: 576, s: 460.8, a: 345.6, b: 230.4 } }, atk_down: { milliValue: { sss: 35000, ss: 42500, s: 42500, a: 42500, b: 42500 } } },
      { hp_up: { value: { sss:  720, ss: 624, s: 499.2, a: 374.4, b: 249.6 } }, atk_down: { milliValue: { sss: 35000, ss: 45000, s: 45000, a: 45000, b: 45000 } } },
      { hp_up: { value: { sss:  870, ss: 672, s: 537.6, a: 403.2, b: 268.8 } }, atk_down: { milliValue: { sss: 35000, ss: 47500, s: 47500, a: 47500, b: 47500 } } },
      { hp_up: { value: { sss: 1050, ss: 720, s: 576,   a: 432,   b: 288   } }, atk_down: { milliValue: { sss: 35000, ss: 50000, s: 50000, a: 50000, b: 50000 } } }
    ]
  },
  attack_chip: {
    type: 'chip',
    id: 'attack_chip',
    max_rank: 'ss',
    status_effects: [
      { atk_up: { milliValue: { ss:  50000, s: 40000, a: 30000, b: 20000 } } },
      { atk_up: { milliValue: { ss:  55000, s: 44000, a: 33000, b: 22000 } } },
      { atk_up: { milliValue: { ss:  60000, s: 48000, a: 36000, b: 24000 } } },
      { atk_up: { milliValue: { ss:  65000, s: 52000, a: 39000, b: 26000 } } },
      { atk_up: { milliValue: { ss:  70000, s: 56000, a: 42000, b: 28000 } } },
      { atk_up: { milliValue: { ss:  75000, s: 60000, a: 45000, b: 30000 } } },
      { atk_up: { milliValue: { ss:  80000, s: 64000, a: 48000, b: 32000 } } },
      { atk_up: { milliValue: { ss:  85000, s: 68000, a: 51000, b: 34000 } } },
      { atk_up: { milliValue: { ss:  90000, s: 72000, a: 54000, b: 36000 } } },
      { atk_up: { milliValue: { ss:  95000, s: 76000, a: 57000, b: 38000 } } },
      { atk_up: { milliValue: { ss: 100000, s: 80000, a: 60000, b: 40000 } } }
    ]
  },
  attack_chip_beta: {
    type: 'chip',
    id: 'attack_chip_beta',
    max_rank: 'sss',
    status_effects: [
      { atk_up: { milliValue: { sss:  70000, ss:  60000, s: 48000, a: 36000, b: 24000 } }, eva_down: { milliPercentage: { sss: 10000, ss:  6000, s:  6000, a:  6000, b:  6000 } } },
      { atk_up: { milliValue: { sss:  75000, ss:  66000, s: 52800, a: 39600, b: 26400 } }, eva_down: { milliPercentage: { sss: 11000, ss:  6600, s:  6600, a:  6600, b:  6600 } } },
      { atk_up: { milliValue: { sss:  80000, ss:  72000, s: 57600, a: 43200, b: 28800 } }, eva_down: { milliPercentage: { sss: 11000, ss:  7200, s:  7200, a:  7200, b:  7200 } } },
      { atk_up: { milliValue: { sss:  85000, ss:  78000, s: 62400, a: 46800, b: 31200 } }, eva_down: { milliPercentage: { sss: 11000, ss:  7800, s:  7800, a:  7800, b:  7800 } } },
      { atk_up: { milliValue: { sss:  90000, ss:  84000, s: 67200, a: 50400, b: 33600 } }, eva_down: { milliPercentage: { sss: 11000, ss:  8400, s:  8400, a:  8400, b:  8400 } } },
      { atk_up: { milliValue: { sss: 100000, ss:  90000, s: 72000, a: 54000, b: 36000 } }, eva_down: { milliPercentage: { sss: 11000, ss:  9000, s:  9000, a:  9000, b:  9000 } } },
      { atk_up: { milliValue: { sss: 107000, ss:  96000, s: 76800, a: 57600, b: 38400 } }, eva_down: { milliPercentage: { sss: 11000, ss:  9600, s:  9600, a:  9600, b:  9600 } } },
      { atk_up: { milliValue: { sss: 114000, ss: 102000, s: 81600, a: 61200, b: 40800 } }, eva_down: { milliPercentage: { sss: 11000, ss: 10200, s: 10200, a: 10200, b: 10200 } } },
      { atk_up: { milliValue: { sss: 121000, ss: 108000, s: 86400, a: 64800, b: 43200 } }, eva_down: { milliPercentage: { sss: 11000, ss: 10800, s: 10800, a: 10800, b: 10800 } } },
      { atk_up: { milliValue: { sss: 128000, ss: 114000, s: 91200, a: 68400, b: 45600 } }, eva_down: { milliPercentage: { sss: 11000, ss: 11400, s: 11400, a: 11400, b: 11400 } } },
      { atk_up: { milliValue: { sss: 135000, ss: 120000, s: 96000, a: 72000, b: 48000 } }, eva_down: { milliPercentage: { sss: 11000, ss: 12000, s: 12000, a: 12000, b: 12000 } } }
    ]
  },
  defense_chip: {
    type: 'chip',
    id: 'defense_chip',
    max_rank: 'ss',
    status_effects: [
      { def_up: { milliValue: { ss:  36000, s: 30000, a: 24000, b: 16000 } } },
      { def_up: { milliValue: { ss:  43200, s: 36000, a: 28800, b: 19200 } } },
      { def_up: { milliValue: { ss:  50400, s: 42000, a: 33600, b: 22400 } } },
      { def_up: { milliValue: { ss:  57600, s: 48000, a: 38400, b: 25600 } } },
      { def_up: { milliValue: { ss:  64800, s: 54000, a: 43200, b: 28800 } } },
      { def_up: { milliValue: { ss:  72000, s: 60000, a: 48000, b: 32000 } } },
      { def_up: { milliValue: { ss:  79200, s: 66000, a: 52800, b: 35200 } } },
      { def_up: { milliValue: { ss:  86400, s: 72000, a: 57600, b: 38400 } } },
      { def_up: { milliValue: { ss:  93600, s: 78000, a: 62400, b: 41600 } } },
      { def_up: { milliValue: { ss: 100800, s: 84000, a: 67200, b: 44800 } } },
      { def_up: { milliValue: { ss: 108000, s: 90000, a: 72000, b: 48000 } } }
    ]
  },
  defense_chip_beta: {
    type: 'chip',
    id: 'defense_chip_beta',
    max_rank: 'sss',
    status_effects: [
      { def_up: { milliValue: { sss: 100000, ss:  65000, s:  54000, a: 43000, b: 30000 } }, atk_down: { milliValue: { sss: 32000, ss: 25000, s: 25000, a: 25000, b: 25000 } } },
      { def_up: { milliValue: { sss: 110000, ss:  71500, s:  59400, a: 47300, b: 33000 } }, atk_down: { milliValue: { sss: 35000, ss: 27500, s: 27500, a: 27500, b: 27500 } } },
      { def_up: { milliValue: { sss: 120000, ss:  78000, s:  64800, a: 51600, b: 36000 } }, atk_down: { milliValue: { sss: 35000, ss: 30000, s: 30000, a: 30000, b: 30000 } } },
      { def_up: { milliValue: { sss: 130000, ss:  84500, s:  70200, a: 55900, b: 39000 } }, atk_down: { milliValue: { sss: 35000, ss: 32500, s: 32500, a: 32500, b: 32500 } } },
      { def_up: { milliValue: { sss: 140000, ss:  91000, s:  75600, a: 60200, b: 42000 } }, atk_down: { milliValue: { sss: 35000, ss: 35000, s: 35000, a: 35000, b: 35000 } } },
      { def_up: { milliValue: { sss: 150000, ss:  97500, s:  81000, a: 64500, b: 45000 } }, atk_down: { milliValue: { sss: 35000, ss: 37500, s: 37500, a: 37500, b: 37500 } } },
      { def_up: { milliValue: { sss: 160000, ss: 104000, s:  86400, a: 68800, b: 48000 } }, atk_down: { milliValue: { sss: 35000, ss: 40000, s: 40000, a: 40000, b: 40000 } } },
      { def_up: { milliValue: { sss: 170000, ss: 110500, s:  91800, a: 73100, b: 51000 } }, atk_down: { milliValue: { sss: 35000, ss: 42500, s: 42500, a: 42500, b: 42500 } } },
      { def_up: { milliValue: { sss: 180000, ss: 117000, s:  97200, a: 77400, b: 54000 } }, atk_down: { milliValue: { sss: 35000, ss: 45000, s: 45000, a: 45000, b: 45000 } } },
      { def_up: { milliValue: { sss: 190000, ss: 123500, s: 102600, a: 81700, b: 57000 } }, atk_down: { milliValue: { sss: 35000, ss: 47500, s: 47500, a: 47500, b: 47500 } } },
      { def_up: { milliValue: { sss: 200000, ss: 130000, s: 108000, a: 86000, b: 60000 } }, atk_down: { milliValue: { sss: 35000, ss: 50000, s: 50000, a: 50000, b: 50000 } } }
    ]
  },
  critical_chip: {
    type: 'chip',
    id: 'critical_chip',
    max_rank: 'ss',
    status_effects: [
      { cri_up: { milliPercentage: { ss:  8000, s:  6000, a:  5000, b:  4000 } } },
      { cri_up: { milliPercentage: { ss:  8400, s:  6300, a:  5250, b:  4200 } } },
      { cri_up: { milliPercentage: { ss:  8800, s:  6600, a:  5500, b:  4400 } } },
      { cri_up: { milliPercentage: { ss:  9600, s:  7200, a:  6000, b:  4800 } } },
      { cri_up: { milliPercentage: { ss: 10800, s:  8100, a:  6750, b:  5400 } } },
      { cri_up: { milliPercentage: { ss: 12400, s:  9300, a:  7750, b:  6200 } } },
      { cri_up: { milliPercentage: { ss: 13600, s: 10200, a:  8500, b:  6800 } } },
      { cri_up: { milliPercentage: { ss: 16000, s: 12000, a: 10000, b:  8000 } } },
      { cri_up: { milliPercentage: { ss: 19200, s: 14400, a: 12000, b:  9600 } } },
      { cri_up: { milliPercentage: { ss: 23200, s: 17400, a: 14500, b: 11600 } } },
      { cri_up: { milliPercentage: { ss: 28000, s: 21000, a: 17500, b: 14000 } } }
    ]
  },
  critical_chip_beta: {
    type: 'chip',
    id: 'critical_chip_beta',
    max_rank: 'sss',
    status_effects: [
      { cri_up: { milliPercentage: { sss: 12000, ss:  9600, s:  7200, a:  6000, b:  4800 } }, def_down: { milliValue: { sss: 50000, ss: 27000, s: 27000, a: 27000, b: 27000 } } },
      { cri_up: { milliPercentage: { sss: 14400, ss: 10080, s:  7560, a:  6300, b:  5040 } }, def_down: { milliValue: { sss: 55000, ss: 29700, s: 29700, a: 29700, b: 29700 } } },
      { cri_up: { milliPercentage: { sss: 16800, ss: 10560, s:  7920, a:  6600, b:  5280 } }, def_down: { milliValue: { sss: 55000, ss: 32400, s: 32400, a: 32400, b: 32400 } } },
      { cri_up: { milliPercentage: { sss: 19200, ss: 11520, s:  8640, a:  7200, b:  5760 } }, def_down: { milliValue: { sss: 55000, ss: 35100, s: 35100, a: 35100, b: 35100 } } },
      { cri_up: { milliPercentage: { sss: 21600, ss: 12960, s:  9720, a:  8100, b:  6480 } }, def_down: { milliValue: { sss: 55000, ss: 37800, s: 37800, a: 37800, b: 37800 } } },
      { cri_up: { milliPercentage: { sss: 24000, ss: 14880, s: 11160, a:  9300, b:  7440 } }, def_down: { milliValue: { sss: 55000, ss: 40500, s: 40500, a: 40500, b: 40500 } } },
      { cri_up: { milliPercentage: { sss: 26400, ss: 16320, s: 12240, a: 10200, b:  8160 } }, def_down: { milliValue: { sss: 55000, ss: 43200, s: 43200, a: 43200, b: 43200 } } },
      { cri_up: { milliPercentage: { sss: 28800, ss: 19200, s: 14400, a: 12000, b:  9600 } }, def_down: { milliValue: { sss: 55000, ss: 45900, s: 45900, a: 45900, b: 45900 } } },
      { cri_up: { milliPercentage: { sss: 31200, ss: 23040, s: 17280, a: 14400, b: 11520 } }, def_down: { milliValue: { sss: 55000, ss: 48600, s: 48600, a: 48600, b: 48600 } } },
      { cri_up: { milliPercentage: { sss: 33600, ss: 27840, s: 20880, a: 17400, b: 13920 } }, def_down: { milliValue: { sss: 55000, ss: 51300, s: 51300, a: 51300, b: 51300 } } },
      { cri_up: { milliPercentage: { sss: 36000, ss: 33600, s: 25200, a: 21000, b: 16800 } }, def_down: { milliValue: { sss: 55000, ss: 54000, s: 54000, a: 54000, b: 54000 } } }
    ]
  },
  accuracy_chip: {
    type: 'chip',
    id: 'accuracy_chip',
    max_rank: 'ss',
    status_effects: [
      { acc_up: { milliPercentage: { ss: 35000, s: 25000, a: 20000, b: 15000 } } },
      { acc_up: { milliPercentage: { ss: 38500, s: 27500, a: 22000, b: 16500 } } },
      { acc_up: { milliPercentage: { ss: 42000, s: 30000, a: 24000, b: 18000 } } },
      { acc_up: { milliPercentage: { ss: 45500, s: 32500, a: 26000, b: 19500 } } },
      { acc_up: { milliPercentage: { ss: 49000, s: 35000, a: 28000, b: 21000 } } },
      { acc_up: { milliPercentage: { ss: 52500, s: 37500, a: 30000, b: 22500 } } },
      { acc_up: { milliPercentage: { ss: 56000, s: 40000, a: 32000, b: 24000 } } },
      { acc_up: { milliPercentage: { ss: 59500, s: 42500, a: 34000, b: 25500 } } },
      { acc_up: { milliPercentage: { ss: 63000, s: 45000, a: 36000, b: 27000 } } },
      { acc_up: { milliPercentage: { ss: 66500, s: 47500, a: 38000, b: 28500 } } },
      { acc_up: { milliPercentage: { ss: 70000, s: 50000, a: 40000, b: 30000 } } }
    ]
  },
  accuracy_chip_beta: {
    type: 'chip',
    id: 'accuracy_chip_beta',
    max_rank: 'sss',
    status_effects: [
      { acc_up: { milliPercentage: { sss: 45000, ss: 42000, s: 30000, a: 24000, b: 18000 } }, def_down: { milliValue: { sss: 45000, ss: 27000, s: 27000, a: 27000, b: 27000 } } },
      { acc_up: { milliPercentage: { sss: 49000, ss: 46200, s: 33000, a: 26400, b: 19800 } }, def_down: { milliValue: { sss: 49000, ss: 29700, s: 29700, a: 29700, b: 29700 } } },
      { acc_up: { milliPercentage: { sss: 53000, ss: 50400, s: 36000, a: 28800, b: 21600 } }, def_down: { milliValue: { sss: 49000, ss: 32400, s: 32400, a: 32400, b: 32400 } } },
      { acc_up: { milliPercentage: { sss: 57000, ss: 54600, s: 39000, a: 31200, b: 23400 } }, def_down: { milliValue: { sss: 49000, ss: 35100, s: 35100, a: 35100, b: 35100 } } },
      { acc_up: { milliPercentage: { sss: 61000, ss: 58800, s: 42000, a: 33600, b: 25200 } }, def_down: { milliValue: { sss: 49000, ss: 37800, s: 37800, a: 37800, b: 37800 } } },
      { acc_up: { milliPercentage: { sss: 65000, ss: 63000, s: 45000, a: 36000, b: 27000 } }, def_down: { milliValue: { sss: 49000, ss: 40500, s: 40500, a: 40500, b: 40500 } } },
      { acc_up: { milliPercentage: { sss: 70000, ss: 67200, s: 48000, a: 38400, b: 28800 } }, def_down: { milliValue: { sss: 49000, ss: 43200, s: 43200, a: 43200, b: 43200 } } },
      { acc_up: { milliPercentage: { sss: 75000, ss: 71400, s: 51000, a: 40800, b: 30600 } }, def_down: { milliValue: { sss: 49000, ss: 45900, s: 45900, a: 45900, b: 45900 } } },
      { acc_up: { milliPercentage: { sss: 80000, ss: 75600, s: 54000, a: 43200, b: 32400 } }, def_down: { milliValue: { sss: 49000, ss: 48600, s: 48600, a: 48600, b: 48600 } } },
      { acc_up: { milliPercentage: { sss: 85000, ss: 79800, s: 57000, a: 45600, b: 34200 } }, def_down: { milliValue: { sss: 49000, ss: 51300, s: 51300, a: 51300, b: 51300 } } },
      { acc_up: { milliPercentage: { sss: 90000, ss: 84000, s: 60000, a: 48000, b: 36000 } }, def_down: { milliValue: { sss: 49000, ss: 54000, s: 54000, a: 54000, b: 54000 } } }
    ]
  },
  evasion_chip: {
    type: 'chip',
    id: 'evasion_chip',
    max_rank: 'ss',
    status_effects: [
      { eva_up: { milliPercentage: { ss: 15000, s: 10000, a:  8000, b: 6000 } } },
      { eva_up: { milliPercentage: { ss: 15750, s: 10500, a:  8400, b: 6300 } } },
      { eva_up: { milliPercentage: { ss: 16500, s: 11000, a:  8800, b: 6600 } } },
      { eva_up: { milliPercentage: { ss: 17250, s: 11500, a:  9200, b: 6900 } } },
      { eva_up: { milliPercentage: { ss: 18000, s: 12000, a:  9600, b: 7200 } } },
      { eva_up: { milliPercentage: { ss: 18750, s: 12500, a: 10000, b: 7500 } } },
      { eva_up: { milliPercentage: { ss: 19500, s: 13000, a: 10400, b: 7800 } } },
      { eva_up: { milliPercentage: { ss: 20250, s: 13500, a: 10800, b: 8100 } } },
      { eva_up: { milliPercentage: { ss: 21000, s: 14000, a: 11200, b: 8400 } } },
      { eva_up: { milliPercentage: { ss: 21750, s: 14500, a: 11600, b: 8700 } } },
      { eva_up: { milliPercentage: { ss: 22500, s: 15000, a: 12000, b: 9000 } } }
    ]
  },
  evasion_chip_beta: {
    type: 'chip',
    id: 'evasion_chip_beta',
    max_rank: 'sss',
    status_effects: [
      { eva_up: { milliPercentage: { sss: 20000, ss: 18000, s: 12000, a:  9600, b:  7200 } }, atk_down: { milliValue: { sss: 32000, ss: 25000, s: 25000, a: 25000, b: 25000 } } },
      { eva_up: { milliPercentage: { sss: 21000, ss: 18900, s: 12600, a: 10080, b:  7560 } }, atk_down: { milliValue: { sss: 35000, ss: 27500, s: 27500, a: 27500, b: 27500 } } },
      { eva_up: { milliPercentage: { sss: 22000, ss: 19800, s: 13200, a: 10560, b:  7920 } }, atk_down: { milliValue: { sss: 35000, ss: 30000, s: 30000, a: 30000, b: 30000 } } },
      { eva_up: { milliPercentage: { sss: 23000, ss: 20700, s: 13800, a: 11040, b:  8280 } }, atk_down: { milliValue: { sss: 35000, ss: 32500, s: 32500, a: 32500, b: 32500 } } },
      { eva_up: { milliPercentage: { sss: 24000, ss: 21600, s: 14400, a: 11520, b:  8640 } }, atk_down: { milliValue: { sss: 35000, ss: 35000, s: 35000, a: 35000, b: 35000 } } },
      { eva_up: { milliPercentage: { sss: 25000, ss: 22500, s: 15000, a: 12000, b:  9000 } }, atk_down: { milliValue: { sss: 35000, ss: 37500, s: 37500, a: 37500, b: 37500 } } },
      { eva_up: { milliPercentage: { sss: 26000, ss: 23400, s: 15600, a: 12480, b:  9360 } }, atk_down: { milliValue: { sss: 35000, ss: 40000, s: 40000, a: 40000, b: 40000 } } },
      { eva_up: { milliPercentage: { sss: 27000, ss: 24300, s: 16200, a: 12960, b:  9720 } }, atk_down: { milliValue: { sss: 35000, ss: 42500, s: 42500, a: 42500, b: 42500 } } },
      { eva_up: { milliPercentage: { sss: 28000, ss: 25200, s: 16800, a: 13440, b: 10080 } }, atk_down: { milliValue: { sss: 35000, ss: 45000, s: 45000, a: 45000, b: 45000 } } },
      { eva_up: { milliPercentage: { sss: 29000, ss: 26100, s: 17400, a: 13920, b: 10440 } }, atk_down: { milliValue: { sss: 35000, ss: 47500, s: 47500, a: 47500, b: 47500 } } },
      { eva_up: { milliPercentage: { sss: 30000, ss: 27000, s: 18000, a: 14400, b: 10800 } }, atk_down: { milliValue: { sss: 35000, ss: 50000, s: 50000, a: 50000, b: 50000 } } }
    ]
  },
  action_chip: {
    type: 'chip',
    id: 'action_chip',
    max_rank: 'ss',
    status_effects: [
      { spd_up: { microValue: { ss: 150000, s: 140000, a: 120000, b: 100000 } } },
      { spd_up: { microValue: { ss: 157500, s: 147000, a: 126000, b: 105000 } } },
      { spd_up: { microValue: { ss: 165000, s: 154000, a: 132000, b: 110000 } } },
      { spd_up: { microValue: { ss: 172500, s: 161000, a: 138000, b: 115000 } } },
      { spd_up: { microValue: { ss: 180000, s: 168000, a: 144000, b: 120000 } } },
      { spd_up: { microValue: { ss: 187500, s: 175000, a: 150000, b: 125000 } } },
      { spd_up: { microValue: { ss: 195000, s: 182000, a: 156000, b: 130000 } } },
      { spd_up: { microValue: { ss: 202500, s: 189000, a: 162000, b: 135000 } } },
      { spd_up: { microValue: { ss: 210000, s: 196000, a: 168000, b: 140000 } } },
      { spd_up: { microValue: { ss: 217500, s: 203000, a: 174000, b: 145000 } } },
      { spd_up: { microValue: { ss: 225000, s: 210000, a: 180000, b: 150000 } } }
    ]
  },
  action_chip_beta: {
    type: 'chip',
    id: 'action_chip_beta',
    max_rank: 'sss',
    status_effects: [
      { spd_up: { microValue: { sss: 190000, ss: 180000, s: 168000, a: 144000, b: 120000 } }, eva_down: { milliPercentage: { sss: 10000, ss:  6000, s:  6000, a:  6000, b:  6000 } } },
      { spd_up: { microValue: { sss: 200000, ss: 189000, s: 176400, a: 151200, b: 126000 } }, eva_down: { milliPercentage: { sss: 11000, ss:  6600, s:  6600, a:  6600, b:  6600 } } },
      { spd_up: { microValue: { sss: 210000, ss: 198000, s: 184800, a: 158400, b: 132000 } }, eva_down: { milliPercentage: { sss: 11000, ss:  7200, s:  7200, a:  7200, b:  7200 } } },
      { spd_up: { microValue: { sss: 220000, ss: 207000, s: 193200, a: 165600, b: 138000 } }, eva_down: { milliPercentage: { sss: 11000, ss:  7800, s:  7800, a:  7800, b:  7800 } } },
      { spd_up: { microValue: { sss: 230000, ss: 216000, s: 201600, a: 172800, b: 144000 } }, eva_down: { milliPercentage: { sss: 11000, ss:  8400, s:  8400, a:  8400, b:  8400 } } },
      { spd_up: { microValue: { sss: 240000, ss: 225000, s: 210000, a: 180000, b: 150000 } }, eva_down: { milliPercentage: { sss: 11000, ss:  9000, s:  9000, a:  9000, b:  9000 } } },
      { spd_up: { microValue: { sss: 250000, ss: 234000, s: 218400, a: 187200, b: 156000 } }, eva_down: { milliPercentage: { sss: 11000, ss:  9600, s:  9600, a:  9600, b:  9600 } } },
      { spd_up: { microValue: { sss: 260000, ss: 243000, s: 226800, a: 194400, b: 162000 } }, eva_down: { milliPercentage: { sss: 11000, ss: 10200, s: 10200, a: 10200, b: 10200 } } },
      { spd_up: { microValue: { sss: 270000, ss: 252000, s: 235200, a: 201600, b: 168000 } }, eva_down: { milliPercentage: { sss: 11000, ss: 10800, s: 10800, a: 10800, b: 10800 } } },
      { spd_up: { microValue: { sss: 280000, ss: 261000, s: 243600, a: 208800, b: 174000 } }, eva_down: { milliPercentage: { sss: 11000, ss: 11400, s: 11400, a: 11400, b: 11400 } } },
      { spd_up: { microValue: { sss: 290000, ss: 270000, s: 252000, a: 216000, b: 180000 } }, eva_down: { milliPercentage: { sss: 11000, ss: 12000, s: 12000, a: 12000, b: 12000 } } }
    ]
  },
  stabilization_chip: {
    type: 'chip',
    id: 'stabilization_chip',
    max_rank: 'ss',
    status_effects: [
      { atk_up: { milliValue: { ss: 28000, s: 22000, a: 16000, b: 12000 } }, cri_up: { milliPercentage: { ss:  6000, s:  5000, a: 4000, b: 3000 } }, spd_down: { microValue: 100000 } },
      { atk_up: { milliValue: { ss: 33600, s: 26400, a: 19200, b: 14400 } }, cri_up: { milliPercentage: { ss:  6600, s:  5500, a: 4400, b: 3300 } }, spd_down: { microValue: 100000 } },
      { atk_up: { milliValue: { ss: 39200, s: 30800, a: 22400, b: 16800 } }, cri_up: { milliPercentage: { ss:  7200, s:  6000, a: 4800, b: 3600 } }, spd_down: { microValue: 100000 } },
      { atk_up: { milliValue: { ss: 44800, s: 35200, a: 25600, b: 19200 } }, cri_up: { milliPercentage: { ss:  7800, s:  6500, a: 5200, b: 3900 } }, spd_down: { microValue: 100000 } },
      { atk_up: { milliValue: { ss: 50400, s: 39600, a: 28800, b: 21600 } }, cri_up: { milliPercentage: { ss:  8400, s:  7000, a: 5600, b: 4200 } }, spd_down: { microValue: 100000 } },
      { atk_up: { milliValue: { ss: 56000, s: 44000, a: 32000, b: 24000 } }, cri_up: { milliPercentage: { ss:  9000, s:  7500, a: 6000, b: 4500 } }, spd_down: { microValue: 100000 } },
      { atk_up: { milliValue: { ss: 61600, s: 48400, a: 35200, b: 26400 } }, cri_up: { milliPercentage: { ss:  9600, s:  8000, a: 6400, b: 4800 } }, spd_down: { microValue: 100000 } },
      { atk_up: { milliValue: { ss: 67200, s: 52800, a: 38400, b: 28800 } }, cri_up: { milliPercentage: { ss: 10200, s:  8500, a: 6800, b: 5100 } }, spd_down: { microValue: 100000 } },
      { atk_up: { milliValue: { ss: 72800, s: 57200, a: 41600, b: 31200 } }, cri_up: { milliPercentage: { ss: 10800, s:  9000, a: 7200, b: 5400 } }, spd_down: { microValue: 100000 } },
      { atk_up: { milliValue: { ss: 78400, s: 61600, a: 44800, b: 33600 } }, cri_up: { milliPercentage: { ss: 11400, s:  9500, a: 7600, b: 5700 } }, spd_down: { microValue: 100000 } },
      { atk_up: { milliValue: { ss: 84000, s: 66000, a: 48000, b: 36000 } }, cri_up: { milliPercentage: { ss: 12000, s: 10000, a: 8000, b: 6000 } }, spd_down: { microValue: 100000 } }
    ]
  },
  assault_chip: {
    type: 'chip',
    id: 'assault_chip',
    max_rank: 'ss',
    status_effects: [
      { atk_up: { milliValue: { ss:  65000, s:  55000, a: 45000, b: 40000 } }, acc_down: { milliPercentage: 30000 } },
      { atk_up: { milliValue: { ss:  71500, s:  60500, a: 49500, b: 44000 } }, acc_down: { milliPercentage: 33000 } },
      { atk_up: { milliValue: { ss:  78000, s:  66000, a: 54000, b: 48000 } }, acc_down: { milliPercentage: 36000 } },
      { atk_up: { milliValue: { ss:  84500, s:  71500, a: 58500, b: 52000 } }, acc_down: { milliPercentage: 39000 } },
      { atk_up: { milliValue: { ss:  91000, s:  77000, a: 63000, b: 56000 } }, acc_down: { milliPercentage: 42000 } },
      { atk_up: { milliValue: { ss:  97500, s:  82500, a: 67500, b: 60000 } }, acc_down: { milliPercentage: 45000 } },
      { atk_up: { milliValue: { ss: 104000, s:  88000, a: 72000, b: 64000 } }, acc_down: { milliPercentage: 48000 } },
      { atk_up: { milliValue: { ss: 110500, s:  93500, a: 76500, b: 68000 } }, acc_down: { milliPercentage: 51000 } },
      { atk_up: { milliValue: { ss: 117000, s:  99000, a: 81000, b: 72000 } }, acc_down: { milliPercentage: 54000 } },
      { atk_up: { milliValue: { ss: 123500, s: 104500, a: 85500, b: 76000 } }, acc_down: { milliPercentage: 57000 } },
      { atk_up: { milliValue: { ss: 130000, s: 110000, a: 90000, b: 80000 } }, acc_down: { milliPercentage: 60000 } }
    ]
  },
  output_control_chip: {
    type: 'chip',
    id: 'output_control_chip',
    max_rank: 'ss',
    status_effects: [
      { atk_up: { milliValue: { ss:  50000, s:  40000, a: 30000, b: 20000 } }, cri_down: { milliPercentage: 12000 } },
      { atk_up: { milliValue: { ss:  60000, s:  48000, a: 36000, b: 24000 } }, cri_down: { milliPercentage: 12000 } },
      { atk_up: { milliValue: { ss:  70000, s:  56000, a: 42000, b: 28000 } }, cri_down: { milliPercentage: 12000 } },
      { atk_up: { milliValue: { ss:  80000, s:  64000, a: 48000, b: 32000 } }, cri_down: { milliPercentage: 12000 } },
      { atk_up: { milliValue: { ss:  90000, s:  72000, a: 54000, b: 36000 } }, cri_down: { milliPercentage: 12000 } },
      { atk_up: { milliValue: { ss: 100000, s:  80000, a: 60000, b: 40000 } }, cri_down: { milliPercentage: 12000 } },
      { atk_up: { milliValue: { ss: 110000, s:  88000, a: 66000, b: 44000 } }, cri_down: { milliPercentage: 12000 } },
      { atk_up: { milliValue: { ss: 120000, s:  96000, a: 72000, b: 48000 } }, cri_down: { milliPercentage: 12000 } },
      { atk_up: { milliValue: { ss: 130000, s: 104000, a: 78000, b: 52000 } }, cri_down: { milliPercentage: 12000 } },
      { atk_up: { milliValue: { ss: 140000, s: 112000, a: 84000, b: 56000 } }, cri_down: { milliPercentage: 12000 } },
      { atk_up: { milliValue: { ss: 150000, s: 120000, a: 90000, b: 60000 } }, cri_down: { milliPercentage: 12000 } }
    ]
  },
  lightweight_chip: {
    type: 'chip',
    id: 'lightweight_chip',
    max_rank: 'ss',
    status_effects: [
      { acc_up: { milliPercentage: { ss: 20000, s: 15000, a: 12000, b: 10000 } }, eva_up: { milliPercentage: { ss:  9000, s:  6000, a:  5000, b: 3000 } }, spd_up: { microValue: { ss:  40000, s: 30000, a: 20000, b: 10000 } } },
      { acc_up: { milliPercentage: { ss: 22000, s: 16500, a: 13200, b: 11000 } }, eva_up: { milliPercentage: { ss:  9900, s:  6600, a:  5500, b: 3300 } }, spd_up: { microValue: { ss:  48000, s: 36000, a: 24000, b: 12000 } } },
      { acc_up: { milliPercentage: { ss: 24000, s: 18000, a: 14400, b: 12000 } }, eva_up: { milliPercentage: { ss: 10800, s:  7200, a:  6000, b: 3600 } }, spd_up: { microValue: { ss:  56000, s: 42000, a: 28000, b: 14000 } } },
      { acc_up: { milliPercentage: { ss: 26000, s: 19500, a: 15600, b: 13000 } }, eva_up: { milliPercentage: { ss: 11700, s:  7800, a:  6500, b: 3900 } }, spd_up: { microValue: { ss:  64000, s: 48000, a: 32000, b: 16000 } } },
      { acc_up: { milliPercentage: { ss: 28000, s: 21000, a: 16800, b: 14000 } }, eva_up: { milliPercentage: { ss: 12600, s:  8400, a:  7000, b: 4200 } }, spd_up: { microValue: { ss:  72000, s: 54000, a: 36000, b: 18000 } } },
      { acc_up: { milliPercentage: { ss: 30000, s: 22500, a: 18000, b: 15000 } }, eva_up: { milliPercentage: { ss: 13500, s:  9000, a:  7500, b: 4500 } }, spd_up: { microValue: { ss:  80000, s: 60000, a: 40000, b: 20000 } } },
      { acc_up: { milliPercentage: { ss: 32000, s: 24000, a: 19200, b: 16000 } }, eva_up: { milliPercentage: { ss: 14400, s:  9600, a:  8000, b: 4800 } }, spd_up: { microValue: { ss:  88000, s: 66000, a: 44000, b: 22000 } } },
      { acc_up: { milliPercentage: { ss: 34000, s: 25500, a: 20400, b: 17000 } }, eva_up: { milliPercentage: { ss: 15300, s: 10200, a:  8500, b: 5100 } }, spd_up: { microValue: { ss:  96000, s: 72000, a: 48000, b: 24000 } } },
      { acc_up: { milliPercentage: { ss: 36000, s: 27000, a: 21600, b: 18000 } }, eva_up: { milliPercentage: { ss: 16200, s: 10800, a:  9000, b: 5400 } }, spd_up: { microValue: { ss: 104000, s: 78000, a: 52000, b: 26000 } } },
      { acc_up: { milliPercentage: { ss: 38000, s: 28500, a: 22800, b: 19000 } }, eva_up: { milliPercentage: { ss: 17100, s: 11400, a:  9500, b: 5700 } }, spd_up: { microValue: { ss: 112000, s: 84000, a: 56000, b: 28000 } } },
      { acc_up: { milliPercentage: { ss: 40000, s: 30000, a: 24000, b: 20000 } }, eva_up: { milliPercentage: { ss: 18000, s: 12000, a: 10000, b: 6000 } }, spd_up: { microValue: { ss: 120000, s: 90000, a: 60000, b: 30000 } } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { atk_down: { milliPercentage: 8000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_down: { milliPercentage: 8000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_down: { milliPercentage: 8000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_down: { milliPercentage: 8000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_down: { milliPercentage: 8000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_down: { milliPercentage: 8000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_down: { milliPercentage: 8000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_down: { milliPercentage: 8000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_down: { milliPercentage: 8000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_down: { milliPercentage: 8000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_down: { milliPercentage: 8000, term: 'infinite' } } }]
    ]
  },
  vaccine_chip: {
    type: 'chip',
    id: 'vaccine_chip',
    max_rank: 'ss',
    equipment_effects: [
      [{ condition: { trigger: 'start_round' }, details: { status_resist_up: { milliPercentage: { ss: 17000, s: 15000, a:  9000, b:  5000 }, term: { for_rounds: 1 } }, all_debuff_removal: { rate: { milliPercentage: { ss: 16000, s: 15000, a: 12000, b: 10000 } }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { status_resist_up: { milliPercentage: { ss: 19000, s: 17000, a: 11000, b:  7000 }, term: { for_rounds: 1 } }, all_debuff_removal: { rate: { milliPercentage: { ss: 17000, s: 16000, a: 13000, b: 11000 } }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { status_resist_up: { milliPercentage: { ss: 21000, s: 19000, a: 13000, b:  9000 }, term: { for_rounds: 1 } }, all_debuff_removal: { rate: { milliPercentage: { ss: 18000, s: 17000, a: 14000, b: 12000 } }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { status_resist_up: { milliPercentage: { ss: 23000, s: 21000, a: 15000, b: 11000 }, term: { for_rounds: 1 } }, all_debuff_removal: { rate: { milliPercentage: { ss: 19000, s: 18000, a: 15000, b: 13000 } }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { status_resist_up: { milliPercentage: { ss: 25000, s: 23000, a: 17000, b: 13000 }, term: { for_rounds: 1 } }, all_debuff_removal: { rate: { milliPercentage: { ss: 20000, s: 19000, a: 16000, b: 14000 } }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { status_resist_up: { milliPercentage: { ss: 27000, s: 25000, a: 19000, b: 15000 }, term: { for_rounds: 1 } }, all_debuff_removal: { rate: { milliPercentage: { ss: 22000, s: 20000, a: 17000, b: 15000 } }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { status_resist_up: { milliPercentage: { ss: 29000, s: 27000, a: 21000, b: 17000 }, term: { for_rounds: 1 } }, all_debuff_removal: { rate: { milliPercentage: { ss: 24000, s: 22000, a: 18000, b: 16000 } }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { status_resist_up: { milliPercentage: { ss: 33000, s: 29000, a: 23000, b: 19000 }, term: { for_rounds: 1 } }, all_debuff_removal: { rate: { milliPercentage: { ss: 28000, s: 24000, a: 19000, b: 17000 } }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { status_resist_up: { milliPercentage: { ss: 37000, s: 31000, a: 25000, b: 21000 }, term: { for_rounds: 1 } }, all_debuff_removal: { rate: { milliPercentage: { ss: 34000, s: 26000, a: 20000, b: 18000 } }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { status_resist_up: { milliPercentage: { ss: 43000, s: 33000, a: 27000, b: 23000 }, term: { for_rounds: 1 } }, all_debuff_removal: { rate: { milliPercentage: { ss: 42000, s: 28000, a: 22000, b: 19000 } }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { status_resist_up: { milliPercentage: { ss: 50000, s: 35000, a: 29000, b: 25000 }, term: { for_rounds: 1 } }, all_debuff_removal: { rate: { milliPercentage: { ss: 50000, s: 30000, a: 24000, b: 20000 } }, term: 'immediate' } } }]
    ]
  },
  exp_chip: {
    type: 'chip',
    id: 'exp_chip',
    max_rank: 'ss',
    equipment_effects: [
      [{ condition: { trigger: 'attack' }, details: { exp_up: { milliPercentage: { ss: 3800, s: 3200, a: 2600, b: 2000 }, max_stack: 3 } } }],
      [{ condition: { trigger: 'attack' }, details: { exp_up: { milliPercentage: { ss: 4000, s: 3400, a: 2800, b: 2200 }, max_stack: 3 } } }],
      [{ condition: { trigger: 'attack' }, details: { exp_up: { milliPercentage: { ss: 4200, s: 3600, a: 3000, b: 2400 }, max_stack: 3 } } }],
      [{ condition: { trigger: 'attack' }, details: { exp_up: { milliPercentage: { ss: 4400, s: 3800, a: 3200, b: 2600 }, max_stack: 3 } } }],
      [{ condition: { trigger: 'attack' }, details: { exp_up: { milliPercentage: { ss: 4800, s: 4000, a: 3400, b: 2800 }, max_stack: 3 } } }],
      [{ condition: { trigger: 'attack' }, details: { exp_up: { milliPercentage: { ss: 5200, s: 4200, a: 3600, b: 3000 }, max_stack: 3 } } }],
      [{ condition: { trigger: 'attack' }, details: { exp_up: { milliPercentage: { ss: 5600, s: 4400, a: 3800, b: 3200 }, max_stack: 3 } } }],
      [{ condition: { trigger: 'attack' }, details: { exp_up: { milliPercentage: { ss: 6200, s: 4800, a: 4000, b: 3400 }, max_stack: 3 } } }],
      [{ condition: { trigger: 'attack' }, details: { exp_up: { milliPercentage: { ss: 6800, s: 5200, a: 4200, b: 3600 }, max_stack: 3 } } }],
      [{ condition: { trigger: 'attack' }, details: { exp_up: { milliPercentage: { ss: 7400, s: 5600, a: 4400, b: 3800 }, max_stack: 3 } } }],
      [{ condition: { trigger: 'attack' }, details: { exp_up: { milliPercentage: { ss: 8000, s: 6000, a: 4800, b: 4000 }, max_stack: 3 } } }]
    ]
  },
  enhanced_output_chip: {
    type: 'chip',
    id: 'enhanced_output_chip',
    status_effects: [
      { atk_up: { milliValue: 30000 }, spd_up: { microValue:  50000 } },
      { atk_up: { milliValue: 36000 }, spd_up: { microValue:  55000 } },
      { atk_up: { milliValue: 42000 }, spd_up: { microValue:  60000 } },
      { atk_up: { milliValue: 48000 }, spd_up: { microValue:  65000 } },
      { atk_up: { milliValue: 54000 }, spd_up: { microValue:  70000 } },
      { atk_up: { milliValue: 60000 }, spd_up: { microValue:  75000 } },
      { atk_up: { milliValue: 66000 }, spd_up: { microValue:  80000 } },
      { atk_up: { milliValue: 72000 }, spd_up: { microValue:  85000 } },
      { atk_up: { milliValue: 78000 }, spd_up: { microValue:  90000 } },
      { atk_up: { milliValue: 84000 }, spd_up: { microValue:  95000 } },
      { atk_up: { milliValue: 90000 }, spd_up: { microValue: 100000 } }
    ]
  },
  enhanced_analysis_chip: {
    type: 'chip',
    id: 'enhanced_analysis_chip',
    status_effects: [
      { cri_up: { milliPercentage:  5000 }, acc_up: { milliPercentage: 10000 } },
      { cri_up: { milliPercentage:  5250 }, acc_up: { milliPercentage: 10500 } },
      { cri_up: { milliPercentage:  5500 }, acc_up: { milliPercentage: 11000 } },
      { cri_up: { milliPercentage:  6000 }, acc_up: { milliPercentage: 12000 } },
      { cri_up: { milliPercentage:  6750 }, acc_up: { milliPercentage: 13500 } },
      { cri_up: { milliPercentage:  7750 }, acc_up: { milliPercentage: 15500 } },
      { cri_up: { milliPercentage:  8500 }, acc_up: { milliPercentage: 17000 } },
      { cri_up: { milliPercentage: 10000 }, acc_up: { milliPercentage: 20000 } },
      { cri_up: { milliPercentage: 12000 }, acc_up: { milliPercentage: 24000 } },
      { cri_up: { milliPercentage: 15000 }, acc_up: { milliPercentage: 28000 } },
      { cri_up: { milliPercentage: 20000 }, acc_up: { milliPercentage: 35000 } }
    ]
  },
  atflir_reinforcement_chip: {
    type: 'chip',
    id: 'atflir_reinforcement_chip',
    exclusive: {
      unit: 55
    },
    status_effects: [
      { atk_up: { milliValue: 40000 }, acc_up: { milliPercentage: 20000 }, eva_up: { milliPercentage: 12000 } },
      { atk_up: { milliValue: 44000 }, acc_up: { milliPercentage: 22000 }, eva_up: { milliPercentage: 12600 } },
      { atk_up: { milliValue: 48000 }, acc_up: { milliPercentage: 24000 }, eva_up: { milliPercentage: 13200 } },
      { atk_up: { milliValue: 52000 }, acc_up: { milliPercentage: 26000 }, eva_up: { milliPercentage: 13800 } },
      { atk_up: { milliValue: 56000 }, acc_up: { milliPercentage: 28000 }, eva_up: { milliPercentage: 14400 } },
      { atk_up: { milliValue: 60000 }, acc_up: { milliPercentage: 30000 }, eva_up: { milliPercentage: 15000 } },
      { atk_up: { milliValue: 64000 }, acc_up: { milliPercentage: 32000 }, eva_up: { milliPercentage: 15600 } },
      { atk_up: { milliValue: 68000 }, acc_up: { milliPercentage: 34000 }, eva_up: { milliPercentage: 16200 } },
      { atk_up: { milliValue: 72000 }, acc_up: { milliPercentage: 36000 }, eva_up: { milliPercentage: 16800 } },
      { atk_up: { milliValue: 76000 }, acc_up: { milliPercentage: 38000 }, eva_up: { milliPercentage: 17400 } },
      { atk_up: { milliValue: 80000 }, acc_up: { milliPercentage: 40000 }, eva_up: { milliPercentage: 18000 } }
    ]
  },
  heartless_chip: {
    type: 'chip',
    id: 'heartless_chip',
    exclusive: {
      unit: 72
    },
    status_effects: [
      { atk_up: { milliValue:  60000 }, eva_up: { milliPercentage: 10000 } },
      { atk_up: { milliValue:  66000 }, eva_up: { milliPercentage: 11000 } },
      { atk_up: { milliValue:  72000 }, eva_up: { milliPercentage: 12000 } },
      { atk_up: { milliValue:  78000 }, eva_up: { milliPercentage: 13000 } },
      { atk_up: { milliValue:  84000 }, eva_up: { milliPercentage: 14000 } },
      { atk_up: { milliValue:  90000 }, eva_up: { milliPercentage: 15000 } },
      { atk_up: { milliValue:  96000 }, eva_up: { milliPercentage: 16000 } },
      { atk_up: { milliValue: 102000 }, eva_up: { milliPercentage: 17000 } },
      { atk_up: { milliValue: 108000 }, eva_up: { milliPercentage: 18000 } },
      { atk_up: { milliValue: 114000 }, eva_up: { milliPercentage: 19000 } },
      { atk_up: { milliValue: 120000 }, eva_up: { milliPercentage: 20000 } }
    ]
  },
  s_42_ad_lib_chip: {
    type: 'chip',
    id: 's_42_ad_lib_chip',
    exclusive: {
      unit: 128
    },
    status_effects: [
      { atk_up: { milliValue: 100000 }, hp_down: { value: 30 }, def_down: { milliValue: 27000 } },
      { atk_up: { milliValue: 110000 }, hp_down: { value: 33 }, def_down: { milliValue: 29700 } },
      { atk_up: { milliValue: 120000 }, hp_down: { value: 36 }, def_down: { milliValue: 32400 } },
      { atk_up: { milliValue: 130000 }, hp_down: { value: 39 }, def_down: { milliValue: 35100 } },
      { atk_up: { milliValue: 140000 }, hp_down: { value: 42 }, def_down: { milliValue: 37800 } },
      { atk_up: { milliValue: 150000 }, hp_down: { value: 45 }, def_down: { milliValue: 40500 } },
      { atk_up: { milliValue: 160000 }, hp_down: { value: 48 }, def_down: { milliValue: 43200 } },
      { atk_up: { milliValue: 170000 }, hp_down: { value: 51 }, def_down: { milliValue: 45900 } },
      { atk_up: { milliValue: 180000 }, hp_down: { value: 54 }, def_down: { milliValue: 48600 } },
      { atk_up: { milliValue: 190000 }, hp_down: { value: 57 }, def_down: { milliValue: 51300 } },
      { atk_up: { milliValue: 200000 }, hp_down: { value: 60 }, def_down: { milliValue: 54000 } }
    ]
  },
  aerial_defense_os: {
    type: 'os',
    id: 'aerial_defense_os',
    max_rank: 'ss',
    exclusive: {
      type: 'flying',
      role: 'defender'
    },
    status_effects: [
      { acc_up: { milliPercentage: { ss: 15000, s: 10000, a:  8000, b:  5000 } }, eva_up: { milliPercentage: { ss: 10000, s:  8000, a:  6000, b:  4000 } } },
      { acc_up: { milliPercentage: { ss: 18000, s: 12000, a:  9600, b:  6000 } }, eva_up: { milliPercentage: { ss: 12000, s:  9600, a:  7200, b:  4800 } } },
      { acc_up: { milliPercentage: { ss: 21000, s: 14000, a: 11200, b:  7000 } }, eva_up: { milliPercentage: { ss: 14000, s: 11200, a:  8400, b:  5600 } } },
      { acc_up: { milliPercentage: { ss: 24000, s: 16000, a: 12800, b:  8000 } }, eva_up: { milliPercentage: { ss: 16000, s: 12800, a:  9600, b:  6400 } } },
      { acc_up: { milliPercentage: { ss: 27000, s: 18000, a: 14400, b:  9000 } }, eva_up: { milliPercentage: { ss: 18000, s: 14400, a: 10800, b:  7200 } } },
      { acc_up: { milliPercentage: { ss: 30000, s: 20000, a: 16000, b: 10000 } }, eva_up: { milliPercentage: { ss: 20000, s: 16000, a: 12000, b:  8000 } } },
      { acc_up: { milliPercentage: { ss: 33000, s: 22000, a: 17600, b: 11000 } }, eva_up: { milliPercentage: { ss: 22000, s: 17600, a: 13200, b:  8800 } } },
      { acc_up: { milliPercentage: { ss: 36000, s: 24000, a: 19200, b: 12000 } }, eva_up: { milliPercentage: { ss: 24000, s: 19200, a: 14400, b:  9600 } } },
      { acc_up: { milliPercentage: { ss: 39000, s: 26000, a: 20800, b: 13000 } }, eva_up: { milliPercentage: { ss: 26000, s: 20800, a: 15600, b: 10400 } } },
      { acc_up: { milliPercentage: { ss: 42000, s: 28000, a: 22400, b: 14000 } }, eva_up: { milliPercentage: { ss: 28000, s: 22400, a: 16800, b: 11200 } } },
      { acc_up: { milliPercentage: { ss: 45000, s: 30000, a: 24000, b: 15000 } }, eva_up: { milliPercentage: { ss: 30000, s: 24000, a: 18000, b: 12000 } } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_round' }, details: { damage_reduction_up: { milliPercentage: { ss: 28000, s: 22000, a: 16000, b: 10000 }, times: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_round' }, details: { damage_reduction_up: { milliPercentage: { ss: 30000, s: 24000, a: 18000, b: 12000 }, times: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_round' }, details: { damage_reduction_up: { milliPercentage: { ss: 32000, s: 26000, a: 20000, b: 14000 }, times: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_round' }, details: { damage_reduction_up: { milliPercentage: { ss: 34000, s: 28000, a: 22000, b: 16000 }, times: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_round' }, details: { damage_reduction_up: { milliPercentage: { ss: 36000, s: 30000, a: 24000, b: 18000 }, times: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_round' }, details: { damage_reduction_up: { milliPercentage: { ss: 38000, s: 32000, a: 26000, b: 20000 }, times: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_round' }, details: { damage_reduction_up: { milliPercentage: { ss: 40000, s: 34000, a: 28000, b: 22000 }, times: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_round' }, details: { damage_reduction_up: { milliPercentage: { ss: 42000, s: 36000, a: 30000, b: 24000 }, times: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_round' }, details: { damage_reduction_up: { milliPercentage: { ss: 44000, s: 38000, a: 32000, b: 26000 }, times: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_round' }, details: { damage_reduction_up: { milliPercentage: { ss: 46000, s: 40000, a: 34000, b: 28000 }, times: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_round' }, details: { damage_reduction_up: { milliPercentage: { ss: 50000, s: 42000, a: 36000, b: 30000 }, times: 1, term: 'infinite' } } }]
    ]
  },
  anti_light_os: {
    type: 'os',
    id: 'anti_light_os',
    max_rank: 'ss',
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { light_type_damage_up: { milliPercentage: { ss: 19000, s: 15000, a: 12000, b: 10000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { light_type_damage_up: { milliPercentage: { ss: 20000, s: 16000, a: 13000, b: 11000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { light_type_damage_up: { milliPercentage: { ss: 21000, s: 17000, a: 14000, b: 12000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { light_type_damage_up: { milliPercentage: { ss: 22000, s: 18000, a: 15000, b: 13000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { light_type_damage_up: { milliPercentage: { ss: 23000, s: 19000, a: 16000, b: 14000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { light_type_damage_up: { milliPercentage: { ss: 25000, s: 20000, a: 17000, b: 15000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { light_type_damage_up: { milliPercentage: { ss: 27000, s: 21000, a: 18000, b: 16000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { light_type_damage_up: { milliPercentage: { ss: 29000, s: 22000, a: 19000, b: 17000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { light_type_damage_up: { milliPercentage: { ss: 31000, s: 23000, a: 20000, b: 18000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { light_type_damage_up: { milliPercentage: { ss: 33000, s: 25000, a: 21000, b: 19000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { light_type_damage_up: { milliPercentage: { ss: 35000, s: 27000, a: 22000, b: 20000 }, term: 'infinite' } } }]
    ]
  },
  anti_air_os: {
    type: 'os',
    id: 'anti_air_os',
    max_rank: 'ss',
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { flying_type_damage_up: { milliPercentage: { ss: 19000, s: 15000, a: 12000, b: 10000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { flying_type_damage_up: { milliPercentage: { ss: 20000, s: 16000, a: 13000, b: 11000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { flying_type_damage_up: { milliPercentage: { ss: 21000, s: 17000, a: 14000, b: 12000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { flying_type_damage_up: { milliPercentage: { ss: 22000, s: 18000, a: 15000, b: 13000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { flying_type_damage_up: { milliPercentage: { ss: 23000, s: 19000, a: 16000, b: 14000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { flying_type_damage_up: { milliPercentage: { ss: 25000, s: 20000, a: 17000, b: 15000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { flying_type_damage_up: { milliPercentage: { ss: 27000, s: 21000, a: 18000, b: 16000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { flying_type_damage_up: { milliPercentage: { ss: 29000, s: 22000, a: 19000, b: 17000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { flying_type_damage_up: { milliPercentage: { ss: 31000, s: 23000, a: 20000, b: 18000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { flying_type_damage_up: { milliPercentage: { ss: 33000, s: 25000, a: 21000, b: 19000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { flying_type_damage_up: { milliPercentage: { ss: 35000, s: 27000, a: 22000, b: 20000 }, term: 'infinite' } } }]
    ]
  },
  anti_heavy_os: {
    type: 'os',
    id: 'anti_heavy_os',
    max_rank: 'ss',
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { heavy_type_damage_up: { milliPercentage: { ss: 19000, s: 15000, a: 12000, b: 10000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { heavy_type_damage_up: { milliPercentage: { ss: 20000, s: 16000, a: 13000, b: 11000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { heavy_type_damage_up: { milliPercentage: { ss: 21000, s: 17000, a: 14000, b: 12000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { heavy_type_damage_up: { milliPercentage: { ss: 22000, s: 18000, a: 15000, b: 13000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { heavy_type_damage_up: { milliPercentage: { ss: 23000, s: 19000, a: 16000, b: 14000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { heavy_type_damage_up: { milliPercentage: { ss: 25000, s: 20000, a: 17000, b: 15000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { heavy_type_damage_up: { milliPercentage: { ss: 27000, s: 21000, a: 18000, b: 16000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { heavy_type_damage_up: { milliPercentage: { ss: 29000, s: 22000, a: 19000, b: 17000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { heavy_type_damage_up: { milliPercentage: { ss: 31000, s: 23000, a: 20000, b: 18000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { heavy_type_damage_up: { milliPercentage: { ss: 33000, s: 25000, a: 21000, b: 19000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { heavy_type_damage_up: { milliPercentage: { ss: 35000, s: 27000, a: 22000, b: 20000 }, term: 'infinite' } } }]
    ]
  },
  anti_light_flying_os: {
    type: 'os',
    id: 'anti_light_flying_os',
    max_rank: 'ss',
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { light_type_damage_up: { milliPercentage: { ss: 14500, s: 12500, a: 11000, b: 10000 }, term: 'infinite' }, flying_type_damage_up: { milliPercentage: { ss: 14500, s: 12500, a: 11000, b: 10000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { light_type_damage_up: { milliPercentage: { ss: 15000, s: 13000, a: 11500, b: 10500 }, term: 'infinite' }, flying_type_damage_up: { milliPercentage: { ss: 15000, s: 13000, a: 11500, b: 10500 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { light_type_damage_up: { milliPercentage: { ss: 15500, s: 13500, a: 12000, b: 11000 }, term: 'infinite' }, flying_type_damage_up: { milliPercentage: { ss: 15500, s: 13500, a: 12000, b: 11000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { light_type_damage_up: { milliPercentage: { ss: 16000, s: 14000, a: 12500, b: 11500 }, term: 'infinite' }, flying_type_damage_up: { milliPercentage: { ss: 16000, s: 14000, a: 12500, b: 11500 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { light_type_damage_up: { milliPercentage: { ss: 16500, s: 14500, a: 13000, b: 12000 }, term: 'infinite' }, flying_type_damage_up: { milliPercentage: { ss: 16500, s: 14500, a: 13000, b: 12000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { light_type_damage_up: { milliPercentage: { ss: 17000, s: 15000, a: 13500, b: 12500 }, term: 'infinite' }, flying_type_damage_up: { milliPercentage: { ss: 17000, s: 15000, a: 13500, b: 12500 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { light_type_damage_up: { milliPercentage: { ss: 17500, s: 15500, a: 14000, b: 13000 }, term: 'infinite' }, flying_type_damage_up: { milliPercentage: { ss: 17500, s: 15500, a: 14000, b: 13000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { light_type_damage_up: { milliPercentage: { ss: 18000, s: 16000, a: 14500, b: 13500 }, term: 'infinite' }, flying_type_damage_up: { milliPercentage: { ss: 18000, s: 16000, a: 14500, b: 13500 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { light_type_damage_up: { milliPercentage: { ss: 18500, s: 16500, a: 15000, b: 14000 }, term: 'infinite' }, flying_type_damage_up: { milliPercentage: { ss: 18500, s: 16500, a: 15000, b: 14000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { light_type_damage_up: { milliPercentage: { ss: 19000, s: 17000, a: 15500, b: 14500 }, term: 'infinite' }, flying_type_damage_up: { milliPercentage: { ss: 19000, s: 17000, a: 15500, b: 14500 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { light_type_damage_up: { milliPercentage: { ss: 20000, s: 17500, a: 16000, b: 15000 }, term: 'infinite' }, flying_type_damage_up: { milliPercentage: { ss: 20000, s: 17500, a: 16000, b: 15000 }, term: 'infinite' } } }]
    ]
  },
  anti_flying_heavy_os: {
    type: 'os',
    id: 'anti_flying_heavy_os',
    max_rank: 'ss',
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { flying_type_damage_up: { milliPercentage: { ss: 14500, s: 12500, a: 11000, b: 10000 }, term: 'infinite' }, heavy_type_damage_up: { milliPercentage: { ss: 14500, s: 12500, a: 11000, b: 10000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { flying_type_damage_up: { milliPercentage: { ss: 15000, s: 13000, a: 11500, b: 10500 }, term: 'infinite' }, heavy_type_damage_up: { milliPercentage: { ss: 15000, s: 13000, a: 11500, b: 10500 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { flying_type_damage_up: { milliPercentage: { ss: 15500, s: 13500, a: 12000, b: 11000 }, term: 'infinite' }, heavy_type_damage_up: { milliPercentage: { ss: 15500, s: 13500, a: 12000, b: 11000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { flying_type_damage_up: { milliPercentage: { ss: 16000, s: 14000, a: 12500, b: 11500 }, term: 'infinite' }, heavy_type_damage_up: { milliPercentage: { ss: 16000, s: 14000, a: 12500, b: 11500 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { flying_type_damage_up: { milliPercentage: { ss: 16500, s: 14500, a: 13000, b: 12000 }, term: 'infinite' }, heavy_type_damage_up: { milliPercentage: { ss: 16500, s: 14500, a: 13000, b: 12000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { flying_type_damage_up: { milliPercentage: { ss: 17000, s: 15000, a: 13500, b: 12500 }, term: 'infinite' }, heavy_type_damage_up: { milliPercentage: { ss: 17000, s: 15000, a: 13500, b: 12500 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { flying_type_damage_up: { milliPercentage: { ss: 17500, s: 15500, a: 14000, b: 13000 }, term: 'infinite' }, heavy_type_damage_up: { milliPercentage: { ss: 17500, s: 15500, a: 14000, b: 13000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { flying_type_damage_up: { milliPercentage: { ss: 18000, s: 16000, a: 14500, b: 13500 }, term: 'infinite' }, heavy_type_damage_up: { milliPercentage: { ss: 18000, s: 16000, a: 14500, b: 13500 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { flying_type_damage_up: { milliPercentage: { ss: 18500, s: 16500, a: 15000, b: 14000 }, term: 'infinite' }, heavy_type_damage_up: { milliPercentage: { ss: 18500, s: 16500, a: 15000, b: 14000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { flying_type_damage_up: { milliPercentage: { ss: 19000, s: 17000, a: 15500, b: 14500 }, term: 'infinite' }, heavy_type_damage_up: { milliPercentage: { ss: 19000, s: 17000, a: 15500, b: 14500 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { flying_type_damage_up: { milliPercentage: { ss: 20000, s: 17500, a: 16000, b: 15000 }, term: 'infinite' }, heavy_type_damage_up: { milliPercentage: { ss: 20000, s: 17500, a: 16000, b: 15000 }, term: 'infinite' } } }]
    ]
  },
  anti_heavy_light_os: {
    type: 'os',
    id: 'anti_heavy_light_os',
    max_rank: 'ss',
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { heavy_type_damage_up: { milliPercentage: { ss: 14500, s: 12500, a: 11000, b: 10000 }, term: 'infinite' }, light_type_damage_up: { milliPercentage: { ss: 14500, s: 12500, a: 11000, b: 10000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { heavy_type_damage_up: { milliPercentage: { ss: 15000, s: 13000, a: 11500, b: 10500 }, term: 'infinite' }, light_type_damage_up: { milliPercentage: { ss: 15000, s: 13000, a: 11500, b: 10500 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { heavy_type_damage_up: { milliPercentage: { ss: 15500, s: 13500, a: 12000, b: 11000 }, term: 'infinite' }, light_type_damage_up: { milliPercentage: { ss: 15500, s: 13500, a: 12000, b: 11000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { heavy_type_damage_up: { milliPercentage: { ss: 16000, s: 14000, a: 12500, b: 11500 }, term: 'infinite' }, light_type_damage_up: { milliPercentage: { ss: 16000, s: 14000, a: 12500, b: 11500 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { heavy_type_damage_up: { milliPercentage: { ss: 16500, s: 14500, a: 13000, b: 12000 }, term: 'infinite' }, light_type_damage_up: { milliPercentage: { ss: 16500, s: 14500, a: 13000, b: 12000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { heavy_type_damage_up: { milliPercentage: { ss: 17000, s: 15000, a: 13500, b: 12500 }, term: 'infinite' }, light_type_damage_up: { milliPercentage: { ss: 17000, s: 15000, a: 13500, b: 12500 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { heavy_type_damage_up: { milliPercentage: { ss: 17500, s: 15500, a: 14000, b: 13000 }, term: 'infinite' }, light_type_damage_up: { milliPercentage: { ss: 17500, s: 15500, a: 14000, b: 13000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { heavy_type_damage_up: { milliPercentage: { ss: 18000, s: 16000, a: 14500, b: 13500 }, term: 'infinite' }, light_type_damage_up: { milliPercentage: { ss: 18000, s: 16000, a: 14500, b: 13500 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { heavy_type_damage_up: { milliPercentage: { ss: 18500, s: 16500, a: 15000, b: 14000 }, term: 'infinite' }, light_type_damage_up: { milliPercentage: { ss: 18500, s: 16500, a: 15000, b: 14000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { heavy_type_damage_up: { milliPercentage: { ss: 19000, s: 17000, a: 15500, b: 14500 }, term: 'infinite' }, light_type_damage_up: { milliPercentage: { ss: 19000, s: 17000, a: 15500, b: 14500 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { heavy_type_damage_up: { milliPercentage: { ss: 20000, s: 17500, a: 16000, b: 15000 }, term: 'infinite' }, light_type_damage_up: { milliPercentage: { ss: 20000, s: 17500, a: 16000, b: 15000 }, term: 'infinite' } } }]
    ]
  },
  assault_os: {
    type: 'os',
    id: 'assault_os',
    max_rank: 'ss',
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: { ss:  9500, s:  7500, a:  6000, b:  5000 }, term: 'infinite' }, range_down: { value: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: { ss: 10000, s:  8000, a:  6500, b:  5500 }, term: 'infinite' }, range_down: { value: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: { ss: 10500, s:  8500, a:  7000, b:  6000 }, term: 'infinite' }, range_down: { value: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: { ss: 11000, s:  9000, a:  7500, b:  6500 }, term: 'infinite' }, range_down: { value: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: { ss: 11500, s:  9500, a:  8000, b:  7000 }, term: 'infinite' }, range_down: { value: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: { ss: 12000, s: 10000, a:  8500, b:  7500 }, term: 'infinite' }, range_down: { value: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: { ss: 12500, s: 10500, a:  9000, b:  8000 }, term: 'infinite' }, range_down: { value: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: { ss: 13000, s: 11000, a:  9500, b:  8500 }, term: 'infinite' }, range_down: { value: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: { ss: 13500, s: 11500, a: 10000, b:  9000 }, term: 'infinite' }, range_down: { value: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: { ss: 14000, s: 12000, a: 10500, b:  9500 }, term: 'infinite' }, range_down: { value: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: { ss: 15000, s: 12500, a: 11000, b: 10000 }, term: 'infinite' }, range_down: { value: 1, term: 'infinite' } } }]
    ]
  },
  counter_os: {
    type: 'os',
    id: 'counter_os',
    max_rank: 'ss',
    exclusive: {
      role: 'supporter'
    },
    equipment_effects: [
      [{ condition: { trigger: 'be_attacked' }, details: { counterattack: { milliPercentage: { ss: 58000, s: 50000, a: 44000, b: 40000 }, rate: { milliPercentage: { ss:  57000, s: 45000, a: 36000, b: 30000 } } } } }],
      [{ condition: { trigger: 'be_attacked' }, details: { counterattack: { milliPercentage: { ss: 60000, s: 52000, a: 46000, b: 42000 }, rate: { milliPercentage: { ss:  60000, s: 48000, a: 39000, b: 33000 } } } } }],
      [{ condition: { trigger: 'be_attacked' }, details: { counterattack: { milliPercentage: { ss: 62000, s: 54000, a: 48000, b: 44000 }, rate: { milliPercentage: { ss:  63000, s: 51000, a: 42000, b: 36000 } } } } }],
      [{ condition: { trigger: 'be_attacked' }, details: { counterattack: { milliPercentage: { ss: 64000, s: 56000, a: 50000, b: 46000 }, rate: { milliPercentage: { ss:  66000, s: 54000, a: 45000, b: 39000 } } } } }],
      [{ condition: { trigger: 'be_attacked' }, details: { counterattack: { milliPercentage: { ss: 66000, s: 58000, a: 52000, b: 48000 }, rate: { milliPercentage: { ss:  69000, s: 57000, a: 48000, b: 42000 } } } } }],
      [{ condition: { trigger: 'be_attacked' }, details: { counterattack: { milliPercentage: { ss: 68000, s: 60000, a: 54000, b: 50000 }, rate: { milliPercentage: { ss:  72000, s: 60000, a: 51000, b: 45000 } } } } }],
      [{ condition: { trigger: 'be_attacked' }, details: { counterattack: { milliPercentage: { ss: 70000, s: 62000, a: 56000, b: 52000 }, rate: { milliPercentage: { ss:  75000, s: 63000, a: 54000, b: 48000 } } } } }],
      [{ condition: { trigger: 'be_attacked' }, details: { counterattack: { milliPercentage: { ss: 72000, s: 64000, a: 58000, b: 54000 }, rate: { milliPercentage: { ss:  80000, s: 66000, a: 57000, b: 51000 } } } } }],
      [{ condition: { trigger: 'be_attacked' }, details: { counterattack: { milliPercentage: { ss: 74000, s: 66000, a: 60000, b: 56000 }, rate: { milliPercentage: { ss:  85000, s: 69000, a: 60000, b: 54000 } } } } }],
      [{ condition: { trigger: 'be_attacked' }, details: { counterattack: { milliPercentage: { ss: 76000, s: 68000, a: 62000, b: 58000 }, rate: { milliPercentage: { ss:  90000, s: 72000, a: 63000, b: 57000 } } } } }],
      [{ condition: { trigger: 'be_attacked' }, details: { counterattack: { milliPercentage: { ss: 80000, s: 70000, a: 64000, b: 60000 }, rate: { milliPercentage: { ss: 100000, s: 75000, a: 66000, b: 60000 } } } } }]
    ]
  },
  defense_os: {
    type: 'os',
    id: 'defense_os',
    max_rank: 'ss',
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { def_up: { milliPercentage: { ss: 19000, s: 15000, a: 12000, b: 10000 }, term: 'infinite' }, damage_reduction_up: { milliPercentage: { ss:  9500, s:  7500, a:  6000, b:  5000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { def_up: { milliPercentage: { ss: 20000, s: 16000, a: 13000, b: 11000 }, term: 'infinite' }, damage_reduction_up: { milliPercentage: { ss: 10000, s:  8000, a:  6500, b:  5500 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { def_up: { milliPercentage: { ss: 21000, s: 17000, a: 14000, b: 12000 }, term: 'infinite' }, damage_reduction_up: { milliPercentage: { ss: 10500, s:  8500, a:  7000, b:  6000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { def_up: { milliPercentage: { ss: 22000, s: 18000, a: 15000, b: 13000 }, term: 'infinite' }, damage_reduction_up: { milliPercentage: { ss: 11000, s:  9000, a:  7500, b:  6500 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { def_up: { milliPercentage: { ss: 23000, s: 19000, a: 16000, b: 14000 }, term: 'infinite' }, damage_reduction_up: { milliPercentage: { ss: 11500, s:  9500, a:  8000, b:  7000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { def_up: { milliPercentage: { ss: 24000, s: 20000, a: 17000, b: 15000 }, term: 'infinite' }, damage_reduction_up: { milliPercentage: { ss: 12000, s: 10000, a:  8500, b:  7500 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { def_up: { milliPercentage: { ss: 25000, s: 21000, a: 18000, b: 16000 }, term: 'infinite' }, damage_reduction_up: { milliPercentage: { ss: 12500, s: 10500, a:  9000, b:  8000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { def_up: { milliPercentage: { ss: 26000, s: 22000, a: 19000, b: 17000 }, term: 'infinite' }, damage_reduction_up: { milliPercentage: { ss: 13000, s: 11000, a:  9500, b:  8500 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { def_up: { milliPercentage: { ss: 27000, s: 23000, a: 20000, b: 18000 }, term: 'infinite' }, damage_reduction_up: { milliPercentage: { ss: 13500, s: 11500, a: 10000, b:  9000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { def_up: { milliPercentage: { ss: 28000, s: 24000, a: 21000, b: 19000 }, term: 'infinite' }, damage_reduction_up: { milliPercentage: { ss: 14000, s: 12000, a: 10500, b:  9500 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { def_up: { milliPercentage: { ss: 30000, s: 25000, a: 22000, b: 20000 }, term: 'infinite' }, damage_reduction_up: { milliPercentage: { ss: 15000, s: 12500, a: 11000, b: 10000 }, term: 'infinite' } } }]
    ]
  },
  offense_os: {
    type: 'os',
    id: 'offense_os',
    max_rank: 'ss',
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: { ss: 14500, s: 12500, a: 11000, b: 10000 }, term: 'infinite' }, spd_up: { milliPercentage: { ss: 2750, s: 1750, a: 1000, b:  500 }, term: 'infinite' }, damage_taken_increased: { milliPercentage: 25000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: { ss: 15000, s: 13000, a: 11500, b: 10500 }, term: 'infinite' }, spd_up: { milliPercentage: { ss: 3000, s: 2000, a: 1250, b:  750 }, term: 'infinite' }, damage_taken_increased: { milliPercentage: 25000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: { ss: 15500, s: 13500, a: 12000, b: 11000 }, term: 'infinite' }, spd_up: { milliPercentage: { ss: 3500, s: 2250, a: 1500, b: 1000 }, term: 'infinite' }, damage_taken_increased: { milliPercentage: 25000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: { ss: 16000, s: 14000, a: 12500, b: 11500 }, term: 'infinite' }, spd_up: { milliPercentage: { ss: 4000, s: 2500, a: 1750, b: 1250 }, term: 'infinite' }, damage_taken_increased: { milliPercentage: 25000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: { ss: 16500, s: 14500, a: 13000, b: 12000 }, term: 'infinite' }, spd_up: { milliPercentage: { ss: 4500, s: 2750, a: 2000, b: 1500 }, term: 'infinite' }, damage_taken_increased: { milliPercentage: 25000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: { ss: 17000, s: 15000, a: 13500, b: 12500 }, term: 'infinite' }, spd_up: { milliPercentage: { ss: 5000, s: 3000, a: 2250, b: 1750 }, term: 'infinite' }, damage_taken_increased: { milliPercentage: 25000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: { ss: 17500, s: 15500, a: 14000, b: 13000 }, term: 'infinite' }, spd_up: { milliPercentage: { ss: 5500, s: 3500, a: 2500, b: 2000 }, term: 'infinite' }, damage_taken_increased: { milliPercentage: 25000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: { ss: 18000, s: 16000, a: 14500, b: 13500 }, term: 'infinite' }, spd_up: { milliPercentage: { ss: 6000, s: 4000, a: 2750, b: 2250 }, term: 'infinite' }, damage_taken_increased: { milliPercentage: 25000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: { ss: 18500, s: 16500, a: 15000, b: 14000 }, term: 'infinite' }, spd_up: { milliPercentage: { ss: 6500, s: 4500, a: 3000, b: 2500 }, term: 'infinite' }, damage_taken_increased: { milliPercentage: 25000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: { ss: 19000, s: 17000, a: 15500, b: 14500 }, term: 'infinite' }, spd_up: { milliPercentage: { ss: 7000, s: 5000, a: 3500, b: 2750 }, term: 'infinite' }, damage_taken_increased: { milliPercentage: 25000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: { ss: 20000, s: 17500, a: 16000, b: 15000 }, term: 'infinite' }, spd_up: { milliPercentage: { ss: 7500, s: 5500, a: 4000, b: 3000 }, term: 'infinite' }, damage_taken_increased: { milliPercentage: 25000, term: 'infinite' } } }]
    ]
  },
  precision_os: {
    type: 'os',
    id: 'precision_os',
    max_rank: 'ss',
    status_effects: [
      { acc_up: { milliPercentage: { ss: 25000, s: 20000, a: 15000, b: 10000 } }, cri_up: { milliPercentage: { ss:  4000, s: 3000, a: 2000, b: 1000 } } },
      { acc_up: { milliPercentage: { ss: 27500, s: 22000, a: 16500, b: 11000 } }, cri_up: { milliPercentage: { ss:  4800, s: 3600, a: 2400, b: 1200 } } },
      { acc_up: { milliPercentage: { ss: 30000, s: 24000, a: 18000, b: 12000 } }, cri_up: { milliPercentage: { ss:  5600, s: 4200, a: 2800, b: 1400 } } },
      { acc_up: { milliPercentage: { ss: 32500, s: 26000, a: 19500, b: 13000 } }, cri_up: { milliPercentage: { ss:  6400, s: 4800, a: 3200, b: 1600 } } },
      { acc_up: { milliPercentage: { ss: 35000, s: 28000, a: 21000, b: 14000 } }, cri_up: { milliPercentage: { ss:  7200, s: 5400, a: 3600, b: 1800 } } },
      { acc_up: { milliPercentage: { ss: 37500, s: 30000, a: 22500, b: 15000 } }, cri_up: { milliPercentage: { ss:  8000, s: 6000, a: 4000, b: 2000 } } },
      { acc_up: { milliPercentage: { ss: 40000, s: 32000, a: 24000, b: 16000 } }, cri_up: { milliPercentage: { ss:  8800, s: 6600, a: 4400, b: 2200 } } },
      { acc_up: { milliPercentage: { ss: 42500, s: 34000, a: 25500, b: 17000 } }, cri_up: { milliPercentage: { ss:  9600, s: 7200, a: 4800, b: 2400 } } },
      { acc_up: { milliPercentage: { ss: 45000, s: 36000, a: 27000, b: 18000 } }, cri_up: { milliPercentage: { ss: 10400, s: 7800, a: 5200, b: 2600 } } },
      { acc_up: { milliPercentage: { ss: 47500, s: 38000, a: 28500, b: 19000 } }, cri_up: { milliPercentage: { ss: 11200, s: 8400, a: 5600, b: 2800 } } },
      { acc_up: { milliPercentage: { ss: 50000, s: 40000, a: 30000, b: 20000 } }, cri_up: { milliPercentage: { ss: 12000, s: 9000, a: 6000, b: 3000 } } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_round' }, details: { atk_up: { milliPercentage: { ss: 12500, s: 10500, a:  9000, b:  8000 }, term: { for_rounds: 1 } }, spd_down: { milliPercentage: 8000, term: { for_rounds: 1 } }, debuff_removal: { effect: 'acc_down', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { atk_up: { milliPercentage: { ss: 13000, s: 11000, a:  9500, b:  8500 }, term: { for_rounds: 1 } }, spd_down: { milliPercentage: 8000, term: { for_rounds: 1 } }, debuff_removal: { effect: 'acc_down', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { atk_up: { milliPercentage: { ss: 13500, s: 11500, a: 10000, b:  9000 }, term: { for_rounds: 1 } }, spd_down: { milliPercentage: 8000, term: { for_rounds: 1 } }, debuff_removal: { effect: 'acc_down', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { atk_up: { milliPercentage: { ss: 14000, s: 12000, a: 10500, b:  9500 }, term: { for_rounds: 1 } }, spd_down: { milliPercentage: 8000, term: { for_rounds: 1 } }, debuff_removal: { effect: 'acc_down', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { atk_up: { milliPercentage: { ss: 14500, s: 12500, a: 11000, b: 10000 }, term: { for_rounds: 1 } }, spd_down: { milliPercentage: 8000, term: { for_rounds: 1 } }, debuff_removal: { effect: 'acc_down', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { atk_up: { milliPercentage: { ss: 15000, s: 13000, a: 11500, b: 10500 }, term: { for_rounds: 1 } }, spd_down: { milliPercentage: 8000, term: { for_rounds: 1 } }, debuff_removal: { effect: 'acc_down', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { atk_up: { milliPercentage: { ss: 15500, s: 13500, a: 12000, b: 11000 }, term: { for_rounds: 1 } }, spd_down: { milliPercentage: 8000, term: { for_rounds: 1 } }, debuff_removal: { effect: 'acc_down', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { atk_up: { milliPercentage: { ss: 16000, s: 14000, a: 12500, b: 11500 }, term: { for_rounds: 1 } }, spd_down: { milliPercentage: 8000, term: { for_rounds: 1 } }, debuff_removal: { effect: 'acc_down', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { atk_up: { milliPercentage: { ss: 16500, s: 14500, a: 13000, b: 12000 }, term: { for_rounds: 1 } }, spd_down: { milliPercentage: 8000, term: { for_rounds: 1 } }, debuff_removal: { effect: 'acc_down', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { atk_up: { milliPercentage: { ss: 17000, s: 15000, a: 13500, b: 12500 }, term: { for_rounds: 1 } }, spd_down: { milliPercentage: 8000, term: { for_rounds: 1 } }, debuff_removal: { effect: 'acc_down', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { atk_up: { milliPercentage: { ss: 17500, s: 15500, a: 14000, b: 13000 }, term: { for_rounds: 1 } }, spd_down: { milliPercentage: 8000, term: { for_rounds: 1 } }, debuff_removal: { effect: 'acc_down', term: 'immediate' } } }]
    ]
  },
  recon_os: {
    type: 'os',
    id: 'recon_os',
    max_rank: 'ss',
    equipment_effects: [
      [{ condition: { trigger: 'start_wave', state: { affected: 'reconnaissance' } }, details: { atk_up: { milliPercentage: { ss:  9500, s:  8000, a:  6500, b:  5000 }, term: 'infinite' }, cri_up: { milliPercentage: { ss:  5600, s: 4400, a: 3200, b: 2000 }, term: 'infinite' }, acc_up: { milliPercentage: { ss: 14500, s: 13000, a: 11500, b: 10000 }, term: 'infinite' }, eva_up: { milliPercentage: { ss: 14500, s: 13000, a: 11500, b: 10000 }, term: 'infinite' }, spd_up: { milliPercentage: { ss: 2800, s: 2200, a: 1600, b: 1000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave', state: { affected: 'reconnaissance' } }, details: { atk_up: { milliPercentage: { ss: 10000, s:  8500, a:  7000, b:  5500 }, term: 'infinite' }, cri_up: { milliPercentage: { ss:  6000, s: 4800, a: 3600, b: 2400 }, term: 'infinite' }, acc_up: { milliPercentage: { ss: 15000, s: 13500, a: 12000, b: 10500 }, term: 'infinite' }, eva_up: { milliPercentage: { ss: 15000, s: 13500, a: 12000, b: 10500 }, term: 'infinite' }, spd_up: { milliPercentage: { ss: 3000, s: 2400, a: 1800, b: 1200 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave', state: { affected: 'reconnaissance' } }, details: { atk_up: { milliPercentage: { ss: 10500, s:  9000, a:  7500, b:  6000 }, term: 'infinite' }, cri_up: { milliPercentage: { ss:  6400, s: 5200, a: 4000, b: 2800 }, term: 'infinite' }, acc_up: { milliPercentage: { ss: 15500, s: 14000, a: 12500, b: 11000 }, term: 'infinite' }, eva_up: { milliPercentage: { ss: 15500, s: 14000, a: 12500, b: 11000 }, term: 'infinite' }, spd_up: { milliPercentage: { ss: 3200, s: 2600, a: 2000, b: 1400 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave', state: { affected: 'reconnaissance' } }, details: { atk_up: { milliPercentage: { ss: 11000, s:  9500, a:  8000, b:  6500 }, term: 'infinite' }, cri_up: { milliPercentage: { ss:  6800, s: 5600, a: 4400, b: 3200 }, term: 'infinite' }, acc_up: { milliPercentage: { ss: 16000, s: 14500, a: 13000, b: 11500 }, term: 'infinite' }, eva_up: { milliPercentage: { ss: 16000, s: 14500, a: 13000, b: 11500 }, term: 'infinite' }, spd_up: { milliPercentage: { ss: 3400, s: 2800, a: 2200, b: 1600 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave', state: { affected: 'reconnaissance' } }, details: { atk_up: { milliPercentage: { ss: 11500, s: 10000, a:  8500, b:  7000 }, term: 'infinite' }, cri_up: { milliPercentage: { ss:  7200, s: 6000, a: 4800, b: 3600 }, term: 'infinite' }, acc_up: { milliPercentage: { ss: 17000, s: 15000, a: 13500, b: 12000 }, term: 'infinite' }, eva_up: { milliPercentage: { ss: 17000, s: 15000, a: 13500, b: 12000 }, term: 'infinite' }, spd_up: { milliPercentage: { ss: 3600, s: 3000, a: 2400, b: 1800 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave', state: { affected: 'reconnaissance' } }, details: { atk_up: { milliPercentage: { ss: 12000, s: 10500, a:  9000, b:  7500 }, term: 'infinite' }, cri_up: { milliPercentage: { ss:  7600, s: 6400, a: 5200, b: 4000 }, term: 'infinite' }, acc_up: { milliPercentage: { ss: 18000, s: 15500, a: 14000, b: 12500 }, term: 'infinite' }, eva_up: { milliPercentage: { ss: 18000, s: 15500, a: 14000, b: 12500 }, term: 'infinite' }, spd_up: { milliPercentage: { ss: 3800, s: 3200, a: 2600, b: 2000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave', state: { affected: 'reconnaissance' } }, details: { atk_up: { milliPercentage: { ss: 12500, s: 11000, a:  9500, b:  8000 }, term: 'infinite' }, cri_up: { milliPercentage: { ss:  8000, s: 6800, a: 5600, b: 4400 }, term: 'infinite' }, acc_up: { milliPercentage: { ss: 19000, s: 16000, a: 14500, b: 13000 }, term: 'infinite' }, eva_up: { milliPercentage: { ss: 19000, s: 16000, a: 14500, b: 13000 }, term: 'infinite' }, spd_up: { milliPercentage: { ss: 4000, s: 3400, a: 2800, b: 2200 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave', state: { affected: 'reconnaissance' } }, details: { atk_up: { milliPercentage: { ss: 13000, s: 11500, a: 10000, b:  8500 }, term: 'infinite' }, cri_up: { milliPercentage: { ss:  8400, s: 7200, a: 6000, b: 4800 }, term: 'infinite' }, acc_up: { milliPercentage: { ss: 20000, s: 17000, a: 15000, b: 13500 }, term: 'infinite' }, eva_up: { milliPercentage: { ss: 20000, s: 17000, a: 15000, b: 13500 }, term: 'infinite' }, spd_up: { milliPercentage: { ss: 4200, s: 3600, a: 3000, b: 2400 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave', state: { affected: 'reconnaissance' } }, details: { atk_up: { milliPercentage: { ss: 13500, s: 12000, a: 10500, b:  9000 }, term: 'infinite' }, cri_up: { milliPercentage: { ss:  8800, s: 7600, a: 6400, b: 5200 }, term: 'infinite' }, acc_up: { milliPercentage: { ss: 21000, s: 18000, a: 15500, b: 14000 }, term: 'infinite' }, eva_up: { milliPercentage: { ss: 21000, s: 18000, a: 15500, b: 14000 }, term: 'infinite' }, spd_up: { milliPercentage: { ss: 4400, s: 3800, a: 3200, b: 2600 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave', state: { affected: 'reconnaissance' } }, details: { atk_up: { milliPercentage: { ss: 14000, s: 12500, a: 11000, b:  9500 }, term: 'infinite' }, cri_up: { milliPercentage: { ss:  9200, s: 8000, a: 6800, b: 5600 }, term: 'infinite' }, acc_up: { milliPercentage: { ss: 23000, s: 19000, a: 16000, b: 14500 }, term: 'infinite' }, eva_up: { milliPercentage: { ss: 23000, s: 19000, a: 16000, b: 14500 }, term: 'infinite' }, spd_up: { milliPercentage: { ss: 4600, s: 4000, a: 3400, b: 2800 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave', state: { affected: 'reconnaissance' } }, details: { atk_up: { milliPercentage: { ss: 15000, s: 13000, a: 11500, b: 10000 }, term: 'infinite' }, cri_up: { milliPercentage: { ss: 10000, s: 8400, a: 7200, b: 6000 }, term: 'infinite' }, acc_up: { milliPercentage: { ss: 25000, s: 20000, a: 17000, b: 15000 }, term: 'infinite' }, eva_up: { milliPercentage: { ss: 25000, s: 20000, a: 17000, b: 15000 }, term: 'infinite' }, spd_up: { milliPercentage: { ss: 5000, s: 4200, a: 3600, b: 3000 }, term: 'infinite' } } }]
    ]
  },
  standard_os: {
    type: 'os',
    id: 'standard_os',
    max_rank: 'ss',
    effects: [
      [{ condition: { trigger: 'start_round' }, details: { self: { atk_up: { milliPercentage: { ss: 4700, s: 3500, a: 2600, b: 2000 }, term: { for_rounds: 1 } }, def_up: { milliPercentage: { ss: 10750, s:  7750, a:  5500, b:  4000 }, term: { for_rounds: 1 } }, acc_up: { milliPercentage: { ss: 14000, s: 10000, a:  7000, b:  5000 }, term: { for_rounds: 1 } }, eva_up: { milliPercentage: { ss: 14000, s: 10000, a:  7000, b:  5000 }, term: { for_rounds: 1 } } } } }],
      [{ condition: { trigger: 'start_round' }, details: { self: { atk_up: { milliPercentage: { ss: 5000, s: 3800, a: 2900, b: 2300 }, term: { for_rounds: 1 } }, def_up: { milliPercentage: { ss: 11500, s:  8500, a:  6250, b:  4750 }, term: { for_rounds: 1 } }, acc_up: { milliPercentage: { ss: 15000, s: 11000, a:  8000, b:  6000 }, term: { for_rounds: 1 } }, eva_up: { milliPercentage: { ss: 15000, s: 11000, a:  8000, b:  6000 }, term: { for_rounds: 1 } } } } }],
      [{ condition: { trigger: 'start_round' }, details: { self: { atk_up: { milliPercentage: { ss: 5300, s: 4100, a: 3200, b: 2600 }, term: { for_rounds: 1 } }, def_up: { milliPercentage: { ss: 12250, s:  9250, a:  7000, b:  5500 }, term: { for_rounds: 1 } }, acc_up: { milliPercentage: { ss: 16000, s: 12000, a:  9000, b:  7000 }, term: { for_rounds: 1 } }, eva_up: { milliPercentage: { ss: 16000, s: 12000, a:  9000, b:  7000 }, term: { for_rounds: 1 } } } } }],
      [{ condition: { trigger: 'start_round' }, details: { self: { atk_up: { milliPercentage: { ss: 5600, s: 4400, a: 3500, b: 2900 }, term: { for_rounds: 1 } }, def_up: { milliPercentage: { ss: 13000, s: 10000, a:  7750, b:  6250 }, term: { for_rounds: 1 } }, acc_up: { milliPercentage: { ss: 17000, s: 13000, a: 10000, b:  8000 }, term: { for_rounds: 1 } }, eva_up: { milliPercentage: { ss: 17000, s: 13000, a: 10000, b:  8000 }, term: { for_rounds: 1 } } } } }],
      [{ condition: { trigger: 'start_round' }, details: { self: { atk_up: { milliPercentage: { ss: 5900, s: 4700, a: 3800, b: 3200 }, term: { for_rounds: 1 } }, def_up: { milliPercentage: { ss: 13750, s: 10750, a:  8500, b:  7000 }, term: { for_rounds: 1 } }, acc_up: { milliPercentage: { ss: 18000, s: 14000, a: 11000, b:  9000 }, term: { for_rounds: 1 } }, eva_up: { milliPercentage: { ss: 18000, s: 14000, a: 11000, b:  9000 }, term: { for_rounds: 1 } } } } }],
      [{ condition: { trigger: 'start_round' }, details: { self: { atk_up: { milliPercentage: { ss: 6200, s: 5000, a: 4100, b: 3500 }, term: { for_rounds: 1 } }, def_up: { milliPercentage: { ss: 14500, s: 11500, a:  9250, b:  7750 }, term: { for_rounds: 1 } }, acc_up: { milliPercentage: { ss: 19000, s: 15000, a: 12000, b: 10000 }, term: { for_rounds: 1 } }, eva_up: { milliPercentage: { ss: 19000, s: 15000, a: 12000, b: 10000 }, term: { for_rounds: 1 } } } } }],
      [{ condition: { trigger: 'start_round' }, details: { self: { atk_up: { milliPercentage: { ss: 6500, s: 5300, a: 4400, b: 3800 }, term: { for_rounds: 1 } }, def_up: { milliPercentage: { ss: 15250, s: 12250, a: 10000, b:  8500 }, term: { for_rounds: 1 } }, acc_up: { milliPercentage: { ss: 20000, s: 16000, a: 13000, b: 11000 }, term: { for_rounds: 1 } }, eva_up: { milliPercentage: { ss: 20000, s: 16000, a: 13000, b: 11000 }, term: { for_rounds: 1 } } } } }],
      [{ condition: { trigger: 'start_round' }, details: { self: { atk_up: { milliPercentage: { ss: 6800, s: 5600, a: 4700, b: 4100 }, term: { for_rounds: 1 } }, def_up: { milliPercentage: { ss: 16000, s: 13000, a: 10750, b:  9250 }, term: { for_rounds: 1 } }, acc_up: { milliPercentage: { ss: 21000, s: 17000, a: 14000, b: 12000 }, term: { for_rounds: 1 } }, eva_up: { milliPercentage: { ss: 21000, s: 17000, a: 14000, b: 12000 }, term: { for_rounds: 1 } } } } }],
      [{ condition: { trigger: 'start_round' }, details: { self: { atk_up: { milliPercentage: { ss: 7100, s: 5900, a: 5000, b: 4400 }, term: { for_rounds: 1 } }, def_up: { milliPercentage: { ss: 16750, s: 13750, a: 11500, b: 10000 }, term: { for_rounds: 1 } }, acc_up: { milliPercentage: { ss: 22000, s: 18000, a: 15000, b: 13000 }, term: { for_rounds: 1 } }, eva_up: { milliPercentage: { ss: 22000, s: 18000, a: 15000, b: 13000 }, term: { for_rounds: 1 } } } } }],
      [{ condition: { trigger: 'start_round' }, details: { self: { atk_up: { milliPercentage: { ss: 7400, s: 6200, a: 5300, b: 4700 }, term: { for_rounds: 1 } }, def_up: { milliPercentage: { ss: 17500, s: 14500, a: 12250, b: 10750 }, term: { for_rounds: 1 } }, acc_up: { milliPercentage: { ss: 23000, s: 19000, a: 16000, b: 14000 }, term: { for_rounds: 1 } }, eva_up: { milliPercentage: { ss: 23000, s: 19000, a: 16000, b: 14000 }, term: { for_rounds: 1 } } } } }],
      [{ condition: { trigger: 'start_round' }, details: { self: { atk_up: { milliPercentage: { ss: 8000, s: 6500, a: 5600, b: 4700 }, term: { for_rounds: 1 } }, def_up: { milliPercentage: { ss: 20000, s: 15250, a: 13000, b: 10750 }, term: { for_rounds: 1 } }, acc_up: { milliPercentage: { ss: 25000, s: 20000, a: 17000, b: 14000 }, term: { for_rounds: 1 } }, eva_up: { milliPercentage: { ss: 25000, s: 20000, a: 17000, b: 14000 }, term: { for_rounds: 1 } } } } }]
    ]
  },
  exp_os: {
    type: 'os',
    id: 'exp_os',
    max_rank: 'ss',
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { exp_up: { milliPercentage: { ss: 14000, s: 10000, a:  7000, b:  5000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { exp_up: { milliPercentage: { ss: 15000, s: 11000, a:  8000, b:  6000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { exp_up: { milliPercentage: { ss: 16000, s: 12000, a:  9000, b:  7000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { exp_up: { milliPercentage: { ss: 17000, s: 13000, a: 10000, b:  8000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { exp_up: { milliPercentage: { ss: 18000, s: 14000, a: 11000, b:  9000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { exp_up: { milliPercentage: { ss: 19000, s: 15000, a: 12000, b: 10000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { exp_up: { milliPercentage: { ss: 20000, s: 16000, a: 13000, b: 11000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { exp_up: { milliPercentage: { ss: 21000, s: 17000, a: 14000, b: 12000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { exp_up: { milliPercentage: { ss: 22000, s: 18000, a: 15000, b: 13000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { exp_up: { milliPercentage: { ss: 23000, s: 19000, a: 16000, b: 14000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { exp_up: { milliPercentage: { ss: 25000, s: 20000, a: 17000, b: 15000 }, term: 'infinite' } } }]
    ]
  },
  enhanced_combat_os: {
    type: 'os',
    id: 'enhanced_combat_os',
    effects: [
      [{ condition: { trigger: 'start_round' }, details: { self: { atk_up: { milliPercentage:  4000, term: { for_rounds: 1 } }, eva_up: { milliPercentage: 10000, term: { for_rounds: 1 } }, spd_up: { milliPercentage:  500, term: { for_rounds: 1 } }, damage_reduction_up: { milliPercentage:  5000, term: { for_rounds: 1 } } } } }],
      [{ condition: { trigger: 'start_round' }, details: { self: { atk_up: { milliPercentage:  4800, term: { for_rounds: 1 } }, eva_up: { milliPercentage: 12000, term: { for_rounds: 1 } }, spd_up: { milliPercentage:  750, term: { for_rounds: 1 } }, damage_reduction_up: { milliPercentage:  5500, term: { for_rounds: 1 } } } } }],
      [{ condition: { trigger: 'start_round' }, details: { self: { atk_up: { milliPercentage:  5600, term: { for_rounds: 1 } }, eva_up: { milliPercentage: 14000, term: { for_rounds: 1 } }, spd_up: { milliPercentage: 1000, term: { for_rounds: 1 } }, damage_reduction_up: { milliPercentage:  6000, term: { for_rounds: 1 } } } } }],
      [{ condition: { trigger: 'start_round' }, details: { self: { atk_up: { milliPercentage:  6400, term: { for_rounds: 1 } }, eva_up: { milliPercentage: 16000, term: { for_rounds: 1 } }, spd_up: { milliPercentage: 1500, term: { for_rounds: 1 } }, damage_reduction_up: { milliPercentage:  6500, term: { for_rounds: 1 } } } } }],
      [{ condition: { trigger: 'start_round' }, details: { self: { atk_up: { milliPercentage:  7200, term: { for_rounds: 1 } }, eva_up: { milliPercentage: 18000, term: { for_rounds: 1 } }, spd_up: { milliPercentage: 2000, term: { for_rounds: 1 } }, damage_reduction_up: { milliPercentage:  7000, term: { for_rounds: 1 } } } } }],
      [{ condition: { trigger: 'start_round' }, details: { self: { atk_up: { milliPercentage:  8000, term: { for_rounds: 1 } }, eva_up: { milliPercentage: 20000, term: { for_rounds: 1 } }, spd_up: { milliPercentage: 2500, term: { for_rounds: 1 } }, damage_reduction_up: { milliPercentage:  7500, term: { for_rounds: 1 } } } } }],
      [{ condition: { trigger: 'start_round' }, details: { self: { atk_up: { milliPercentage:  8800, term: { for_rounds: 1 } }, eva_up: { milliPercentage: 22000, term: { for_rounds: 1 } }, spd_up: { milliPercentage: 3000, term: { for_rounds: 1 } }, damage_reduction_up: { milliPercentage:  8000, term: { for_rounds: 1 } } } } }],
      [{ condition: { trigger: 'start_round' }, details: { self: { atk_up: { milliPercentage:  9600, term: { for_rounds: 1 } }, eva_up: { milliPercentage: 24000, term: { for_rounds: 1 } }, spd_up: { milliPercentage: 3500, term: { for_rounds: 1 } }, damage_reduction_up: { milliPercentage:  8500, term: { for_rounds: 1 } } } } }],
      [{ condition: { trigger: 'start_round' }, details: { self: { atk_up: { milliPercentage: 10400, term: { for_rounds: 1 } }, eva_up: { milliPercentage: 26000, term: { for_rounds: 1 } }, spd_up: { milliPercentage: 4000, term: { for_rounds: 1 } }, damage_reduction_up: { milliPercentage:  9000, term: { for_rounds: 1 } } } } }],
      [{ condition: { trigger: 'start_round' }, details: { self: { atk_up: { milliPercentage: 11200, term: { for_rounds: 1 } }, eva_up: { milliPercentage: 28000, term: { for_rounds: 1 } }, spd_up: { milliPercentage: 4500, term: { for_rounds: 1 } }, damage_reduction_up: { milliPercentage:  9500, term: { for_rounds: 1 } } } } }],
      [{ condition: { trigger: 'start_round' }, details: { self: { atk_up: { milliPercentage: 12000, term: { for_rounds: 1 } }, eva_up: { milliPercentage: 30000, term: { for_rounds: 1 } }, spd_up: { milliPercentage: 5000, term: { for_rounds: 1 } }, damage_reduction_up: { milliPercentage: 10000, term: { for_rounds: 1 } } } } }]
    ]
  },
  enhanced_exp_os: {
    type: 'os',
    id: 'enhanced_exp_os',
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { exp_up: { milliPercentage: 15500, term: 'infinite' }, spd_down: { milliPercentage: 20000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { exp_up: { milliPercentage: 16600, term: 'infinite' }, spd_down: { milliPercentage: 21000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { exp_up: { milliPercentage: 17700, term: 'infinite' }, spd_down: { milliPercentage: 22000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { exp_up: { milliPercentage: 18800, term: 'infinite' }, spd_down: { milliPercentage: 23000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { exp_up: { milliPercentage: 19900, term: 'infinite' }, spd_down: { milliPercentage: 24000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { exp_up: { milliPercentage: 21000, term: 'infinite' }, spd_down: { milliPercentage: 25000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { exp_up: { milliPercentage: 22100, term: 'infinite' }, spd_down: { milliPercentage: 26000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { exp_up: { milliPercentage: 23200, term: 'infinite' }, spd_down: { milliPercentage: 27000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { exp_up: { milliPercentage: 24300, term: 'infinite' }, spd_down: { milliPercentage: 28000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { exp_up: { milliPercentage: 25400, term: 'infinite' }, spd_down: { milliPercentage: 29000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { exp_up: { milliPercentage: 27500, term: 'infinite' }, spd_down: { milliPercentage: 30000, term: 'infinite' } } }]
    ]
  },
  enhanced_assault_os: {
    type: 'os',
    id: 'enhanced_assault_os',
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: 10000, term: 'infinite' }, range_down: { value: 2, term: 'infinite' } } }, { condition: { trigger: 'start_round' }, details: { cri_up: { milliPercentage:  100, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: 11000, term: 'infinite' }, range_down: { value: 2, term: 'infinite' } } }, { condition: { trigger: 'start_round' }, details: { cri_up: { milliPercentage:  500, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: 12000, term: 'infinite' }, range_down: { value: 2, term: 'infinite' } } }, { condition: { trigger: 'start_round' }, details: { cri_up: { milliPercentage: 1000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: 13000, term: 'infinite' }, range_down: { value: 2, term: 'infinite' } } }, { condition: { trigger: 'start_round' }, details: { cri_up: { milliPercentage: 1500, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: 14000, term: 'infinite' }, range_down: { value: 2, term: 'infinite' } } }, { condition: { trigger: 'start_round' }, details: { cri_up: { milliPercentage: 2000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: 15000, term: 'infinite' }, range_down: { value: 2, term: 'infinite' } } }, { condition: { trigger: 'start_round' }, details: { cri_up: { milliPercentage: 2500, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: 16000, term: 'infinite' }, range_down: { value: 2, term: 'infinite' } } }, { condition: { trigger: 'start_round' }, details: { cri_up: { milliPercentage: 3000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: 17000, term: 'infinite' }, range_down: { value: 2, term: 'infinite' } } }, { condition: { trigger: 'start_round' }, details: { cri_up: { milliPercentage: 3500, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: 18000, term: 'infinite' }, range_down: { value: 2, term: 'infinite' } } }, { condition: { trigger: 'start_round' }, details: { cri_up: { milliPercentage: 4000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: 19000, term: 'infinite' }, range_down: { value: 2, term: 'infinite' } } }, { condition: { trigger: 'start_round' }, details: { cri_up: { milliPercentage: 4500, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: 20000, term: 'infinite' }, range_down: { value: 2, term: 'infinite' } } }, { condition: { trigger: 'start_round' }, details: { cri_up: { milliPercentage: 5000, term: { for_rounds: 1 } } } }]
    ]
  },
  assassination_os: {
    type: 'os',
    id: 'assassination_os',
    exclusive: {
      role: 'attacker'
    },
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage:  5000, term: { for_rounds: 999 } }, spd_down: { milliPercentage: 20000, term: { for_rounds: 999 } }, ignore_protect: { term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage:  6500, term: { for_rounds: 999 } }, spd_down: { milliPercentage: 17500, term: { for_rounds: 999 } }, ignore_protect: { term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage:  8000, term: { for_rounds: 999 } }, spd_down: { milliPercentage: 15000, term: { for_rounds: 999 } }, ignore_protect: { term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage:  9500, term: { for_rounds: 999 } }, spd_down: { milliPercentage: 12500, term: { for_rounds: 999 } }, ignore_protect: { term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: 11000, term: { for_rounds: 999 } }, spd_down: { milliPercentage: 10000, term: { for_rounds: 999 } }, ignore_protect: { term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: 12500, term: { for_rounds: 999 } }, spd_down: { milliPercentage:  7500, term: { for_rounds: 999 } }, ignore_protect: { term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: 14000, term: { for_rounds: 999 } }, spd_down: { milliPercentage:  5000, term: { for_rounds: 999 } }, ignore_protect: { term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: 15500, term: { for_rounds: 999 } }, spd_down: { milliPercentage:  2500, term: { for_rounds: 999 } }, ignore_protect: { term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: 17000, term: { for_rounds: 999 } }, spd_up:   { milliPercentage:     0, term: { for_rounds: 999 } }, ignore_protect: { term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: 18500, term: { for_rounds: 999 } }, spd_up:   { milliPercentage:  2500, term: { for_rounds: 999 } }, ignore_protect: { term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: 20000, term: { for_rounds: 999 } }, spd_up:   { milliPercentage:  5000, term: { for_rounds: 999 } }, ignore_protect: { term: { for_rounds: 2 } } } }]
    ]
  },
  w_r_i_i_os: {
    type: 'os',
    id: 'w_r_i_i_os',
    exclusive: {
      role: 'defender'
    },
    status_effects: [
      { hp_up: { value: 150 }, def_up: { milliValue: 100000 } },
      { hp_up: { value: 165 }, def_up: { milliValue: 110000 } },
      { hp_up: { value: 180 }, def_up: { milliValue: 120000 } },
      { hp_up: { value: 195 }, def_up: { milliValue: 130000 } },
      { hp_up: { value: 210 }, def_up: { milliValue: 140000 } },
      { hp_up: { value: 225 }, def_up: { milliValue: 150000 } },
      { hp_up: { value: 240 }, def_up: { milliValue: 160000 } },
      { hp_up: { value: 255 }, def_up: { milliValue: 170000 } },
      { hp_up: { value: 270 }, def_up: { milliValue: 180000 } },
      { hp_up: { value: 285 }, def_up: { milliValue: 190000 } },
      { hp_up: { value: 300 }, def_up: { milliValue: 200000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'be_attacked', state: { status_less_than_self: { status: 'def' } } }, target: { kind: 'enemy' }, details: { atk_down: { milliPercentage: 10000, term: 'infinite', times: 1, max_stack: 1 } } }],
      [{ condition: { trigger: 'be_attacked', state: { status_less_than_self: { status: 'def' } } }, target: { kind: 'enemy' }, details: { atk_down: { milliPercentage: 13000, term: 'infinite', times: 1, max_stack: 1 } } }],
      [{ condition: { trigger: 'be_attacked', state: { status_less_than_self: { status: 'def' } } }, target: { kind: 'enemy' }, details: { atk_down: { milliPercentage: 16000, term: 'infinite', times: 1, max_stack: 1 } } }],
      [{ condition: { trigger: 'be_attacked', state: { status_less_than_self: { status: 'def' } } }, target: { kind: 'enemy' }, details: { atk_down: { milliPercentage: 19000, term: 'infinite', times: 1, max_stack: 1 } } }],
      [{ condition: { trigger: 'be_attacked', state: { status_less_than_self: { status: 'def' } } }, target: { kind: 'enemy' }, details: { atk_down: { milliPercentage: 22000, term: 'infinite', times: 1, max_stack: 1 } } }],
      [{ condition: { trigger: 'be_attacked', state: { status_less_than_self: { status: 'def' } } }, target: { kind: 'enemy' }, details: { atk_down: { milliPercentage: 25000, term: 'infinite', times: 1, max_stack: 1 } } }],
      [{ condition: { trigger: 'be_attacked', state: { status_less_than_self: { status: 'def' } } }, target: { kind: 'enemy' }, details: { atk_down: { milliPercentage: 28000, term: 'infinite', times: 1, max_stack: 1 } } }],
      [{ condition: { trigger: 'be_attacked', state: { status_less_than_self: { status: 'def' } } }, target: { kind: 'enemy' }, details: { atk_down: { milliPercentage: 31000, term: 'infinite', times: 1, max_stack: 1 } } }],
      [{ condition: { trigger: 'be_attacked', state: { status_less_than_self: { status: 'def' } } }, target: { kind: 'enemy' }, details: { atk_down: { milliPercentage: 34000, term: 'infinite', times: 1, max_stack: 1 } } }],
      [{ condition: { trigger: 'be_attacked', state: { status_less_than_self: { status: 'def' } } }, target: { kind: 'enemy' }, details: { atk_down: { milliPercentage: 37000, term: 'infinite', times: 1, max_stack: 1 } } }],
      [{ condition: { trigger: 'be_attacked', state: { status_less_than_self: { status: 'def' } } }, target: { kind: 'enemy' }, details: { atk_down: { milliPercentage: 40000, term: 'infinite', times: 1, max_stack: 1 } } }]
    ]
  },
  battlefield_reboot_os_alpha: {
    type: 'os',
    id: 'battlefield_reboot_os_alpha',
    status_effects: [
      { def_up: { milliValue: 100000 }, acc_up: { milliPercentage: 10000 }, cri_up: { milliPercentage:  5000 } },
      { def_up: { milliValue: 110000 }, acc_up: { milliPercentage: 11000 }, cri_up: { milliPercentage:  5500 } },
      { def_up: { milliValue: 120000 }, acc_up: { milliPercentage: 12000 }, cri_up: { milliPercentage:  6000 } },
      { def_up: { milliValue: 130000 }, acc_up: { milliPercentage: 13000 }, cri_up: { milliPercentage:  6500 } },
      { def_up: { milliValue: 140000 }, acc_up: { milliPercentage: 14000 }, cri_up: { milliPercentage:  7000 } },
      { def_up: { milliValue: 150000 }, acc_up: { milliPercentage: 15000 }, cri_up: { milliPercentage:  7500 } },
      { def_up: { milliValue: 160000 }, acc_up: { milliPercentage: 16000 }, cri_up: { milliPercentage:  8000 } },
      { def_up: { milliValue: 170000 }, acc_up: { milliPercentage: 17000 }, cri_up: { milliPercentage:  8500 } },
      { def_up: { milliValue: 180000 }, acc_up: { milliPercentage: 18000 }, cri_up: { milliPercentage:  9000 } },
      { def_up: { milliValue: 190000 }, acc_up: { milliPercentage: 19000 }, cri_up: { milliPercentage:  9500 } },
      { def_up: { milliValue: 200000 }, acc_up: { milliPercentage: 20000 }, cri_up: { milliPercentage: 10000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_wave', state: { hp_greater_or_equal: 100 } }, details: { silenced: { term: { for_rounds: 1 } }, fixed_damage_over_time: { value: 10, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_wave', state: { hp_greater_or_equal: 100 } }, details: { silenced: { term: { for_rounds: 1 } }, fixed_damage_over_time: { value: 10, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_wave', state: { hp_greater_or_equal: 100 } }, details: { silenced: { term: { for_rounds: 1 } }, fixed_damage_over_time: { value: 10, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_wave', state: { hp_greater_or_equal: 100 } }, details: { silenced: { term: { for_rounds: 1 } }, fixed_damage_over_time: { value: 10, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_wave', state: { hp_greater_or_equal: 100 } }, details: { silenced: { term: { for_rounds: 1 } }, fixed_damage_over_time: { value: 10, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_wave', state: { hp_greater_or_equal: 100 } }, details: { silenced: { term: { for_rounds: 1 } }, fixed_damage_over_time: { value: 10, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_wave', state: { hp_greater_or_equal: 100 } }, details: { silenced: { term: { for_rounds: 1 } }, fixed_damage_over_time: { value: 10, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_wave', state: { hp_greater_or_equal: 100 } }, details: { silenced: { term: { for_rounds: 1 } }, fixed_damage_over_time: { value: 10, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_wave', state: { hp_greater_or_equal: 100 } }, details: { silenced: { term: { for_rounds: 1 } }, fixed_damage_over_time: { value: 10, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_wave', state: { hp_greater_or_equal: 100 } }, details: { silenced: { term: { for_rounds: 1 } }, fixed_damage_over_time: { value: 10, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_wave', state: { hp_greater_or_equal: 100 } }, details: { silenced: { term: { for_rounds: 1 } }, fixed_damage_over_time: { value: 10, term: { for_rounds: 1 } } } }]
    ]
  },
  battlefield_reboot_os_beta: {
    type: 'os',
    id: 'battlefield_reboot_os_beta',
    status_effects: [
      { def_up: { milliValue: 120000 }, acc_up: { milliPercentage: 12000 }, cri_up: { milliPercentage:  6000 } },
      { def_up: { milliValue: 132000 }, acc_up: { milliPercentage: 13200 }, cri_up: { milliPercentage:  6600 } },
      { def_up: { milliValue: 144000 }, acc_up: { milliPercentage: 14400 }, cri_up: { milliPercentage:  7200 } },
      { def_up: { milliValue: 156000 }, acc_up: { milliPercentage: 15600 }, cri_up: { milliPercentage:  7800 } },
      { def_up: { milliValue: 168000 }, acc_up: { milliPercentage: 16800 }, cri_up: { milliPercentage:  8400 } },
      { def_up: { milliValue: 180000 }, acc_up: { milliPercentage: 18000 }, cri_up: { milliPercentage:  9000 } },
      { def_up: { milliValue: 192000 }, acc_up: { milliPercentage: 19200 }, cri_up: { milliPercentage:  9600 } },
      { def_up: { milliValue: 204000 }, acc_up: { milliPercentage: 20400 }, cri_up: { milliPercentage: 10200 } },
      { def_up: { milliValue: 216000 }, acc_up: { milliPercentage: 21600 }, cri_up: { milliPercentage: 10800 } },
      { def_up: { milliValue: 228000 }, acc_up: { milliPercentage: 22800 }, cri_up: { milliPercentage: 11400 } },
      { def_up: { milliValue: 240000 }, acc_up: { milliPercentage: 24000 }, cri_up: { milliPercentage: 12000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_round', round: 'even' }, details: { silenced: { term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', round: 'even' }, details: { silenced: { term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', round: 'even' }, details: { silenced: { term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', round: 'even' }, details: { silenced: { term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', round: 'even' }, details: { silenced: { term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', round: 'even' }, details: { silenced: { term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', round: 'even' }, details: { silenced: { term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', round: 'even' }, details: { silenced: { term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', round: 'even' }, details: { silenced: { term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', round: 'even' }, details: { silenced: { term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', round: 'even' }, details: { silenced: { term: { for_rounds: 1 } } } }]
    ]
  },
  battlefield_reboot_os_gamma: {
    type: 'os',
    id: 'battlefield_reboot_os_gamma',
    status_effects: [
      { def_up: { milliValue: 120000 }, acc_up: { milliPercentage: 12000 }, cri_up: { milliPercentage:  6000 } },
      { def_up: { milliValue: 132000 }, acc_up: { milliPercentage: 13200 }, cri_up: { milliPercentage:  6600 } },
      { def_up: { milliValue: 144000 }, acc_up: { milliPercentage: 14400 }, cri_up: { milliPercentage:  7200 } },
      { def_up: { milliValue: 156000 }, acc_up: { milliPercentage: 15600 }, cri_up: { milliPercentage:  7800 } },
      { def_up: { milliValue: 168000 }, acc_up: { milliPercentage: 16800 }, cri_up: { milliPercentage:  8400 } },
      { def_up: { milliValue: 180000 }, acc_up: { milliPercentage: 18000 }, cri_up: { milliPercentage:  9000 } },
      { def_up: { milliValue: 192000 }, acc_up: { milliPercentage: 19200 }, cri_up: { milliPercentage:  9600 } },
      { def_up: { milliValue: 204000 }, acc_up: { milliPercentage: 20400 }, cri_up: { milliPercentage: 10200 } },
      { def_up: { milliValue: 216000 }, acc_up: { milliPercentage: 21600 }, cri_up: { milliPercentage: 10800 } },
      { def_up: { milliValue: 228000 }, acc_up: { milliPercentage: 22800 }, cri_up: { milliPercentage: 11400 } },
      { def_up: { milliValue: 240000 }, acc_up: { milliPercentage: 24000 }, cri_up: { milliPercentage: 12000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_round', round: 'odd' }, details: { silenced: { term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', round: 'odd' }, details: { silenced: { term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', round: 'odd' }, details: { silenced: { term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', round: 'odd' }, details: { silenced: { term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', round: 'odd' }, details: { silenced: { term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', round: 'odd' }, details: { silenced: { term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', round: 'odd' }, details: { silenced: { term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', round: 'odd' }, details: { silenced: { term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', round: 'odd' }, details: { silenced: { term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', round: 'odd' }, details: { silenced: { term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', round: 'odd' }, details: { silenced: { term: { for_rounds: 1 } } } }]
    ]
  },
  light_attacker_optimization_os: {
    type: 'os',
    id: 'light_attacker_optimization_os',
    max_rank: 'sss',
    min_rank: 'ss',
    exclusive: {
      type: 'light',
      role: 'attacker'
    },
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: { sss: 27500, ss: 22500 }, term: { for_rounds: 999 } }, acc_up: { milliPercentage: { sss: 20000, ss: 17500 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: { sss: 28500, ss: 23500 }, term: { for_rounds: 999 } }, acc_up: { milliPercentage: { sss: 20500, ss: 18000 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: { sss: 29500, ss: 24500 }, term: { for_rounds: 999 } }, acc_up: { milliPercentage: { sss: 21000, ss: 18500 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: { sss: 30500, ss: 25500 }, term: { for_rounds: 999 } }, acc_up: { milliPercentage: { sss: 21500, ss: 19000 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: { sss: 31500, ss: 26500 }, term: { for_rounds: 999 } }, acc_up: { milliPercentage: { sss: 22000, ss: 19500 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: { sss: 32500, ss: 27500 }, term: { for_rounds: 999 } }, acc_up: { milliPercentage: { sss: 22500, ss: 20000 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: { sss: 33500, ss: 28500 }, term: { for_rounds: 999 } }, acc_up: { milliPercentage: { sss: 23000, ss: 20500 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: { sss: 34500, ss: 29500 }, term: { for_rounds: 999 } }, acc_up: { milliPercentage: { sss: 23500, ss: 21000 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: { sss: 35500, ss: 30500 }, term: { for_rounds: 999 } }, acc_up: { milliPercentage: { sss: 24000, ss: 21500 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: { sss: 36500, ss: 31500 }, term: { for_rounds: 999 } }, acc_up: { milliPercentage: { sss: 24500, ss: 22000 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: { sss: 37500, ss: 32500 }, term: { for_rounds: 999 } }, acc_up: { milliPercentage: { sss: 25000, ss: 22500 }, term: { for_rounds: 999 } } } }]
    ]
  },
  light_defender_optimization_os: {
    type: 'os',
    id: 'light_defender_optimization_os',
    max_rank: 'sss',
    min_rank: 'ss',
    exclusive: {
      type: 'light',
      role: 'defender'
    },
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { def_up: { milliPercentage: { sss: 27000, ss: 22000 }, term: { for_rounds: 999 } }, damage_reduction_up: { milliPercentage: { sss: 10000, ss:  7500 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { def_up: { milliPercentage: { sss: 28000, ss: 23000 }, term: { for_rounds: 999 } }, damage_reduction_up: { milliPercentage: { sss: 10500, ss:  8000 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { def_up: { milliPercentage: { sss: 29000, ss: 24000 }, term: { for_rounds: 999 } }, damage_reduction_up: { milliPercentage: { sss: 11000, ss:  8500 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { def_up: { milliPercentage: { sss: 30000, ss: 25000 }, term: { for_rounds: 999 } }, damage_reduction_up: { milliPercentage: { sss: 11500, ss:  9000 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { def_up: { milliPercentage: { sss: 31000, ss: 26000 }, term: { for_rounds: 999 } }, damage_reduction_up: { milliPercentage: { sss: 12000, ss:  9500 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { def_up: { milliPercentage: { sss: 32000, ss: 27000 }, term: { for_rounds: 999 } }, damage_reduction_up: { milliPercentage: { sss: 12500, ss: 10000 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { def_up: { milliPercentage: { sss: 33000, ss: 28000 }, term: { for_rounds: 999 } }, damage_reduction_up: { milliPercentage: { sss: 13000, ss: 10500 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { def_up: { milliPercentage: { sss: 34000, ss: 29000 }, term: { for_rounds: 999 } }, damage_reduction_up: { milliPercentage: { sss: 13500, ss: 11000 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { def_up: { milliPercentage: { sss: 35000, ss: 30000 }, term: { for_rounds: 999 } }, damage_reduction_up: { milliPercentage: { sss: 14000, ss: 11500 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { def_up: { milliPercentage: { sss: 36000, ss: 31000 }, term: { for_rounds: 999 } }, damage_reduction_up: { milliPercentage: { sss: 14500, ss: 12000 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { def_up: { milliPercentage: { sss: 37000, ss: 32000 }, term: { for_rounds: 999 } }, damage_reduction_up: { milliPercentage: { sss: 15000, ss: 12500 }, term: { for_rounds: 999 } } } }]
    ]
  },
  light_supporter_optimization_os: {
    type: 'os',
    id: 'light_supporter_optimization_os',
    max_rank: 'sss',
    min_rank: 'ss',
    exclusive: {
      type: 'light',
      role: 'supporter'
    },
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { acc_up: { milliPercentage: { sss: 60000, ss: 50000 }, term: { for_rounds: 999 } }, spd_up: { milliPercentage: { sss: 12500, ss: 10000 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { acc_up: { milliPercentage: { sss: 62000, ss: 52000 }, term: { for_rounds: 999 } }, spd_up: { milliPercentage: { sss: 13000, ss: 10500 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { acc_up: { milliPercentage: { sss: 64000, ss: 54000 }, term: { for_rounds: 999 } }, spd_up: { milliPercentage: { sss: 13500, ss: 11000 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { acc_up: { milliPercentage: { sss: 66000, ss: 56000 }, term: { for_rounds: 999 } }, spd_up: { milliPercentage: { sss: 14000, ss: 11500 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { acc_up: { milliPercentage: { sss: 68000, ss: 58000 }, term: { for_rounds: 999 } }, spd_up: { milliPercentage: { sss: 14500, ss: 12000 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { acc_up: { milliPercentage: { sss: 70000, ss: 60000 }, term: { for_rounds: 999 } }, spd_up: { milliPercentage: { sss: 15000, ss: 12500 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { acc_up: { milliPercentage: { sss: 72000, ss: 62000 }, term: { for_rounds: 999 } }, spd_up: { milliPercentage: { sss: 15500, ss: 13000 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { acc_up: { milliPercentage: { sss: 74000, ss: 64000 }, term: { for_rounds: 999 } }, spd_up: { milliPercentage: { sss: 16000, ss: 13500 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { acc_up: { milliPercentage: { sss: 76000, ss: 66000 }, term: { for_rounds: 999 } }, spd_up: { milliPercentage: { sss: 16500, ss: 14000 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { acc_up: { milliPercentage: { sss: 78000, ss: 68000 }, term: { for_rounds: 999 } }, spd_up: { milliPercentage: { sss: 17000, ss: 14500 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { acc_up: { milliPercentage: { sss: 80000, ss: 70000 }, term: { for_rounds: 999 } }, spd_up: { milliPercentage: { sss: 17500, ss: 15000 }, term: { for_rounds: 999 } } } }]
    ]
  },
  heavy_attacker_optimization_os: {
    type: 'os',
    id: 'heavy_attacker_optimization_os',
    max_rank: 'sss',
    min_rank: 'ss',
    exclusive: {
      type: 'heavy',
      role: 'attacker'
    },
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: { sss: 27500, ss: 22500 }, term: { for_rounds: 999 } }, cri_up: { milliPercentage: { sss:  8000, ss: 7000 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: { sss: 28500, ss: 23500 }, term: { for_rounds: 999 } }, cri_up: { milliPercentage: { sss:  8200, ss: 7200 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: { sss: 29500, ss: 24500 }, term: { for_rounds: 999 } }, cri_up: { milliPercentage: { sss:  8400, ss: 7400 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: { sss: 30500, ss: 25500 }, term: { for_rounds: 999 } }, cri_up: { milliPercentage: { sss:  8600, ss: 7600 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: { sss: 31500, ss: 26500 }, term: { for_rounds: 999 } }, cri_up: { milliPercentage: { sss:  8800, ss: 7800 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: { sss: 32500, ss: 27500 }, term: { for_rounds: 999 } }, cri_up: { milliPercentage: { sss:  9000, ss: 8000 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: { sss: 33500, ss: 28500 }, term: { for_rounds: 999 } }, cri_up: { milliPercentage: { sss:  9200, ss: 8200 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: { sss: 34500, ss: 29500 }, term: { for_rounds: 999 } }, cri_up: { milliPercentage: { sss:  9400, ss: 8400 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: { sss: 35500, ss: 30500 }, term: { for_rounds: 999 } }, cri_up: { milliPercentage: { sss:  9600, ss: 8600 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: { sss: 36500, ss: 31500 }, term: { for_rounds: 999 } }, cri_up: { milliPercentage: { sss:  9800, ss: 8800 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: { sss: 37500, ss: 32500 }, term: { for_rounds: 999 } }, cri_up: { milliPercentage: { sss: 10000, ss: 9000 }, term: { for_rounds: 999 } } } }]
    ]
  },
  heavy_defender_optimization_os: {
    type: 'os',
    id: 'heavy_defender_optimization_os',
    max_rank: 'sss',
    min_rank: 'ss',
    exclusive: {
      type: 'heavy',
      role: 'defender'
    },
    status_effects: [
      { hp_up: { value: { sss: 200, ss: 180 } } },
      { hp_up: { value: { sss: 240, ss: 216 } } },
      { hp_up: { value: { sss: 280, ss: 252 } } },
      { hp_up: { value: { sss: 320, ss: 288 } } },
      { hp_up: { value: { sss: 360, ss: 324 } } },
      { hp_up: { value: { sss: 400, ss: 360 } } },
      { hp_up: { value: { sss: 440, ss: 396 } } },
      { hp_up: { value: { sss: 480, ss: 432 } } },
      { hp_up: { value: { sss: 520, ss: 468 } } },
      { hp_up: { value: { sss: 560, ss: 504 } } },
      { hp_up: { value: { sss: 600, ss: 540 } } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { def_up: { milliPercentage: { sss: 30000, ss: 25000 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { def_up: { milliPercentage: { sss: 31000, ss: 26000 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { def_up: { milliPercentage: { sss: 32000, ss: 27000 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { def_up: { milliPercentage: { sss: 33000, ss: 28000 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { def_up: { milliPercentage: { sss: 34000, ss: 29000 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { def_up: { milliPercentage: { sss: 35000, ss: 30000 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { def_up: { milliPercentage: { sss: 36000, ss: 31000 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { def_up: { milliPercentage: { sss: 37000, ss: 32000 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { def_up: { milliPercentage: { sss: 38000, ss: 33000 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { def_up: { milliPercentage: { sss: 39000, ss: 34000 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { def_up: { milliPercentage: { sss: 40000, ss: 35000 }, term: { for_rounds: 999 } } } }]
    ]
  },
  heavy_supporter_optimization_os: {
    type: 'os',
    id: 'heavy_supporter_optimization_os',
    max_rank: 'sss',
    min_rank: 'ss',
    exclusive: {
      type: 'heavy',
      role: 'supporter'
    },
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { ap_up: { microValue: { sss: 1500000, ss: 1250000 }, term: 'immediate' }, spd_up: { milliPercentage: { sss: 10000, ss:  7500 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { ap_up: { microValue: { sss: 1550000, ss: 1300000 }, term: 'immediate' }, spd_up: { milliPercentage: { sss: 10500, ss:  8000 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { ap_up: { microValue: { sss: 1600000, ss: 1350000 }, term: 'immediate' }, spd_up: { milliPercentage: { sss: 11000, ss:  8500 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { ap_up: { microValue: { sss: 1650000, ss: 1400000 }, term: 'immediate' }, spd_up: { milliPercentage: { sss: 11500, ss:  9000 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { ap_up: { microValue: { sss: 1700000, ss: 1450000 }, term: 'immediate' }, spd_up: { milliPercentage: { sss: 12000, ss:  9500 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { ap_up: { microValue: { sss: 1750000, ss: 1500000 }, term: 'immediate' }, spd_up: { milliPercentage: { sss: 12500, ss: 10000 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { ap_up: { microValue: { sss: 1800000, ss: 1550000 }, term: 'immediate' }, spd_up: { milliPercentage: { sss: 13000, ss: 10500 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { ap_up: { microValue: { sss: 1850000, ss: 1600000 }, term: 'immediate' }, spd_up: { milliPercentage: { sss: 13500, ss: 11000 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { ap_up: { microValue: { sss: 1900000, ss: 1650000 }, term: 'immediate' }, spd_up: { milliPercentage: { sss: 14000, ss: 11500 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { ap_up: { microValue: { sss: 1950000, ss: 1700000 }, term: 'immediate' }, spd_up: { milliPercentage: { sss: 14500, ss: 12000 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { ap_up: { microValue: { sss: 2000000, ss: 1750000 }, term: 'immediate' }, spd_up: { milliPercentage: { sss: 15000, ss: 12500 }, term: { for_rounds: 999 } } } }]
    ]
  },
  flying_attacker_optimization_os: {
    type: 'os',
    id: 'flying_attacker_optimization_os',
    max_rank: 'sss',
    min_rank: 'ss',
    exclusive: {
      type: 'flying',
      role: 'attacker'
    },
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: { sss: 25000, ss: 20000 }, term: { for_rounds: 999 } }, spd_up: { milliPercentage: { sss: 3000, ss: 2000 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: { sss: 26000, ss: 21000 }, term: { for_rounds: 999 } }, spd_up: { milliPercentage: { sss: 3200, ss: 2200 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: { sss: 27000, ss: 22000 }, term: { for_rounds: 999 } }, spd_up: { milliPercentage: { sss: 3400, ss: 2400 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: { sss: 28000, ss: 23000 }, term: { for_rounds: 999 } }, spd_up: { milliPercentage: { sss: 3600, ss: 2600 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: { sss: 29000, ss: 24000 }, term: { for_rounds: 999 } }, spd_up: { milliPercentage: { sss: 3800, ss: 2800 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: { sss: 30000, ss: 25000 }, term: { for_rounds: 999 } }, spd_up: { milliPercentage: { sss: 4000, ss: 3000 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: { sss: 31000, ss: 26000 }, term: { for_rounds: 999 } }, spd_up: { milliPercentage: { sss: 4200, ss: 3200 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: { sss: 32000, ss: 27000 }, term: { for_rounds: 999 } }, spd_up: { milliPercentage: { sss: 4400, ss: 3400 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: { sss: 33000, ss: 28000 }, term: { for_rounds: 999 } }, spd_up: { milliPercentage: { sss: 4600, ss: 3600 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: { sss: 34000, ss: 29000 }, term: { for_rounds: 999 } }, spd_up: { milliPercentage: { sss: 4800, ss: 3800 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: { sss: 35000, ss: 30000 }, term: { for_rounds: 999 } }, spd_up: { milliPercentage: { sss: 5000, ss: 4000 }, term: { for_rounds: 999 } } } }]
    ]
  },
  flying_defender_optimization_os: {
    type: 'os',
    id: 'flying_defender_optimization_os',
    max_rank: 'sss',
    min_rank: 'ss',
    exclusive: {
      type: 'flying',
      role: 'defender'
    },
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { eva_up: { milliPercentage: { sss: 30000, ss: 25000 }, term: { for_rounds: 999 } }, spd_up: { milliPercentage: { sss:  8000, ss: 7000 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { eva_up: { milliPercentage: { sss: 31000, ss: 26000 }, term: { for_rounds: 999 } }, spd_up: { milliPercentage: { sss:  8200, ss: 7200 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { eva_up: { milliPercentage: { sss: 32000, ss: 27000 }, term: { for_rounds: 999 } }, spd_up: { milliPercentage: { sss:  8400, ss: 7400 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { eva_up: { milliPercentage: { sss: 33000, ss: 28000 }, term: { for_rounds: 999 } }, spd_up: { milliPercentage: { sss:  8600, ss: 7600 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { eva_up: { milliPercentage: { sss: 34000, ss: 29000 }, term: { for_rounds: 999 } }, spd_up: { milliPercentage: { sss:  8800, ss: 7800 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { eva_up: { milliPercentage: { sss: 35000, ss: 30000 }, term: { for_rounds: 999 } }, spd_up: { milliPercentage: { sss:  9000, ss: 8000 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { eva_up: { milliPercentage: { sss: 36000, ss: 31000 }, term: { for_rounds: 999 } }, spd_up: { milliPercentage: { sss:  9200, ss: 8200 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { eva_up: { milliPercentage: { sss: 37000, ss: 32000 }, term: { for_rounds: 999 } }, spd_up: { milliPercentage: { sss:  9400, ss: 8400 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { eva_up: { milliPercentage: { sss: 38000, ss: 33000 }, term: { for_rounds: 999 } }, spd_up: { milliPercentage: { sss:  9600, ss: 8600 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { eva_up: { milliPercentage: { sss: 39000, ss: 34000 }, term: { for_rounds: 999 } }, spd_up: { milliPercentage: { sss:  9800, ss: 8800 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { eva_up: { milliPercentage: { sss: 40000, ss: 35000 }, term: { for_rounds: 999 } }, spd_up: { milliPercentage: { sss: 10000, ss: 9000 }, term: { for_rounds: 999 } } } }]
    ]
  },
  flying_supporter_optimization_os: {
    type: 'os',
    id: 'flying_supporter_optimization_os',
    max_rank: 'sss',
    min_rank: 'ss',
    exclusive: {
      type: 'flying',
      role: 'supporter'
    },
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { acc_up: { milliPercentage: { sss: 50000, ss: 40000 }, term: { for_rounds: 999 } }, spd_up: { milliPercentage: { sss: 15000, ss: 12500 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { acc_up: { milliPercentage: { sss: 52000, ss: 42000 }, term: { for_rounds: 999 } }, spd_up: { milliPercentage: { sss: 15500, ss: 13000 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { acc_up: { milliPercentage: { sss: 54000, ss: 44000 }, term: { for_rounds: 999 } }, spd_up: { milliPercentage: { sss: 16000, ss: 13500 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { acc_up: { milliPercentage: { sss: 56000, ss: 46000 }, term: { for_rounds: 999 } }, spd_up: { milliPercentage: { sss: 16500, ss: 14000 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { acc_up: { milliPercentage: { sss: 58000, ss: 48000 }, term: { for_rounds: 999 } }, spd_up: { milliPercentage: { sss: 17000, ss: 14500 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { acc_up: { milliPercentage: { sss: 60000, ss: 50000 }, term: { for_rounds: 999 } }, spd_up: { milliPercentage: { sss: 17500, ss: 15000 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { acc_up: { milliPercentage: { sss: 62000, ss: 52000 }, term: { for_rounds: 999 } }, spd_up: { milliPercentage: { sss: 18000, ss: 15500 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { acc_up: { milliPercentage: { sss: 64000, ss: 54000 }, term: { for_rounds: 999 } }, spd_up: { milliPercentage: { sss: 18500, ss: 16000 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { acc_up: { milliPercentage: { sss: 66000, ss: 56000 }, term: { for_rounds: 999 } }, spd_up: { milliPercentage: { sss: 19000, ss: 16500 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { acc_up: { milliPercentage: { sss: 68000, ss: 58000 }, term: { for_rounds: 999 } }, spd_up: { milliPercentage: { sss: 19500, ss: 17000 }, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { acc_up: { milliPercentage: { sss: 70000, ss: 60000 }, term: { for_rounds: 999 } }, spd_up: { milliPercentage: { sss: 20000, ss: 17500 }, term: { for_rounds: 999 } } } }]
    ]
  },
  hq1_commander_os: {
    type: 'os',
    id: 'hq1_commander_os',
    exclusive: {
      unit: 201
    },
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { eva_up: { milliPercentage: 15000, term: 'infinite' }, damage_reduction_up: { milliPercentage: 10000, term: 'infinite' }, silenced: { term: 'infinite', times: 1 } } }, { condition: { trigger: 'be_attacked' }, details: { ap_up: { microValue: 1000000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { eva_up: { milliPercentage: 17500, term: 'infinite' }, damage_reduction_up: { milliPercentage: 10500, term: 'infinite' }, silenced: { term: 'infinite', times: 1 } } }, { condition: { trigger: 'be_attacked' }, details: { ap_up: { microValue: 1000000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { eva_up: { milliPercentage: 20000, term: 'infinite' }, damage_reduction_up: { milliPercentage: 11000, term: 'infinite' }, silenced: { term: 'infinite', times: 1 } } }, { condition: { trigger: 'be_attacked' }, details: { ap_up: { microValue: 1000000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { eva_up: { milliPercentage: 22500, term: 'infinite' }, damage_reduction_up: { milliPercentage: 11500, term: 'infinite' }, silenced: { term: 'infinite', times: 1 } } }, { condition: { trigger: 'be_attacked' }, details: { ap_up: { microValue: 1000000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { eva_up: { milliPercentage: 25000, term: 'infinite' }, damage_reduction_up: { milliPercentage: 12000, term: 'infinite' }, silenced: { term: 'infinite', times: 1 } } }, { condition: { trigger: 'be_attacked' }, details: { ap_up: { microValue: 1000000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { eva_up: { milliPercentage: 27500, term: 'infinite' }, damage_reduction_up: { milliPercentage: 12500, term: 'infinite' }, silenced: { term: 'infinite', times: 1 } } }, { condition: { trigger: 'be_attacked' }, details: { ap_up: { microValue: 1000000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { eva_up: { milliPercentage: 30000, term: 'infinite' }, damage_reduction_up: { milliPercentage: 13000, term: 'infinite' }, silenced: { term: 'infinite', times: 1 } } }, { condition: { trigger: 'be_attacked' }, details: { ap_up: { microValue: 1000000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { eva_up: { milliPercentage: 32500, term: 'infinite' }, damage_reduction_up: { milliPercentage: 13500, term: 'infinite' }, silenced: { term: 'infinite', times: 1 } } }, { condition: { trigger: 'be_attacked' }, details: { ap_up: { microValue: 1000000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { eva_up: { milliPercentage: 35000, term: 'infinite' }, damage_reduction_up: { milliPercentage: 14000, term: 'infinite' }, silenced: { term: 'infinite', times: 1 } } }, { condition: { trigger: 'be_attacked' }, details: { ap_up: { microValue: 1000000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { eva_up: { milliPercentage: 37500, term: 'infinite' }, damage_reduction_up: { milliPercentage: 14500, term: 'infinite' }, silenced: { term: 'infinite', times: 1 } } }, { condition: { trigger: 'be_attacked' }, details: { ap_up: { microValue: 1000000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { eva_up: { milliPercentage: 40000, term: 'infinite' }, damage_reduction_up: { milliPercentage: 15000, term: 'infinite' }, silenced: { term: 'infinite', times: 1 } } }, { condition: { trigger: 'be_attacked' }, details: { ap_up: { microValue: 1000000, term: 'immediate' } } }]
    ]
  },
  laplacian_globe_os: {
    type: 'os',
    id: 'laplacian_globe_os',
    exclusive: {
      unit: 129
    },
    status_effects: [
      { cri_up: { milliPercentage: 10000 }, spd_up: { microValue: 100000 } },
      { cri_up: { milliPercentage: 11000 }, spd_up: { microValue: 110000 } },
      { cri_up: { milliPercentage: 12000 }, spd_up: { microValue: 120000 } },
      { cri_up: { milliPercentage: 13000 }, spd_up: { microValue: 130000 } },
      { cri_up: { milliPercentage: 14000 }, spd_up: { microValue: 140000 } },
      { cri_up: { milliPercentage: 15000 }, spd_up: { microValue: 150000 } },
      { cri_up: { milliPercentage: 16000 }, spd_up: { microValue: 160000 } },
      { cri_up: { milliPercentage: 17000 }, spd_up: { microValue: 170000 } },
      { cri_up: { milliPercentage: 18000 }, spd_up: { microValue: 180000 } },
      { cri_up: { milliPercentage: 19000 }, spd_up: { microValue: 190000 } },
      { cri_up: { milliPercentage: 20000 }, spd_up: { microValue: 200000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_round' }, details: { light_type_damage_up: { milliPercentage:  5000, term: { for_rounds: 1 } }, flying_type_damage_up: { milliPercentage:  5000, term: { for_rounds: 1 } }, heavy_type_damage_up: { milliPercentage:  5000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { light_type_damage_up: { milliPercentage:  5500, term: { for_rounds: 1 } }, flying_type_damage_up: { milliPercentage:  5500, term: { for_rounds: 1 } }, heavy_type_damage_up: { milliPercentage:  5500, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { light_type_damage_up: { milliPercentage:  6000, term: { for_rounds: 1 } }, flying_type_damage_up: { milliPercentage:  6000, term: { for_rounds: 1 } }, heavy_type_damage_up: { milliPercentage:  6000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { light_type_damage_up: { milliPercentage:  6500, term: { for_rounds: 1 } }, flying_type_damage_up: { milliPercentage:  6500, term: { for_rounds: 1 } }, heavy_type_damage_up: { milliPercentage:  6500, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { light_type_damage_up: { milliPercentage:  7000, term: { for_rounds: 1 } }, flying_type_damage_up: { milliPercentage:  7000, term: { for_rounds: 1 } }, heavy_type_damage_up: { milliPercentage:  7000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { light_type_damage_up: { milliPercentage:  7500, term: { for_rounds: 1 } }, flying_type_damage_up: { milliPercentage:  7500, term: { for_rounds: 1 } }, heavy_type_damage_up: { milliPercentage:  7500, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { light_type_damage_up: { milliPercentage:  8000, term: { for_rounds: 1 } }, flying_type_damage_up: { milliPercentage:  8000, term: { for_rounds: 1 } }, heavy_type_damage_up: { milliPercentage:  8000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { light_type_damage_up: { milliPercentage:  8500, term: { for_rounds: 1 } }, flying_type_damage_up: { milliPercentage:  8500, term: { for_rounds: 1 } }, heavy_type_damage_up: { milliPercentage:  8500, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { light_type_damage_up: { milliPercentage:  9000, term: { for_rounds: 1 } }, flying_type_damage_up: { milliPercentage:  9000, term: { for_rounds: 1 } }, heavy_type_damage_up: { milliPercentage:  9000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { light_type_damage_up: { milliPercentage:  9500, term: { for_rounds: 1 } }, flying_type_damage_up: { milliPercentage:  9500, term: { for_rounds: 1 } }, heavy_type_damage_up: { milliPercentage:  9500, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { light_type_damage_up: { milliPercentage: 10000, term: { for_rounds: 1 } }, flying_type_damage_up: { milliPercentage: 10000, term: { for_rounds: 1 } }, heavy_type_damage_up: { milliPercentage: 10000, term: { for_rounds: 1 } } } }]
    ]
  },
  lrad_enhancement_os: {
    type: 'os',
    id: 'lrad_enhancement_os',
    exclusive: {
      unit: 141
    },
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { light_type_damage_up: { milliPercentage: 14500, term: 'infinite' }, flying_type_damage_up: { milliPercentage: 14500, term: 'infinite' }, heavy_type_damage_up: { milliPercentage: 14500, term: 'infinite' }, range_up: { value: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { light_type_damage_up: { milliPercentage: 15000, term: 'infinite' }, flying_type_damage_up: { milliPercentage: 15000, term: 'infinite' }, heavy_type_damage_up: { milliPercentage: 15000, term: 'infinite' }, range_up: { value: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { light_type_damage_up: { milliPercentage: 15500, term: 'infinite' }, flying_type_damage_up: { milliPercentage: 15500, term: 'infinite' }, heavy_type_damage_up: { milliPercentage: 15500, term: 'infinite' }, range_up: { value: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { light_type_damage_up: { milliPercentage: 16000, term: 'infinite' }, flying_type_damage_up: { milliPercentage: 16000, term: 'infinite' }, heavy_type_damage_up: { milliPercentage: 16000, term: 'infinite' }, range_up: { value: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { light_type_damage_up: { milliPercentage: 16500, term: 'infinite' }, flying_type_damage_up: { milliPercentage: 16500, term: 'infinite' }, heavy_type_damage_up: { milliPercentage: 16500, term: 'infinite' }, range_up: { value: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { light_type_damage_up: { milliPercentage: 17000, term: 'infinite' }, flying_type_damage_up: { milliPercentage: 17000, term: 'infinite' }, heavy_type_damage_up: { milliPercentage: 17000, term: 'infinite' }, range_up: { value: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { light_type_damage_up: { milliPercentage: 17500, term: 'infinite' }, flying_type_damage_up: { milliPercentage: 17500, term: 'infinite' }, heavy_type_damage_up: { milliPercentage: 17500, term: 'infinite' }, range_up: { value: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { light_type_damage_up: { milliPercentage: 18000, term: 'infinite' }, flying_type_damage_up: { milliPercentage: 18000, term: 'infinite' }, heavy_type_damage_up: { milliPercentage: 18000, term: 'infinite' }, range_up: { value: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { light_type_damage_up: { milliPercentage: 18500, term: 'infinite' }, flying_type_damage_up: { milliPercentage: 18500, term: 'infinite' }, heavy_type_damage_up: { milliPercentage: 18500, term: 'infinite' }, range_up: { value: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { light_type_damage_up: { milliPercentage: 19000, term: 'infinite' }, flying_type_damage_up: { milliPercentage: 19000, term: 'infinite' }, heavy_type_damage_up: { milliPercentage: 19000, term: 'infinite' }, range_up: { value: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { light_type_damage_up: { milliPercentage: 20000, term: 'infinite' }, flying_type_damage_up: { milliPercentage: 20000, term: 'infinite' }, heavy_type_damage_up: { milliPercentage: 20000, term: 'infinite' }, range_up: { value: 1, term: 'infinite' } } }]
    ]
  },
  runaway_inducement_os: {
    type: 'os',
    id: 'runaway_inducement_os',
    exclusive: {
      unit: 224
    },
    status_effects: [
      { atk_up: { milliValue:  75000 }, acc_up: { milliPercentage: 25000 } },
      { atk_up: { milliValue:  82500 }, acc_up: { milliPercentage: 27500 } },
      { atk_up: { milliValue:  90000 }, acc_up: { milliPercentage: 30000 } },
      { atk_up: { milliValue:  97500 }, acc_up: { milliPercentage: 32500 } },
      { atk_up: { milliValue: 105000 }, acc_up: { milliPercentage: 35000 } },
      { atk_up: { milliValue: 112500 }, acc_up: { milliPercentage: 37500 } },
      { atk_up: { milliValue: 120000 }, acc_up: { milliPercentage: 40000 } },
      { atk_up: { milliValue: 127500 }, acc_up: { milliPercentage: 42500 } },
      { atk_up: { milliValue: 135000 }, acc_up: { milliPercentage: 45000 } },
      { atk_up: { milliValue: 142500 }, acc_up: { milliPercentage: 47500 } },
      { atk_up: { milliValue: 150000 }, acc_up: { milliPercentage: 50000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'enemy_killed' }, details: { atk_up: { milliPercentage: 2000, term: { for_rounds: 2 } } } }],
      [{ condition: { trigger: 'enemy_killed' }, details: { atk_up: { milliPercentage: 2300, term: { for_rounds: 2 } } } }],
      [{ condition: { trigger: 'enemy_killed' }, details: { atk_up: { milliPercentage: 2600, term: { for_rounds: 2 } } } }],
      [{ condition: { trigger: 'enemy_killed' }, details: { atk_up: { milliPercentage: 2900, term: { for_rounds: 2 } } } }],
      [{ condition: { trigger: 'enemy_killed' }, details: { atk_up: { milliPercentage: 3200, term: { for_rounds: 2 } } } }],
      [{ condition: { trigger: 'enemy_killed' }, details: { atk_up: { milliPercentage: 3500, term: { for_rounds: 2 } } } }],
      [{ condition: { trigger: 'enemy_killed' }, details: { atk_up: { milliPercentage: 3800, term: { for_rounds: 2 } } } }],
      [{ condition: { trigger: 'enemy_killed' }, details: { atk_up: { milliPercentage: 4100, term: { for_rounds: 2 } } } }],
      [{ condition: { trigger: 'enemy_killed' }, details: { atk_up: { milliPercentage: 4400, term: { for_rounds: 2 } } } }],
      [{ condition: { trigger: 'enemy_killed' }, details: { atk_up: { milliPercentage: 4700, term: { for_rounds: 2 } } } }],
      [{ condition: { trigger: 'enemy_killed' }, details: { atk_up: { milliPercentage: 5000, term: { for_rounds: 2 } } } }]
    ]
  },
  watchers_eye_type_d_os: {
    type: 'os',
    id: 'watchers_eye_type_d_os',
    exclusive: {
      unit: 21
    },
    status_effects: [
      { hp_up: { value: 125   } },
      { hp_up: { value: 137.5 } },
      { hp_up: { value: 150   } },
      { hp_up: { value: 162.5 } },
      { hp_up: { value: 175   } },
      { hp_up: { value: 187.5 } },
      { hp_up: { value: 200   } },
      { hp_up: { value: 212.5 } },
      { hp_up: { value: 225   } },
      { hp_up: { value: 237.5 } },
      { hp_up: { value: 250   } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: 15000, term: 'infinite' }, status_resist_up: { milliPercentage: 20000, term: 'infinite' }, counterattack: { milliPercentage:  50000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: 16000, term: 'infinite' }, status_resist_up: { milliPercentage: 21500, term: 'infinite' }, counterattack: { milliPercentage:  55000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: 17000, term: 'infinite' }, status_resist_up: { milliPercentage: 23000, term: 'infinite' }, counterattack: { milliPercentage:  60000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: 18000, term: 'infinite' }, status_resist_up: { milliPercentage: 24500, term: 'infinite' }, counterattack: { milliPercentage:  65000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: 19000, term: 'infinite' }, status_resist_up: { milliPercentage: 26000, term: 'infinite' }, counterattack: { milliPercentage:  70000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: 20000, term: 'infinite' }, status_resist_up: { milliPercentage: 27500, term: 'infinite' }, counterattack: { milliPercentage:  75000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: 22000, term: 'infinite' }, status_resist_up: { milliPercentage: 29000, term: 'infinite' }, counterattack: { milliPercentage:  80000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: 24000, term: 'infinite' }, status_resist_up: { milliPercentage: 30500, term: 'infinite' }, counterattack: { milliPercentage:  85000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: 26000, term: 'infinite' }, status_resist_up: { milliPercentage: 32000, term: 'infinite' }, counterattack: { milliPercentage:  90000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: 28000, term: 'infinite' }, status_resist_up: { milliPercentage: 33500, term: 'infinite' }, counterattack: { milliPercentage:  95000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: 30000, term: 'infinite' }, status_resist_up: { milliPercentage: 35000, term: 'infinite' }, counterattack: { milliPercentage: 100000, term: 'infinite' } } }]
    ]
  },
  armor_penetrating_round: {
    type: 'gear',
    id: 'armor_penetrating_round',
    max_rank: 'ss',
    status_effects: [
      { cri_up: { milliPercentage: { ss:  5000, s:  4000, a: 3000, b: 2000 } } },
      { cri_up: { milliPercentage: { ss:  6000, s:  4800, a: 3600, b: 2400 } } },
      { cri_up: { milliPercentage: { ss:  7000, s:  5600, a: 4200, b: 2800 } } },
      { cri_up: { milliPercentage: { ss:  8000, s:  6400, a: 4800, b: 3200 } } },
      { cri_up: { milliPercentage: { ss:  9000, s:  7200, a: 5400, b: 3600 } } },
      { cri_up: { milliPercentage: { ss: 10000, s:  8000, a: 6000, b: 4000 } } },
      { cri_up: { milliPercentage: { ss: 11000, s:  8800, a: 6600, b: 4400 } } },
      { cri_up: { milliPercentage: { ss: 12000, s:  9600, a: 7200, b: 4800 } } },
      { cri_up: { milliPercentage: { ss: 13000, s: 10400, a: 7800, b: 5200 } } },
      { cri_up: { milliPercentage: { ss: 14000, s: 11200, a: 8400, b: 5600 } } },
      { cri_up: { milliPercentage: { ss: 15000, s: 12000, a: 9000, b: 6000 } } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: { ss: 23500, s: 17500, a: 13000, b: 10000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: { ss: 25000, s: 19000, a: 14500, b: 11500 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: { ss: 26500, s: 20500, a: 16000, b: 13000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: { ss: 28000, s: 22000, a: 17500, b: 14500 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: { ss: 29500, s: 23500, a: 19000, b: 16000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: { ss: 31000, s: 25000, a: 20500, b: 17500 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: { ss: 32500, s: 26500, a: 22000, b: 19000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: { ss: 34000, s: 28000, a: 23500, b: 20500 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: { ss: 36000, s: 29500, a: 25000, b: 22000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: { ss: 38000, s: 31000, a: 26500, b: 23500 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: { ss: 40000, s: 32500, a: 28000, b: 25000 }, term: 'infinite' } } }]
    ]
  },
  tactical_bombing_equipment: {
    type: 'gear',
    id: 'tactical_bombing_equipment',
    exclusive: {
      type: 'flying'
    },
    status_effects: [
      { cri_up: { milliPercentage:  5000 }, eva_down: { milliPercentage: 75000 } },
      { cri_up: { milliPercentage:  6000 }, eva_down: { milliPercentage: 75000 } },
      { cri_up: { milliPercentage:  7000 }, eva_down: { milliPercentage: 75000 } },
      { cri_up: { milliPercentage:  8000 }, eva_down: { milliPercentage: 75000 } },
      { cri_up: { milliPercentage:  9000 }, eva_down: { milliPercentage: 75000 } },
      { cri_up: { milliPercentage: 10000 }, eva_down: { milliPercentage: 75000 } },
      { cri_up: { milliPercentage: 11000 }, eva_down: { milliPercentage: 75000 } },
      { cri_up: { milliPercentage: 12000 }, eva_down: { milliPercentage: 75000 } },
      { cri_up: { milliPercentage: 13000 }, eva_down: { milliPercentage: 75000 } },
      { cri_up: { milliPercentage: 14000 }, eva_down: { milliPercentage: 75000 } },
      { cri_up: { milliPercentage: 15000 }, eva_down: { milliPercentage: 75000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage:  5000, term: 'infinite' }, defense_penetration: { milliPercentage: 15000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage:  6000, term: 'infinite' }, defense_penetration: { milliPercentage: 18000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage:  7000, term: 'infinite' }, defense_penetration: { milliPercentage: 21000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage:  8000, term: 'infinite' }, defense_penetration: { milliPercentage: 24000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage:  9000, term: 'infinite' }, defense_penetration: { milliPercentage: 27000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: 10000, term: 'infinite' }, defense_penetration: { milliPercentage: 30000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: 11000, term: 'infinite' }, defense_penetration: { milliPercentage: 33000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: 12000, term: 'infinite' }, defense_penetration: { milliPercentage: 36000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: 13000, term: 'infinite' }, defense_penetration: { milliPercentage: 39000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: 14000, term: 'infinite' }, defense_penetration: { milliPercentage: 42000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: 15000, term: 'infinite' }, defense_penetration: { milliPercentage: 45000, term: 'infinite' } } }]
    ]
  },
  heavy_sight: {
    type: 'gear',
    id: 'heavy_sight',
    max_rank: 'ss',
    exclusive: {
      type: 'heavy',
      role: 'attacker'
    },
    status_effects: [
      { acc_up: { milliPercentage: { ss: 20000, s: 16000, a: 12000, b:  8000 } }, cri_up: { milliPercentage: { ss:  5000, s:  4000, a: 3000, b: 2000 } } },
      { acc_up: { milliPercentage: { ss: 22000, s: 17600, a: 13200, b:  8800 } }, cri_up: { milliPercentage: { ss:  6000, s:  4800, a: 3600, b: 2400 } } },
      { acc_up: { milliPercentage: { ss: 24000, s: 19200, a: 14400, b:  9600 } }, cri_up: { milliPercentage: { ss:  7000, s:  5600, a: 4200, b: 2800 } } },
      { acc_up: { milliPercentage: { ss: 26000, s: 20800, a: 15600, b: 10400 } }, cri_up: { milliPercentage: { ss:  8000, s:  6400, a: 4800, b: 3200 } } },
      { acc_up: { milliPercentage: { ss: 28000, s: 22400, a: 16800, b: 11200 } }, cri_up: { milliPercentage: { ss:  9000, s:  7200, a: 5400, b: 3600 } } },
      { acc_up: { milliPercentage: { ss: 30000, s: 24000, a: 18000, b: 12000 } }, cri_up: { milliPercentage: { ss: 10000, s:  8000, a: 6000, b: 4000 } } },
      { acc_up: { milliPercentage: { ss: 32000, s: 25600, a: 19200, b: 12800 } }, cri_up: { milliPercentage: { ss: 11000, s:  8800, a: 6600, b: 4400 } } },
      { acc_up: { milliPercentage: { ss: 34000, s: 27200, a: 20400, b: 13600 } }, cri_up: { milliPercentage: { ss: 12000, s:  9600, a: 7200, b: 4800 } } },
      { acc_up: { milliPercentage: { ss: 36000, s: 28800, a: 21600, b: 14400 } }, cri_up: { milliPercentage: { ss: 13000, s: 10400, a: 7800, b: 5200 } } },
      { acc_up: { milliPercentage: { ss: 38000, s: 30400, a: 22800, b: 15200 } }, cri_up: { milliPercentage: { ss: 14000, s: 11200, a: 8400, b: 5600 } } },
      { acc_up: { milliPercentage: { ss: 40000, s: 32000, a: 24000, b: 16000 } }, cri_up: { milliPercentage: { ss: 15000, s: 12000, a: 9000, b: 6000 } } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'attack' }, details: { ignore_barrier_dr: { rate: { milliPercentage: { ss:  57000, s: 42000, a: 36000, b: 30000 } }, term: 'immediate' } } }],
      [{ condition: { trigger: 'attack' }, details: { ignore_barrier_dr: { rate: { milliPercentage: { ss:  60000, s: 45000, a: 39000, b: 33000 } }, term: 'immediate' } } }],
      [{ condition: { trigger: 'attack' }, details: { ignore_barrier_dr: { rate: { milliPercentage: { ss:  63000, s: 48000, a: 42000, b: 36000 } }, term: 'immediate' } } }],
      [{ condition: { trigger: 'attack' }, details: { ignore_barrier_dr: { rate: { milliPercentage: { ss:  67000, s: 51000, a: 45000, b: 39000 } }, term: 'immediate' } } }],
      [{ condition: { trigger: 'attack' }, details: { ignore_barrier_dr: { rate: { milliPercentage: { ss:  71000, s: 54000, a: 48000, b: 42000 } }, term: 'immediate' } } }],
      [{ condition: { trigger: 'attack' }, details: { ignore_barrier_dr: { rate: { milliPercentage: { ss:  75000, s: 57000, a: 51000, b: 45000 } }, term: 'immediate' } } }],
      [{ condition: { trigger: 'attack' }, details: { ignore_barrier_dr: { rate: { milliPercentage: { ss:  80000, s: 60000, a: 54000, b: 48000 } }, term: 'immediate' } } }],
      [{ condition: { trigger: 'attack' }, details: { ignore_barrier_dr: { rate: { milliPercentage: { ss:  85000, s: 63000, a: 57000, b: 51000 } }, term: 'immediate' } } }],
      [{ condition: { trigger: 'attack' }, details: { ignore_barrier_dr: { rate: { milliPercentage: { ss:  90000, s: 67000, a: 60000, b: 54000 } }, term: 'immediate' } } }],
      [{ condition: { trigger: 'attack' }, details: { ignore_barrier_dr: { rate: { milliPercentage: { ss:  95000, s: 71000, a: 63000, b: 57000 } }, term: 'immediate' } } }],
      [{ condition: { trigger: 'attack' }, details: { ignore_barrier_dr: { rate: { milliPercentage: { ss: 100000, s: 75000, a: 67000, b: 60000 } }, term: 'immediate' } } }]
    ]
  },
  ultra_precise_scope: {
    type: 'gear',
    id: 'ultra_precise_scope',
    max_rank: 'ss',
    status_effects: [
      { cri_up: { milliPercentage: { ss: 10000, s:  8000, a:  6000, b: 4000 } }, acc_up: { milliPercentage: { ss: 25000, s: 16000, a: 12000, b:  8000 } } },
      { cri_up: { milliPercentage: { ss: 11000, s:  8800, a:  6600, b: 4400 } }, acc_up: { milliPercentage: { ss: 27500, s: 17600, a: 13200, b:  8800 } } },
      { cri_up: { milliPercentage: { ss: 12000, s:  9600, a:  7200, b: 4800 } }, acc_up: { milliPercentage: { ss: 30000, s: 19200, a: 14400, b:  9600 } } },
      { cri_up: { milliPercentage: { ss: 13000, s: 10400, a:  7800, b: 5200 } }, acc_up: { milliPercentage: { ss: 32500, s: 20800, a: 15600, b: 10400 } } },
      { cri_up: { milliPercentage: { ss: 14000, s: 11200, a:  8400, b: 5600 } }, acc_up: { milliPercentage: { ss: 35000, s: 22400, a: 16800, b: 11200 } } },
      { cri_up: { milliPercentage: { ss: 15000, s: 12000, a:  9000, b: 6000 } }, acc_up: { milliPercentage: { ss: 37500, s: 24000, a: 18000, b: 12000 } } },
      { cri_up: { milliPercentage: { ss: 16000, s: 12800, a:  9600, b: 6400 } }, acc_up: { milliPercentage: { ss: 40000, s: 25600, a: 19200, b: 12800 } } },
      { cri_up: { milliPercentage: { ss: 17000, s: 13600, a: 10200, b: 6800 } }, acc_up: { milliPercentage: { ss: 42500, s: 27200, a: 20400, b: 13600 } } },
      { cri_up: { milliPercentage: { ss: 18000, s: 14400, a: 10800, b: 7200 } }, acc_up: { milliPercentage: { ss: 45000, s: 28800, a: 21600, b: 14400 } } },
      { cri_up: { milliPercentage: { ss: 19000, s: 15200, a: 11400, b: 7600 } }, acc_up: { milliPercentage: { ss: 47500, s: 30400, a: 22800, b: 15200 } } },
      { cri_up: { milliPercentage: { ss: 20000, s: 16000, a: 12000, b: 8000 } }, acc_up: { milliPercentage: { ss: 50000, s: 32000, a: 24000, b: 16000 } } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_round' }, details: { debuff_removal: { effect: 'acc_down', rate: { milliPercentage: { ss:  62000, s: 50000, a: 41000, b: 35000 } }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { debuff_removal: { effect: 'acc_down', rate: { milliPercentage: { ss:  65000, s: 53000, a: 44000, b: 38000 } }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { debuff_removal: { effect: 'acc_down', rate: { milliPercentage: { ss:  68000, s: 56000, a: 47000, b: 41000 } }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { debuff_removal: { effect: 'acc_down', rate: { milliPercentage: { ss:  71000, s: 59000, a: 50000, b: 44000 } }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { debuff_removal: { effect: 'acc_down', rate: { milliPercentage: { ss:  74000, s: 62000, a: 53000, b: 47000 } }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { debuff_removal: { effect: 'acc_down', rate: { milliPercentage: { ss:  77000, s: 65000, a: 56000, b: 50000 } }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { debuff_removal: { effect: 'acc_down', rate: { milliPercentage: { ss:  80000, s: 68000, a: 59000, b: 53000 } }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { debuff_removal: { effect: 'acc_down', rate: { milliPercentage: { ss:  85000, s: 71000, a: 62000, b: 56000 } }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { debuff_removal: { effect: 'acc_down', rate: { milliPercentage: { ss:  90000, s: 74000, a: 65000, b: 59000 } }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { debuff_removal: { effect: 'acc_down', rate: { milliPercentage: { ss:  95000, s: 77000, a: 68000, b: 62000 } }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { debuff_removal: { effect: 'acc_down', rate: { milliPercentage: { ss: 100000, s: 80000, a: 71000, b: 65000 } }, term: 'immediate' } } }]
    ]
  },
  telescopic_sight: {
    type: 'gear',
    id: 'telescopic_sight',
    max_rank: 'ss',
    exclusive: {
      role: 'attacker'
    },
    equipment_effects: [
      [{ condition: { trigger: 'start_round', state: { grid: 'back_line' } }, details: { atk_up: { milliPercentage: { ss: 2800, s: 2200, a: 1600, b: 1000 } }, acc_up: { milliPercentage: { ss: 38500, s: 34000, a: 29500, b: 25000 } }, cri_up: { milliPercentage: { ss:  9500, s:  8000, a:  6500, b:  5000 } } } }],
      [{ condition: { trigger: 'start_round', state: { grid: 'back_line' } }, details: { atk_up: { milliPercentage: { ss: 3000, s: 2400, a: 1800, b: 1200 } }, acc_up: { milliPercentage: { ss: 40000, s: 35500, a: 31000, b: 26500 } }, cri_up: { milliPercentage: { ss: 10000, s:  8500, a:  7000, b:  5500 } } } }],
      [{ condition: { trigger: 'start_round', state: { grid: 'back_line' } }, details: { atk_up: { milliPercentage: { ss: 3200, s: 2600, a: 2000, b: 1400 } }, acc_up: { milliPercentage: { ss: 41500, s: 37000, a: 32500, b: 28000 } }, cri_up: { milliPercentage: { ss: 11000, s:  9000, a:  7500, b:  6000 } } } }],
      [{ condition: { trigger: 'start_round', state: { grid: 'back_line' } }, details: { atk_up: { milliPercentage: { ss: 3400, s: 2800, a: 2200, b: 1600 } }, acc_up: { milliPercentage: { ss: 43000, s: 38500, a: 34000, b: 29500 } }, cri_up: { milliPercentage: { ss: 12000, s:  9500, a:  8000, b:  6500 } } } }],
      [{ condition: { trigger: 'start_round', state: { grid: 'back_line' } }, details: { atk_up: { milliPercentage: { ss: 3600, s: 3000, a: 2400, b: 1800 } }, acc_up: { milliPercentage: { ss: 45000, s: 40000, a: 35500, b: 31000 } }, cri_up: { milliPercentage: { ss: 13000, s: 10000, a:  8500, b:  7000 } } } }],
      [{ condition: { trigger: 'start_round', state: { grid: 'back_line' } }, details: { atk_up: { milliPercentage: { ss: 3800, s: 3200, a: 2600, b: 2000 } }, acc_up: { milliPercentage: { ss: 47000, s: 41500, a: 37000, b: 32500 } }, cri_up: { milliPercentage: { ss: 14000, s: 11000, a:  9000, b:  7500 } } } }],
      [{ condition: { trigger: 'start_round', state: { grid: 'back_line' } }, details: { atk_up: { milliPercentage: { ss: 4000, s: 3400, a: 2800, b: 2200 } }, acc_up: { milliPercentage: { ss: 49000, s: 43000, a: 38500, b: 34000 } }, cri_up: { milliPercentage: { ss: 16000, s: 12000, a:  9500, b:  8000 } } } }],
      [{ condition: { trigger: 'start_round', state: { grid: 'back_line' } }, details: { atk_up: { milliPercentage: { ss: 4200, s: 3600, a: 3000, b: 2400 } }, acc_up: { milliPercentage: { ss: 51000, s: 45000, a: 40000, b: 35500 } }, cri_up: { milliPercentage: { ss: 18000, s: 13000, a: 10000, b:  8500 } } } }],
      [{ condition: { trigger: 'start_round', state: { grid: 'back_line' } }, details: { atk_up: { milliPercentage: { ss: 4400, s: 3800, a: 3200, b: 2600 } }, acc_up: { milliPercentage: { ss: 53000, s: 47000, a: 41500, b: 37000 } }, cri_up: { milliPercentage: { ss: 20000, s: 14000, a: 11000, b:  9000 } } } }],
      [{ condition: { trigger: 'start_round', state: { grid: 'back_line' } }, details: { atk_up: { milliPercentage: { ss: 4600, s: 4000, a: 3400, b: 2800 } }, acc_up: { milliPercentage: { ss: 55000, s: 49000, a: 43000, b: 38500 } }, cri_up: { milliPercentage: { ss: 22000, s: 16000, a: 12000, b:  9500 } } } }],
      [{ condition: { trigger: 'start_round', state: { grid: 'back_line' } }, details: { atk_up: { milliPercentage: { ss: 5000, s: 4200, a: 3600, b: 3000 } }, acc_up: { milliPercentage: { ss: 60000, s: 51000, a: 45000, b: 40000 } }, cri_up: { milliPercentage: { ss: 24000, s: 18000, a: 13000, b: 10000 } } } }]
    ]
  },
  observation_gear: {
    type: 'gear',
    id: 'observation_gear',
    max_rank: 'ss',
    exclusive: {
      role: 'attacker'
    },
    status_effects: [
      { acc_up: { milliPercentage: { ss: 30000, s: 20000, a: 15000, b: 10000 } } },
      { acc_up: { milliPercentage: { ss: 36000, s: 24000, a: 18000, b: 12000 } } },
      { acc_up: { milliPercentage: { ss: 42000, s: 28000, a: 21000, b: 14000 } } },
      { acc_up: { milliPercentage: { ss: 48000, s: 32000, a: 24000, b: 16000 } } },
      { acc_up: { milliPercentage: { ss: 54000, s: 36000, a: 27000, b: 18000 } } },
      { acc_up: { milliPercentage: { ss: 60000, s: 40000, a: 30000, b: 20000 } } },
      { acc_up: { milliPercentage: { ss: 66000, s: 44000, a: 33000, b: 22000 } } },
      { acc_up: { milliPercentage: { ss: 72000, s: 48000, a: 36000, b: 24000 } } },
      { acc_up: { milliPercentage: { ss: 78000, s: 52000, a: 39000, b: 26000 } } },
      { acc_up: { milliPercentage: { ss: 84000, s: 56000, a: 42000, b: 28000 } } },
      { acc_up: { milliPercentage: { ss: 90000, s: 60000, a: 45000, b: 30000 } } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_round' }, details: { range_up: { value: 1, term: { for_rounds: 1 } }, debuff_removal: { effect: 'range_down', term: 'immediate', rate: { milliPercentage: { ss:  50000, s: 30000, a: 15000, b:  5000 } } } } }],
      [{ condition: { trigger: 'start_round' }, details: { range_up: { value: 1, term: { for_rounds: 1 } }, debuff_removal: { effect: 'range_down', term: 'immediate', rate: { milliPercentage: { ss:  55000, s: 35000, a: 20000, b: 10000 } } } } }],
      [{ condition: { trigger: 'start_round' }, details: { range_up: { value: 1, term: { for_rounds: 1 } }, debuff_removal: { effect: 'range_down', term: 'immediate', rate: { milliPercentage: { ss:  60000, s: 40000, a: 25000, b: 15000 } } } } }],
      [{ condition: { trigger: 'start_round' }, details: { range_up: { value: 1, term: { for_rounds: 1 } }, debuff_removal: { effect: 'range_down', term: 'immediate', rate: { milliPercentage: { ss:  65000, s: 45000, a: 30000, b: 20000 } } } } }],
      [{ condition: { trigger: 'start_round' }, details: { range_up: { value: 1, term: { for_rounds: 1 } }, debuff_removal: { effect: 'range_down', term: 'immediate', rate: { milliPercentage: { ss:  70000, s: 50000, a: 35000, b: 25000 } } } } }],
      [{ condition: { trigger: 'start_round' }, details: { range_up: { value: 1, term: { for_rounds: 1 } }, debuff_removal: { effect: 'range_down', term: 'immediate', rate: { milliPercentage: { ss:  75000, s: 55000, a: 40000, b: 30000 } } } } }],
      [{ condition: { trigger: 'start_round' }, details: { range_up: { value: 1, term: { for_rounds: 1 } }, debuff_removal: { effect: 'range_down', term: 'immediate', rate: { milliPercentage: { ss:  80000, s: 60000, a: 45000, b: 35000 } } } } }],
      [{ condition: { trigger: 'start_round' }, details: { range_up: { value: 1, term: { for_rounds: 1 } }, debuff_removal: { effect: 'range_down', term: 'immediate', rate: { milliPercentage: { ss:  85000, s: 65000, a: 50000, b: 40000 } } } } }],
      [{ condition: { trigger: 'start_round' }, details: { range_up: { value: 1, term: { for_rounds: 1 } }, debuff_removal: { effect: 'range_down', term: 'immediate', rate: { milliPercentage: { ss:  90000, s: 70000, a: 55000, b: 45000 } } } } }],
      [{ condition: { trigger: 'start_round' }, details: { range_up: { value: 1, term: { for_rounds: 1 } }, debuff_removal: { effect: 'range_down', term: 'immediate', rate: { milliPercentage: { ss:  95000, s: 75000, a: 60000, b: 50000 } } } } }],
      [{ condition: { trigger: 'start_round' }, details: { range_up: { value: 1, term: { for_rounds: 1 } }, debuff_removal: { effect: 'range_down', term: 'immediate', rate: { milliPercentage: { ss: 100000, s: 80000, a: 65000, b: 55000 } } } } }]
    ]
  },
  output_limit_release_device: {
    type: 'gear',
    id: 'output_limit_release_device',
    max_rank: 'ss',
    equipment_effects: [
      [{ condition: { trigger: 'start_wave', state: { unit: { kind: 'ags' } } }, details: { atk_up: { milliPercentage: { ss: 19500, s: 18000, a: 16500, b: 15000 }, term: 'infinite' }, spd_up: { milliPercentage: { ss:  9500, s:  8000, a:  6500, b:  5000 }, term: 'infinite' }, acc_down: { milliPercentage: { ss: 15000, s: 16500, a: 18000, b: 20000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave', state: { unit: { kind: 'ags' } } }, details: { atk_up: { milliPercentage: { ss: 20000, s: 18500, a: 17000, b: 15500 }, term: 'infinite' }, spd_up: { milliPercentage: { ss: 10000, s:  8500, a:  7000, b:  5500 }, term: 'infinite' }, acc_down: { milliPercentage: { ss: 14500, s: 16000, a: 17500, b: 19000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave', state: { unit: { kind: 'ags' } } }, details: { atk_up: { milliPercentage: { ss: 20500, s: 19000, a: 17500, b: 16000 }, term: 'infinite' }, spd_up: { milliPercentage: { ss: 10500, s:  9000, a:  7500, b:  6000 }, term: 'infinite' }, acc_down: { milliPercentage: { ss: 14000, s: 15500, a: 17000, b: 18500 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave', state: { unit: { kind: 'ags' } } }, details: { atk_up: { milliPercentage: { ss: 21000, s: 19500, a: 18000, b: 16500 }, term: 'infinite' }, spd_up: { milliPercentage: { ss: 11000, s:  9500, a:  8000, b:  6500 }, term: 'infinite' }, acc_down: { milliPercentage: { ss: 13500, s: 15000, a: 16500, b: 18000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave', state: { unit: { kind: 'ags' } } }, details: { atk_up: { milliPercentage: { ss: 21500, s: 20000, a: 18500, b: 17000 }, term: 'infinite' }, spd_up: { milliPercentage: { ss: 11500, s: 10000, a:  8500, b:  7000 }, term: 'infinite' }, acc_down: { milliPercentage: { ss: 13000, s: 14500, a: 16000, b: 17500 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave', state: { unit: { kind: 'ags' } } }, details: { atk_up: { milliPercentage: { ss: 22000, s: 20500, a: 19000, b: 17500 }, term: 'infinite' }, spd_up: { milliPercentage: { ss: 12000, s: 10500, a:  9000, b:  7500 }, term: 'infinite' }, acc_down: { milliPercentage: { ss: 12500, s: 14000, a: 15500, b: 17000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave', state: { unit: { kind: 'ags' } } }, details: { atk_up: { milliPercentage: { ss: 22500, s: 21000, a: 19500, b: 18000 }, term: 'infinite' }, spd_up: { milliPercentage: { ss: 12500, s: 11000, a:  9500, b:  8000 }, term: 'infinite' }, acc_down: { milliPercentage: { ss: 12000, s: 13500, a: 15000, b: 16500 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave', state: { unit: { kind: 'ags' } } }, details: { atk_up: { milliPercentage: { ss: 23000, s: 21500, a: 20000, b: 18500 }, term: 'infinite' }, spd_up: { milliPercentage: { ss: 13000, s: 11500, a: 10000, b:  8500 }, term: 'infinite' }, acc_down: { milliPercentage: { ss: 11500, s: 13000, a: 14500, b: 16000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave', state: { unit: { kind: 'ags' } } }, details: { atk_up: { milliPercentage: { ss: 23500, s: 22000, a: 20500, b: 19000 }, term: 'infinite' }, spd_up: { milliPercentage: { ss: 13500, s: 12000, a: 10500, b:  9000 }, term: 'infinite' }, acc_down: { milliPercentage: { ss: 11000, s: 12500, a: 14000, b: 15500 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave', state: { unit: { kind: 'ags' } } }, details: { atk_up: { milliPercentage: { ss: 24000, s: 22500, a: 21000, b: 19500 }, term: 'infinite' }, spd_up: { milliPercentage: { ss: 14000, s: 12500, a: 11000, b:  9500 }, term: 'infinite' }, acc_down: { milliPercentage: { ss: 10500, s: 12000, a: 13500, b: 15000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave', state: { unit: { kind: 'ags' } } }, details: { atk_up: { milliPercentage: { ss: 25000, s: 23000, a: 21500, b: 20000 }, term: 'infinite' }, spd_up: { milliPercentage: { ss: 15000, s: 13000, a: 11500, b: 10000 }, term: 'infinite' }, acc_down: { milliPercentage: { ss: 10000, s: 11500, a: 13000, b: 14500 }, term: 'infinite' } } }]
    ]
  },
  particle_accelerator_force: {
    type: 'gear',
    id: 'particle_accelerator_force',
    exclusive: {
      role: 'attacker'
    },
    equipment_effects: [
      [{ condition: { trigger: 'start_round' }, details: { atk_up: { milliPercentage: 15000, term: { for_rounds: 1 } }, damage_taken_increased: { milliPercentage: 10000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { atk_up: { milliPercentage: 17000, term: { for_rounds: 1 } }, damage_taken_increased: { milliPercentage: 11000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { atk_up: { milliPercentage: 19000, term: { for_rounds: 1 } }, damage_taken_increased: { milliPercentage: 12000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { atk_up: { milliPercentage: 21000, term: { for_rounds: 1 } }, damage_taken_increased: { milliPercentage: 13000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { atk_up: { milliPercentage: 23000, term: { for_rounds: 1 } }, damage_taken_increased: { milliPercentage: 14000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { atk_up: { milliPercentage: 25000, term: { for_rounds: 1 } }, damage_taken_increased: { milliPercentage: 15000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { atk_up: { milliPercentage: 27000, term: { for_rounds: 1 } }, damage_taken_increased: { milliPercentage: 16000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { atk_up: { milliPercentage: 29000, term: { for_rounds: 1 } }, damage_taken_increased: { milliPercentage: 17000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { atk_up: { milliPercentage: 31000, term: { for_rounds: 1 } }, damage_taken_increased: { milliPercentage: 18000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { atk_up: { milliPercentage: 33000, term: { for_rounds: 1 } }, damage_taken_increased: { milliPercentage: 19000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { atk_up: { milliPercentage: 35000, term: { for_rounds: 1 } }, damage_taken_increased: { milliPercentage: 20000, term: { for_rounds: 1 } } } }]
    ]
  },
  // particle_accelerator_capacity: {
  //   type: 'gear',
  //   id: 'particle_accelerator_capacity',
  //   exclusive: {
  //     role: 'defender'
  //   }
  // },
  light_firearm_loader: {
    type: 'gear',
    id: 'light_firearm_loader',
    max_rank: 'ss',
    exclusive: {
      type: 'light',
      role: 'attacker'
    },
    status_effects: [
      { acc_up: { milliPercentage: { ss: 20000, s: 16000, a: 12000, b:  8000 } }, cri_up: { milliPercentage: { ss:  5000, s:  4000, a: 3000, b: 2000 } } },
      { acc_up: { milliPercentage: { ss: 22000, s: 17600, a: 13200, b:  8800 } }, cri_up: { milliPercentage: { ss:  6000, s:  4800, a: 3600, b: 2400 } } },
      { acc_up: { milliPercentage: { ss: 24000, s: 19200, a: 14400, b:  9600 } }, cri_up: { milliPercentage: { ss:  7000, s:  5600, a: 4200, b: 2800 } } },
      { acc_up: { milliPercentage: { ss: 26000, s: 20800, a: 15600, b: 10400 } }, cri_up: { milliPercentage: { ss:  8000, s:  6400, a: 4800, b: 3200 } } },
      { acc_up: { milliPercentage: { ss: 28000, s: 22400, a: 16800, b: 11200 } }, cri_up: { milliPercentage: { ss:  9000, s:  7200, a: 5400, b: 3600 } } },
      { acc_up: { milliPercentage: { ss: 30000, s: 24000, a: 18000, b: 12000 } }, cri_up: { milliPercentage: { ss: 10000, s:  8000, a: 6000, b: 4000 } } },
      { acc_up: { milliPercentage: { ss: 32000, s: 25600, a: 19200, b: 12800 } }, cri_up: { milliPercentage: { ss: 11000, s:  8800, a: 6600, b: 4400 } } },
      { acc_up: { milliPercentage: { ss: 34000, s: 27200, a: 20400, b: 13600 } }, cri_up: { milliPercentage: { ss: 12000, s:  9600, a: 7200, b: 4800 } } },
      { acc_up: { milliPercentage: { ss: 36000, s: 28800, a: 21600, b: 14400 } }, cri_up: { milliPercentage: { ss: 13000, s: 10400, a: 7800, b: 5200 } } },
      { acc_up: { milliPercentage: { ss: 38000, s: 30400, a: 22800, b: 15200 } }, cri_up: { milliPercentage: { ss: 14000, s: 11200, a: 8400, b: 5600 } } },
      { acc_up: { milliPercentage: { ss: 40000, s: 32000, a: 24000, b: 16000 } }, cri_up: { milliPercentage: { ss: 15000, s: 12000, a: 9000, b: 6000 } } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'attack' }, details: { re_attack: { term: 'immediate', rate: { milliPercentage: { ss:  72500, s: 60000, a: 55000, b: 50000 } } } } }],
      [{ condition: { trigger: 'attack' }, details: { re_attack: { term: 'immediate', rate: { milliPercentage: { ss:  75000, s: 62500, a: 57500, b: 52500 } } } } }],
      [{ condition: { trigger: 'attack' }, details: { re_attack: { term: 'immediate', rate: { milliPercentage: { ss:  77500, s: 65000, a: 60000, b: 55000 } } } } }],
      [{ condition: { trigger: 'attack' }, details: { re_attack: { term: 'immediate', rate: { milliPercentage: { ss:  80000, s: 67500, a: 62500, b: 57500 } } } } }],
      [{ condition: { trigger: 'attack' }, details: { re_attack: { term: 'immediate', rate: { milliPercentage: { ss:  82500, s: 70000, a: 65000, b: 60000 } } } } }],
      [{ condition: { trigger: 'attack' }, details: { re_attack: { term: 'immediate', rate: { milliPercentage: { ss:  85000, s: 72500, a: 67500, b: 62500 } } } } }],
      [{ condition: { trigger: 'attack' }, details: { re_attack: { term: 'immediate', rate: { milliPercentage: { ss:  88000, s: 75000, a: 70000, b: 65000 } } } } }],
      [{ condition: { trigger: 'attack' }, details: { re_attack: { term: 'immediate', rate: { milliPercentage: { ss:  91000, s: 77500, a: 72500, b: 67500 } } } } }],
      [{ condition: { trigger: 'attack' }, details: { re_attack: { term: 'immediate', rate: { milliPercentage: { ss:  94000, s: 80000, a: 75000, b: 70000 } } } } }],
      [{ condition: { trigger: 'attack' }, details: { re_attack: { term: 'immediate', rate: { milliPercentage: { ss:  97000, s: 82500, a: 77500, b: 72500 } } } } }],
      [{ condition: { trigger: 'attack' }, details: { re_attack: { term: 'immediate', rate: { milliPercentage: { ss: 100000, s: 85000, a: 80000, b: 75000 } } } } }]
    ]
  },
  aerial_firearm_thruster: {
    type: 'gear',
    id: 'aerial_firearm_thruster',
    max_rank: 'ss',
    exclusive: {
      type: 'flying',
      role: 'attacker'
    },
    status_effects: [
      { acc_up: { milliPercentage: { ss: 20000, s: 16000, a: 12000, b:  8000 } }, cri_up: { milliPercentage: { ss:  5000, s:  4000, a: 3000, b: 2000 } } },
      { acc_up: { milliPercentage: { ss: 22000, s: 17600, a: 13200, b:  8800 } }, cri_up: { milliPercentage: { ss:  6000, s:  4800, a: 3600, b: 2400 } } },
      { acc_up: { milliPercentage: { ss: 24000, s: 19200, a: 14400, b:  9600 } }, cri_up: { milliPercentage: { ss:  7000, s:  5600, a: 4200, b: 2800 } } },
      { acc_up: { milliPercentage: { ss: 26000, s: 20800, a: 15600, b: 10400 } }, cri_up: { milliPercentage: { ss:  8000, s:  6400, a: 4800, b: 3200 } } },
      { acc_up: { milliPercentage: { ss: 28000, s: 22400, a: 16800, b: 11200 } }, cri_up: { milliPercentage: { ss:  9000, s:  7200, a: 5400, b: 3600 } } },
      { acc_up: { milliPercentage: { ss: 30000, s: 24000, a: 18000, b: 12000 } }, cri_up: { milliPercentage: { ss: 10000, s:  8000, a: 6000, b: 4000 } } },
      { acc_up: { milliPercentage: { ss: 32000, s: 25600, a: 19200, b: 12800 } }, cri_up: { milliPercentage: { ss: 11000, s:  8800, a: 6600, b: 4400 } } },
      { acc_up: { milliPercentage: { ss: 34000, s: 27200, a: 20400, b: 13600 } }, cri_up: { milliPercentage: { ss: 12000, s:  9600, a: 7200, b: 4800 } } },
      { acc_up: { milliPercentage: { ss: 36000, s: 28800, a: 21600, b: 14400 } }, cri_up: { milliPercentage: { ss: 13000, s: 10400, a: 7800, b: 5200 } } },
      { acc_up: { milliPercentage: { ss: 38000, s: 30400, a: 22800, b: 15200 } }, cri_up: { milliPercentage: { ss: 14000, s: 11200, a: 8400, b: 5600 } } },
      { acc_up: { milliPercentage: { ss: 40000, s: 32000, a: 24000, b: 16000 } }, cri_up: { milliPercentage: { ss: 15000, s: 12000, a: 9000, b: 6000 } } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { damage_multiplier_up: { milliPercentage: { ss: 25000, s: 15000, a: 11000, b:  7000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_multiplier_up: { milliPercentage: { ss: 27000, s: 17000, a: 13000, b:  9000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_multiplier_up: { milliPercentage: { ss: 29000, s: 19000, a: 15000, b: 11000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_multiplier_up: { milliPercentage: { ss: 31000, s: 21000, a: 17000, b: 13000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_multiplier_up: { milliPercentage: { ss: 33000, s: 23000, a: 19000, b: 15000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_multiplier_up: { milliPercentage: { ss: 35000, s: 25000, a: 21000, b: 17000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_multiplier_up: { milliPercentage: { ss: 37000, s: 27000, a: 23000, b: 19000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_multiplier_up: { milliPercentage: { ss: 39000, s: 29000, a: 25000, b: 21000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_multiplier_up: { milliPercentage: { ss: 41000, s: 31000, a: 27000, b: 23000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_multiplier_up: { milliPercentage: { ss: 43000, s: 33000, a: 29000, b: 25000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_multiplier_up: { milliPercentage: { ss: 45000, s: 35000, a: 31000, b: 27000 }, term: 'infinite' } } }]
    ]
  },
  aqua_module: {
    type: 'gear',
    id: 'aqua_module',
    max_rank: 'ss',
    status_effects: [
      { ice_resist_up: { milliPercentage: { ss: 25000, s: 20000, a: 15000, b: 10000 } } },
      { ice_resist_up: { milliPercentage: { ss: 27500, s: 22000, a: 16500, b: 11000 } } },
      { ice_resist_up: { milliPercentage: { ss: 30000, s: 24000, a: 18000, b: 12000 } } },
      { ice_resist_up: { milliPercentage: { ss: 32500, s: 26000, a: 19500, b: 13000 } } },
      { ice_resist_up: { milliPercentage: { ss: 35000, s: 28000, a: 21000, b: 14000 } } },
      { ice_resist_up: { milliPercentage: { ss: 37500, s: 30000, a: 22500, b: 15000 } } },
      { ice_resist_up: { milliPercentage: { ss: 40000, s: 32000, a: 24000, b: 16000 } } },
      { ice_resist_up: { milliPercentage: { ss: 42500, s: 34000, a: 25500, b: 17000 } } },
      { ice_resist_up: { milliPercentage: { ss: 45000, s: 36000, a: 27000, b: 18000 } } },
      { ice_resist_up: { milliPercentage: { ss: 47500, s: 38000, a: 28500, b: 19000 } } },
      { ice_resist_up: { milliPercentage: { ss: 50000, s: 40000, a: 30000, b: 20000 } } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_round', state: { tagged: 'wet' } }, details: { atk_up: { milliPercentage: { ss:  9500, s:  8000, a:  6500, b:  5000 }, term: { for_rounds: 1 } }, def_up: { milliPercentage: { ss:  9500, s:  8000, a:  6500, b:  5000 }, term: { for_rounds: 1 } }, acc_up: { milliPercentage: { ss:  9500, s:  8000, a:  6500, b:  5000 }, term: { for_rounds: 1 } }, eva_up: { milliPercentage: { ss:  9500, s:  8000, a:  6500, b:  5000 }, term: { for_rounds: 1 } }, spd_up: { milliPercentage: { ss:  9500, s:  8000, a:  6500, b:  5000 }, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', state: { tagged: 'wet' } }, details: { atk_up: { milliPercentage: { ss: 10000, s:  8500, a:  7000, b:  5500 }, term: { for_rounds: 1 } }, def_up: { milliPercentage: { ss: 10000, s:  8500, a:  7000, b:  5500 }, term: { for_rounds: 1 } }, acc_up: { milliPercentage: { ss: 10000, s:  8500, a:  7000, b:  5500 }, term: { for_rounds: 1 } }, eva_up: { milliPercentage: { ss: 10000, s:  8500, a:  7000, b:  5500 }, term: { for_rounds: 1 } }, spd_up: { milliPercentage: { ss: 10000, s:  8500, a:  7000, b:  5500 }, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', state: { tagged: 'wet' } }, details: { atk_up: { milliPercentage: { ss: 10500, s:  9000, a:  7500, b:  6000 }, term: { for_rounds: 1 } }, def_up: { milliPercentage: { ss: 10500, s:  9000, a:  7500, b:  6000 }, term: { for_rounds: 1 } }, acc_up: { milliPercentage: { ss: 10500, s:  9000, a:  7500, b:  6000 }, term: { for_rounds: 1 } }, eva_up: { milliPercentage: { ss: 10500, s:  9000, a:  7500, b:  6000 }, term: { for_rounds: 1 } }, spd_up: { milliPercentage: { ss: 10500, s:  9000, a:  7500, b:  6000 }, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', state: { tagged: 'wet' } }, details: { atk_up: { milliPercentage: { ss: 11000, s:  9500, a:  8000, b:  6500 }, term: { for_rounds: 1 } }, def_up: { milliPercentage: { ss: 11000, s:  9500, a:  8000, b:  6500 }, term: { for_rounds: 1 } }, acc_up: { milliPercentage: { ss: 11000, s:  9500, a:  8000, b:  6500 }, term: { for_rounds: 1 } }, eva_up: { milliPercentage: { ss: 11000, s:  9500, a:  8000, b:  6500 }, term: { for_rounds: 1 } }, spd_up: { milliPercentage: { ss: 11000, s:  9500, a:  8000, b:  6500 }, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', state: { tagged: 'wet' } }, details: { atk_up: { milliPercentage: { ss: 11500, s: 10000, a:  8500, b:  7000 }, term: { for_rounds: 1 } }, def_up: { milliPercentage: { ss: 11500, s: 10000, a:  8500, b:  7000 }, term: { for_rounds: 1 } }, acc_up: { milliPercentage: { ss: 11500, s: 10000, a:  8500, b:  7000 }, term: { for_rounds: 1 } }, eva_up: { milliPercentage: { ss: 11500, s: 10000, a:  8500, b:  7000 }, term: { for_rounds: 1 } }, spd_up: { milliPercentage: { ss: 11500, s: 10000, a:  8500, b:  7000 }, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', state: { tagged: 'wet' } }, details: { atk_up: { milliPercentage: { ss: 12000, s: 10500, a:  9000, b:  7500 }, term: { for_rounds: 1 } }, def_up: { milliPercentage: { ss: 12000, s: 10500, a:  9000, b:  7500 }, term: { for_rounds: 1 } }, acc_up: { milliPercentage: { ss: 12000, s: 10500, a:  9000, b:  7500 }, term: { for_rounds: 1 } }, eva_up: { milliPercentage: { ss: 12000, s: 10500, a:  9000, b:  7500 }, term: { for_rounds: 1 } }, spd_up: { milliPercentage: { ss: 12000, s: 10500, a:  9000, b:  7500 }, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', state: { tagged: 'wet' } }, details: { atk_up: { milliPercentage: { ss: 12500, s: 11000, a:  9500, b:  8000 }, term: { for_rounds: 1 } }, def_up: { milliPercentage: { ss: 12500, s: 11000, a:  9500, b:  8000 }, term: { for_rounds: 1 } }, acc_up: { milliPercentage: { ss: 12500, s: 11000, a:  9500, b:  8000 }, term: { for_rounds: 1 } }, eva_up: { milliPercentage: { ss: 12500, s: 11000, a:  9500, b:  8000 }, term: { for_rounds: 1 } }, spd_up: { milliPercentage: { ss: 12500, s: 11000, a:  9500, b:  8000 }, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', state: { tagged: 'wet' } }, details: { atk_up: { milliPercentage: { ss: 13000, s: 11500, a: 10000, b:  8500 }, term: { for_rounds: 1 } }, def_up: { milliPercentage: { ss: 13000, s: 11500, a: 10000, b:  8500 }, term: { for_rounds: 1 } }, acc_up: { milliPercentage: { ss: 13000, s: 11500, a: 10000, b:  8500 }, term: { for_rounds: 1 } }, eva_up: { milliPercentage: { ss: 13000, s: 11500, a: 10000, b:  8500 }, term: { for_rounds: 1 } }, spd_up: { milliPercentage: { ss: 13000, s: 11500, a: 10000, b:  8500 }, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', state: { tagged: 'wet' } }, details: { atk_up: { milliPercentage: { ss: 13500, s: 12000, a: 10500, b:  9000 }, term: { for_rounds: 1 } }, def_up: { milliPercentage: { ss: 13500, s: 12000, a: 10500, b:  9000 }, term: { for_rounds: 1 } }, acc_up: { milliPercentage: { ss: 13500, s: 12000, a: 10500, b:  9000 }, term: { for_rounds: 1 } }, eva_up: { milliPercentage: { ss: 13500, s: 12000, a: 10500, b:  9000 }, term: { for_rounds: 1 } }, spd_up: { milliPercentage: { ss: 13500, s: 12000, a: 10500, b:  9000 }, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', state: { tagged: 'wet' } }, details: { atk_up: { milliPercentage: { ss: 14000, s: 12500, a: 11000, b:  9500 }, term: { for_rounds: 1 } }, def_up: { milliPercentage: { ss: 14000, s: 12500, a: 11000, b:  9500 }, term: { for_rounds: 1 } }, acc_up: { milliPercentage: { ss: 14000, s: 12500, a: 11000, b:  9500 }, term: { for_rounds: 1 } }, eva_up: { milliPercentage: { ss: 14000, s: 12500, a: 11000, b:  9500 }, term: { for_rounds: 1 } }, spd_up: { milliPercentage: { ss: 14000, s: 12500, a: 11000, b:  9500 }, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', state: { tagged: 'wet' } }, details: { atk_up: { milliPercentage: { ss: 15000, s: 13000, a: 11500, b: 10000 }, term: { for_rounds: 1 } }, def_up: { milliPercentage: { ss: 15000, s: 13000, a: 11500, b: 10000 }, term: { for_rounds: 1 } }, acc_up: { milliPercentage: { ss: 15000, s: 13000, a: 11500, b: 10000 }, term: { for_rounds: 1 } }, eva_up: { milliPercentage: { ss: 15000, s: 13000, a: 11500, b: 10000 }, term: { for_rounds: 1 } }, spd_up: { milliPercentage: { ss: 15000, s: 13000, a: 11500, b: 10000 }, term: { for_rounds: 1 } } } }]
    ]
  },
  energy_converter: {
    type: 'gear',
    id: 'energy_converter',
    max_rank: 'ss',
    equipment_effects: [
      [{ condition: { trigger: 'start_round', state: { affected: 'barrier' } }, details: { atk_up: { milliPercentage: { ss:  7500, s:  6000, a: 4500, b: 3000 }, term: { for_rounds: 1 } }, spd_up: { milliPercentage: { ss:  7500, s:  6000, a: 4500, b: 3000 }, term: { for_rounds: 1 } }, buff_removal: { effect: 'barrier', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round', state: { affected: 'barrier' } }, details: { atk_up: { milliPercentage: { ss:  8000, s:  6500, a: 5000, b: 3500 }, term: { for_rounds: 1 } }, spd_up: { milliPercentage: { ss:  8000, s:  6500, a: 5000, b: 3500 }, term: { for_rounds: 1 } }, buff_removal: { effect: 'barrier', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round', state: { affected: 'barrier' } }, details: { atk_up: { milliPercentage: { ss:  8500, s:  7000, a: 5500, b: 4000 }, term: { for_rounds: 1 } }, spd_up: { milliPercentage: { ss:  8500, s:  7000, a: 5500, b: 4000 }, term: { for_rounds: 1 } }, buff_removal: { effect: 'barrier', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round', state: { affected: 'barrier' } }, details: { atk_up: { milliPercentage: { ss:  9000, s:  7500, a: 6000, b: 4500 }, term: { for_rounds: 1 } }, spd_up: { milliPercentage: { ss:  9000, s:  7500, a: 6000, b: 4500 }, term: { for_rounds: 1 } }, buff_removal: { effect: 'barrier', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round', state: { affected: 'barrier' } }, details: { atk_up: { milliPercentage: { ss:  9500, s:  8000, a: 6500, b: 5000 }, term: { for_rounds: 1 } }, spd_up: { milliPercentage: { ss:  9500, s:  8000, a: 6500, b: 5000 }, term: { for_rounds: 1 } }, buff_removal: { effect: 'barrier', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round', state: { affected: 'barrier' } }, details: { atk_up: { milliPercentage: { ss: 10000, s:  8500, a: 7000, b: 5500 }, term: { for_rounds: 1 } }, spd_up: { milliPercentage: { ss: 10000, s:  8500, a: 7000, b: 5500 }, term: { for_rounds: 1 } }, buff_removal: { effect: 'barrier', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round', state: { affected: 'barrier' } }, details: { atk_up: { milliPercentage: { ss: 12000, s:  9000, a: 7500, b: 6000 }, term: { for_rounds: 1 } }, spd_up: { milliPercentage: { ss: 12000, s:  9000, a: 7500, b: 6000 }, term: { for_rounds: 1 } }, buff_removal: { effect: 'barrier', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round', state: { affected: 'barrier' } }, details: { atk_up: { milliPercentage: { ss: 14000, s:  9500, a: 8000, b: 6500 }, term: { for_rounds: 1 } }, spd_up: { milliPercentage: { ss: 14000, s:  9500, a: 8000, b: 6500 }, term: { for_rounds: 1 } }, buff_removal: { effect: 'barrier', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round', state: { affected: 'barrier' } }, details: { atk_up: { milliPercentage: { ss: 16000, s: 10000, a: 8500, b: 7000 }, term: { for_rounds: 1 } }, spd_up: { milliPercentage: { ss: 16000, s: 10000, a: 8500, b: 7000 }, term: { for_rounds: 1 } }, buff_removal: { effect: 'barrier', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round', state: { affected: 'barrier' } }, details: { atk_up: { milliPercentage: { ss: 18000, s: 12000, a: 9000, b: 7500 }, term: { for_rounds: 1 } }, spd_up: { milliPercentage: { ss: 18000, s: 12000, a: 9000, b: 7500 }, term: { for_rounds: 1 } }, buff_removal: { effect: 'barrier', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round', state: { affected: 'barrier' } }, details: { atk_up: { milliPercentage: { ss: 20000, s: 14000, a: 9500, b: 8000 }, term: { for_rounds: 1 } }, spd_up: { milliPercentage: { ss: 20000, s: 14000, a: 9500, b: 8000 }, term: { for_rounds: 1 } }, buff_removal: { effect: 'barrier', term: 'immediate' } } }]
    ]
  },
  ap_pack: {
    type: 'gear',
    id: 'ap_pack',
    max_rank: 'ss',
    equipment_effects: [
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue: { ss:  550000, s: 350000, a: 200000, b: 100000 }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue: { ss:  600000, s: 400000, a: 250000, b: 150000 }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue: { ss:  650000, s: 450000, a: 300000, b: 200000 }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue: { ss:  700000, s: 500000, a: 350000, b: 250000 }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue: { ss:  750000, s: 550000, a: 400000, b: 300000 }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue: { ss:  800000, s: 600000, a: 450000, b: 350000 }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue: { ss:  850000, s: 650000, a: 500000, b: 400000 }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue: { ss:  900000, s: 700000, a: 550000, b: 450000 }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue: { ss:  950000, s: 750000, a: 600000, b: 500000 }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue: { ss: 1000000, s: 800000, a: 650000, b: 550000 }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue: { ss: 1100000, s: 850000, a: 700000, b: 600000 }, term: 'immediate' } } }]
    ]
  },
  recon_drone: {
    type: 'gear',
    id: 'recon_drone',
    status_effects: [
      { acc_up: { milliPercentage: 25000 }, spd_up: { microValue: 150000 } },
      { acc_up: { milliPercentage: 27500 }, spd_up: { microValue: 165000 } },
      { acc_up: { milliPercentage: 30000 }, spd_up: { microValue: 180000 } },
      { acc_up: { milliPercentage: 32500 }, spd_up: { microValue: 195000 } },
      { acc_up: { milliPercentage: 35000 }, spd_up: { microValue: 210000 } },
      { acc_up: { milliPercentage: 37500 }, spd_up: { microValue: 225000 } },
      { acc_up: { milliPercentage: 40000 }, spd_up: { microValue: 240000 } },
      { acc_up: { milliPercentage: 42500 }, spd_up: { microValue: 255000 } },
      { acc_up: { milliPercentage: 45000 }, spd_up: { microValue: 270000 } },
      { acc_up: { milliPercentage: 47500 }, spd_up: { microValue: 285000 } },
      { acc_up: { milliPercentage: 50000 }, spd_up: { microValue: 300000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { reconnaissance: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { reconnaissance: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { reconnaissance: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { reconnaissance: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { reconnaissance: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { reconnaissance: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { reconnaissance: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { reconnaissance: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { reconnaissance: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { reconnaissance: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { reconnaissance: { term: 'infinite' } } }]
    ]
  },
  recycling_module: {
    type: 'gear',
    id: 'recycling_module',
    max_rank: 'ss',
    status_effects: [
      { hp_up: { value: { ss: 150, s: 100, a:  75,   b:  50 } } },
      { hp_up: { value: { ss: 165, s: 110, a:  82.5, b:  55 } } },
      { hp_up: { value: { ss: 180, s: 120, a:  90,   b:  60 } } },
      { hp_up: { value: { ss: 195, s: 130, a:  97.5, b:  65 } } },
      { hp_up: { value: { ss: 210, s: 140, a: 105,   b:  70 } } },
      { hp_up: { value: { ss: 225, s: 150, a: 112.5, b:  75 } } },
      { hp_up: { value: { ss: 240, s: 160, a: 120,   b:  80 } } },
      { hp_up: { value: { ss: 255, s: 170, a: 127.5, b:  85 } } },
      { hp_up: { value: { ss: 270, s: 180, a: 135,   b:  90 } } },
      { hp_up: { value: { ss: 285, s: 190, a: 142.5, b:  95 } } },
      { hp_up: { value: { ss: 300, s: 200, a: 150,   b: 100 } } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'enemy_killed' }, details: { ap_up: { microValue: { ss: 300000, s: 200000, a: 100000, b:  50000 }, term: 'immediate' } } }],
      [{ condition: { trigger: 'enemy_killed' }, details: { ap_up: { microValue: { ss: 350000, s: 200000, a: 150000, b:  50000 }, term: 'immediate' } } }],
      [{ condition: { trigger: 'enemy_killed' }, details: { ap_up: { microValue: { ss: 400000, s: 250000, a: 150000, b: 100000 }, term: 'immediate' } } }],
      [{ condition: { trigger: 'enemy_killed' }, details: { ap_up: { microValue: { ss: 450000, s: 250000, a: 200000, b: 100000 }, term: 'immediate' } } }],
      [{ condition: { trigger: 'enemy_killed' }, details: { ap_up: { microValue: { ss: 500000, s: 300000, a: 200000, b: 150000 }, term: 'immediate' } } }],
      [{ condition: { trigger: 'enemy_killed' }, details: { ap_up: { microValue: { ss: 550000, s: 350000, a: 250000, b: 150000 }, term: 'immediate' } } }],
      [{ condition: { trigger: 'enemy_killed' }, details: { ap_up: { microValue: { ss: 600000, s: 400000, a: 250000, b: 200000 }, term: 'immediate' } } }],
      [{ condition: { trigger: 'enemy_killed' }, details: { ap_up: { microValue: { ss: 650000, s: 450000, a: 300000, b: 200000 }, term: 'immediate' } } }],
      [{ condition: { trigger: 'enemy_killed' }, details: { ap_up: { microValue: { ss: 700000, s: 500000, a: 350000, b: 250000 }, term: 'immediate' } } }],
      [{ condition: { trigger: 'enemy_killed' }, details: { ap_up: { microValue: { ss: 750000, s: 550000, a: 400000, b: 250000 }, term: 'immediate' } } }],
      [{ condition: { trigger: 'enemy_killed' }, details: { ap_up: { microValue: { ss: 800000, s: 600000, a: 450000, b: 300000 }, term: 'immediate' } } }]
    ]
  },
  decoy_hologram: {
    type: 'gear',
    id: 'decoy_hologram',
    max_rank: 'ss',
    exclusive: {
      role: 'supporter'
    },
    status_effects: [
      { eva_up: { milliPercentage: { ss: 12000, s:  9000, a:  7000, b:  5000 } } },
      { eva_up: { milliPercentage: { ss: 13200, s:  9900, a:  7700, b:  5500 } } },
      { eva_up: { milliPercentage: { ss: 14400, s: 10800, a:  8400, b:  6000 } } },
      { eva_up: { milliPercentage: { ss: 15600, s: 11700, a:  9100, b:  6500 } } },
      { eva_up: { milliPercentage: { ss: 16800, s: 12600, a:  9800, b:  7000 } } },
      { eva_up: { milliPercentage: { ss: 18000, s: 13500, a: 10500, b:  7500 } } },
      { eva_up: { milliPercentage: { ss: 19200, s: 14400, a: 11200, b:  8000 } } },
      { eva_up: { milliPercentage: { ss: 20400, s: 15300, a: 11900, b:  8500 } } },
      { eva_up: { milliPercentage: { ss: 21600, s: 16200, a: 12600, b:  9000 } } },
      { eva_up: { milliPercentage: { ss: 22800, s: 17100, a: 13300, b:  9500 } } },
      { eva_up: { milliPercentage: { ss: 24000, s: 18000, a: 14000, b: 10000 } } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { minimize_damage: { times: { ss: 1, s: 1, a: 1, b: 1 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { minimize_damage: { times: { ss: 1, s: 1, a: 1, b: 1 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { minimize_damage: { times: { ss: 1, s: 1, a: 1, b: 1 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { minimize_damage: { times: { ss: 1, s: 1, a: 1, b: 1 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { minimize_damage: { times: { ss: 1, s: 1, a: 1, b: 1 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { minimize_damage: { times: { ss: 1, s: 1, a: 1, b: 1 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { minimize_damage: { times: { ss: 1, s: 1, a: 1, b: 1 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { minimize_damage: { times: { ss: 1, s: 1, a: 1, b: 1 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { minimize_damage: { times: { ss: 1, s: 1, a: 1, b: 1 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { minimize_damage: { times: { ss: 1, s: 1, a: 1, b: 1 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { minimize_damage: { times: { ss: 2, s: 1, a: 1, b: 1 } } } }]
    ]
  },
  energy_shield: {
    type: 'gear',
    id: 'energy_shield',
    max_rank: 'ss',
    equipment_effects: [
      [{ condition: { trigger: 'start_round' }, details: { barrier: { value: { ss: 200, s: 135, a:  90, b:  60 }, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { barrier: { value: { ss: 210, s: 150, a: 105, b:  75 }, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { barrier: { value: { ss: 225, s: 165, a: 120, b:  90 }, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { barrier: { value: { ss: 240, s: 180, a: 135, b: 105 }, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { barrier: { value: { ss: 260, s: 200, a: 150, b: 120 }, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { barrier: { value: { ss: 280, s: 210, a: 165, b: 135 }, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { barrier: { value: { ss: 300, s: 225, a: 180, b: 150 }, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { barrier: { value: { ss: 325, s: 240, a: 200, b: 165 }, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { barrier: { value: { ss: 350, s: 260, a: 210, b: 180 }, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { barrier: { value: { ss: 375, s: 280, a: 225, b: 200 }, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { barrier: { value: { ss: 400, s: 300, a: 240, b: 210 }, term: { for_rounds: 1 } } } }]
    ]
  },
  auxiliary_exoskeleton: {
    type: 'gear',
    id: 'auxiliary_exoskeleton',
    max_rank: 'ss',
    exclusive: {
      type: 'light'
    },
    status_effects: [
      { eva_up: { milliPercentage: { ss:  5000, s:  4000, a: 3000, b: 2000 } }, spd_up: { microValue: { ss:  50000, s: 40000, a: 30000, b: 20000 } } },
      { eva_up: { milliPercentage: { ss:  6000, s:  4800, a: 3600, b: 2400 } }, spd_up: { microValue: { ss:  55000, s: 44000, a: 33000, b: 22000 } } },
      { eva_up: { milliPercentage: { ss:  7000, s:  5600, a: 4200, b: 2800 } }, spd_up: { microValue: { ss:  60000, s: 48000, a: 36000, b: 24000 } } },
      { eva_up: { milliPercentage: { ss:  8000, s:  6400, a: 4800, b: 3200 } }, spd_up: { microValue: { ss:  65000, s: 52000, a: 39000, b: 26000 } } },
      { eva_up: { milliPercentage: { ss:  9000, s:  7200, a: 5400, b: 3600 } }, spd_up: { microValue: { ss:  70000, s: 56000, a: 42000, b: 28000 } } },
      { eva_up: { milliPercentage: { ss: 10000, s:  8000, a: 6000, b: 4000 } }, spd_up: { microValue: { ss:  75000, s: 60000, a: 45000, b: 30000 } } },
      { eva_up: { milliPercentage: { ss: 11000, s:  8800, a: 6600, b: 4400 } }, spd_up: { microValue: { ss:  80000, s: 64000, a: 48000, b: 32000 } } },
      { eva_up: { milliPercentage: { ss: 12000, s:  9600, a: 7200, b: 4800 } }, spd_up: { microValue: { ss:  85000, s: 68000, a: 51000, b: 34000 } } },
      { eva_up: { milliPercentage: { ss: 13000, s: 10400, a: 7800, b: 5200 } }, spd_up: { microValue: { ss:  90000, s: 72000, a: 54000, b: 36000 } } },
      { eva_up: { milliPercentage: { ss: 14000, s: 11200, a: 8400, b: 5600 } }, spd_up: { microValue: { ss:  95000, s: 76000, a: 57000, b: 38000 } } },
      { eva_up: { milliPercentage: { ss: 15000, s: 12000, a: 9000, b: 6000 } }, spd_up: { microValue: { ss: 100000, s: 80000, a: 60000, b: 40000 } } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: { ss:  5000, s: 3000, a: 1500, b:  250 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: { ss:  5500, s: 3500, a: 2000, b:  500 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: { ss:  6000, s: 4000, a: 2500, b: 1000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: { ss:  6500, s: 4500, a: 3000, b: 1500 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: { ss:  7000, s: 5000, a: 3500, b: 2000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: { ss:  7500, s: 5500, a: 4000, b: 2500 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: { ss:  8000, s: 6000, a: 4500, b: 3000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: { ss:  8500, s: 6500, a: 5000, b: 3500 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: { ss:  9000, s: 7000, a: 5500, b: 4000 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: { ss:  9500, s: 7500, a: 6000, b: 4500 }, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: { ss: 10000, s: 8000, a: 6500, b: 5000 }, term: 'infinite' } } }]
    ]
  },
  auxiliary_booster: {
    type: 'gear',
    id: 'auxiliary_booster',
    max_rank: 'ss',
    exclusive: {
      type: 'flying'
    },
    status_effects: [
      { eva_up: { milliPercentage: { ss: 15000, s: 12000, a: 10000, b:  8000 } } },
      { eva_up: { milliPercentage: { ss: 15750, s: 12600, a: 10500, b:  8400 } } },
      { eva_up: { milliPercentage: { ss: 16500, s: 13200, a: 11000, b:  8800 } } },
      { eva_up: { milliPercentage: { ss: 17250, s: 13800, a: 11500, b:  9200 } } },
      { eva_up: { milliPercentage: { ss: 18000, s: 14400, a: 12000, b:  9600 } } },
      { eva_up: { milliPercentage: { ss: 18750, s: 15000, a: 12500, b: 10000 } } },
      { eva_up: { milliPercentage: { ss: 19500, s: 15600, a: 13000, b: 10400 } } },
      { eva_up: { milliPercentage: { ss: 20250, s: 16200, a: 13500, b: 10800 } } },
      { eva_up: { milliPercentage: { ss: 21000, s: 16800, a: 14000, b: 11200 } } },
      { eva_up: { milliPercentage: { ss: 23000, s: 18000, a: 14500, b: 11600 } } },
      { eva_up: { milliPercentage: { ss: 25000, s: 20000, a: 15000, b: 12000 } } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_round' }, details: { debuff_removal: { effect: 'eva_down', rate: { milliPercentage: { ss:  62000, s: 50000, a: 41000, b: 35000 } }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { debuff_removal: { effect: 'eva_down', rate: { milliPercentage: { ss:  65000, s: 53000, a: 44000, b: 38000 } }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { debuff_removal: { effect: 'eva_down', rate: { milliPercentage: { ss:  68000, s: 56000, a: 47000, b: 41000 } }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { debuff_removal: { effect: 'eva_down', rate: { milliPercentage: { ss:  71000, s: 59000, a: 50000, b: 44000 } }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { debuff_removal: { effect: 'eva_down', rate: { milliPercentage: { ss:  74000, s: 62000, a: 53000, b: 47000 } }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { debuff_removal: { effect: 'eva_down', rate: { milliPercentage: { ss:  77000, s: 65000, a: 56000, b: 50000 } }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { debuff_removal: { effect: 'eva_down', rate: { milliPercentage: { ss:  80000, s: 68000, a: 59000, b: 53000 } }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { debuff_removal: { effect: 'eva_down', rate: { milliPercentage: { ss:  85000, s: 71000, a: 62000, b: 56000 } }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { debuff_removal: { effect: 'eva_down', rate: { milliPercentage: { ss:  90000, s: 74000, a: 65000, b: 59000 } }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { debuff_removal: { effect: 'eva_down', rate: { milliPercentage: { ss:  95000, s: 77000, a: 68000, b: 62000 } }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { debuff_removal: { effect: 'eva_down', rate: { milliPercentage: { ss: 100000, s: 80000, a: 71000, b: 65000 } }, term: 'immediate' } } }]
    ]
  },
  armor_plating: {
    type: 'gear',
    id: 'armor_plating',
    max_rank: 'ss',
    exclusive: {
      type: 'heavy'
    },
    status_effects: [
      { hp_up: { value: { ss: 240, s: 200, a: 160, b: 120 } } },
      { hp_up: { value: { ss: 288, s: 240, a: 192, b: 144 } } },
      { hp_up: { value: { ss: 336, s: 280, a: 224, b: 168 } } },
      { hp_up: { value: { ss: 384, s: 320, a: 256, b: 192 } } },
      { hp_up: { value: { ss: 432, s: 360, a: 288, b: 216 } } },
      { hp_up: { value: { ss: 480, s: 400, a: 320, b: 240 } } },
      { hp_up: { value: { ss: 528, s: 440, a: 352, b: 264 } } },
      { hp_up: { value: { ss: 576, s: 480, a: 384, b: 288 } } },
      { hp_up: { value: { ss: 624, s: 520, a: 416, b: 312 } } },
      { hp_up: { value: { ss: 672, s: 560, a: 448, b: 336 } } },
      { hp_up: { value: { ss: 720, s: 600, a: 480, b: 360 } } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: { ss: 41000, s: 30000, a: 24000, b: 20000 }, times: { ss: 2, s: 1, a: 1, b: 1 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: { ss: 44000, s: 32000, a: 26000, b: 22000 }, times: { ss: 2, s: 1, a: 1, b: 1 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: { ss: 47000, s: 35000, a: 28000, b: 24000 }, times: { ss: 2, s: 1, a: 1, b: 1 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: { ss: 50000, s: 38000, a: 30000, b: 26000 }, times: { ss: 2, s: 1, a: 1, b: 1 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: { ss: 53000, s: 41000, a: 32000, b: 28000 }, times: { ss: 2, s: 2, a: 1, b: 1 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: { ss: 56000, s: 44000, a: 35000, b: 30000 }, times: { ss: 2, s: 2, a: 1, b: 1 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: { ss: 59000, s: 47000, a: 38000, b: 32000 }, times: { ss: 3, s: 2, a: 1, b: 1 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: { ss: 62000, s: 50000, a: 41000, b: 35000 }, times: { ss: 3, s: 2, a: 2, b: 1 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: { ss: 65000, s: 53000, a: 44000, b: 38000 }, times: { ss: 3, s: 2, a: 2, b: 1 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: { ss: 68000, s: 56000, a: 47000, b: 41000 }, times: { ss: 3, s: 2, a: 2, b: 2 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: { ss: 70000, s: 59000, a: 50000, b: 44000 }, times: { ss: 4, s: 3, a: 2, b: 2 } } } }]
    ]
  },
  fire_spray: {
    type: 'gear',
    id: 'fire_spray',
    max_rank: 'ss',
    status_effects: [
      { fire_resist_up: { milliPercentage: { ss: 35000, s: 30000, a: 25000, b: 20000 } } },
      { fire_resist_up: { milliPercentage: { ss: 38500, s: 33000, a: 27500, b: 22000 } } },
      { fire_resist_up: { milliPercentage: { ss: 42000, s: 36000, a: 30000, b: 24000 } } },
      { fire_resist_up: { milliPercentage: { ss: 45500, s: 39000, a: 32500, b: 26000 } } },
      { fire_resist_up: { milliPercentage: { ss: 49000, s: 42000, a: 35000, b: 28000 } } },
      { fire_resist_up: { milliPercentage: { ss: 52500, s: 45000, a: 37500, b: 30000 } } },
      { fire_resist_up: { milliPercentage: { ss: 56000, s: 48000, a: 40000, b: 32000 } } },
      { fire_resist_up: { milliPercentage: { ss: 59500, s: 51000, a: 42500, b: 34000 } } },
      { fire_resist_up: { milliPercentage: { ss: 63000, s: 54000, a: 45000, b: 36000 } } },
      { fire_resist_up: { milliPercentage: { ss: 66500, s: 57000, a: 47500, b: 38000 } } },
      { fire_resist_up: { milliPercentage: { ss: 70000, s: 60000, a: 50000, b: 40000 } } }
    ]
  },
  frost_spray: {
    type: 'gear',
    id: 'frost_spray',
    max_rank: 'ss',
    status_effects: [
      { ice_resist_up: { milliPercentage: { ss: 35000, s: 30000, a: 25000, b: 20000 } } },
      { ice_resist_up: { milliPercentage: { ss: 38500, s: 33000, a: 27500, b: 22000 } } },
      { ice_resist_up: { milliPercentage: { ss: 42000, s: 36000, a: 30000, b: 24000 } } },
      { ice_resist_up: { milliPercentage: { ss: 45500, s: 39000, a: 32500, b: 26000 } } },
      { ice_resist_up: { milliPercentage: { ss: 49000, s: 42000, a: 35000, b: 28000 } } },
      { ice_resist_up: { milliPercentage: { ss: 52500, s: 45000, a: 37500, b: 30000 } } },
      { ice_resist_up: { milliPercentage: { ss: 56000, s: 48000, a: 40000, b: 32000 } } },
      { ice_resist_up: { milliPercentage: { ss: 59500, s: 51000, a: 42500, b: 34000 } } },
      { ice_resist_up: { milliPercentage: { ss: 63000, s: 54000, a: 45000, b: 36000 } } },
      { ice_resist_up: { milliPercentage: { ss: 66500, s: 57000, a: 47500, b: 38000 } } },
      { ice_resist_up: { milliPercentage: { ss: 70000, s: 60000, a: 50000, b: 40000 } } }
    ]
  },
  shock_spray: {
    type: 'gear',
    id: 'shock_spray',
    max_rank: 'ss',
    status_effects: [
      { electric_resist_up: { milliPercentage: { ss: 35000, s: 30000, a: 25000, b: 20000 } } },
      { electric_resist_up: { milliPercentage: { ss: 38500, s: 33000, a: 27500, b: 22000 } } },
      { electric_resist_up: { milliPercentage: { ss: 42000, s: 36000, a: 30000, b: 24000 } } },
      { electric_resist_up: { milliPercentage: { ss: 45500, s: 39000, a: 32500, b: 26000 } } },
      { electric_resist_up: { milliPercentage: { ss: 49000, s: 42000, a: 35000, b: 28000 } } },
      { electric_resist_up: { milliPercentage: { ss: 52500, s: 45000, a: 37500, b: 30000 } } },
      { electric_resist_up: { milliPercentage: { ss: 56000, s: 48000, a: 40000, b: 32000 } } },
      { electric_resist_up: { milliPercentage: { ss: 59500, s: 51000, a: 42500, b: 34000 } } },
      { electric_resist_up: { milliPercentage: { ss: 63000, s: 54000, a: 45000, b: 36000 } } },
      { electric_resist_up: { milliPercentage: { ss: 66500, s: 57000, a: 47500, b: 38000 } } },
      { electric_resist_up: { milliPercentage: { ss: 70000, s: 60000, a: 50000, b: 40000 } } }
    ]
  },
  hot_pack: {
    type: 'gear',
    id: 'hot_pack',
    status_effects: [
      { ice_resist_up: { milliPercentage: 25000 } },
      { ice_resist_up: { milliPercentage: 27500 } },
      { ice_resist_up: { milliPercentage: 30000 } },
      { ice_resist_up: { milliPercentage: 32500 } },
      { ice_resist_up: { milliPercentage: 35000 } },
      { ice_resist_up: { milliPercentage: 37500 } },
      { ice_resist_up: { milliPercentage: 40000 } },
      { ice_resist_up: { milliPercentage: 42500 } },
      { ice_resist_up: { milliPercentage: 45000 } },
      { ice_resist_up: { milliPercentage: 47500 } },
      { ice_resist_up: { milliPercentage: 50000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { minimum_ice_resist_up: { milliPercentage: 10000, term: { for_rounds: 3 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { minimum_ice_resist_up: { milliPercentage: 12000, term: { for_rounds: 3 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { minimum_ice_resist_up: { milliPercentage: 14000, term: { for_rounds: 3 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { minimum_ice_resist_up: { milliPercentage: 16000, term: { for_rounds: 3 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { minimum_ice_resist_up: { milliPercentage: 18000, term: { for_rounds: 3 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { minimum_ice_resist_up: { milliPercentage: 20000, term: { for_rounds: 3 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { minimum_ice_resist_up: { milliPercentage: 22000, term: { for_rounds: 3 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { minimum_ice_resist_up: { milliPercentage: 24000, term: { for_rounds: 3 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { minimum_ice_resist_up: { milliPercentage: 26000, term: { for_rounds: 3 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { minimum_ice_resist_up: { milliPercentage: 28000, term: { for_rounds: 3 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { minimum_ice_resist_up: { milliPercentage: 30000, term: { for_rounds: 3 } } } }]
    ]
  },
  stimpack: {
    type: 'gear',
    id: 'stimpack',
    max_rank: 'ss',
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { spd_up: { milliPercentage: { ss:  7000, s:  5000, a: 3500, b: 2500 }, term: 'infinite' }, battle_continuation: { value: { ss: 145, s:  85, a:  40, b:  10 }, times: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { spd_up: { milliPercentage: { ss:  7500, s:  5500, a: 4000, b: 3000 }, term: 'infinite' }, battle_continuation: { value: { ss: 160, s: 100, a:  55, b:  25 }, times: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { spd_up: { milliPercentage: { ss:  8000, s:  6000, a: 4500, b: 3500 }, term: 'infinite' }, battle_continuation: { value: { ss: 175, s: 115, a:  70, b:  40 }, times: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { spd_up: { milliPercentage: { ss:  8500, s:  6500, a: 5000, b: 4000 }, term: 'infinite' }, battle_continuation: { value: { ss: 190, s: 130, a:  85, b:  55 }, times: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { spd_up: { milliPercentage: { ss:  9000, s:  7000, a: 5500, b: 4500 }, term: 'infinite' }, battle_continuation: { value: { ss: 205, s: 145, a: 100, b:  70 }, times: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { spd_up: { milliPercentage: { ss:  9500, s:  7500, a: 6000, b: 5000 }, term: 'infinite' }, battle_continuation: { value: { ss: 220, s: 160, a: 115, b:  85 }, times: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { spd_up: { milliPercentage: { ss: 10000, s:  8000, a: 6500, b: 5500 }, term: 'infinite' }, battle_continuation: { value: { ss: 235, s: 175, a: 130, b: 100 }, times: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { spd_up: { milliPercentage: { ss: 10500, s:  8500, a: 7000, b: 6000 }, term: 'infinite' }, battle_continuation: { value: { ss: 250, s: 190, a: 145, b: 115 }, times: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { spd_up: { milliPercentage: { ss: 11000, s:  9000, a: 7500, b: 6500 }, term: 'infinite' }, battle_continuation: { value: { ss: 265, s: 205, a: 160, b: 130 }, times: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { spd_up: { milliPercentage: { ss: 11500, s:  9500, a: 8000, b: 7000 }, term: 'infinite' }, battle_continuation: { value: { ss: 280, s: 220, a: 175, b: 145 }, times: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { spd_up: { milliPercentage: { ss: 12000, s: 10000, a: 8500, b: 7500 }, term: 'infinite' }, battle_continuation: { value: { ss: 300, s: 235, a: 190, b: 160 }, times: 1, term: 'infinite' } } }]
    ]
  },
  lunch_box: {
    type: 'gear',
    id: 'lunch_box',
    equipment_effects: [
      [{ condition: { trigger: 'start_wave', state: { unit: { kind: 'bioroid' } } }, details: { atk_up: { milliPercentage:  5000, term: 'infinite' }, spd_up: { milliPercentage:  5000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave', state: { unit: { kind: 'bioroid' } } }, details: { atk_up: { milliPercentage:  5500, term: 'infinite' }, spd_up: { milliPercentage:  5500, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave', state: { unit: { kind: 'bioroid' } } }, details: { atk_up: { milliPercentage:  6000, term: 'infinite' }, spd_up: { milliPercentage:  6000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave', state: { unit: { kind: 'bioroid' } } }, details: { atk_up: { milliPercentage:  6500, term: 'infinite' }, spd_up: { milliPercentage:  6500, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave', state: { unit: { kind: 'bioroid' } } }, details: { atk_up: { milliPercentage:  7000, term: 'infinite' }, spd_up: { milliPercentage:  7000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave', state: { unit: { kind: 'bioroid' } } }, details: { atk_up: { milliPercentage:  7500, term: 'infinite' }, spd_up: { milliPercentage:  7500, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave', state: { unit: { kind: 'bioroid' } } }, details: { atk_up: { milliPercentage:  8000, term: 'infinite' }, spd_up: { milliPercentage:  8000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave', state: { unit: { kind: 'bioroid' } } }, details: { atk_up: { milliPercentage:  8500, term: 'infinite' }, spd_up: { milliPercentage:  8500, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave', state: { unit: { kind: 'bioroid' } } }, details: { atk_up: { milliPercentage:  9000, term: 'infinite' }, spd_up: { milliPercentage:  9000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave', state: { unit: { kind: 'bioroid' } } }, details: { atk_up: { milliPercentage:  9500, term: 'infinite' }, spd_up: { milliPercentage:  9500, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave', state: { unit: { kind: 'bioroid' } } }, details: { atk_up: { milliPercentage: 10000, term: 'infinite' }, spd_up: { milliPercentage: 10000, term: 'infinite' } } }]
    ]
  },
  cooling_pack: {
    type: 'gear',
    id: 'cooling_pack',
    status_effects: [
      { fire_resist_up: { milliPercentage: 25000 } },
      { fire_resist_up: { milliPercentage: 27500 } },
      { fire_resist_up: { milliPercentage: 30000 } },
      { fire_resist_up: { milliPercentage: 32500 } },
      { fire_resist_up: { milliPercentage: 35000 } },
      { fire_resist_up: { milliPercentage: 37500 } },
      { fire_resist_up: { milliPercentage: 40000 } },
      { fire_resist_up: { milliPercentage: 42500 } },
      { fire_resist_up: { milliPercentage: 45000 } },
      { fire_resist_up: { milliPercentage: 47500 } },
      { fire_resist_up: { milliPercentage: 50000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'attack' }, details: { ap_up: { microValue:  500000, term: 'immediate' } } }],
      [{ condition: { trigger: 'attack' }, details: { ap_up: { microValue:  550000, term: 'immediate' } } }],
      [{ condition: { trigger: 'attack' }, details: { ap_up: { microValue:  600000, term: 'immediate' } } }],
      [{ condition: { trigger: 'attack' }, details: { ap_up: { microValue:  650000, term: 'immediate' } } }],
      [{ condition: { trigger: 'attack' }, details: { ap_up: { microValue:  700000, term: 'immediate' } } }],
      [{ condition: { trigger: 'attack' }, details: { ap_up: { microValue:  750000, term: 'immediate' } } }],
      [{ condition: { trigger: 'attack' }, details: { ap_up: { microValue:  800000, term: 'immediate' } } }],
      [{ condition: { trigger: 'attack' }, details: { ap_up: { microValue:  850000, term: 'immediate' } } }],
      [{ condition: { trigger: 'attack' }, details: { ap_up: { microValue:  900000, term: 'immediate' } } }],
      [{ condition: { trigger: 'attack' }, details: { ap_up: { microValue:  950000, term: 'immediate' } } }],
      [{ condition: { trigger: 'attack' }, details: { ap_up: { microValue: 1000000, term: 'immediate' } } }]
    ]
  },
  sunblock: {
    type: 'gear',
    id: 'sunblock',
    status_effects: [
      { fire_resist_up: { milliPercentage: 25000 } },
      { fire_resist_up: { milliPercentage: 27500 } },
      { fire_resist_up: { milliPercentage: 30000 } },
      { fire_resist_up: { milliPercentage: 32500 } },
      { fire_resist_up: { milliPercentage: 35000 } },
      { fire_resist_up: { milliPercentage: 37500 } },
      { fire_resist_up: { milliPercentage: 40000 } },
      { fire_resist_up: { milliPercentage: 42500 } },
      { fire_resist_up: { milliPercentage: 45000 } },
      { fire_resist_up: { milliPercentage: 47500 } },
      { fire_resist_up: { milliPercentage: 50000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'be_hit_fire_active', state: { unit: { kind: 'bioroid' } } }, details: { atk_up: { milliPercentage:  5000, term: { for_rounds: 2 } }, cri_up: { milliPercentage:  5000, term: { for_rounds: 2 } }, spd_up: { milliPercentage:  5000, term: { for_rounds: 2 } } } }],
      [{ condition: { trigger: 'be_hit_fire_active', state: { unit: { kind: 'bioroid' } } }, details: { atk_up: { milliPercentage:  6000, term: { for_rounds: 2 } }, cri_up: { milliPercentage:  6000, term: { for_rounds: 2 } }, spd_up: { milliPercentage:  6000, term: { for_rounds: 2 } } } }],
      [{ condition: { trigger: 'be_hit_fire_active', state: { unit: { kind: 'bioroid' } } }, details: { atk_up: { milliPercentage:  7000, term: { for_rounds: 2 } }, cri_up: { milliPercentage:  7000, term: { for_rounds: 2 } }, spd_up: { milliPercentage:  7000, term: { for_rounds: 2 } } } }],
      [{ condition: { trigger: 'be_hit_fire_active', state: { unit: { kind: 'bioroid' } } }, details: { atk_up: { milliPercentage:  8000, term: { for_rounds: 2 } }, cri_up: { milliPercentage:  8000, term: { for_rounds: 2 } }, spd_up: { milliPercentage:  8000, term: { for_rounds: 2 } } } }],
      [{ condition: { trigger: 'be_hit_fire_active', state: { unit: { kind: 'bioroid' } } }, details: { atk_up: { milliPercentage:  9000, term: { for_rounds: 2 } }, cri_up: { milliPercentage:  9000, term: { for_rounds: 2 } }, spd_up: { milliPercentage:  9000, term: { for_rounds: 2 } } } }],
      [{ condition: { trigger: 'be_hit_fire_active', state: { unit: { kind: 'bioroid' } } }, details: { atk_up: { milliPercentage: 10000, term: { for_rounds: 2 } }, cri_up: { milliPercentage: 10000, term: { for_rounds: 2 } }, spd_up: { milliPercentage: 10000, term: { for_rounds: 2 } } } }],
      [{ condition: { trigger: 'be_hit_fire_active', state: { unit: { kind: 'bioroid' } } }, details: { atk_up: { milliPercentage: 11000, term: { for_rounds: 2 } }, cri_up: { milliPercentage: 11000, term: { for_rounds: 2 } }, spd_up: { milliPercentage: 11000, term: { for_rounds: 2 } } } }],
      [{ condition: { trigger: 'be_hit_fire_active', state: { unit: { kind: 'bioroid' } } }, details: { atk_up: { milliPercentage: 12000, term: { for_rounds: 2 } }, cri_up: { milliPercentage: 12000, term: { for_rounds: 2 } }, spd_up: { milliPercentage: 12000, term: { for_rounds: 2 } } } }],
      [{ condition: { trigger: 'be_hit_fire_active', state: { unit: { kind: 'bioroid' } } }, details: { atk_up: { milliPercentage: 13000, term: { for_rounds: 2 } }, cri_up: { milliPercentage: 13000, term: { for_rounds: 2 } }, spd_up: { milliPercentage: 13000, term: { for_rounds: 2 } } } }],
      [{ condition: { trigger: 'be_hit_fire_active', state: { unit: { kind: 'bioroid' } } }, details: { atk_up: { milliPercentage: 14000, term: { for_rounds: 2 } }, cri_up: { milliPercentage: 14000, term: { for_rounds: 2 } }, spd_up: { milliPercentage: 14000, term: { for_rounds: 2 } } } }],
      [{ condition: { trigger: 'be_hit_fire_active', state: { unit: { kind: 'bioroid' } } }, details: { atk_up: { milliPercentage: 15000, term: { for_rounds: 2 } }, cri_up: { milliPercentage: 15000, term: { for_rounds: 2 } }, spd_up: { milliPercentage: 15000, term: { for_rounds: 2 } } } }]
    ]
  },
  horns_of_the_evil_overlord: {
    type: 'gear',
    id: 'horns_of_the_evil_overlord',
    equipment_effects: [
      [{ condition: { trigger: 'start_round', state: { unit: { kind: 'bioroid', except: 171 } } }, details: { cri_up: { milliPercentage: 10000, term: { for_rounds: 1 } }, spd_up: { milliPercentage: 10000, term: { for_rounds: 1 } }, limit_action_count: { rate: 'constant', term: { for_rounds: 1 } } } }, { condition: { trigger: 'start_round', state: { unit: 171 } }, details: { cri_up: { milliPercentage: 20000, term: { for_rounds: 1 } }, spd_up: { milliPercentage: 20000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', state: { unit: { kind: 'bioroid', except: 171 } } }, details: { cri_up: { milliPercentage: 12000, term: { for_rounds: 1 } }, spd_up: { milliPercentage: 10500, term: { for_rounds: 1 } }, limit_action_count: { rate: 'constant', term: { for_rounds: 1 } } } }, { condition: { trigger: 'start_round', state: { unit: 171 } }, details: { cri_up: { milliPercentage: 24000, term: { for_rounds: 1 } }, spd_up: { milliPercentage: 21000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', state: { unit: { kind: 'bioroid', except: 171 } } }, details: { cri_up: { milliPercentage: 14000, term: { for_rounds: 1 } }, spd_up: { milliPercentage: 11000, term: { for_rounds: 1 } }, limit_action_count: { rate: 'constant', term: { for_rounds: 1 } } } }, { condition: { trigger: 'start_round', state: { unit: 171 } }, details: { cri_up: { milliPercentage: 28000, term: { for_rounds: 1 } }, spd_up: { milliPercentage: 22000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', state: { unit: { kind: 'bioroid', except: 171 } } }, details: { cri_up: { milliPercentage: 16000, term: { for_rounds: 1 } }, spd_up: { milliPercentage: 11500, term: { for_rounds: 1 } }, limit_action_count: { rate: 'constant', term: { for_rounds: 1 } } } }, { condition: { trigger: 'start_round', state: { unit: 171 } }, details: { cri_up: { milliPercentage: 32000, term: { for_rounds: 1 } }, spd_up: { milliPercentage: 23000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', state: { unit: { kind: 'bioroid', except: 171 } } }, details: { cri_up: { milliPercentage: 18000, term: { for_rounds: 1 } }, spd_up: { milliPercentage: 12000, term: { for_rounds: 1 } }, limit_action_count: { rate: 'constant', term: { for_rounds: 1 } } } }, { condition: { trigger: 'start_round', state: { unit: 171 } }, details: { cri_up: { milliPercentage: 36000, term: { for_rounds: 1 } }, spd_up: { milliPercentage: 24000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', state: { unit: { kind: 'bioroid', except: 171 } } }, details: { cri_up: { milliPercentage: 20000, term: { for_rounds: 1 } }, spd_up: { milliPercentage: 12500, term: { for_rounds: 1 } }, limit_action_count: { rate: 'constant', term: { for_rounds: 1 } } } }, { condition: { trigger: 'start_round', state: { unit: 171 } }, details: { cri_up: { milliPercentage: 40000, term: { for_rounds: 1 } }, spd_up: { milliPercentage: 25000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', state: { unit: { kind: 'bioroid', except: 171 } } }, details: { cri_up: { milliPercentage: 22000, term: { for_rounds: 1 } }, spd_up: { milliPercentage: 13000, term: { for_rounds: 1 } }, limit_action_count: { rate: 'constant', term: { for_rounds: 1 } } } }, { condition: { trigger: 'start_round', state: { unit: 171 } }, details: { cri_up: { milliPercentage: 44000, term: { for_rounds: 1 } }, spd_up: { milliPercentage: 26000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', state: { unit: { kind: 'bioroid', except: 171 } } }, details: { cri_up: { milliPercentage: 24000, term: { for_rounds: 1 } }, spd_up: { milliPercentage: 13500, term: { for_rounds: 1 } }, limit_action_count: { rate: 'constant', term: { for_rounds: 1 } } } }, { condition: { trigger: 'start_round', state: { unit: 171 } }, details: { cri_up: { milliPercentage: 48000, term: { for_rounds: 1 } }, spd_up: { milliPercentage: 27000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', state: { unit: { kind: 'bioroid', except: 171 } } }, details: { cri_up: { milliPercentage: 26000, term: { for_rounds: 1 } }, spd_up: { milliPercentage: 14000, term: { for_rounds: 1 } }, limit_action_count: { rate: 'constant', term: { for_rounds: 1 } } } }, { condition: { trigger: 'start_round', state: { unit: 171 } }, details: { cri_up: { milliPercentage: 52000, term: { for_rounds: 1 } }, spd_up: { milliPercentage: 28000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', state: { unit: { kind: 'bioroid', except: 171 } } }, details: { cri_up: { milliPercentage: 28000, term: { for_rounds: 1 } }, spd_up: { milliPercentage: 14500, term: { for_rounds: 1 } }, limit_action_count: { rate: 'constant', term: { for_rounds: 1 } } } }, { condition: { trigger: 'start_round', state: { unit: 171 } }, details: { cri_up: { milliPercentage: 56000, term: { for_rounds: 1 } }, spd_up: { milliPercentage: 29000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', state: { unit: { kind: 'bioroid', except: 171 } } }, details: { cri_up: { milliPercentage: 30000, term: { for_rounds: 1 } }, spd_up: { milliPercentage: 15000, term: { for_rounds: 1 } }, limit_action_count: { rate: 'constant', term: { for_rounds: 1 } } } }, { condition: { trigger: 'start_round', state: { unit: 171 } }, details: { cri_up: { milliPercentage: 60000, term: { for_rounds: 1 } }, spd_up: { milliPercentage: 30000, term: { for_rounds: 1 } } } }]
    ]
  },
  lunar_magic_filled_rice_cakes: {
    type: 'gear',
    id: 'lunar_magic_filled_rice_cakes',
    equipment_effects: [
      [{ condition: { trigger: 'start_round' }, details: { atk_up: { milliPercentage: 15000, rate: 'constant', term: { for_rounds: 1 } }, acc_up: { milliPercentage: 25000, term: { for_rounds: 1 } }, eva_up: { milliPercentage: 25000, rate: 'constant', term: { for_rounds: 1 } }, damage_reduction_up: { milliPercentage: 15000, rate: 'constant', term: { for_rounds: 1 } }, all_debuff_removal: { rate: 'constant', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { atk_up: { milliPercentage: 18000, rate: 'constant', term: { for_rounds: 1 } }, acc_up: { milliPercentage: 30000, term: { for_rounds: 1 } }, eva_up: { milliPercentage: 30000, rate: 'constant', term: { for_rounds: 1 } }, damage_reduction_up: { milliPercentage: 18000, rate: 'constant', term: { for_rounds: 1 } }, all_debuff_removal: { rate: 'constant', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { atk_up: { milliPercentage: 21000, rate: 'constant', term: { for_rounds: 1 } }, acc_up: { milliPercentage: 35000, term: { for_rounds: 1 } }, eva_up: { milliPercentage: 35000, rate: 'constant', term: { for_rounds: 1 } }, damage_reduction_up: { milliPercentage: 21000, rate: 'constant', term: { for_rounds: 1 } }, all_debuff_removal: { rate: 'constant', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { atk_up: { milliPercentage: 24000, rate: 'constant', term: { for_rounds: 1 } }, acc_up: { milliPercentage: 40000, term: { for_rounds: 1 } }, eva_up: { milliPercentage: 40000, rate: 'constant', term: { for_rounds: 1 } }, damage_reduction_up: { milliPercentage: 24000, rate: 'constant', term: { for_rounds: 1 } }, all_debuff_removal: { rate: 'constant', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { atk_up: { milliPercentage: 27000, rate: 'constant', term: { for_rounds: 1 } }, acc_up: { milliPercentage: 45000, term: { for_rounds: 1 } }, eva_up: { milliPercentage: 45000, rate: 'constant', term: { for_rounds: 1 } }, damage_reduction_up: { milliPercentage: 27000, rate: 'constant', term: { for_rounds: 1 } }, all_debuff_removal: { rate: 'constant', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { atk_up: { milliPercentage: 30000, rate: 'constant', term: { for_rounds: 1 } }, acc_up: { milliPercentage: 50000, term: { for_rounds: 1 } }, eva_up: { milliPercentage: 50000, rate: 'constant', term: { for_rounds: 1 } }, damage_reduction_up: { milliPercentage: 30000, rate: 'constant', term: { for_rounds: 1 } }, all_debuff_removal: { rate: 'constant', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { atk_up: { milliPercentage: 33000, rate: 'constant', term: { for_rounds: 1 } }, acc_up: { milliPercentage: 55000, term: { for_rounds: 1 } }, eva_up: { milliPercentage: 55000, rate: 'constant', term: { for_rounds: 1 } }, damage_reduction_up: { milliPercentage: 33000, rate: 'constant', term: { for_rounds: 1 } }, all_debuff_removal: { rate: 'constant', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { atk_up: { milliPercentage: 36000, rate: 'constant', term: { for_rounds: 1 } }, acc_up: { milliPercentage: 60000, term: { for_rounds: 1 } }, eva_up: { milliPercentage: 60000, rate: 'constant', term: { for_rounds: 1 } }, damage_reduction_up: { milliPercentage: 36000, rate: 'constant', term: { for_rounds: 1 } }, all_debuff_removal: { rate: 'constant', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { atk_up: { milliPercentage: 39000, rate: 'constant', term: { for_rounds: 1 } }, acc_up: { milliPercentage: 65000, term: { for_rounds: 1 } }, eva_up: { milliPercentage: 65000, rate: 'constant', term: { for_rounds: 1 } }, damage_reduction_up: { milliPercentage: 39000, rate: 'constant', term: { for_rounds: 1 } }, all_debuff_removal: { rate: 'constant', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { atk_up: { milliPercentage: 42000, rate: 'constant', term: { for_rounds: 1 } }, acc_up: { milliPercentage: 70000, term: { for_rounds: 1 } }, eva_up: { milliPercentage: 70000, rate: 'constant', term: { for_rounds: 1 } }, damage_reduction_up: { milliPercentage: 42000, rate: 'constant', term: { for_rounds: 1 } }, all_debuff_removal: { rate: 'constant', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { atk_up: { milliPercentage: 45000, rate: 'constant', term: { for_rounds: 1 } }, acc_up: { milliPercentage: 75000, term: { for_rounds: 1 } }, eva_up: { milliPercentage: 75000, rate: 'constant', term: { for_rounds: 1 } }, damage_reduction_up: { milliPercentage: 45000, rate: 'constant', term: { for_rounds: 1 } }, all_debuff_removal: { rate: 'constant', term: 'immediate' } } }]
    ],
    effects: [
      [{ condition: { trigger: 'start_round', state: { self: { unit: 127, tagged: 'moon_light_power' } } }, details: { self: { atk_up: { milliPercentage: 15000, term: { for_rounds: 1 } }, eva_up: { milliPercentage: 25000, term: { for_rounds: 1 } }, damage_reduction_up: { milliPercentage: 15000, term: { for_rounds: 1 } }, all_debuff_removal: { term: 'immediate' } } } }],
      [{ condition: { trigger: 'start_round', state: { self: { unit: 127, tagged: 'moon_light_power' } } }, details: { self: { atk_up: { milliPercentage: 18000, term: { for_rounds: 1 } }, eva_up: { milliPercentage: 30000, term: { for_rounds: 1 } }, damage_reduction_up: { milliPercentage: 18000, term: { for_rounds: 1 } }, all_debuff_removal: { term: 'immediate' } } } }],
      [{ condition: { trigger: 'start_round', state: { self: { unit: 127, tagged: 'moon_light_power' } } }, details: { self: { atk_up: { milliPercentage: 21000, term: { for_rounds: 1 } }, eva_up: { milliPercentage: 35000, term: { for_rounds: 1 } }, damage_reduction_up: { milliPercentage: 21000, term: { for_rounds: 1 } }, all_debuff_removal: { term: 'immediate' } } } }],
      [{ condition: { trigger: 'start_round', state: { self: { unit: 127, tagged: 'moon_light_power' } } }, details: { self: { atk_up: { milliPercentage: 24000, term: { for_rounds: 1 } }, eva_up: { milliPercentage: 40000, term: { for_rounds: 1 } }, damage_reduction_up: { milliPercentage: 24000, term: { for_rounds: 1 } }, all_debuff_removal: { term: 'immediate' } } } }],
      [{ condition: { trigger: 'start_round', state: { self: { unit: 127, tagged: 'moon_light_power' } } }, details: { self: { atk_up: { milliPercentage: 27000, term: { for_rounds: 1 } }, eva_up: { milliPercentage: 45000, term: { for_rounds: 1 } }, damage_reduction_up: { milliPercentage: 27000, term: { for_rounds: 1 } }, all_debuff_removal: { term: 'immediate' } } } }],
      [{ condition: { trigger: 'start_round', state: { self: { unit: 127, tagged: 'moon_light_power' } } }, details: { self: { atk_up: { milliPercentage: 30000, term: { for_rounds: 1 } }, eva_up: { milliPercentage: 50000, term: { for_rounds: 1 } }, damage_reduction_up: { milliPercentage: 30000, term: { for_rounds: 1 } }, all_debuff_removal: { term: 'immediate' } } } }],
      [{ condition: { trigger: 'start_round', state: { self: { unit: 127, tagged: 'moon_light_power' } } }, details: { self: { atk_up: { milliPercentage: 33000, term: { for_rounds: 1 } }, eva_up: { milliPercentage: 55000, term: { for_rounds: 1 } }, damage_reduction_up: { milliPercentage: 33000, term: { for_rounds: 1 } }, all_debuff_removal: { term: 'immediate' } } } }],
      [{ condition: { trigger: 'start_round', state: { self: { unit: 127, tagged: 'moon_light_power' } } }, details: { self: { atk_up: { milliPercentage: 36000, term: { for_rounds: 1 } }, eva_up: { milliPercentage: 60000, term: { for_rounds: 1 } }, damage_reduction_up: { milliPercentage: 36000, term: { for_rounds: 1 } }, all_debuff_removal: { term: 'immediate' } } } }],
      [{ condition: { trigger: 'start_round', state: { self: { unit: 127, tagged: 'moon_light_power' } } }, details: { self: { atk_up: { milliPercentage: 39000, term: { for_rounds: 1 } }, eva_up: { milliPercentage: 65000, term: { for_rounds: 1 } }, damage_reduction_up: { milliPercentage: 39000, term: { for_rounds: 1 } }, all_debuff_removal: { term: 'immediate' } } } }],
      [{ condition: { trigger: 'start_round', state: { self: { unit: 127, tagged: 'moon_light_power' } } }, details: { self: { atk_up: { milliPercentage: 42000, term: { for_rounds: 1 } }, eva_up: { milliPercentage: 70000, term: { for_rounds: 1 } }, damage_reduction_up: { milliPercentage: 42000, term: { for_rounds: 1 } }, all_debuff_removal: { term: 'immediate' } } } }],
      [{ condition: { trigger: 'start_round', state: { self: { unit: 127, tagged: 'moon_light_power' } } }, details: { self: { atk_up: { milliPercentage: 45000, term: { for_rounds: 1 } }, eva_up: { milliPercentage: 75000, term: { for_rounds: 1 } }, damage_reduction_up: { milliPercentage: 45000, term: { for_rounds: 1 } }, all_debuff_removal: { term: 'immediate' } } } }]
    ]
  },
  crystal_ball_of_fate: {
    type: 'gear',
    id: 'crystal_ball_of_fate',
    status_effects: [
      { acc_up: { milliPercentage:  5000 }, eva_up: { milliPercentage:  5000 } },
      { acc_up: { milliPercentage:  6000 }, eva_up: { milliPercentage:  6000 } },
      { acc_up: { milliPercentage:  7000 }, eva_up: { milliPercentage:  7000 } },
      { acc_up: { milliPercentage:  8000 }, eva_up: { milliPercentage:  8000 } },
      { acc_up: { milliPercentage:  9000 }, eva_up: { milliPercentage:  9000 } },
      { acc_up: { milliPercentage: 10000 }, eva_up: { milliPercentage: 10000 } },
      { acc_up: { milliPercentage: 11000 }, eva_up: { milliPercentage: 11000 } },
      { acc_up: { milliPercentage: 12000 }, eva_up: { milliPercentage: 12000 } },
      { acc_up: { milliPercentage: 13000 }, eva_up: { milliPercentage: 13000 } },
      { acc_up: { milliPercentage: 14000 }, eva_up: { milliPercentage: 14000 } },
      { acc_up: { milliPercentage: 15000 }, eva_up: { milliPercentage: 15000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { spd_up: { milliPercentage:  5000, term: 'infinite' }, reconnaissance: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { spd_up: { milliPercentage:  6000, term: 'infinite' }, reconnaissance: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { spd_up: { milliPercentage:  7000, term: 'infinite' }, reconnaissance: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { spd_up: { milliPercentage:  8000, term: 'infinite' }, reconnaissance: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { spd_up: { milliPercentage:  9000, term: 'infinite' }, reconnaissance: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { spd_up: { milliPercentage: 10000, term: 'infinite' }, reconnaissance: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { spd_up: { milliPercentage: 11000, term: 'infinite' }, reconnaissance: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { spd_up: { milliPercentage: 12000, term: 'infinite' }, reconnaissance: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { spd_up: { milliPercentage: 13000, term: 'infinite' }, reconnaissance: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { spd_up: { milliPercentage: 14000, term: 'infinite' }, reconnaissance: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { spd_up: { milliPercentage: 15000, term: 'infinite' }, reconnaissance: { term: 'infinite' } } }]
    ]
  },
  nitro_ex_3000: {
    type: 'gear',
    id: 'nitro_ex_3000',
    status_effects: [
      { ice_resist_up: { milliPercentage: 25000 }, eva_up: { milliPercentage: 10000 }, spd_up: { microValue: 100000 } },
      { ice_resist_up: { milliPercentage: 27500 }, eva_up: { milliPercentage: 12000 }, spd_up: { microValue: 120000 } },
      { ice_resist_up: { milliPercentage: 30000 }, eva_up: { milliPercentage: 14000 }, spd_up: { microValue: 140000 } },
      { ice_resist_up: { milliPercentage: 32500 }, eva_up: { milliPercentage: 16000 }, spd_up: { microValue: 160000 } },
      { ice_resist_up: { milliPercentage: 35000 }, eva_up: { milliPercentage: 18000 }, spd_up: { microValue: 180000 } },
      { ice_resist_up: { milliPercentage: 37500 }, eva_up: { milliPercentage: 20000 }, spd_up: { microValue: 200000 } },
      { ice_resist_up: { milliPercentage: 40000 }, eva_up: { milliPercentage: 22000 }, spd_up: { microValue: 220000 } },
      { ice_resist_up: { milliPercentage: 42500 }, eva_up: { milliPercentage: 24000 }, spd_up: { microValue: 240000 } },
      { ice_resist_up: { milliPercentage: 45000 }, eva_up: { milliPercentage: 26000 }, spd_up: { microValue: 260000 } },
      { ice_resist_up: { milliPercentage: 47500 }, eva_up: { milliPercentage: 28000 }, spd_up: { microValue: 280000 } },
      { ice_resist_up: { milliPercentage: 50000 }, eva_up: { milliPercentage: 30000 }, spd_up: { microValue: 300000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_round', state: { unit: { kind: 'bioroid' } } }, details: { acc_down: { milliPercentage: 100000, rate: { milliPercentage: 100000 }, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', state: { unit: { kind: 'bioroid' } } }, details: { acc_down: { milliPercentage: 100000, rate: { milliPercentage:  90000 }, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', state: { unit: { kind: 'bioroid' } } }, details: { acc_down: { milliPercentage: 100000, rate: { milliPercentage:  80000 }, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', state: { unit: { kind: 'bioroid' } } }, details: { acc_down: { milliPercentage: 100000, rate: { milliPercentage:  70000 }, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', state: { unit: { kind: 'bioroid' } } }, details: { acc_down: { milliPercentage: 100000, rate: { milliPercentage:  60000 }, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', state: { unit: { kind: 'bioroid' } } }, details: { acc_down: { milliPercentage: 100000, rate: { milliPercentage:  50000 }, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', state: { unit: { kind: 'bioroid' } } }, details: { acc_down: { milliPercentage: 100000, rate: { milliPercentage:  40000 }, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', state: { unit: { kind: 'bioroid' } } }, details: { acc_down: { milliPercentage: 100000, rate: { milliPercentage:  30000 }, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', state: { unit: { kind: 'bioroid' } } }, details: { acc_down: { milliPercentage: 100000, rate: { milliPercentage:  20000 }, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', state: { unit: { kind: 'bioroid' } } }, details: { acc_down: { milliPercentage: 100000, rate: { milliPercentage:  10000 }, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', state: { unit: { kind: 'bioroid' } } }, details: { acc_down: { milliPercentage: 100000, rate: { milliPercentage:   3000 }, term: { for_rounds: 1 } } } }]
    ]
  },
  grand_cru_chocolate: {
    type: 'gear',
    id: 'grand_cru_chocolate',
    status_effects: [
      { atk_up: { milliValue:  50000 }, eva_up: { milliPercentage:  5000 } },
      { atk_up: { milliValue:  55000 }, eva_up: { milliPercentage:  6000 } },
      { atk_up: { milliValue:  60000 }, eva_up: { milliPercentage:  7000 } },
      { atk_up: { milliValue:  65000 }, eva_up: { milliPercentage:  8000 } },
      { atk_up: { milliValue:  70000 }, eva_up: { milliPercentage:  9000 } },
      { atk_up: { milliValue:  75000 }, eva_up: { milliPercentage: 10000 } },
      { atk_up: { milliValue:  80000 }, eva_up: { milliPercentage: 11000 } },
      { atk_up: { milliValue:  85000 }, eva_up: { milliPercentage: 12000 } },
      { atk_up: { milliValue:  90000 }, eva_up: { milliPercentage: 13000 } },
      { atk_up: { milliValue:  95000 }, eva_up: { milliPercentage: 14000 } },
      { atk_up: { milliValue: 100000 }, eva_up: { milliPercentage: 15000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_wave', state: { unit: { kind: 'bioroid' } } }, details: { ap_up: { microValue:  500000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_wave', state: { unit: { kind: 'bioroid' } } }, details: { ap_up: { microValue:  600000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_wave', state: { unit: { kind: 'bioroid' } } }, details: { ap_up: { microValue:  700000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_wave', state: { unit: { kind: 'bioroid' } } }, details: { ap_up: { microValue:  800000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_wave', state: { unit: { kind: 'bioroid' } } }, details: { ap_up: { microValue:  900000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_wave', state: { unit: { kind: 'bioroid' } } }, details: { ap_up: { microValue: 1000000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_wave', state: { unit: { kind: 'bioroid' } } }, details: { ap_up: { microValue: 1200000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_wave', state: { unit: { kind: 'bioroid' } } }, details: { ap_up: { microValue: 1400000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_wave', state: { unit: { kind: 'bioroid' } } }, details: { ap_up: { microValue: 1600000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_wave', state: { unit: { kind: 'bioroid' } } }, details: { ap_up: { microValue: 1800000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_wave', state: { unit: { kind: 'bioroid' } } }, details: { ap_up: { microValue: 2000000, term: 'immediate' } } }]
    ]
  },
  mini_hachiko: {
    type: 'gear',
    id: 'mini_hachiko',
    status_effects: [
      { hp_up: { value: 150 }, def_up: { milliValue: 30000 } },
      { hp_up: { value: 180 }, def_up: { milliValue: 33000 } },
      { hp_up: { value: 210 }, def_up: { milliValue: 36000 } },
      { hp_up: { value: 240 }, def_up: { milliValue: 39000 } },
      { hp_up: { value: 270 }, def_up: { milliValue: 42000 } },
      { hp_up: { value: 300 }, def_up: { milliValue: 45000 } },
      { hp_up: { value: 330 }, def_up: { milliValue: 48000 } },
      { hp_up: { value: 360 }, def_up: { milliValue: 51000 } },
      { hp_up: { value: 390 }, def_up: { milliValue: 54000 } },
      { hp_up: { value: 420 }, def_up: { milliValue: 57000 } },
      { hp_up: { value: 450 }, def_up: { milliValue: 60000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { battle_continuation: { value: 100, times: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { battle_continuation: { value: 150, times: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { battle_continuation: { value: 200, times: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { battle_continuation: { value: 250, times: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { battle_continuation: { value: 300, times: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { battle_continuation: { value: 350, times: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { battle_continuation: { value: 400, times: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { battle_continuation: { value: 450, times: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { battle_continuation: { value: 500, times: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { battle_continuation: { value: 550, times: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { battle_continuation: { value: 600, times: 1, term: 'infinite' } } }]
    ]
  },
  mini_lilith: {
    type: 'gear',
    id: 'mini_lilith',
    status_effects: [
      { atk_up: { milliValue: 30000 }, acc_up: { milliPercentage: 15000 } },
      { atk_up: { milliValue: 36000 }, acc_up: { milliPercentage: 16500 } },
      { atk_up: { milliValue: 42000 }, acc_up: { milliPercentage: 18000 } },
      { atk_up: { milliValue: 48000 }, acc_up: { milliPercentage: 19500 } },
      { atk_up: { milliValue: 54000 }, acc_up: { milliPercentage: 21000 } },
      { atk_up: { milliValue: 60000 }, acc_up: { milliPercentage: 22500 } },
      { atk_up: { milliValue: 66000 }, acc_up: { milliPercentage: 24000 } },
      { atk_up: { milliValue: 72000 }, acc_up: { milliPercentage: 25500 } },
      { atk_up: { milliValue: 78000 }, acc_up: { milliPercentage: 27000 } },
      { atk_up: { milliValue: 84000 }, acc_up: { milliPercentage: 28500 } },
      { atk_up: { milliValue: 90000 }, acc_up: { milliPercentage: 30000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage:   500, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage:  1000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage:  2000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage:  3000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage:  4000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage:  5000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage:  6000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage:  7000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage:  8000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage:  9000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: 10000, term: 'infinite' } } }]
    ]
  },
  mini_perrault: {
    type: 'gear',
    id: 'mini_perrault',
    status_effects: [
      { eva_up: { milliPercentage:  7000 }, acc_up: { milliPercentage: 15000 } },
      { eva_up: { milliPercentage:  8400 }, acc_up: { milliPercentage: 16500 } },
      { eva_up: { milliPercentage:  9800 }, acc_up: { milliPercentage: 18000 } },
      { eva_up: { milliPercentage: 11200 }, acc_up: { milliPercentage: 19500 } },
      { eva_up: { milliPercentage: 12600 }, acc_up: { milliPercentage: 21000 } },
      { eva_up: { milliPercentage: 14000 }, acc_up: { milliPercentage: 22500 } },
      { eva_up: { milliPercentage: 15400 }, acc_up: { milliPercentage: 24000 } },
      { eva_up: { milliPercentage: 16800 }, acc_up: { milliPercentage: 25500 } },
      { eva_up: { milliPercentage: 18200 }, acc_up: { milliPercentage: 27000 } },
      { eva_up: { milliPercentage: 19600 }, acc_up: { milliPercentage: 28500 } },
      { eva_up: { milliPercentage: 21000 }, acc_up: { milliPercentage: 30000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'use_any_active' }, details: { ap_up: { microValue:  50000, term: 'immediate' } } }],
      [{ condition: { trigger: 'use_any_active' }, details: { ap_up: { microValue: 100000, term: 'immediate' } } }],
      [{ condition: { trigger: 'use_any_active' }, details: { ap_up: { microValue: 150000, term: 'immediate' } } }],
      [{ condition: { trigger: 'use_any_active' }, details: { ap_up: { microValue: 200000, term: 'immediate' } } }],
      [{ condition: { trigger: 'use_any_active' }, details: { ap_up: { microValue: 250000, term: 'immediate' } } }],
      [{ condition: { trigger: 'use_any_active' }, details: { ap_up: { microValue: 300000, term: 'immediate' } } }],
      [{ condition: { trigger: 'use_any_active' }, details: { ap_up: { microValue: 350000, term: 'immediate' } } }],
      [{ condition: { trigger: 'use_any_active' }, details: { ap_up: { microValue: 400000, term: 'immediate' } } }],
      [{ condition: { trigger: 'use_any_active' }, details: { ap_up: { microValue: 450000, term: 'immediate' } } }],
      [{ condition: { trigger: 'use_any_active' }, details: { ap_up: { microValue: 500000, term: 'immediate' } } }],
      [{ condition: { trigger: 'use_any_active' }, details: { ap_up: { microValue: 550000, term: 'immediate' } } }]
    ]
  },
  mini_black_wyrm: {
    type: 'gear',
    id: 'mini_black_wyrm',
    exclusive: {
      role: 'defender'
    },
    status_effects: [
      { hp_up: { value: 250 } },
      { hp_up: { value: 275 } },
      { hp_up: { value: 300 } },
      { hp_up: { value: 325 } },
      { hp_up: { value: 350 } },
      { hp_up: { value: 375 } },
      { hp_up: { value: 400 } },
      { hp_up: { value: 425 } },
      { hp_up: { value: 450 } },
      { hp_up: { value: 475 } },
      { hp_up: { value: 500 } }
    ],
    effects: [
      [{ condition: { trigger: 'be_hit', state: { target: { status_greater_than_self: { status: 'spd' } } } }, target: { kind: 'enemy' }, details: { target: { fire_resist_down: { milliPercentage: 10000, term: { for_rounds: 1 }, max_stack: 1 } } } }],
      [{ condition: { trigger: 'be_hit', state: { target: { status_greater_than_self: { status: 'spd' } } } }, target: { kind: 'enemy' }, details: { target: { fire_resist_down: { milliPercentage: 11000, term: { for_rounds: 1 }, max_stack: 1 } } } }],
      [{ condition: { trigger: 'be_hit', state: { target: { status_greater_than_self: { status: 'spd' } } } }, target: { kind: 'enemy' }, details: { target: { fire_resist_down: { milliPercentage: 12000, term: { for_rounds: 1 }, max_stack: 1 } } } }],
      [{ condition: { trigger: 'be_hit', state: { target: { status_greater_than_self: { status: 'spd' } } } }, target: { kind: 'enemy' }, details: { target: { fire_resist_down: { milliPercentage: 13000, term: { for_rounds: 1 }, max_stack: 1 } } } }],
      [{ condition: { trigger: 'be_hit', state: { target: { status_greater_than_self: { status: 'spd' } } } }, target: { kind: 'enemy' }, details: { target: { fire_resist_down: { milliPercentage: 14000, term: { for_rounds: 1 }, max_stack: 1 } } } }],
      [{ condition: { trigger: 'be_hit', state: { target: { status_greater_than_self: { status: 'spd' } } } }, target: { kind: 'enemy' }, details: { target: { fire_resist_down: { milliPercentage: 15000, term: { for_rounds: 1 }, max_stack: 1 } } } }],
      [{ condition: { trigger: 'be_hit', state: { target: { status_greater_than_self: { status: 'spd' } } } }, target: { kind: 'enemy' }, details: { target: { fire_resist_down: { milliPercentage: 16000, term: { for_rounds: 1 }, max_stack: 1 } } } }],
      [{ condition: { trigger: 'be_hit', state: { target: { status_greater_than_self: { status: 'spd' } } } }, target: { kind: 'enemy' }, details: { target: { fire_resist_down: { milliPercentage: 17000, term: { for_rounds: 1 }, max_stack: 1 } } } }],
      [{ condition: { trigger: 'be_hit', state: { target: { status_greater_than_self: { status: 'spd' } } } }, target: { kind: 'enemy' }, details: { target: { fire_resist_down: { milliPercentage: 18000, term: { for_rounds: 1 }, max_stack: 1 } } } }],
      [{ condition: { trigger: 'be_hit', state: { target: { status_greater_than_self: { status: 'spd' } } } }, target: { kind: 'enemy' }, details: { target: { fire_resist_down: { milliPercentage: 19000, term: { for_rounds: 1 }, max_stack: 1 } } } }],
      [{ condition: { trigger: 'be_hit', state: { target: { status_greater_than_self: { status: 'spd' } } } }, target: { kind: 'enemy' }, details: { target: { fire_resist_down: { milliPercentage: 20000, term: { for_rounds: 1 }, max_stack: 1 } } } }]
    ]
  },
  mini_fenrir: {
    type: 'gear',
    id: 'mini_fenrir',
    status_effects: [
      { acc_up: { milliPercentage:  5000 } },
      { acc_up: { milliPercentage:  9000 } },
      { acc_up: { milliPercentage: 13000 } },
      { acc_up: { milliPercentage: 17000 } },
      { acc_up: { milliPercentage: 21000 } },
      { acc_up: { milliPercentage: 25000 } },
      { acc_up: { milliPercentage: 29000 } },
      { acc_up: { milliPercentage: 33000 } },
      { acc_up: { milliPercentage: 37000 } },
      { acc_up: { milliPercentage: 41000 } },
      { acc_up: { milliPercentage: 45000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'use_any_active' }, details: { ap_up: { microValue:  500000, term: 'immediate' } } }],
      [{ condition: { trigger: 'use_any_active' }, details: { ap_up: { microValue:  550000, term: 'immediate' } } }],
      [{ condition: { trigger: 'use_any_active' }, details: { ap_up: { microValue:  600000, term: 'immediate' } } }],
      [{ condition: { trigger: 'use_any_active' }, details: { ap_up: { microValue:  650000, term: 'immediate' } } }],
      [{ condition: { trigger: 'use_any_active' }, details: { ap_up: { microValue:  700000, term: 'immediate' } } }],
      [{ condition: { trigger: 'use_any_active' }, details: { ap_up: { microValue:  750000, term: 'immediate' } } }],
      [{ condition: { trigger: 'use_any_active' }, details: { ap_up: { microValue:  800000, term: 'immediate' } } }],
      [{ condition: { trigger: 'use_any_active' }, details: { ap_up: { microValue:  850000, term: 'immediate' } } }],
      [{ condition: { trigger: 'use_any_active' }, details: { ap_up: { microValue:  900000, term: 'immediate' } } }],
      [{ condition: { trigger: 'use_any_active' }, details: { ap_up: { microValue:  950000, term: 'immediate' } } }],
      [{ condition: { trigger: 'use_any_active' }, details: { ap_up: { microValue: 1000000, term: 'immediate' } } }]
    ]
  },
  mini_frigga: {
    type: 'gear',
    id: 'mini_frigga',
    exclusive: {
      role: 'defender'
    },
    status_effects: [
      { hp_up: { value:  500 } },
      { hp_up: { value:  550 } },
      { hp_up: { value:  600 } },
      { hp_up: { value:  650 } },
      { hp_up: { value:  700 } },
      { hp_up: { value:  750 } },
      { hp_up: { value:  800 } },
      { hp_up: { value:  850 } },
      { hp_up: { value:  900 } },
      { hp_up: { value:  950 } },
      { hp_up: { value: 1000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage:   500, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage:  1000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage:  2000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage:  3000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage:  4000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage:  5000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage:  6000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage:  7000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage:  8000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage:  9000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: 10000, term: 'infinite' } } }]
    ]
  },
  mini_hirume: {
    type: 'gear',
    id: 'mini_hirume',
    status_effects: [
      { eva_up: { milliPercentage: 10000 } },
      { eva_up: { milliPercentage: 12000 } },
      { eva_up: { milliPercentage: 14000 } },
      { eva_up: { milliPercentage: 16000 } },
      { eva_up: { milliPercentage: 18000 } },
      { eva_up: { milliPercentage: 20000 } },
      { eva_up: { milliPercentage: 22000 } },
      { eva_up: { milliPercentage: 24000 } },
      { eva_up: { milliPercentage: 26000 } },
      { eva_up: { milliPercentage: 28000 } },
      { eva_up: { milliPercentage: 30000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { reconnaissance: { term: 'infinite' }, spd_up: { milliPercentage:  5000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { reconnaissance: { term: 'infinite' }, spd_up: { milliPercentage:  5500, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { reconnaissance: { term: 'infinite' }, spd_up: { milliPercentage:  6000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { reconnaissance: { term: 'infinite' }, spd_up: { milliPercentage:  6500, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { reconnaissance: { term: 'infinite' }, spd_up: { milliPercentage:  7000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { reconnaissance: { term: 'infinite' }, spd_up: { milliPercentage:  7500, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { reconnaissance: { term: 'infinite' }, spd_up: { milliPercentage:  8000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { reconnaissance: { term: 'infinite' }, spd_up: { milliPercentage:  8500, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { reconnaissance: { term: 'infinite' }, spd_up: { milliPercentage:  9000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { reconnaissance: { term: 'infinite' }, spd_up: { milliPercentage:  9500, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { reconnaissance: { term: 'infinite' }, spd_up: { milliPercentage: 10000, term: 'infinite' } } }]
    ]
  },
  mini_poi: {
    type: 'gear',
    id: 'mini_poi',
    exclusive: {
      role: 'attacker'
    },
    status_effects: [
      { cri_up: { milliPercentage: 10000 } },
      { cri_up: { milliPercentage: 11000 } },
      { cri_up: { milliPercentage: 12000 } },
      { cri_up: { milliPercentage: 13000 } },
      { cri_up: { milliPercentage: 14000 } },
      { cri_up: { milliPercentage: 15000 } },
      { cri_up: { milliPercentage: 16000 } },
      { cri_up: { milliPercentage: 17000 } },
      { cri_up: { milliPercentage: 18000 } },
      { cri_up: { milliPercentage: 19000 } },
      { cri_up: { milliPercentage: 20000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: 16000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: 18000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: 20000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: 22000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: 24000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: 26000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: 28000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: 30000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: 32000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: 34000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: 36000, term: 'infinite' } } }]
    ]
  },
  mini_snow_feather: {
    type: 'gear',
    id: 'mini_snow_feather',
    exclusive: {
      role: 'defender'
    },
    status_effects: [
      { eva_up: { milliPercentage: 10000 } },
      { eva_up: { milliPercentage: 15000 } },
      { eva_up: { milliPercentage: 20000 } },
      { eva_up: { milliPercentage: 25000 } },
      { eva_up: { milliPercentage: 30000 } },
      { eva_up: { milliPercentage: 35000 } },
      { eva_up: { milliPercentage: 40000 } },
      { eva_up: { milliPercentage: 45000 } },
      { eva_up: { milliPercentage: 50000 } },
      { eva_up: { milliPercentage: 55000 } },
      { eva_up: { milliPercentage: 60000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { minimize_damage: { term: 'infinite', times: 1 } } }],
      [{ condition: { trigger: 'start_wave' }, details: { minimize_damage: { term: 'infinite', times: 1 } } }],
      [{ condition: { trigger: 'start_wave' }, details: { minimize_damage: { term: 'infinite', times: 1 } } }],
      [{ condition: { trigger: 'start_wave' }, details: { minimize_damage: { term: 'infinite', times: 1 } } }],
      [{ condition: { trigger: 'start_wave' }, details: { minimize_damage: { term: 'infinite', times: 1 } } }],
      [{ condition: { trigger: 'start_wave' }, details: { minimize_damage: { term: 'infinite', times: 1 } } }],
      [{ condition: { trigger: 'start_wave' }, details: { minimize_damage: { term: 'infinite', times: 1 } } }],
      [{ condition: { trigger: 'start_wave' }, details: { minimize_damage: { term: 'infinite', times: 1 } } }],
      [{ condition: { trigger: 'start_wave' }, details: { minimize_damage: { term: 'infinite', times: 1 } } }],
      [{ condition: { trigger: 'start_wave' }, details: { minimize_damage: { term: 'infinite', times: 1 } } }],
      [{ condition: { trigger: 'start_wave' }, details: { minimize_damage: { term: 'infinite', times: 1 } } }]
    ]
  },
  enhanced_observation_gear: {
    type: 'gear',
    id: 'enhanced_observation_gear',
    status_effects: [
      { acc_up: { milliPercentage: 15000 }, cri_up: { milliPercentage:  5000 } },
      { acc_up: { milliPercentage: 18000 }, cri_up: { milliPercentage:  6000 } },
      { acc_up: { milliPercentage: 21000 }, cri_up: { milliPercentage:  7000 } },
      { acc_up: { milliPercentage: 24000 }, cri_up: { milliPercentage:  8000 } },
      { acc_up: { milliPercentage: 27000 }, cri_up: { milliPercentage:  9000 } },
      { acc_up: { milliPercentage: 30000 }, cri_up: { milliPercentage: 10000 } },
      { acc_up: { milliPercentage: 33000 }, cri_up: { milliPercentage: 11000 } },
      { acc_up: { milliPercentage: 36000 }, cri_up: { milliPercentage: 12000 } },
      { acc_up: { milliPercentage: 39000 }, cri_up: { milliPercentage: 13000 } },
      { acc_up: { milliPercentage: 42000 }, cri_up: { milliPercentage: 14000 } },
      { acc_up: { milliPercentage: 45000 }, cri_up: { milliPercentage: 15000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_round' }, details: { range_up: { value: 1, term: { for_rounds: 1 } }, debuff_removal: { effects: ['acc_down', 'range_down'], rate: { milliPercentage:  50000 }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { range_up: { value: 1, term: { for_rounds: 1 } }, debuff_removal: { effects: ['acc_down', 'range_down'], rate: { milliPercentage:  55000 }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { range_up: { value: 1, term: { for_rounds: 1 } }, debuff_removal: { effects: ['acc_down', 'range_down'], rate: { milliPercentage:  60000 }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { range_up: { value: 1, term: { for_rounds: 1 } }, debuff_removal: { effects: ['acc_down', 'range_down'], rate: { milliPercentage:  65000 }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { range_up: { value: 1, term: { for_rounds: 1 } }, debuff_removal: { effects: ['acc_down', 'range_down'], rate: { milliPercentage:  70000 }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { range_up: { value: 1, term: { for_rounds: 1 } }, debuff_removal: { effects: ['acc_down', 'range_down'], rate: { milliPercentage:  75000 }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { range_up: { value: 1, term: { for_rounds: 1 } }, debuff_removal: { effects: ['acc_down', 'range_down'], rate: { milliPercentage:  80000 }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { range_up: { value: 1, term: { for_rounds: 1 } }, debuff_removal: { effects: ['acc_down', 'range_down'], rate: { milliPercentage:  85000 }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { range_up: { value: 1, term: { for_rounds: 1 } }, debuff_removal: { effects: ['acc_down', 'range_down'], rate: { milliPercentage:  90000 }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { range_up: { value: 1, term: { for_rounds: 1 } }, debuff_removal: { effects: ['acc_down', 'range_down'], rate: { milliPercentage:  95000 }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { range_up: { value: 1, term: { for_rounds: 1 } }, debuff_removal: { effects: ['acc_down', 'range_down'], rate: { milliPercentage: 100000 }, term: 'immediate' } } }],
    ]
  },
  high_power_generator: {
    type: 'gear',
    id: 'high_power_generator',
    status_effects: [
      { atk_up: { milliValue: 25000 } },
      { atk_up: { milliValue: 30000 } },
      { atk_up: { milliValue: 35000 } },
      { atk_up: { milliValue: 40000 } },
      { atk_up: { milliValue: 45000 } },
      { atk_up: { milliValue: 50000 } },
      { atk_up: { milliValue: 55000 } },
      { atk_up: { milliValue: 60000 } },
      { atk_up: { milliValue: 65000 } },
      { atk_up: { milliValue: 70000 } },
      { atk_up: { milliValue: 75000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue:  440000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue:  480000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue:  520000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue:  560000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue:  600000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue:  640000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue:  680000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue:  720000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue:  800000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue:  900000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue: 1000000, term: 'immediate' } } }]
    ]
  },
  o_d_amplifier: {
    type: 'gear',
    id: 'o_d_amplifier',
    equipment_effects: [
      [{ condition: { trigger: 'start_round', state: { unit: { kind: 'bioroid' }, hp_greater_or_equal: 25 } }, details: { atk_up: { milliPercentage: 15000, term: { for_rounds: 1 } }, fixed_damage_over_time: { value: 525, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', state: { unit: { kind: 'bioroid' }, hp_greater_or_equal: 25 } }, details: { atk_up: { milliPercentage: 16500, term: { for_rounds: 1 } }, fixed_damage_over_time: { value: 525, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', state: { unit: { kind: 'bioroid' }, hp_greater_or_equal: 25 } }, details: { atk_up: { milliPercentage: 18000, term: { for_rounds: 1 } }, fixed_damage_over_time: { value: 525, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', state: { unit: { kind: 'bioroid' }, hp_greater_or_equal: 25 } }, details: { atk_up: { milliPercentage: 19500, term: { for_rounds: 1 } }, fixed_damage_over_time: { value: 525, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', state: { unit: { kind: 'bioroid' }, hp_greater_or_equal: 25 } }, details: { atk_up: { milliPercentage: 21000, term: { for_rounds: 1 } }, fixed_damage_over_time: { value: 525, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', state: { unit: { kind: 'bioroid' }, hp_greater_or_equal: 25 } }, details: { atk_up: { milliPercentage: 22500, term: { for_rounds: 1 } }, fixed_damage_over_time: { value: 525, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', state: { unit: { kind: 'bioroid' }, hp_greater_or_equal: 25 } }, details: { atk_up: { milliPercentage: 24000, term: { for_rounds: 1 } }, fixed_damage_over_time: { value: 525, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', state: { unit: { kind: 'bioroid' }, hp_greater_or_equal: 25 } }, details: { atk_up: { milliPercentage: 25500, term: { for_rounds: 1 } }, fixed_damage_over_time: { value: 525, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', state: { unit: { kind: 'bioroid' }, hp_greater_or_equal: 25 } }, details: { atk_up: { milliPercentage: 27000, term: { for_rounds: 1 } }, fixed_damage_over_time: { value: 525, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', state: { unit: { kind: 'bioroid' }, hp_greater_or_equal: 25 } }, details: { atk_up: { milliPercentage: 28500, term: { for_rounds: 1 } }, fixed_damage_over_time: { value: 525, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round', state: { unit: { kind: 'bioroid' }, hp_greater_or_equal: 25 } }, details: { atk_up: { milliPercentage: 30000, term: { for_rounds: 1 } }, fixed_damage_over_time: { value: 525, term: { for_rounds: 1 } } } }]
    ]
  },
  precise_observation_gear: {
    type: 'gear',
    id: 'precise_observation_gear',
    equipment_effects: [
      [{ condition: { trigger: 'start_round' }, details: { range_up: { value: 2, term: { for_rounds: 1 } }, debuff_removal: { effect: 'range_down', rate: { milliPercentage:  50000 }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { range_up: { value: 2, term: { for_rounds: 1 } }, debuff_removal: { effect: 'range_down', rate: { milliPercentage:  55000 }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { range_up: { value: 2, term: { for_rounds: 1 } }, debuff_removal: { effect: 'range_down', rate: { milliPercentage:  60000 }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { range_up: { value: 2, term: { for_rounds: 1 } }, debuff_removal: { effect: 'range_down', rate: { milliPercentage:  65000 }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { range_up: { value: 2, term: { for_rounds: 1 } }, debuff_removal: { effect: 'range_down', rate: { milliPercentage:  70000 }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { range_up: { value: 2, term: { for_rounds: 1 } }, debuff_removal: { effect: 'range_down', rate: { milliPercentage:  75000 }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { range_up: { value: 2, term: { for_rounds: 1 } }, debuff_removal: { effect: 'range_down', rate: { milliPercentage:  80000 }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { range_up: { value: 2, term: { for_rounds: 1 } }, debuff_removal: { effect: 'range_down', rate: { milliPercentage:  85000 }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { range_up: { value: 2, term: { for_rounds: 1 } }, debuff_removal: { effect: 'range_down', rate: { milliPercentage:  90000 }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { range_up: { value: 2, term: { for_rounds: 1 } }, debuff_removal: { effect: 'range_down', rate: { milliPercentage:  95000 }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { range_up: { value: 2, term: { for_rounds: 1 } }, debuff_removal: { effect: 'range_down', rate: { milliPercentage: 100000 }, term: 'immediate' } } }]
    ]
  },
  enhanced_ultra_precise_scope: {
    type: 'gear',
    id: 'enhanced_ultra_precise_scope',
    status_effects: [
      { acc_up: { milliPercentage: 40000 }, cri_up: { milliPercentage: 12500 } },
      { acc_up: { milliPercentage: 44000 }, cri_up: { milliPercentage: 13750 } },
      { acc_up: { milliPercentage: 48000 }, cri_up: { milliPercentage: 15000 } },
      { acc_up: { milliPercentage: 52000 }, cri_up: { milliPercentage: 16250 } },
      { acc_up: { milliPercentage: 56000 }, cri_up: { milliPercentage: 17500 } },
      { acc_up: { milliPercentage: 60000 }, cri_up: { milliPercentage: 18750 } },
      { acc_up: { milliPercentage: 64000 }, cri_up: { milliPercentage: 20000 } },
      { acc_up: { milliPercentage: 68000 }, cri_up: { milliPercentage: 21250 } },
      { acc_up: { milliPercentage: 72000 }, cri_up: { milliPercentage: 22500 } },
      { acc_up: { milliPercentage: 76000 }, cri_up: { milliPercentage: 23750 } },
      { acc_up: { milliPercentage: 80000 }, cri_up: { milliPercentage: 25000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_round' }, details: { debuff_removal: { effect: 'acc_down', rate: { milliPercentage:  50000 }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { debuff_removal: { effect: 'acc_down', rate: { milliPercentage:  55000 }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { debuff_removal: { effect: 'acc_down', rate: { milliPercentage:  60000 }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { debuff_removal: { effect: 'acc_down', rate: { milliPercentage:  65000 }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { debuff_removal: { effect: 'acc_down', rate: { milliPercentage:  70000 }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { debuff_removal: { effect: 'acc_down', rate: { milliPercentage:  75000 }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { debuff_removal: { effect: 'acc_down', rate: { milliPercentage:  80000 }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { debuff_removal: { effect: 'acc_down', rate: { milliPercentage:  85000 }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { debuff_removal: { effect: 'acc_down', rate: { milliPercentage:  90000 }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { debuff_removal: { effect: 'acc_down', rate: { milliPercentage:  95000 }, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { debuff_removal: { effect: 'acc_down', rate: { milliPercentage: 100000 }, term: 'immediate' } } }]
    ]
  },
  enhanced_nitro_ex_3500: {
    type: 'gear',
    id: 'enhanced_nitro_ex_3500',
    status_effects: [
      { eva_up: { milliPercentage: 18000 }, spd_up: { microValue: 200000 }, ice_resist_up: { milliPercentage: 30000 } },
      { eva_up: { milliPercentage: 19800 }, spd_up: { microValue: 220000 }, ice_resist_up: { milliPercentage: 33000 } },
      { eva_up: { milliPercentage: 21600 }, spd_up: { microValue: 240000 }, ice_resist_up: { milliPercentage: 36000 } },
      { eva_up: { milliPercentage: 23400 }, spd_up: { microValue: 260000 }, ice_resist_up: { milliPercentage: 39000 } },
      { eva_up: { milliPercentage: 25200 }, spd_up: { microValue: 280000 }, ice_resist_up: { milliPercentage: 42000 } },
      { eva_up: { milliPercentage: 27000 }, spd_up: { microValue: 300000 }, ice_resist_up: { milliPercentage: 45000 } },
      { eva_up: { milliPercentage: 28800 }, spd_up: { microValue: 320000 }, ice_resist_up: { milliPercentage: 48000 } },
      { eva_up: { milliPercentage: 30600 }, spd_up: { microValue: 340000 }, ice_resist_up: { milliPercentage: 51000 } },
      { eva_up: { milliPercentage: 32400 }, spd_up: { microValue: 360000 }, ice_resist_up: { milliPercentage: 54000 } },
      { eva_up: { milliPercentage: 34200 }, spd_up: { microValue: 380000 }, ice_resist_up: { milliPercentage: 57000 } },
      { eva_up: { milliPercentage: 36000 }, spd_up: { microValue: 400000 }, ice_resist_up: { milliPercentage: 60000 } }
    ]
  },
  enhanced_energy_shield: {
    type: 'gear',
    id: 'enhanced_energy_shield',
    equipment_effects: [
      [{ condition: { trigger: 'start_round' }, details: { barrier: { value: 400, term: { for_rounds: 1 } }, spd_down: { milliPercentage: 10000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { barrier: { value: 420, term: { for_rounds: 1 } }, spd_down: { milliPercentage: 11000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { barrier: { value: 450, term: { for_rounds: 1 } }, spd_down: { milliPercentage: 12000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { barrier: { value: 480, term: { for_rounds: 1 } }, spd_down: { milliPercentage: 13000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { barrier: { value: 520, term: { for_rounds: 1 } }, spd_down: { milliPercentage: 14000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { barrier: { value: 560, term: { for_rounds: 1 } }, spd_down: { milliPercentage: 15000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { barrier: { value: 600, term: { for_rounds: 1 } }, spd_down: { milliPercentage: 16000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { barrier: { value: 650, term: { for_rounds: 1 } }, spd_down: { milliPercentage: 17000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { barrier: { value: 700, term: { for_rounds: 1 } }, spd_down: { milliPercentage: 18000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { barrier: { value: 750, term: { for_rounds: 1 } }, spd_down: { milliPercentage: 19000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { barrier: { value: 800, term: { for_rounds: 1 } }, spd_down: { milliPercentage: 20000, term: { for_rounds: 1 } } } }]
    ]
  },
  enhanced_output_limit_release_device: {
    type: 'gear',
    id: 'enhanced_output_limit_release_device',
    equipment_effects: [
      [{ condition: { trigger: 'start_wave', state: { unit: { kind: 'ags' } } }, details: { atk_up: { milliPercentage: 21500, term: 'infinite' }, spd_up: { milliPercentage: 15000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave', state: { unit: { kind: 'ags' } } }, details: { atk_up: { milliPercentage: 21500, term: 'infinite' }, spd_up: { milliPercentage: 15000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave', state: { unit: { kind: 'ags' } } }, details: { atk_up: { milliPercentage: 23000, term: 'infinite' }, spd_up: { milliPercentage: 16000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave', state: { unit: { kind: 'ags' } } }, details: { atk_up: { milliPercentage: 24500, term: 'infinite' }, spd_up: { milliPercentage: 17000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave', state: { unit: { kind: 'ags' } } }, details: { atk_up: { milliPercentage: 26000, term: 'infinite' }, spd_up: { milliPercentage: 18000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave', state: { unit: { kind: 'ags' } } }, details: { atk_up: { milliPercentage: 27500, term: 'infinite' }, spd_up: { milliPercentage: 19000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave', state: { unit: { kind: 'ags' } } }, details: { atk_up: { milliPercentage: 29000, term: 'infinite' }, spd_up: { milliPercentage: 20000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave', state: { unit: { kind: 'ags' } } }, details: { atk_up: { milliPercentage: 30500, term: 'infinite' }, spd_up: { milliPercentage: 21000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave', state: { unit: { kind: 'ags' } } }, details: { atk_up: { milliPercentage: 32000, term: 'infinite' }, spd_up: { milliPercentage: 22000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave', state: { unit: { kind: 'ags' } } }, details: { atk_up: { milliPercentage: 33500, term: 'infinite' }, spd_up: { milliPercentage: 23000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave', state: { unit: { kind: 'ags' } } }, details: { atk_up: { milliPercentage: 35000, term: 'infinite' }, spd_up: { milliPercentage: 25000, term: 'infinite' } } }]
    ]
  },
  application_command_protocol: {
    type: 'gear',
    id: 'application_command_protocol',
    exclusive: {
      type: 'light'
    },
    status_effects: [
      { acc_up: { milliPercentage: 15000 } },
      { acc_up: { milliPercentage: 18000 } },
      { acc_up: { milliPercentage: 21000 } },
      { acc_up: { milliPercentage: 24000 } },
      { acc_up: { milliPercentage: 27000 } },
      { acc_up: { milliPercentage: 30000 } },
      { acc_up: { milliPercentage: 33000 } },
      { acc_up: { milliPercentage: 36000 } },
      { acc_up: { milliPercentage: 39000 } },
      { acc_up: { milliPercentage: 42000 } },
      { acc_up: { milliPercentage: 45000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_round' }, details: { range_down_active_1: { term: { for_rounds: 1 } }, range_up_active_2: { value: 1, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { range_down_active_1: { term: { for_rounds: 1 } }, range_up_active_2: { value: 1, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { range_down_active_1: { term: { for_rounds: 1 } }, range_up_active_2: { value: 1, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { range_down_active_1: { term: { for_rounds: 1 } }, range_up_active_2: { value: 1, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { range_down_active_1: { term: { for_rounds: 1 } }, range_up_active_2: { value: 1, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { range_down_active_1: { term: { for_rounds: 1 } }, range_up_active_2: { value: 1, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { range_down_active_1: { term: { for_rounds: 1 } }, range_up_active_2: { value: 1, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { range_down_active_1: { term: { for_rounds: 1 } }, range_up_active_2: { value: 1, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { range_down_active_1: { term: { for_rounds: 1 } }, range_up_active_2: { value: 1, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { range_down_active_1: { term: { for_rounds: 1 } }, range_up_active_2: { value: 1, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { range_down_active_1: { term: { for_rounds: 1 } }, range_up_active_2: { value: 1, term: { for_rounds: 1 } } } }]
    ]
  },
  prototype_telescopic_sight: {
    type: 'gear',
    id: 'prototype_telescopic_sight',
    exclusive: {
      role: 'attacker'
    },
    equipment_effects: [
      [{ condition: { trigger: 'start_wave', state: { grid: 'back_line' } }, details: { acc_up: { milliPercentage:   50000, term: { for_rounds: 2 } }, cri_up: { milliPercentage:  9500, term: { for_rounds: 99 } }, prevents_effect: { effect: 'acc_down', term: { for_rounds: 2 } } } }],
      [{ condition: { trigger: 'start_wave', state: { grid: 'back_line' } }, details: { acc_up: { milliPercentage:  100000, term: { for_rounds: 2 } }, cri_up: { milliPercentage: 10000, term: { for_rounds: 99 } }, prevents_effect: { effect: 'acc_down', term: { for_rounds: 2 } } } }],
      [{ condition: { trigger: 'start_wave', state: { grid: 'back_line' } }, details: { acc_up: { milliPercentage:  150000, term: { for_rounds: 2 } }, cri_up: { milliPercentage: 11000, term: { for_rounds: 99 } }, prevents_effect: { effect: 'acc_down', term: { for_rounds: 2 } } } }],
      [{ condition: { trigger: 'start_wave', state: { grid: 'back_line' } }, details: { acc_up: { milliPercentage:  200000, term: { for_rounds: 2 } }, cri_up: { milliPercentage: 12000, term: { for_rounds: 99 } }, prevents_effect: { effect: 'acc_down', term: { for_rounds: 2 } } } }],
      [{ condition: { trigger: 'start_wave', state: { grid: 'back_line' } }, details: { acc_up: { milliPercentage:  250000, term: { for_rounds: 2 } }, cri_up: { milliPercentage: 13000, term: { for_rounds: 99 } }, prevents_effect: { effect: 'acc_down', term: { for_rounds: 2 } } } }],
      [{ condition: { trigger: 'start_wave', state: { grid: 'back_line' } }, details: { acc_up: { milliPercentage:  300000, term: { for_rounds: 2 } }, cri_up: { milliPercentage: 14000, term: { for_rounds: 99 } }, prevents_effect: { effect: 'acc_down', term: { for_rounds: 2 } } } }],
      [{ condition: { trigger: 'start_wave', state: { grid: 'back_line' } }, details: { acc_up: { milliPercentage:  400000, term: { for_rounds: 2 } }, cri_up: { milliPercentage: 16000, term: { for_rounds: 99 } }, prevents_effect: { effect: 'acc_down', term: { for_rounds: 2 } } } }],
      [{ condition: { trigger: 'start_wave', state: { grid: 'back_line' } }, details: { acc_up: { milliPercentage:  500000, term: { for_rounds: 2 } }, cri_up: { milliPercentage: 18000, term: { for_rounds: 99 } }, prevents_effect: { effect: 'acc_down', term: { for_rounds: 2 } } } }],
      [{ condition: { trigger: 'start_wave', state: { grid: 'back_line' } }, details: { acc_up: { milliPercentage:  600000, term: { for_rounds: 2 } }, cri_up: { milliPercentage: 20000, term: { for_rounds: 99 } }, prevents_effect: { effect: 'acc_down', term: { for_rounds: 2 } } } }],
      [{ condition: { trigger: 'start_wave', state: { grid: 'back_line' } }, details: { acc_up: { milliPercentage:  800000, term: { for_rounds: 2 } }, cri_up: { milliPercentage: 22000, term: { for_rounds: 99 } }, prevents_effect: { effect: 'acc_down', term: { for_rounds: 2 } } } }],
      [{ condition: { trigger: 'start_wave', state: { grid: 'back_line' } }, details: { acc_up: { milliPercentage: 1000000, term: { for_rounds: 2 } }, cri_up: { milliPercentage: 24000, term: { for_rounds: 99 } }, prevents_effect: { effect: 'acc_down', term: { for_rounds: 2 } } } }]
    ]
  },
  forced_combat_support_device: {
    type: 'gear',
    id: 'forced_combat_support_device',
    status_effects: [
      { spd_up: { microValue: 100000 } },
      { spd_up: { microValue: 110000 } },
      { spd_up: { microValue: 120000 } },
      { spd_up: { microValue: 130000 } },
      { spd_up: { microValue: 140000 } },
      { spd_up: { microValue: 150000 } },
      { spd_up: { microValue: 200000 } },
      { spd_up: { microValue: 250000 } },
      { spd_up: { microValue: 300000 } },
      { spd_up: { microValue: 400000 } },
      { spd_up: { microValue: 550000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { atk_down: { milliPercentage: 20000, term: 'infinite' }, action_count_up: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_down: { milliPercentage: 19000, term: 'infinite' }, action_count_up: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_down: { milliPercentage: 18000, term: 'infinite' }, action_count_up: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_down: { milliPercentage: 17000, term: 'infinite' }, action_count_up: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_down: { milliPercentage: 16000, term: 'infinite' }, action_count_up: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_down: { milliPercentage: 15000, term: 'infinite' }, action_count_up: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_down: { milliPercentage: 14000, term: 'infinite' }, action_count_up: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_down: { milliPercentage: 13000, term: 'infinite' }, action_count_up: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_down: { milliPercentage: 12000, term: 'infinite' }, action_count_up: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_down: { milliPercentage: 11000, term: 'infinite' }, action_count_up: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_down: { milliPercentage: 10000, term: 'infinite' }, action_count_up: { term: 'infinite' } } }]
    ]
  },
  spike_shield: {
    type: 'gear',
    id: 'spike_shield',
    exclusive: {
      role: 'defender'
    },
    status_effects: [
      { hp_up: { value:  200 }, def_up: { milliValue:  50000 } },
      { hp_up: { value:  250 }, def_up: { milliValue:  55000 } },
      { hp_up: { value:  300 }, def_up: { milliValue:  60000 } },
      { hp_up: { value:  350 }, def_up: { milliValue:  65000 } },
      { hp_up: { value:  400 }, def_up: { milliValue:  70000 } },
      { hp_up: { value:  450 }, def_up: { milliValue:  75000 } },
      { hp_up: { value:  500 }, def_up: { milliValue:  80000 } },
      { hp_up: { value:  600 }, def_up: { milliValue:  90000 } },
      { hp_up: { value:  700 }, def_up: { milliValue: 100000 } },
      { hp_up: { value:  800 }, def_up: { milliValue: 110000 } },
      { hp_up: { value: 1000 }, def_up: { milliValue: 120000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { damage_multiplier_up_by_status: { status: 'def', milliPercentage:  300, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_multiplier_up_by_status: { status: 'def', milliPercentage:  600, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_multiplier_up_by_status: { status: 'def', milliPercentage:  900, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_multiplier_up_by_status: { status: 'def', milliPercentage: 1200, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_multiplier_up_by_status: { status: 'def', milliPercentage: 1500, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_multiplier_up_by_status: { status: 'def', milliPercentage: 1800, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_multiplier_up_by_status: { status: 'def', milliPercentage: 2100, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_multiplier_up_by_status: { status: 'def', milliPercentage: 2500, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_multiplier_up_by_status: { status: 'def', milliPercentage: 3000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_multiplier_up_by_status: { status: 'def', milliPercentage: 3500, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_multiplier_up_by_status: { status: 'def', milliPercentage: 4000, term: 'infinite' } } }]
    ]
  },
  super_heavy_composite_armor: {
    type: 'gear',
    id: 'super_heavy_composite_armor',
    exclusive: {
      role: 'defender'
    },
    status_effects: [
      { hp_up: { value:  200 }, def_up: { milliValue:  30000 } },
      { hp_up: { value:  250 }, def_up: { milliValue:  40000 } },
      { hp_up: { value:  300 }, def_up: { milliValue:  50000 } },
      { hp_up: { value:  350 }, def_up: { milliValue:  60000 } },
      { hp_up: { value:  400 }, def_up: { milliValue:  70000 } },
      { hp_up: { value:  450 }, def_up: { milliValue:  80000 } },
      { hp_up: { value:  500 }, def_up: { milliValue: 100000 } },
      { hp_up: { value:  600 }, def_up: { milliValue: 110000 } },
      { hp_up: { value:  700 }, def_up: { milliValue: 120000 } },
      { hp_up: { value:  800 }, def_up: { milliValue: 130000 } },
      { hp_up: { value: 1000 }, def_up: { milliValue: 150000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_round' }, details: { immovable: { term: { for_rounds: 1 } }, prevents_effect: { effects: ['push', 'pull'], term: { for_rounds: 1 } }, spd_down: { milliPercentage: 30000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { immovable: { term: { for_rounds: 1 } }, prevents_effect: { effects: ['push', 'pull'], term: { for_rounds: 1 } }, spd_down: { milliPercentage: 28500, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { immovable: { term: { for_rounds: 1 } }, prevents_effect: { effects: ['push', 'pull'], term: { for_rounds: 1 } }, spd_down: { milliPercentage: 27000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { immovable: { term: { for_rounds: 1 } }, prevents_effect: { effects: ['push', 'pull'], term: { for_rounds: 1 } }, spd_down: { milliPercentage: 25500, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { immovable: { term: { for_rounds: 1 } }, prevents_effect: { effects: ['push', 'pull'], term: { for_rounds: 1 } }, spd_down: { milliPercentage: 24000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { immovable: { term: { for_rounds: 1 } }, prevents_effect: { effects: ['push', 'pull'], term: { for_rounds: 1 } }, spd_down: { milliPercentage: 22500, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { immovable: { term: { for_rounds: 1 } }, prevents_effect: { effects: ['push', 'pull'], term: { for_rounds: 1 } }, spd_down: { milliPercentage: 21000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { immovable: { term: { for_rounds: 1 } }, prevents_effect: { effects: ['push', 'pull'], term: { for_rounds: 1 } }, spd_down: { milliPercentage: 19500, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { immovable: { term: { for_rounds: 1 } }, prevents_effect: { effects: ['push', 'pull'], term: { for_rounds: 1 } }, spd_down: { milliPercentage: 18000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { immovable: { term: { for_rounds: 1 } }, prevents_effect: { effects: ['push', 'pull'], term: { for_rounds: 1 } }, spd_down: { milliPercentage: 16500, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { immovable: { term: { for_rounds: 1 } }, prevents_effect: { effects: ['push', 'pull'], term: { for_rounds: 1 } }, spd_down: { milliPercentage: 15000, term: { for_rounds: 1 } } } }]
    ]
  },
  napalm_rounds: {
    type: 'gear',
    id: 'napalm_rounds',
    exclusive: {
      role: 'supporter'
    },
    effects: [
      [{ condition: { trigger: 'hit' }, target: { kind: 'enemy' }, details: { target: { fixed_fire_damage_over_time: { value: 100, term: { for_rounds: 2 } }, fire_resist_down: { milliPercentage: 10000, term: { for_rounds: 2 } } } } }],
      [{ condition: { trigger: 'hit' }, target: { kind: 'enemy' }, details: { target: { fixed_fire_damage_over_time: { value: 110, term: { for_rounds: 2 } }, fire_resist_down: { milliPercentage: 11000, term: { for_rounds: 2 } } } } }],
      [{ condition: { trigger: 'hit' }, target: { kind: 'enemy' }, details: { target: { fixed_fire_damage_over_time: { value: 120, term: { for_rounds: 2 } }, fire_resist_down: { milliPercentage: 12000, term: { for_rounds: 2 } } } } }],
      [{ condition: { trigger: 'hit' }, target: { kind: 'enemy' }, details: { target: { fixed_fire_damage_over_time: { value: 130, term: { for_rounds: 2 } }, fire_resist_down: { milliPercentage: 13000, term: { for_rounds: 2 } } } } }],
      [{ condition: { trigger: 'hit' }, target: { kind: 'enemy' }, details: { target: { fixed_fire_damage_over_time: { value: 140, term: { for_rounds: 2 } }, fire_resist_down: { milliPercentage: 14000, term: { for_rounds: 2 } } } } }],
      [{ condition: { trigger: 'hit' }, target: { kind: 'enemy' }, details: { target: { fixed_fire_damage_over_time: { value: 150, term: { for_rounds: 2 } }, fire_resist_down: { milliPercentage: 15000, term: { for_rounds: 2 } } } } }],
      [{ condition: { trigger: 'hit' }, target: { kind: 'enemy' }, details: { target: { fixed_fire_damage_over_time: { value: 160, term: { for_rounds: 2 } }, fire_resist_down: { milliPercentage: 16000, term: { for_rounds: 2 } } } } }],
      [{ condition: { trigger: 'hit' }, target: { kind: 'enemy' }, details: { target: { fixed_fire_damage_over_time: { value: 170, term: { for_rounds: 2 } }, fire_resist_down: { milliPercentage: 17000, term: { for_rounds: 2 } } } } }],
      [{ condition: { trigger: 'hit' }, target: { kind: 'enemy' }, details: { target: { fixed_fire_damage_over_time: { value: 180, term: { for_rounds: 2 } }, fire_resist_down: { milliPercentage: 18000, term: { for_rounds: 2 } } } } }],
      [{ condition: { trigger: 'hit' }, target: { kind: 'enemy' }, details: { target: { fixed_fire_damage_over_time: { value: 190, term: { for_rounds: 2 } }, fire_resist_down: { milliPercentage: 19000, term: { for_rounds: 2 } } } } }],
      [{ condition: { trigger: 'hit' }, target: { kind: 'enemy' }, details: { target: { fixed_fire_damage_over_time: { value: 200, term: { for_rounds: 2 } }, fire_resist_down: { milliPercentage: 20000, term: { for_rounds: 2 } } } } }]
    ]
  },
  cryogenic_rounds: {
    type: 'gear',
    id: 'cryogenic_rounds',
    exclusive: {
      role: 'supporter'
    },
    effects: [
      [{ condition: { trigger: 'hit' }, target: { kind: 'enemy' }, details: { target: { fixed_ice_damage_over_time: { value: 100, term: { for_rounds: 2 } }, ice_resist_down: { milliPercentage: 10000, term: { for_rounds: 2 } } } } }],
      [{ condition: { trigger: 'hit' }, target: { kind: 'enemy' }, details: { target: { fixed_ice_damage_over_time: { value: 110, term: { for_rounds: 2 } }, ice_resist_down: { milliPercentage: 11000, term: { for_rounds: 2 } } } } }],
      [{ condition: { trigger: 'hit' }, target: { kind: 'enemy' }, details: { target: { fixed_ice_damage_over_time: { value: 120, term: { for_rounds: 2 } }, ice_resist_down: { milliPercentage: 12000, term: { for_rounds: 2 } } } } }],
      [{ condition: { trigger: 'hit' }, target: { kind: 'enemy' }, details: { target: { fixed_ice_damage_over_time: { value: 130, term: { for_rounds: 2 } }, ice_resist_down: { milliPercentage: 13000, term: { for_rounds: 2 } } } } }],
      [{ condition: { trigger: 'hit' }, target: { kind: 'enemy' }, details: { target: { fixed_ice_damage_over_time: { value: 140, term: { for_rounds: 2 } }, ice_resist_down: { milliPercentage: 14000, term: { for_rounds: 2 } } } } }],
      [{ condition: { trigger: 'hit' }, target: { kind: 'enemy' }, details: { target: { fixed_ice_damage_over_time: { value: 150, term: { for_rounds: 2 } }, ice_resist_down: { milliPercentage: 15000, term: { for_rounds: 2 } } } } }],
      [{ condition: { trigger: 'hit' }, target: { kind: 'enemy' }, details: { target: { fixed_ice_damage_over_time: { value: 160, term: { for_rounds: 2 } }, ice_resist_down: { milliPercentage: 16000, term: { for_rounds: 2 } } } } }],
      [{ condition: { trigger: 'hit' }, target: { kind: 'enemy' }, details: { target: { fixed_ice_damage_over_time: { value: 170, term: { for_rounds: 2 } }, ice_resist_down: { milliPercentage: 17000, term: { for_rounds: 2 } } } } }],
      [{ condition: { trigger: 'hit' }, target: { kind: 'enemy' }, details: { target: { fixed_ice_damage_over_time: { value: 180, term: { for_rounds: 2 } }, ice_resist_down: { milliPercentage: 18000, term: { for_rounds: 2 } } } } }],
      [{ condition: { trigger: 'hit' }, target: { kind: 'enemy' }, details: { target: { fixed_ice_damage_over_time: { value: 190, term: { for_rounds: 2 } }, ice_resist_down: { milliPercentage: 19000, term: { for_rounds: 2 } } } } }],
      [{ condition: { trigger: 'hit' }, target: { kind: 'enemy' }, details: { target: { fixed_ice_damage_over_time: { value: 200, term: { for_rounds: 2 } }, ice_resist_down: { milliPercentage: 20000, term: { for_rounds: 2 } } } } }]
    ]
  },
  arc_discharge_rounds: {
    type: 'gear',
    id: 'arc_discharge_rounds',
    exclusive: {
      role: 'supporter'
    },
    effects: [
      [{ condition: { trigger: 'hit' }, target: { kind: 'enemy' }, details: { target: { fixed_electric_damage_over_time: { value: 100, term: { for_rounds: 2 } }, electric_resist_down: { milliPercentage: 10000, term: { for_rounds: 2 } } } } }],
      [{ condition: { trigger: 'hit' }, target: { kind: 'enemy' }, details: { target: { fixed_electric_damage_over_time: { value: 110, term: { for_rounds: 2 } }, electric_resist_down: { milliPercentage: 11000, term: { for_rounds: 2 } } } } }],
      [{ condition: { trigger: 'hit' }, target: { kind: 'enemy' }, details: { target: { fixed_electric_damage_over_time: { value: 120, term: { for_rounds: 2 } }, electric_resist_down: { milliPercentage: 12000, term: { for_rounds: 2 } } } } }],
      [{ condition: { trigger: 'hit' }, target: { kind: 'enemy' }, details: { target: { fixed_electric_damage_over_time: { value: 130, term: { for_rounds: 2 } }, electric_resist_down: { milliPercentage: 13000, term: { for_rounds: 2 } } } } }],
      [{ condition: { trigger: 'hit' }, target: { kind: 'enemy' }, details: { target: { fixed_electric_damage_over_time: { value: 140, term: { for_rounds: 2 } }, electric_resist_down: { milliPercentage: 14000, term: { for_rounds: 2 } } } } }],
      [{ condition: { trigger: 'hit' }, target: { kind: 'enemy' }, details: { target: { fixed_electric_damage_over_time: { value: 150, term: { for_rounds: 2 } }, electric_resist_down: { milliPercentage: 15000, term: { for_rounds: 2 } } } } }],
      [{ condition: { trigger: 'hit' }, target: { kind: 'enemy' }, details: { target: { fixed_electric_damage_over_time: { value: 160, term: { for_rounds: 2 } }, electric_resist_down: { milliPercentage: 16000, term: { for_rounds: 2 } } } } }],
      [{ condition: { trigger: 'hit' }, target: { kind: 'enemy' }, details: { target: { fixed_electric_damage_over_time: { value: 170, term: { for_rounds: 2 } }, electric_resist_down: { milliPercentage: 17000, term: { for_rounds: 2 } } } } }],
      [{ condition: { trigger: 'hit' }, target: { kind: 'enemy' }, details: { target: { fixed_electric_damage_over_time: { value: 180, term: { for_rounds: 2 } }, electric_resist_down: { milliPercentage: 18000, term: { for_rounds: 2 } } } } }],
      [{ condition: { trigger: 'hit' }, target: { kind: 'enemy' }, details: { target: { fixed_electric_damage_over_time: { value: 190, term: { for_rounds: 2 } }, electric_resist_down: { milliPercentage: 19000, term: { for_rounds: 2 } } } } }],
      [{ condition: { trigger: 'hit' }, target: { kind: 'enemy' }, details: { target: { fixed_electric_damage_over_time: { value: 200, term: { for_rounds: 2 } }, electric_resist_down: { milliPercentage: 20000, term: { for_rounds: 2 } } } } }]
    ]
  },
  '40mm_du_rounds': {
    type: 'gear',
    id: '40mm_du_rounds',
    exclusive: {
      unit: 87
    },
    status_effects: [
      { atk_up: { milliValue:  60000 }, cri_up: { milliPercentage: 10000 }, acc_up: { milliPercentage: 10000 } },
      { atk_up: { milliValue:  66000 }, cri_up: { milliPercentage: 11000 }, acc_up: { milliPercentage: 11000 } },
      { atk_up: { milliValue:  72000 }, cri_up: { milliPercentage: 12000 }, acc_up: { milliPercentage: 12000 } },
      { atk_up: { milliValue:  78000 }, cri_up: { milliPercentage: 13000 }, acc_up: { milliPercentage: 13000 } },
      { atk_up: { milliValue:  84000 }, cri_up: { milliPercentage: 14000 }, acc_up: { milliPercentage: 14000 } },
      { atk_up: { milliValue:  90000 }, cri_up: { milliPercentage: 15000 }, acc_up: { milliPercentage: 15000 } },
      { atk_up: { milliValue:  96000 }, cri_up: { milliPercentage: 16000 }, acc_up: { milliPercentage: 16000 } },
      { atk_up: { milliValue: 102000 }, cri_up: { milliPercentage: 17000 }, acc_up: { milliPercentage: 17000 } },
      { atk_up: { milliValue: 108000 }, cri_up: { milliPercentage: 18000 }, acc_up: { milliPercentage: 18000 } },
      { atk_up: { milliValue: 114000 }, cri_up: { milliPercentage: 19000 }, acc_up: { milliPercentage: 19000 } },
      { atk_up: { milliValue: 120000 }, cri_up: { milliPercentage: 20000 }, acc_up: { milliPercentage: 20000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: 30000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: 30000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: 35000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: 40000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: 45000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: 50000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: 55000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: 60000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: 65000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: 70000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: 75000, term: 'infinite' } } }]
    ]
  },
  anatolian_hookah: {
    type: 'gear',
    id: 'anatolian_hookah',
    exclusive: {
      unit: 193
    },
    status_effects: [
      { fire_resist_up: { milliPercentage: 20000 }, ice_resist_up: { milliPercentage: 20000 }, electric_resist_up: { milliPercentage: 20000 } },
      { fire_resist_up: { milliPercentage: 22000 }, ice_resist_up: { milliPercentage: 22000 }, electric_resist_up: { milliPercentage: 22000 } },
      { fire_resist_up: { milliPercentage: 24000 }, ice_resist_up: { milliPercentage: 24000 }, electric_resist_up: { milliPercentage: 24000 } },
      { fire_resist_up: { milliPercentage: 26000 }, ice_resist_up: { milliPercentage: 26000 }, electric_resist_up: { milliPercentage: 26000 } },
      { fire_resist_up: { milliPercentage: 28000 }, ice_resist_up: { milliPercentage: 28000 }, electric_resist_up: { milliPercentage: 28000 } },
      { fire_resist_up: { milliPercentage: 30000 }, ice_resist_up: { milliPercentage: 30000 }, electric_resist_up: { milliPercentage: 30000 } },
      { fire_resist_up: { milliPercentage: 32000 }, ice_resist_up: { milliPercentage: 32000 }, electric_resist_up: { milliPercentage: 32000 } },
      { fire_resist_up: { milliPercentage: 34000 }, ice_resist_up: { milliPercentage: 34000 }, electric_resist_up: { milliPercentage: 34000 } },
      { fire_resist_up: { milliPercentage: 36000 }, ice_resist_up: { milliPercentage: 36000 }, electric_resist_up: { milliPercentage: 36000 } },
      { fire_resist_up: { milliPercentage: 38000 }, ice_resist_up: { milliPercentage: 38000 }, electric_resist_up: { milliPercentage: 38000 } },
      { fire_resist_up: { milliPercentage: 40000 }, ice_resist_up: { milliPercentage: 40000 }, electric_resist_up: { milliPercentage: 40000 } }
    ],
    effects: [
      [{ condition: { trigger: 'start_round', round: 'odd' }, details: { self: { atk_up: { milliPercentage:  5000, term: { for_rounds: 2 } }, acc_up: { milliPercentage:  5000, term: { for_rounds: 2 } }, cri_up: { milliPercentage:  5000, term: { for_rounds: 2 } }, action_count_up: { term: { for_rounds: 2 } } } } }],
      [{ condition: { trigger: 'start_round', round: 'odd' }, details: { self: { atk_up: { milliPercentage:  5500, term: { for_rounds: 2 } }, acc_up: { milliPercentage:  5500, term: { for_rounds: 2 } }, cri_up: { milliPercentage:  5500, term: { for_rounds: 2 } }, action_count_up: { term: { for_rounds: 2 } } } } }],
      [{ condition: { trigger: 'start_round', round: 'odd' }, details: { self: { atk_up: { milliPercentage:  6000, term: { for_rounds: 2 } }, acc_up: { milliPercentage:  6000, term: { for_rounds: 2 } }, cri_up: { milliPercentage:  6000, term: { for_rounds: 2 } }, action_count_up: { term: { for_rounds: 2 } } } } }],
      [{ condition: { trigger: 'start_round', round: 'odd' }, details: { self: { atk_up: { milliPercentage:  6500, term: { for_rounds: 2 } }, acc_up: { milliPercentage:  6500, term: { for_rounds: 2 } }, cri_up: { milliPercentage:  6500, term: { for_rounds: 2 } }, action_count_up: { term: { for_rounds: 2 } } } } }],
      [{ condition: { trigger: 'start_round', round: 'odd' }, details: { self: { atk_up: { milliPercentage:  7000, term: { for_rounds: 2 } }, acc_up: { milliPercentage:  7000, term: { for_rounds: 2 } }, cri_up: { milliPercentage:  7000, term: { for_rounds: 2 } }, action_count_up: { term: { for_rounds: 2 } } } } }],
      [{ condition: { trigger: 'start_round', round: 'odd' }, details: { self: { atk_up: { milliPercentage:  7500, term: { for_rounds: 2 } }, acc_up: { milliPercentage:  7500, term: { for_rounds: 2 } }, cri_up: { milliPercentage:  7500, term: { for_rounds: 2 } }, action_count_up: { term: { for_rounds: 2 } } } } }],
      [{ condition: { trigger: 'start_round', round: 'odd' }, details: { self: { atk_up: { milliPercentage:  8000, term: { for_rounds: 2 } }, acc_up: { milliPercentage:  8000, term: { for_rounds: 2 } }, cri_up: { milliPercentage:  8000, term: { for_rounds: 2 } }, action_count_up: { term: { for_rounds: 2 } } } } }],
      [{ condition: { trigger: 'start_round', round: 'odd' }, details: { self: { atk_up: { milliPercentage:  8500, term: { for_rounds: 2 } }, acc_up: { milliPercentage:  8500, term: { for_rounds: 2 } }, cri_up: { milliPercentage:  8500, term: { for_rounds: 2 } }, action_count_up: { term: { for_rounds: 2 } } } } }],
      [{ condition: { trigger: 'start_round', round: 'odd' }, details: { self: { atk_up: { milliPercentage:  9000, term: { for_rounds: 2 } }, acc_up: { milliPercentage:  9000, term: { for_rounds: 2 } }, cri_up: { milliPercentage:  9000, term: { for_rounds: 2 } }, action_count_up: { term: { for_rounds: 2 } } } } }],
      [{ condition: { trigger: 'start_round', round: 'odd' }, details: { self: { atk_up: { milliPercentage:  9500, term: { for_rounds: 2 } }, acc_up: { milliPercentage:  9500, term: { for_rounds: 2 } }, cri_up: { milliPercentage:  9500, term: { for_rounds: 2 } }, action_count_up: { term: { for_rounds: 2 } } } } }],
      [{ condition: { trigger: 'start_round', round: 'odd' }, details: { self: { atk_up: { milliPercentage: 10000, term: { for_rounds: 2 } }, acc_up: { milliPercentage: 10000, term: { for_rounds: 2 } }, cri_up: { milliPercentage: 10000, term: { for_rounds: 2 } }, action_count_up: { term: { for_rounds: 2 } } } } }]
    ]
  },
  aesa_air_radar: {
    type: 'gear',
    id: 'aesa_air_radar',
    exclusive: {
      unit: 95
    },
    status_effects: [
      { eva_up: { milliPercentage: 12000 } },
      { eva_up: { milliPercentage: 13200 } },
      { eva_up: { milliPercentage: 14400 } },
      { eva_up: { milliPercentage: 15600 } },
      { eva_up: { milliPercentage: 16800 } },
      { eva_up: { milliPercentage: 18000 } },
      { eva_up: { milliPercentage: 19200 } },
      { eva_up: { milliPercentage: 20400 } },
      { eva_up: { milliPercentage: 21600 } },
      { eva_up: { milliPercentage: 22800 } },
      { eva_up: { milliPercentage: 25000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue:  440000, term: 'immediate' }, counterattack: { milliPercentage:  50000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue:  480000, term: 'immediate' }, counterattack: { milliPercentage:  55000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue:  520000, term: 'immediate' }, counterattack: { milliPercentage:  60000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue:  560000, term: 'immediate' }, counterattack: { milliPercentage:  65000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue:  600000, term: 'immediate' }, counterattack: { milliPercentage:  70000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue:  640000, term: 'immediate' }, counterattack: { milliPercentage:  75000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue:  680000, term: 'immediate' }, counterattack: { milliPercentage:  80000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue:  720000, term: 'immediate' }, counterattack: { milliPercentage:  85000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue:  800000, term: 'immediate' }, counterattack: { milliPercentage:  90000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue:  900000, term: 'immediate' }, counterattack: { milliPercentage:  95000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue: 1000000, term: 'immediate' }, counterattack: { milliPercentage: 100000, term: { for_rounds: 1 } } } }]
    ]
  },
  advanced_compound_armor: {
    type: 'gear',
    id: 'advanced_compound_armor',
    exclusive: {
      unit: 203
    },
    status_effects: [
      { atk_up: { milliValue: 25000 }, spd_up: { microValue: 100000 } },
      { atk_up: { milliValue: 27500 }, spd_up: { microValue: 105000 } },
      { atk_up: { milliValue: 30000 }, spd_up: { microValue: 110000 } },
      { atk_up: { milliValue: 32500 }, spd_up: { microValue: 120000 } },
      { atk_up: { milliValue: 35000 }, spd_up: { microValue: 135000 } },
      { atk_up: { milliValue: 37500 }, spd_up: { microValue: 155000 } },
      { atk_up: { milliValue: 40000 }, spd_up: { microValue: 170000 } },
      { atk_up: { milliValue: 42500 }, spd_up: { microValue: 200000 } },
      { atk_up: { milliValue: 45000 }, spd_up: { microValue: 240000 } },
      { atk_up: { milliValue: 47500 }, spd_up: { microValue: 290000 } },
      { atk_up: { milliValue: 50000 }, spd_up: { microValue: 350000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage:  5000, term: 'infinite' }, fire_resist_up: { milliPercentage: 20000, term: 'infinite' }, ice_resist_up: { milliPercentage: 20000, term: 'infinite' }, counterattack: { milliPercentage:  80000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage:  5500, term: 'infinite' }, fire_resist_up: { milliPercentage: 21000, term: 'infinite' }, ice_resist_up: { milliPercentage: 21000, term: 'infinite' }, counterattack: { milliPercentage:  85000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage:  6000, term: 'infinite' }, fire_resist_up: { milliPercentage: 22000, term: 'infinite' }, ice_resist_up: { milliPercentage: 22000, term: 'infinite' }, counterattack: { milliPercentage:  90000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage:  6500, term: 'infinite' }, fire_resist_up: { milliPercentage: 24000, term: 'infinite' }, ice_resist_up: { milliPercentage: 24000, term: 'infinite' }, counterattack: { milliPercentage:  95000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage:  7000, term: 'infinite' }, fire_resist_up: { milliPercentage: 27000, term: 'infinite' }, ice_resist_up: { milliPercentage: 27000, term: 'infinite' }, counterattack: { milliPercentage: 100000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage:  7500, term: 'infinite' }, fire_resist_up: { milliPercentage: 31000, term: 'infinite' }, ice_resist_up: { milliPercentage: 31000, term: 'infinite' }, counterattack: { milliPercentage: 105000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage:  8000, term: 'infinite' }, fire_resist_up: { milliPercentage: 34000, term: 'infinite' }, ice_resist_up: { milliPercentage: 34000, term: 'infinite' }, counterattack: { milliPercentage: 110000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage:  9000, term: 'infinite' }, fire_resist_up: { milliPercentage: 40000, term: 'infinite' }, ice_resist_up: { milliPercentage: 40000, term: 'infinite' }, counterattack: { milliPercentage: 115000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: 10000, term: 'infinite' }, fire_resist_up: { milliPercentage: 48000, term: 'infinite' }, ice_resist_up: { milliPercentage: 48000, term: 'infinite' }, counterattack: { milliPercentage: 120000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: 11000, term: 'infinite' }, fire_resist_up: { milliPercentage: 58000, term: 'infinite' }, ice_resist_up: { milliPercentage: 58000, term: 'infinite' }, counterattack: { milliPercentage: 125000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: 12500, term: 'infinite' }, fire_resist_up: { milliPercentage: 70000, term: 'infinite' }, ice_resist_up: { milliPercentage: 70000, term: 'infinite' }, counterattack: { milliPercentage: 130000, term: 'infinite' } } }]
    ]
  },
  asn_6g: {
    type: 'gear',
    id: 'asn_6g',
    exclusive: {
      unit: 88
    },
    status_effects: [
      { atk_up: { milliValue:  50000 }, cri_up: { milliPercentage:  5000 } },
      { atk_up: { milliValue:  52500 }, cri_up: { milliPercentage:  5250 } },
      { atk_up: { milliValue:  57500 }, cri_up: { milliPercentage:  5750 } },
      { atk_up: { milliValue:  60000 }, cri_up: { milliPercentage:  6000 } },
      { atk_up: { milliValue:  67500 }, cri_up: { milliPercentage:  6750 } },
      { atk_up: { milliValue:  77500 }, cri_up: { milliPercentage:  7750 } },
      { atk_up: { milliValue:  85000 }, cri_up: { milliPercentage:  8500 } },
      { atk_up: { milliValue: 100000 }, cri_up: { milliPercentage: 10000 } },
      { atk_up: { milliValue: 120000 }, cri_up: { milliPercentage: 12500 } },
      { atk_up: { milliValue: 145000 }, cri_up: { milliPercentage: 15000 } },
      { atk_up: { milliValue: 175000 }, cri_up: { milliPercentage: 20000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: 15000, term: 'infinite' }, heavy_type_damage_up: { milliPercentage: 15000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: 18000, term: 'infinite' }, heavy_type_damage_up: { milliPercentage: 16000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: 21000, term: 'infinite' }, heavy_type_damage_up: { milliPercentage: 17000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: 24000, term: 'infinite' }, heavy_type_damage_up: { milliPercentage: 18000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: 27000, term: 'infinite' }, heavy_type_damage_up: { milliPercentage: 19000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: 30000, term: 'infinite' }, heavy_type_damage_up: { milliPercentage: 20000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: 33000, term: 'infinite' }, heavy_type_damage_up: { milliPercentage: 21000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: 36000, term: 'infinite' }, heavy_type_damage_up: { milliPercentage: 22000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: 39000, term: 'infinite' }, heavy_type_damage_up: { milliPercentage: 23000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: 42000, term: 'infinite' }, heavy_type_damage_up: { milliPercentage: 24000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: 45000, term: 'infinite' }, heavy_type_damage_up: { milliPercentage: 25000, term: 'infinite' } } }]
    ]
  },
  blitz_pile_bunker: {
    type: 'gear',
    id: 'blitz_pile_bunker',
    exclusive: {
      unit: 84
    },
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage:  5000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage:  6000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage:  7000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage:  8000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage:  9000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: 10000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: 11000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: 12000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: 13000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: 14000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { atk_up: { milliPercentage: 15000, term: 'infinite' } } }]
    ]
  },
  bloody_eyepatch: {
    type: 'gear',
    id: 'bloody_eyepatch',
    exclusive: {
      unit: 240
    },
    status_effects: [
      { cri_up: { milliPercentage: 10000 }, acc_up: { milliPercentage: 20000 } },
      { cri_up: { milliPercentage: 11000 }, acc_up: { milliPercentage: 22000 } },
      { cri_up: { milliPercentage: 12000 }, acc_up: { milliPercentage: 24000 } },
      { cri_up: { milliPercentage: 13000 }, acc_up: { milliPercentage: 26000 } },
      { cri_up: { milliPercentage: 14000 }, acc_up: { milliPercentage: 28000 } },
      { cri_up: { milliPercentage: 15000 }, acc_up: { milliPercentage: 30000 } },
      { cri_up: { milliPercentage: 16000 }, acc_up: { milliPercentage: 32000 } },
      { cri_up: { milliPercentage: 17000 }, acc_up: { milliPercentage: 34000 } },
      { cri_up: { milliPercentage: 18000 }, acc_up: { milliPercentage: 36000 } },
      { cri_up: { milliPercentage: 19000 }, acc_up: { milliPercentage: 38000 } },
      { cri_up: { milliPercentage: 20000 }, acc_up: { milliPercentage: 40000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { battle_continuation: { milliPercentage: 40000, term: 'infinite', times: 1 }, counterattack: { milliPercentage:  50000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { battle_continuation: { milliPercentage: 45000, term: 'infinite', times: 1 }, counterattack: { milliPercentage:  56000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { battle_continuation: { milliPercentage: 50000, term: 'infinite', times: 1 }, counterattack: { milliPercentage:  62000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { battle_continuation: { milliPercentage: 55000, term: 'infinite', times: 1 }, counterattack: { milliPercentage:  68000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { battle_continuation: { milliPercentage: 60000, term: 'infinite', times: 1 }, counterattack: { milliPercentage:  74000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { battle_continuation: { milliPercentage: 65000, term: 'infinite', times: 1 }, counterattack: { milliPercentage:  80000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { battle_continuation: { milliPercentage: 70000, term: 'infinite', times: 1 }, counterattack: { milliPercentage:  86000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { battle_continuation: { milliPercentage: 75000, term: 'infinite', times: 1 }, counterattack: { milliPercentage:  92000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { battle_continuation: { milliPercentage: 80000, term: 'infinite', times: 1 }, counterattack: { milliPercentage:  98000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { battle_continuation: { milliPercentage: 85000, term: 'infinite', times: 1 }, counterattack: { milliPercentage: 104000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { battle_continuation: { milliPercentage: 90000, term: 'infinite', times: 1 }, counterattack: { milliPercentage: 110000, term: 'infinite' } } }]
    ]
  },
  boiling_vessel: {
    type: 'gear',
    id: 'boiling_vessel',
    exclusive: {
      unit: 228
    },
    status_effects: [
      { acc_up: { milliPercentage: 25000 } },
      { acc_up: { milliPercentage: 27500 } },
      { acc_up: { milliPercentage: 30000 } },
      { acc_up: { milliPercentage: 32500 } },
      { acc_up: { milliPercentage: 35000 } },
      { acc_up: { milliPercentage: 37500 } },
      { acc_up: { milliPercentage: 40000 } },
      { acc_up: { milliPercentage: 42500 } },
      { acc_up: { milliPercentage: 45000 } },
      { acc_up: { milliPercentage: 47500 } },
      { acc_up: { milliPercentage: 50000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage:   500, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage:  1000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage:  2000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage:  3000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage:  4000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage:  5000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage:  6000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage:  7000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage:  8000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage:  9000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: 10000, term: 'infinite' } } }]
    ]
  },
  cage_once_held_blue_bird: {
    type: 'gear',
    id: 'cage_once_held_blue_bird',
    exclusive: {
      unit: 77
    },
    equipment_effects: [
      [{ condition: { trigger: 'start_round' }, details: { defense_penetration: { milliPercentage: 20000, term: { for_rounds: 1 } }, action_count_up: { term: { for_rounds: 1 } }, range_up_active_1: { value: 1, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { defense_penetration: { milliPercentage: 23000, term: { for_rounds: 1 } }, action_count_up: { term: { for_rounds: 1 } }, range_up_active_1: { value: 1, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { defense_penetration: { milliPercentage: 26000, term: { for_rounds: 1 } }, action_count_up: { term: { for_rounds: 1 } }, range_up_active_1: { value: 1, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { defense_penetration: { milliPercentage: 29000, term: { for_rounds: 1 } }, action_count_up: { term: { for_rounds: 1 } }, range_up_active_1: { value: 1, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { defense_penetration: { milliPercentage: 32000, term: { for_rounds: 1 } }, action_count_up: { term: { for_rounds: 1 } }, range_up_active_1: { value: 1, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { defense_penetration: { milliPercentage: 35000, term: { for_rounds: 1 } }, action_count_up: { term: { for_rounds: 1 } }, range_up_active_1: { value: 1, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { defense_penetration: { milliPercentage: 38000, term: { for_rounds: 1 } }, action_count_up: { term: { for_rounds: 1 } }, range_up_active_1: { value: 1, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { defense_penetration: { milliPercentage: 41000, term: { for_rounds: 1 } }, action_count_up: { term: { for_rounds: 1 } }, range_up_active_1: { value: 1, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { defense_penetration: { milliPercentage: 44000, term: { for_rounds: 1 } }, action_count_up: { term: { for_rounds: 1 } }, range_up_active_1: { value: 1, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { defense_penetration: { milliPercentage: 47000, term: { for_rounds: 1 } }, action_count_up: { term: { for_rounds: 1 } }, range_up_active_1: { value: 1, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { defense_penetration: { milliPercentage: 50000, term: { for_rounds: 1 } }, action_count_up: { term: { for_rounds: 1 } }, range_up_active_1: { value: 2, term: { for_rounds: 1 } } } }]
    ]
  },
  counterterrorism_body_armor: {
    type: 'gear',
    id: 'counterterrorism_body_armor',
    exclusive: {
      unit: 84
    },
    status_effects: [
      { hp_up: { value: 400 }, def_up: { milliValue:  50000 }, spd_up: { microValue: 120000 } },
      { hp_up: { value: 440 }, def_up: { milliValue:  52500 }, spd_up: { microValue: 132000 } },
      { hp_up: { value: 480 }, def_up: { milliValue:  55000 }, spd_up: { microValue: 144000 } },
      { hp_up: { value: 520 }, def_up: { milliValue:  60000 }, spd_up: { microValue: 156000 } },
      { hp_up: { value: 560 }, def_up: { milliValue:  67500 }, spd_up: { microValue: 168000 } },
      { hp_up: { value: 600 }, def_up: { milliValue:  77500 }, spd_up: { microValue: 180000 } },
      { hp_up: { value: 640 }, def_up: { milliValue:  85000 }, spd_up: { microValue: 192000 } },
      { hp_up: { value: 680 }, def_up: { milliValue: 100000 }, spd_up: { microValue: 204000 } },
      { hp_up: { value: 720 }, def_up: { milliValue: 120000 }, spd_up: { microValue: 216000 } },
      { hp_up: { value: 760 }, def_up: { milliValue: 145000 }, spd_up: { microValue: 228000 } },
      { hp_up: { value: 800 }, def_up: { milliValue: 175000 }, spd_up: { microValue: 240000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { fire_resist_up: { milliPercentage: 15000, term: 'infinite' }, ice_resist_up: { milliPercentage: 15000, term: 'infinite' }, electric_resist_up: { milliPercentage: 15000, term: 'infinite' }, damage_reduction_up: { milliPercentage: 25000, term: 'infinite' }, row_protect: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { fire_resist_up: { milliPercentage: 17000, term: 'infinite' }, ice_resist_up: { milliPercentage: 17000, term: 'infinite' }, electric_resist_up: { milliPercentage: 17000, term: 'infinite' }, damage_reduction_up: { milliPercentage: 27000, term: 'infinite' }, row_protect: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { fire_resist_up: { milliPercentage: 19000, term: 'infinite' }, ice_resist_up: { milliPercentage: 19000, term: 'infinite' }, electric_resist_up: { milliPercentage: 19000, term: 'infinite' }, damage_reduction_up: { milliPercentage: 29000, term: 'infinite' }, row_protect: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { fire_resist_up: { milliPercentage: 21000, term: 'infinite' }, ice_resist_up: { milliPercentage: 21000, term: 'infinite' }, electric_resist_up: { milliPercentage: 21000, term: 'infinite' }, damage_reduction_up: { milliPercentage: 31000, term: 'infinite' }, row_protect: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { fire_resist_up: { milliPercentage: 23000, term: 'infinite' }, ice_resist_up: { milliPercentage: 23000, term: 'infinite' }, electric_resist_up: { milliPercentage: 23000, term: 'infinite' }, damage_reduction_up: { milliPercentage: 33000, term: 'infinite' }, row_protect: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { fire_resist_up: { milliPercentage: 25000, term: 'infinite' }, ice_resist_up: { milliPercentage: 25000, term: 'infinite' }, electric_resist_up: { milliPercentage: 25000, term: 'infinite' }, damage_reduction_up: { milliPercentage: 35000, term: 'infinite' }, row_protect: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { fire_resist_up: { milliPercentage: 27000, term: 'infinite' }, ice_resist_up: { milliPercentage: 27000, term: 'infinite' }, electric_resist_up: { milliPercentage: 27000, term: 'infinite' }, damage_reduction_up: { milliPercentage: 37000, term: 'infinite' }, row_protect: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { fire_resist_up: { milliPercentage: 29000, term: 'infinite' }, ice_resist_up: { milliPercentage: 29000, term: 'infinite' }, electric_resist_up: { milliPercentage: 29000, term: 'infinite' }, damage_reduction_up: { milliPercentage: 39000, term: 'infinite' }, row_protect: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { fire_resist_up: { milliPercentage: 31000, term: 'infinite' }, ice_resist_up: { milliPercentage: 31000, term: 'infinite' }, electric_resist_up: { milliPercentage: 31000, term: 'infinite' }, damage_reduction_up: { milliPercentage: 41000, term: 'infinite' }, row_protect: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { fire_resist_up: { milliPercentage: 33000, term: 'infinite' }, ice_resist_up: { milliPercentage: 33000, term: 'infinite' }, electric_resist_up: { milliPercentage: 33000, term: 'infinite' }, damage_reduction_up: { milliPercentage: 43000, term: 'infinite' }, row_protect: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { fire_resist_up: { milliPercentage: 35000, term: 'infinite' }, ice_resist_up: { milliPercentage: 35000, term: 'infinite' }, electric_resist_up: { milliPercentage: 35000, term: 'infinite' }, damage_reduction_up: { milliPercentage: 45000, term: 'infinite' }, row_protect: { term: 'infinite' } } }]
    ]
  },
  chop_maker_ii: {
    type: 'gear',
    id: 'chop_maker_ii',
    exclusive: {
      unit: 113
    },
    status_effects: [
      { atk_up: { milliValue: 30000 }, fire_resist_up: { milliPercentage: 20000 }, electric_resist_up: { milliPercentage: 20000 } },
      { atk_up: { milliValue: 36000 }, fire_resist_up: { milliPercentage: 24000 }, electric_resist_up: { milliPercentage: 24000 } },
      { atk_up: { milliValue: 42000 }, fire_resist_up: { milliPercentage: 28000 }, electric_resist_up: { milliPercentage: 28000 } },
      { atk_up: { milliValue: 48000 }, fire_resist_up: { milliPercentage: 32000 }, electric_resist_up: { milliPercentage: 32000 } },
      { atk_up: { milliValue: 54000 }, fire_resist_up: { milliPercentage: 36000 }, electric_resist_up: { milliPercentage: 36000 } },
      { atk_up: { milliValue: 60000 }, fire_resist_up: { milliPercentage: 40000 }, electric_resist_up: { milliPercentage: 40000 } },
      { atk_up: { milliValue: 66000 }, fire_resist_up: { milliPercentage: 44000 }, electric_resist_up: { milliPercentage: 44000 } },
      { atk_up: { milliValue: 72000 }, fire_resist_up: { milliPercentage: 48000 }, electric_resist_up: { milliPercentage: 48000 } },
      { atk_up: { milliValue: 78000 }, fire_resist_up: { milliPercentage: 52000 }, electric_resist_up: { milliPercentage: 52000 } },
      { atk_up: { milliValue: 84000 }, fire_resist_up: { milliPercentage: 56000 }, electric_resist_up: { milliPercentage: 56000 } },
      { atk_up: { milliValue: 90000 }, fire_resist_up: { milliPercentage: 60000 }, electric_resist_up: { milliPercentage: 60000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_round' }, details: { def_up: { milliPercentage: 10000, term: { for_rounds: 1 } }, counterattack: { milliPercentage:  50000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { def_up: { milliPercentage: 12500, term: { for_rounds: 1 } }, counterattack: { milliPercentage:  55000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { def_up: { milliPercentage: 15000, term: { for_rounds: 1 } }, counterattack: { milliPercentage:  60000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { def_up: { milliPercentage: 17500, term: { for_rounds: 1 } }, counterattack: { milliPercentage:  65000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { def_up: { milliPercentage: 20000, term: { for_rounds: 1 } }, counterattack: { milliPercentage:  70000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { def_up: { milliPercentage: 22500, term: { for_rounds: 1 } }, counterattack: { milliPercentage:  75000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { def_up: { milliPercentage: 25000, term: { for_rounds: 1 } }, counterattack: { milliPercentage:  85000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { def_up: { milliPercentage: 27500, term: { for_rounds: 1 } }, counterattack: { milliPercentage:  95000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { def_up: { milliPercentage: 30000, term: { for_rounds: 1 } }, counterattack: { milliPercentage: 105000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { def_up: { milliPercentage: 32500, term: { for_rounds: 1 } }, counterattack: { milliPercentage: 115000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { def_up: { milliPercentage: 35000, term: { for_rounds: 1 } }, counterattack: { milliPercentage: 125000, term: { for_rounds: 1 } } } }]
    ]
  },
  combat_observation_frame: {
    type: 'gear',
    id: 'combat_observation_frame',
    exclusive: {
      unit: 31
    },
    status_effects: [
      { acc_up: { milliPercentage: 20000 }, eva_up: { milliPercentage: 12000 } },
      { acc_up: { milliPercentage: 21000 }, eva_up: { milliPercentage: 12600 } },
      { acc_up: { milliPercentage: 22000 }, eva_up: { milliPercentage: 13200 } },
      { acc_up: { milliPercentage: 24000 }, eva_up: { milliPercentage: 14400 } },
      { acc_up: { milliPercentage: 27000 }, eva_up: { milliPercentage: 16200 } },
      { acc_up: { milliPercentage: 31000 }, eva_up: { milliPercentage: 18600 } },
      { acc_up: { milliPercentage: 34000 }, eva_up: { milliPercentage: 20400 } },
      { acc_up: { milliPercentage: 40000 }, eva_up: { milliPercentage: 24000 } },
      { acc_up: { milliPercentage: 48000 }, eva_up: { milliPercentage: 28800 } },
      { acc_up: { milliPercentage: 58000 }, eva_up: { milliPercentage: 34800 } },
      { acc_up: { milliPercentage: 70000 }, eva_up: { milliPercentage: 42000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { reconnaissance: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { reconnaissance: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { reconnaissance: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { reconnaissance: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { reconnaissance: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { reconnaissance: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { reconnaissance: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { reconnaissance: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { reconnaissance: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { reconnaissance: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { reconnaissance: { term: 'infinite' } } }]
    ]
  },
  dust_storm: {
    type: 'gear',
    id: 'dust_storm',
    exclusive: {
      unit: 41
    },
    equipment_effects: [
      [{ condition: { trigger: 'start_round' }, details: { marked: { term: { for_rounds: 1 } }, eva_up: { milliPercentage: 100000, term: { for_rounds: 1 } }, damage_reduction_up: { milliPercentage: 20000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { marked: { term: { for_rounds: 1 } }, eva_up: { milliPercentage: 110000, term: { for_rounds: 1 } }, damage_reduction_up: { milliPercentage: 23000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { marked: { term: { for_rounds: 1 } }, eva_up: { milliPercentage: 120000, term: { for_rounds: 1 } }, damage_reduction_up: { milliPercentage: 26000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { marked: { term: { for_rounds: 1 } }, eva_up: { milliPercentage: 130000, term: { for_rounds: 1 } }, damage_reduction_up: { milliPercentage: 29000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { marked: { term: { for_rounds: 1 } }, eva_up: { milliPercentage: 140000, term: { for_rounds: 1 } }, damage_reduction_up: { milliPercentage: 32000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { marked: { term: { for_rounds: 1 } }, eva_up: { milliPercentage: 150000, term: { for_rounds: 1 } }, damage_reduction_up: { milliPercentage: 35000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { marked: { term: { for_rounds: 1 } }, eva_up: { milliPercentage: 160000, term: { for_rounds: 1 } }, damage_reduction_up: { milliPercentage: 38000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { marked: { term: { for_rounds: 1 } }, eva_up: { milliPercentage: 170000, term: { for_rounds: 1 } }, damage_reduction_up: { milliPercentage: 41000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { marked: { term: { for_rounds: 1 } }, eva_up: { milliPercentage: 180000, term: { for_rounds: 1 } }, damage_reduction_up: { milliPercentage: 44000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { marked: { term: { for_rounds: 1 } }, eva_up: { milliPercentage: 190000, term: { for_rounds: 1 } }, damage_reduction_up: { milliPercentage: 47000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { marked: { term: { for_rounds: 1 } }, eva_up: { milliPercentage: 200000, term: { for_rounds: 1 } }, damage_reduction_up: { milliPercentage: 50000, term: { for_rounds: 1 } } } }]
    ]
  },
  enhanced_mk_engine: {
    type: 'gear',
    id: 'enhanced_mk_engine',
    exclusive: {
      unit: 96
    },
    equipment_effects: [
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue:  440000, term: 'immediate' }, re_attack: { term: { for_rounds: 1 } }, defense_penetration: { milliPercentage:  5000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue:  480000, term: 'immediate' }, re_attack: { term: { for_rounds: 1 } }, defense_penetration: { milliPercentage:  8000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue:  520000, term: 'immediate' }, re_attack: { term: { for_rounds: 1 } }, defense_penetration: { milliPercentage: 11000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue:  560000, term: 'immediate' }, re_attack: { term: { for_rounds: 1 } }, defense_penetration: { milliPercentage: 14000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue:  600000, term: 'immediate' }, re_attack: { term: { for_rounds: 1 } }, defense_penetration: { milliPercentage: 17000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue:  640000, term: 'immediate' }, re_attack: { term: { for_rounds: 1 } }, defense_penetration: { milliPercentage: 20000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue:  680000, term: 'immediate' }, re_attack: { term: { for_rounds: 1 } }, defense_penetration: { milliPercentage: 23000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue:  720000, term: 'immediate' }, re_attack: { term: { for_rounds: 1 } }, defense_penetration: { milliPercentage: 26000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue:  800000, term: 'immediate' }, re_attack: { term: { for_rounds: 1 } }, defense_penetration: { milliPercentage: 29000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue:  900000, term: 'immediate' }, re_attack: { term: { for_rounds: 1 } }, defense_penetration: { milliPercentage: 32000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue: 1000000, term: 'immediate' }, re_attack: { term: { for_rounds: 1 } }, defense_penetration: { milliPercentage: 35000, term: { for_rounds: 1 } } } }]
    ]
  },
  expanded_amraam_launcher: {
    type: 'gear',
    id: 'expanded_amraam_launcher',
    exclusive: {
      unit: 92
    },
    status_effects: [
      { atk_up: { milliValue:  50000 }, acc_up: { milliPercentage: 20000 } },
      { atk_up: { milliValue:  55000 }, acc_up: { milliPercentage: 24000 } },
      { atk_up: { milliValue:  60000 }, acc_up: { milliPercentage: 28000 } },
      { atk_up: { milliValue:  65000 }, acc_up: { milliPercentage: 32000 } },
      { atk_up: { milliValue:  70000 }, acc_up: { milliPercentage: 36000 } },
      { atk_up: { milliValue:  75000 }, acc_up: { milliPercentage: 40000 } },
      { atk_up: { milliValue:  80000 }, acc_up: { milliPercentage: 44000 } },
      { atk_up: { milliValue:  85000 }, acc_up: { milliPercentage: 48000 } },
      { atk_up: { milliValue:  90000 }, acc_up: { milliPercentage: 52000 } },
      { atk_up: { milliValue:  95000 }, acc_up: { milliPercentage: 56000 } },
      { atk_up: { milliValue: 100000 }, acc_up: { milliPercentage: 60000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { flying_type_damage_up: { milliPercentage: 15000, term: 'infinite' }, defense_penetration: { milliPercentage: 15000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { flying_type_damage_up: { milliPercentage: 15000, term: 'infinite' }, defense_penetration: { milliPercentage: 15000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { flying_type_damage_up: { milliPercentage: 16000, term: 'infinite' }, defense_penetration: { milliPercentage: 17000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { flying_type_damage_up: { milliPercentage: 17000, term: 'infinite' }, defense_penetration: { milliPercentage: 19000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { flying_type_damage_up: { milliPercentage: 18000, term: 'infinite' }, defense_penetration: { milliPercentage: 21000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { flying_type_damage_up: { milliPercentage: 19000, term: 'infinite' }, defense_penetration: { milliPercentage: 23000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { flying_type_damage_up: { milliPercentage: 20000, term: 'infinite' }, defense_penetration: { milliPercentage: 25000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { flying_type_damage_up: { milliPercentage: 21000, term: 'infinite' }, defense_penetration: { milliPercentage: 27000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { flying_type_damage_up: { milliPercentage: 22000, term: 'infinite' }, defense_penetration: { milliPercentage: 29000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { flying_type_damage_up: { milliPercentage: 23000, term: 'infinite' }, defense_penetration: { milliPercentage: 31000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { flying_type_damage_up: { milliPercentage: 25000, term: 'infinite' }, defense_penetration: { milliPercentage: 33000, term: 'infinite' }, range_up: { value: 1, term: 'infinite' } } }]
    ]
  },
  f_c_s: {
    type: 'gear',
    id: 'f_c_s',
    exclusive: {
      unit: 202
    },
    status_effects: [
      { atk_up: { milliValue:  60000 }, cri_up: { milliPercentage: 10000 }, acc_up: { milliPercentage: 10000 } },
      { atk_up: { milliValue:  66000 }, cri_up: { milliPercentage: 11000 }, acc_up: { milliPercentage: 11000 } },
      { atk_up: { milliValue:  72000 }, cri_up: { milliPercentage: 12000 }, acc_up: { milliPercentage: 12000 } },
      { atk_up: { milliValue:  78000 }, cri_up: { milliPercentage: 13000 }, acc_up: { milliPercentage: 13000 } },
      { atk_up: { milliValue:  84000 }, cri_up: { milliPercentage: 14000 }, acc_up: { milliPercentage: 14000 } },
      { atk_up: { milliValue:  90000 }, cri_up: { milliPercentage: 15000 }, acc_up: { milliPercentage: 15000 } },
      { atk_up: { milliValue:  96000 }, cri_up: { milliPercentage: 16000 }, acc_up: { milliPercentage: 16000 } },
      { atk_up: { milliValue: 102000 }, cri_up: { milliPercentage: 17000 }, acc_up: { milliPercentage: 17000 } },
      { atk_up: { milliValue: 108000 }, cri_up: { milliPercentage: 18000 }, acc_up: { milliPercentage: 18000 } },
      { atk_up: { milliValue: 114000 }, cri_up: { milliPercentage: 19000 }, acc_up: { milliPercentage: 19000 } },
      { atk_up: { milliValue: 120000 }, cri_up: { milliPercentage: 20000 }, acc_up: { milliPercentage: 20000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue: 200000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue: 230000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue: 260000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue: 290000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue: 320000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue: 350000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue: 380000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue: 410000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue: 440000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue: 470000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue: 500000, term: 'immediate' } } }]
    ]
  },
  fps: {
    type: 'gear',
    id: 'fps',
    exclusive: {
      unit: 168
    },
    status_effects: [
      { atk_up: { milliValue:  50000 } },
      { atk_up: { milliValue:  55000 } },
      { atk_up: { milliValue:  60000 } },
      { atk_up: { milliValue:  65000 } },
      { atk_up: { milliValue:  70000 } },
      { atk_up: { milliValue:  75000 } },
      { atk_up: { milliValue:  80000 } },
      { atk_up: { milliValue:  85000 } },
      { atk_up: { milliValue:  90000 } },
      { atk_up: { milliValue:  95000 } },
      { atk_up: { milliValue: 100000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: 25000, term: 'infinite' } } }, { condition: { trigger: 'kill' }, details: { ap_up: { microValue: 300000, term: 'immediate' } } }, { condition: { trigger: 'ally_killed' }, details: { ap_up: { microValue: 300000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: 27500, term: 'infinite' } } }, { condition: { trigger: 'kill' }, details: { ap_up: { microValue: 300000, term: 'immediate' } } }, { condition: { trigger: 'ally_killed' }, details: { ap_up: { microValue: 300000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: 30000, term: 'infinite' } } }, { condition: { trigger: 'kill' }, details: { ap_up: { microValue: 300000, term: 'immediate' } } }, { condition: { trigger: 'ally_killed' }, details: { ap_up: { microValue: 300000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: 32500, term: 'infinite' } } }, { condition: { trigger: 'kill' }, details: { ap_up: { microValue: 300000, term: 'immediate' } } }, { condition: { trigger: 'ally_killed' }, details: { ap_up: { microValue: 300000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: 35000, term: 'infinite' } } }, { condition: { trigger: 'kill' }, details: { ap_up: { microValue: 300000, term: 'immediate' } } }, { condition: { trigger: 'ally_killed' }, details: { ap_up: { microValue: 300000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: 37500, term: 'infinite' } } }, { condition: { trigger: 'kill' }, details: { ap_up: { microValue: 300000, term: 'immediate' } } }, { condition: { trigger: 'ally_killed' }, details: { ap_up: { microValue: 300000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: 40000, term: 'infinite' } } }, { condition: { trigger: 'kill' }, details: { ap_up: { microValue: 300000, term: 'immediate' } } }, { condition: { trigger: 'ally_killed' }, details: { ap_up: { microValue: 300000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: 42500, term: 'infinite' } } }, { condition: { trigger: 'kill' }, details: { ap_up: { microValue: 300000, term: 'immediate' } } }, { condition: { trigger: 'ally_killed' }, details: { ap_up: { microValue: 300000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: 45000, term: 'infinite' } } }, { condition: { trigger: 'kill' }, details: { ap_up: { microValue: 300000, term: 'immediate' } } }, { condition: { trigger: 'ally_killed' }, details: { ap_up: { microValue: 300000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: 47500, term: 'infinite' } } }, { condition: { trigger: 'kill' }, details: { ap_up: { microValue: 300000, term: 'immediate' } } }, { condition: { trigger: 'ally_killed' }, details: { ap_up: { microValue: 300000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: 50000, term: 'infinite' } } }, { condition: { trigger: 'kill' }, details: { ap_up: { microValue: 300000, term: 'immediate' } } }, { condition: { trigger: 'ally_killed' }, details: { ap_up: { microValue: 300000, term: 'immediate' } } }]
    ]
  },
  horde_badge: {
    type: 'gear',
    id: 'horde_badge',
    exclusive: {
      unit: 40
    },
    status_effects: [
      { acc_up: { milliPercentage: 15000 }, spd_up: { microValue: 200000 } },
      { acc_up: { milliPercentage: 16500 }, spd_up: { microValue: 220000 } },
      { acc_up: { milliPercentage: 18000 }, spd_up: { microValue: 240000 } },
      { acc_up: { milliPercentage: 19500 }, spd_up: { microValue: 260000 } },
      { acc_up: { milliPercentage: 21000 }, spd_up: { microValue: 280000 } },
      { acc_up: { milliPercentage: 22500 }, spd_up: { microValue: 300000 } },
      { acc_up: { milliPercentage: 24000 }, spd_up: { microValue: 320000 } },
      { acc_up: { milliPercentage: 25500 }, spd_up: { microValue: 340000 } },
      { acc_up: { milliPercentage: 27000 }, spd_up: { microValue: 360000 } },
      { acc_up: { milliPercentage: 28500 }, spd_up: { microValue: 380000 } },
      { acc_up: { milliPercentage: 30000 }, spd_up: { microValue: 400000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { ap_up: { microValue: 1000000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { ap_up: { microValue: 1100000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { ap_up: { microValue: 1200000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { ap_up: { microValue: 1300000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { ap_up: { microValue: 1400000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { ap_up: { microValue: 1500000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { ap_up: { microValue: 1600000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { ap_up: { microValue: 1700000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { ap_up: { microValue: 1800000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { ap_up: { microValue: 1900000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { ap_up: { microValue: 2000000, term: 'immediate' } } }]
    ]
  },
  l_r_c_bullet: {
    type: 'gear',
    id: 'l_r_c_bullet',
    exclusive: {
      unit: 41
    },
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { light_type_damage_up: { milliPercentage: 20000, term: 'infinite' }, heavy_type_damage_up: { milliPercentage: 20000, term: 'infinite' }, defense_penetration: { milliPercentage: 20000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { light_type_damage_up: { milliPercentage: 21000, term: 'infinite' }, heavy_type_damage_up: { milliPercentage: 21000, term: 'infinite' }, defense_penetration: { milliPercentage: 23000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { light_type_damage_up: { milliPercentage: 22000, term: 'infinite' }, heavy_type_damage_up: { milliPercentage: 22000, term: 'infinite' }, defense_penetration: { milliPercentage: 26000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { light_type_damage_up: { milliPercentage: 23000, term: 'infinite' }, heavy_type_damage_up: { milliPercentage: 23000, term: 'infinite' }, defense_penetration: { milliPercentage: 29000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { light_type_damage_up: { milliPercentage: 24000, term: 'infinite' }, heavy_type_damage_up: { milliPercentage: 24000, term: 'infinite' }, defense_penetration: { milliPercentage: 32000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { light_type_damage_up: { milliPercentage: 25000, term: 'infinite' }, heavy_type_damage_up: { milliPercentage: 25000, term: 'infinite' }, defense_penetration: { milliPercentage: 35000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { light_type_damage_up: { milliPercentage: 26000, term: 'infinite' }, heavy_type_damage_up: { milliPercentage: 26000, term: 'infinite' }, defense_penetration: { milliPercentage: 38000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { light_type_damage_up: { milliPercentage: 27000, term: 'infinite' }, heavy_type_damage_up: { milliPercentage: 27000, term: 'infinite' }, defense_penetration: { milliPercentage: 41000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { light_type_damage_up: { milliPercentage: 28000, term: 'infinite' }, heavy_type_damage_up: { milliPercentage: 28000, term: 'infinite' }, defense_penetration: { milliPercentage: 44000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { light_type_damage_up: { milliPercentage: 29000, term: 'infinite' }, heavy_type_damage_up: { milliPercentage: 29000, term: 'infinite' }, defense_penetration: { milliPercentage: 47000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { light_type_damage_up: { milliPercentage: 30000, term: 'infinite' }, heavy_type_damage_up: { milliPercentage: 30000, term: 'infinite' }, defense_penetration: { milliPercentage: 50000, term: 'infinite' } } }]
    ]
  },
  mark_of_the_dragonslayer: {
    type: 'gear',
    id: 'mark_of_the_dragonslayer',
    exclusive: {
      unit: 118
    },
    status_effects: [
      { cri_up: { milliPercentage: 10000 }, eva_up: { milliPercentage: 27000 } },
      { cri_up: { milliPercentage: 12000 }, eva_up: { milliPercentage: 28350 } },
      { cri_up: { milliPercentage: 14000 }, eva_up: { milliPercentage: 29700 } },
      { cri_up: { milliPercentage: 16000 }, eva_up: { milliPercentage: 32400 } },
      { cri_up: { milliPercentage: 18000 }, eva_up: { milliPercentage: 36450 } },
      { cri_up: { milliPercentage: 20000 }, eva_up: { milliPercentage: 41850 } },
      { cri_up: { milliPercentage: 22000 }, eva_up: { milliPercentage: 45900 } },
      { cri_up: { milliPercentage: 24000 }, eva_up: { milliPercentage: 54000 } },
      { cri_up: { milliPercentage: 26000 }, eva_up: { milliPercentage: 64800 } },
      { cri_up: { milliPercentage: 28000 }, eva_up: { milliPercentage: 78300 } },
      { cri_up: { milliPercentage: 30000 }, eva_up: { milliPercentage: 94500 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { activation_rate_percentage_up: { tag: 'lucky_hit', effect: 'additional_damage', milliPercentage: 10000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { activation_rate_percentage_up: { tag: 'lucky_hit', effect: 'additional_damage', milliPercentage: 10000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { activation_rate_percentage_up: { tag: 'lucky_hit', effect: 'additional_damage', milliPercentage: 11000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { activation_rate_percentage_up: { tag: 'lucky_hit', effect: 'additional_damage', milliPercentage: 12000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { activation_rate_percentage_up: { tag: 'lucky_hit', effect: 'additional_damage', milliPercentage: 13000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { activation_rate_percentage_up: { tag: 'lucky_hit', effect: 'additional_damage', milliPercentage: 14000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { activation_rate_percentage_up: { tag: 'lucky_hit', effect: 'additional_damage', milliPercentage: 15000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { activation_rate_percentage_up: { tag: 'lucky_hit', effect: 'additional_damage', milliPercentage: 16000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { activation_rate_percentage_up: { tag: 'lucky_hit', effect: 'additional_damage', milliPercentage: 17000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { activation_rate_percentage_up: { tag: 'lucky_hit', effect: 'additional_damage', milliPercentage: 18000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { activation_rate_percentage_up: { tag: 'lucky_hit', effect: 'additional_damage', milliPercentage: 20000, term: 'infinite' } } }]
    ]
  },
  medusa: {
    type: 'gear',
    id: 'medusa',
    exclusive: {
      unit: 124
    },
    status_effects: [
      { electric_resist_up: { milliPercentage: 40000 } },
      { electric_resist_up: { milliPercentage: 44000 } },
      { electric_resist_up: { milliPercentage: 48000 } },
      { electric_resist_up: { milliPercentage: 52000 } },
      { electric_resist_up: { milliPercentage: 56000 } },
      { electric_resist_up: { milliPercentage: 60000 } },
      { electric_resist_up: { milliPercentage: 64000 } },
      { electric_resist_up: { milliPercentage: 68000 } },
      { electric_resist_up: { milliPercentage: 72000 } },
      { electric_resist_up: { milliPercentage: 76000 } },
      { electric_resist_up: { milliPercentage: 80000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { battle_continuation: { milliPercentage: 30000, term: 'infinite', times: 1 }, acc_up: { milliPercentage: 30000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { battle_continuation: { milliPercentage: 32000, term: 'infinite', times: 1 }, acc_up: { milliPercentage: 35000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { battle_continuation: { milliPercentage: 34000, term: 'infinite', times: 1 }, acc_up: { milliPercentage: 40000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { battle_continuation: { milliPercentage: 36000, term: 'infinite', times: 1 }, acc_up: { milliPercentage: 45000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { battle_continuation: { milliPercentage: 38000, term: 'infinite', times: 1 }, acc_up: { milliPercentage: 50000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { battle_continuation: { milliPercentage: 40000, term: 'infinite', times: 1 }, acc_up: { milliPercentage: 55000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { battle_continuation: { milliPercentage: 42000, term: 'infinite', times: 1 }, acc_up: { milliPercentage: 60000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { battle_continuation: { milliPercentage: 44000, term: 'infinite', times: 1 }, acc_up: { milliPercentage: 65000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { battle_continuation: { milliPercentage: 46000, term: 'infinite', times: 1 }, acc_up: { milliPercentage: 70000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { battle_continuation: { milliPercentage: 48000, term: 'infinite', times: 1 }, acc_up: { milliPercentage: 75000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { battle_continuation: { milliPercentage: 50000, term: 'infinite', times: 1 }, acc_up: { milliPercentage: 80000, term: 'infinite' } } }]
    ]
  },
  mg80_retrofit_kit: {
    type: 'gear',
    id: 'mg80_retrofit_kit',
    exclusive: {
      unit: 33
    },
    status_effects: [
      { atk_up: { milliValue: 45000 }, cri_up: { milliPercentage:  5000 }, spd_up: { microValue: 150000 } },
      { atk_up: { milliValue: 49500 }, cri_up: { milliPercentage:  5250 }, spd_up: { microValue: 157500 } },
      { atk_up: { milliValue: 54000 }, cri_up: { milliPercentage:  5500 }, spd_up: { microValue: 165000 } },
      { atk_up: { milliValue: 58500 }, cri_up: { milliPercentage:  6000 }, spd_up: { microValue: 172500 } },
      { atk_up: { milliValue: 63000 }, cri_up: { milliPercentage:  6750 }, spd_up: { microValue: 180000 } },
      { atk_up: { milliValue: 67500 }, cri_up: { milliPercentage:  7750 }, spd_up: { microValue: 187500 } },
      { atk_up: { milliValue: 72000 }, cri_up: { milliPercentage:  8500 }, spd_up: { microValue: 195000 } },
      { atk_up: { milliValue: 76500 }, cri_up: { milliPercentage: 10000 }, spd_up: { microValue: 202500 } },
      { atk_up: { milliValue: 81000 }, cri_up: { milliPercentage: 12000 }, spd_up: { microValue: 210000 } },
      { atk_up: { milliValue: 86000 }, cri_up: { milliPercentage: 15000 }, spd_up: { microValue: 217500 } },
      { atk_up: { milliValue: 90000 }, cri_up: { milliPercentage: 20000 }, spd_up: { microValue: 225000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { light_type_damage_up: { milliPercentage: 15000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { light_type_damage_up: { milliPercentage: 15000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { light_type_damage_up: { milliPercentage: 16000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { light_type_damage_up: { milliPercentage: 17000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { light_type_damage_up: { milliPercentage: 18000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { light_type_damage_up: { milliPercentage: 19000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { light_type_damage_up: { milliPercentage: 20000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { light_type_damage_up: { milliPercentage: 21000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { light_type_damage_up: { milliPercentage: 22000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { light_type_damage_up: { milliPercentage: 23000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { light_type_damage_up: { milliPercentage: 25000, term: 'infinite' } } }]
    ]
  },
  mmo_rpg: {
    type: 'gear',
    id: 'mmo_rpg',
    exclusive: {
      unit: 123
    },
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { damage_multiplier_up: { milliPercentage: 20000, term: { for_rounds: 999 } }, range_up: { value: 1, term: { for_rounds: 999 } }, battle_continuation: { value: 150, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_multiplier_up: { milliPercentage: 22000, term: { for_rounds: 999 } }, range_up: { value: 1, term: { for_rounds: 999 } }, battle_continuation: { value: 165, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_multiplier_up: { milliPercentage: 24000, term: { for_rounds: 999 } }, range_up: { value: 1, term: { for_rounds: 999 } }, battle_continuation: { value: 180, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_multiplier_up: { milliPercentage: 26000, term: { for_rounds: 999 } }, range_up: { value: 1, term: { for_rounds: 999 } }, battle_continuation: { value: 195, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_multiplier_up: { milliPercentage: 28000, term: { for_rounds: 999 } }, range_up: { value: 1, term: { for_rounds: 999 } }, battle_continuation: { value: 210, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_multiplier_up: { milliPercentage: 30000, term: { for_rounds: 999 } }, range_up: { value: 1, term: { for_rounds: 999 } }, battle_continuation: { value: 225, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_multiplier_up: { milliPercentage: 32000, term: { for_rounds: 999 } }, range_up: { value: 1, term: { for_rounds: 999 } }, battle_continuation: { value: 240, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_multiplier_up: { milliPercentage: 34000, term: { for_rounds: 999 } }, range_up: { value: 1, term: { for_rounds: 999 } }, battle_continuation: { value: 255, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_multiplier_up: { milliPercentage: 36000, term: { for_rounds: 999 } }, range_up: { value: 1, term: { for_rounds: 999 } }, battle_continuation: { value: 270, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_multiplier_up: { milliPercentage: 38000, term: { for_rounds: 999 } }, range_up: { value: 1, term: { for_rounds: 999 } }, battle_continuation: { value: 285, term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_multiplier_up: { milliPercentage: 40000, term: { for_rounds: 999 } }, range_up: { value: 1, term: { for_rounds: 999 } }, battle_continuation: { value: 300, term: { for_rounds: 999 } } } }]
    ]
  },
  monomolecular_scissors: {
    type: 'gear',
    id: 'monomolecular_scissors',
    exclusive: {
      unit: 97
    },
    status_effects: [
      { cri_up: { milliPercentage: 25000 } },
      { cri_up: { milliPercentage: 27500 } },
      { cri_up: { milliPercentage: 30000 } },
      { cri_up: { milliPercentage: 32500 } },
      { cri_up: { milliPercentage: 35000 } },
      { cri_up: { milliPercentage: 37500 } },
      { cri_up: { milliPercentage: 40000 } },
      { cri_up: { milliPercentage: 42500 } },
      { cri_up: { milliPercentage: 45000 } },
      { cri_up: { milliPercentage: 47500 } },
      { cri_up: { milliPercentage: 50000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue:  500000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue:  550000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue:  600000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue:  650000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue:  700000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue:  750000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue:  800000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue:  850000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue:  900000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue:  950000, term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { ap_up: { microValue: 1000000, term: 'immediate' } } }]
    ]
  },
  pest_shredder: {
    type: 'gear',
    id: 'pest_shredder',
    exclusive: {
      unit: 7
    },
    status_effects: [
      { atk_up: { milliValue:  60000 }, acc_up: { milliPercentage: 10000 }, cri_up: { milliPercentage:  5000 } },
      { atk_up: { milliValue:  66000 }, acc_up: { milliPercentage: 12000 }, cri_up: { milliPercentage:  6000 } },
      { atk_up: { milliValue:  72000 }, acc_up: { milliPercentage: 14000 }, cri_up: { milliPercentage:  7000 } },
      { atk_up: { milliValue:  78000 }, acc_up: { milliPercentage: 16000 }, cri_up: { milliPercentage:  8000 } },
      { atk_up: { milliValue:  84000 }, acc_up: { milliPercentage: 18000 }, cri_up: { milliPercentage:  9000 } },
      { atk_up: { milliValue:  90000 }, acc_up: { milliPercentage: 20000 }, cri_up: { milliPercentage: 10000 } },
      { atk_up: { milliValue:  96000 }, acc_up: { milliPercentage: 22000 }, cri_up: { milliPercentage: 11000 } },
      { atk_up: { milliValue: 102000 }, acc_up: { milliPercentage: 24000 }, cri_up: { milliPercentage: 12000 } },
      { atk_up: { milliValue: 108000 }, acc_up: { milliPercentage: 26000 }, cri_up: { milliPercentage: 13000 } },
      { atk_up: { milliValue: 114000 }, acc_up: { milliPercentage: 28000 }, cri_up: { milliPercentage: 14000 } },
      { atk_up: { milliValue: 120000 }, acc_up: { milliPercentage: 30000 }, cri_up: { milliPercentage: 15000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_round' }, details: { defense_penetration: { milliPercentage: 25000, term: { for_rounds: 1 } }, debuff_removal: { effect: 'atk_down', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { defense_penetration: { milliPercentage: 29000, term: { for_rounds: 1 } }, debuff_removal: { effect: 'atk_down', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { defense_penetration: { milliPercentage: 33000, term: { for_rounds: 1 } }, debuff_removal: { effect: 'atk_down', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { defense_penetration: { milliPercentage: 37000, term: { for_rounds: 1 } }, debuff_removal: { effect: 'atk_down', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { defense_penetration: { milliPercentage: 41000, term: { for_rounds: 1 } }, debuff_removal: { effect: 'atk_down', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { defense_penetration: { milliPercentage: 45000, term: { for_rounds: 1 } }, debuff_removal: { effect: 'atk_down', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { defense_penetration: { milliPercentage: 49000, term: { for_rounds: 1 } }, debuff_removal: { effect: 'atk_down', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { defense_penetration: { milliPercentage: 53000, term: { for_rounds: 1 } }, debuff_removal: { effect: 'atk_down', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { defense_penetration: { milliPercentage: 57000, term: { for_rounds: 1 } }, debuff_removal: { effect: 'atk_down', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { defense_penetration: { milliPercentage: 61000, term: { for_rounds: 1 } }, debuff_removal: { effect: 'atk_down', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { defense_penetration: { milliPercentage: 65000, term: { for_rounds: 1 } }, debuff_removal: { effect: 'atk_down', term: 'immediate' } } }]
    ]
  },
  prototype_warhead: {
    type: 'gear',
    id: 'prototype_warhead',
    exclusive: {
      unit: 24
    },
    status_effects: [
      { atk_up: { milliValue: 150000 } },
      { atk_up: { milliValue: 165000 } },
      { atk_up: { milliValue: 180000 } },
      { atk_up: { milliValue: 195000 } },
      { atk_up: { milliValue: 210000 } },
      { atk_up: { milliValue: 225000 } },
      { atk_up: { milliValue: 240000 } },
      { atk_up: { milliValue: 255000 } },
      { atk_up: { milliValue: 270000 } },
      { atk_up: { milliValue: 285000 } },
      { atk_up: { milliValue: 300000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { damage_multiplier_up: { milliPercentage: 30000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_multiplier_up: { milliPercentage: 32000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_multiplier_up: { milliPercentage: 34000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_multiplier_up: { milliPercentage: 36000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_multiplier_up: { milliPercentage: 38000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_multiplier_up: { milliPercentage: 40000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_multiplier_up: { milliPercentage: 42000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_multiplier_up: { milliPercentage: 44000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_multiplier_up: { milliPercentage: 46000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_multiplier_up: { milliPercentage: 48000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_multiplier_up: { milliPercentage: 50000, term: 'infinite' } } }]
    ]
  },
  rangers_combat_equipment_set: {
    type: 'gear',
    id: 'rangers_combat_equipment_set',
    exclusive: {
      unit: 135
    },
    status_effects: [
      { atk_up: { milliValue:  75000 }, cri_up: { milliPercentage: 10000 }, acc_up: { milliPercentage: 10000 } },
      { atk_up: { milliValue:  82500 }, cri_up: { milliPercentage: 11000 }, acc_up: { milliPercentage: 11000 } },
      { atk_up: { milliValue:  90000 }, cri_up: { milliPercentage: 12000 }, acc_up: { milliPercentage: 12000 } },
      { atk_up: { milliValue:  97500 }, cri_up: { milliPercentage: 13000 }, acc_up: { milliPercentage: 13000 } },
      { atk_up: { milliValue: 105000 }, cri_up: { milliPercentage: 14000 }, acc_up: { milliPercentage: 14000 } },
      { atk_up: { milliValue: 112500 }, cri_up: { milliPercentage: 15000 }, acc_up: { milliPercentage: 15000 } },
      { atk_up: { milliValue: 120000 }, cri_up: { milliPercentage: 16000 }, acc_up: { milliPercentage: 16000 } },
      { atk_up: { milliValue: 127500 }, cri_up: { milliPercentage: 17000 }, acc_up: { milliPercentage: 17000 } },
      { atk_up: { milliValue: 135000 }, cri_up: { milliPercentage: 18000 }, acc_up: { milliPercentage: 18000 } },
      { atk_up: { milliValue: 142500 }, cri_up: { milliPercentage: 19000 }, acc_up: { milliPercentage: 19000 } },
      { atk_up: { milliValue: 150000 }, cri_up: { milliPercentage: 20000 }, acc_up: { milliPercentage: 20000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_round' }, details: { defense_penetration: { milliPercentage: 10000, term: { for_rounds: 1 } }, range_up: { value: 1, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { defense_penetration: { milliPercentage: 11000, term: { for_rounds: 1 } }, range_up: { value: 1, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { defense_penetration: { milliPercentage: 12000, term: { for_rounds: 1 } }, range_up: { value: 1, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { defense_penetration: { milliPercentage: 13000, term: { for_rounds: 1 } }, range_up: { value: 1, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { defense_penetration: { milliPercentage: 14000, term: { for_rounds: 1 } }, range_up: { value: 1, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { defense_penetration: { milliPercentage: 15000, term: { for_rounds: 1 } }, range_up: { value: 1, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { defense_penetration: { milliPercentage: 16000, term: { for_rounds: 1 } }, range_up: { value: 1, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { defense_penetration: { milliPercentage: 17000, term: { for_rounds: 1 } }, range_up: { value: 1, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { defense_penetration: { milliPercentage: 18000, term: { for_rounds: 1 } }, range_up: { value: 1, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { defense_penetration: { milliPercentage: 19000, term: { for_rounds: 1 } }, range_up: { value: 1, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { defense_penetration: { milliPercentage: 20000, term: { for_rounds: 1 } }, range_up: { value: 1, term: { for_rounds: 1 } } } }]
    ]
  },
  secret_arts: {
    type: 'gear',
    id: 'secret_arts',
    exclusive: {
      unit: 120
    },
    status_effects: [
      { cri_up: { milliPercentage: 15000 } },
      { cri_up: { milliPercentage: 16500 } },
      { cri_up: { milliPercentage: 18000 } },
      { cri_up: { milliPercentage: 19500 } },
      { cri_up: { milliPercentage: 21000 } },
      { cri_up: { milliPercentage: 22500 } },
      { cri_up: { milliPercentage: 24000 } },
      { cri_up: { milliPercentage: 25500 } },
      { cri_up: { milliPercentage: 27000 } },
      { cri_up: { milliPercentage: 28500 } },
      { cri_up: { milliPercentage: 30000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { re_attack: { term: 'infinite' } } }, { condition: { trigger: 'kill', state: { tagged: 'gold_forged_through_hundred_refinement' } }, details: { atk_value_up: { milliValue: 100000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { re_attack: { term: 'infinite' } } }, { condition: { trigger: 'kill', state: { tagged: 'gold_forged_through_hundred_refinement' } }, details: { atk_value_up: { milliValue: 105000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { re_attack: { term: 'infinite' } } }, { condition: { trigger: 'kill', state: { tagged: 'gold_forged_through_hundred_refinement' } }, details: { atk_value_up: { milliValue: 110000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { re_attack: { term: 'infinite' } } }, { condition: { trigger: 'kill', state: { tagged: 'gold_forged_through_hundred_refinement' } }, details: { atk_value_up: { milliValue: 115000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { re_attack: { term: 'infinite' } } }, { condition: { trigger: 'kill', state: { tagged: 'gold_forged_through_hundred_refinement' } }, details: { atk_value_up: { milliValue: 120000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { re_attack: { term: 'infinite' } } }, { condition: { trigger: 'kill', state: { tagged: 'gold_forged_through_hundred_refinement' } }, details: { atk_value_up: { milliValue: 125000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { re_attack: { term: 'infinite' } } }, { condition: { trigger: 'kill', state: { tagged: 'gold_forged_through_hundred_refinement' } }, details: { atk_value_up: { milliValue: 130000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { re_attack: { term: 'infinite' } } }, { condition: { trigger: 'kill', state: { tagged: 'gold_forged_through_hundred_refinement' } }, details: { atk_value_up: { milliValue: 135000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { re_attack: { term: 'infinite' } } }, { condition: { trigger: 'kill', state: { tagged: 'gold_forged_through_hundred_refinement' } }, details: { atk_value_up: { milliValue: 140000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { re_attack: { term: 'infinite' } } }, { condition: { trigger: 'kill', state: { tagged: 'gold_forged_through_hundred_refinement' } }, details: { atk_value_up: { milliValue: 145000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { re_attack: { term: 'infinite' } } }, { condition: { trigger: 'kill', state: { tagged: 'gold_forged_through_hundred_refinement' } }, details: { atk_value_up: { milliValue: 150000, term: 'infinite' } } }]
    ]
  },
  shield_blade: {
    type: 'gear',
    id: 'shield_blade',
    exclusive: {
      unit: 46
    },
    status_effects: [
      { hp_up: { value:  750 } },
      { hp_up: { value:  825 } },
      { hp_up: { value:  900 } },
      { hp_up: { value:  975 } },
      { hp_up: { value: 1050 } },
      { hp_up: { value: 1125 } },
      { hp_up: { value: 1200 } },
      { hp_up: { value: 1275 } },
      { hp_up: { value: 1350 } },
      { hp_up: { value: 1425 } },
      { hp_up: { value: 1500 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { cri_up: { milliPercentage: 25000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { cri_up: { milliPercentage: 27500, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { cri_up: { milliPercentage: 30000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { cri_up: { milliPercentage: 32500, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { cri_up: { milliPercentage: 35000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { cri_up: { milliPercentage: 37500, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { cri_up: { milliPercentage: 40000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { cri_up: { milliPercentage: 42500, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { cri_up: { milliPercentage: 45000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { cri_up: { milliPercentage: 47500, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { cri_up: { milliPercentage: 50000, term: 'infinite' } } }]
    ]
  },
  sk_14_p_c_c: {
    type: 'gear',
    id: 'sk_14_p_c_c',
    exclusive: {
      unit: 82
    },
    status_effects: [
      { atk_up: { milliValue:  35000 }, cri_up: { milliPercentage:  5000 } },
      { atk_up: { milliValue:  36750 }, cri_up: { milliPercentage:  5250 } },
      { atk_up: { milliValue:  38500 }, cri_up: { milliPercentage:  5500 } },
      { atk_up: { milliValue:  42000 }, cri_up: { milliPercentage:  6000 } },
      { atk_up: { milliValue:  47250 }, cri_up: { milliPercentage:  6750 } },
      { atk_up: { milliValue:  54250 }, cri_up: { milliPercentage:  7750 } },
      { atk_up: { milliValue:  59500 }, cri_up: { milliPercentage:  8500 } },
      { atk_up: { milliValue:  70000 }, cri_up: { milliPercentage: 10000 } },
      { atk_up: { milliValue:  84000 }, cri_up: { milliPercentage: 12000 } },
      { atk_up: { milliValue: 105000 }, cri_up: { milliPercentage: 15000 } },
      { atk_up: { milliValue: 125000 }, cri_up: { milliPercentage: 20000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_round' }, details: { range_up: { value: 1, term: { for_rounds: 1 } }, debuff_removal: { effect: 'range_down', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { range_up: { value: 1, term: { for_rounds: 1 } }, debuff_removal: { effect: 'range_down', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { range_up: { value: 1, term: { for_rounds: 1 } }, debuff_removal: { effect: 'range_down', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { range_up: { value: 1, term: { for_rounds: 1 } }, debuff_removal: { effect: 'range_down', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { range_up: { value: 1, term: { for_rounds: 1 } }, debuff_removal: { effect: 'range_down', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { range_up: { value: 1, term: { for_rounds: 1 } }, debuff_removal: { effect: 'range_down', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { range_up: { value: 1, term: { for_rounds: 1 } }, debuff_removal: { effect: 'range_down', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { range_up: { value: 1, term: { for_rounds: 1 } }, debuff_removal: { effect: 'range_down', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { range_up: { value: 1, term: { for_rounds: 1 } }, debuff_removal: { effect: 'range_down', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { range_up: { value: 1, term: { for_rounds: 1 } }, debuff_removal: { effect: 'range_down', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { range_up: { value: 1, term: { for_rounds: 1 } }, debuff_removal: { effect: 'range_down', term: 'immediate' } } }]
    ]
  },
  silver_bullet_needle: {
    type: 'gear',
    id: 'silver_bullet_needle',
    exclusive: {
      unit: 98
    },
    status_effects: [
      { acc_up: { milliPercentage: 15000 }, cri_up: { milliPercentage: 10000 }, spd_up: { microValue: 100000 } },
      { acc_up: { milliPercentage: 16500 }, cri_up: { milliPercentage: 11000 }, spd_up: { microValue: 110000 } },
      { acc_up: { milliPercentage: 18000 }, cri_up: { milliPercentage: 12000 }, spd_up: { microValue: 120000 } },
      { acc_up: { milliPercentage: 19500 }, cri_up: { milliPercentage: 13000 }, spd_up: { microValue: 130000 } },
      { acc_up: { milliPercentage: 21000 }, cri_up: { milliPercentage: 14000 }, spd_up: { microValue: 140000 } },
      { acc_up: { milliPercentage: 22500 }, cri_up: { milliPercentage: 15000 }, spd_up: { microValue: 150000 } },
      { acc_up: { milliPercentage: 24000 }, cri_up: { milliPercentage: 16000 }, spd_up: { microValue: 160000 } },
      { acc_up: { milliPercentage: 25500 }, cri_up: { milliPercentage: 17000 }, spd_up: { microValue: 170000 } },
      { acc_up: { milliPercentage: 27000 }, cri_up: { milliPercentage: 18000 }, spd_up: { microValue: 180000 } },
      { acc_up: { milliPercentage: 28500 }, cri_up: { milliPercentage: 19000 }, spd_up: { microValue: 190000 } },
      { acc_up: { milliPercentage: 30000 }, cri_up: { milliPercentage: 20000 }, spd_up: { microValue: 200000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'attack' }, details: { re_attack: { term: 'immediate' } } }],
      [{ condition: { trigger: 'attack' }, details: { re_attack: { term: 'immediate' } } }],
      [{ condition: { trigger: 'attack' }, details: { re_attack: { term: 'immediate' } } }],
      [{ condition: { trigger: 'attack' }, details: { re_attack: { term: 'immediate' } } }],
      [{ condition: { trigger: 'attack' }, details: { re_attack: { term: 'immediate' } } }],
      [{ condition: { trigger: 'attack' }, details: { re_attack: { term: 'immediate' } } }],
      [{ condition: { trigger: 'attack' }, details: { re_attack: { term: 'immediate' } } }],
      [{ condition: { trigger: 'attack' }, details: { re_attack: { term: 'immediate' } } }],
      [{ condition: { trigger: 'attack' }, details: { re_attack: { term: 'immediate' } } }],
      [{ condition: { trigger: 'attack' }, details: { re_attack: { term: 'immediate' } } }],
      [{ condition: { trigger: 'attack' }, details: { re_attack: { term: 'immediate' } } }]
    ]
  },
  space: {
    type: 'gear',
    id: 'space',
    exclusive: {
      unit: 104
    },
    status_effects: [
      { atk_up: { milliValue: 100000 } },
      { atk_up: { milliValue: 110000 } },
      { atk_up: { milliValue: 120000 } },
      { atk_up: { milliValue: 130000 } },
      { atk_up: { milliValue: 140000 } },
      { atk_up: { milliValue: 150000 } },
      { atk_up: { milliValue: 160000 } },
      { atk_up: { milliValue: 170000 } },
      { atk_up: { milliValue: 180000 } },
      { atk_up: { milliValue: 190000 } },
      { atk_up: { milliValue: 200000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { re_attack: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { re_attack: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { re_attack: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { re_attack: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { re_attack: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { re_attack: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { re_attack: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { re_attack: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { re_attack: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { re_attack: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { re_attack: { term: 'infinite' } } }]
    ]
  },
  space_booster: {
    type: 'gear',
    id: 'space_booster',
    exclusive: {
      unit: 103
    },
    status_effects: [
      { atk_up: { milliValue: 47500 }, eva_up: { milliPercentage:  70000 }, spd_up: { microValue: 100000 } },
      { atk_up: { milliValue: 52250 }, eva_up: { milliPercentage:  73500 }, spd_up: { microValue: 110000 } },
      { atk_up: { milliValue: 57000 }, eva_up: { milliPercentage:  77000 }, spd_up: { microValue: 120000 } },
      { atk_up: { milliValue: 61750 }, eva_up: { milliPercentage:  80500 }, spd_up: { microValue: 130000 } },
      { atk_up: { milliValue: 66500 }, eva_up: { milliPercentage:  84000 }, spd_up: { microValue: 140000 } },
      { atk_up: { milliValue: 71250 }, eva_up: { milliPercentage:  87500 }, spd_up: { microValue: 150000 } },
      { atk_up: { milliValue: 76000 }, eva_up: { milliPercentage:  91000 }, spd_up: { microValue: 160000 } },
      { atk_up: { milliValue: 80750 }, eva_up: { milliPercentage:  94500 }, spd_up: { microValue: 170000 } },
      { atk_up: { milliValue: 85500 }, eva_up: { milliPercentage:  98000 }, spd_up: { microValue: 180000 } },
      { atk_up: { milliValue: 90250 }, eva_up: { milliPercentage: 101500 }, spd_up: { microValue: 190000 } },
      { atk_up: { milliValue: 95000 }, eva_up: { milliPercentage: 105000 }, spd_up: { microValue: 200000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_round' }, details: { cri_up: { milliPercentage:  5000, term: { for_rounds: 1 } }, debuff_removal: { effect: 'eva_down', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { cri_up: { milliPercentage:  6000, term: { for_rounds: 1 } }, debuff_removal: { effect: 'eva_down', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { cri_up: { milliPercentage:  7000, term: { for_rounds: 1 } }, debuff_removal: { effect: 'eva_down', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { cri_up: { milliPercentage:  8000, term: { for_rounds: 1 } }, debuff_removal: { effect: 'eva_down', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { cri_up: { milliPercentage:  9000, term: { for_rounds: 1 } }, debuff_removal: { effect: 'eva_down', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { cri_up: { milliPercentage: 10000, term: { for_rounds: 1 } }, debuff_removal: { effect: 'eva_down', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { cri_up: { milliPercentage: 11000, term: { for_rounds: 1 } }, debuff_removal: { effect: 'eva_down', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { cri_up: { milliPercentage: 12000, term: { for_rounds: 1 } }, debuff_removal: { effect: 'eva_down', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { cri_up: { milliPercentage: 13000, term: { for_rounds: 1 } }, debuff_removal: { effect: 'eva_down', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { cri_up: { milliPercentage: 14000, term: { for_rounds: 1 } }, debuff_removal: { effect: 'eva_down', term: 'immediate' } } }],
      [{ condition: { trigger: 'start_round' }, details: { cri_up: { milliPercentage: 15000, term: { for_rounds: 1 } }, debuff_removal: { effect: 'eva_down', term: 'immediate' } } }]
    ]
  },
  special_coated_rifle_rounds: {
    type: 'gear',
    id: 'special_coated_rifle_rounds',
    exclusive: {
      unit: 3
    },
    status_effects: [
      { atk_up: { milliValue:  30000 }, cri_up: { milliPercentage:  5000 } },
      { atk_up: { milliValue:  31500 }, cri_up: { milliPercentage:  5250 } },
      { atk_up: { milliValue:  33000 }, cri_up: { milliPercentage:  5500 } },
      { atk_up: { milliValue:  36000 }, cri_up: { milliPercentage:  6000 } },
      { atk_up: { milliValue:  40500 }, cri_up: { milliPercentage:  6750 } },
      { atk_up: { milliValue:  46500 }, cri_up: { milliPercentage:  7750 } },
      { atk_up: { milliValue:  51000 }, cri_up: { milliPercentage:  8500 } },
      { atk_up: { milliValue:  60000 }, cri_up: { milliPercentage: 10000 } },
      { atk_up: { milliValue:  72000 }, cri_up: { milliPercentage: 12000 } },
      { atk_up: { milliValue:  87000 }, cri_up: { milliPercentage: 14500 } },
      { atk_up: { milliValue: 105000 }, cri_up: { milliPercentage: 17500 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: 30000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: 30000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: 35000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: 40000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: 45000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: 50000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: 55000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: 60000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: 65000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: 70000, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { defense_penetration: { milliPercentage: 75000, term: 'infinite' } } }]
    ]
  },
  special_combatants_spike_necklace: {
    type: 'gear',
    id: 'special_combatants_spike_necklace',
    exclusive: {
      unit: 138
    },
    status_effects: [
      { atk_up: { milliValue: 100000 }, cri_up: { milliPercentage:  5000 } },
      { atk_up: { milliValue: 110000 }, cri_up: { milliPercentage:  6000 } },
      { atk_up: { milliValue: 120000 }, cri_up: { milliPercentage:  7000 } },
      { atk_up: { milliValue: 130000 }, cri_up: { milliPercentage:  8000 } },
      { atk_up: { milliValue: 140000 }, cri_up: { milliPercentage:  9000 } },
      { atk_up: { milliValue: 150000 }, cri_up: { milliPercentage: 10000 } },
      { atk_up: { milliValue: 160000 }, cri_up: { milliPercentage: 11000 } },
      { atk_up: { milliValue: 170000 }, cri_up: { milliPercentage: 12000 } },
      { atk_up: { milliValue: 180000 }, cri_up: { milliPercentage: 13000 } },
      { atk_up: { milliValue: 190000 }, cri_up: { milliPercentage: 14000 } },
      { atk_up: { milliValue: 200000 }, cri_up: { milliPercentage: 15000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_round' }, details: { defense_penetration: { milliPercentage: 10000, term: { for_rounds: 1 } } } }, { condition: { trigger: 'start_round', round: { at: 1 } }, details: { fixed_damage_over_time: { value: 650, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { defense_penetration: { milliPercentage: 11000, term: { for_rounds: 1 } } } }, { condition: { trigger: 'start_round', round: { at: 1 } }, details: { fixed_damage_over_time: { value: 650, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { defense_penetration: { milliPercentage: 12000, term: { for_rounds: 1 } } } }, { condition: { trigger: 'start_round', round: { at: 1 } }, details: { fixed_damage_over_time: { value: 650, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { defense_penetration: { milliPercentage: 13000, term: { for_rounds: 1 } } } }, { condition: { trigger: 'start_round', round: { at: 1 } }, details: { fixed_damage_over_time: { value: 650, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { defense_penetration: { milliPercentage: 14000, term: { for_rounds: 1 } } } }, { condition: { trigger: 'start_round', round: { at: 1 } }, details: { fixed_damage_over_time: { value: 650, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { defense_penetration: { milliPercentage: 15000, term: { for_rounds: 1 } } } }, { condition: { trigger: 'start_round', round: { at: 1 } }, details: { fixed_damage_over_time: { value: 650, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { defense_penetration: { milliPercentage: 16000, term: { for_rounds: 1 } } } }, { condition: { trigger: 'start_round', round: { at: 1 } }, details: { fixed_damage_over_time: { value: 650, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { defense_penetration: { milliPercentage: 18000, term: { for_rounds: 1 } } } }, { condition: { trigger: 'start_round', round: { at: 1 } }, details: { fixed_damage_over_time: { value: 650, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { defense_penetration: { milliPercentage: 20000, term: { for_rounds: 1 } } } }, { condition: { trigger: 'start_round', round: { at: 1 } }, details: { fixed_damage_over_time: { value: 650, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { defense_penetration: { milliPercentage: 22000, term: { for_rounds: 1 } } } }, { condition: { trigger: 'start_round', round: { at: 1 } }, details: { fixed_damage_over_time: { value: 650, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { defense_penetration: { milliPercentage: 24000, term: { for_rounds: 1 } } } }, { condition: { trigger: 'start_round', round: { at: 1 } }, details: { fixed_damage_over_time: { value: 650, term: { for_rounds: 1 } } } }]
    ]
  },
  special_frame_for_rough_terrain: {
    type: 'gear',
    id: 'special_frame_for_rough_terrain',
    exclusive: {
      unit: 133
    },
    status_effects: [
      { hp_up: { value: 250 }, def_up: { milliValue:  95000 } },
      { hp_up: { value: 275 }, def_up: { milliValue: 104500 } },
      { hp_up: { value: 300 }, def_up: { milliValue: 114000 } },
      { hp_up: { value: 325 }, def_up: { milliValue: 123500 } },
      { hp_up: { value: 350 }, def_up: { milliValue: 133000 } },
      { hp_up: { value: 375 }, def_up: { milliValue: 142500 } },
      { hp_up: { value: 400 }, def_up: { milliValue: 152000 } },
      { hp_up: { value: 425 }, def_up: { milliValue: 161500 } },
      { hp_up: { value: 450 }, def_up: { milliValue: 171000 } },
      { hp_up: { value: 475 }, def_up: { milliValue: 180500 } },
      { hp_up: { value: 500 }, def_up: { milliValue: 190000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_round' }, details: { damage_reduction_up: { milliPercentage:  5000, term: { for_rounds: 1 } }, fire_resist_up: { milliPercentage: 15000, term: { for_rounds: 1 } }, ice_resist_up: { milliPercentage: 15000, term: { for_rounds: 1 } }, electric_resist_up: { milliPercentage: 15000, term: { for_rounds: 1 } }, column_protect: { term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { damage_reduction_up: { milliPercentage:  6000, term: { for_rounds: 1 } }, fire_resist_up: { milliPercentage: 17000, term: { for_rounds: 1 } }, ice_resist_up: { milliPercentage: 17000, term: { for_rounds: 1 } }, electric_resist_up: { milliPercentage: 17000, term: { for_rounds: 1 } }, column_protect: { term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { damage_reduction_up: { milliPercentage:  7000, term: { for_rounds: 1 } }, fire_resist_up: { milliPercentage: 19000, term: { for_rounds: 1 } }, ice_resist_up: { milliPercentage: 19000, term: { for_rounds: 1 } }, electric_resist_up: { milliPercentage: 19000, term: { for_rounds: 1 } }, column_protect: { term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { damage_reduction_up: { milliPercentage:  8000, term: { for_rounds: 1 } }, fire_resist_up: { milliPercentage: 21000, term: { for_rounds: 1 } }, ice_resist_up: { milliPercentage: 21000, term: { for_rounds: 1 } }, electric_resist_up: { milliPercentage: 21000, term: { for_rounds: 1 } }, column_protect: { term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { damage_reduction_up: { milliPercentage:  9000, term: { for_rounds: 1 } }, fire_resist_up: { milliPercentage: 23000, term: { for_rounds: 1 } }, ice_resist_up: { milliPercentage: 23000, term: { for_rounds: 1 } }, electric_resist_up: { milliPercentage: 23000, term: { for_rounds: 1 } }, column_protect: { term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { damage_reduction_up: { milliPercentage: 10000, term: { for_rounds: 1 } }, fire_resist_up: { milliPercentage: 25000, term: { for_rounds: 1 } }, ice_resist_up: { milliPercentage: 25000, term: { for_rounds: 1 } }, electric_resist_up: { milliPercentage: 25000, term: { for_rounds: 1 } }, column_protect: { term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { damage_reduction_up: { milliPercentage: 11000, term: { for_rounds: 1 } }, fire_resist_up: { milliPercentage: 27000, term: { for_rounds: 1 } }, ice_resist_up: { milliPercentage: 27000, term: { for_rounds: 1 } }, electric_resist_up: { milliPercentage: 27000, term: { for_rounds: 1 } }, column_protect: { term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { damage_reduction_up: { milliPercentage: 12000, term: { for_rounds: 1 } }, fire_resist_up: { milliPercentage: 29000, term: { for_rounds: 1 } }, ice_resist_up: { milliPercentage: 29000, term: { for_rounds: 1 } }, electric_resist_up: { milliPercentage: 29000, term: { for_rounds: 1 } }, column_protect: { term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { damage_reduction_up: { milliPercentage: 13000, term: { for_rounds: 1 } }, fire_resist_up: { milliPercentage: 31000, term: { for_rounds: 1 } }, ice_resist_up: { milliPercentage: 31000, term: { for_rounds: 1 } }, electric_resist_up: { milliPercentage: 31000, term: { for_rounds: 1 } }, column_protect: { term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { damage_reduction_up: { milliPercentage: 14000, term: { for_rounds: 1 } }, fire_resist_up: { milliPercentage: 33000, term: { for_rounds: 1 } }, ice_resist_up: { milliPercentage: 33000, term: { for_rounds: 1 } }, electric_resist_up: { milliPercentage: 33000, term: { for_rounds: 1 } }, column_protect: { term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { damage_reduction_up: { milliPercentage: 15000, term: { for_rounds: 1 } }, fire_resist_up: { milliPercentage: 35000, term: { for_rounds: 1 } }, ice_resist_up: { milliPercentage: 35000, term: { for_rounds: 1 } }, electric_resist_up: { milliPercentage: 35000, term: { for_rounds: 1 } }, column_protect: { term: { for_rounds: 1 } } } }]
    ]
  },
  stole_of_atonement: {
    type: 'gear',
    id: 'stole_of_atonement',
    exclusive: {
      unit: 236
    },
    status_effects: [
      { cri_up: { milliPercentage: 10000 }, fire_resist_up: { milliPercentage: 35000 } },
      { cri_up: { milliPercentage: 11000 }, fire_resist_up: { milliPercentage: 38500 } },
      { cri_up: { milliPercentage: 12000 }, fire_resist_up: { milliPercentage: 42000 } },
      { cri_up: { milliPercentage: 13000 }, fire_resist_up: { milliPercentage: 45500 } },
      { cri_up: { milliPercentage: 14000 }, fire_resist_up: { milliPercentage: 49000 } },
      { cri_up: { milliPercentage: 15000 }, fire_resist_up: { milliPercentage: 52500 } },
      { cri_up: { milliPercentage: 16000 }, fire_resist_up: { milliPercentage: 56000 } },
      { cri_up: { milliPercentage: 17000 }, fire_resist_up: { milliPercentage: 59500 } },
      { cri_up: { milliPercentage: 18000 }, fire_resist_up: { milliPercentage: 63000 } },
      { cri_up: { milliPercentage: 19000 }, fire_resist_up: { milliPercentage: 66500 } },
      { cri_up: { milliPercentage: 20000 }, fire_resist_up: { milliPercentage: 70000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { range_up_active_1: { value: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { range_up_active_1: { value: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { range_up_active_1: { value: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { range_up_active_1: { value: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { range_up_active_1: { value: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { range_up_active_1: { value: 2, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { range_up_active_1: { value: 2, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { range_up_active_1: { value: 2, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { range_up_active_1: { value: 2, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { range_up_active_1: { value: 2, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { range_up_active_1: { value: 3, term: 'infinite' } } }]
    ]
  },
  super_alloy_plate_armor: {
    type: 'gear',
    id: 'super_alloy_plate_armor',
    exclusive: {
      unit: 121
    },
    status_effects: [
      { fire_resist_up: { milliPercentage: 25000 }, ice_resist_up: { milliPercentage: 25000 }, electric_resist_up: { milliPercentage: 25000 } },
      { fire_resist_up: { milliPercentage: 27500 }, ice_resist_up: { milliPercentage: 27500 }, electric_resist_up: { milliPercentage: 27500 } },
      { fire_resist_up: { milliPercentage: 30000 }, ice_resist_up: { milliPercentage: 30000 }, electric_resist_up: { milliPercentage: 30000 } },
      { fire_resist_up: { milliPercentage: 32500 }, ice_resist_up: { milliPercentage: 32500 }, electric_resist_up: { milliPercentage: 32500 } },
      { fire_resist_up: { milliPercentage: 35000 }, ice_resist_up: { milliPercentage: 35000 }, electric_resist_up: { milliPercentage: 35000 } },
      { fire_resist_up: { milliPercentage: 37500 }, ice_resist_up: { milliPercentage: 37500 }, electric_resist_up: { milliPercentage: 37500 } },
      { fire_resist_up: { milliPercentage: 40000 }, ice_resist_up: { milliPercentage: 40000 }, electric_resist_up: { milliPercentage: 40000 } },
      { fire_resist_up: { milliPercentage: 42500 }, ice_resist_up: { milliPercentage: 42500 }, electric_resist_up: { milliPercentage: 42500 } },
      { fire_resist_up: { milliPercentage: 45000 }, ice_resist_up: { milliPercentage: 45000 }, electric_resist_up: { milliPercentage: 45000 } },
      { fire_resist_up: { milliPercentage: 47500 }, ice_resist_up: { milliPercentage: 47500 }, electric_resist_up: { milliPercentage: 47500 } },
      { fire_resist_up: { milliPercentage: 50000 }, ice_resist_up: { milliPercentage: 50000 }, electric_resist_up: { milliPercentage: 50000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_round' }, details: { status_resist_up: { milliPercentage: 15000, term: { for_rounds: 1 } }, all_debuff_removal: { rate: { milliPercentage: 15000 }, term: 'immediate' } } }, { condition: { trigger: 'start_round', state: { tagged: 'patron_saint' } }, details: { all_buff_removal_resist_up: { milliPercentage: 15000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { status_resist_up: { milliPercentage: 17000, term: { for_rounds: 1 } }, all_debuff_removal: { rate: { milliPercentage: 16000 }, term: 'immediate' } } }, { condition: { trigger: 'start_round', state: { tagged: 'patron_saint' } }, details: { all_buff_removal_resist_up: { milliPercentage: 17000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { status_resist_up: { milliPercentage: 19000, term: { for_rounds: 1 } }, all_debuff_removal: { rate: { milliPercentage: 17000 }, term: 'immediate' } } }, { condition: { trigger: 'start_round', state: { tagged: 'patron_saint' } }, details: { all_buff_removal_resist_up: { milliPercentage: 19000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { status_resist_up: { milliPercentage: 21000, term: { for_rounds: 1 } }, all_debuff_removal: { rate: { milliPercentage: 18000 }, term: 'immediate' } } }, { condition: { trigger: 'start_round', state: { tagged: 'patron_saint' } }, details: { all_buff_removal_resist_up: { milliPercentage: 21000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { status_resist_up: { milliPercentage: 23000, term: { for_rounds: 1 } }, all_debuff_removal: { rate: { milliPercentage: 19000 }, term: 'immediate' } } }, { condition: { trigger: 'start_round', state: { tagged: 'patron_saint' } }, details: { all_buff_removal_resist_up: { milliPercentage: 23000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { status_resist_up: { milliPercentage: 25000, term: { for_rounds: 1 } }, all_debuff_removal: { rate: { milliPercentage: 20000 }, term: 'immediate' } } }, { condition: { trigger: 'start_round', state: { tagged: 'patron_saint' } }, details: { all_buff_removal_resist_up: { milliPercentage: 25000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { status_resist_up: { milliPercentage: 27000, term: { for_rounds: 1 } }, all_debuff_removal: { rate: { milliPercentage: 22000 }, term: 'immediate' } } }, { condition: { trigger: 'start_round', state: { tagged: 'patron_saint' } }, details: { all_buff_removal_resist_up: { milliPercentage: 27000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { status_resist_up: { milliPercentage: 29000, term: { for_rounds: 1 } }, all_debuff_removal: { rate: { milliPercentage: 24000 }, term: 'immediate' } } }, { condition: { trigger: 'start_round', state: { tagged: 'patron_saint' } }, details: { all_buff_removal_resist_up: { milliPercentage: 29000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { status_resist_up: { milliPercentage: 31000, term: { for_rounds: 1 } }, all_debuff_removal: { rate: { milliPercentage: 26000 }, term: 'immediate' } } }, { condition: { trigger: 'start_round', state: { tagged: 'patron_saint' } }, details: { all_buff_removal_resist_up: { milliPercentage: 31000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { status_resist_up: { milliPercentage: 33000, term: { for_rounds: 1 } }, all_debuff_removal: { rate: { milliPercentage: 28000 }, term: 'immediate' } } }, { condition: { trigger: 'start_round', state: { tagged: 'patron_saint' } }, details: { all_buff_removal_resist_up: { milliPercentage: 33000, term: { for_rounds: 1 } } } }],
      [{ condition: { trigger: 'start_round' }, details: { status_resist_up: { milliPercentage: 35000, term: { for_rounds: 1 } }, all_debuff_removal: { rate: { milliPercentage: 30000 }, term: 'immediate' } } }, { condition: { trigger: 'start_round', state: { tagged: 'patron_saint' } }, details: { all_buff_removal_resist_up: { milliPercentage: 35000, term: { for_rounds: 1 } } } }]
    ]
  },
  suspicious_supplements: {
    type: 'gear',
    id: 'suspicious_supplements',
    exclusive: {
      unit: 122
    },
    status_effects: [
      { atk_up: { milliValue: 30000 }, spd_up: { microValue: 120000 } },
      { atk_up: { milliValue: 36000 }, spd_up: { microValue: 132000 } },
      { atk_up: { milliValue: 42000 }, spd_up: { microValue: 144000 } },
      { atk_up: { milliValue: 48000 }, spd_up: { microValue: 156000 } },
      { atk_up: { milliValue: 54000 }, spd_up: { microValue: 168000 } },
      { atk_up: { milliValue: 60000 }, spd_up: { microValue: 180000 } },
      { atk_up: { milliValue: 66000 }, spd_up: { microValue: 192000 } },
      { atk_up: { milliValue: 72000 }, spd_up: { microValue: 204000 } },
      { atk_up: { milliValue: 78000 }, spd_up: { microValue: 216000 } },
      { atk_up: { milliValue: 84000 }, spd_up: { microValue: 228000 } },
      { atk_up: { milliValue: 90000 }, spd_up: { microValue: 240000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { heavy_type_damage_up: { milliPercentage: 15000, term: 'infinite' }, range_up: { value: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { heavy_type_damage_up: { milliPercentage: 16000, term: 'infinite' }, range_up: { value: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { heavy_type_damage_up: { milliPercentage: 17000, term: 'infinite' }, range_up: { value: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { heavy_type_damage_up: { milliPercentage: 18000, term: 'infinite' }, range_up: { value: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { heavy_type_damage_up: { milliPercentage: 19000, term: 'infinite' }, range_up: { value: 1, term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { heavy_type_damage_up: { milliPercentage: 20000, term: 'infinite' }, range_up: { value: 1, term: 'infinite' }, reconnaissance: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { heavy_type_damage_up: { milliPercentage: 21000, term: 'infinite' }, range_up: { value: 1, term: 'infinite' }, reconnaissance: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { heavy_type_damage_up: { milliPercentage: 22000, term: 'infinite' }, range_up: { value: 1, term: 'infinite' }, reconnaissance: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { heavy_type_damage_up: { milliPercentage: 23000, term: 'infinite' }, range_up: { value: 1, term: 'infinite' }, reconnaissance: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { heavy_type_damage_up: { milliPercentage: 24000, term: 'infinite' }, range_up: { value: 1, term: 'infinite' }, reconnaissance: { term: 'infinite' } } }],
      [{ condition: { trigger: 'start_wave' }, details: { heavy_type_damage_up: { milliPercentage: 25000, term: 'infinite' }, range_up: { value: 1, term: 'infinite' }, reconnaissance: { term: 'infinite' } } }]
    ]
  },
  three_authorities: {
    type: 'gear',
    id: 'three_authorities',
    exclusive: {
      unit: 85
    },
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { ap_up: { microValue: 1000000, term: 'immediate' }, spd_up: { milliPercentage:  5000, term: { for_rounds: 999 } }, reconnaissance: { term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { ap_up: { microValue: 1100000, term: 'immediate' }, spd_up: { milliPercentage:  6000, term: { for_rounds: 999 } }, reconnaissance: { term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { ap_up: { microValue: 1200000, term: 'immediate' }, spd_up: { milliPercentage:  7000, term: { for_rounds: 999 } }, reconnaissance: { term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { ap_up: { microValue: 1300000, term: 'immediate' }, spd_up: { milliPercentage:  8000, term: { for_rounds: 999 } }, reconnaissance: { term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { ap_up: { microValue: 1400000, term: 'immediate' }, spd_up: { milliPercentage:  9000, term: { for_rounds: 999 } }, reconnaissance: { term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { ap_up: { microValue: 1500000, term: 'immediate' }, spd_up: { milliPercentage: 10000, term: { for_rounds: 999 } }, reconnaissance: { term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { ap_up: { microValue: 1600000, term: 'immediate' }, spd_up: { milliPercentage: 11000, term: { for_rounds: 999 } }, reconnaissance: { term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { ap_up: { microValue: 1700000, term: 'immediate' }, spd_up: { milliPercentage: 12000, term: { for_rounds: 999 } }, reconnaissance: { term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { ap_up: { microValue: 1800000, term: 'immediate' }, spd_up: { milliPercentage: 13000, term: { for_rounds: 999 } }, reconnaissance: { term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { ap_up: { microValue: 1900000, term: 'immediate' }, spd_up: { milliPercentage: 14000, term: { for_rounds: 999 } }, reconnaissance: { term: { for_rounds: 999 } } } }],
      [{ condition: { trigger: 'start_wave' }, details: { ap_up: { microValue: 2000000, term: 'immediate' }, spd_up: { milliPercentage: 15000, term: { for_rounds: 999 } }, reconnaissance: { term: { for_rounds: 999 } } } }]
    ]
  },
  smar_stone: {
    type: 'gear',
    id: 'smar_stone',
    exclusive: {
      unit: 206
    },
    status_effects: [
      { atk_up: { milliValue: 100000 }, acc_up: { milliPercentage: 10000 }, cri_up: { milliPercentage:  5000 } },
      { atk_up: { milliValue: 105000 }, acc_up: { milliPercentage: 11000 }, cri_up: { milliPercentage:  5500 } },
      { atk_up: { milliValue: 110000 }, acc_up: { milliPercentage: 12000 }, cri_up: { milliPercentage:  6000 } },
      { atk_up: { milliValue: 115000 }, acc_up: { milliPercentage: 13000 }, cri_up: { milliPercentage:  6500 } },
      { atk_up: { milliValue: 120000 }, acc_up: { milliPercentage: 14000 }, cri_up: { milliPercentage:  7000 } },
      { atk_up: { milliValue: 125000 }, acc_up: { milliPercentage: 15000 }, cri_up: { milliPercentage:  7500 } },
      { atk_up: { milliValue: 130000 }, acc_up: { milliPercentage: 16000 }, cri_up: { milliPercentage:  8000 } },
      { atk_up: { milliValue: 135000 }, acc_up: { milliPercentage: 17000 }, cri_up: { milliPercentage:  8500 } },
      { atk_up: { milliValue: 140000 }, acc_up: { milliPercentage: 18000 }, cri_up: { milliPercentage:  9000 } },
      { atk_up: { milliValue: 145000 }, acc_up: { milliPercentage: 19000 }, cri_up: { milliPercentage:  9500 } },
      { atk_up: { milliValue: 150000 }, acc_up: { milliPercentage: 20000 }, cri_up: { milliPercentage: 10000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'hit' }, details: { additional_ice_damage: { milliPercentage: 20000 } } }],
      [{ condition: { trigger: 'hit' }, details: { additional_ice_damage: { milliPercentage: 21000 } } }],
      [{ condition: { trigger: 'hit' }, details: { additional_ice_damage: { milliPercentage: 22000 } } }],
      [{ condition: { trigger: 'hit' }, details: { additional_ice_damage: { milliPercentage: 23000 } } }],
      [{ condition: { trigger: 'hit' }, details: { additional_ice_damage: { milliPercentage: 24000 } } }],
      [{ condition: { trigger: 'hit' }, details: { additional_ice_damage: { milliPercentage: 25000 } } }],
      [{ condition: { trigger: 'hit' }, details: { additional_ice_damage: { milliPercentage: 26000 } } }],
      [{ condition: { trigger: 'hit' }, details: { additional_ice_damage: { milliPercentage: 27000 } } }],
      [{ condition: { trigger: 'hit' }, details: { additional_ice_damage: { milliPercentage: 28000 } } }],
      [{ condition: { trigger: 'hit' }, details: { additional_ice_damage: { milliPercentage: 29000 } } }],
      [{ condition: { trigger: 'hit' }, details: { additional_ice_damage: { milliPercentage: 30000 } } }]
    ]
  },
  twen_stone: {
    type: 'gear',
    id: 'twen_stone',
    exclusive: {
      unit: 206
    },
    status_effects: [
      { atk_up: { milliValue: 100000 }, acc_up: { milliPercentage: 10000 }, cri_up: { milliPercentage:  5000 } },
      { atk_up: { milliValue: 105000 }, acc_up: { milliPercentage: 11000 }, cri_up: { milliPercentage:  5500 } },
      { atk_up: { milliValue: 110000 }, acc_up: { milliPercentage: 12000 }, cri_up: { milliPercentage:  6000 } },
      { atk_up: { milliValue: 115000 }, acc_up: { milliPercentage: 13000 }, cri_up: { milliPercentage:  6500 } },
      { atk_up: { milliValue: 120000 }, acc_up: { milliPercentage: 14000 }, cri_up: { milliPercentage:  7000 } },
      { atk_up: { milliValue: 125000 }, acc_up: { milliPercentage: 15000 }, cri_up: { milliPercentage:  7500 } },
      { atk_up: { milliValue: 130000 }, acc_up: { milliPercentage: 16000 }, cri_up: { milliPercentage:  8000 } },
      { atk_up: { milliValue: 135000 }, acc_up: { milliPercentage: 17000 }, cri_up: { milliPercentage:  8500 } },
      { atk_up: { milliValue: 140000 }, acc_up: { milliPercentage: 18000 }, cri_up: { milliPercentage:  9000 } },
      { atk_up: { milliValue: 145000 }, acc_up: { milliPercentage: 19000 }, cri_up: { milliPercentage:  9500 } },
      { atk_up: { milliValue: 150000 }, acc_up: { milliPercentage: 20000 }, cri_up: { milliPercentage: 10000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'hit' }, details: { additional_fire_damage: { milliPercentage: 20000 } } }],
      [{ condition: { trigger: 'hit' }, details: { additional_fire_damage: { milliPercentage: 21000 } } }],
      [{ condition: { trigger: 'hit' }, details: { additional_fire_damage: { milliPercentage: 22000 } } }],
      [{ condition: { trigger: 'hit' }, details: { additional_fire_damage: { milliPercentage: 23000 } } }],
      [{ condition: { trigger: 'hit' }, details: { additional_fire_damage: { milliPercentage: 24000 } } }],
      [{ condition: { trigger: 'hit' }, details: { additional_fire_damage: { milliPercentage: 25000 } } }],
      [{ condition: { trigger: 'hit' }, details: { additional_fire_damage: { milliPercentage: 26000 } } }],
      [{ condition: { trigger: 'hit' }, details: { additional_fire_damage: { milliPercentage: 27000 } } }],
      [{ condition: { trigger: 'hit' }, details: { additional_fire_damage: { milliPercentage: 28000 } } }],
      [{ condition: { trigger: 'hit' }, details: { additional_fire_damage: { milliPercentage: 29000 } } }],
      [{ condition: { trigger: 'hit' }, details: { additional_fire_damage: { milliPercentage: 30000 } } }]
    ]
  },
  jowi_stone: {
    type: 'gear',
    id: 'jowi_stone',
    exclusive: {
      unit: 206
    },
    status_effects: [
      { atk_up: { milliValue: 100000 }, acc_up: { milliPercentage: 10000 }, cri_up: { milliPercentage:  5000 } },
      { atk_up: { milliValue: 105000 }, acc_up: { milliPercentage: 11000 }, cri_up: { milliPercentage:  5500 } },
      { atk_up: { milliValue: 110000 }, acc_up: { milliPercentage: 12000 }, cri_up: { milliPercentage:  6000 } },
      { atk_up: { milliValue: 115000 }, acc_up: { milliPercentage: 13000 }, cri_up: { milliPercentage:  6500 } },
      { atk_up: { milliValue: 120000 }, acc_up: { milliPercentage: 14000 }, cri_up: { milliPercentage:  7000 } },
      { atk_up: { milliValue: 125000 }, acc_up: { milliPercentage: 15000 }, cri_up: { milliPercentage:  7500 } },
      { atk_up: { milliValue: 130000 }, acc_up: { milliPercentage: 16000 }, cri_up: { milliPercentage:  8000 } },
      { atk_up: { milliValue: 135000 }, acc_up: { milliPercentage: 17000 }, cri_up: { milliPercentage:  8500 } },
      { atk_up: { milliValue: 140000 }, acc_up: { milliPercentage: 18000 }, cri_up: { milliPercentage:  9000 } },
      { atk_up: { milliValue: 145000 }, acc_up: { milliPercentage: 19000 }, cri_up: { milliPercentage:  9500 } },
      { atk_up: { milliValue: 150000 }, acc_up: { milliPercentage: 20000 }, cri_up: { milliPercentage: 10000 } }
    ],
    equipment_effects: [
      [{ condition: { trigger: 'hit' }, details: { additional_electric_damage: { milliPercentage: 20000 } } }],
      [{ condition: { trigger: 'hit' }, details: { additional_electric_damage: { milliPercentage: 21000 } } }],
      [{ condition: { trigger: 'hit' }, details: { additional_electric_damage: { milliPercentage: 22000 } } }],
      [{ condition: { trigger: 'hit' }, details: { additional_electric_damage: { milliPercentage: 23000 } } }],
      [{ condition: { trigger: 'hit' }, details: { additional_electric_damage: { milliPercentage: 24000 } } }],
      [{ condition: { trigger: 'hit' }, details: { additional_electric_damage: { milliPercentage: 25000 } } }],
      [{ condition: { trigger: 'hit' }, details: { additional_electric_damage: { milliPercentage: 26000 } } }],
      [{ condition: { trigger: 'hit' }, details: { additional_electric_damage: { milliPercentage: 27000 } } }],
      [{ condition: { trigger: 'hit' }, details: { additional_electric_damage: { milliPercentage: 28000 } } }],
      [{ condition: { trigger: 'hit' }, details: { additional_electric_damage: { milliPercentage: 29000 } } }],
      [{ condition: { trigger: 'hit' }, details: { additional_electric_damage: { milliPercentage: 30000 } } }]
    ]
  },
  elemental_heart_fire: {
    type: 'gear',
    id: 'elemental_heart_fire',
    exclusive: {
      unit: 205
    },
    status_effects: [
      { acc_up: { milliPercentage: 30000 } },
      { acc_up: { milliPercentage: 33000 } },
      { acc_up: { milliPercentage: 36000 } },
      { acc_up: { milliPercentage: 39000 } },
      { acc_up: { milliPercentage: 42000 } },
      { acc_up: { milliPercentage: 45000 } },
      { acc_up: { milliPercentage: 48000 } },
      { acc_up: { milliPercentage: 51000 } },
      { acc_up: { milliPercentage: 54000 } },
      { acc_up: { milliPercentage: 57000 } },
      { acc_up: { milliPercentage: 60000 } }
    ],
    effects: [
      [{ condition: { trigger: 'hit_active_2', unit: 205 }, target: { kind: 'enemy' }, details: { self: { additional_fire_damage: { milliPercentage: 20000 } }, target: { fire_resist_down: { milliPercentage: 50000, term: { for_rounds: 3 } } } } }],
      [{ condition: { trigger: 'hit_active_2', unit: 205 }, target: { kind: 'enemy' }, details: { self: { additional_fire_damage: { milliPercentage: 21000 } }, target: { fire_resist_down: { milliPercentage: 53000, term: { for_rounds: 3 } } } } }],
      [{ condition: { trigger: 'hit_active_2', unit: 205 }, target: { kind: 'enemy' }, details: { self: { additional_fire_damage: { milliPercentage: 22000 } }, target: { fire_resist_down: { milliPercentage: 56000, term: { for_rounds: 3 } } } } }],
      [{ condition: { trigger: 'hit_active_2', unit: 205 }, target: { kind: 'enemy' }, details: { self: { additional_fire_damage: { milliPercentage: 23000 } }, target: { fire_resist_down: { milliPercentage: 59000, term: { for_rounds: 3 } } } } }],
      [{ condition: { trigger: 'hit_active_2', unit: 205 }, target: { kind: 'enemy' }, details: { self: { additional_fire_damage: { milliPercentage: 24000 } }, target: { fire_resist_down: { milliPercentage: 62000, term: { for_rounds: 3 } } } } }],
      [{ condition: { trigger: 'hit_active_2', unit: 205 }, target: { kind: 'enemy' }, details: { self: { additional_fire_damage: { milliPercentage: 25000 } }, target: { fire_resist_down: { milliPercentage: 65000, term: { for_rounds: 3 } } } } }],
      [{ condition: { trigger: 'hit_active_2', unit: 205 }, target: { kind: 'enemy' }, details: { self: { additional_fire_damage: { milliPercentage: 26000 } }, target: { fire_resist_down: { milliPercentage: 68000, term: { for_rounds: 3 } } } } }],
      [{ condition: { trigger: 'hit_active_2', unit: 205 }, target: { kind: 'enemy' }, details: { self: { additional_fire_damage: { milliPercentage: 27000 } }, target: { fire_resist_down: { milliPercentage: 71000, term: { for_rounds: 3 } } } } }],
      [{ condition: { trigger: 'hit_active_2', unit: 205 }, target: { kind: 'enemy' }, details: { self: { additional_fire_damage: { milliPercentage: 28000 } }, target: { fire_resist_down: { milliPercentage: 74000, term: { for_rounds: 3 } } } } }],
      [{ condition: { trigger: 'hit_active_2', unit: 205 }, target: { kind: 'enemy' }, details: { self: { additional_fire_damage: { milliPercentage: 29000 } }, target: { fire_resist_down: { milliPercentage: 77000, term: { for_rounds: 3 } } } } }],
      [{ condition: { trigger: 'hit_active_2', unit: 205 }, target: { kind: 'enemy' }, details: { self: { additional_fire_damage: { milliPercentage: 30000 } }, target: { fire_resist_down: { milliPercentage: 80000, term: { for_rounds: 3 } } } } }]
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: 30000, term: 'infinite' }, battle_continuation: { milliPercentage: 30000, term: 'infinite', times: 1 } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: 33000, term: 'infinite' }, battle_continuation: { milliPercentage: 33000, term: 'infinite', times: 1 } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: 36000, term: 'infinite' }, battle_continuation: { milliPercentage: 36000, term: 'infinite', times: 1 } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: 39000, term: 'infinite' }, battle_continuation: { milliPercentage: 39000, term: 'infinite', times: 1 } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: 42000, term: 'infinite' }, battle_continuation: { milliPercentage: 42000, term: 'infinite', times: 1 } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: 45000, term: 'infinite' }, battle_continuation: { milliPercentage: 45000, term: 'infinite', times: 1 } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: 48000, term: 'infinite' }, battle_continuation: { milliPercentage: 48000, term: 'infinite', times: 1 } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: 51000, term: 'infinite' }, battle_continuation: { milliPercentage: 51000, term: 'infinite', times: 1 } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: 54000, term: 'infinite' }, battle_continuation: { milliPercentage: 54000, term: 'infinite', times: 1 } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: 57000, term: 'infinite' }, battle_continuation: { milliPercentage: 57000, term: 'infinite', times: 1 } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: 60000, term: 'infinite' }, battle_continuation: { milliPercentage: 60000, term: 'infinite', times: 1 } } }]
    ]
  },
  elemental_heart_ice: {
    type: 'gear',
    id: 'elemental_heart_ice',
    exclusive: {
      unit: 205
    },
    status_effects: [
      { acc_up: { milliPercentage: 30000 } },
      { acc_up: { milliPercentage: 33000 } },
      { acc_up: { milliPercentage: 36000 } },
      { acc_up: { milliPercentage: 39000 } },
      { acc_up: { milliPercentage: 42000 } },
      { acc_up: { milliPercentage: 45000 } },
      { acc_up: { milliPercentage: 48000 } },
      { acc_up: { milliPercentage: 51000 } },
      { acc_up: { milliPercentage: 54000 } },
      { acc_up: { milliPercentage: 57000 } },
      { acc_up: { milliPercentage: 60000 } }
    ],
    effects: [
      [{ condition: { trigger: 'hit_active_2', unit: 205 }, target: { kind: 'enemy' }, details: { self: { additional_ice_damage: { milliPercentage: 20000 } }, target: { ice_resist_down: { milliPercentage: 50000, term: { for_rounds: 3 } } } } }],
      [{ condition: { trigger: 'hit_active_2', unit: 205 }, target: { kind: 'enemy' }, details: { self: { additional_ice_damage: { milliPercentage: 21000 } }, target: { ice_resist_down: { milliPercentage: 53000, term: { for_rounds: 3 } } } } }],
      [{ condition: { trigger: 'hit_active_2', unit: 205 }, target: { kind: 'enemy' }, details: { self: { additional_ice_damage: { milliPercentage: 22000 } }, target: { ice_resist_down: { milliPercentage: 56000, term: { for_rounds: 3 } } } } }],
      [{ condition: { trigger: 'hit_active_2', unit: 205 }, target: { kind: 'enemy' }, details: { self: { additional_ice_damage: { milliPercentage: 23000 } }, target: { ice_resist_down: { milliPercentage: 59000, term: { for_rounds: 3 } } } } }],
      [{ condition: { trigger: 'hit_active_2', unit: 205 }, target: { kind: 'enemy' }, details: { self: { additional_ice_damage: { milliPercentage: 24000 } }, target: { ice_resist_down: { milliPercentage: 62000, term: { for_rounds: 3 } } } } }],
      [{ condition: { trigger: 'hit_active_2', unit: 205 }, target: { kind: 'enemy' }, details: { self: { additional_ice_damage: { milliPercentage: 25000 } }, target: { ice_resist_down: { milliPercentage: 65000, term: { for_rounds: 3 } } } } }],
      [{ condition: { trigger: 'hit_active_2', unit: 205 }, target: { kind: 'enemy' }, details: { self: { additional_ice_damage: { milliPercentage: 26000 } }, target: { ice_resist_down: { milliPercentage: 68000, term: { for_rounds: 3 } } } } }],
      [{ condition: { trigger: 'hit_active_2', unit: 205 }, target: { kind: 'enemy' }, details: { self: { additional_ice_damage: { milliPercentage: 27000 } }, target: { ice_resist_down: { milliPercentage: 71000, term: { for_rounds: 3 } } } } }],
      [{ condition: { trigger: 'hit_active_2', unit: 205 }, target: { kind: 'enemy' }, details: { self: { additional_ice_damage: { milliPercentage: 28000 } }, target: { ice_resist_down: { milliPercentage: 74000, term: { for_rounds: 3 } } } } }],
      [{ condition: { trigger: 'hit_active_2', unit: 205 }, target: { kind: 'enemy' }, details: { self: { additional_ice_damage: { milliPercentage: 29000 } }, target: { ice_resist_down: { milliPercentage: 77000, term: { for_rounds: 3 } } } } }],
      [{ condition: { trigger: 'hit_active_2', unit: 205 }, target: { kind: 'enemy' }, details: { self: { additional_ice_damage: { milliPercentage: 30000 } }, target: { ice_resist_down: { milliPercentage: 80000, term: { for_rounds: 3 } } } } }]
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: 30000, term: 'infinite' }, battle_continuation: { milliPercentage: 30000, term: 'infinite', times: 1 } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: 33000, term: 'infinite' }, battle_continuation: { milliPercentage: 33000, term: 'infinite', times: 1 } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: 36000, term: 'infinite' }, battle_continuation: { milliPercentage: 36000, term: 'infinite', times: 1 } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: 39000, term: 'infinite' }, battle_continuation: { milliPercentage: 39000, term: 'infinite', times: 1 } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: 42000, term: 'infinite' }, battle_continuation: { milliPercentage: 42000, term: 'infinite', times: 1 } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: 45000, term: 'infinite' }, battle_continuation: { milliPercentage: 45000, term: 'infinite', times: 1 } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: 48000, term: 'infinite' }, battle_continuation: { milliPercentage: 48000, term: 'infinite', times: 1 } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: 51000, term: 'infinite' }, battle_continuation: { milliPercentage: 51000, term: 'infinite', times: 1 } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: 54000, term: 'infinite' }, battle_continuation: { milliPercentage: 54000, term: 'infinite', times: 1 } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: 57000, term: 'infinite' }, battle_continuation: { milliPercentage: 57000, term: 'infinite', times: 1 } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: 60000, term: 'infinite' }, battle_continuation: { milliPercentage: 60000, term: 'infinite', times: 1 } } }]
    ]
  },
  elemental_heart_electric: {
    type: 'gear',
    id: 'elemental_heart_electric',
    exclusive: {
      unit: 205
    },
    status_effects: [
      { acc_up: { milliPercentage: 30000 } },
      { acc_up: { milliPercentage: 33000 } },
      { acc_up: { milliPercentage: 36000 } },
      { acc_up: { milliPercentage: 39000 } },
      { acc_up: { milliPercentage: 42000 } },
      { acc_up: { milliPercentage: 45000 } },
      { acc_up: { milliPercentage: 48000 } },
      { acc_up: { milliPercentage: 51000 } },
      { acc_up: { milliPercentage: 54000 } },
      { acc_up: { milliPercentage: 57000 } },
      { acc_up: { milliPercentage: 60000 } }
    ],
    effects: [
      [{ condition: { trigger: 'hit_active_2', unit: 205 }, target: { kind: 'enemy' }, details: { self: { additional_electric_damage: { milliPercentage: 20000 } }, target: { electric_resist_down: { milliPercentage: 50000, term: { for_rounds: 3 } } } } }],
      [{ condition: { trigger: 'hit_active_2', unit: 205 }, target: { kind: 'enemy' }, details: { self: { additional_electric_damage: { milliPercentage: 21000 } }, target: { electric_resist_down: { milliPercentage: 53000, term: { for_rounds: 3 } } } } }],
      [{ condition: { trigger: 'hit_active_2', unit: 205 }, target: { kind: 'enemy' }, details: { self: { additional_electric_damage: { milliPercentage: 22000 } }, target: { electric_resist_down: { milliPercentage: 56000, term: { for_rounds: 3 } } } } }],
      [{ condition: { trigger: 'hit_active_2', unit: 205 }, target: { kind: 'enemy' }, details: { self: { additional_electric_damage: { milliPercentage: 23000 } }, target: { electric_resist_down: { milliPercentage: 59000, term: { for_rounds: 3 } } } } }],
      [{ condition: { trigger: 'hit_active_2', unit: 205 }, target: { kind: 'enemy' }, details: { self: { additional_electric_damage: { milliPercentage: 24000 } }, target: { electric_resist_down: { milliPercentage: 62000, term: { for_rounds: 3 } } } } }],
      [{ condition: { trigger: 'hit_active_2', unit: 205 }, target: { kind: 'enemy' }, details: { self: { additional_electric_damage: { milliPercentage: 25000 } }, target: { electric_resist_down: { milliPercentage: 65000, term: { for_rounds: 3 } } } } }],
      [{ condition: { trigger: 'hit_active_2', unit: 205 }, target: { kind: 'enemy' }, details: { self: { additional_electric_damage: { milliPercentage: 26000 } }, target: { electric_resist_down: { milliPercentage: 68000, term: { for_rounds: 3 } } } } }],
      [{ condition: { trigger: 'hit_active_2', unit: 205 }, target: { kind: 'enemy' }, details: { self: { additional_electric_damage: { milliPercentage: 27000 } }, target: { electric_resist_down: { milliPercentage: 71000, term: { for_rounds: 3 } } } } }],
      [{ condition: { trigger: 'hit_active_2', unit: 205 }, target: { kind: 'enemy' }, details: { self: { additional_electric_damage: { milliPercentage: 28000 } }, target: { electric_resist_down: { milliPercentage: 74000, term: { for_rounds: 3 } } } } }],
      [{ condition: { trigger: 'hit_active_2', unit: 205 }, target: { kind: 'enemy' }, details: { self: { additional_electric_damage: { milliPercentage: 29000 } }, target: { electric_resist_down: { milliPercentage: 77000, term: { for_rounds: 3 } } } } }],
      [{ condition: { trigger: 'hit_active_2', unit: 205 }, target: { kind: 'enemy' }, details: { self: { additional_electric_damage: { milliPercentage: 30000 } }, target: { electric_resist_down: { milliPercentage: 80000, term: { for_rounds: 3 } } } } }]
    ],
    equipment_effects: [
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: 30000, term: 'infinite' }, battle_continuation: { milliPercentage: 30000, term: 'infinite', times: 1 } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: 33000, term: 'infinite' }, battle_continuation: { milliPercentage: 33000, term: 'infinite', times: 1 } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: 36000, term: 'infinite' }, battle_continuation: { milliPercentage: 36000, term: 'infinite', times: 1 } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: 39000, term: 'infinite' }, battle_continuation: { milliPercentage: 39000, term: 'infinite', times: 1 } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: 42000, term: 'infinite' }, battle_continuation: { milliPercentage: 42000, term: 'infinite', times: 1 } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: 45000, term: 'infinite' }, battle_continuation: { milliPercentage: 45000, term: 'infinite', times: 1 } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: 48000, term: 'infinite' }, battle_continuation: { milliPercentage: 48000, term: 'infinite', times: 1 } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: 51000, term: 'infinite' }, battle_continuation: { milliPercentage: 51000, term: 'infinite', times: 1 } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: 54000, term: 'infinite' }, battle_continuation: { milliPercentage: 54000, term: 'infinite', times: 1 } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: 57000, term: 'infinite' }, battle_continuation: { milliPercentage: 57000, term: 'infinite', times: 1 } } }],
      [{ condition: { trigger: 'start_wave' }, details: { damage_reduction_up: { milliPercentage: 60000, term: 'infinite' }, battle_continuation: { milliPercentage: 60000, term: 'infinite', times: 1 } } }]
    ]
  }
} as const;
