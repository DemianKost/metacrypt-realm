import { createMemoryHistory, createRouter } from 'vue-router'
import StartSteps from '../components/Intro/StartSteps.vue';
import SelectFrog from '../components/Intro/SelectFrog.vue';
import Lobby from '../components/Game/Lobby.vue';

const routes = [
  { path: '/', component: StartSteps },
  { path: '/start/frog', component: SelectFrog },
  { path: '/game/lobby', component: Lobby },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;