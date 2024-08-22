<template>
  <div className="greeting">
    <h1>Добрый день, {{ userStore.name }}</h1>
  </div>
</template>

<script setup>
import {useUserStore} from '../store';

const userStore = useUserStore();
</script>

<style scoped>
.greeting {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
