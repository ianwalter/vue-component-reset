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
          Object.keys(data).forEach(key => this.$set(this, key, data[key]))
        }
      }
    }
  }
}
