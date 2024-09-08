<script setup lang="ts"></script>

<template>
  <main class="default-scheme">
    <h1>Home</h1>
    <div class="board">
      <span v-for="row in ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']" :key="row" class="row">
        <span v-for="cell in 8" :key="cell" class="cell"
          ><span class="cell-coordinate">{{ cell }}</span></span
        >
      </span>
    </div>
  </main>
</template>

<style scoped>
.board {
  max-width: 600px;
  margin: 0 auto;
  display: grid;
  grid-template-rows: repeat(8, 1fr);
  aspect-ratio: 1;
  place-items: center;
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

.cell-coordinate {
  display: none;
}

.row:last-child .cell-coordinate {
  display: block;
}

.cell:last-child .cell-coordinate {
  display: block;
}
</style>
