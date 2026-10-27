import { useSyncExternalStore } from 'react'

// Shared state for the start screen, so the hero can wait until it closes.
type Listener = () => void

let done = false
const listeners = new Set<Listener>()

function emit() {
  listeners.forEach((listener) => listener())
}

export const boot = {
  isDone: () => done,
  subscribe(listener: Listener) {
    listeners.add(listener)
    return () => {
      listeners.delete(listener)
    }
  },
  finish() {
    done = true
    emit()
  },
  restart() {
    done = false
    emit()
  },
}

export const BOOT_SEEN_KEY = 'boot-seen'

export function useBootDone() {
  return useSyncExternalStore(boot.subscribe, boot.isDone, () => false)
}
