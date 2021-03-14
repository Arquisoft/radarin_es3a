import React from 'react';
// import { getPodString } from '../services/getPodString';

export function useSolidString(toExecute) {
    const [podInfo, setPodInfo] = React.useState();

    React.useEffect(() => {
        toExecute().then((userPodInfo) => {
          if (userPodInfo === null) {
            return;
          }

          setPodInfo(userPodInfo);
        });
      }, []);

      return podInfo;
}