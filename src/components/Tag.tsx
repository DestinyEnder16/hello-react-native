import { View } from 'react-native';

interface tagProps {
  name: 'string';
}

export default function Tag(props: tagProps) {
  return <View>{props.name}</View>;
}
