export default function vueComponentReset (initialData) {
  return {
    data () {
      return initialData.call(this)
    },
    methods: {
      reset (prop) {
        const data = initialData.call(this)
        if (prop) {
          this.$set(this, prop, data[prop])
        } else {
          Object.entries().forEach(([key, val]) => this.$set(this, key, val))
        }
      }
    }
  }
}
