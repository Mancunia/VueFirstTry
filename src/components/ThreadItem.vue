<template>
    <div class="thread-item">
        <div class="item-title">
            <router-link class="thread-name" :to="{name:'ThreadShow', params:{id:thread.id}}">{{ thread.title }}</router-link>
            <h4 class="thread-owner">By: {{ userById(thread.userId).name }}</h4>
        </div>
        <div class="thread-posts">{{ thread.posts.length }}</div>
        <div class="thread-owner-dp">
            <h3>{{ userById(thread.userId).name }}</h3>
        </div>
    </div>
</template>

<script>
import data from '@/data.json'
export default {
  name: 'ThreadItem',
  props: {
    thread: {
      required: true,
      type: Object
    }
  },

  data () {
    return {
      users: data.users
    }
  },
  methods: {
    userById (userId) {
      return this.users.find(u => u.id === userId)
    }

  }
}
</script>

<style lang="scss" scoped>

</style>
