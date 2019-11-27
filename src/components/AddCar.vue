<template>
  <div id="app">
      <form class="form-control">
          <input placeholder="Brand" type="text" v-model="form.brand" pattern=".{2,}" required title="Minimum 2 characters"/> <br>
          <input placeholder="Model" type="text" v-model="form.model" pattern=".{2,}" required title="Minimum 2 characters"/> <br>
          <select id="" v-model="form.year" required>
                    <option disabled value="">Please select year</option>
                    <option v-for="year in years" :key="year">
                        {{year}}
                    </option>
          </select> <br>
          <input placeholder="MaxSpeed" type="number" v-model="form.maxSpeed"> <br>  
          <input placeholder="Number of doors" type="number" v-model="form.numberOfDoors" required> <br>
            Automatic <input type="checkbox"  v-model="form.isAutomatic" > <br>
            Engine: <br>
           <input type="radio" v-model="form.engine" value="deisel" required> Diesel  <br>
           <input type="radio" v-model="form.engine" value="petrol"> Petrol <br>
           <input type="radio" v-model="form.engine" value="electric"> Electric <br>
           <input type="radio" v-model="form.engine" value="hybrid"> Hybrid <br>
            <button type="submit" class="btn btn-primary mr-2" @click.stop.prevent="addCar"> AddCar </button>
            <button type="button" class="btn btn-secondary mr-2" @click="resetForm"> Reset </button>
            <button type="button" class="btn btn-warning mr-2" @click="previewForm"> Preview </button>
      </form>
  </div>
</template>

<script>
import {carsService} from '../services/cars-service'
export default {
    data() {
        return {
            form: {
  brand: "",
  model: "",
  year: "",
  maxSpeed: "",
  isAutomatic: false,
  engine: "",
  numberOfDoors : ""
},

             years: Array(20).fill(2000).map((n, i) => n + i)
    }

    },

    methods: {
        addCar() {
            carsService.addCar(this.form)
            this.$router.push('/cars')
        },

        resetForm()
        {
            this.form = {}
        },

        previewForm() {
            alert(
             "Brand: " + this.form.brand +
             " Model: " +  this.form.model +
             " Max Speed: " +   this.form.maxSpeed +
             " Is automatic: " +  this.form.isAutomatic +
             " engine: " +  this.form.engine +
            " Number of doors: " +  this.form.numberOfDoors
            )
        }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>