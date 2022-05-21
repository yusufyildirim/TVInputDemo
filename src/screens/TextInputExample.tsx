/*
 * Shows a bare TextInput, then TextInput components wrapped with Touchables
 * for more styling control
 */

import React, {useState, useRef} from 'react';
import {TouchableOpacity} from 'react-native';

import {TextInput} from 'react-native-paper';

import {RowContainer, SectionContainer} from '../common/StyledComponents';

import styles from '../common/styles';

import 'react-native/tvos-types.d';

const TextInputExample = () => {
  const [inputText, setInputText] = useState('Dougie MacLowder');
  const [inputNumber, setInputNumber] = useState('655321');
  const textInputRef = useRef<any>();
  const numberInputRef = useRef<any>();

  return (
    <SectionContainer title="Text Input">
      <RowContainer>
        <TextInput
          autoComplete="off"
          label=""
          mode="flat"
          style={[styles.textInput, styles.container]}
          value={inputText}
          onChangeText={(src) => setInputText(src)}
        />
      </RowContainer>
      <RowContainer>
        <TouchableOpacity
          style={styles.container}
          onPress={() => textInputRef?.current?.focus()}>
          <TextInput
            autoComplete="off"
            ref={textInputRef}
            label="Full input"
            style={styles.textInput}
            mode="outlined"
            value={inputText}
            onChangeText={(src) => setInputText(src)}
          />
        </TouchableOpacity>
      </RowContainer>
      <RowContainer>
        <TouchableOpacity
          style={styles.container}
          onPress={() => numberInputRef?.current?.focus()}>
          <TextInput
            autoComplete="off"
            ref={numberInputRef}
            label="Number pad input"
            style={styles.textInput}
            mode="outlined"
            textContentType="telephoneNumber"
            keyboardType="number-pad"
            value={inputNumber}
            onChangeText={(src) => setInputNumber(src)}
          />
        </TouchableOpacity>
      </RowContainer>
    </SectionContainer>
  );
};

export default TextInputExample;
