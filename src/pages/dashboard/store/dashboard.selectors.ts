import { createSelector } from '@reduxjs/toolkit';
import { DashboardState } from '../models/dashboard.model';

export const selectDashboardState = (state: { dashboard: DashboardState }) => state.dashboard;

export const selectDashboardData = createSelector(
  selectDashboardState,
  (dashboardState) => dashboardState
);
