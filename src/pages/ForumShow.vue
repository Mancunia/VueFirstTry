<template>
    <div>
       <h3>Name: {{ forum().name }}</h3>
        <ThreadList :threads="forum().threads"/>

    </div>
</template>

<script>

import ThreadList from '@/components/ThreadList.vue'

export default {
  name: 'VuefirsttryForumShow',
  props: {
    id: {
      required: true,
      type: String
    }
  },
  components: {
    ThreadList
  },

  data () {
    return {
      forums: this.$store.state.Data.forums
    }
  },
  computed: {

  },
  methods: {
    forum () {
      console.log('forums:', this.forums, this.id)
      const forum = this.forums.find(forum => forum.id === this.id)
      console.log('forum: ', forum)
      return forum
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
