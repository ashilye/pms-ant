<template>
    <div>
        <h1> {{userInfo.userName}} </h1>
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