# [material-react-toastify](https://www.npmjs.com/package/material-react-toastify)

### You can try the [demo here](https://material-react-toastify.surge.sh).

<h4>v1 is out 🎉 🎉</h5>

This is a fork from [react-toastify](https://www.npmjs.com/package/react-toastify) v6.1.0, all its props and documentation will work with this module too.

<!--![Financial Contributors on Open Collective](https://opencollective.com/react-toastify/all/badge.svg?label=financial+contributors)](https://opencollective.com/react-toastify)-->
<!--![material-react-toastify CI](https://github.com/fkhadra/react-toastify/workflows/React-toastify%20CI/badge.svg)--->

![npm](https://img.shields.io/npm/dm/material-react-toastify.svg?label=%E2%8F%ACdownloads&style=for-the-badge)
![npm](https://img.shields.io/npm/v/material-react-toastify.svg?style=for-the-badge)
![NPM](https://img.shields.io/npm/l/react-toastify.svg?label=%F0%9F%93%9Clicense&style=for-the-badge)
![Coveralls github](https://img.shields.io/coveralls/github/fkhadra/react-toastify?label=%E2%9B%B1coverage&style=for-the-badge)
[![downloads](https://img.shields.io/npm/dt/material-react-toastify.svg?style=for-the-badge)](https://www.npmjs.com/package/material-react-toastify)

<!--![React toastify](https://user-images.githubusercontent.com/5574267/35336500-e58f35b6-0118-11e8-800b-2da6594fc700.gif "React toastify")--->

<div style="text-align:center; margin-bottom:10px; max-height:100px">
  <img 
    src="https://user-images.githubusercontent.com/35040146/100596753-851b5e00-3322-11eb-9073-1a50e5adcb53.png"
  />
</div>

🎉 material-react-toastify allows you to add notification snackbars to your app with ease. No need to maintain multiple states anymore!

This component has been made in compliance with Material.io design spec-sheet. You can check it out [here](https://material.io/components/snackbars/)

## Installation

```
$ npm install --save material-react-toastify
$ yarn add material-react-toastify
```

## Features

- Easy to set up for real, you can make it work in less than 10sec!
- Super easy to customize
- RTL support
- Swipe to close 👌
- Can choose swipe direction
- Super easy to use an animation of your choice. Works well with animate.css for example
- Can display a react component inside the toast!
- Has `onOpen` and `onClose` hooks. Both can access the props passed to the react component rendered inside the toast
- Can remove a toast programmatically
- Define behavior per toast
- Pause toast when the window loses focus 👁
- Fancy progress bar to display the remaining time
- Possibility to update a toast
- You can control the progress bar a la `nprogress` 😲
- You can limit the number of toast displayed at the same time
- Dark mode 🌒
- And much more !

## The gist

```jsx
import React from 'react';

import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';

function App() {
  const notify = () => toast('Wow so easy!');

  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
  );
}
```

### Example:

<div style="text-align:center; margin-bottom:10px; max-height:100px">
  <img 
    src="https://user-images.githubusercontent.com/35040146/100720655-54036200-33e4-11eb-9b08-357077675ff2.png"
  />
</div>

```js
toast("It's that easy"); // or toast.default()
toast.success('to create');
toast.error('different types');
toast.dark('of notifications.');
toast.warning('You just need to');
toast.info('execute one of these functions');
```

## Demo

[A demo is worth a thousand words](https://material-react-toastify.surge.sh)

## Documentation

Here's the [documentation](https://material-react-toastify.netlify.app/introduction) to get you started !

\*\*I edited the original documentation to change it according to material-react-toastify

You can also check-out the original react-toastify documentation [here](https://fkhadra.github.io/react-toastify/introduction) for further reference.

## Contribute

Show your ❤️ and support by giving a ⭐. Any suggestions are welcome! Take a look at the contributing guide.

You can also find me on [reactiflux](https://www.reactiflux.com/). My pseudo is shivanshBTW.

## Contributors

### Code Contributors

This project exists thanks to all the people who contribute. [[Contribute](CONTRIBUTING.md)].
<a href="https://github.com/shivanshBTW/material-react-toastify/graphs/contributors">
    <img src="https://opencollective.com/react-toastify/contributors.svg?width=890&button=false" />
</a>

<!--### Financial Contributors

Become a financial contributor and help us sustain our community. [[Contribute](https://opencollective.com/react-toastify/contribute)]

#### Individuals

<a href="https://opencollective.com/react-toastify"><img src="https://opencollective.com/react-toastify/individuals.svg?width=890"></a>

#### Organizations

Support this project with your organization. Your logo will show up here with a link to your website. [[Contribute](https://opencollective.com/react-toastify/contribute)]

<a href="https://opencollective.com/react-toastify/organization/0/website"><img src="https://opencollective.com/react-toastify/organization/0/avatar.svg"></a>
<a href="https://opencollective.com/react-toastify/organization/1/website"><img src="https://opencollective.com/react-toastify/organization/1/avatar.svg"></a>
<a href="https://opencollective.com/react-toastify/organization/2/website"><img src="https://opencollective.com/react-toastify/organization/2/avatar.svg"></a>
<a href="https://opencollective.com/react-toastify/organization/3/website"><img src="https://opencollective.com/react-toastify/organization/3/avatar.svg"></a>
<a href="https://opencollective.com/react-toastify/organization/4/website"><img src="https://opencollective.com/react-toastify/organization/4/avatar.svg"></a>
<a href="https://opencollective.com/react-toastify/organization/5/website"><img src="https://opencollective.com/react-toastify/organization/5/avatar.svg"></a>
<a href="https://opencollective.com/react-toastify/organization/6/website"><img src="https://opencollective.com/react-toastify/organization/6/avatar.svg"></a>
<a href="https://opencollective.com/react-toastify/organization/7/website"><img src="https://opencollective.com/react-toastify/organization/7/avatar.svg"></a>
<a href="https://opencollective.com/react-toastify/organization/8/website"><img src="https://opencollective.com/react-toastify/organization/8/avatar.svg"></a>
<a href="https://opencollective.com/react-toastify/organization/9/website"><img src="https://opencollective.com/react-toastify/organization/9/avatar.svg"></a>

## Release Notes

You can find the release note for the latest release [here](https://github.com/shivanshBTW/material-react-toastify/releases/latest)

You can browse them all [here](https://github.com/shivanshBTW/material-react-toastify/releases)
-->

## License

Licensed under MIT
