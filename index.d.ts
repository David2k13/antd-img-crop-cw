/*
 * @Description: 注释
 * @Date: 2020-10-16 16:58:43
 * @LastEditTime: 2020-10-16 17:04:58
 * @LastEditors: chenwei
 */
import * as React from 'react';
import { CropperProps } from 'react-easy-crop';

export interface ImgCropProps {
  aspect?: number;
  shape?: 'rect' | 'round';
  grid?: boolean;
  quality?: number;

  zoom?: boolean;
  rotate?: boolean;
  minZoom?: number;
  maxZoom?: number;
  gifCrop?: boolean,

  modalTitle?: string;
  modalWidth?: number | string;
  modalOk?: string;
  modalCancel?: string;

  beforeCrop?: (file: File, fileList: File[]) => boolean;
  cropperProps?: Partial<CropperProps>;
}
declare const ImgCrop: React.FC<ImgCropProps>;
export default ImgCrop;
