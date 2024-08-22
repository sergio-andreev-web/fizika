<template>
  <div class="home">
    <form
        @submit.prevent="validateName"
        :class="{'animate__fadeInDown': animateForm, 'form-hidden': !animateForm }"
    >
      <h1>Введите имя</h1>
      <input v-model="name" type="text" placeholder="Ваше имя" />
      <button type="submit">Войти</button>
    </form>

    <transition name="fade-up">
      <div v-if="showError" class="error-popup">
        Имя слишком короткое
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../store';

const name = ref('');
const showError = ref(false);
const animateForm = ref(false);
const router = useRouter();
const userStore = useUserStore();

const validateName = () => {
  if (name.value.length < 2) {
    showError.value = true;
    setTimeout(() => {
      showError.value = false;
    }, 4000);
  } else {
    userStore.setName(name.value);
    router.push('/greeting');
  }
};

onMounted(() => {
  setTimeout(() => {
    animateForm.value = true;
  }, 100);
});
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
}

.form-hidden {
  opacity: 0;
}

input {
  margin-top: 10px;
  padding: 10px;
  font-size: 16px;
}

button {
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.error-popup {
  position: fixed;
  bottom: 20px;
  right: 10%;
  background-color: red;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
}

.animate__fadeInDown {
  animation-name: fadeInDown;
  animation-duration: 0.5s;
  animation-timing-function: ease;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 0.5s ease;
}
.fade-up-enter-from,
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(100%);
}

</style>
