<template>
  <div style="overflow: hidden">
    <router-view v-slot="{ Component, route }">
      <transition :name="route.name === 'Greeting' ? 'slide-left' : ''" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style>
.slide-left-enter-active {
  transition: all 0.5s ease;
}

.slide-left-leave-active {
  transition: all 0.5s ease;
}

.slide-left-enter-from {
  transform: translateX(100%);
}

.slide-left-leave-to {
  transform: translateX(-100%);
}
</style>
