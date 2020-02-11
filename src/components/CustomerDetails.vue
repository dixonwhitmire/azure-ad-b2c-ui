<template>
    <div id="customer-data">
      <h3>Customer Details Search For {{ customerSearchType }}</h3>
        <table v-if="this.customerData">
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
          <tr>
            <td>{{ customerData.id }}</td>
            <td>{{ customerData.email }}</td>
            <td>{{ customerData.firstName }}</td>
            <td>{{ customerData.lastName }}</td>
          </tr>
        </table>
    </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  name: 'customer-details',
  data () {
    return {
      customerData: null
    }
  },
  computed: {
    ...mapGetters(['customerSearchType'])
  },
  methods: {
    fetchCustomerData (customerId) {
      var url = 'http://localhost:8090/api/customers/' + customerId
      return axios.get(url)
        .then(response => {
          this.customerData = response.data
        })
    }
  },
  watch: {
    customerSearchType (newValue, oldValue) {
      if (newValue != null && newValue !== oldValue) {
        this.customerData = this.fetchCustomerData(newValue)
      }
    }
  }
}
</script>
