<template>
  <NuxtChild />
</template>

<script>
export default {
  async asyncData ({ payload, route, store }) {
    console.log('todos/payload', payload, route.params)
    return payload
  }
}
</script>
