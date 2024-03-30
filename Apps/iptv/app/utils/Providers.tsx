import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { ReactNode } from 'react';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';

const Providers = ({ children }: { children: ReactNode }) => {
  const isLoadingComplete = true;
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaProvider>{children}</SafeAreaProvider>
      </ApplicationProvider>
    );
  }
};

export default Providers;
