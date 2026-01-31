import { type MinifyOptions, minify } from "terser";
import type SuSee from "@suseejs/types";
import utils from "@suseejs/utils";

/**
 * Minifies given code using Terser.
 * @param {MinifyOptions} options Optional options for Terser.
 * @returns {SuSee.PostProcessHook} Hook for minifying.
 */
const terserHook = (options?: MinifyOptions): SuSee.PostProcessHook => {
  return {
    async: true,
    func: async (code, file) => {
      if (utils.extname(file as string) === ".js") {
        code = (await minify(code, options)).code as string;
      }
      return code;
    },
  };
};

export default terserHook;
