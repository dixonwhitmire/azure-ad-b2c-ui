<template>
  <div id="customer-select">
    <label for="customer-select">Select a customer id:</label>
    <select name="customers" id="customer-select" @input="selectCustomer">
      <option disabled value="" selected>Please Select An ID</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'customer-select',
  methods: {
    ...mapMutations([
      'customerSearchType'
    ]),
    selectCustomer () {
      this.customerSearchType(event.target.value)
    }
  }
}
</script>
