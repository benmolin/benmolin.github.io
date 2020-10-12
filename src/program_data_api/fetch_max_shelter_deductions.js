import { MAX_SHELTER_DEDUCTIONS } from '../program_data/max_shelter_deductions.js';

export class FetchMaxShelterDeductions {
    constructor(inputs) {
        this.state_or_territory = inputs.state_or_territory.substring(0, 2);
        this.household_size = inputs.household_size;
        this.target_year = inputs.target_year;
    }

    state_lookup_key() {
        const NON_DEFAULT_STATES_TERRITORIES = [
            'AK',
            'HI',
            'GU',
            'VI',
        ];

        return (NON_DEFAULT_STATES_TERRITORIES.indexOf(this.state_or_territory) > -1)
            ? this.state_or_territory
            : 'DEFAULT';
    }

    calculate() {
        const state_lookup_key = this.state_lookup_key();
        return MAX_SHELTER_DEDUCTIONS[state_lookup_key][this.target_year];
    }
}