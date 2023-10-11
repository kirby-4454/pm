<template>
    <div style="height: 700px;">
    <el-container style="height: 700px; border: 1px solid #eee">
  <el-aside width="230px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>导航一</template>
        <el-menu-item-group>
          <!-- <template slot="title">分组一</template> -->
          <el-menu-item index="1-1">路由1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <!-- <el-menu-item-group title="分组2"></el-menu-item-group> -->
          <el-menu-item index="1-3">选项3</el-menu-item>
        
        <!-- <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项4-1</el-menu-item>
        </el-submenu> -->
      </el-submenu>
      <el-menu :default-openeds="['1', '3']">
        <el-submenu index="1">
        <template slot="title"><i class="el-icon-menu"></i>导航二</template>
        <el-menu-item-group>
          <!-- <template slot="title">分组一</template> -->
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-menu-item-group>
        <!-- <el-menu-item-group title="分组2"></el-menu-item-group> -->
          <el-menu-item index="2-3">选项3</el-menu-item>
        
        <!-- <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项4-1</el-menu-item>
        </el-submenu> -->
      </el-submenu>
    </el-menu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>导航三</template>
        <el-menu-item-group>
          <!-- <template slot="title">分组一</template> -->
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item> 
        </el-menu-item-group>
        <!-- <el-menu-item-group title="分组2"></el-menu-item-group> -->
          <el-menu-item index="3-3">选项3</el-menu-item>
        
        <!-- <el-submenu index="3-4">
          <template slot="title">选项4</template>
          <el-menu-item index="3-4-1">选项4-1</el-menu-item>
        </el-submenu> -->
      </el-submenu>
    </el-menu>

    <el-menu :default-openeds="['1', '3']">
        <el-submenu index="1">
        <template slot="title"><i class="el-icon-menu"></i>导航四</template>
        <el-menu-item-group>
          <!-- <template slot="title">分组一</template> -->
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-menu-item-group>
        <!-- <el-menu-item-group title="分组2"></el-menu-item-group> -->
          <el-menu-item index="2-3">选项3</el-menu-item>
        
        <!-- <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项4-1</el-menu-item>
        </el-submenu> -->
      </el-submenu>
    </el-menu>
  </el-aside>

  <el-container>
    <el-header >
      <el-dropdown>
        <!-- <i class="el-icon-setting" style="margin-;: 15px">1111</i> -->
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span style="text-align: center;">运维系统</span>
    </el-header>

    <el-input
        placeholder="请输入内容"
        v-model="input"
        clearable>
    </el-input>

    <el-main>
      <el-table :data="tableData">
        <el-table-column prop="date" label="日期" width="140">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</el-container>
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 30px;
  }
  body > .el-container {
    margin-bottom: 100px;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
        input:'',
        tableData: []
    }
  },
  mounted(){
    this.GetDepartmentPositionlist()
  },
  methods:{
    GetDepartmentPositionlist () {
        console.log(this.$axios,'==')
        this.$axios.get('/BPMCore/api/PerformanceSharing/BaseInfo')
            .then(function (response) {
                // 处理成功情况
                console.log(response);
            })
            .catch(function (error) {
                // 处理错误情况
                console.log(error);
            })
            .then(function () {
                // 总是会执行
        });
    },
  }
}
</script>
