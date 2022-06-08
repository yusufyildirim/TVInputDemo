/*
 * Wrapped several components to keep app code simpler
 * Because TV needs focus APIs that use refs, all wrappers use React.forwardRef
 */
import React from 'react';
import {
  Button as PaperButton,
  List,
  Text as PaperText,
  TextInput as PaperTextInput,
} from 'react-native-paper';
import {TouchableOpacity, View} from 'react-native';

import {useTVTheme} from './TVTheme';

import 'react-native/tvos-types.d';

// Button used in the demos
const Button = React.forwardRef(
  (props: React.ComponentPropsWithoutRef<typeof PaperButton>, ref: any) => {
    const {styles} = useTVTheme();
    return (
      <PaperButton {...props} ref={ref} style={styles.button} uppercase={false}>
        {props.children}
      </PaperButton>
    );
  },
);

// Back button used on every screen
const BackButton = React.forwardRef(
  (props: React.ComponentPropsWithoutRef<typeof PaperButton>, ref: any) => {
    const {styles} = useTVTheme();
    return (
      <Button
        {...props}
        ref={ref}
        mode="contained"
        style={styles.button}
        uppercase={false}>
        {props.children}
      </Button>
    );
  },
);

// Text input without a touchable wrapper
const PlainTextInput = (props: React.ComponentProps<any>) => {
  const {styles} = useTVTheme();
  return (
    <PaperTextInput
      {...props}
      autoComplete="off"
      mode="flat"
      style={[styles.textInput]}
    />
  );
};

// Text input with a touchable wrapper to manage focus on TV
const WrappedTextInput = (props: React.ComponentProps<any>) => {
  const {styles} = useTVTheme();
  const textInputRef = React.useRef<any>();
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={() => textInputRef?.current?.focus()}>
      <PaperTextInput
        {...props}
        autoComplete="off"
        ref={textInputRef}
        style={styles.textInput}
        mode="outlined"
      />
    </TouchableOpacity>
  );
};

// TV-styled text component
const Text = (props: React.ComponentProps<typeof PaperText>) => {
  const {styles} = useTVTheme();
  return <PaperText style={styles.text}>{props.children}</PaperText>;
};

// Just a view to fill in space, used in the focus guide and nextFocus demos
const Spacer = () => {
  const {styles} = useTVTheme();
  return <View style={styles.spacer} />;
};

// Wrappers for react-native-paper containers
const RowContainer = (props: React.ComponentProps<typeof View>) => {
  const {styles} = useTVTheme();
  return <View style={styles.row}>{props.children}</View>;
};

const SectionContainer = (props: React.ComponentProps<typeof List.Section>) => {
  const {styles} = useTVTheme();
  return (
    <List.Section title={props.title} titleStyle={styles.titleStyle}>
      {props.children}
    </List.Section>
  );
};

export {
  BackButton,
  Button,
  PlainTextInput,
  RowContainer,
  SectionContainer,
  Spacer,
  Text,
  WrappedTextInput,
};
