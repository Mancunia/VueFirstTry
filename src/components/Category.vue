<template>
    <span>
        {{ category.name }}
    </span>
</template>

<script>
export default {
  name: 'VuefirsttryCategory',
  props: {
    categoryId: {
      required: true,
      type: String
    }
  },

  data () {
    return {
      categories: this.$store.state.Data.categories
    }
  },

  computed: {
    category () {
      return this.categories.find(category => category.id === this.categoryId)
    }
  },

  methods: {

  }
}
</script>

<style lang="scss" scoped>

</style>
