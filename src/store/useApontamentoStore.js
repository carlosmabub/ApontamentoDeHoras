import { create } from "zustand";

export const useApontamentoStore = create((set) => ({
  apontamentos: [],
  apontamentoAtual: {}, // <- rascunho em construção
  adicionarCampo: (campo) =>
    set((state) => {
      console.log("state:", state.apontamentoAtual);
      return {
        apontamentoAtual: { ...state.apontamentoAtual, ...campo },
      };
    }),
  concluirApontamento: () =>
    set((state) => ({
      apontamentos: [...state.apontamentos, state.apontamentoAtual],
      apontamentoAtual: {}, // limpa o rascunho
    })),
  limparApontamentos: () => set({ apontamentos: [], apontamentoAtual: {} }),
}));
