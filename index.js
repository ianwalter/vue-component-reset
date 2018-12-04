export default function vueComponentReset (initialData) {
  return {
    data () {
      return initialData.call(this)
    },
    reset (prop) {
      const data = initialData.call(this)
      if (prop) {
        this.set(prop, data[prop])
      } else {
        Object.entries().forEach(([key, value]) => this.set(key, value))
      }
    }
  }
}
