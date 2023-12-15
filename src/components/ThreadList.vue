<template>
    <div class="thread-card">
        <h2 class="thread-header">Threads</h2>
        <div class="thread-list">
        <div v-for="thread in threads" :key="thread">
            <ThreadItem :thread="getThread(thread)"/>
        </div>
        </div>

    </div>
</template>

<script>
import ThreadItem from './ThreadItem.vue'
export default {
  name: 'ThreadList',
  props: {
    threads: {
      required: true,
      type: Array
    }
  },
  data () {
    return {
      threadData: this.$store.state.Data.threads
    }
  },
  components: {
    ThreadItem
  },
  methods: {
    getThread (threadId) {
      return this.threadData.find(thread => thread.id === threadId)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
