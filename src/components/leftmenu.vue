<template>
    <div>
      <a-menu
        class="a-menus"
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
        <template v-for="item in menu">
          <a-menu-item v-if="item.type!=='submenu'" :key="item.key"><a-icon :type="item.icon" /><span>{{item.title}}</span></a-menu-item>
          <a-sub-menu v-else :key="item.key">
            <span slot="title"><a-icon :type="item.icon" /><span>{{item.title}}</span></span>
            <template v-for="it in item.children">
              <a-menu-item  v-if="it.type!=='submenu'" :key="it.key"><a-icon :type="it.icon" /><span>{{it.title}}</span></a-menu-item>
              <a-sub-menu v-else :key="it.key">
                <span slot="title"><a-icon :type="it.icon" /><span>{{it.title}}</span></span>
                <a-menu-item  v-for="t in it.children" :key="t.key"><a-icon :type="t.icon" /><span>{{t.title}}</span></a-menu-item>
              </a-sub-menu>
            </template> 
          </a-sub-menu>
        </template>
      </a-menu>
  </div>
</template>

<script>
// import MenuItem from "./a-menu-items.vue";
// import SubMenu from "./a-menu-submenu.vue";

export default {
  name: 'leftMenu',
  components: {
    
  },
  data () {
    return {
      menu: [],
      collapsed: false,
      rootSubmenuKeys: [1, 2, 3, 'sub1', 'sub2', 'sub4'],
      openKeys: ['1'],
      menuItem: 'MenuItem',
      forms: '表单',
      like: 'like'
    }
  },
  props: ['coll'],
  computed: {
    keys () {
      return this.$store.state.leftMenu.showMenu
    },
    menus () {
      let arr = this.$store.state.leftMenu.menusArr;
      let arrs = arr.filter( t => { return t.key !== 'n0' });
      return arrs;
    },
    rootKeys () {
      let k = [];
      this.menus.map( t => {
        k.push(t.key)
      })
      return k;
    }
  },
  watch: {
    keys (n) {
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
      return false;
      // 去除所有选中样式
      $('.ant-menu-item').removeClass('ant-menu-item-selected');
      $('.ant-menu-submenu').removeClass('ant-menu-submenu-selected').removeClass('ant-menu-submenu-open');
      $('.ant-menu-sub').hide();
      // 对选中标签添加样式
      if(n !== 0){
        $('.ant-menu-item').eq(Number(n)-1).addClass('ant-menu-item-selected').parents('.ant-menu-sub').show().parents('.ant-menu-submenu').addClass('ant-menu-submenu-open ant-menu-submenu-selected')
        // console.log(n, $('.ant-menu-item-selected'));
      }
    },
    isChoose (k) {
      let flag = false;
      let arr = a => {
        a.map((t, n) => {
          if(!t.children){
            if(t.key == k){
              flag = true;
            }
          } else {
            arr(t.children)
          }
        })
      }
      arr(this.$store.state.leftMenu.menusArr);
      return flag;
    },
    menusClick () {
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
      this.collapsed = !this.coll;
      this.menu = this.menus;
      this.rootSubmenuKeys = this.rootKeys;
  }
}
</script>

<style scoped lane="less">
  .clicks{
    margin: 10px 0 0 0 ;
    text-align: center;
    color: white;
    cursor: pointer;
  }
</style>