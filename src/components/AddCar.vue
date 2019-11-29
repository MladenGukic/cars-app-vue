<template>
  <div id="app">
      <form class="form-control" @submit.prevent="onSubmit">
          <input placeholder="Brand" type="text" v-model="carForm.brand" pattern=".{2,}" required title="Minimum 2 characters"/> <br>
          <input placeholder="Model" type="text" v-model="carForm.model" pattern=".{2,}" required title="Minimum 2 characters"/> <br>
          <select id="" v-model="carForm.year" required>
                    <option disabled value="">Please select year</option>
                    <option v-for="year in years" :key="year">
                        {{year}}
                    </option>
          </select> <br>
          <input placeholder="MaxSpeed" type="number" v-model="carForm.maxSpeed"> <br>  
          <input placeholder="Number of doors" type="number" v-model="carForm.numberOfDoors" required> <br>
            Automatic <input type="checkbox"  v-model="carForm.isAutomatic" > <br>
            Engine: <br>
           <input type="radio" v-model="carForm.engine" value="deisel"> Diesel  <br>
           <input type="radio" v-model="carForm.engine" value="petrol"> Petrol <br>
           <input type="radio" v-model="carForm.engine" value="electric"> Electric <br>
           <input type="radio" v-model="carForm.engine" value="hybrid"> Hybrid <br>
            <button type="submit" class="btn btn-primary mr-2" > Submit </button>
            <button type="button" class="btn btn-secondary mr-2" @click="resetCarForm()"> Reset </button>
            <button type="button" class="btn btn-info mr-2" @click="previewForm"> Preview </button>
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
            car: {},

            years: Array(20).fill(2000).map((n, i) => n + i),
        }

    },

    created() {
        // console.log('test')
        if(this.$route.params.id) {
            carsService.get(parseInt(this.$route.params.id))
            .then(response => {
            this.car = response.data
            })
        }
    },

    computed: {
        carForm() {
            return !this.$route.params.id ? this.form : this.car
        }
    },

    methods: {

        onSubmit () {
            if(this.carForm.id) {
                this.editCar()
            } else {
                this.addCar()
            }
        },

        addCar() {
            carsService.addCar(this.form)
            .then(() => this.$router.push('/cars'))
        },

        editCar() {
            carsService.edit(this.carForm.id, this.carForm)
            .then(() => this.$router.push('/cars'))
        },

        resetCarForm()
        {
            this.form = this.defaultForm()
        },

        defaultForm() {
                return {
                brand: "",
                model: "",
                year: "",
                maxSpeed: "",
                isAutomatic: false,
                engine: "",
                numberOfDoors : ""
                }
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
        },
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