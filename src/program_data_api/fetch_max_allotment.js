import { MAX_ALLOTMENTS } from '../program_data/max_allotments.js';

export class FetchMaxAllotment {
    // Uses a state or territory and a household size to fetch the max allotment,
    // using arithmetic to add an additional amount to the allotment for each
    // household member beyond eight.
    constructor(inputs) {
        this.state_or_territory = inputs.state_or_territory;
        this.household_size = inputs.household_size;
        this.target_year = inputs.target_year;
    }

    state_lookup_key() {
        const NON_DEFAULT_STATES_TERRITORIES = [
            'AK__U',
            'AK_R1',
            'AK_R2',
            'HI',
            'GU',
            'VI',
        ];

        // If AK, add the region
        if (this.state_or_territory.substring(0, 2) == 'AK') {
            this.state_or_territory = this.state_or_territory.substring(0, 2) + '_' + this.state_or_territory.substring(this.state_or_territory.length - 2, this.state_or_territory.length);
        } else {
            this.state_or_territory = this.state_or_territory.substring(0, 2);
        };

        return (NON_DEFAULT_STATES_TERRITORIES.indexOf(this.state_or_territory) > -1)
            ? this.state_or_territory
            : 'DEFAULT';
    }

    calculate() {
        const state_lookup_key = this.state_lookup_key();
        const scale = MAX_ALLOTMENTS[state_lookup_key][this.target_year];

        if (0 < this.household_size && this.household_size < 9) {
            return scale[this.household_size];
        } else if (9 <= this.household_size) {
            return scale[8] + ((this.household_size - 8) * (scale['each_additional']));
        } else if (this.household_size <= 0) {
            throw new Error('Household size out of bounds (at or below zero).');
        }
    }
}
