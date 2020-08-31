import { LocationContext } from '../contexts/index';
import { useContext } from 'react';

export function useLocation() {
	return useContext(LocationContext);
}

export * from './useTheme';
export * from './useBackground';
