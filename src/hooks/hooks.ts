import { useDispatch as useReduxDispatch, useSelector as useReduxSelector } from "react-redux"
import type { TypedUseSelectorHook } from "react-redux"
import { AppDispatch, RootState } from "../redux/store"

export const useDispatch: () => AppDispatch = useReduxDispatch
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector