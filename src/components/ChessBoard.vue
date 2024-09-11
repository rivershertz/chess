<template>
  <div class="board">
    <span v-for="row in playerStore.formattedRows" :key="row" class="row">
      <span v-for="cell in 8" :key="cell" class="cell" />
    </span>
    <ul class="notation notation-left">
      <li v-for="row in playerStore.formattedRows" :key="row">{{ row }}</li>
    </ul>
    <ul class="notation notation-bottom">
      <li v-for="column in playerStore.formattedColumns" :key="column">{{ column }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { usePlayerStore } from '@/stores/player'
const playerStore = usePlayerStore()
</script>

<style scoped>
.board {
  max-width: 600px;
  margin: 15vh auto 0 auto;
  display: grid;
  grid-template-rows: repeat(8, 1fr);
  aspect-ratio: 1;
  place-items: center;
  position: relative;
}

.row {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
}

.cell {
  width: 100%;
  height: 100%;
}

.row:nth-child(odd) .cell:nth-child(even),
.row:nth-child(even) .cell:nth-child(odd) {
  background-color: var(--dark-cell);
  color: var(--light-cell);
}

.row:nth-child(even) .cell:nth-child(even),
.row:nth-child(odd) .cell:nth-child(odd) {
  background-color: var(--light-cell);
  color: var(--dark-cell);
}

.notation {
  position: absolute;
  list-style: none;
  padding: 0;
}

.notation-left {
  height: 100%;
  right: 100%;
  display: grid;
  place-items: center;
  text-transform: capitalize;
  padding-right: var(--notation-padding);
}

.notation-bottom {
  width: 100%;
  top: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  place-items: center;
  text-transform: capitalize;
  padding-top: var(--notation-padding);
}
</style>
