import create from 'zustand'

interface State {
  bears: number
  increment: () => void
  removeAllBears: () => void
  delayAdd: () => void

}

export const useBearStore = create<State>(
  (set, get) => ({
    bears: 0,
    increment: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
    delayAdd: async () => {
      const response: any = await promise()
      console.log(get().bears)
      set({ bears: get().bears + response })
    },
  }),
)


const promise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(666), 1000)
  })
}



