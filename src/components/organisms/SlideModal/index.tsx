import React, { useState, useEffect, useMemo, FC, ReactNode } from 'react';
import { View, Animated, Dimensions, Pressable } from 'react-native';
import {
  HandlerStateChangeEvent,
  PanGestureHandler,
  PanGestureHandlerEventPayload,
  State,
} from 'react-native-gesture-handler';
import styles from './SlideModal.styles';
const { height } = Dimensions.get('window');

interface ISlideModalProps {
  isVisible: boolean;
  dismiss: () => void;
  children: ReactNode;
}

export const SlideModal: FC<ISlideModalProps> = ({
  isVisible,
  dismiss,
  children,
}) => {
  const [animationState] = useState({
    opacity: new Animated.Value(0),
    container: new Animated.Value(height),
    modal: new Animated.Value(height),
  });

  const openModal = () => {
    Animated.sequence([
      Animated.timing(animationState.container, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(animationState.opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.spring(animationState.modal, {
        toValue: 0,
        bounciness: 2,
        speed: 4,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const closeModal = () => {
    Animated.sequence([
      Animated.timing(animationState.modal, {
        toValue: height,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(animationState.opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(animationState.container, {
        toValue: height,
        duration: 100,
        useNativeDriver: false,
      }),
    ]).start();
  };

  useEffect(() => {
    if (isVisible) {
      openModal();
    } else {
      closeModal();
    }
  }, [isVisible]);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: animationState.modal,
        },
      },
    ],
    { useNativeDriver: true },
  );

  const { containerAnimationStyle, modalAnimationStyle } = useMemo(
    () => ({
      containerAnimationStyle: {
        opacity: animationState.opacity,
        transform: [{ translateY: animationState.container }],
      },
      modalAnimationStyle: {
        transform: [
          {
            translateY: animationState.modal.interpolate({
              inputRange: [0, height],
              outputRange: [0, height],
              extrapolate: 'clamp',
            }),
          },
        ],
      },
    }),
    [animationState],
  );

  let offset = 0;
  const onHandlerStateChanged = (
    event: HandlerStateChangeEvent<PanGestureHandlerEventPayload>,
  ) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      const { translationY } = event.nativeEvent;
      offset += translationY;
      if (translationY >= 20) {
        dismiss();
      } else {
        animationState.modal.setValue(offset);
        animationState.modal.setOffset(0);
        offset = 0;
      }
    }
  };

  return (
    <Animated.View style={[styles.container, containerAnimationStyle]}>
      <Pressable onPress={dismiss} style={styles.overlay} />
      <PanGestureHandler
        onGestureEvent={animatedEvent}
        onHandlerStateChange={onHandlerStateChanged}>
        <Animated.View style={[styles.modal, modalAnimationStyle]}>
          <View style={styles.indicator} />
          {children && children}
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  );
};
