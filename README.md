# SNAP Eligibility Prescreener

:warning: This is in development -- do not use this in production.

## Introduction

This repo is a fork of [18F's Snap-JS-API-Prototype](https://github.com/18F/snap-js-api-prototype), with an HTML interface from [18F's Snap-JS-Prescreen-Prototypes](https://github.com/18F/snap-js-prescreener-prototypes) merged in to easily view and test the API. 

## Demo

This repo is named to allow deployment onto Github pages for easy testing. There are two pages to view:

### Individual Screener

You can view a demo for the [individual screener here](https://www.snapscreener.com/). This allows an individual to get an estimate of whether they are likely eligible, their potential SNAP amount, and the factors behind their decision.

### Bulk Screener

For organizations that would like to screen client's in bulk, there is a [bulk screener here](https://www.snapscreener.com/bulk-screener). This allows you to upload a full CSV of client profiles, and adds a new row stating whether clients are "likely eligible" or not.

## Embedding Screener

The goal for this project is to make the screener embeddable on any website. Here's how that might look:

[Sample SNAP Screner Embedded](https://www.snapscreener.com/sample-embed)

You can embed the screener using one line of code:

```
<iframe id='snap-iframe' src="https://www.snapscreener.com/?state=PA" title="SNAP Screener"></iframe>
```

There are few ways that you can customize the screener to best fit with your website. For example, if you wanted to embed the screener for PA on your website and link your organization's phone number and email, you could use the configuration here: 

[Custom Pennsylvania SNAP Screener](https://www.snapscreener.com/?state=PA&phone=555-555-5555&email=help@example.com&debug=false&short=true)

To include this page directly on your website, you would place the URL into an iFrame:

```
<iframe id='snap-iframe' src="https://www.snapscreener.com/?state=PA&phone=555-555-5555&email=help@example.com&debug=false&short=true" title="SNAP Screener"></iframe>
```

All attributes are optional, with the exception of ``state``. Here all the attributes you can customize:

| Attribute     | Description                                          | Required  |
| ------------- |:---------------------------------------------------- | :-----:|
| `state`       | State for screener                                   |   ✅   |
| `email`       | Email address as the contact / support email         |   ❌   |
| `phone`       | Phone number as the contact / support number         |   ❌   |
| `debug`       | Show the debug information at the top (default=true) |   ❌   |
| `short`       | Hide the non-required questions (default=false)      |   ❌   |

### Resizing iFrame

iFrames can be tricky to resize when embedded, and often result in double scroll bars -- one for your main website, and one for the embedded page.

The calculator is already configured to respond to an [iFrame Resizing Library](https://github.com/davidjbradshaw/iframe-resizer/). If you would like to automatically resize the iFrame as the screener expands, take the following steps:

1. Link [this](https://www.snapscreener.com/shared/iframe/iframeResizer.min.js) script on the page you are embedding the screener
2. Call the iFrame resizer script on your iFrame


```
<iframe id='snap-iframe' src="https://www.snapscreener.com/?state=PA" title="SNAP Screener"></iframe>
<script src="https://www.snapscreener.com/shared/iframe/iframeResizer.min.js"></script>
<script>
    iFrameResize({
        log: true
    }, '#snap-iframe') 
</script>
```

## Building API

All files and scripts needed to run the UI for using the API are in the ```docs``` folder. Building the minified, browser-ready Javascript with the command

```
npm run build
```

will build the API into ```docs/api.js``` to place the API in a location accessible by Github pages.
