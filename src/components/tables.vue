<template>
  <a-table :columns="columns" :dataSource="data" bordered>
    <template slot="title" slot-scope="currentPageData">
      Header
    </template>

    <template v-for="col in ['name', 'money', 'address']" :slot="col" slot-scope="text, record, index">
        <div :key="col">
            <a-input
                v-if="record.editable"
                :value="text"
                style="margin: -5px 0;"
                @change="e => handleChange(e.target.value, record.key, col, index)"
            />
            <template v-else>{{text}}</template>
        </div>
    </template>
    
    <template slot="operation" slot-scope="text, record, index">
      <div class='editable-row-operations'>
        <span v-if="record.editable">
          <a @click="() => save(record.key)" style="margin-right: 5px">保存</a>
          <a-popconfirm title='是否取消?' @confirm="() => cancel(record.key)">
            <a>取消</a>
          </a-popconfirm>
        </span>
        <span v-else>
          <a @click="() => edit(record.key)">编辑</a>
        </span>
      </div>
    </template>
  </a-table>
</template>
<script>
const columns = [{
  title: 'Name',
  dataIndex: 'name',
  scopedSlots: { customRender: 'name' },
  width: '15%',
  align: 'center',
  sorter: (a, b) => a.name.length - b.name.length,
}, {
  title: 'Cash Assets',
  className: 'column-money',
  dataIndex: 'money',
  scopedSlots: { customRender: 'money' },
  width: '25%',
  align: 'center',
  sorter: (a, b) => a.money.split('￥')[1] - b.money.split('￥')[1],
}, {
  title: 'Address',
  dataIndex: 'address',
  scopedSlots: { customRender: 'address' },
  width: '35%',
  align: 'center'
}, {
  title: 'operation',
  dataIndex: 'operation',
  scopedSlots: { customRender: 'operation' },
  width: '15%',
}];

const data = [{
  key: '1',
  name: 'John Brown',
  money: '￥300,000.00',
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  money: '￥1,256,000.00',
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  money: '￥120,000.00',
  address: 'Sidney No. 1 Lake Park',
}];

export default {
  data() {
    return {
      data: [],
      columns: [],
      loading: true
    };
  },
  mounted () {
      this.data = data;
      this.columns = columns;
      this.loading = false;
  },
  methods: {
    handleChange (value, key, column) {
      const newData = [...this.data]
      const target = newData.filter(item => key === item.key)[0]
      if (target) {
        target[column] = value
        this.data = newData
      }
    },
    edit (key) {
      const newData = [...this.data]
      const target = newData.filter(item => key === item.key)[0]
      if (target) {
        target.editable = true
        this.data = newData
      }
    },
    save (key) {
      const newData = [...this.data]
      const target = newData.filter(item => key === item.key)[0]
      if (target) {
        delete target.editable
        this.data = newData
        this.cacheData = newData.map(item => ({ ...item }))
      }
    },
    cancel (key) {
      const newData = [...this.data]
      const target = newData.filter(item => key === item.key)[0]
      if (target) {
        Object.assign(target, this.cacheData.filter(item => key === item.key)[0])
        delete target.editable
        this.data = newData
      }
    },
  }
};
</script>

<style lang="scss" scoped>
</style>