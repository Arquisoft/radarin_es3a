import React from 'react';
import { fetchProfile } from '../services/fetchProfile';

export function useProfile() {
  const [profile, setProfile] = React.useState();

  React.useEffect(() => {
    fetchProfile().then((fetchedProfile) => {
      if (fetchedProfile === null) {
        return;
      }
      setProfile(fetchedProfile);
    });
  }, []);

  return profile;
}
