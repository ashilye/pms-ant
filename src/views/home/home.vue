<template>
    <div>
        <el-container style="height: 500px; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <el-menu :default-openeds="['1']">
            <el-submenu index="1">
                <template slot="title"><i class="el-icon-mobile"></i>设备管理</template>
                <el-menu-item-group>
                <el-menu-item index="1-1">我的设备</el-menu-item>
                <el-menu-item index="1-2">在线设备</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title"><i class="el-icon-date"></i>任务中心</template>
                <el-menu-item-group>
                <el-menu-item index="2-1">分发</el-menu-item>
                <el-menu-item index="2-2">记录</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title"><i class="el-icon-notebook-1"></i>积分记录</template>
                <el-menu-item-group>
                <el-menu-item index="3-1">积分列表</el-menu-item>
                <el-menu-item index="3-2">充值记录</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title"><i class="el-icon-setting"></i>设置</template>
                <el-menu-item-group>
                <el-menu-item index="4-1">关于我们</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            </el-menu>
        </el-aside>
        
        <el-container>
            <el-header style="text-align: right; font-size: 14px">
            <span>欢迎您:  {{userInfo.nickName}}</span>
            <el-dropdown>
                <i class="el-icon-user-solid" style="margin-left: 15px"></i>
                <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>查看</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            </el-header>
            
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

<script>
  export default {
    name: "Home",
    data() {
      return {
        userInfo: ''
      }
    },
    methods: {
      
    },

    created(){
        this.userInfo = this.$route.params
    }
  }
</script>


<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>