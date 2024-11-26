import * as React from 'react';
import {SvgFromXml} from 'react-native-svg';
import { Color } from '../assets/Utils/Colors';

export default ({width, height, xml}) => (
  <SvgFromXml color={Color.black} width={width} height={height}  xml={xml}/>
);
