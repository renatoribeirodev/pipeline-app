// eslint.config.mjs

import globals from "globals";
import js from "@eslint/js";

export default [
  // Puxa as regras recomendadas pelo ESLint
  js.configs.recommended,

  // Objeto de configuração principal
  {
    languageOptions: {
      globals: {
        // A MÁGICA ACONTECE AQUI!
        // Dizemos ao ESLint para reconhecer todas as variáveis globais
        // que existem em um ambiente Node.js.
        ...globals.node
      }
    },
    rules: {
      // Aqui você pode adicionar regras customizadas no futuro se quiser
    }
  }
];