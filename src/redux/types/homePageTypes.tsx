export interface homePageState {
  items: (string | number)[]
  isFetching: boolean
}

export enum homePageTypes {
  SET_HOME_PAGE = 'SET_HOME_PAGE',
}

interface homePageStart {
  type: homePageTypes.SET_HOME_PAGE
  payload: any[]
}

export type homePageAction = homePageStart
