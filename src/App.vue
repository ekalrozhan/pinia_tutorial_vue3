<template>
  <main>
    <!-- heading -->
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo">
      <!-- <h1>{{ taskStore.name }}</h1> -->
      <h1>Pinia Tasks</h1>
    </header>

    <!-- filter -->
    <nav class="filter">
      <button @click="filter = 'all' ">All tasks</button>
      <button @click="filter = 'favs' ">Fav tasks</button>
    </nav>

    <!-- task list -->
    <div class="task-list" v-if="filter === 'all' ">
      <p>You have {{ taskStore.totalCount }} tasks left todo</p>
      <div v-for="task in taskStore.tasks">
        <!-- <p>{{ task.title }}</p> -->
        <TaskDetails :task="task"/>
      </div>
    </div>
    <div class="task-list" v-if="filter === 'favs' ">
      <p>You have {{ taskStore.favCount }} favs left todo</p>
      <div v-for="task in taskStore.favs">
        <!-- <p>{{ task.title }}</p> -->
        <TaskDetails :task="task"/>
      </div>
    </div>
  </main>
</template>

<script>
  import { ref } from 'vue';
import TaskDetails from './components/TaskDetails.vue';
  import { useTaskStore } from './stores/TaskStore';

  export default {
    components: {TaskDetails},
    setup(){
      const taskStore = useTaskStore()

      const filter = ref('all')

      return {taskStore, filter}
    }
  }
</script>


