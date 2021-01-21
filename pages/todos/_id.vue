<template>
  <div>
  </div>
</template>

<script>
export default {
  async asyncData ({ payload, route, store }) {
    console.log('todos/_id/payload', payload, route.params)
    return payload
  }
}
</script>

<style>
</style>
