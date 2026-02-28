import { useEffect, useState } from 'react';
import * as Progress from 'react-native-progress';

interface progressProps {
  percent: number;
}

export default function ProgressBar({ percent }: progressProps) {
  const [value, setValue] = useState(0);

  useEffect(
    function () {
      setValue(percent);
    },
    [percent]
  );
  return (
    <Progress.Circle
      progress={value}
      unfilledColor={'#dad6d7c8'}
      size={150}
      color="#fff"
      showsText={true}
    />
  );
}
