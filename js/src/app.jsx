import selectWithPercent from './SelectWithPercent.vue'
import itemDataSettings from './ItemDataSettings.vue'
import modal from './Modal.vue'

let GlobalVueComponents = {};
GlobalVueComponents.selectWithPercent = selectWithPercent;
GlobalVueComponents.itemDataSettings = itemDataSettings;
GlobalVueComponents.modal = modal;
window.GlobalVueComponents = GlobalVueComponents;
