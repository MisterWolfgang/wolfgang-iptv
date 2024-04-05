
import { useRef } from 'react';
import { Input } from '@ui-kitten/components';
import { TouchableHighlight } from 'react-native';

/* eslint-disable-next-line */
export interface IndexProps {
}


export const Index = (props: IndexProps) => {
  const inputRef = useRef<Input | null>(null);

  return (
    <TouchableHighlight
        onPress={() => inputRef.current?.focus()}
        style={{ borderRadius: 5 }}
    >
      <Input
        ref={inputRef}
        {...props}
        placeholder='Place your Text'
      />
    </TouchableHighlight>
  );
}


export default Index;
