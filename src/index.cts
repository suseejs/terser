import utils = require("@suseejs/utils");
import type SuSee = require("@suseejs/types");
import terser = require("terser");

const terserHook = (options?: terser.MinifyOptions): SuSee.PostProcessHook => {
  return {
    async: true,
    func: async (code, file) => {
      if (utils.extname(file as string) === ".js") {
        code = (await terser.minify(code, options)).code as string;
      }
      return code;
    },
  };
};

export = terserHook;
