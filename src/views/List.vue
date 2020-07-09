<template>
  <form>
    <div class="limiter">
      <div class="container-table100">
        <div class="wrap-table100">
          <div class="table100">
            <table>
              <thead>
                <tr class="table100-head">
                  <th class="column1">Nombre</th>
                  <th class="column2">Edad</th>
                  <th class="column3">Grado</th>
                  <!-- <th class="column4">Genero</th> -->
                  <!-- <th class="column5">Origen</th> -->
                  <th class="column4">ConocimientoTest</th>
                  <th class="column5">PracticaTest</th>
                  <th class="column6">Conocimiento</th>
                  <th class="column7">Practica</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(result,index) in results" :key="index">
                  <td class="column1">{{result.name.toLowerCase()}}</td>
                  <td class="column2">{{result.age}} años</td>
                  <td class="column3">{{result.grade}}</td>
                  <!-- <td class="column4">{{result.gender}}</td> -->
                  <!-- <td class="column5">{{result.origen}}</td> -->
                  <td class="column4">{{result.finalATest}}</td>
                  <td class="column5">{{result.finalBTest}}</td>
                  <td class="column6">{{result.finalA.toLowerCase()}}</td>
                  <td class="column7">{{result.finalB.toLowerCase()}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data () {
    return {
      results: []
    }
  },
  async created () {
    this.results = await this.getResults()
    console.log(this.results)
  },
  methods: {
    async getResults () {
      const response = await window.database.ref().child('results').orderByChild('user').once('value')
      let results = null
      if (response.val() !== null) {
        results = Object.values(response.val())
      }
      return results
    }
  }
}
</script>

<style lang="scss" scoped>

/*//////////////////////////////////////////////////////////////////
[ FONT ]*/

// @font-face {
//   font-family: "Nunito", sans-serif;
//   src: url('../fonts/OpenSans/OpenSans-Regular.ttf');
// }

/*//////////////////////////////////////////////////////////////////
[ Table ]*/

.limiter {
  width: 100%;
  margin: 0 auto;
}

.container-table100 {
  width: 100%;
  // min-height: 100vh;
  // background: #c850c0;
  // background: -webkit-linear-gradient(45deg, #4158d0, #c850c0);
  // background: -o-linear-gradient(45deg, #4158d0, #c850c0);
  // background: -moz-linear-gradient(45deg, #4158d0, #c850c0);
  // background: linear-gradient(45deg, #4158d0, #c850c0);

  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 33px 30px;
}

.wrap-table100 {
  width: 1170px;
}

table {
  border-spacing: 1;
  border-collapse: collapse;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
  position: relative;
}
table * {
  position: relative;
}
table td, table th {
  padding-left: 8px;
}
table thead tr {
  height: 60px;
  background: #4bc970;
}
table tbody tr {
  height: 50px;
}
table tbody tr:last-child {
  border: 0;
}
table td, table th {
  text-align: left;
}
table td.l, table th.l {
  text-align: right;
}
table td.c, table th.c {
  text-align: center;
}
table td.r, table th.r {
  text-align: center;
}

.table100-head th{
  font-family: "Nunito", sans-serif;
  font-size: 18px;
  color: #fff;
  line-height: 1.2;
  font-weight: unset;
}

tbody tr:nth-child(even) {
  background-color: #f5f5f5;
}

tbody tr {
  font-family: "Nunito", sans-serif;
  font-size: 15px;
  color: #384047;
  line-height: 1.2;
  font-weight: unset;
}

tbody tr:hover {
  color: #555555;
  background-color: #f5f5f5;
  cursor: pointer;
}

.column1 {
  width: 160px;
  padding-left: 20px;
}

.column2 {
  width: 110px;
}

.column3 {
  width: 245px;
}

.column4 {
  width: 110px;
  text-align: right;
}

.column5 {
  width: 170px;
  text-align: right;
}

.column6 {
  width: 222px;
  text-align: right;
}

.column7 {
  width: 222px;
  text-align: right;
  padding-right: 20px;
}

@media screen and (max-width: 992px) {
  table {
    display: block;
  }
  table > *, table tr, table td, table th {
    display: block;
  }
  table thead {
    display: none;
  }
  table tbody tr {
    height: auto;
    padding: 37px 0;
  }
  table tbody tr td {
    padding-left: 40% !important;
    margin-bottom: 15px;
  }
  table tbody tr td:last-child {
    margin-bottom: 0;
  }
  table tbody tr td:before {
    font-family: "Nunito", sans-serif;
    font-size: 14px;
    color: #999999;
    line-height: 1.2;
    font-weight: unset;
    position: absolute;
    width: 40%;
    left: 20px;
    top: 0;
  }
  table tbody tr td:nth-child(1):before {
    content: "Nombre";
  }
  table tbody tr td:nth-child(2):before {
    content: "Edad";
  }
  table tbody tr td:nth-child(3):before {
    content: "Grado";
  }
  table tbody tr td:nth-child(4):before {
    content: "Genero";
  }
  table tbody tr td:nth-child(5):before {
    content: "Origen";
  }
  table tbody tr td:nth-child(6):before {
    content: "Conocimiento";
  }
  table tbody tr td:nth-child(7):before {
    content: "Practico";
  }

  .column4,
  .column5,
  .column7,
  .column6 {
    text-align: left;
  }

  .column4,
  .column5,
  .column6,
  .column7,
  .column1,
  .column2,
  .column3 {
    width: 100%;
  }

  tbody tr {
    font-size: 14px;
  }
}

@media (max-width: 576px) {
  .container-table100 {
    padding-left: 15px;
    padding-right: 15px;
  }
}

</style>
