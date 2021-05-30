// This is the JS that powers the benefit calculator.
// Its responsibilities includes:
//     * Front-end validation for the calculator form
//     * Sending user input to the SnapAPI library
//     * Rendering results, including explanations

// The JS is organized into four main objects:
//     * DOM_MANIPULATORS: Functions for maniuplating the DOM: show/hide, error states
//     * STATE_OPTIONS: Data on next steps for applying for SNAP or seeking food assistance, which vary by state
//     * FORM_CONTROLS: A layer of abstraction over DOM_MANIPULATORS; DOM manipulation funcs + specific form elements
//     * FORM_SUBMIT_FUNCS: Functions for handling form submission, results and error state rendering

// This file is written in ES6 and compiled down to more universally browser-compatible JS with `npm run build`.
(() => {
    // Shortcuts for manipulating the DOM. A micromicro framework, if you will.
    const DOM_MANIPULATORS = {
        'showElem': (elem_id) => {
            return () => {
                const elem = document.getElementById(elem_id);
                if (elem) {
                    if (elem.classList.contains('hidden')) {
                        elem.classList.remove('hidden');
                    }
                }
            }
        },
        'hideElem': (elem_id) => {
            return () => {
                const elem = document.getElementById(elem_id);
                if (elem) {
                    if (!elem.classList.contains('hidden')) {
                        elem.classList.add('hidden');
                    }
                }
            }
        },
        fieldErrorHTML: (message, role, aria_live_level) => {
            return (
                `<div class="usa-alert usa-alert--error usa-alert--slim">
                    <div class="usa-alert__body" role="${role}" aria-live="${aria_live_level}">
                        <em class="usa-alert__text">${message}</em>
                    </div>
                </div>`
            );
        },
        'validateNumberField': (elem_id) => {
            return (event) => {
                const number_field_valid = FORM_CONTROLS['numberFieldValid'](event.target.value);
                const input_elem = document.getElementById(elem_id);
                const error_elem = document.getElementById(`${elem_id}_error_elem`);

                if (number_field_valid) {
                    error_elem.innerHTML = '';
                    input_elem.setAttribute('aria-invalid', 'false');
                } else {
                    error_elem.innerHTML = DOM_MANIPULATORS['fieldErrorHTML'](
                        'Please enter a number.',
                        'alert',
                        'assertive'
                    );
                    input_elem.setAttribute('aria-invalid', 'true');
                }
            }
        },
        clearClientErrorOnSelect: (error_elem_id) => {
            const error_field_elem = document.getElementById(`${error_elem_id}_error_elem`);
            if (error_field_elem) { error_field_elem.innerHTML = ''; }

            let error_input_elem_by_id = document.getElementById(error_elem_id); // Non-radio buttons
            let error_input_elem_by_name = document.getElementsByName(error_elem_id)[0]; // Radio buttons

            if (error_input_elem_by_id) {
                error_input_elem_by_id.setAttribute('aria-invalid', 'false');
            }
            if (error_input_elem_by_name) {
                error_input_elem_by_name.setAttribute('aria-invalid', 'false');
            }
        }
    };

    var STATE_OPTIONS = {
        // For each state, an array of Object-shaped options.
        // `apply` options include URLs and descriptions of how a household can apply.
        // `other_resources` options include URLs and descriptions of non-SNAP food resources.
        'DEFAULT': {
            'apply': [
                {
                    'url': 'https://www.fns.usda.gov/snap/state-directory',
                    'description': "Find your state's application on the SNAP State Directory."
                },
            ],
            'other_resources': [
                {
                    'url': 'https://www.foodpantries.org/',
                    'description': 'Foodpantries.org',
                },
                {
                    'url': 'https://www.feedingamerica.org/find-your-local-foodbank',
                    'description': 'Feeding America',
                }
            ]
        }
    };

    // Add custom apply url
    if (urlParams.get('apply_url') != null){
        STATE_OPTIONS.DEFAULT.apply.unshift({
            'url': 'https://bit.ly/' + urlParams.get('apply_url'), // 38YIeHU
            'description': urlParams.get('apply_desc').replace(/_/g, " ") // Apply_online_using_CommonHelp.
        })
    };

    // Add custom resources url
    if (urlParams.get('resources_url') != null){
        STATE_OPTIONS.DEFAULT.other_resources.unshift({
            'url': 'https://bit.ly/' + urlParams.get('resources_url'), // 3c1wqqk
            'description': urlParams.get('resources_desc').replace(/_/g, " ") // Apply_at_a_local_Social_Services_office_near_you.
        })
    };


    // Shortcuts for showing/hiding specific elements on the page.
    const FORM_CONTROLS = {
        'showCitizenshipInfobox': DOM_MANIPULATORS['showElem']('citizenship_info_box'),
        'hideCitizenshipInfobox': DOM_MANIPULATORS['hideElem']('citizenship_info_box'),
        'showNonCitizenshipQuestions': DOM_MANIPULATORS['showElem']('noncitizen-questions'),
        'hideNonCitizenshipQuestions': DOM_MANIPULATORS['hideElem']('noncitizen-questions'),
        'showStudentInfobox': DOM_MANIPULATORS['showElem']('student_info_box'),
        'hideStudentInfobox': DOM_MANIPULATORS['hideElem']('student_info_box'),
        'showMedicalExpensesForElderlyOrDisabled': DOM_MANIPULATORS['showElem']('medical_expenses_for_elderly_or_disabled_question'),
        'hideMedicalExpensesForElderlyOrDisabled': DOM_MANIPULATORS['hideElem']('medical_expenses_for_elderly_or_disabled_question'),
        'hideServerErrorMessages': DOM_MANIPULATORS['hideElem']('server-error-messages'),
        'showServerErrorMessages': DOM_MANIPULATORS['showElem']('server-error-messages'),
        'hideResults': DOM_MANIPULATORS['hideElem']('results-section'),
        'showResults': DOM_MANIPULATORS['showElem']('results-section'),
        'numberFieldValid': (value) => {
            if (value === '') return true; // Fields can be blank

            return !isNaN(parseInt(value));
        }
    };

    // Handles form submission and rendering results.
    const FORM_SUBMIT_FUNCS = {
        'checkForm': () => {
            // Pull input data from the form:
            const form = document.getElementById('prescreener-form');
            const elements = form.elements;
            const jsonData = {};

            for (let i = 0; i < elements.length; i++) {
                let elem = elements[i];

                switch (elem.type) {
                    case 'select-one':
                        jsonData[elem.id] = elem.value;
                        break;
                    case 'checkbox':
                        jsonData[elem.id] = elem.checked;
                        break;
                    case 'radio': {
                        let checked = document.querySelector(`input[name="${elem.name}"]:checked`);
                        (checked)
                            ? jsonData[elem.name] = checked.value
                            : jsonData[elem.name] = undefined;
                        break;
                    }
                    case 'number':
                        jsonData[elem.id] = elem.value;
                        break;
                    case 'text':
                        jsonData[elem.id] = elem.value;
                        break;
                }
            }

            // Validate:
            const errors = [];

            if (jsonData['household_size'] === '') {
                errors.push({
                    name: 'household_size',
                    message: 'Select a household size',
                });
            }

            if (jsonData['monthly_job_income'] === '') {
                errors.push({
                    name: 'monthly_job_income',
                    message: 'Enter monthly household income before taxes from jobs or self-employment',
                });
            }

            if (jsonData['monthly_non_job_income'] === '') {
                errors.push({
                    name: 'monthly_non_job_income',
                    message: 'Enter monthly household income from other sources',
                });
            }

            if (jsonData['resources'] === '') {
                errors.push({
                    name: 'resources',
                    message: 'Enter total resources amount',
                });
            }

            if (jsonData['household_includes_elderly_or_disabled'] === undefined) {
                errors.push({
                    name: 'household_includes_elderly_or_disabled',
                    message: 'Select "yes" if your household includes someone who is 60 or older, or someone who is disabled',
                });
            }

            if (jsonData['unemployment_benefits'] === undefined) {
                errors.push({
                    name: 'unemployment_benefits',
                    message: 'Select "yes" if your household includes someone who is receiving unemployment benefits',
                });
            }

            if (jsonData['all_citizens_question'] === undefined) {
                errors.push({
                    name: 'all_citizens_question',
                    message: 'Select "yes" if everyone on the application is a U.S. citizen',
                });
            }

            if (urlParams.get('student_question') == 'true'){
                if (jsonData['student'] === undefined) {
                    errors.push({
                        name: 'student',
                        message: 'Select "yes" if anyone on the application is a higher education student',
                    });
                };
            }

            if (urlParams.get('noncitizen_question') == 'true'){
                if (jsonData['all_citizens_question'] === 'false'){
                    
                    if (jsonData['noncitizen_number'] === '') {
                        errors.push({
                            name: 'noncitizen_number',
                            message: 'Select the number of non-citizens in the household',
                        });
                    }

                    if (jsonData['noncitizen_lpr_plus_criteria_number'] === '') {
                        errors.push({
                            name: 'noncitizen_lpr_plus_criteria_number',
                            message: 'Select the number of non-citizens that meet a status below',
                        });
                    }

                    // Household size must be greater than or equal to number of non-citizens
                    if (parseInt(jsonData['household_size']) < parseInt(jsonData['noncitizen_number'])){ 
                        errors.push({
                            name: 'noncitizen_number',
                            message: 'The number of non-citizens should be less than or equal to the household size',
                        });
                    };  

                    // Number of non-citizens must be greater than or equal to number of lpr plus criteria members
                    if (parseInt(jsonData['noncitizen_number']) < parseInt(jsonData['noncitizen_lpr_plus_criteria_number'])){ 
                        errors.push({
                            name: 'noncitizen_lpr_plus_criteria_number',
                            message: 'The number of non-citizens that meet a status below should be less than or equal to the number of non-citizens',
                        });
                    };  
                    
                    // If some are not eligible
                    if (parseInt(jsonData['noncitizen_lpr_plus_criteria_number']) < parseInt(jsonData['noncitizen_number'])){                 
                        if (jsonData['noneligible_monthly_income'] === '') {
                            errors.push({
                                name: 'noneligible_monthly_income',
                                message: 'Enter monthly household income before taxes for non-eligible household member(s)',
                            });
                        };
                    };   

                };
            };
            

            // Validation for number fields:
            const number_field_ids = [
                'monthly_job_income',
                'monthly_non_job_income',
                'resources',
                'dependent_care_costs',
                'medical_expenses_for_elderly_or_disabled',
                'court_ordered_child_support_payments',
                'rent_or_mortgage',
                'homeowners_insurance_and_taxes',
                'utility_costs',
            ];

            for (let i = 0; i < number_field_ids.length; i++) {
                let field_id = number_field_ids[i];
                const number_elem = document.getElementById(field_id);

                if (number_elem) {
                    if (!FORM_CONTROLS['numberFieldValid'](number_elem.value)) {
                        errors.push({
                            name: field_id,
                            message: `Please enter a number.`,
                        });
                    }
                }
            }

            // Only auto-update the error message state if the user
            // has already attempted to submit and received error messages.
            if (window.hasShownErrors) {
                FORM_SUBMIT_FUNCS['updateClientErrorMessages'](errors);
            }

            return {
                'errors': errors,
                'jsonData': jsonData,
            }
        },
        'onSubmit': () => {
            const checkFormResults = FORM_SUBMIT_FUNCS['checkForm']();
            const errors = checkFormResults['errors'];
            const jsonData = checkFormResults['jsonData'];

            if (errors.length === 0) {
                // If valid, send data to API library:
                FORM_SUBMIT_FUNCS['sendData'](jsonData);
            } else {
                window.hasShownErrors = true;
                FORM_SUBMIT_FUNCS['updateClientErrorMessages'](errors);

                const errors_header = document.getElementById('errors-header');
                errors_header.scrollIntoView();

                const first_error_elem = document.querySelector('[aria-invalid="true"]');
                if (first_error_elem) { first_error_elem.focus(); }
            }
        },
        updateClientErrorMessages: (errors) => {
            const errors_header = document.getElementById('errors-header');
            let errors_header_html = '';

            if (errors.length === 0) {
                errors_header.innerHTML = errors_header_html;
                return;
            }

            // Set per-field client side errors first ...
            for (let i = 0; i < errors.length; i++) {
                let error = errors[i];
                let error_name = error['name'];
                let error_message = error['message'];
                let error_field_elem = document.getElementById(`${error_name}_error_elem`);
                let error_input_elem_by_id = document.getElementById(error_name); // Non-radio buttons
                let error_input_elem_by_name = document.getElementsByName(error_name)[0]; // Radio buttons

                if (error_field_elem) {
                    let error_message_alert = DOM_MANIPULATORS['fieldErrorHTML'](error_message, '', 'off');
                    error_field_elem.innerHTML = error_message_alert;
                }

                if (error_input_elem_by_id) {
                    error_input_elem_by_id.setAttribute('aria-invalid', 'true');
                }
                if (error_input_elem_by_name) {
                    error_input_elem_by_name.setAttribute('aria-invalid', 'true');
                }
            }

            // ... and set overall error list afterwards, so that VoiceOver will
            // read it out immediately due to its role="alert" attribute.
            errors_header_html += `<p class="error-total">${errors.length} ${errors.length === 1 ? 'error' : 'errors'}</p>`;
            errors_header_html += `<ul class="usa-list">`;
            for (let i = 0; i < errors.length; i++) {
                let error = errors[i];
                errors_header_html += (`<li><p>${error['message']}</p></li>`);
            }
            errors_header_html += `</ul>`;

            errors_header.innerHTML = errors_header_html;
        },
        'sendData': (jsonData) => {
            // Send state_or_territory and emergency allotment config to API
            // in addition to user input data:
            const form = document.getElementById('prescreener-form');
            jsonData['state_or_territory'] = form.dataset.stateOrTerritory;
            jsonData['use_emergency_allotment'] = form.dataset.useEmergencyAllotment;

            const response = new SnapAPI.SnapEstimateEntrypoint(jsonData).calculate();

            FORM_SUBMIT_FUNCS['responseToHTML'](response);
        },
        responseToHTML: (response) => {
            if (response.status !== 'OK') {
                FORM_CONTROLS['hideResults']();
                FORM_CONTROLS['hideExplanationButton']();
                FORM_CONTROLS['hideResultExplanation']();

                const errorsHTML = FORM_SUBMIT_FUNCS['responseErrorsToHTML'](response.errors);
                document.getElementById('server-error-messages').innerHTML = errorsHTML;

                FORM_CONTROLS['showServerErrorMessages']();
                return;
            }

            const resultHTML = FORM_SUBMIT_FUNCS['resultToHTML'](response);
            document.getElementById('results').innerHTML = resultHTML;

            // Copy link to clipboard
            $('#copy-link').on('click',function(e){

                // Must be visible to copy
                $('#copy-link-tag').removeClass('d-none');

                // Remove any prefilled information
                var RES_URL = window.location.href;
                RES_URL = RES_URL.split('___PREFILLED___')[0]; 

                // Append information to url as needed
                if (RES_URL.includes('?') == false){
                    RES_URL += '?';
                } else if (RES_URL.substr(-1) != '&'){
                    RES_URL += '&';
                };

                // Set the results link
                $('#results-url').removeClass('d-none');
                $('#results-url:text').val(RES_URL + '___PREFILLED___&' + $.param(CURRENT_INPUTS));

                // Copy the results
                var copyText = document.getElementById("results-url");
                copyText.select();
                copyText.setSelectionRange(0, 1000000);
                document.execCommand("copy");
                $('#results-url').addClass('d-none');

            });

            const eligibilityExplanationHTML = FORM_SUBMIT_FUNCS['eligibilityExplanationToHTML'](response.eligibility_factors);
            document.getElementById('why-did-i-get-this-result').innerHTML = eligibilityExplanationHTML;

            const incomeExplanationHTML = FORM_SUBMIT_FUNCS['incomeExplanationToHTML'](response.eligibility_factors);
            document.getElementById('how-are-gross-and-net-income-calculated').innerHTML = incomeExplanationHTML;

            FORM_CONTROLS['showResults']();
            FORM_CONTROLS['hideServerErrorMessages']();

            // Scroll to bring the results into view:
            document.getElementById('results').scrollIntoView();
        },
        'responseErrorsToHTML': (errors) => {
            let html = `<h1>Errors:</h1>`;

            for (let i = 0; i < errors.length; i++) {
                let error = errors[i];

                html += (`<li>${error}</li>`);
            }

            return html;
        },
        'optionsHTML': (options_array, options_title) => {
            let html = `<p>${options_title}
                            <ul class="usa-link">`;

            for (let i = 0; i < options_array.length; i++) {
                let option = options_array[i];

                html += (
                    `<li>
                        <a class="usa-link" href="${option.url}" rel="noopener noreferrer" target="_blank">
                            ${option.description}
                        </a>
                    </li>`
                );
            }

            html += `</ul></p>`;
            return html;
        },
        'resultToHTML': (response) => {
            let html = '<h2 class="d-inline" id="results-section-title">Results:</h2>';

            // Allow copying link to clipboard
            var isDebug = urlParams.get('debug');
            if (isDebug != 'false') {
                html += '<div id="copy-link" class="d-inline" data-clipboard-target="#results-url"><svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="20"><path d="M0 0h24v24H0z" fill="none"/><path fill="#1b6aa5" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg><span id="copy-link-text">Copy Link to Results</span><span id="copy-link-tag" class="d-none usa-tag">Copied!</span></div>'
            };

            // Configure to send data to a webhook
            if (WEBHOOK_URL != null) { // defined in base.js
                CURRENT_PROFILE.estimated_eligibility       = response.estimated_eligibility;
                CURRENT_PROFILE.estimated_monthly_benefit   = response.estimated_monthly_benefit;
                CURRENT_PROFILE.gross_income                = response.eligibility_factors[0].result;
                CURRENT_PROFILE.net_income                  = response.eligibility_factors[1].result;
                CURRENT_PROFILE.email                       = $('#email_field').val();
                CURRENT_PROFILE.phone                       = $('#phone_field').val();
                sendFormData(false);
            };

            const is_eligible = response.estimated_eligibility;
            const estimated_monthly_benefit = response.estimated_monthly_benefit;
            const emergency_allotment_estimated_benefit = response.emergency_allotment_estimated_benefit;

            const formSettings = document.getElementById('prescreener-form');
            const stateAbbr = formSettings.dataset.stateOrTerritory;
            const nextStepOptions = STATE_OPTIONS['DEFAULT']; //STATE_OPTIONS[stateAbbr];

            // SNAP JS API estimates household is ineligible:
            if (!is_eligible) {
                html += (
                    `<p>You <strong>might not</strong> be eligible for SNAP benefits.</p>
                    <p>This result is only an estimate based on your inputs, not an official application or decision. <strong>You can still apply for SNAP benefits</strong>.</p>`
                );

                html += FORM_SUBMIT_FUNCS['optionsHTML'](nextStepOptions['apply'], 'Ways to apply:');

                html += FORM_SUBMIT_FUNCS['optionsHTML'](nextStepOptions['other_resources'], 'Other resources for food assistance:');

                return html;
            }

            // SNAP JS API estimates household is eligible:
            html += '<p>You may be <b>eligible</b> for SNAP benefits.</p>';
            html += `<p>If you apply and are approved, your benefit may be <b>$${estimated_monthly_benefit}</b> per month.</p>`;

            // Calculate 15% boost
            const estimated_monthly_benefit_plus15 = Math.round(estimated_monthly_benefit * 1.15);
            const fifteen_boost_amount = estimated_monthly_benefit_plus15 - estimated_monthly_benefit;
            const temp_max_allotment =  Math.round(1.15 * emergency_allotment_estimated_benefit);

            // Calculate if $95 or max allotment is more
            const additional_amount = Math.max(95, temp_max_allotment - estimated_monthly_benefit_plus15) + fifteen_boost_amount;

            // If emergency allotments are active, and estimated benefit is less than EA amount:
            if (emergency_allotment_estimated_benefit) {
                html += (
                    `<p>Due to the current pandemic, you could receive an additional $${additional_amount} per month. This additional amount is temporary and may not be fully available in your state. Some additional benefits may expire after June 30th.</p>`
                );
            };

            html += FORM_SUBMIT_FUNCS['optionsHTML'](nextStepOptions['apply'], 'Ways to apply:');
            return html;
        },
        'eligibilityExplanationToHTML': (eligibility_factors) => {
            let html = '';

            eligibility_factors.sort((a, b) => {
                return a.sort_order - b.sort_order;
            });

            const eligibility_tests = eligibility_factors.filter((factor) => {
                return factor.type === 'test';
            });

            for (let i = 0; i < eligibility_tests.length; i++) {
                let eligibility_test = eligibility_tests[i];

                const name = eligibility_test.name;
                const result_in_words = (eligibility_test.result)
                    ? 'Pass'
                    : 'Fail';
                const result_span_class = (eligibility_test.result)
                    ? 'pass-green'
                    : 'fail-red';

                html += `<h3>${name}: <span class="${result_span_class}">${result_in_words}</span></h3>`;

                let explanation = eligibility_test.explanation;

                for (var k = 0; k < explanation.length; k++) {
                    let explanation_graph = explanation[k];
                    html += `<p>${explanation_graph}</p>`;
                }
            }

            const eligibility_amount = eligibility_factors.filter((factor) => {
                return factor.type === 'amount';
            })[0];

            html += `<h2>${eligibility_amount.name}</h2>`;

            for (let i = 0; i < eligibility_amount.explanation.length; i++) {
                let explanation_graph = eligibility_amount.explanation[i];
                html += `<p>${explanation_graph}</p>`;
            }

            return html;
        },
        'incomeExplanationToHTML': (eligibility_factors) => {
            let html = '';

            eligibility_factors.sort((a, b) => {
                return a.sort_order - b.sort_order;
            });

            const income_factors = eligibility_factors.filter((factor) => {
                return factor.type === 'income';
            });

            for (let i = 0; i < income_factors.length; i++) {
                let income_factor = income_factors[i];
                const name = income_factor.name;
                const explanation_graphs = income_factor.explanation;

                html += `<h3>${name}</h3>`;

                for (var k = 0; k < explanation_graphs.length; k++) {
                    let explanation_graph = explanation_graphs[k];
                    html += `<p>${explanation_graph}</p>`;
                }
            }

            return html;
        }
    };

    // Set up form submit function.
    document.getElementById('prescreener-form').addEventListener('submit', (event) => {
        event.preventDefault();
        FORM_SUBMIT_FUNCS['onSubmit']();
    });

    // Set up toggle of student infobox in response to student question.
    if (urlParams.get('student_question') == 'true'){
        document.getElementById('input__student_true').addEventListener('change', () => {
            FORM_CONTROLS['showStudentInfobox']();
        });
    
        document.getElementById('input__student_false').addEventListener('change', () => {
            FORM_CONTROLS['hideStudentInfobox']();
        });
    };

    // Set up toggle of citizenship infobox in response to citizenship question.
    document.getElementById('input__all_citizens_question_true').addEventListener('change', () => {
        FORM_CONTROLS['hideCitizenshipInfobox']();
    });

    document.getElementById('input__all_citizens_question_false').addEventListener('change', () => {
        FORM_CONTROLS['showCitizenshipInfobox']();
    });

    // Noncitizen questions
    if (urlParams.get('noncitizen_question') == 'true'){
        document.getElementById('input__all_citizens_question_true').addEventListener('change', () => {
            FORM_CONTROLS['hideNonCitizenshipQuestions']();
        });
    
        document.getElementById('input__all_citizens_question_false').addEventListener('change', () => {
            FORM_CONTROLS['showNonCitizenshipQuestions']();
        });

        document.getElementById('noncitizen_number').addEventListener('change', () => {
            var NC_2 = $('#noncitizen_number').val();
            if (NC_2 != ""){
                $('#noncitizen-2 .nc-helper').text(NC_2 + ' ');
            }else{
                $('#noncitizen-2 .nc-helper').text('');
            };
        });

        $('#noncitizen_number, #noncitizen_lpr_plus_criteria_number').on('change', function () {
            var NC_2 = $('#noncitizen_number').val();
            var NC_3 = $('#noncitizen_lpr_plus_criteria_number').val();
            if ((NC_2 != "") & (NC_3 != "")){
                
                var NC_NE = parseInt(NC_2) - parseInt(NC_3)

                // Show the next question if needed
                if (NC_NE <= 0){
                    $('#noncitizen-3').addClass('hidden');
                    $('#noncitizenship_info_box').addClass('hidden');
                } else{
                    $('#noncitizen-3').removeClass('hidden');
                    $('#noncitizenship_info_box').removeClass('hidden');
                    $('#noncitizen-3 .nc-helper').text(NC_NE + ' ');
                };

            }else{
                $('#noncitizen-3 .nc-helper').text('');
            };

        });

    };

    // Set up toggle of medical expenses question in response to elderly or disabled question result.
    document.getElementById('input__household_includes_elderly_or_disabled_true').addEventListener('change', () => {
        FORM_CONTROLS['showMedicalExpensesForElderlyOrDisabled']();
    });

    document.getElementById('input__household_includes_elderly_or_disabled_false').addEventListener('change', () => {
        FORM_CONTROLS['hideMedicalExpensesForElderlyOrDisabled']();
    });

    // Set up validation for number fields.
    const number_field_ids = [
        'noneligible_monthly_income',
        'monthly_job_income',
        'monthly_non_job_income',
        'resources',
        'dependent_care_costs',
        'medical_expenses_for_elderly_or_disabled',
        'court_ordered_child_support_payments',
        'rent_or_mortgage',
        'homeowners_insurance_and_taxes',
        'utility_costs',
    ];

    for (let i = 0; i < number_field_ids.length; i++) {
        let field_id = number_field_ids[i];
        const number_elem = document.getElementById(field_id);

        if (number_elem) {
            number_elem.addEventListener('input', (event) => {
                DOM_MANIPULATORS['validateNumberField'](field_id)(event);
                FORM_SUBMIT_FUNCS['checkForm']();
            });
        }
    }


    // Set up validation for select fields.
    const select_field_ids = [
        'household_size',
        'noncitizen_number',
        'noncitizen_lpr_plus_criteria_number',
    ];

    for (let i = 0; i < select_field_ids.length; i++) {
        const select_field_id = select_field_ids[i];
        const select_elem = document.getElementById(select_field_id);

        if (select_elem) {
            select_elem.addEventListener('change', () => {
                DOM_MANIPULATORS['clearClientErrorOnSelect'](select_field_id);
                FORM_SUBMIT_FUNCS['checkForm']();
            });
        }
    }

    const radio_field_ids = [
        'household_includes_elderly_or_disabled',
        'unemployment_benefits',
        'all_citizens_question',
        'student',
    ];

    for (let i = 0; i < radio_field_ids.length; i++) {
        let radio_field_id = radio_field_ids[i];
        let radio_elems = document.getElementsByName(radio_field_id);

        if (radio_elems) {
            for (let k = 0; k < radio_elems.length; k++) {
                let radio_elem = radio_elems[k];
                radio_elem.addEventListener('change', () => {
                    DOM_MANIPULATORS['clearClientErrorOnSelect'](radio_field_id);
                    FORM_SUBMIT_FUNCS['checkForm']();
                });
            }
        }
    }
})()