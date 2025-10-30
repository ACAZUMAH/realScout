import { useCallback } from "react";
import { filtersActions } from "src/redux/reducers/filters";
import { useAppDispatch, useAppSelector } from "./useAppReduxHooks";

export const useFilters = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.filters);

  const updateFilters = useCallback(
    (filter: string) => {
      dispatch(filtersActions.update({ filter }));
    },
    [dispatch]
  );

  return { ...filters, updateFilters };
};
