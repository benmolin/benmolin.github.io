 Testing Repo, prototype only 

# :warning: (Testing) SNAP Eligibility Prescreener :warning:

## Introduction

This repo is a fork of [18F's Snap-JS-API-Prototype](https://github.com/18F/snap-js-api-prototype), with an HTML interface from [18'F Snap-JS-Prescreen-Prototypes](https://github.com/18F/snap-js-prescreener-prototypes) merged in to easily view and test the API.

## Demo

This repo is named to allow deployment onto Github pages for easy testing. You can view a demo [here](https://benmolin.github.io/screener).

All files and scripts needed to run the UI for using the API are in the ```docs``` folder. Building the minified, browser-ready Javascript with the command

```
npm run build
```

will build the API into ```docs/api.js``` to place the API in a location accessible by Github pages.
