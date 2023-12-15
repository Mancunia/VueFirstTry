<template>
    <div class="notFound">
        <h2>Not Found</h2>
        <router-link :to="{name:'Forums'}">Go back home</router-link>
    </div>
</template>

<script>
export default {
  name: 'PageNotFound'
}
</script>

<style scoped>
    .notFound {
        /* width: 1080px;  */
        box-shadow: #000 1px 1px 1px 1px;
    }
</style>
