import {Dimensions} from 'react-native';

const uiWidthPx = 750; // 设计稿宽
const uiHeightPx = 1334; // 设计稿高
const deviceWidthDp = Dimensions.get('window').width;
const deviceHeightDp = Dimensions.get('screen').height; // 当前设备的高

/**
 * @description: 竖屏下
 * @param {number} uiElePx 设计稿中对应的像素大小
 * @return {number} number 返回适配后的大小
 */
export const pTx = (uiElePx: number): number => {
  return (deviceWidthDp / uiWidthPx) * uiElePx;
};

/**
 * @description: 横屏下
 * @param {number} uiElePx 设计稿中对应的像素大小
 * @return {number} number 返回适配后的大小
 */
export const pTd = (uiElePx: number): number => {
  return (deviceHeightDp / uiHeightPx) * uiElePx;
};
