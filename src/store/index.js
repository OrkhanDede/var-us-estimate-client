import Vue from "vue";
import Vuex from "vuex";

// import app from "../main";
// import getters from "./getters";
// import menu from "./modules/menu";
// import user from "./modules/user";
// import chat from "./modules/chat";
// import todo from "./modules/todo";
// import survey from "./modules/survey";
// import permission from "./modules/permission";

Vue.use(Vuex);

// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context("./modules", true, /\.js$/);

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    // set './app.js' => 'app'

    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");
    const value = modulesFiles(modulePath);
    modules[moduleName] = value.default;

    return modules;
}, {});

export default new Vuex.Store({
    state: {},
    modules,
});