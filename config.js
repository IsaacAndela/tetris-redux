System.config({
  "baseURL": "/",
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "babel": "npm:babel-core@5.8.22",
    "babel-runtime": "npm:babel-runtime@5.8.20",
    "core-js": "npm:core-js@0.9.18",
    "curry-on-top": "npm:curry-on-top@0.1.3",
    "flux": "npm:flux@2.0.3",
    "immutable": "npm:immutable@3.7.4",
    "redux": "npm:redux@1.0.1",
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:babel-runtime@5.8.20": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:curry-on-top@0.1.3": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:redux@1.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

