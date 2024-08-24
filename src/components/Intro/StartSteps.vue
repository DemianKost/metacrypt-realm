<template>
    <div class="p-4 py-8 rounded-md bg-zinc-900 w-full text-white" style="min-height: 500px;">
        <div class="stepper-content" v-if="steps.length">
            <div class="dashed-progress-bar">
                <div 
                    v-for="(step) in steps" 
                    :key="step.step" 
                    :class="['progress-dash', { active: currentStep === step.step, completed: currentStep > step.step }]"
                ></div>
            </div>
            <div class="flex items-center justify-center mt-10 mb-10">
                <img src="/frogs/green_frog.png" class="w-40" />
            </div>
            <div class="h-full flex flex-col justify-between" style="min-height: 300px;">
                <div v-for="step in currentStepData" :key="step.step">
                    <h2 class="text-xl font-bold uppercase mb-2">{{ step.title }}</h2>
                    <p class="text-md text-justify">{{ step.content }}</p>
                </div>
                <div class="stepper-navigation flex justify-center gap-x-8 w-full">
                    <button v-if="currentStep < steps.length" @click="previousStep" :disabled="currentStep === 1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                        </svg>
                    </button>
                    <button v-if="currentStep < steps.length" @click="nextStep" :disabled="currentStep === steps.length">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </button>
                    <RouterLink to="/start/frog" v-if="currentStep === steps.length" class="bg-red-700 text-md uppercase rounded-full px-4 py-2">
                        Start frog adventure!
                    </RouterLink>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import introSteps from '../../data/intro_steps.json';

    export default {
        name: 'StartSteps',
        data() {
            return {
                currentStep: 1,
                steps: []
            }
        },
        computed: {
            currentStepData() {
                return this.steps.filter(step => step.step === this.currentStep);
            },
        },
        methods: {
            loadSteps() {
                this.steps = introSteps;
            },
            nextStep() {
                if (this.currentStep < this.steps.length) {
                    this.currentStep++;
                }
            },
            previousStep() {
                if (this.currentStep > 1) {
                    this.currentStep--;
                }
            }
        },
        created() {
            this.loadSteps();
        }
    }
</script>

<style scoped>
.dashed-progress-bar {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
}
.progress-dash {
  width: 100%;
  height: 4px;
  background-color: #323232;
  margin: 0 5px;
  transition: background-color 0.3s ease;
}
.progress-dash.active, .progress-dash.completed {
  background-color: #f8f8f8;
}
</style>