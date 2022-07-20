<template>
  <div> 
    <v-col
      cols="12"
    >
      <v-text-field
        @keyup.enter="newWork"
        v-model="work"
        label="Qual sua tarefa ?"
        outlined
        clearable
      ></v-text-field>
    </v-col>
    <v-list
        subheader
        flat>
        <v-list-item-group
          multiple
        >
        <div v-for="work in $store.state.works" :key="work.id" >
          <minha-tarefa :work="work" @filhoAlterouPai="work = $event"></minha-tarefa>
        </div>       
      </v-list-item-group>
    </v-list>
  </div>   
</template>

<script>
  import MinhaTarefa from '../components/MinhaTarefa.vue'

  export default {
    data: () => ({
      work: null
    }),
    methods: {
      newWork() {
        this.$store.commit('newWork', this.work)
        this.work = null
      },
    },
    components: {
      MinhaTarefa
    }
  }
</script>