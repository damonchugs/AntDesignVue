<template>
    <div>
        <a-menu
      :defaultSelectedKeys="[]"
      :defaultOpenKeys="['sub1']"
      :openKeys='openKeys'
      @openChange="onOpenChange"
      @select='selects'
      @click="menusClick"
      mode="inline"
      theme="dark"
      :inlineCollapsed="collapsed"
    >
      <a-menu-item key="1">
        <a-icon type="pie-chart" />
        <span>表单</span>
      </a-menu-item>
      <a-menu-item key="2">
        <a-icon type="desktop" />
        <span>表格</span>
      </a-menu-item>
      <a-menu-item key="3">
        <a-icon type="inbox" />
        <span>抽屉</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <span slot="title"><a-icon type="mail" /><span>Navigation One</span></span>
        <a-menu-item key="4">Option 4</a-menu-item>
        <a-menu-item key="5">Option 5</a-menu-item>
        <a-menu-item key="6">Option 6</a-menu-item>
        <a-menu-item key="7">Option 7</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title"><a-icon type="appstore" /><span>Navigation Two</span></span>
        <a-menu-item key="8">Option 8</a-menu-item>
        <a-menu-item key="9">Option 9</a-menu-item>
        <a-sub-menu key="sub3" title="Submenu">
          <a-menu-item key="10">Option 10</a-menu-item>
          <a-menu-item key="11">Option 11</a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      collapsed: false,
      rootSubmenuKeys: [1, 2, 3, 'sub1', 'sub2', 'sub4'],
      openKeys: ['1'],
    }
  },
  props: ['coll'],
  computed: {
    keys () {
      return this.$store.state.leftMenu.showMenu
    }
  },
  watch: {
    keys (n, o) {
      this.selects2(n);
    }
  },
  methods: {
    selects (openKeys) {
      let keys = openKeys.key?openKeys.key:openKeys;
      this.$store.commit('changeMenu', { k: keys, t: this.isChoose(keys)});
    },
    selects2 (n) {
      this.$store.commit('changeMenu', { k: n, t: this.isChoose(n)});
      this.changeKeyAndOpens(n);
    },
    changeKeyAndOpens (n) { // open---未完成
      $('.ant-menu-item').removeClass('ant-menu-item-selected');
      if(n !== 0){$('.ant-menu-item').eq(Number(n-1)).addClass('ant-menu-item-selected')};
    },
    isChoose (k) {
      var t = this.$store.state.leftMenu.menuArr[Number(k)].isSelect?false:true;
      return t;
    },
    menusClick (item, key, keyPath) {
      // console.log(item, key, keyPath);
    },
    toggleCollapsed () {
      this.collapsed = !this.collapsed
    },
    onOpenChange (openKeys) {
      const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1)
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : []
      }
    },
  },
  created () {
      this.collapsed = !this.coll
  }
}
</script>

<style scoped>

</style>