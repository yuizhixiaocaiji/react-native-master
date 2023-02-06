import {StyleSheet} from 'react-native';
import {pTx, pTd} from './dp2px';

let MyStyleSheet = {
  create(style: any) {
    let s = {...style};
    // 目前仅对以下的属性进行处理
    let list = [
      'width',
      'height',
      'marginTop',
      'marginBottom',
      'marginLeft',
      'marginRight',
      'paddingTop',
      'paddingRight',
      'paddingBottom',
      'paddingLeft',
      'top',
      'right',
      'bottom',
      'left',
      'fontSize',
      'lineHeight',
    ];
    for (let outKey in s) {
      for (let innerKey in s[outKey]) {
        if (list.includes(innerKey) && typeof s[outKey][innerKey] == 'number') {
          s[outKey][innerKey] = pTx(s[outKey][innerKey]);
        }
      }
    }
    return StyleSheet.create(s);
  },
};
export default MyStyleSheet;
