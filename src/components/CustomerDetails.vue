<template>
  <div id="customer-details">
    <label for="customer-select">Select a customer id:</label>
    <select name="customers" id="customer-select">
      <option value="">--Please select an option--</option>
      <option value="all">All</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'customer-details'
}
</script>
