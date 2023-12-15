<template>
   <span :title="forCyborg">
   {{ forHumans }}
   </span>
</template>

<script>
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import localizedTime from 'dayjs/plugin/localizedFormat'

dayjs.extend(relativeTime)
dayjs.extend(localizedTime)

export default {
  name: 'AppDate',
  props: {
    timestamp: {
      required: true,
      type: Number
    }
  },
  data () {
    return {

    }
  },
  computed: {
    forHumans () {
      return dayjs.unix(this.timestamp).fromNow()
    },
    forCyborg () {
      return dayjs.unix(this.timestamp).format('llll')
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>

</style>
