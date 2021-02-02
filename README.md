# SNAP Eligibility Prescreener

## Introduction

This is an open-source project to build a 50-state SNAP eligibility prescreener. You can view the final product [here](https://www.snapscreener.com/).

This repo is a fork of [Snap-JS-API-Prototype](https://github.com/18F/snap-js-api-prototype) with an HTML interface from [Snap-JS-Prescreen-Prototypes](https://github.com/18F/snap-js-prescreener-prototypes). This fork has no affiliation with the original authors. You can read more about this project on our [about page](https://www.snapscreener.com/?p=about).

## Individual Screener

The [SNAP eligibility screener](https://www.snapscreener.com/) allows an individual to get an estimate of whether they are likely eligible for SNAP, their potential benefit, and how the decision was calculated.

### Embedding Screener

The screener can be embedded on any website. Here's how that might look:

[Sample SNAP Screner Embedded](https://www.snapscreener.com/sample-embed)

You can embed the screener using one line of code:

```
<iframe id='snap-iframe' src="https://www.snapscreener.com/screener?state=PA" title="SNAP Screener"></iframe>
```

There are few ways that you can customize the screener to best fit with your website. For example, if you wanted to embed the screener for PA on your website and link your organization's phone number and email, you could use the configuration here: 

[Custom Pennsylvania SNAP Screener](https://www.snapscreener.com/screener?state=PA&org=ABCD&phone=555-555-5555&email=help@example.com&debug=false&short=true)

To include this page directly on your website, you would place the URL into an iFrame:

```
<iframe id='snap-iframe' src="https://www.snapscreener.com/?state=PA&org=ABCD&phone=555-555-5555&email=help@example.com&debug=false&short=true" title="SNAP Screener"></iframe>
```

All attributes are optional, with the exception of ``org`` and ``state``. Here all the attributes you can customize:

| Attribute     | Description                                          | Required  |
| ------------- |:---------------------------------------------------- | :-----:|
| `org`         | Organization name                                    |   ✅   |
| `state`       | State for screener                                   |   ✅   |
| `titles`      | Hide titles on the top of the page (default=false)   |   ✅   |
| `debug`       | Show the debug information at the top (default=true) |   ❌   |
| `short`       | Hide the non-required questions (default=false)      |   ❌   |
| `email`       | Email address as the contact / support email         |   ❌   |
| `phone`       | Phone number as the contact / support number         |   ❌   |

Using the ``org`` argument will allow us to tell you how many individuals your organization was able to prescreen.

### Resizing iFrame

iFrames can be tricky to resize when embedded, and often result in double scroll bars -- one for your main website, and one for the embedded page.

The calculator is already configured to respond to an [iFrame Resizing Library](https://github.com/davidjbradshaw/iframe-resizer/). If you would like to automatically resize the iFrame as the screener expands, link the following two additional files after the iFrame. The first file is a library that can interpret resizing instructions sent from the screener. The second file activates the library on the ``#snap-iframe``.

```
<iframe id='snap-iframe' src="https://www.snapscreener.com/?state=PA" title="SNAP Screener"></iframe>
<script src="https://www.snapscreener.com/shared/iframe/iframeResizer.min.js"></script>
<script src="https://www.snapscreener.com/shared/iframe/iframeResizer-screener.js"></script>
```

## Data

View the compiled eligibility parameters [here](https://www.snapscreener.com/?p=data).

## Building API

All files and scripts needed to run the UI for using the API are in the ```docs``` folder. Building the minified, browser-ready Javascript with the command

```
npm run build
```

will build the API into ```docs/api.js``` to place the API in a location accessible by Github pages.

## Questions / Issues / Feedback

Please feel free to create an issue if need. Alternatively, you can email at info@snapscreener.com