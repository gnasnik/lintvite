<template>
    <div class="content">
      <div class="overview">
      <div class="subtitle">总览</div>
    </div>
  </div>
  </template>
  
  <script lang="ts" setup>
  import { onMounted, ref, reactive, watch } from 'vue';
  import { getBaseInfo, getHomeChart } from '@/api'
  import { useUserStore } from '@/store/modules/user';
  import router from '@/routers'
  const userStore = useUserStore();
  const state = reactive<any>({
    timeType: 'Last 7 days',
    typeStr: {
      'Last 7 days': -7,
      'Last 30 days': -30,
      'Last 90 days': -90,
    },
    time: '',
    statistics: {},
    deviceList: [],
  })

  const clickItem = (item: any) => {
    item.url && router.push(item.url)
  }
  const disabledDate = (time: Date) => {
    return time.getTime() > Date.now();
  };
  
  const getData = () => {
    getBaseInfo().then((res: any) => {
      state.statistics = res
    })
  }
  
  onMounted(() => {
    // getBaseInfo().then((res: any) => {
    //   state.statistics = res
    // })
    
  })
  </script>
  
  <style lang="scss" scoped>
  .content {
    flex: 1;
    padding: 16px;
    height: 100%;
    background: #fff;
    border-radius: 4px;
    overflow: auto;
    box-sizing: border-box;
  }
  
  .overview {
    overflow: hidden;
  }
  
  .cursor{
    cursor: pointer;
  }
  </style>
    