import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    leftMenu: {
      showMenu: 0,
      menuArr: [
        { title: '首页', isSelect: true, key: 'n0', closable: false, content: 'Home'},
        { title: 'option1', isSelect: true, key: 'n1', content: 'About'},
        { title: 'option2', isSelect: true, key: 'n2', content: 'About'},
        { title: 'option3', isSelect: false, key: 'n3', content: 'About'},
        { title: 'option4', isSelect: false, key: 'n4', content: 'About'},
        { title: 'option5', isSelect: false, key: 'n5', content: 'About'},
        { title: 'option6', isSelect: false, key: 'n6', content: 'About'},
        { title: 'option7', isSelect: false, key: 'n7', content: 'About'},
        { title: 'option8', isSelect: false, key: 'n8', content: 'About'},
        { title: 'option9', isSelect: false, key: 'n9', content: 'About'},
        { title: 'option10', isSelect: false, key: 'n10', content: 'About'},
        { title: 'option11', isSelect: false, key: 'n11', content: 'About'},
      ]
    },
  },
  mutations: {
    changeMenu (n, r) {
      var len = Number(r.k);
      if(r.t){
        this.state.leftMenu.showMenu = len;
      }
      this.state.leftMenu.menuArr[len].isSelect = r.t ? true : false;
    },
    changeShowMenu (o, n) {
      this.state.leftMenu.showMenu = Number(n);
    }
  },
  actions: {

  }
})
