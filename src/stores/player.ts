import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePlayerStore = defineStore('player', () => {
  const role = ref('light')
  const baseColumns = [1, 2, 3, 4, 5, 6, 7, 8]
  const formattedColumns = computed(() =>
    role.value === 'light' ? baseColumns : baseColumns.reverse()
  )
  const baseRows = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
  const formattedRows = computed(() => (role.value === 'light' ? baseRows.reverse() : baseRows))
  return { role, formattedColumns, formattedRows }
})
