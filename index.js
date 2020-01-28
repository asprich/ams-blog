import Vue from "vue";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import colors from "vuetify/lib/util/colors";

import AdamsBlogApp from "./app/AdamsBlogApp";

//Add Vue Plug-ins
Vue.use(VueRouter);
Vue.use(Vuetify);

//Starting Vue
global.AmsBlogApp = new Vue({ 
    render: createElement => createElement(AdamsBlogApp),
    //router,
    //store,
    vuetify: new Vuetify()
}).$mount("#app");