import { useState } from 'react';
import { Button, Text, View } from 'react-native';
// import React from 'react';

type PersonProps = {
  name: string;
  amount: number;
};

type BtnProps = {
  fn: React.Dispatch<React.SetStateAction<boolean>>;
  debt: boolean;
};

function PayDebtBtn(props: BtnProps) {
  return (
    <Button
      title={!props.debt ? 'No debt to pay' : 'Pay Debt'}
      onPress={() => props.fn(false)}
      disabled={props.debt === false}
    />
  );
}

function Person(props: PersonProps) {
  const [isOwing, setIsOwing] = useState(true);
  return (
    <View style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <Text>
        {isOwing
          ? `You are owing ${props.name} a total of $${props.amount}`
          : 'You are free of all debts'}
      </Text>

      <PayDebtBtn fn={setIsOwing} debt={isOwing} />
    </View>
  );
}

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: '15px',
      }}
    >
      <Person name="Destiny" amount={50} />
      <Person name="Olachi" amount={500} />
      <Person name="Chidera" amount={750} />
    </View>
  );
}
