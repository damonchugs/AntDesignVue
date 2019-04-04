import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    leftMenu: {
      selectMenu: '0',
      menuArr: [
        { name: 'option1', isSelect: false },
        { name: 'option2', isSelect: false },
        { name: 'option3', isSelect: false },
        { name: 'option4', isSelect: false },
        { name: 'option5', isSelect: false },
        { name: 'option6', isSelect: false },
        { name: 'option7', isSelect: false },
        { name: 'option8', isSelect: false },
        { name: 'option9', isSelect: false },
        { name: 'option10', isSelect: false },
        { name: 'option11', isSelect: false },
        { name: 'option12', isSelect: false},
      ]
    },
  },
  mutations: {
    changeMenu (n, i, t) {
      var len = Number(i - 1);
      if(t){
        this.state.leftMenu.selectMenu = len;
      }
      this.state.leftMenu.menuArr[len].isSelect = t?true:false;
    },
  },
  actions: {

  }
})
