import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let setSelect = (a, k) =>{
  let arrs = (a, k) => {
    a.map((t, n) => {
      if (!t.children) {
        if (t.key == k) {
          t.isSelect = !t.isSelect;
        }
      } else {
        arrs(t.children, k)
      }
    })
  }
  return a;
}

export default new Vuex.Store({
  state: {
    leftMenu: {
      showMenu: 0,
      menusArr: [
        { type: 'index', icon: 'index', title: '首页', isSelect: true, key: 'n0', content: 'Home', closable: false },
        { type: 'form', icon: 'form', title: '表单', isSelect: false, key: 'n1', content: 'Forms' },
        { type: 'table', icon: 'table', title: '表格', isSelect: false, key: 'n2', content: 'Tables' },
        { type: 'demo1', icon: 'database', title: '抽屉', isSelect: false, key: 'n3', content: 'Drawer' },
        { type: 'submenu', key:"sub1", icon: 'bell', title: '组1', children: [
          { type: 'op5', title: 'option5', icon: 'like', isSelect: false, key: 'n5', content: 'About' },
          { type: 'op6', title: 'option6', icon: 'like', isSelect: false, key: 'n6', content: 'About' },
          { type: 'op7', title: 'option7', icon: 'like', isSelect: false, key: 'n7', content: 'About' },
        ]},
        { type: 'submenu', key: "sub2", icon: 'like', title: '组2', children:[
          { type: 'op8', title: 'option8', icon: 'like', isSelect: false, key: 'n8', content: 'About' },
          { type: 'op9', title: 'option9', icon: 'like', isSelect: false, key: 'n9', content: 'About' },
          { type: 'submenu', key: "sub3", icon: 'like', title: '组3', children: [
            { type: 'op10', title: 'option10', icon: 'like', isSelect: false, key: 'n10', content: 'About' },
            { type: 'op11', title: 'option11', icon: 'like', isSelect: false, key: 'n11', content: 'About' },
          ]}
        ]}
      ]
    },
  },
  mutations: {
    changeMenu (n, r) {
      if(r.t){
        this.state.leftMenu.menusArr = setSelect(this.state.leftMenu.menusArr, r.k);
      }
      this.state.leftMenu.showMenu = r.k;
    },
    changeShowMenu (o, n) {
      this.state.leftMenu.showMenu = n;
    },
  },
  actions: {

  }
})
