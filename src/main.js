import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
//PrimeVue Import
import PrimeVue from 'primevue/config'
//PrimeFlex Import
import '/node_modules/primeflex/primeflex.css'
    

//Register global components
import Button from 'primevue/button'
import Calendar from 'primevue/calendar'
import InputText from 'primevue/inputtext'
import InputNumber from 'primevue/inputnumber'
import ConfirmDialog from 'primevue/confirmdialog'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import Checkbox from 'primevue/checkbox'
import Tooltip from 'primevue/tooltip'
import ConfirmationService from 'primevue/confirmationservice'

//Import CSS files
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons


const app = createApp(App);
//Call PrimeVue
app.use(PrimeVue)
app.use(ConfirmationService)
app.use(ToastService)

//Configure components
app.component('InputText', InputText);
app.component('Button', Button);
app.component('Calendar', Calendar);
app.component('InputNumber', InputNumber);
app.component('ConfirmDialog', ConfirmDialog);
app.component('Toast', Toast);
app.component('Checkbox',Checkbox);
// app.component('Tooltip',Tooltip);
app.directive('tooltip', Tooltip);

app.mount('#app')
