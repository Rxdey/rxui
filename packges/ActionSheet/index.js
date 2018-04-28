import ActionSheet from './src/actionsheet';

ActionSheet.install = function(Vue) {
  Vue.component(ActionSheet.name, ActionSheet);
};

export default ActionSheet;