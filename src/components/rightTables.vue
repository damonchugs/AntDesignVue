<template>
  <a-tabs v-model="activeKey" type="editable-card" @edit="onEdit" itemRender="page">
    <a-tab-pane v-for="pane in panes" :tab="pane.title" :key="pane.key" :closable="pane.closable">
      <component v-bind:is="pane.content"></component>
    </a-tab-pane>
  </a-tabs>
</template>

<script>
import Home from "../views/Home.vue";
import About from "../views/About.vue";
export default {
  components: {
    Home,
    About
  },
  data() {
    const panes = [
      { title: "首页", content: 'Home', key: "1", closable: false },
      { title: "option2", content: "About", key: "2" },
      { title: "option3", content: "Home", key: "3" }
    ];
    return {
      activeKey: panes[0].key,
      panes,
      newTabIndex: 0
    };
  },
  methods: {
    toRender () {

    },
    callback(key) {
      console.log(key);
    },
    onEdit(targetKey, action) {
      this[action](targetKey);
    },
    add() {
      const panes = this.panes;
      const activeKey = `newTab${this.newTabIndex++}`;
      panes.push({
        title: "New Tab",
        content: "About",
        key: activeKey
      });
      this.panes = panes;
      this.activeKey = activeKey;
    },
    remove(targetKey) {
      let activeKey = this.activeKey;
      let lastIndex;
      this.panes.forEach((pane, i) => {
        if (pane.key === targetKey) {
          lastIndex = i - 1;
        }
      });
      const panes = this.panes.filter(pane => pane.key !== targetKey);
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