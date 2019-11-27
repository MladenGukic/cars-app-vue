<template>
  <div>
      <form class="form-control">
          <input placeholder="Brand" type="text" v-model="form.brand"/> <br>
          <input placeholder="Model" type="text" v-model="form.model"/> <br>
          <select id="" v-model="form.year">
                    <option disabled value="">Please select year</option>
                    <option v-for="year in years" :key="year">
                        {{year}}
                    </option>
          </select> <br>
          <input placeholder="MaxSpeed" type="number" v-model="form.maxSpeed"> <br>  
          <input placeholder="Number of doors" type="number" v-model="form.numberOfDoors"> <br>
            Automatic <input type="checkbox"  v-model="form.isAutomatic"> <br>
            Engine: <br>
           <input type="radio" v-model="form.engine" value="deisel"> Diesel  <br>
           <input type="radio" v-model="form.engine" value="petrol"> Petrol <br>
           <input type="radio" v-model="form.engine" value="electric"> Electric <br>
           <input type="radio" v-model="form.engine" value="hybrid"> Hybrid <br>

            <button type="submit" class="btn btn-primary mr-2" @click="addCar"> AddCar </button>
            <button class="btn btn-secondary" @click="resetForm"> Reset </button>
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
                year: 0,
                maxSpeed: 0,
                isAutomatic: false,
                engine: "",
                numberOfDoors: 0,
            },

             years: [
        1990,
        1991,
        1992,
        1993,
        1994,
        1995,
        1996,
        1997,
        1998,
        1999,
        2000,
        2001,
        2002,
        2003,
        2004,
        2005,
        2006,
        2007,
        2008,
        2009,
        2010,
        2011,
        2012,
        2013,
        2014,
        2015,
        2016,
        2017,
        2018
      ]
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
        }
    }
}
</script>

<style>

</style>