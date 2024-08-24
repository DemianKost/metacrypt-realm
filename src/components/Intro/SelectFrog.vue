<template>
    <div class="p-4 py-8 rounded-md bg-zinc-900 w-full text-white" style="min-height: 500px;">
        <h2 class="text-xl font-bold uppercase text-center mb-6">Select your frog</h2>
  
        <div class="frog-selection-container flex gap-y-6">
            <div
                v-for="frog in frogs"
                :key="frog.id"
                class="frog-card"
                :class="{ selected: selectedFrog === frog.id }"
                @click="selectFrog(frog.id)"
            >
                <img :src="frog.image" :alt="frog.name" class="frog-image" />
                <p class="frog-name">{{ frog.name }}</p>
            </div>
        </div>
      
        <div class="text-center mt-6">
            <button
                :disabled="!selectedFrog"
                @click="confirmSelection"
                class="bg-red-700 text-md uppercase rounded-full px-4 py-2"
            >
            Confirm selection
            </button>
        </div>
    </div>
</template>
  
<script>
  export default {
    name: 'SelectFrog',
    data() {
      return {
        frogs: [
          { id: 1, name: 'Coal frog', image: '/frogs/black_frog.png' },
          { id: 2, name: 'Freeze frog', image: '/frogs/blue_frog.png' },
          { id: 3, name: 'Fire frog', image: '/frogs/fire_frog.png' },
          { id: 4, name: 'Jungle frog', image: '/frogs/green_frog.png' },
        ],
        selectedFrog: null
      };
    },
    methods: {
      selectFrog(id) {
        this.selectedFrog = id;
      },
      confirmSelection() {
        alert(`You have selected frog with ID: ${this.selectedFrog}`);
        // Add your logic here for confirming the selection
      }
    }
  };
  </script>
  
  <style scoped>
  .frog-selection-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  
  .frog-card {
    width: 120px;
    padding: 10px;
    border-radius: 8px;
    background-color: #333;
    text-align: center;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    margin: 10px;
  }
  
  .frog-card.selected {
    border: 2px solid #4caf50;
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
  }
  
  .frog-image {
    width: 100px;
    height: auto;
    border-radius: 8px;
  }
  
  .frog-name {
    margin-top: 8px;
    font-size: 14px;
    font-weight: bold;
  }
  
  .confirm-button {
    background-color: #4caf50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
  }
  
  .confirm-button:disabled {
    background-color: #666;
    cursor: not-allowed;
  }
</style>  