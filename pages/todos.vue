<template>
  <NuxtChild />
</template>

<script>
export default {
  async asyncData ({ payload }) {
    return payload
  }
}
</script>
