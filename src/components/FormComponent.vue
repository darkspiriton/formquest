<template>
    <form>

    <h1>“Fortaleciendo mi conocimiento, prevengo la tuberculosis”</h1>

    <fieldset>
      <legend>DATOS GENERALES</legend>
      <label for="name">Nombres y Apellidos del estudiante:</label>
      <input type="text" v-model="user.name" name="user_name">

      <label for="age">Edad:</label>
      <input type="number" v-model="user.age" name="user_age">

      <label for="gender" >Sexo:</label>
      <select name="gender" v-model="user.gender">
          <option value="" disabled selected hidden>Selecciona tu opcion</option>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
      </select>

      <label for="procedencia">Lugar de procedencia:</label>
      <select name="procedencia" v-model="user.origen">
          <option value="" disabled selected hidden>Selecciona tu opcion</option>
          <option value="costa">Costa</option>
          <option value="sierra">Sierra</option>
          <option value="selva">Selva</option>
      </select>
    </fieldset>

    <fieldset>
      <legend><span class="number">A</span>Nivel de conocimiento conceptual de la tuberculosis:</legend>
      <ol>
        <div class="question-group" v-for="(question, index) in questionsA" :key="index">
          <li class="question-group-title">{{question.question}} </li>
          <ol>
            <div class="question-group-option" v-for="(alternative, key) in question.alternatives" :key="key">
              <li>
                <input type="radio" :name="question.question" @click="calculateA(question.id, alternative.value)">
                <label class="light">{{alternative.text}}</label><br>
              </li>
            </div>
          </ol>
        </div>
      </ol>
    </fieldset>

    <fieldset>
      <legend><span class="number">B</span>Nivel de conocimiento práctico de la tuberculosis:</legend>
      <ol>
        <div class="question-group" v-for="(question, index) in questionsB" :key="index">
          <li class="question-group-title">{{question.question}} </li>
          <ol>
            <div class="question-group-option" v-for="(alternative, key) in question.alternatives" :key="key">
              <li>
                <input type="radio" :name="question.question" @click="calculateB(question.id, alternative.value)">
                <label class="light">{{alternative.text}}</label><br>
              </li>
            </div>
          </ol>
        </div>
      </ol>
    </fieldset>

    <button @click.prevent="result()">Calificar</button>
  </form>
</template>

