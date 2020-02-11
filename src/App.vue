<template>
  <div id="app">
    <app-header></app-header>
    <customer-select></customer-select>
    <customer-details></customer-details>
  </div>
</template>
<script>
import AppHeader from '@/components/AppHeader'
import CustomerSelect from '@/components/CustomerSelect'
import CustomerDetails from '@/components/CustomerDetails'

export default {
  name: 'app',
  components: {
    'app-header': AppHeader,
    'customer-select': CustomerSelect,
    'customer-details': CustomerDetails
  }
}
</script>
