import * as React from 'react';

export interface SplitPaneProps {
    allowResize?: boolean;
    className?: string;
    split?: 'vertical' | 'horizontal';
    resizerSize?: number;
}

export interface SplitPaneState {
    useInitial: boolean;
    resized: boolean;
    active: boolean;
    dimensions: number[];
    sizes: number[];
    ratios: number[];
}

declare class SplitPane extends React.Component<SplitPaneProps, SplitPaneState> {
    constructor();

    onMouseDown(event: MouseEvent): void;
    onMouseMove(event: MouseEvent): void;
    onMouseUp(event: MouseEvent): void;
    onTouchStart(event: TouchEvent): void;
    onTouchMove(event: TouchEvent): void;
    onMove(event: TouchEvent): void;
    onDown(event: TouchEvent): void;
    calculateSize(): void;
    resize(): void;

    static defaultProps: SplitPaneProps;
}

interface PaneProps {
  className?: string
  initialSize?: number
  minSize?: number
  maxSize?: number
}

declare class Pane extends React.PureComponent<PaneProps> {
  constructor();

  static defaultProps: PaneProps;
}

interface ResizerProps {
  index: number
  split?: 'horizontal' | 'vertical'
  onClick?: (event: MouseEvent) => void;
  onDoubleClick?: (event: MouseEvent) => void;
  onMouseDown?: (event: MouseEvent) => void;
  onTouchEnd?: (event: MouseEvent) => void;
  onTouchStart?: (event: MouseEvent) => void;
}

declare class Resizer extends React.Component<ResizerProps> {
  static defaultProps: ResizerProps;
}

export { SplitPane, Pane, Resizer };
