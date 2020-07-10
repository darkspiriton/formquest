<template>
  <div>
    <form>
      <h1>Gracias por completar los formularios</h1>
      <!-- <fieldset>
      <label for="name">Nombres y Apellidos del estudiante:</label>
      <input type="text" v-model="GET_USER.name" name="user_name" disabled>

      <label for="age">Edad:</label>
      <input type="number" v-model="GET_USER.age" name="user_age" disabled>

      <label for="age">Grado y Sección:</label>
      <input type="text" v-model="GET_USER.grade" name="user_grade" disabled>

      <label for="gender" >Sexo:</label>
      <select name="gender" v-model="GET_USER.gender" disabled>
          <option value="" disabled selected hidden>Selecciona tu opcion</option>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
      </select>

      <label for="procedencia">Lugar de procedencia:</label>
      <select name="procedencia" v-model="GET_USER.origen" disabled>
          <option value="" disabled selected hidden>Selecciona tu opcion</option>
          <option value="costa">Costa</option>
          <option value="sierra">Sierra</option>
          <option value="selva">Selva</option>
      </select>

      <div class="group_result">
        <label for="age">TEST Resultado de conocimiento conceptual de la tuberculosis:</label>
        <div class="result" :class="getClassNotaATest()">
          {{GET_USER_RESULT.finalATest}} - {{GET_USER_RESULT.notaATest}} puntos
        </div>

        <label for="age">TEST Resultado de conocimiento practico de la tuberculosis:</label>
        <div class="result" :class="getClassNotaBTest()">
          {{GET_USER_RESULT.finalBTest}} - {{GET_USER_RESULT.notaBTest}} puntos
        </div>
      </div>

      <div class="group_result">
        <label for="age">Resultado de conocimiento conceptual de la tuberculosis:</label>
        <div class="result" :class="getClassNotaA()">
          {{GET_USER_RESULT.finalA}} - {{GET_USER_RESULT.notaA}} puntos
        </div>

        <label for="age">Resultado de conocimiento practico de la tuberculosis:</label>
        <div class="result" :class="getClassNotaB()">
          {{GET_USER_RESULT.finalB}} - {{GET_USER_RESULT.notaB}} puntos
        </div>
      </div>

    </fieldset> -->
    <div class="banner">
      <img src="../assets/img2.png" alt="">
      <img src="../assets/img1.png" alt="">
    </div>
    <!-- <button @click.prevent="getResult()" :disabled="isLoading">CONTINUAR</button> -->
    </form>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  display: flex;
  flex-direction: column;
  img {
    width: auto;
    align-self: center;
    margin-bottom: 20px;
  }
}
.group_result {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  label {
    font-size: 20px;
  }
  .result {
    background: green;
    min-height: 60px;
    font-size: 25px;
    border-radius: 5px;
    align-items: center;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 400px;
    margin-bottom: 30px;
    &.yellow {
      background: green;
      color: #384047;
    }
    &.yellow {
      background: yellow;
      color: #384047;
    }
    &.red {
      background: red;
    }
  }
}
</style>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['GET_USER_RESULT', 'GET_USER'])
  },
  methods: {
    getClassNotaA () {
      switch (true) {
        case (this.GET_USER_RESULT.notaA < 7):
          return 'red'
        case (this.GET_USER_RESULT.notaA < 15):
          return 'yellow'
        case (this.GET_USER_RESULT.notaA <= 20):
          return 'green'
      }
    },
    getClassNotaATest () {
      switch (true) {
        case (this.GET_USER_RESULT.notaATest < 7):
          return 'red'
        case (this.GET_USER_RESULT.notaATest < 15):
          return 'yellow'
        case (this.GET_USER_RESULT.notaATest <= 20):
          return 'green'
      }
    },
    getClassNotaB () {
      switch (true) {
        case (this.GET_USER_RESULT.notaB < 11):
          return 'red'
        case (this.GET_USER_RESULT.notaB <= 20):
          return 'green'
      }
    },
    getClassNotaBTest () {
      switch (true) {
        case (this.GET_USER_RESULT.notaBTest < 11):
          return 'red'
        case (this.GET_USER_RESULT.notaBTest <= 20):
          return 'green'
      }
    }
  }
}
</script>>
