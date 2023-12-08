<template>
    <div class="thread-card">
        <h2 class="thread-header">Threads</h2>
        <div class="thread-list" v-for="thread in threads" :key="thread.id">
            <ThreadItem :thread="thread"/>
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
  components: {
    ThreadItem
  }
}
</script>

<style lang="scss" scoped>

</style>
