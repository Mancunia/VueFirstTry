<template>
    <div class="forums" v-for="category in categories" :key="category.id">
      <router-link :to="{name:'Category',params:{id:category.id}}">{{ category.name }}</router-link>
      <ForumItem v-for="forum in getForums(category.id)" :key="forum.id" :forum="forum" />

        <!-- <hr/> -->
    </div>
</template>

<script>
import ForumItem from '@/components/ForumItem.vue'

export default {
  name: 'Forums',
  data () {
    return {
      forums: this.$store.state.Data.forums,
      categories: this.$store.state.Data.categories
    }
  },
  methods: {
    getForums (category) {
      return this.forums.filter(f => f.category === category)
    }
  },
  components: { ForumItem }
}
</script>

<style lang="scss" scoped>

</style>
