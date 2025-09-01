import { create } from "zustand";

export const useApontamentoStore = create((set) => ({
  liderApontamentos: [],
  apontamentos: [],
  apontamentoAtual: {},
  adicionarCampo: (campo) =>
    set((state) => {
      console.log("state:", state.apontamentoAtual);
      return {
        apontamentoAtual: { ...state.apontamentoAtual, ...campo },
      };
    }),
  concluirApontamento: () =>
    set((state) => {
      const apontamentoValidado = {
        colaborador: state.apontamentoAtual.colaborador,
        lider: state.apontamentoAtual.lider,
        atividade: state.apontamentoAtual.atividade,
        time: state.apontamentoAtual.time,
        equipamento: "",
        operacao: "",
      };
      if (
        state.apontamentoAtual.atividade == "180" ||
        state.apontamentoAtual.atividade == "360"
      ) {
        apontamentoValidado.equipamento = state.apontamentoAtual.equipamento;
        apontamentoValidado.operacao = state.apontamentoAtual.operacao;
      }

      return {
        apontamentos: [...state.apontamentos, apontamentoValidado],
        apontamentoAtual: {},
      };
    }),
}));
