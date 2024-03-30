
import { useEffect, useRef, useState } from 'react';
import { Input } from '@ui-kitten/components';
import { TouchableHighlight } from 'react-native';

/* eslint-disable-next-line */
export interface IndexProps {
}


export const Index = (props: IndexProps) => {
  const inputRef = useRef(null);
  const [focused, setFocused] = useState(false);

  return (
    <TouchableHighlight
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onPress={() => inputRef.current?.focus()}
        style={{ borderRadius: 10 }}
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
