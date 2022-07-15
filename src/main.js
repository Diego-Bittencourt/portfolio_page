import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index';

import BaseButton from './components/UI/BaseButton.vue';
import BaseCard from './components/UI/BaseCard.vue';

import { library } from '@fortawesome/fontawesome-svg-core'

import { faHatWizard } from '@fortawesome/free-solid-svg-icons'

library.add(faHatWizard)
// app.component('font-awesome-icon', FontAwesomeIcon)

const app = createApp(App);

app.use(router);

app.component('base-button', BaseButton);
app.component('base-card', BaseCard);

app.mount('#app');
