import React from 'react';
import { View, Button } from 'react-native';

import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}
    >
      <View
        style={{
          paddingLeft: 50,
          paddingRight: 50,
        }}
      >
        <Button title="Sair" onPress={signOut} color="#312e38" />
      </View>
    </View>
  );
};

export default Dashboard;
