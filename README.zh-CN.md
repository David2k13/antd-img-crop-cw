<!--
 * @Description: 注释
 * @Date: 2020-09-05 14:44:28
 * @LastEditTime: 2020-10-16 17:20:24
 * @LastEditors: chenwei
-->
# antd-img-crop-cw

图片裁切工具，用于 Ant Design [Upload](https://ant.design/components/upload-cn/) 组件。

[![npm](https://img.shields.io/npm/v/antd-img-crop-cw.svg?style=flat-square)](https://www.npmjs.com/package/antd-img-crop-cw)
[![npm](https://img.shields.io/npm/dt/antd-img-crop-cw?style=flat-square)](https://www.npmtrends.com/antd-img-crop-cw)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/antd-img-crop-cw?style=flat-square)](https://bundlephobia.com/result?p=antd-img-crop-cw)
[![GitHub](https://img.shields.io/github/license/David2k13/antd-img-crop-cw?style=flat-square)](https://github.com/nanxiaobei/antd-img-crop-cw/blob/master/LICENSE)

[English](./README.md) | 简体中文

## 示例

[在线示例](https://codesandbox.io/s/antd-img-crop-4qoom5p9x4)

## 安装

```sh
yarn add antd-img-crop-cw
```

## 使用

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

| Prop         | Type                 | Default        | Description                                                           |
| ------------ | -------------------- | -------------- | --------------------------------------------------------------------- |
| aspect       | `number`             | `1 / 1`        | Aspect of crop area , `width / height`                                |
| shape        | `string`             | `'rect'`       | Shape of crop area, `'rect'` or `'round'`                             |
| grid         | `boolean`            | `false`        | Show grid of crop area (third-lines)                                  |
| quality      | `number`             | `0.4`          | Image quality, `0 ~ 1`                                                |
| zoom         | `boolean`            | `true`         | Enable zoom for image                                                 |
| rotate       | `boolean`            | `false`        | Enable rotate for image                                               |
| minZoom      | `number`             | `1`            | Minimum zoom factor                                                   |
| maxZoom      | `number`             | `3`            | Maximum zoom factor                                                   |
| modalTitle   | `string`             | `'Edit image'` | Title of modal                                                        |
| modalWidth   | `number` \| `string` | `520`          | Width of modal in pixels number or percentages                        |
| modalOk      | `string`             | `'OK'`         | Text of confirm button of modal                                       |
| modalCancel  | `string`             | `'Cancel'`     | Text of cancel button of modal                                        |
| beforeCrop   | `function`           | -              | Call before modal open, if return `false`, it'll not open             |
| gifCrop     | `boolean`            | `true`       | 裁切 `.gif`                                                              |
| cropperProps | `object`             | -              | Props of [react-easy-crop] (\* [existing props] cannot be overridden) |

## 样式

为防止覆盖自定义 `antd` 样式，`antd-img-crop-cw` 中没有引入组件样式文件。

因此如果你的项目配置了 `babel-plugin-import`，且未使用 `Modal` 或 `Slider`，则需自行引入样式：

```js
import 'antd/es/modal/style';
import 'antd/es/slider/style';
```

## 协议

[MIT License](https://github.com/nanxiaobei/antd-img-crop/blob/master/LICENSE) (c) [nanxiaobei](https://mrlee.me/)
