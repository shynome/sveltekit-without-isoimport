import { browser } from "$app/environment";
import { Tooltip } from "bootstrap";
import type { Action } from "svelte/action";

export const tooltip: Action = (node) => {
  if (!browser) {
    return {} as never;
  }
  const inst = new Tooltip(node);
  return {
    destroy() {
      inst.dispose();
    },
  };
};

// place files you want to import through the `$lib` alias in this folder.
