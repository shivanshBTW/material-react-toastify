import * as React from 'react';
import cx from 'clsx';

import { Toast } from './Toast';
import { CloseButton } from './CloseButton';
import { Slide } from './Transitions';
import {
  POSITION,
  DEFAULT,
  parseClassName,
  objectValues,
  isFn
} from '../utils';
import { Bounce } from './Transitions';
import { POSITION, Direction, Default, parseClassName, isFn } from '../utils';
import { useToastContainer } from '../hooks';
import { ToastContainerProps, ToastPosition } from '../types';

export const ToastContainer: React.FC<ToastContainerProps> = props => {
  const { getToastToRender, containerRef, isToastActive } = useToastContainer(
    props
  );
  const { className, style, rtl, containerId } = props;

  function getClassName(position: ToastPosition) {
    const defaultClassName = cx(
      `${Default.CSS_NAMESPACE}__toast-container`,
      `${Default.CSS_NAMESPACE}__toast-container--${position}`,
      { [`${Default.CSS_NAMESPACE}__toast-container--rtl`]: rtl }
    );
    return isFn(className)
      ? className({
          position,
          rtl,
          defaultClassName
        })
      : cx(defaultClassName, parseClassName(className));
  }

  return (
    <div
      ref={containerRef}
      className={Default.CSS_NAMESPACE as string}
      id={containerId as string}
    >
      {getToastToRender((position, toastList) => {
        const containerStyle: React.CSSProperties = !toastList.length
          ? { ...style, pointerEvents: 'none' }
          : { ...style };

        return (
          <div
            className={getClassName(position)}
            style={containerStyle}
            key={`container-${position}`}
          >
            {toastList.map(({ content, props: toastProps }) => {
              return (
                <Toast
                  {...toastProps}
                  isIn={isToastActive(toastProps.toastId)}
                  key={`toast-${toastProps.key}`}
                  closeButton={
                    toastProps.closeButton === true
                      ? CloseButton
                      : toastProps.closeButton
                  }
                >
                  {content}
                </Toast>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

ToastContainer.defaultProps = {
  position: POSITION.BOTTOM_LEFT as ToastPosition,
  transition: Slide,
  rtl: false,
  autoClose: 3000,
  hideProgressBar: true,
  closeButton: CloseButton,
  pauseOnHover: true,
  pauseOnFocusLoss: true,
  closeOnClick: true,
  newestOnTop: false,
  draggable: true,
  draggablePercent: Default.DRAGGABLE_PERCENT as number,
  draggableDirection: Direction.X,
  role: 'alert',
  theme: 'light'
};
