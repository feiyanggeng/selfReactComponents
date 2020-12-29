module.exports = {
  "**/*.ts?(x)": () => { 
    console.log("zhe shi yige ");
    return "tsc -p tsconfig.json --noEmit";
  },
};