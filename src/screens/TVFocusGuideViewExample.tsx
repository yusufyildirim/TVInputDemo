/*
 * Shows usage of TVFocusGuideView
 */

import React from 'react';
import {StyleSheet, TVFocusGuideView} from 'react-native';

import {
  Button,
  RowContainer,
  SectionContainer,
  Spacer,
} from '../common/StyledComponents';

import 'react-native/tvos-types.d';

const TVFocusGuideViewExample = () => {
  const button1Ref = React.useRef();
  const button2Ref = React.useRef();

  const [focusGuidesAdded, setFocusGuidesAdded] = React.useState(false);
  const [focusGuidesVisible, setFocusGuidesVisible] = React.useState(false);

  const toggleFocusGuides = () => {
    if (focusGuidesAdded) {
      setFocusGuidesVisible(false);
    }
    setFocusGuidesAdded(!focusGuidesAdded);
  };

  const toggleFocusGuidesVisible = () => {
    setFocusGuidesVisible(!focusGuidesVisible);
  };

  return (
    <SectionContainer title="TVFocusGuideView example">
      <RowContainer>
        <Button onPress={() => toggleFocusGuides()}>
          {focusGuidesAdded ? 'Remove focus guides' : 'Add focus guides'}
        </Button>
        {focusGuidesAdded ? (
          <Button onPress={() => toggleFocusGuidesVisible()}>
            {focusGuidesVisible ? 'Hide focus guides' : 'Show focus guides'}
          </Button>
        ) : null}
      </RowContainer>
      <RowContainer>
        <Button ref={button1Ref} onPress={() => {}}>
          Button 1
        </Button>
        <Spacer />
        <TVFocusGuideView
          style={
            focusGuidesVisible && focusGuidesAdded
              ? styles.focusGuideVisible
              : styles.focusGuideHidden
          }
          destinations={
            focusGuidesAdded && button2Ref?.current ? [button2Ref?.current] : []
          }
        />
      </RowContainer>
      <RowContainer>
        <TVFocusGuideView
          style={
            focusGuidesVisible && focusGuidesAdded
              ? styles.focusGuideVisible
              : styles.focusGuideHidden
          }
          destinations={
            focusGuidesAdded && button1Ref?.current ? [button1Ref?.current] : []
          }
        />
        <Spacer />
        <Button ref={button2Ref} onPress={() => {}}>
          Button 2
        </Button>
      </RowContainer>
    </SectionContainer>
  );
};

const focusGuideWidth = 50.0;

const styles = StyleSheet.create({
  focusGuideVisible: {
    width: focusGuideWidth,
    backgroundColor: '#ffdddd',
  },
  focusGuideHidden: {
    width: focusGuideWidth,
  },
});

export default TVFocusGuideViewExample;
