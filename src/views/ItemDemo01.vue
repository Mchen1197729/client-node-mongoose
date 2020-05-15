<template>
  <div class="demo01">
    <section class="left">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="猫的姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="猫的年龄">
          <el-input v-model="form.age"></el-input>
        </el-form-item>
        <el-form-item label="猫的爱好">
          <el-checkbox-group v-model="form.hobby">
            <el-checkbox label="吃饭" name="type"></el-checkbox>
            <el-checkbox label="睡觉" name="type"></el-checkbox>
            <el-checkbox label="打豆豆" name="type"></el-checkbox>
            <el-checkbox label="钓鱼" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button @click="onReset">重置选项</el-button>
        </el-form-item>
      </el-form>
      <section>
        <el-button @click="clickCatGetOne">catGetOne</el-button>
        <el-button @click="clickCatDeleteOne">catDeleteOne</el-button>
      </section>
    </section>
    <section class="right">
      <el-form ref="form" :model="form1" label-width="80px">
        <el-form-item label="猫的姓名">
          <el-input v-model="form1.name"></el-input>
        </el-form-item>
        <el-form-item label="猫的年龄">
          <el-input v-model="form1.age"></el-input>
        </el-form-item>
        <el-form-item label="猫的爱好">
          <el-checkbox-group v-model="form1.hobby">
            <el-checkbox label="吃饭" name="type"></el-checkbox>
            <el-checkbox label="睡觉" name="type"></el-checkbox>
            <el-checkbox label="打豆豆" name="type"></el-checkbox>
            <el-checkbox label="钓鱼" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSearch">按条件搜索</el-button>
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>

<script>
  import {catAddOne, catGetOne, catDeleteOne} from '../api'

  export default {
    data() {
      return {
        form: {
          name: '',
          age: undefined,
          hobby: []
        },
        form1: {
          name: '',
          age: undefined,
          hobby: []
        }
      }
    },
    methods: {
      onSubmit() {
        const {name, age, hobby} = this.form
        catAddOne({name, age, hobby})
            .then(data => {
              this.$message.success(data.msg)
              console.log(data)
            })
      },
      onSearch() {
        const {name, age, hobby} = this.form

      },
      clickCatGetOne() {
        catGetOne({age: 8})
            .then(data => {
              console.log(data)
            })
      },
      clickCatDeleteOne() {
        catDeleteOne({name: 'Rose'})
            .then(data => {
              console.log(data)
            })
      },
      onReset() {
        this.form = {
          name: '',
          age: undefined,
          hobby: []
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .demo01 {
    width: 100%;
    height: 100%;
    display: flex;

    .left {
      width: 500px;
    }

    .right {

    }
  }
</style>
