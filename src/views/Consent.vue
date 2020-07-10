<template>
  <form>

    <h1>CONSENTIMIENTO INFORMADO</h1>
    <h2>“Fortaleciendo mi conocimiento, prevengo la tuberculosis”</h2>

    <fieldset>

      <div class='text'>
        Buenos días padre de familia, realizaremos un programa educativo titulado “Fortaleciendo mi conocimiento, prevengo la tuberculosis” que consiste en brindar videoconferencias, sesiones, talleres educativos y preventivos para el beneficio de sus menores hijos. El programa constituye en una plataforma virtual compuesta de videos educativos teóricas y prácticas cada una tendrá una duración de 10 a 15 minutos que lo podrá visualizar en la comodidad de su hogar en compañía de los padres, si lo desean.  El propósito del programa es contribuir en un rol muy trascendental, basado en el reconocimiento de la situación de la tuberculosis enfocándose con mayor prioridad en la prevención y promoción mediante la adquisición de conocimientos básicos para lograr prevenir la tuberculosis y mejorar la calidad de vida del estudiante así lograremos reducir las altas tasas de incidencia de escolares por casos de tuberculosis en el Perú. Por lo tanto, pedimos la autorización para que su menor hijo participe de este programa educativo. Declarando que la participación es voluntaria.
      </div>

      <div>
        <!-- <h3>Marcar con un (✔️) si acepta o no acepta</h3> -->

        <div class='row'>
          <input id="one" type="radio" name="rgroup" value="MV/titleTypeMV.cfm" />
          <label for="one" class='radio' tabindex='1'></label>
          <label>He leído el contenido de este documento  CONSENTIMIENTO INFORMADO y acepto que mi menor hijo (a) participe en el programa educativo.</label>
        </div>

        <div class='row'>
          <input id="two" type="radio" name="rgroup" value="MV/titleTypeMV.cfm" />
          <label for="two" class='radio' tabindex='1'></label>
          <label>No acepto que mi menor hijo(a) participe en el programa educativo.</label>
        </div>

      </div>

    </fieldset>

    <button @click="validateConsent()">ACEPTO</button>
  </form>
</template>

<script>
import loginData from '../mixins/loginData'
import moment from 'moment'
export default {
  data () {
    return {
      date: moment().format('DD-MM-Y')
    }
  },
  methods: {
    validateConsent () {
      this.$router.push('formTest')
    }
  },
  mixins: [loginData]
}
</script>

<style lang="scss" scoped>
form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .text {
    margin-bottom: 30px;
    text-align: center;
  }
}

body {
  background-color: white;
  margin: 0;
  padding: 0;
}
input[type="radio"] {
  display: none;
}
.radio {
  border: 1px solid #b3b4b4;
  border-radius: 50%;
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  float: left;
  height: 16px;
  margin: 10px 10px 0 0;
  padding: 10px;
  position: relative;
  width: 16px;
}
.row:hover .radio {
  border: 2px solid #3ac162;
}
input[type="radio"]:checked + .radio {
  background-color: #3ac162;
  border: 2px solid #3ac162;
}
input[type="radio"]:checked + .radio::before {
  content: "✓ ";
  position: absolute;
  color: white;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  // font-size:
}
.row {
  // border-bottom: 1px solid #dcdcdc;
  padding: 0 5px;
}
.row label {
  display: inline-block;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: bold;
}
.row > label:last-child {
  padding: 12px 0;
  width: calc(100% - 50px);
  cursor: pointer;
}
</style>
