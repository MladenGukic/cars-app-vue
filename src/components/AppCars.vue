<template>
  <div class="hello">
  <div>
    <h3>Cars:</h3>
    <ul v-for="car in cars" :key="car.id">
      <li>
        {{car.brand}}
        <button class="btn btn-warning" @click="navigateToEdit(car.id)">Edit</button>
        <button type="submit" class="btn btn-danger" @click="deleteCar(car.id)">Delete</button>

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
  },

  methods: {
    navigateToEdit(id) {
      this.$router.push({ name:'edit', params: {id} })
    },

    deleteCar(id) {
      carsService.deleteCar(id)
      this.cars = this.cars.filter(car => car.id !== id);
    }
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
