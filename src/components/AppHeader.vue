<template>
  <div id="header">
    <h1>CRM App Logged In As {{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      name: 'Dixon Whitmire'
    }
  }
}
</script>
