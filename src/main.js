import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';

import BaseButton from './components/UI/BaseButton.vue';
import BaseCard from './components/UI/BaseCard.vue';

// /* import the fontawesome core */
import  { library }  from '@fortawesome/fontawesome-svg-core'

// /* import font awesome icon component */
import  { FontAwesomeIcon }  from '@fortawesome/vue-fontawesome'

// /* import specific icons */
import  { faCode, faGlobe }  from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

// /* add icons to the library */
library.add(faCode, faGithub, faGlobe)



const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router);

app.component('base-button', BaseButton);
app.component('base-card', BaseCard);

app.mount('#app');
