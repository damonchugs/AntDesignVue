import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    leftMenu: {
      showMenu: 0,
      menuArr: [
        { title: '首页', isSelect: true, key: 'n0', content: 'Home', closable: false, parent: '0'},
        { title: '表单', isSelect: false, key: 'n1', content: 'Forms', parent: '0'},
        { title: '表格', isSelect: false, key: 'n2', content: 'Tables', parent: '0'},
        { title: '抽屉', isSelect: false, key: 'n3', content: 'Drawer', parent: '0'},
        { title: 'flex', isSelect: false, key: 'n4', content: 'Flex', parent: '0'},
        { title: 'option5', isSelect: false, key: 'n5', content: 'About', parent: '1'},
        { title: 'option6', isSelect: false, key: 'n6', content: 'About', parent: '1'},
        { title: 'option7', isSelect: false, key: 'n7', content: 'About', parent: '1'},
        { title: 'option8', isSelect: false, key: 'n8', content: 'About', parent: '2'},
        { title: 'option9', isSelect: false, key: 'n9', content: 'About', parent: '2'},
        { title: 'option10', isSelect: false, key: 'n10', content: 'About', parent: 's', parents: '2,1'},
        { title: 'option11', isSelect: false, key: 'n11', content: 'About', parent: 's', parents: '2,1'},
      ],
      menusArr: [
        { type: 'index', icon: 'index', title: '首页', isSelect: true, key: 'n0', content: 'Home', closable: false },
        { type: 'form', icon: 'form', title: '表单', isSelect: false, key: 'n1', content: 'Forms' },
        { type: 'table', icon: 'table', title: '表格', isSelect: false, key: 'n2', content: 'Tables' },
        { type: 'demo1', icon: 'database', title: '抽屉', isSelect: false, key: 'n3', content: 'Drawer' },
        { type: 'submenu', key:"s1", icon: 'bell', children: [
          { type: 'op5', title: 'option5', icon: 'like', isSelect: false, key: 'n5', content: 'About' },
          { type: 'op6', title: 'option6', icon: 'like', isSelect: false, key: 'n6', content: 'About' },
          { type: 'op7', title: 'option7', icon: 'like', isSelect: false, key: 'n7', content: 'About' },
        ]},
        { type: 'submenu', key: "s2", icon: 'like', children:[
          { type: 'op8', title: 'option8', icon: 'like', isSelect: false, key: 'n8', content: 'About' },
          { type: 'op9', title: 'option9', icon: 'like', isSelect: false, key: 'n9', content: 'About' },
          { type: 'submenu', key: "s3", icon: 'like', children: [
            { type: 'op10', title: 'option10', icon: 'like', isSelect: false, key: 'n10', content: 'About' },
            { type: 'op11', title: 'option11', icon: 'like', isSelect: false, key: 'n11', content: 'About' },
          ]}
        ]}
      ]
    },
  },
  mutations: {
    changeMenu (n, r) {
      var len = Number(r.k);
      if(r.t){
        this.state.leftMenu.menuArr[len].isSelect = true;
      }
      this.state.leftMenu.showMenu = len;
    },
    changeShowMenu (o, n) {
      this.state.leftMenu.showMenu = Number(n);
    }
  },
  actions: {

  }
})
