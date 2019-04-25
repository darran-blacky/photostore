import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/src/stylus/app.styl';

export const theme = {
  // primary: '#00EC86',
  accent: '#2d2d2d',
  secondary_accent: '#A0A0A0',
  tertiary_accent: '#000000',
  primary: '#CBAA5C',
  secondary: '#083759',
  tertiary: '#f9bfce',
  error: '#BF360C',
  info: '#546E7A',
  success: '#69F0AE',
  warning: '#FFE082',
};

Vue.use(Vuetify, {
  theme,
  customProperties: true,
  iconfont: 'mdi',
});
