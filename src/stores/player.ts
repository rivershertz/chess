import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { Role, baseColumns, baseRows } from '@/constants'
import { reverse } from '@/utils'

export const usePlayerStore = defineStore('player', () => {
  const role = ref(Role.Light)

  const formattedColumns = computed(() => (role.value === Role.Light ? baseColumns : reverse(baseColumns)))

  const formattedRows = computed(() => (role.value === Role.Light ? reverse(baseRows) : baseRows))

  return { role, formattedColumns, formattedRows }
})
