<template>
    <div class="forum_item">
        <router-link :to="{name:'ForumShow',params:{id:forum.id}}">{{ forum.name }}</router-link>
        <h3>{{ forum.description }}</h3>
        <Category :categoryId="forum.category" />
    </div>
</template>

<script>
import Category from './Category.vue'

export default {
  name: 'ForumItem',
  props: {
    forum: {
      required: true,
      type: Object
    }
  },
  data () {
    return {}
  },
  methods: {},
  components: { Category }
}
</script>

<style lang="css" scoped>
  .forum_item {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    box-sizing: content-box;
    border-bottom: 1px solid #000;
    padding: auto;
  }
</style>
