<template >
<h1>Welcome to the forum</h1>
<ThreadList :threads="threads"/>
</template>

<script>
import data from '@/data.json'
import ThreadList from './ThreadList.vue'

export default {
  data () {
    return {
      threads: data.threads
    }
  },
  components: {
    ThreadList
  }

}
</script>

<style scoped>

</style>
