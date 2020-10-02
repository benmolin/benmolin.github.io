// @flow

import { ParseInputs } from './input_data/parse_input_data.js';
import { SnapEstimate } from './snap_estimate.js';

/*::
interface SnapEntrypointInputs {
    state_or_territory: State;
    monthly_job_income: number;
    monthly_non_job_income: number;
    household_size: number;
    household_includes_elderly_or_disabled: boolean;
    resources: number;
    dependent_care_costs?: ?number;
    medical_expenses_for_elderly_or_disabled?: ?number;
    rent_or_mortgage?: ?number;
    homeowners_insurance_and_taxes?: ?number;
    court_ordered_child_support_payments?: ?number;
    use_emergency_allotment: boolean;

    utility_electricity:  boolean;
    utility_gas:  boolean;
    utility_heating:  boolean;
    utility_phone:  boolean;
    utility_sewage:  boolean;
    utility_trash:  boolean;
    utility_water:  boolean;
}
*/

export class SnapEstimateEntrypoint {
    /*::
    raw_inputs: Object;
    */

    constructor(raw_inputs /*: SnapEntrypointInputs */) {
        this.raw_inputs = raw_inputs;
    }

    calculate() {
        console.log('----Inputs----');
        console.log(this.raw_inputs);
        const parser = new ParseInputs(this.raw_inputs);
        const inputs_valid = parser.inputs_valid();

        if (!inputs_valid) {

            // Count invalid screen
            // Wrapped in try to avoid site breaking with adblock
            try {
                window.goatcounter.count({
                    path: window.location.href,
                    title: this.raw_inputs.state_or_territory.substring(0, 2) + ' Invalid Screen',
                    event: true,
                })
            } catch (e) {
                console.log(e);
            }

            // Send "invalid inputs" errors to the front-end:
            return {
                'status': 'ERROR',
                'errors': parser.errors
            };
        }

        // Count successful screen
        // Wrapped in try to avoid site breaking with adblock
        try {
            window.goatcounter.count({
                path: window.location.href,
                title: this.raw_inputs.state_or_territory.substring(0, 2) + ' Screen',
                event: true,
            })
        } catch (e) {
            console.log(e);
        }

        const inputs = parser.inputs;
        return new SnapEstimate(inputs).calculate();
    }
}