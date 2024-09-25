import { useDispatch } from 'react-redux';
import type { RootDispatch } from './configure-store';

export const useCustomTodosDispatch = useDispatch.withTypes<RootDispatch>();
