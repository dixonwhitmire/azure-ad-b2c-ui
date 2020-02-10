<template>
  <div id="app">
    <app-header></app-header>
    <customer-details></customer-details>
  </div>
</template>
<script>
import AppHeader from '@/components/AppHeader'
import CustomerDetails from '@/components/CustomerDetails'
export default {
  name: 'app',
  components: {
    'app-header': AppHeader,
    'customer-details': CustomerDetails
  }
}
</script>
