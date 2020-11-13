# Tailwindcss DarkMode

Tailwind CSS plugin that adds variants for DarkMode.

[![Downloads](https://img.shields.io/npm/dw/@danestves/tailwindcss-darkmode?style=for-the-badge)](https://www.npmjs.com/package/@danestves/tailwindcss-darkmode)
[![License](https://img.shields.io/npm/l/@danestves/tailwindcss-darkmode?style=for-the-badge)](https://es.wikipedia.org/wiki/Licencia_MIT)
[![Travis Build](https://img.shields.io/travis/com/danestves/tailwindcss-darkmode?style=for-the-badge)](https://travis-ci.com/danestves/tailwindcss-darkmode)

## Installation

```
# npm
npm install @danestves/tailwindcss-darkmode --save-dev

# yarn
yarn add --dev @danestves/tailwindcss-darkmode
```

Add the plugin to the `plugins` array in your `tailwind.config.js` file.

```js
module.exports = {
  // ...

  plugins: [
    // ...
    require('@danestves/tailwindcss-darkmode')()
  ]
};
```

Actually the function receive two parameters:

- `prefix`: default to `dark`.
- `activatorClass`: default to `dark-mode`.

So if you want to rename the `activatorClass` you can make it as simple as:

```js
module.exports = {
  // ...

  plugins: [
    // ...
    require('@danestves/tailwindcss-darkmode')('dark', 'my-custom-activator-class')
  ]
};
```

## Variants generated

**Note:** _These variants are activated when either the `html` or `body` tag has the class `dark-mode`_. But you can change it.

- `dark`
- `dark:hover`
- `dark:focus`
- `dark:active`
- `dark:disabled`
- `dark:odd`
- `dark:even`
- `dark:group-hover`
- `dark:focus-within`

```html
<div class="bg-gray-100 dark:bg-gray-800 border-t-4 border-green-500">
  <nav class="flex flex-wrap justify-end items-center p-4">
    <a class="text-gray-700 hover:bg-gray-300 dark:hover:bg-transparent dark:focus:text-green-500" href="#">Text</a>
  </nav>
</div>
```

🚨 Dark variants must be enabled on each utility in your `tailwind.config.js` file. 🚨

```js
variants: {
    backgroundColor: [
      "responsive",
      "hover",
      "focus",
      "dark",
      "dark:hover",
      "dark:focus"
    ],
    borderColor: [
      "responsive",
      "hover",
      "focus",
      "dark",
      "dark:hover",
      "dark:focus"
    ],
    textColor: [
      "responsive",
      "hover",
      "focus",
      "group-hover",
      "dark",
      "dark:hover",
      "dark:focus",
      "dark:group-hover",
      "focus-within",
      "dark:focus-within",
      "dark:odd",
      "dark:even",
      "dark:active",
      "dark:disabled"
    ],
    borderStyle: ["responsive", "dark"]
  }
```

You can check the full list of default variants in the [Tailwind default config file][1].

## Customize class name prefix for variants

`dark` is used as default prefix for the variants that are generated. It´s possible to change `dark` for whatever you want, just pass any string as a param. For example, with `prefers-dark`:

```js
module.exports = {
  // ...

  plugins: [
    // ...
    require('tailwindcss-prefers-dark-mode')('prefers-dark')
  ]
};
```

And variants must be named with the new prefix:

```js
variants: {
  textColor: [
    'responsive',
    'hover',
    'focus',
    'group-hover',
    'prefers-dark',
    'prefers-dark:hover',
    'prefers-dark:focus',
    'prefers-dark:group-hover',
    'focus-within',
    'prefers-dark:focus-within'
  ];
}
```

[1]: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
[2]: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme
