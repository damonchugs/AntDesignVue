<template>
  <a-tabs
    v-model="activeKey"
    type="editable-card"
    :hideAdd="hideAdd"
    @edit="onEdit"
    @tabClick="ton"
    itemRender="page"
  >
    <a-tab-pane v-for="pane in panes" :tab="pane.title" :key="pane.key" :closable="pane.closable">
      <component v-bind:is="pane.content"></component>
    </a-tab-pane>
  </a-tabs>
</template>

<script>
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Forms from "../components/form.vue";
import Tables from "../components/tables.vue";
import Drawer from "../components/drawer.vue";
import Flex from "../components/flex.vue";


let arrChange = (a, r, n) => {
  let arr = (a, n) => {
    a.map((item, i) => {
      if(!item.children){
        if (item.key == n) {
          r.push(item);
        }
      } else {
        arr(item.children, n);
      }
    });
  }
  arr(a, n);
  return r;
}

export default {
  name: "RightTables",
  components: {
    Home,
    About,
    Forms,
    Tables,
    Drawer,
    Flex
  },
  data() {
    let panes = [
      { title: "首页", key: "n0", content: "Home", closable: false }
    ];
    return {
      activeKey: panes[0].key,
      panes,
      newTabIndex: 0,
      hideAdd: true,
      removeFlag: false
    };
  },
  computed: {
    count() {
      return this.$store.state.leftMenu.showMenu;
    },
    menusArr () {
      return this.$store.state.leftMenu.menusArr;
    }
  },
  watch: {
    count(n, o) {
      if(!this.removeFlag){
        if (!this.isHave(this.panes, n)) {
          this.add(n);
        } else {
          this.activeKey = n;
        }
      } else {
        this.removeFlag = false;
      }
    }
  },
  methods: {
    isHave(a, n) {
      let t = false;
      a.map(item => {
        if (item.key == n) {
          t = true;
        }
      });
      return t;
    },
    getPanes (n) {
      let panes = this.panes;
      if (this.isChoose(panes, n)) {
        panes = arrChange(this.menusArr, panes, n);
      }
      return panes;
    },
    isChoose(a, n) {
      var l = true;
      a.map(t => {
        if (t.key == n) {
          l = false;
        }
      });
      return l;
    },
    callback(key) {
      // console.log(key);
    },
    onEdit(targetKey, action) {
      if(action == 'remove'){
        let k = '';
        this.panes.map((item, index) => {
          if(item.key == targetKey){
            k = item.key
          }
        })
        this.$store.commit("changeShowMenu", k);
        this[action](targetKey);
      }
    },
    ton(n) {
      this.$store.commit("changeShowMenu", n);
    },
    add(n) {
      this.panes = this.getPanes(n);
      this.activeKey = n;
    },
    remove(targetKey) {
      this.removeFlag = true;
      let activeKey = this.activeKey;
      let lastIndex;
      this.panes.forEach((pane, i) => {
        if (pane.key === targetKey) {
          lastIndex = i - 1;
        }
      });
      const panes = this.panes.filter( pane => pane.key !== targetKey)
      if (lastIndex >= 0 && activeKey === targetKey) {
        activeKey = panes[lastIndex].key;
      }
      this.panes = panes;
      this.activeKey = activeKey;
    }
  }
};
</script>

<style scoped>
</style>