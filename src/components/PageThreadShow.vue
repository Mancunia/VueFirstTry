<template >
    <div class="threads-container">

    <h2>{{ thread.title }}</h2>

    <div class="post" v-for="postId in thread.posts" :key="postId">
        <div class="post-user">
            <h3 class="name">By:{{ userById(postsById(postId).userId).name }}</h3>

            <h4 class="posts">posts: {{ userById(postsById(postId).userId).posts }}</h4>
        </div>

        <p class="post-text">{{ postsById(postId).text }}</p>
    </div>

    </div>

    </template>

<script>

/*
{
            "id":"t1",
            "title":"What is a woman?",
            "publishedAt": 122328734,
            "posts":["p1","p2"],
            "userId":"u1"
        }
*/
import data from '@/data.json'
export default {
  props: {
    id: {
      required: true,
      type: String
    }
  },
  data () {
    return {
      threads: data.threads,
      posts: data.posts,
      users: data.users
    }
  },
  computed: {
    thread () {
      return this.threads.find(thread => thread.id === this.id)// can also get id from router with "this.$route.params.id"
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
