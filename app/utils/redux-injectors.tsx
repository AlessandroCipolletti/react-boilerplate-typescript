import {
  useInjectReducer as useReducer,
  useInjectSaga as useSaga,
} from 'redux-injectors'
import { InjectReducerParams, InjectSagaParams } from 'common/types'

// export them with stricter type definitions

export const useInjectReducer = ({ key, reducer }: InjectReducerParams) =>
  useReducer({ key, reducer })

export const useInjectSaga = ({ key, saga, mode }: InjectSagaParams) =>
  useSaga({ key, saga, mode })
