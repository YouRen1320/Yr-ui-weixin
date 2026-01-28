<template>
  <div class="device-container">
    <div class="device-frame">
      <div class="device-notch"></div>
      <div class="device-screen">
        <iframe v-if="url" :src="url" frameborder="0" class="device-iframe"></iframe>
        <slot v-else></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  url: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.device-container {
  display: flex;
  justify-content: center;
  margin: 24px 0;
}

.device-frame {
  position: relative;
  width: 375px;
  max-width: 100%;
  height: 667px; /* iPhone 8 height roughly, or adjust */
  background: #fff;
  border-radius: 40px;
  box-shadow: 0 0 0 12px #4a4a4a, 0 0 0 14px #9a9a9a, 0 20px 40px rgba(0,0,0,0.2);
  overflow: hidden;
  box-sizing: content-box;
}

.device-notch {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  height: 24px;
  background: #4a4a4a;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  z-index: 10;
}

.device-screen {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #f5f5f5;
  padding-top: 30px; /* Space for status bar */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.device-screen :deep(img) {
  width: 100%;
  height: auto;
  display: block;
}

.device-iframe {
  width: 100%;
  height: 100%;
}
</style>
