<template>
     <div class="post" v-for="postId in Posts" :key="postId">
      <div class="post-user">
            <h3 class="name">By:{{ userById(postsById(postId).userId).name }}</h3>

            <h4 class="posts">posts: {{ userById(postsById(postId).userId).posts }}</h4>
        </div>

        <div class="post-details">
           <p class="post-text">{{ postsById(postId).text }}</p>
          <AppDate :timestamp="postsById(postId).publishedAt"/>
        </div>

    </div>
</template>

<script>

export default {
  name: 'PostList',
  props: {
    Posts: {
      required: true,
      type: Array
    }
  },
  data () {
    return {
      posts: this.$store.state.Data.posts,
      users: this.$store.state.Data.users
    }
  },

  methods: {
    postsById (postId) {
      return this.posts.find(p => p.id === postId)
    },
    userById (userId) {
      return this.users.find(u => u.id === userId)
    }

  }
}
</script>

<style lang="scss" scoped>

</style>
