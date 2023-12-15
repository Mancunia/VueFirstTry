<template >
    <div class="threads-container">

    <h2>{{ thread.title }}</h2>

    <PostList :Posts="thread.posts"/>

    <PostEditor @save="addPost" />
    </div>

</template>

<script>
import PostEditor from '@/components/PostEditor.vue'
import PostList from '@/components/PostList.vue'

export default {
  components: {
    PostEditor,
    PostList
  },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  data () {
    return {
      threads: this.$store.state.Data.threads,
      posts: this.$store.state.Data.posts,
      users: this.$store.state.Data.users,
      newPost: ''
    }
  },
  computed: {
    thread () {
      return this.threads.find(thread => thread.id === this.id)// can also get id from router with "this.$route.params.id"
    }
  },
  methods: {
    addPost (eventData) {
      try {
        // const postId = 'post-' + Math.random()
        const newPost = {
          ...eventData.post,
          threadId: this.id
        }
        this.posts.push(newPost)
        const thisThread = this.threads.find(t => t.id === this.id)
        thisThread.posts.push(newPost.id)
      } catch (error) {
        console.log('error', error)
      }
    }

  }

}
</script>

<style lang="scss" scoped>

</style>
