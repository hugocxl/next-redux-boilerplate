# react-echarts

![React Avançado](https://raw.githubusercontent.com/React-Avancado/boilerplate/master/public/img/logo-gh.svg)

<div align="center">

[![Version](https://img.shields.io/npm/v/@hcorta/react-echarts.svg?style=flat-square&logo=appveyor)](https://www.npmjs.com/package/@hcorta/react-echarts)
[![Size](https://img.shields.io/bundlephobia/minzip/@hcorta/react-echarts?style=flat-square)](https://bundlephobia.com/result?p=@hcorta/react-echarts)
[![NPM](https://img.shields.io/npm/dm/@hcorta/react-echarts.svg?style=flat-square&logo=appveyor)](https://www.npmjs.com/package/@hcorta/react-echarts)
[![Dependencies Status](https://img.shields.io/npm/v/echarts?color=mediumorchid&label=echarts&style=flat-square)](https://github.com/apache/incubator-echarts)

🚀 A minimal jump-start boilerplate based on **Next** + **Redux** for building super-performant websites.

</div>

---

## Features

- 🔥 **SSR** – [Next.js](https://nextjs.org) for Static Site Generator
- ⚛️ **State Management** – Redux https://github.com/alexnm/re-ducks
- ⌛️ **Async Logic** – Thunks
- 🗳 **Persisting State** – Redux Persist
- ⚙️ **Bundle Analyzer** – [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- 🎨 **Styles** – Unopinied

## Table of Contents

- [Installation](#Installation)
- [Introducction](#Introducction)
- [Usage](#Usage)
- [Props](#Props)
- [Contributing](#Contributing)
- [Code of Conduct](#code-of-conduct)
- [License](#License)



## Overview

Modern web development technologies have evolved incredibly fast in the last few years in such a way that we can now create cross-platform desktop apps using resources originally thought for web browsers.

Nevertheless, this usually require a lot of setup to make things work: Webpack to bundle your code, Babel for transpiling, Eslint for linting... Not to mention that when creating Electron applications, all of that setup just becomes more difficult.

The primary aim of rew-electron-boilerplate is to eliminate all preliminary setup with one simple install so you can focus in developing your application.

## Installation

Create a repo in your profile via the "Use this template" option.

Install dependencies:

```bash
yarn
```

...and, you're ready to go!

## Project structure

The basic structure of the project is provided in the following way. No configuration needed, just the files you need to build your app.

```bash
.
├── README.md                # README file
├── next.config.js           # Next JS configuration
├── public                   # Public folder
│   └── assets
│       └── images           # Image used by default template
├── src
│   ├── layout               # Atomic layout components
│   ├── pages                # Next JS pages
│   ├── styles               # PostCSS style folder with Tailwind
│   ├── templates            # Default template
│   └── utils                # Utility folder
├── tailwind.config.js       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

## Commands

- `dev`: runs your application on `localhost:3000`
- `build`: creates the production build version
- `start`: starts a simple server with the build production code
- `lint`: runs the linter in all components and pages
- `test`: runs jest to test all components and pages
- `test:watch`: runs jest in watch mode
- `storybook`: runs storybook on `localhost:6006`
- `build-storybook`: create the build version of storybook

## Contributing

No one’s perfect. If you’ve found any errors, want to suggest enhancements, or expand on a topic, please feel free to open an Issue or collaborate by PR.

## Code of Conduct

[Contributor Code of Conduct](public/docs/CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

## License

**@hcorta/next-boilerplate** is open source software licensed as MIT ©[hcorta](https://github.com/hcorta).

---

Made with ♥ by [CreativeDesignsGuru](https://creativedesignsguru.com) [![Twitter](https://img.shields.io/twitter/url/https/twitter.com/cloudposse.svg?style=social&label=Follow%20%40Ixartz)](https://twitter.com/ixartz)

[![Sponsor Next JS Boilerplate](https://cdn.buymeacoffee.com/buttons/default-red.png)](https://www.buymeacoffee.com/ixartz)
