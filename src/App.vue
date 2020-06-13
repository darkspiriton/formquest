<template>
  <div id="app">
    <div class="menu">
      <router-link v-if="!isLogged" to="/">Ingresar</router-link>
      <router-link v-if="!isLogged" to="/create">Crear Usuario 📖</router-link>
      <router-link v-if="isLogged" to="/dashboard">Inicio</router-link>
      <router-link v-if="isLogged && GET_USER_ADMIN" to="/list">Reporte</router-link>
      <a href="#" v-if="isLogged" @click.prevent="logout">Desconectarse 💣 {{GET_USER.user}}</a>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapState(['isLogged']),
    ...mapGetters(['GET_USER', 'GET_USER_ADMIN'])
  },
  methods: {
    ...mapMutations(['SET_LOGOUT_USER']),
    logout () {
      this.$store.commit('SET_LOGOUT_USER')
      this.$store.commit('SET_SUPER_ADMIN', false)
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Nunito:400,300");

.error {
  color: red;
  font-size: 15px;
}

.menu {
  display: flex;
  justify-content: flex-end;
  margin: auto;
  max-width: 1000px;
  font-size: 18px;
  background: #384047;
  min-height: 40px;
  a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 5px 0 5px;
    color: white;
    margin-right: 20px;
    &:hover {
      background: #f4f7f8;
      color: #384047;
    }
  }
}

*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  font-family: "Nunito", sans-serif;
  color: #384047;
}

form {
  margin: auto;
  padding: 30px 20px;
  background: #f4f7f8;
  border-radius: 8px;
}

h1 {
  margin: 0 0 30px 0;
  text-align: center;
}

input[type="text"],
input[type="password"],
input[type="date"],
input[type="datetime"],
input[type="email"],
input[type="number"],
input[type="search"],
input[type="tel"],
input[type="time"],
input[type="url"],
textarea,
select {
  background: rgba(255, 255, 255, 0.1);
  border: none;
  font-size: 16px;
  height: auto;
  margin: 0;
  outline: 0;
  padding: 15px;
  width: 100%;
  background-color: #e8eeef;
  color: #8a97a0;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
  margin-bottom: 30px;
}

input[type="radio"],
input[type="checkbox"] {
  margin: 0 4px 8px 0;
}

select {
  padding: 6px;
  height: 32px;
  border-radius: 2px;
}

button {
  padding: 19px 39px 18px 39px;
  color: #fff;
  background-color: #4bc970;
  font-size: 18px;
  text-align: center;
  font-style: normal;
  border-radius: 5px;
  width: 100%;
  border: 1px solid #3ac162;
  border-width: 1px 1px 3px;
  box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.1) inset;
  margin-bottom: 10px;
}

fieldset {
  margin-bottom: 30px;
  border: none;
}

legend {
  font-size: 1.4em;
  margin-bottom: 10px;
}

label {
  display: block;
  margin-bottom: 8px;
}

label.light {
  font-weight: 300;
  display: inline;
}

.number {
  background-color: #5fcf80;
  color: #fff;
  height: 30px;
  width: 30px;
  display: inline-block;
  font-size: 0.8em;
  margin-right: 10px;
  line-height: 30px;
  text-align: center;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.2);
  border-radius: 100%;
}

@media screen and (min-width: 480px) {
  form {
    max-width: 1000px;
  }
}

.question-group {
  margin-bottom: 20px;

  &-title {
    margin-bottom: 10px;
  }
  &-option {
    list-style-type: lower-latin;
  }
}
</style>
