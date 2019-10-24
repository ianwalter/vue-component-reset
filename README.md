# @ianwalter/vue-component-reset
> A [Vue.js][vueUrl] component mixin that makes restoring initial state to the
> component simple

[![npm page][npmImage]][npmUrl]

## Installation

```console
yarn add @ianwalter/vue-component-reset
```

## Usage

```js
import vueComponentReset from '@ianwalter/vue-component-reset'

const resetMixin = vueComponentReset(() => ({ msg: 'Hello', count: 0 }))

export default {
  mixins: [resetMixin],
  methods: {
    someAction () {
      this.reset() // Reset data to it's initial state.
      this.reset('msg') // Reset msg to it's initial state.
    }
  }
}
```

## Related

* [`vuex-reset`][vuexResetUrl] - A Vuex plugin that makes restoring initial
  state to the store simple

## License

Hippocratic License - See [LICENSE][licenseUrl]

&nbsp;

Created by [Ian Walter](https://iankwalter.com)

[vueUrl]: https://vuejs.org/
[npmImage]: https://img.shields.io/npm/v/@ianwalter/vue-component-reset.svg
[npmUrl]: https://www.npmjs.com/package/@ianwalter/vue-component-reset
[vuexResetUrl]: https://github.com/ianwalter/vuex-reset
[licenseUrl]: https://github.com/ianwalter/vue-component-reset/blob/master/LICENSE
