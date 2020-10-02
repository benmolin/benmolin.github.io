# Changelog
History of changes to this repo since forked from [snap-js-api-prototype](https://github.com/18F/snap-js-api-prototype) and [snap-js-prescreener-prototypes](https://github.com/18F/snap-js-prescreener-prototypes) on 2020-08-20.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project tries to adhere to [Semantic Versioning](https://semver.org/spec/v2.0.0.html). No version numbers have yet to be included. 

### Pending Tasks
- Figure out whether BBCE states have different asset tests for HHEOD and not. If no, merge state options asset test variables.
- Check up on COVID Snap max allotments


## 2020-10-02
### Added
- Added [GoatCounter](https://www.goatcounter.com) for privacy-friendly web analytics

## 2020-09-30
### Added
- Added all states (minus HI and AK). States without advanced deductions configured only appear required questions
- Added a few required questions for NH and NY that are important for determining relevant BBCE limits
- Added more advanced options for determining state limit differences based on household size, location, and other factors
- Added favicons 
- Header and footer with disclaimer
- Added all dependencies to ``license.md``
- Added a contact email
- Linked a getting started guide for non-profit organizations

### Changed
- Removed VA support from bulk screener
- Made site more responsive on mobile by eliminating box around calculator
- Changed license to MIT
- Changed a resources link to not be VA specific
- Moved the iFrame resizer activation script to a separate file

### Deleted
- Removed some unnecessary libraries that were linked (Bootstrap JS, Popper JS)

## 2020-09-20
### Added
- Moved domain to [https://www.snapscreener.com](https://www.snapscreener.com)
- Made note on ``screener.html`` that it has moved
- Added in iFrameResizer libraries
- Added in a sample website to show how screener could be embedded with resizing

### Changed
- Changed ``screener.html`` to ``index.html`` to allow for root folder

## 2020-09-20
### Added
- Added another set of sample data (testing data) to Bulk Screener for use in validating prescreener
- Bulk screener supports ``?state=PA`` config options for 2nd set of sample data

### Changed
- Edited bulk screener file formatting rules

## 2020-09-18
### Added
- Added New Mexico
- iFrame configuration example in Readme

## 2020-09-17 (bulk screener)
### Added
- Added more output variables to bulk screener
- Added VA HH_SIZE rules to bulk screener
- Explanation of output variables to bulk screener
- Added non-job and resource as required variables
- Added all other optional variables to bulk screener
- Added optional variables explanation and table
- Enabled tables to hide/show

### Changed
- Made bulk screener output dynamic for variables outputting


## 2020-09-17
### Added
- Added the net income and asset tests to the tests tables output

### Changed
- Updated the toggle to show/hide the test tables
- Fixed a bug that wasn't showing VA test tables
- Made test tables more mobile friendly


## 2020-09-12
### Added
- Added state demonyms
- Added the selected form state switching for VA, depending on the household size
- Added the 2021 Alaska min and max deductions
- Added NE, CA, FL live

### Changed
- Moved the VA logic for utility deductions variance depending on household size to state options, instead of inside the API
- New format for the state options. Now importing them directly from a Google Sheet, so the ``state_options.js`` file won't be edited directly anymore
- Changed the asset test explainer for BBCE states as there is no difference between HHEOD and non households.

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

## 2020-08-25
### Added
- Added state deductions for PA: before, it was just basic BBCE rules

## 2020-08-24
### Changed
- Merged small changes from the original repo

### Added
- Created bulk screener to allow for CSV uploads to screen clients in bulk
- Created a new readme, different than the original project's readme

## 2020-08-23
### Removed
- Removed some 18F specific contributing docs and mentions of this being a government project

## 2020-08-22
### Changed
- Changed the format of some of the ``state_options.js`` options to account for a 2FPL asset limit for HHEOD
- Changed the gross income test rules to better handle BBCE states + 2FPL limits
- Changed folder format to allow for GitHub Pages (``docs/`` folder)
- Changed build path of API to make building and testing new API easier 
- Removed API dist from ``.gitignore`` allow easy exporting of bundled API

### Added
- Merged in [snap-js-api-prototype](https://github.com/18F/snap-js-api-prototype) and [snap-js-prescreener-prototypes](https://github.com/18F/snap-js-prescreener-prototypes) to create a repo with the prescreener and API together
- Created a new UI for the "debug panel" on top of the individual screener. Allows for changing states, viewing test income limits
- Added state switcher
- Added basic version of PA

## 2020-08-21
### Added
- Created REPO

