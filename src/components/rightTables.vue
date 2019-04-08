<template>
  <a-tabs v-model="activeKey" type="editable-card" :hideAdd="hideAdd" @edit="onEdit" @tabClick="ton" itemRender="page">
    <a-tab-pane v-for="pane in panes" :tab="pane.title" :key="pane.key" :closable="pane.closable">
      <component v-bind:is="pane.content"></component>
    </a-tab-pane>
  </a-tabs>
</template>

<script>
import Home from "../views/Home.vue";
import About from "../views/About.vue";

export default {
  name: 'RightTables',
  components: {
    Home,
    About
  },
  data () {
    let panes = [{ title: '首页', key: 'n0', content: 'Home', closable: false}];
    return {
      activeKey: panes[0].key,
      panes,
      newTabIndex: 0,
      hideAdd: true
    };
  },
  computed: {
    count () {
      return this.$store.state.leftMenu.showMenu
    }
  },
  watch: {
    count (n, o) {
      if(!this.isHave(this.panes, n)){
        this.add('n'+n);
      }
    }
  },
  methods: {
    isHave (a, n) {
      let t = false;
      a.map(item => {
        if(item.key == n){
          t = true
        }
      })
      return t
    },
    getPanes (n) {
      let panes = this.panes;
      if(this.isChoose(panes, n)){
        this.$store.state.leftMenu.menuArr.map( (item, i) =>{
          if(item.key == n){
            panes.push(item)
          }
        })
      }
      return panes
    },
    isChoose (a, n) {
      var l = true;
      a.map(t => {
        if(t.key == n){
          l = false;
        }
      })
      return l;
    },
    callback (key) {
      console.log(key)
    },
    onEdit (targetKey, action) {
      console.log(action);
    },
    ton () {
      var n = this.activeKey[1];
      this.$store.commit('changeShowMenu', n);
    },
    add (n) {
      this.panes = this.getPanes(n);
      this.activeKey = n;
    },
    remove (targetKey) {
      let activeKey = this.activeKey
      let lastIndex
      this.panes.forEach((pane, i) => {
        if (pane.key === targetKey) {
          lastIndex = i - 1
        }
      })
      const panes = this.panes.filter(pane => pane.key !== targetKey)
      if (lastIndex >= 0 && activeKey === targetKey) {
        activeKey = panes[lastIndex].key
      }
      this.panes = panes
      this.activeKey = activeKey
    },
  }
};
</script>

<style scoped>
</style>