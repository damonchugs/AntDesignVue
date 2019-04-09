<template>
  <a-form :form="forms" @submit="handleSub" class="forms">
    <div v-for="(rule, index) in rule" :key="index">
      <a-form-item :label="rule.name" :label-col="{span: 5}" :wrapper-col="{span: 12}">
        <a-input :type="rule.type" :placeholder="rule.placeholder" v-decorator="rule.re"></a-input>
      </a-form-item>
    </div>
    <a-button class="btns" type="primary" html-type="submit">Submit</a-button>
  </a-form>
</template>

<script>
export default {
  name: "Forms",
  data() {
    return {
      forms: this.$form.createForm(this),
      rule: [
        {
          name: "名称",
          type: 'input',
          placeholder: '请输入用户名或者手机号',
          re: [
            "name",
            { rules: [{ required: true, message: "请输入正确的用户名或者手机号" }] }
          ]
        },
        {
          name: "密码",
          type: 'password',
          placeholder: '请输入密码',
          re: [
            "password",
            { rules: [{ required: true, message: "请输入正确的密码" }] }
          ]
        }
      ]
    };
  },
  methods: {
    handleSub(e) {
      e.preventDefault();
      this.forms.validateFields((err, val) => {
        if (!err) {
          console.log("form:", val);
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.forms {
  .btns {
    margin: 0 21%;
  }
}
</style>