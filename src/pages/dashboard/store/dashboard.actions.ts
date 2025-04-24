import { createAction } from '@reduxjs/toolkit';
import { MetroData, MetroStop } from '../../../models/metro-data.model';
import { MetroPath } from '../models/dashboard.model';

export const getGraphMetro = createAction('[Graph] get Graph Metro');
export const getGraphMetroSuccess = createAction<MetroData>('[Graph] get Graph Metro Success');

export const setGraphMetroStop = createAction<MetroStop>('[Graph] set Graph Metro stop');
export const resetGraphMetroStop = createAction('[Graph] reset Graph Metro stop');

export const searchMetroPath = createAction<MetroPath>('[Graph] search Graph Metro path');
export const resetMetroPath = createAction('[Graph] reset Graph Metro path');


