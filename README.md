# @ianwalter/vue-component-reset
> A [Vue.js][vueUrl] component mixin that makes restoring initial state to the
> component simple

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

## License

Apache 2.0 with Commons Clause - See [LICENSE][licenseUrl]

&nbsp;

Created by [Ian Walter](https://iankwalter.com)

[vueUrl]: https://vuejs.org/
[licenseUrl]: https://github.com/ianwalter/vue-component-reset/blob/master/LICENSE
