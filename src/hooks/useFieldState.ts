import React, { useState } from 'react';

export const useFieldState: (
  initialState?: string,
) => [state: string, setState: React.Dispatch<React.SetStateAction<string>>] = (initialState: string = '') => {
  const [state, setState] = useState<string>(initialState);
  return [state, setState];
};
