<script>
export default {
    data() {
        return {
            show: true,
        }
    },
    methods: {
        setShow() {
            setTimeout(() => {
                this.show = false
            }, 1000)
        }
    },
    mounted() {
        this.setShow();
        // setInterval(()=> {this.$emit('setShow', this.show)}, 1000)
    }
}
</script>

<template>
  <div class="cont">
    <img src="../../assets/preloader.svg" alt="Loading..." class="img">
  </div>
</template>

<style scoped>
.cont {
  display: grid;
  justify-items: center;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
}

.img {
  width: 150px;
  height: 150px;
  animation: pulse 1.5s infinite ease-in-out; /* Простая анимация */
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(0.9);
    opacity: 0.8;
  }
}
</style>