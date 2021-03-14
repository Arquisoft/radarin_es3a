import React from 'react';
import { fetchPublicTypeIndex } from '../services/fetchPublicTypeIndex';

export function usePublicTypeIndex() {
  const [publicTypeIndex, setPublicTypeIndex] = React.useState();

  React.useEffect(() => {
    fetchPublicTypeIndex().then(fetchedPublicTypeIndex => {
      if (fetchedPublicTypeIndex === null) {
        return;
      }
      setPublicTypeIndex(fetchedPublicTypeIndex);
    });
  }, []);

  return publicTypeIndex;
}
