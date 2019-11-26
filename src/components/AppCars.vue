<template>
  <div class="hello">
  <div>
    <h3>Cars:</h3>
    <ul v-for="car in cars" :key="car.id">
      <li>
        {{car.brand}}
      </li>
    </ul>
  </div>
  </div>
</template>

<script>
import {carsService} from '../services/cars-service'
export default {
  data() {
    return {
      cars: []
    }
  },

  created() {
    carsService.getCars()
    .then(response => 
    this.cars = response.data)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
