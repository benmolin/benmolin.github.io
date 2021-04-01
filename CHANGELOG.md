# Changelog
History of changes to this repo since forked from [snap-js-api-prototype](https://github.com/18F/snap-js-api-prototype) and [snap-js-prescreener-prototypes](https://github.com/18F/snap-js-prescreener-prototypes) on 2020-08-20.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project tries to adhere to [Semantic Versioning](https://semver.org/spec/v2.0.0.html). No version numbers have yet to be included. 

### Pending Tasks
- Figure out whether BBCE states have different asset tests for HHEOD and not. If no, merge state options asset test variables.
- Single utility allowance for states with no BUA


# 2020-03-31

### Changed
- Copy on citizenship info box

# 2020-03-18

### Changed
- Calculator is now full by default. ```?short=true``` can go back to the toggle.
- Link to disclaimer is now a ```_blank``` out to the full privacy policy and terms.
- Titles on calculator are now larger

### Added
- Added the copy link. Only works with ```debug != false```
- Added Material Design Icons to license
- Added citizenship question
- Made hotline links clickable
- Added food bank links
- Allow new querystring options for apply and additional resources urls

### Removed
- Removed the "additional help" footer

# 2020-03-1

### Changed
- Made the error messages full width
- Website now blue instead of indigo

### Added
- New question about unemployment benefits. $300 weekly benefit excluded from gross income


# 2020-02-21

### Changed
- Made the table appear instantly
- Move legend to table page
- Changed wording about whether a state has an asset test. NY does... sometimes.

### Added
- Record organization name with each screen


# 2020-02-07

### Changed
- Removed "max-width" from prescreener UI
- Added ```pattern="[0-9]*"``` for iPhone number pad

# 2020-02-05

### Added
- Made the benefit amount bold

### Changed
- Had put the 15% boost message in the wrong location, wasn't showing it up for clients who didn't get max

# 2020-02-01

### Added
- Added a button to enable deductions on the form
- Added an option to hide the titles

### Changed
- Made the calculator short by default

### Deleted
- Removed food bank recommendations

# 2021-01-31

### Added
- SNAP Parameter definitions
- State code definitions

### Changed
- Updated Readme

# 2021-01-30

### Added
- Put SNAP parameter data in table

# 2021-01-25

### Added
- Added LogRocket. Best way to debug.

### Changed
- New elements to privacy policy

### Removed
- Removed question about US Citizenship from prescreener. Makes more sense to put it as an optional question later, along with something like "are you a student?"


# 2021-01-23

### Added
- New landing page

### Changed
- Moved screener to -> /screener


# 2021-01-20

### Added
- 15% increase to SNAP [USDA](https://www.fns.usda.gov/snap/temporary-increase-maximum-allotments-due-covid-19-revised-12282020)


# 2021-01-03
### Removed
- Removed the "not ready" warning

### Changed
- Minor CSS adjustments
- Fixed potential bug where ```state=AZ.``` with a period wouldn't work
- Updated December COVID state max allotments
- Updated github repo name
- Fixed something where the COVID allotment states weren't showing up

### Added
- Food logo top left



# 2020-12-05
### Changed
- Updated all the utility amounts to 2021 from [USDA Source](https://www.fns.usda.gov/snap/eligibility/deduction/standard-utility-allowances)

# 2020-12-01
### Added
- Added meta description
- COVID allotments by state

### Changed
- Merged $35 standard medical deduction changes from [snap-js-api-prototype](https://github.com/18F/snap-js-api-prototype/commit/bd6b857a662b02a8dfc6b47a77736ec581f748c8)

# 2020-11-30
### Added
- Added a testing function, so we can make sure all states are working with no errors

### Changed
- Changed casing of "District of Columbia" as it needs to match for excel import
- Changed excel importing function to allow AL to be imported as well

### Deleted
- Removed IL standard deductions variations
- Added an option so that the inputs dont get printed if ``&test=true``

# 2020-10-14
### Added
- Made the other state changer update the page as well (when the base page is visited)

# 2020-10-13
### Changed
- Updated the learn more link
- If you visit the page without selecting a state, it will have you select a state to be redirected to (SEO)

# 2020-10-12
### Added 
- Full data for all states (usually 2021)
- Max/min allotments, shelter deduction, FPL info for 2021
- Added the Alaska Urban / Rural designation inside API for max/min allotments
- Added HTML fields for area for AK and NY, asking for the region client lives in

### Changed
- Made the year a variable, re [pull request 33 from main](https://github.com/18F/snap-js-api-prototype/commit/e60b6453f7f3ce85d68ac51b7f0bbac9df1db48c)
- Max/min allotments, shelter deduction: changed Guam and Virgin Islands to GU and VI
- Fixed a couple typos
- Changed ``MatchShelterDeduction`` to ``MaxShelterDeduction``
- Note that pandemic increase might not apply [full list of states](https://www.cbpp.org/research/food-assistance/states-are-using-much-needed-temporary-flexibility-in-snap-to-respond-to)

### Deleted
- Removed ``standard_medical_deduction_ceiling`` as it is a constant $35 above the amount (redundant)

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

