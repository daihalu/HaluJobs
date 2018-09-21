import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import * as Cookies from 'js-cookie';

import * as types from './mutation-types';

import HOME_PAGE from './modules/trang-chu';
import RECRUITMENT_PAGE from './modules/tuyen-dung';

const store = () => {
  return new Vuex.Store({
    strict: false,
    plugins: [createPersistedState({
      storage: {
        getItem: key => Cookies.get(key),
        // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
        setItem: (key, value) =>
          Cookies.set(key, value, { expires: 3, secure: true }),
        removeItem: key => Cookies.remove(key),
      },
    }),],
    modules: {
      HOME_PAGE,
      RECRUITMENT_PAGE
    },

    state: {
      navBarStatus: 'HOME_PAGE',
      breadcrumb: {breadcrumbArr: [], title: ''},
      searchingContent: '',
      currentRouteName: ''
    },

    getters: {
      navBarStatus(state) {
        return state.navBarStatus;
      },

      searchingContent(state) {
        return state.searchingContent;
      }
    },

    actions: {
      updateNavBarStatus({commit}, status) {
        commit(types.UPDATE_NAV_BAR_STATUS, status);
      },

      updateBreadcrumb({commit}, breadcrumbObj) {
        commit(types.UPDATE_BREADCRUMB, breadcrumbObj);
      },

      updateSearchingContent({commit}, value) {
        commit(types.UPDATE_SEARCHING_CONTENT, value);
      },

      updateCurrentRouteName({commit}, routeName) {
        if (routeName === 'index') {
          commit(types.UPDATE_NAV_BAR_STATUS, 'HOME_PAGE');
        } else if (routeName === 'tuyen-dung' || routeName === 'tuyen-dung-industry') {
          commit(types.UPDATE_NAV_BAR_STATUS, 'RECRUITMENT_PAGE');
        } else if (routeName === 'ung-vien') {
          commit(types.UPDATE_NAV_BAR_STATUS, 'CANDIDATE_PAGE');
        } else if (routeName === 'cong-ty') {
          commit(types.UPDATE_NAV_BAR_STATUS, 'COMPANY_PAGE');
        } else if (routeName === 'tai-khoan') {
          commit(types.UPDATE_NAV_BAR_STATUS, 'ACCOUNT_PAGE');
        } else if (routeName === 'toan-quoc') {
          commit(types.UPDATE_NAV_BAR_STATUS, 'WHOLE_COUNTRY_PAGE');
        }
        commit(types.UPDATE_CURRENT_ROUTE_NAME, routeName);
      }
    },

    mutations: {
      [types.UPDATE_NAV_BAR_STATUS](state, status) {
        state.navBarStatus = status;
      },

      [types.UPDATE_BREADCRUMB](state, breadcrumbObj) {
        state.breadcrumb = breadcrumbObj;
      },

      [types.UPDATE_SEARCHING_CONTENT](state, value) {
        state.searchingContent = value;
      },

      [types.UPDATE_CURRENT_ROUTE_NAME](state, routeName) {
        state.currentRouteName = routeName;
      }
    },
  })
};

export default store;

