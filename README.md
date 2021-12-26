![Next boilerplate](public/cover.png)

<div align="center">

[![Dependencies Status](https://img.shields.io/npm/v/echarts?color=mediumorchid&label=react&style=flat-square)](https://github.com/apache/incubator-echarts)
[![Dependencies Status](https://img.shields.io/npm/v/react-redux?color=mediumorchid&label=react-redux&style=flat-square)](https://github.com/apache/incubator-echarts)
[![Dependencies Status](https://img.shields.io/npm/v/next?color=mediumorchid&label=next&style=flat-square)](https://github.com/apache/incubator-echarts)
[![Dependencies Status](https://img.shields.io/npm/v/redux-thunk?color=mediumorchid&label=redux-thunk&style=flat-square)](https://github.com/apache/incubator-echarts)

🚀 A minimal jump-start boilerplate based on **Next** + **Redux** for building super-performant **SSR React** websites.

</div>

---

## Features

- 🔥 **SSR** – [Next.js](https://nextjs.org) for Static Site Generator.
- ⚛️ **State Management** – Redux for managing and centralizing application state.
- ⌛️ **Async Logic** – Thunks for asynchronous logic that interacts with the Redux store
- 🗳 **Persisting State** – Redux Persist for persist and rehydrate the Redux store
- � **Integrated testing** – Redux Persist for persist and rehydrate the Redux 
- ⚙️ **Bundle Analyzer** – [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- 🎨 **Styles** – Unopinionated! Why? 👉 Read this

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

### Redux

The architecture for the redux module is inspired in [this proposal](https://github.com/alexnm/re-ducks) by [Alex Moldovan](https://github.com/alexnm)
where he revisits the [original ducks modular approach proposal](https://github.com/erikras/ducks-modular-redux).

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

**@hcorta/next-boilerplate** is open source software licensed as MIT.

---

Made with ♥ by [@hcorta](https://hugocorta.com)
[![Twitter](https://img.shields.io/twitter/url/https/twitter.com/cloudposse.svg?style=social&label=Follow%20%40hcorta)](https://twitter.com/hcorta)
[![Sponsor Next JS Boilerplate](https://img.shields.io/badge/-buy_me_a%C2%A0coffee-gray?logo=buy-me-a-coffee)](https://www.buymeacoffee.com/hcorta)
