# antd-img-crop-cw

An image cropper for Ant Design [Upload](https://ant.design/components/upload/).

[![npm](https://img.shields.io/npm/v/antd-img-crop-cw.svg?style=flat-square)](https://www.npmjs.com/package/antd-img-crop-cw)
[![npm](https://img.shields.io/npm/dt/antd-img-crop-cw?style=flat-square)](https://www.npmtrends.com/antd-img-crop-cw)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/antd-img-crop-cw?style=flat-square)](https://bundlephobia.com/result?p=antd-img-crop-cw)
[![GitHub](https://img.shields.io/github/license/David2k13/antd-img-crop-cw?style=flat-square)](https://github.com/nanxiaobei/antd-img-crop-cw/blob/master/LICENSE)

English | [简体中文](./README.zh-CN.md)

## Demo

[Live demo](https://codesandbox.io/s/antd-img-crop-4qoom5p9x4)

## Install

```sh
yarn add antd-img-crop-cw
```

## Usage

```jsx harmony
import ImgCrop from 'antd-img-crop-cw';
import { Upload } from 'antd';

const Demo = () => (
  <ImgCrop>
    <Upload>+ Add image</Upload>
  </ImgCrop>
);
```
## Props

| 属性         | 类型                 | 默认         | 说明                                                   |
| ------------ | -------------------- | ------------ | ------------------------------------------------------ |
| aspect       | `number`             | `1 / 1`      | 裁切区域宽高比，`width / height`                       |
| shape        | `string`             | `'rect'`     | 裁切区域形状，`'rect'` 或 `'round'`                    |
| grid         | `boolean`            | `false`      | 显示裁切区域网格（九宫格）                             |
| quality      | `number`             | `0.4`        | 图片质量，`0 ~ 1`                                      |
| zoom         | `boolean`            | `true`       | 启用图片缩放                                           |
| rotate       | `boolean`            | `false`      | 启用图片旋转                                           |
| minZoom      | `number`             | `1`          | 最小缩放倍数                                           |
| maxZoom      | `number`             | `3`          | 最大缩放倍数                                           |
| modalTitle   | `string`             | `'编辑图片'` | 弹窗标题                                               |
| modalWidth   | `number` \| `string` | `520`        | 弹窗宽度，`px` 的数值或百分比                          |
| modalOk      | `string`             | `'确定'`     | 弹窗确定按钮文字                                       |
| modalCancel  | `string`             | `'取消'`     | 弹窗取消按钮文字                                       |
| beforeCrop   | `function`           | -            | 弹窗打开前调用，若返回 `false`，弹框将不会打开         |
| gifCrop     | `boolean`            | `true`         |  Crop `.gif`                                         |
| cropperProps | `object`             | -            | [react-easy-crop] 的 props（\* [已有 props] 无法重写） |

## Styles

To prevent overwriting the custom styles to `antd`, `antd-img-crop-cw` does not import the style files of components.

Therefore, if your project configured `babel-plugin-import`, and not use `Modal` or `Slider`, you need to import the styles yourself:

```js
import 'antd/es/modal/style';
import 'antd/es/slider/style';
```

## License

[MIT License](https://github.com/nanxiaobei/antd-img-crop/blob/master/LICENSE) (c) [nanxiaobei](https://mrlee.me/)
