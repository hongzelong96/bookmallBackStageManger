<template>
  <div>
    <div>
      <switch-roles @change="handleRolesChange" />
      <div>
        <span v-permission="['admin']" class="permission-alert">
          Only admin can see this
          <el-button type="warning">admin</el-button>
          <el-button type="danger">危险按钮</el-button>
        </span>

        <span  v-permission="['editor']"  class="permission-alert">
          Only editor can see this
          <el-button type="success">编辑</el-button>
          <el-button type="info">信息按钮</el-button>
        </span>

        <span v-permission="['editor']" class="permission-alert">
          as adminand and editor can see this
          <el-button type="primary">主要按钮</el-button>
          <el-button type="success">成功按钮</el-button>
          <el-button type="info">信息按钮</el-button>
          <el-button type="warning">警告按钮</el-button>
          <el-button type="danger">危险按钮</el-button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import permission from '@/directives/permission'


export default {
  data(){
    return{

    }
  },
  directives:{
    permission
  }
}
</script>

<style>

</style>