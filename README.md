# :warning: (Testing) SNAP Eligibility Prescreener :warning:

## Introduction

This repo is a fork of [18F's Snap-JS-API-Prototype](https://github.com/18F/snap-js-api-prototype), with an HTML interface from [18F's Snap-JS-Prescreen-Prototypes](https://github.com/18F/snap-js-prescreener-prototypes) merged in to easily view and test the API.

## Demo

This repo is named to allow deployment onto Github pages for easy testing. There are two pages to view:

### Individual Screener

You can view a demo for the [individual screener here](https://benmolin.github.io/screener). This allows an individual to get an estimate of whether they are likely eligible, their potential SNAP amount, and the factors behind their decision.

### Bulk Screener

For organizations that would like to screen client's in bulk, there is a [bulk screener here](https://benmolin.github.io/bulk-screener). This allows you to upload a full CSV of client profiles, and adds a new row stating whether clients are "likely eligible" or not.

## Building API

All files and scripts needed to run the UI for using the API are in the ```docs``` folder. Building the minified, browser-ready Javascript with the command

```
npm run build
```

will build the API into ```docs/api.js``` to place the API in a location accessible by Github pages.
