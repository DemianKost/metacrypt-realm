<template>
    <div class="p-4 py-8 rounded-md bg-zinc-900 w-full text-white" style="min-height: 500px;">
      <div class="text-center mb-6">
        <div v-if="selectedFrog" class="selected-frog-container flex flex-col items-center">
          <img :src="selectedFrog.image" :alt="selectedFrog.name" class="selected-frog-image w-40 mb-4" />
          <p class="text-xl font-bold uppercase">{{ selectedFrog.name }}</p>
        </div>
        <button
          v-if="selectedFrog"
          @click="handleClick"
          class="clicker-button"
        >
          Click to earn coins!
        </button>
      </div>
  
      <div class="progress-container">
        <p class="text-center mb-2">Frog Coins: {{ frogCoins }}</p>
        <div class="progress-bar">
          <div class="progress-bar-fill" :style="{ width: progressBarWidth }"></div>
        </div>
      </div>
  
      <!-- Notification and Explosion Effects -->
      <transition name="fade">
        <div v-if="showNotification" class="notification">+1 Coin Added!</div>
      </transition>
      <transition name="fade">
        <div v-if="explosionVisible" class="explosion">💥</div>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Lobby',
    data() {
      return {
        selectedFrog: null,
        showNotification: false,
        explosionVisible: false,
      };
    },
    mounted() {
      this.selectedFrog = this.$store.getters.getSelectedFrog;
    },
    computed: {
      frogCoins() {
        return this.$store.getters.frogCoins;
      },
      progressBarWidth() {
        return `${Math.min(this.frogCoins * 0.1, 100)}%`; // Adjust multiplier if needed
      }
    },
    methods: {
      handleClick() {
        this.incrementFrogCoins();
        this.triggerExplosion();
        this.showCoinNotification();
      },
      incrementFrogCoins() {
        this.$store.dispatch('incrementFrogCoins');
      },
      showCoinNotification() {
        this.showNotification = true;
        setTimeout(() => {
          this.showNotification = false;
        }, 1000); // Notification duration
      },
      triggerExplosion() {
        this.explosionVisible = true;
        setTimeout(() => {
          this.explosionVisible = false;
        }, 500); // Explosion duration
      }
    }
  };
  </script>
  
  <style scoped>
  .selected-frog-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .selected-frog-image {
    width: 150px;
    height: auto;
    border-radius: 8px;
    margin-bottom: 10px;
  }
  
  .selected-frog-name {
    font-size: 18px;
    font-weight: bold;
  }
  
  .clicker-button {
    background-color: #4caf50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    position: relative; /* For explosion positioning */
  }
  
  .progress-container {
    margin-top: 20px;
  }
  
  .progress-bar {
    width: 100%;
    background-color: #666;
    height: 20px;
    border-radius: 10px;
    overflow: hidden;
  }
  
  .progress-bar-fill {
    height: 100%;
    background-color: #4caf50;
    transition: width 0.3s ease;
  }
  
  /* Notification Animation */
  .notification {
    position: absolute;
    top: 20px;
    right: 20px;
    background: #4caf50;
    color: white;
    padding: 10px;
    border-radius: 5px;
    font-size: 16px;
    animation: slideInOut 1s ease;
  }
  
  @keyframes slideInOut {
    0% {
      opacity: 0;
      transform: translateX(50px);
    }
    50% {
      opacity: 1;
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      transform: translateX(-50px);
    }
  }
  
  /* Explosion Animation */
  .explosion {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 40px;
    animation: explode 0.5s ease forwards;
  }
  
  @keyframes explode {
    0% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) scale(1.5);
      opacity: 0;
    }
  }
  
  /* Fade Transition */
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
  }
  </style>
  