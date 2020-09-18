# SNAP Eligibility Prescreener

:warning: This is in development -- do not use this in production.

## Introduction

This repo is a fork of [18F's Snap-JS-API-Prototype](https://github.com/18F/snap-js-api-prototype), with an HTML interface from [18F's Snap-JS-Prescreen-Prototypes](https://github.com/18F/snap-js-prescreener-prototypes) merged in to easily view and test the API. 

## Demo

This repo is named to allow deployment onto Github pages for easy testing. There are two pages to view:

### Individual Screener

You can view a demo for the [individual screener here](https://benmolin.github.io/screener). This allows an individual to get an estimate of whether they are likely eligible, their potential SNAP amount, and the factors behind their decision.

### Bulk Screener

For organizations that would like to screen client's in bulk, there is a [bulk screener here](https://benmolin.github.io/bulk-screener). This allows you to upload a full CSV of client profiles, and adds a new row stating whether clients are "likely eligible" or not.

## Embedding Screener

The goal for this project is to make the prescreener embeddable on any website. You can embed the site using one line of code:

```
<iframe src="https://benmolin.github.io/screener?state=PA" title="SNAP Prescreener"></iframe>
```

There are few ways that you can customize the prescreener to best fit with your website. For example, if you wanted to embed the screener for PA on your website and link your organization's phone number and email, you could use the configuration here: 

[Custom IL Prescreener](https://benmolin.github.io/screener?state=PA&phone=555-555-5555&email=help@example.com&debug=false&short=true)

To include this page directly on your website, you would place the URL into an iFrame:

```
<iframe src="https://benmolin.github.io/screener?state=PA&phone=555-555-5555&email=help@example.com&debug=false&short=true" title="SNAP Prescreener"></iframe>
```

All attributes are optional, with the exception of ``state``. Here all the attributes you can customize:

| Attribute     | Description                                          | Required  |
| ------------- |:---------------------------------------------------- | :-----:|
| `state`       | State for prescreener                                |   ✅   |
| `email`       | Email address as the contact / support email         |   ❌   |
| `phone`       | Phone number as the contact / support number         |   ❌   |
| `debug`       | Show the debug information at the top (default=true) |   ❌   |
| `short`       | Hide the non-required questions (default=false)      |   ❌   |


## Building API

All files and scripts needed to run the UI for using the API are in the ```docs``` folder. Building the minified, browser-ready Javascript with the command

```
npm run build
```

will build the API into ```docs/api.js``` to place the API in a location accessible by Github pages.
