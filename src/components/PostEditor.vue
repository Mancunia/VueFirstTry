<template>
    <div class="threads-container">
      <form @submit.prevent="save"><!-- <form v-on:submit.prevent="addPost">-->
        <input type="text" v-model="postData" /><!--  <textarea :value="newPost" v-on:input="newPost = $event.target.value" > -->

        <button>Submit Post</button>
      </form>
    </div>
</template>

<script>
export default {
  name: 'PostEditor',
  data () {
    return {
      postData: ''
    }
  },
  methods: {
    save () {
      if (this.postData.length > 0) {
        const postId = 'p' + Math.random()
        const newPost = {
          id: postId,
          text: this.postData,
          publishedAt: Math.floor(Date.now() / 1000),
          userId: 'u2'
        }

        this.$emit('save', { post: newPost })

        this.postData = ''
      }
    }

  }
}
</script>

<style lang="scss" scoped>

</style>
