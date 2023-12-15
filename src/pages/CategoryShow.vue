<template>
    <div class="forums">
      <h3>{{ category.name }}</h3>
      <ForumItem v-for="forum in getForums" :key="forum.id" :forum="forum" />

        <!-- <hr/> -->
    </div>
</template>

<script>
import ForumItem from '@/components/ForumItem.vue'
export default {
  name: 'VuefirsttryCategoryShow',
  props: {
    id: {
      required: true,
      type: String
    }
  },
  mounted () {
    console.log('this is the ID:', this.id)
  },
  computed: {
    category () {
      return this.$store.state.Data.categories.find(category => category.id === this.id)
    },
    getForums () {
      return this.$store.state.Data.forums.filter(f => f.category === this.id)
    }
  },
  methods: {

  },
  components: { ForumItem }
}
</script>

<style lang="scss" scoped>

</style>
