<template >
<h1>Welcome to the forum</h1>
<ThreadList :threads="threads"/>
</template>

<script>

import ThreadList from '@/components/ThreadList.vue'

export default {
  data () {
    return {
      threads: this.$store.state.Data.threads
    }
  },
  components: {
    ThreadList
  }

}
</script>

<style scoped>

</style>
