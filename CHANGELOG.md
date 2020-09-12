# Changelog
History of changes to this repo since forked from [snap-js-api-prototype](https://github.com/18F/snap-js-api-prototype) and [snap-js-prescreener-prototypes](https://github.com/18F/snap-js-prescreener-prototypes) on 2020-08-20.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project tries to adhere to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


### TODO
- Figure out whether BBCE states have different asset tests for HHEOD and not. If no, merge state options asset test variables.

## 2020-09-09
### Added
- Added state demonyms
- Added the selected form state switching for VA, depending on the household size
- Added the 2021 Alaska min and max deductions
- Added NE, CA, FL in beta (not live)

### Changed
- Moved the VA logic for utility deductions variance depending on household size to state options, instead of inside the API
- New format for the state options. Now importing them directly from a Google Sheet, so the ``state_options.js`` file won't be edited directly anymore

## 2020-09-09
### Added
- Utility checkbox questions in form
- Form controls for checkboxes
- SVG image that was need for checkboxes
- Utility calculations depending on which you already pay
- Remapped the utility variables that are passed to ``shelter_deductions.js`` and ``net_income.js`
- Added Maryland and Indiana

### Removed
- Utility boolean question
- ``IL.feature`` and ``VA.feature`` Gherkin test files (and their parent folder)
- Old utility allowance formulas in ``parse_input_data.js``

### Changed
- Reconfigured ``state_options.js`` utilities to align with new format (that not all states have same $ for basic utilities)

## 2020-09-02
### Added
- Added hiding of non-required questions as optional url parameter ``short=true``

## 2020-09-01
### Removed
- Reverted a change in snap_estimate.js that created a new gross income house for HHEOD
- Removed ``gross_income_limit_factor_elderly_or_disabled``

### Changed
- Renamed ``resource_limit_elderly_or_disabled_income_twice_fpl`` to ``has_resource_limit_elderly_or_disabled_income_twice_fpl``
- Improved dev tools gross income limits table
- Merged some changes made in [main repo](https://github.com/18F/snap-js-prescreener-prototypes/commit/2162caea60b42318f4d21b7ca86ed1a7df85cc91) 

### Added
- Created Changelog
- Created new rules in gross_income_test.js to account for 200% FPL asset test for HHEOD
- Pass ``has_resource_limit_elderly_or_disabled_income_twice_fpl`` into AssetTest in state_options.js
- Pass ``gross_income`` into AssetTest in state_options.js
- Pass ``net_monthly_income_limit`` into AssetTest in state_options.js
- Pass ``uses_bbce`` into AssetTest and GrossIncomeTest in state_options.js
- Created new rules in asset_test.js to account for 200% FPL asset test for HHEOD
- Added Indiana and Maryland without state deductions
- Added some iFrame customizations

### Summary
- Added compatibility for footnote 2 (2FPL, $3500 asset test) from the BBCE PDF
- Added Indiana and Maryland to complete the scenarios under BBCE PDF (blanket asset test, no 2FPL HHEOD asset test, 2FPL HHEOD asset test)