<script>
export default {
  name: 'FormComponent',
  data () {
    return {
      user: {
        name: null,
        age: null,
        gender: '',
        origen: '',
        notasA: [],
        notasB: [],
        finalA: null,
        finalB: null
      },
      questionsA: [
        {
          id: 1,
          question: '¿Qué es la tuberculosis?',
          alternatives: [
            {
              text: 'Enfermedad alérgica que se produce por el cambio de clima.',
              value: 0
            },
            {
              text: 'Es un resfrió no contagioso.',
              value: 0
            },
            {
              text: 'Enfermedad contagiosa que ataca especialmente al hígado.',
              value: 0
            },
            {
              text: 'Enfermedad contagiosa que ataca especialmente a los pulmones.',
              value: 1
            }
          ]
        },
        {
          id: 2,
          question: '¿La tuberculosis es causado por un ... ?',
          alternatives: [
            {
              text: 'Virus.',
              value: 0
            },
            {
              text: 'Bacteria.',
              value: 1
            },
            {
              text: 'Hongo.',
              value: 0
            },
            {
              text: 'Fungí.',
              value: 0
            }
          ]
        },
        {
          id: 3,
          question: '¿El agente que origina la tuberculosis es llamada?',
          alternatives: [
            {
              text: 'Salmonella.',
              value: 0
            },
            {
              text: 'Mycobacterium.',
              value: 0
            },
            {
              text: 'Bacilo de koch.',
              value: 1
            },
            {
              text: 'Klebsiellapneumoniae.',
              value: 0
            }
          ]
        },
        {
          id: 4,
          question: '¿Cómo se trasmite la tuberculosis?',
          alternatives: [
            {
              text: 'Al abrazar y dar la mano al enfermo.',
              value: 0
            },
            {
              text: 'Por transfusión de sangre.',
              value: 0
            },
            {
              text: 'A través de gotitas de saliva al toser, estornudar o hablar.',
              value: 1
            },
            {
              text: 'Dando la mano a la persona infectada.',
              value: 0
            }
          ]
        },
        {
          id: 5,
          question: '¿Quiénes pueden enfermarse de la tuberculosis pulmonar?',
          alternatives: [
            {
              text: 'Personas que realizan actividad física.',
              value: 0
            },
            {
              text: 'Personas con una alimentación saludable.',
              value: 0
            },
            {
              text: 'Personas con un sistema inmune débil, que se encuentran en contacto. frecuente con una persona de TBC, frecuentes enfermedades respiratorias y que vivan en hacinamiento.',
              value: 1
            }
          ]
        },
        {
          id: 6,
          question: '¿Cuál es el síntoma principal de la tuberculosis?',
          alternatives: [
            {
              text: 'Tos y flema frecuente por más de 15 días.',
              value: 1
            },
            {
              text: 'Tos frecuente por las de 10 días.',
              value: 0
            },
            {
              text: 'Tos frecuente por más de 7.',
              value: 0
            }
          ]
        },
        {
          id: 7,
          question: '¿Cuáles serían otros síntomas de la tuberculosis?',
          alternatives: [
            {
              text: 'Incremento de la sed e irritabilidad.',
              value: 0
            },
            {
              text: 'Diarrea continua y dolor de estómago.',
              value: 0
            },
            {
              text: 'Debilidad, cansancio, sudores nocturnos, pérdida de peso, apetito y fiebre.',
              value: 1
            }
          ]
        },
        {
          id: 8,
          question: '¿El agente que origina la tuberculosis es llamada?',
          alternatives: [
            {
              text: 'Salmonella.',
              value: 0
            },
            {
              text: 'Mycobacterium.',
              value: 0
            },
            {
              text: 'Bacilo de koch.',
              value: 1
            },
            {
              text: 'Klebsiellapneumoniae.',
              value: 0
            }
          ]
        },
        {
          id: 9,
          question: '¿El agente que origina la tuberculosis es llamada?',
          alternatives: [
            {
              text: 'Salmonella.',
              value: 0
            },
            {
              text: 'Mycobacterium.',
              value: 0
            },
            {
              text: 'Bacilo de koch.',
              value: 1
            },
            {
              text: 'Klebsiellapneumoniae.',
              value: 0
            }
          ]
        },
        {
          id: 10,
          question: '¿El agente que origina la tuberculosis es llamada?',
          alternatives: [
            {
              text: 'Salmonella.',
              value: 0
            },
            {
              text: 'Mycobacterium.',
              value: 0
            },
            {
              text: 'Bacilo de koch.',
              value: 1
            },
            {
              text: 'Klebsiellapneumoniae.',
              value: 0
            }
          ]
        },
        {
          id: 11,
          question: '¿El agente que origina la tuberculosis es llamada?',
          alternatives: [
            {
              text: 'Salmonella.',
              value: 0
            },
            {
              text: 'Mycobacterium.',
              value: 0
            },
            {
              text: 'Bacilo de koch.',
              value: 1
            },
            {
              text: 'Klebsiellapneumoniae.',
              value: 0
            }
          ]
        },
        {
          id: 12,
          question: '¿El agente que origina la tuberculosis es llamada?',
          alternatives: [
            {
              text: 'Salmonella.',
              value: 0
            },
            {
              text: 'Mycobacterium.',
              value: 0
            },
            {
              text: 'Bacilo de koch.',
              value: 1
            },
            {
              text: 'Klebsiellapneumoniae.',
              value: 0
            }
          ]
        },
        {
          id: 13,
          question: '¿El agente que origina la tuberculosis es llamada?',
          alternatives: [
            {
              text: 'Salmonella.',
              value: 0
            },
            {
              text: 'Mycobacterium.',
              value: 0
            },
            {
              text: 'Bacilo de koch.',
              value: 1
            },
            {
              text: 'Klebsiellapneumoniae.',
              value: 0
            }
          ]
        },
        {
          id: 14,
          question: '¿El agente que origina la tuberculosis es llamada?',
          alternatives: [
            {
              text: 'Salmonella.',
              value: 0
            },
            {
              text: 'Mycobacterium.',
              value: 0
            },
            {
              text: 'Bacilo de koch.',
              value: 1
            },
            {
              text: 'Klebsiellapneumoniae.',
              value: 0
            }
          ]
        },
        {
          id: 15,
          question: '¿El agente que origina la tuberculosis es llamada?',
          alternatives: [
            {
              text: 'Salmonella.',
              value: 0
            },
            {
              text: 'Mycobacterium.',
              value: 0
            },
            {
              text: 'Bacilo de koch.',
              value: 1
            },
            {
              text: 'Klebsiellapneumoniae.',
              value: 0
            }
          ]
        },
        {
          id: 16,
          question: '¿El agente que origina la tuberculosis es llamada?',
          alternatives: [
            {
              text: 'Salmonella.',
              value: 0
            },
            {
              text: 'Mycobacterium.',
              value: 0
            },
            {
              text: 'Bacilo de koch.',
              value: 1
            },
            {
              text: 'Klebsiellapneumoniae.',
              value: 0
            }
          ]
        },
        {
          id: 17,
          question: '¿El agente que origina la tuberculosis es llamada?',
          alternatives: [
            {
              text: 'Salmonella.',
              value: 0
            },
            {
              text: 'Mycobacterium.',
              value: 0
            },
            {
              text: 'Bacilo de koch.',
              value: 1
            },
            {
              text: 'Klebsiellapneumoniae.',
              value: 0
            }
          ]
        },
        {
          id: 18,
          question: '¿El agente que origina la tuberculosis es llamada?',
          alternatives: [
            {
              text: 'Salmonella.',
              value: 0
            },
            {
              text: 'Mycobacterium.',
              value: 0
            },
            {
              text: 'Bacilo de koch.',
              value: 1
            },
            {
              text: 'Klebsiellapneumoniae.',
              value: 0
            }
          ]
        },
        {
          id: 19,
          question: '¿El agente que origina la tuberculosis es llamada?',
          alternatives: [
            {
              text: 'Salmonella.',
              value: 0
            },
            {
              text: 'Mycobacterium.',
              value: 0
            },
            {
              text: 'Bacilo de koch.',
              value: 1
            },
            {
              text: 'Klebsiellapneumoniae.',
              value: 0
            }
          ]
        },
        {
          id: 20,
          question: '¿El agente que origina la tuberculosis es llamada?',
          alternatives: [
            {
              text: 'Salmonella.',
              value: 0
            },
            {
              text: 'Mycobacterium.',
              value: 0
            },
            {
              text: 'Bacilo de koch.',
              value: 1
            },
            {
              text: 'Klebsiellapneumoniae.',
              value: 0
            }
          ]
        }
      ],
      questionsB: [
        {
          id: 1,
          question: '¿Qué es la tuberculosis?',
          alternatives: [
            {
              text: 'Enfermedad alérgica que se produce por el cambio de clima.',
              value: 0
            },
            {
              text: 'Es un resfrió no contagioso.',
              value: 0
            },
            {
              text: 'Enfermedad contagiosa que ataca especialmente al hígado.',
              value: 0
            },
            {
              text: 'Enfermedad contagiosa que ataca especialmente a los pulmones.',
              value: 1
            }
          ]
        },
        {
          id: 2,
          question: '¿La tuberculosis es causado por un ... ?',
          alternatives: [
            {
              text: 'Virus.',
              value: 0
            },
            {
              text: 'Bacteria.',
              value: 1
            },
            {
              text: 'Hongo.',
              value: 0
            },
            {
              text: 'Fungí.',
              value: 0
            }
          ]
        },
        {
          id: 3,
          question: '¿El agente que origina la tuberculosis es llamada?',
          alternatives: [
            {
              text: 'Salmonella.',
              value: 0
            },
            {
              text: 'Mycobacterium.',
              value: 0
            },
            {
              text: 'Bacilo de koch.',
              value: 1
            },
            {
              text: 'Klebsiellapneumoniae.',
              value: 0
            }
          ]
        },
        {
          id: 4,
          question: '¿El agente que origina la tuberculosis es llamada?',
          alternatives: [
            {
              text: 'Salmonella.',
              value: 0
            },
            {
              text: 'Mycobacterium.',
              value: 0
            },
            {
              text: 'Bacilo de koch.',
              value: 1
            },
            {
              text: 'Klebsiellapneumoniae.',
              value: 0
            }
          ]
        },
        {
          id: 5,
          question: '¿El agente que origina la tuberculosis es llamada?',
          alternatives: [
            {
              text: 'Salmonella.',
              value: 0
            },
            {
              text: 'Mycobacterium.',
              value: 0
            },
            {
              text: 'Bacilo de koch.',
              value: 1
            },
            {
              text: 'Klebsiellapneumoniae.',
              value: 0
            }
          ]
        },
        {
          id: 6,
          question: '¿El agente que origina la tuberculosis es llamada?',
          alternatives: [
            {
              text: 'Salmonella.',
              value: 0
            },
            {
              text: 'Mycobacterium.',
              value: 0
            },
            {
              text: 'Bacilo de koch.',
              value: 1
            },
            {
              text: 'Klebsiellapneumoniae.',
              value: 0
            }
          ]
        },
        {
          id: 7,
          question: '¿El agente que origina la tuberculosis es llamada?',
          alternatives: [
            {
              text: 'Salmonella.',
              value: 0
            },
            {
              text: 'Mycobacterium.',
              value: 0
            },
            {
              text: 'Bacilo de koch.',
              value: 1
            },
            {
              text: 'Klebsiellapneumoniae.',
              value: 0
            }
          ]
        },
        {
          id: 8,
          question: '¿El agente que origina la tuberculosis es llamada?',
          alternatives: [
            {
              text: 'Salmonella.',
              value: 0
            },
            {
              text: 'Mycobacterium.',
              value: 0
            },
            {
              text: 'Bacilo de koch.',
              value: 1
            },
            {
              text: 'Klebsiellapneumoniae.',
              value: 0
            }
          ]
        },
        {
          id: 9,
          question: '¿El agente que origina la tuberculosis es llamada?',
          alternatives: [
            {
              text: 'Salmonella.',
              value: 0
            },
            {
              text: 'Mycobacterium.',
              value: 0
            },
            {
              text: 'Bacilo de koch.',
              value: 1
            },
            {
              text: 'Klebsiellapneumoniae.',
              value: 0
            }
          ]
        },
        {
          id: 10,
          question: '¿El agente que origina la tuberculosis es llamada?',
          alternatives: [
            {
              text: 'Salmonella.',
              value: 0
            },
            {
              text: 'Mycobacterium.',
              value: 0
            },
            {
              text: 'Bacilo de koch.',
              value: 1
            },
            {
              text: 'Klebsiellapneumoniae.',
              value: 0
            }
          ]
        },
        {
          id: 11,
          question: '¿El agente que origina la tuberculosis es llamada?',
          alternatives: [
            {
              text: 'Salmonella.',
              value: 0
            },
            {
              text: 'Mycobacterium.',
              value: 0
            },
            {
              text: 'Bacilo de koch.',
              value: 1
            },
            {
              text: 'Klebsiellapneumoniae.',
              value: 0
            }
          ]
        },
        {
          id: 12,
          question: '¿El agente que origina la tuberculosis es llamada?',
          alternatives: [
            {
              text: 'Salmonella.',
              value: 0
            },
            {
              text: 'Mycobacterium.',
              value: 0
            },
            {
              text: 'Bacilo de koch.',
              value: 1
            },
            {
              text: 'Klebsiellapneumoniae.',
              value: 0
            }
          ]
        },
        {
          id: 13,
          question: '¿El agente que origina la tuberculosis es llamada?',
          alternatives: [
            {
              text: 'Salmonella.',
              value: 0
            },
            {
              text: 'Mycobacterium.',
              value: 0
            },
            {
              text: 'Bacilo de koch.',
              value: 1
            },
            {
              text: 'Klebsiellapneumoniae.',
              value: 0
            }
          ]
        },
        {
          id: 14,
          question: '¿El agente que origina la tuberculosis es llamada?',
          alternatives: [
            {
              text: 'Salmonella.',
              value: 0
            },
            {
              text: 'Mycobacterium.',
              value: 0
            },
            {
              text: 'Bacilo de koch.',
              value: 1
            },
            {
              text: 'Klebsiellapneumoniae.',
              value: 0
            }
          ]
        },
        {
          id: 15,
          question: '¿El agente que origina la tuberculosis es llamada?',
          alternatives: [
            {
              text: 'Salmonella.',
              value: 0
            },
            {
              text: 'Mycobacterium.',
              value: 0
            },
            {
              text: 'Bacilo de koch.',
              value: 1
            },
            {
              text: 'Klebsiellapneumoniae.',
              value: 0
            }
          ]
        },
        {
          id: 16,
          question: '¿El agente que origina la tuberculosis es llamada?',
          alternatives: [
            {
              text: 'Salmonella.',
              value: 0
            },
            {
              text: 'Mycobacterium.',
              value: 0
            },
            {
              text: 'Bacilo de koch.',
              value: 1
            },
            {
              text: 'Klebsiellapneumoniae.',
              value: 0
            }
          ]
        },
        {
          id: 17,
          question: '¿El agente que origina la tuberculosis es llamada?',
          alternatives: [
            {
              text: 'Salmonella.',
              value: 0
            },
            {
              text: 'Mycobacterium.',
              value: 0
            },
            {
              text: 'Bacilo de koch.',
              value: 1
            },
            {
              text: 'Klebsiellapneumoniae.',
              value: 0
            }
          ]
        },
        {
          id: 18,
          question: '¿El agente que origina la tuberculosis es llamada?',
          alternatives: [
            {
              text: 'Salmonella.',
              value: 0
            },
            {
              text: 'Mycobacterium.',
              value: 0
            },
            {
              text: 'Bacilo de koch.',
              value: 1
            },
            {
              text: 'Klebsiellapneumoniae.',
              value: 0
            }
          ]
        },
        {
          id: 19,
          question: '¿El agente que origina la tuberculosis es llamada?',
          alternatives: [
            {
              text: 'Salmonella.',
              value: 0
            },
            {
              text: 'Mycobacterium.',
              value: 0
            },
            {
              text: 'Bacilo de koch.',
              value: 1
            },
            {
              text: 'Klebsiellapneumoniae.',
              value: 0
            }
          ]
        },
        {
          id: 20,
          question: '¿El agente que origina la tuberculosis es llamada?',
          alternatives: [
            {
              text: 'Salmonella.',
              value: 0
            },
            {
              text: 'Mycobacterium.',
              value: 0
            },
            {
              text: 'Bacilo de koch.',
              value: 1
            },
            {
              text: 'Klebsiellapneumoniae.',
              value: 0
            }
          ]
        }
      ]
    }
  },
  methods: {
    calculateA (id, value) {
      this.user.notasA[id] = value
    },
    calculateB (id, value) {
      this.user.notasB[id] = value
    },
    result () {
      let successA = 0
      this.user.notasA.forEach(element => {
        successA = successA + element
      })

      let finalA
      switch (true) {
        case (successA < 7):
          finalA = `Conocimiento bajo, nota: ${successA}`
          alert(finalA)
          break
        case (successA < 15):
          finalA = `Conocimiento medio, nota: ${successA}`
          alert(finalA)
          break
        case (successA < 20):
          finalA = `Conocimiento alto, nota: ${successA}`
          alert(finalA)
          break
      }

      this.user.finalA = finalA

      let successB = 0
      this.user.notasB.forEach(element => {
        successB = successB + element
      })

      let finalB
      switch (true) {
        case (successB < 11):
          finalB = `Practica incorrecta, nota: ${successB}`
          alert(finalB)
          break
        case (successB < 20):
          finalB = `Practica correcta, nota: ${successB}`
          alert(finalB)
          break
      }

      this.user.finalB = finalB

      console.log(this.user)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
