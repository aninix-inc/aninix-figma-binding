/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * [DEPRECATED] Was used in model v0. Check if we can remove it.
 */
export type EntityType = string;
export type VisibleInViewport = boolean;
export type PropertiesExpanded = boolean;
export type BlurRadius = number;
export type EffectType = "DROP_SHADOW" | "LAYER_BLUR" | "BACKGROUND_BLUR" | "INNER_SHADOW";
export type ShadowRadius = number;
/**
 * @minItems 4
 * @maxItems 4
 */
export type ShadowColor = [number, number, number, number];
/**
 * @minItems 2
 * @maxItems 2
 */
export type ShadowOffset = [number, number];
export type ShadowSpread = number;
export type BlendMode =
  | "PASS_THROUGH"
  | "NORMAL"
  | "DARKEN"
  | "MULTIPLY"
  | "LINEAR_BURN"
  | "COLOR_BURN"
  | "LIGHTEN"
  | "SCREEN"
  | "LINEAR_DODGE"
  | "COLOR_DODGE"
  | "OVERLAY"
  | "SOFT_LIGHT"
  | "HARD_LIGHT"
  | "DIFFERENCE"
  | "EXCLUSION"
  | "HUE"
  | "SATURATION"
  | "COLOR"
  | "LUMINOSITY";
/**
 * System component used on entities link entity to specific component. Used on keyframes to connect them to properties.
 */
export type Target = string;
export type Time = number;
/**
 * @minItems 2
 * @maxItems 2
 */
export type MatrixTransform = [[number, number, number], [number, number, number]];
/**
 * @minItems 4
 * @maxItems 4
 */
export type TimingCurve = [number, number, number, number];
/**
 * @minItems 3
 * @maxItems 3
 */
export type SpringCurve = [number, number, number];
/**
 * Holds ID of the animation preset to further work. Probably in future would be changed to reference instead of plain string.
 */
export type PresetId = string;
/**
 * System component used on entities link entity to another entity. Used on keyframes to connect them to curve styles.
 */
export type Reference = string;
export type Number = number;
/**
 * @minItems 2
 * @maxItems 2
 */
export type Point2D = [number, number];
/**
 * @minItems 4
 * @maxItems 4
 */
export type Rgba = [number, number, number, number];
/**
 * @minItems 6
 * @maxItems 6
 */
export type SpatialPoint2D = [number, number, number, number, number, number];
export type Name = string;
/**
 * Used to determine exporting file scaling factor
 */
export type RenderScaleType = "0.5x" | "0.75x" | "1x" | "1.5x" | "2x" | "3x" | "4x";
/**
 * Used to determine exporting file format
 */
export type RenderType = "mp4" | "webm" | "ogv" | "lottie" | "dotlottie" | "tgs" | "svg" | "gif" | "png";
/**
 * Define custom suffix for rendered file
 */
export type RenderSuffix = string;
export type StartAngle = number;
export type EndAngle = number;
export type InnerRadius = number;
export type NodeType =
  | "GENERIC"
  | "BOOLEAN_OPERATION"
  | "COMPONENT"
  | "ELLIPSE"
  | "INSTANCE"
  | "FRAME"
  | "GROUP"
  | "LINE"
  | "POLYGON"
  | "RECTANGLE"
  | "STAR"
  | "TEXT"
  | "VECTOR";
export type NodeColor =
  | "BLUE"
  | "PURPLE"
  | "PINK"
  | "GREEN"
  | "TURQOUISE"
  | "RED"
  | "ORANGE"
  | "YELLOW"
  | "GREY"
  | "NONE";
export type Solo = "NONE" | "VIEWPORT" | "TIMELINE" | "BOTH";
export type Locked = boolean;
/**
 * Determine if current entity is mask or not
 */
export type Mask = boolean;
export type Effects = [] | [string];
export type StrokeAlign = "CENTER" | "INSIDE" | "OUTSIDE";
export type StrokeCapStart =
  | "NONE"
  | "ROUND"
  | "SQUARE"
  | "ARROW_LINES"
  | "ARROW_EQUILATERAL"
  | "TRIANGLE_FILLED"
  | "DIAMOND_FILLED"
  | "CIRCLE_FILLED";
export type StrokeCapEnd =
  | "NONE"
  | "ROUND"
  | "SQUARE"
  | "ARROW_LINES"
  | "ARROW_EQUILATERAL"
  | "TRIANGLE_FILLED"
  | "DIAMOND_FILLED"
  | "CIRCLE_FILLED";
export type StrokeJoin = "MITER" | "BEVEL" | "ROUND";
export type StrokeWeight = number;
export type Dash = number;
export type DashOffset = number;
export type Gap = number;
export type SmoothCornerRadius = boolean;
export type CornerRadius = number;
/**
 * Determine anchor point of the layer and how it should behave
 * in terms of scale, size or rotation transformations.
 *
 * @minItems 2
 * @maxItems 2
 */
export type AnchorPoint = [number, number];
/**
 * @minItems 6
 * @maxItems 6
 */
export type Position = [number, number, number, number, number, number];
export type Rotation = number;
export type Opacity = number;
/**
 * @minItems 2
 * @maxItems 2
 */
export type Scale = [number, number];
export type ScaleLocked = boolean;
/**
 * @minItems 2
 * @maxItems 2
 */
export type Size = [number, number];
export type SizeLocked = boolean;
/**
 * @minItems 2
 * @maxItems 2
 */
export type Skew = [number, number];
export type Fills = [] | [string];
export type Strokes = [] | [string];
export type StartTime = number;
export type Duration = number;
export type TrimStart = number;
export type TrimEnd = number;
export type TrimOffset = number;
export type PathReversed = boolean;
/**
 * Holds external node id so data can be synced with external systems
 */
export type ExternalNodeId = string;
export type Children = [] | [string];
export type ClipContent = boolean;
export type ChildrenExpanded = boolean;
export type IndividualStrokeWeight = boolean;
export type StrokeTopWeight = number;
export type StrokeRightWeight = number;
export type StrokeBottomWeight = number;
export type StrokeLeftWeight = number;
export type IndividualCornerRadius = boolean;
/**
 * Determine if frame is an entry point of a render tree
 */
export type Entry = boolean;
export type TopLeftCornerRadius = number;
export type TopRightCornerRadius = number;
export type BottomRightCornerRadius = number;
export type BottomLeftCornerRadius = number;
/**
 * ID of the main node, stores the Aninix ID. Works similar to 'mainComponent' property in Figma.
 * To retrieve 'external-node-id' you have to call 'entity.getComponent(MainNodeIdComponent)?.getComponent(ExternalNodeIdComponent)'
 */
export type MainNodeComponentId = string;
export type PointCount = number;
export type Fps = number;
/**
 * @minItems 1
 * @maxItems 1
 */
export type VectorPaths = [
  {
    windingRule?: "NONZERO" | "EVENODD" | "NONE";
    data?: string;
    [k: string]: unknown;
  }
];
export type SizeBehaviour = "FILL" | "IGNORE";
export type Progress = number;
export type PaintType = "SOLID" | "GRADIENT_LINEAR" | "GRADIENT_RADIAL" | "IMAGE";
export type Hash = string;
export type ScaleType = "FILL" | "FIT" | "CROP" | "TILE";
/**
 * @minItems 2
 * @maxItems 2
 */
export type ImageTransform = [[number, number, number], [number, number, number]];
export type ScalingFactor = number;
export type ColorStops = [] | [string];
/**
 * @minItems 2
 * @maxItems 2
 */
export type GradientTransform = [[number, number, number], [number, number, number]];

/**
 * Aninix's snapshot types schema definition
 */
export interface AninixSnapshot {
  schemaVersion: 2;
  entities: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[a-zA-Z0-9]+$".
     */
    [k: string]:
      | BackgroundBlur
      | DropShadow
      | InnerShadow
      | LayerBlur
      | MatrixTransformKey
      | NumberKey
      | Point2DKey
      | RgbaKey
      | SpatialPoint2DKey
      | CurveStyle
      | ExportPreset
      | Ellipse
      | Frame
      | Group
      | Instance
      | Line
      | Polygon
      | Rectangle
      | Root
      | Star
      | Text
      | Vector
      | ColorStop
      | ImagePaint
      | LinearGradientPaint
      | RadialGradientPaint
      | SolidPaint;
  };
  [k: string]: unknown;
}
export interface BackgroundBlur {
  /**
   * Unique entity identifier
   */
  id: string;
  /**
   * Type of the entity
   */
  tag: "backgroundBlur";
  /**
   * Current schema version of the entity
   */
  schemaVersion: 1;
  components: {
    entityType: EntityType;
    visibleInViewport: VisibleInViewport;
    propertiesExpanded: PropertiesExpanded;
    blurRadius: BlurRadius;
    effectType: EffectType;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
export interface DropShadow {
  /**
   * Unique entity identifier
   */
  id: string;
  /**
   * Type of the entity
   */
  tag: "dropShadow";
  /**
   * Current schema version of the entity
   */
  schemaVersion: 1;
  components: {
    entityType: EntityType;
    visibleInViewport: VisibleInViewport;
    propertiesExpanded: PropertiesExpanded;
    shadowRadius: ShadowRadius;
    shadowColor: ShadowColor;
    shadowOffset: ShadowOffset;
    shadowSpread: ShadowSpread;
    effectType: EffectType;
    blendMode: BlendMode;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
export interface InnerShadow {
  /**
   * Unique entity identifier
   */
  id: string;
  /**
   * Type of the entity
   */
  tag: "innerShadow";
  /**
   * Current schema version of the entity
   */
  schemaVersion: 1;
  components: {
    entityType: EntityType;
    visibleInViewport: VisibleInViewport;
    propertiesExpanded: PropertiesExpanded;
    shadowRadius: ShadowRadius;
    shadowColor: ShadowColor;
    shadowOffset: ShadowOffset;
    shadowSpread: ShadowSpread;
    effectType: EffectType;
    blendMode: BlendMode;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
export interface LayerBlur {
  /**
   * Unique entity identifier
   */
  id: string;
  /**
   * Type of the entity
   */
  tag: "layerBlur";
  /**
   * Current schema version of the entity
   */
  schemaVersion: 1;
  components: {
    entityType: EntityType;
    visibleInViewport: VisibleInViewport;
    propertiesExpanded: PropertiesExpanded;
    blurRadius: BlurRadius;
    effectType: EffectType;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
export interface MatrixTransformKey {
  /**
   * Unique entity identifier
   */
  id: string;
  /**
   * Type of the entity
   */
  tag: "matrixTransformKey";
  /**
   * Current schema version of the entity
   */
  schemaVersion: 1;
  components: {
    entityType: EntityType;
    target: Target;
    time: Time;
    matrixTransform: MatrixTransform;
    timingCurve?: TimingCurve;
    springCurve?: SpringCurve;
    presetId?: PresetId;
    reference?: Reference;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
export interface NumberKey {
  /**
   * Unique entity identifier
   */
  id: string;
  /**
   * Type of the entity
   */
  tag: "numberKey";
  /**
   * Current schema version of the entity
   */
  schemaVersion: 1;
  components: {
    entityType: EntityType;
    target: Target;
    time: Time;
    number: Number;
    timingCurve?: TimingCurve;
    springCurve?: SpringCurve;
    presetId?: PresetId;
    reference?: Reference;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
export interface Point2DKey {
  /**
   * Unique entity identifier
   */
  id: string;
  /**
   * Type of the entity
   */
  tag: "point2dKey";
  /**
   * Current schema version of the entity
   */
  schemaVersion: 1;
  components: {
    entityType: EntityType;
    target: Target;
    time: Time;
    point2d: Point2D;
    timingCurve?: TimingCurve;
    springCurve?: SpringCurve;
    presetId?: PresetId;
    reference?: Reference;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
export interface RgbaKey {
  /**
   * Unique entity identifier
   */
  id: string;
  /**
   * Type of the entity
   */
  tag: "rgbaKey";
  /**
   * Current schema version of the entity
   */
  schemaVersion: 1;
  components: {
    entityType: EntityType;
    target: Target;
    time: Time;
    rgba: Rgba;
    timingCurve?: TimingCurve;
    springCurve?: SpringCurve;
    presetId?: PresetId;
    reference?: Reference;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
export interface SpatialPoint2DKey {
  /**
   * Unique entity identifier
   */
  id: string;
  /**
   * Type of the entity
   */
  tag: "spatialPoint2dKey";
  /**
   * Current schema version of the entity
   */
  schemaVersion: 1;
  components: {
    entityType: EntityType;
    target: Target;
    time: Time;
    spatialPoint2d: SpatialPoint2D;
    timingCurve?: TimingCurve;
    springCurve?: SpringCurve;
    presetId?: PresetId;
    reference?: Reference;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
export interface CurveStyle {
  /**
   * Unique entity identifier
   */
  id: string;
  /**
   * Type of the entity
   */
  tag: "curveStyle";
  /**
   * Current schema version of the entity
   */
  schemaVersion: 1;
  components: {
    entityType: EntityType;
    name: Name;
    timingCurve?: TimingCurve;
    springCurve?: SpringCurve;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
export interface ExportPreset {
  /**
   * Unique entity identifier
   */
  id: string;
  /**
   * Type of the entity
   */
  tag: "exportPreset";
  /**
   * Current schema version of the entity
   */
  schemaVersion: 1;
  components: {
    entityType: EntityType;
    renderScaleType: RenderScaleType;
    renderType: RenderType;
    renderSuffix: RenderSuffix;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
export interface Ellipse {
  /**
   * Unique entity identifier
   */
  id: string;
  /**
   * Type of the entity
   */
  tag: "ellipse";
  /**
   * Current schema version of the entity
   */
  schemaVersion: 1;
  components: {
    name: Name;
    entityType: EntityType;
    startAngle: StartAngle;
    endAngle: EndAngle;
    innerRadius: InnerRadius;
    nodeType: NodeType;
    nodeColor: NodeColor;
    solo: Solo;
    locked: Locked;
    visibleInViewport: VisibleInViewport;
    propertiesExpanded: PropertiesExpanded;
    blendMode: BlendMode;
    mask: Mask;
    effects: Effects;
    strokeAlign: StrokeAlign;
    strokeCapStart: StrokeCapStart;
    strokeCapEnd: StrokeCapEnd;
    strokeJoin: StrokeJoin;
    strokeWeight: StrokeWeight;
    dash: Dash;
    dashOffset: DashOffset;
    gap: Gap;
    smoothCornerRadius: SmoothCornerRadius;
    cornerRadius: CornerRadius;
    anchorPoint: AnchorPoint;
    position: Position;
    rotation: Rotation;
    opacity: Opacity;
    scale: Scale;
    scaleLocked: ScaleLocked;
    size: Size;
    sizeLocked: SizeLocked;
    skew: Skew;
    fills: Fills;
    strokes: Strokes;
    startTime?: StartTime;
    duration?: Duration;
    trimStart?: TrimStart;
    trimEnd?: TrimEnd;
    trimOffset?: TrimOffset;
    pathReversed?: PathReversed;
    externalNodeId?: ExternalNodeId;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
export interface Frame {
  /**
   * Unique entity identifier
   */
  id: string;
  /**
   * Type of the entity
   */
  tag: "frame";
  /**
   * Current schema version of the entity
   */
  schemaVersion: 1;
  components: {
    name: Name;
    entityType: EntityType;
    children: Children;
    clipContent: ClipContent;
    nodeType: NodeType;
    nodeColor: NodeColor;
    solo: Solo;
    locked: Locked;
    visibleInViewport: VisibleInViewport;
    propertiesExpanded: PropertiesExpanded;
    childrenExpanded: ChildrenExpanded;
    blendMode: BlendMode;
    mask: Mask;
    effects: Effects;
    strokeAlign: StrokeAlign;
    strokeCapStart: StrokeCapStart;
    strokeCapEnd: StrokeCapEnd;
    strokeJoin: StrokeJoin;
    strokeWeight: StrokeWeight;
    individualStrokeWeight: IndividualStrokeWeight;
    strokeTopWeight: StrokeTopWeight;
    strokeRightWeight: StrokeRightWeight;
    strokeBottomWeight: StrokeBottomWeight;
    strokeLeftWeight: StrokeLeftWeight;
    dash: Dash;
    dashOffset: DashOffset;
    gap: Gap;
    smoothCornerRadius: SmoothCornerRadius;
    cornerRadius: CornerRadius;
    individualCornerRadius: IndividualCornerRadius;
    anchorPoint: AnchorPoint;
    position: Position;
    rotation: Rotation;
    opacity: Opacity;
    scale: Scale;
    scaleLocked: ScaleLocked;
    size: Size;
    sizeLocked: SizeLocked;
    skew: Skew;
    fills: Fills;
    strokes: Strokes;
    entry?: Entry;
    topLeftCornerRadius?: TopLeftCornerRadius;
    topRightCornerRadius?: TopRightCornerRadius;
    bottomRightCornerRadius?: BottomRightCornerRadius;
    bottomLeftCornerRadius?: BottomLeftCornerRadius;
    startTime?: StartTime;
    duration?: Duration;
    trimStart?: TrimStart;
    trimEnd?: TrimEnd;
    trimOffset?: TrimOffset;
    pathReversed?: PathReversed;
    externalNodeId?: ExternalNodeId;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
export interface Group {
  /**
   * Unique entity identifier
   */
  id: string;
  /**
   * Type of the entity
   */
  tag: "group";
  /**
   * Current schema version of the entity
   */
  schemaVersion: 1;
  components: {
    name: Name;
    entityType: EntityType;
    children: Children;
    nodeType: NodeType;
    nodeColor: NodeColor;
    solo: Solo;
    locked: Locked;
    visibleInViewport: VisibleInViewport;
    propertiesExpanded: PropertiesExpanded;
    childrenExpanded: ChildrenExpanded;
    blendMode: BlendMode;
    mask: Mask;
    effects: Effects;
    anchorPoint: AnchorPoint;
    position: Position;
    rotation: Rotation;
    opacity: Opacity;
    scale: Scale;
    scaleLocked: ScaleLocked;
    size: Size;
    sizeLocked: SizeLocked;
    skew: Skew;
    startTime?: StartTime;
    duration?: Duration;
    externalNodeId?: ExternalNodeId;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
export interface Instance {
  /**
   * Unique entity identifier
   */
  id: string;
  /**
   * Type of the entity
   */
  tag: "instance";
  /**
   * Current schema version of the entity
   */
  schemaVersion: 1;
  components: {
    name: Name;
    entityType: EntityType;
    children: Children;
    clipContent: ClipContent;
    nodeType: NodeType;
    nodeColor: NodeColor;
    solo: Solo;
    locked: Locked;
    visibleInViewport: VisibleInViewport;
    propertiesExpanded: PropertiesExpanded;
    blendMode: BlendMode;
    mask: Mask;
    effects: Effects;
    strokeAlign: StrokeAlign;
    strokeCapStart: StrokeCapStart;
    strokeCapEnd: StrokeCapEnd;
    strokeJoin: StrokeJoin;
    strokeWeight: StrokeWeight;
    individualStrokeWeight: IndividualStrokeWeight;
    strokeTopWeight: StrokeTopWeight;
    strokeRightWeight: StrokeRightWeight;
    strokeBottomWeight: StrokeBottomWeight;
    strokeLeftWeight: StrokeLeftWeight;
    dash: Dash;
    dashOffset: DashOffset;
    gap: Gap;
    smoothCornerRadius: SmoothCornerRadius;
    cornerRadius: CornerRadius;
    individualCornerRadius: IndividualCornerRadius;
    anchorPoint: AnchorPoint;
    position: Position;
    rotation: Rotation;
    opacity: Opacity;
    scale: Scale;
    scaleLocked: ScaleLocked;
    size: Size;
    sizeLocked: SizeLocked;
    skew: Skew;
    fills: Fills;
    strokes: Strokes;
    mainNodeComponentId: MainNodeComponentId;
    topLeftCornerRadius?: TopLeftCornerRadius;
    topRightCornerRadius?: TopRightCornerRadius;
    bottomRightCornerRadius?: BottomRightCornerRadius;
    bottomLeftCornerRadius?: BottomLeftCornerRadius;
    startTime?: StartTime;
    duration?: Duration;
    trimStart?: TrimStart;
    trimEnd?: TrimEnd;
    trimOffset?: TrimOffset;
    pathReversed?: PathReversed;
    externalNodeId?: ExternalNodeId;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
export interface Line {
  /**
   * Unique entity identifier
   */
  id: string;
  /**
   * Type of the entity
   */
  tag: "line";
  /**
   * Current schema version of the entity
   */
  schemaVersion: 1;
  components: {
    name: Name;
    entityType: EntityType;
    nodeType: NodeType;
    nodeColor: NodeColor;
    solo: Solo;
    locked: Locked;
    visibleInViewport: VisibleInViewport;
    propertiesExpanded: PropertiesExpanded;
    blendMode: BlendMode;
    mask: Mask;
    effects: Effects;
    strokeAlign: StrokeAlign;
    strokeCapStart: StrokeCapStart;
    strokeCapEnd: StrokeCapEnd;
    strokeJoin: StrokeJoin;
    strokeWeight: StrokeWeight;
    dash: Dash;
    dashOffset: DashOffset;
    gap: Gap;
    anchorPoint: AnchorPoint;
    position: Position;
    rotation: Rotation;
    opacity: Opacity;
    scale: Scale;
    scaleLocked: ScaleLocked;
    size: Size;
    sizeLocked: SizeLocked;
    skew: Skew;
    fills: Fills;
    strokes: Strokes;
    startTime?: StartTime;
    duration?: Duration;
    trimStart?: TrimStart;
    trimEnd?: TrimEnd;
    trimOffset?: TrimOffset;
    pathReversed?: PathReversed;
    externalNodeId?: ExternalNodeId;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
export interface Polygon {
  /**
   * Unique entity identifier
   */
  id: string;
  /**
   * Type of the entity
   */
  tag: "polygon";
  /**
   * Current schema version of the entity
   */
  schemaVersion: 1;
  components: {
    name: Name;
    entityType: EntityType;
    pointCount: PointCount;
    nodeType: NodeType;
    nodeColor: NodeColor;
    solo: Solo;
    locked: Locked;
    visibleInViewport: VisibleInViewport;
    propertiesExpanded: PropertiesExpanded;
    blendMode: BlendMode;
    mask: Mask;
    effects: Effects;
    strokeAlign: StrokeAlign;
    strokeCapStart: StrokeCapStart;
    strokeCapEnd: StrokeCapEnd;
    strokeJoin: StrokeJoin;
    strokeWeight: StrokeWeight;
    dash: Dash;
    dashOffset: DashOffset;
    gap: Gap;
    smoothCornerRadius: SmoothCornerRadius;
    cornerRadius: CornerRadius;
    anchorPoint: AnchorPoint;
    position: Position;
    rotation: Rotation;
    opacity: Opacity;
    scale: Scale;
    scaleLocked: ScaleLocked;
    size: Size;
    sizeLocked: SizeLocked;
    skew: Skew;
    fills: Fills;
    strokes: Strokes;
    startTime?: StartTime;
    duration?: Duration;
    trimStart?: TrimStart;
    trimEnd?: TrimEnd;
    trimOffset?: TrimOffset;
    pathReversed?: PathReversed;
    externalNodeId?: ExternalNodeId;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
export interface Rectangle {
  /**
   * Unique entity identifier
   */
  id: string;
  /**
   * Type of the entity
   */
  tag: "rectangle";
  /**
   * Current schema version of the entity
   */
  schemaVersion: 1;
  components: {
    name: Name;
    entityType: EntityType;
    nodeType: NodeType;
    nodeColor: NodeColor;
    solo: Solo;
    locked: Locked;
    visibleInViewport: VisibleInViewport;
    propertiesExpanded: PropertiesExpanded;
    blendMode: BlendMode;
    mask: Mask;
    effects: Effects;
    strokeAlign: StrokeAlign;
    strokeCapStart: StrokeCapStart;
    strokeCapEnd: StrokeCapEnd;
    strokeJoin: StrokeJoin;
    strokeWeight: StrokeWeight;
    individualStrokeWeight: IndividualStrokeWeight;
    strokeTopWeight: StrokeTopWeight;
    strokeRightWeight: StrokeRightWeight;
    strokeBottomWeight: StrokeBottomWeight;
    strokeLeftWeight: StrokeLeftWeight;
    dash: Dash;
    dashOffset: DashOffset;
    gap: Gap;
    smoothCornerRadius: SmoothCornerRadius;
    cornerRadius: CornerRadius;
    individualCornerRadius: IndividualCornerRadius;
    anchorPoint: AnchorPoint;
    position: Position;
    rotation: Rotation;
    opacity: Opacity;
    scale: Scale;
    scaleLocked: ScaleLocked;
    size: Size;
    sizeLocked: SizeLocked;
    skew: Skew;
    fills: Fills;
    strokes: Strokes;
    topLeftCornerRadius?: TopLeftCornerRadius;
    topRightCornerRadius?: TopRightCornerRadius;
    bottomRightCornerRadius?: BottomRightCornerRadius;
    bottomLeftCornerRadius?: BottomLeftCornerRadius;
    startTime?: StartTime;
    duration?: Duration;
    trimStart?: TrimStart;
    trimEnd?: TrimEnd;
    trimOffset?: TrimOffset;
    pathReversed?: PathReversed;
    externalNodeId?: ExternalNodeId;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
export interface Root {
  /**
   * Unique entity identifier
   */
  id: string;
  /**
   * Type of the entity
   */
  tag: "root";
  /**
   * Current schema version of the entity
   */
  schemaVersion: 1;
  components: {
    entityType: EntityType;
    startTime: StartTime;
    duration: Duration;
    name: Name;
    fps: Fps;
    visibleInViewport: VisibleInViewport;
    rgba: Rgba;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
export interface Star {
  /**
   * Unique entity identifier
   */
  id: string;
  /**
   * Type of the entity
   */
  tag: "star";
  /**
   * Current schema version of the entity
   */
  schemaVersion: 1;
  components: {
    name: Name;
    entityType: EntityType;
    pointCount: PointCount;
    innerRadius: InnerRadius;
    nodeType: NodeType;
    nodeColor: NodeColor;
    solo: Solo;
    locked: Locked;
    visibleInViewport: VisibleInViewport;
    propertiesExpanded: PropertiesExpanded;
    blendMode: BlendMode;
    mask: Mask;
    effects: Effects;
    strokeAlign: StrokeAlign;
    strokeCapStart: StrokeCapStart;
    strokeCapEnd: StrokeCapEnd;
    strokeJoin: StrokeJoin;
    strokeWeight: StrokeWeight;
    dash: Dash;
    dashOffset: DashOffset;
    gap: Gap;
    smoothCornerRadius: SmoothCornerRadius;
    cornerRadius: CornerRadius;
    anchorPoint: AnchorPoint;
    position: Position;
    rotation: Rotation;
    opacity: Opacity;
    scale: Scale;
    scaleLocked: ScaleLocked;
    size: Size;
    sizeLocked: SizeLocked;
    skew: Skew;
    fills: Fills;
    strokes: Strokes;
    startTime?: StartTime;
    duration?: Duration;
    trimStart?: TrimStart;
    trimEnd?: TrimEnd;
    trimOffset?: TrimOffset;
    pathReversed?: PathReversed;
    externalNodeId?: ExternalNodeId;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
export interface Text {
  /**
   * Unique entity identifier
   */
  id: string;
  /**
   * Type of the entity
   */
  tag: "text";
  /**
   * Current schema version of the entity
   */
  schemaVersion: 1;
  components: {
    name: Name;
    entityType: EntityType;
    nodeType: NodeType;
    vectorPaths: VectorPaths;
    nodeColor: NodeColor;
    solo: Solo;
    locked: Locked;
    visibleInViewport: VisibleInViewport;
    propertiesExpanded: PropertiesExpanded;
    blendMode: BlendMode;
    mask: Mask;
    effects: Effects;
    strokeAlign: StrokeAlign;
    strokeCapStart: StrokeCapStart;
    strokeCapEnd: StrokeCapEnd;
    strokeJoin: StrokeJoin;
    strokeWeight: StrokeWeight;
    dash: Dash;
    dashOffset: DashOffset;
    gap: Gap;
    smoothCornerRadius: SmoothCornerRadius;
    cornerRadius: CornerRadius;
    anchorPoint: AnchorPoint;
    position: Position;
    rotation: Rotation;
    opacity: Opacity;
    scale: Scale;
    scaleLocked: ScaleLocked;
    size: Size;
    sizeLocked: SizeLocked;
    skew: Skew;
    fills: Fills;
    strokes: Strokes;
    sizeBehaviour: SizeBehaviour;
    startTime?: StartTime;
    duration?: Duration;
    trimStart?: TrimStart;
    trimEnd?: TrimEnd;
    trimOffset?: TrimOffset;
    pathReversed?: PathReversed;
    externalNodeId?: ExternalNodeId;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
export interface Vector {
  /**
   * Unique entity identifier
   */
  id: string;
  /**
   * Type of the entity
   */
  tag: "vector";
  /**
   * Current schema version of the entity
   */
  schemaVersion: 1;
  components: {
    name: Name;
    entityType: EntityType;
    vectorPaths: VectorPaths;
    nodeType: NodeType;
    nodeColor: NodeColor;
    solo: Solo;
    locked: Locked;
    visibleInViewport: VisibleInViewport;
    propertiesExpanded: PropertiesExpanded;
    blendMode: BlendMode;
    mask: Mask;
    effects: Effects;
    strokeAlign: StrokeAlign;
    strokeCapStart: StrokeCapStart;
    strokeCapEnd: StrokeCapEnd;
    strokeJoin: StrokeJoin;
    strokeWeight: StrokeWeight;
    dash: Dash;
    dashOffset: DashOffset;
    gap: Gap;
    smoothCornerRadius: SmoothCornerRadius;
    cornerRadius: CornerRadius;
    anchorPoint: AnchorPoint;
    position: Position;
    rotation: Rotation;
    opacity: Opacity;
    scale: Scale;
    scaleLocked: ScaleLocked;
    size: Size;
    sizeLocked: SizeLocked;
    skew: Skew;
    fills: Fills;
    strokes: Strokes;
    sizeBehaviour: SizeBehaviour;
    startTime?: StartTime;
    duration?: Duration;
    trimStart?: TrimStart;
    trimEnd?: TrimEnd;
    trimOffset?: TrimOffset;
    pathReversed?: PathReversed;
    externalNodeId?: ExternalNodeId;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
export interface ColorStop {
  /**
   * Unique entity identifier
   */
  id: string;
  /**
   * Type of the entity
   */
  tag: "colorStop";
  /**
   * Current schema version of the entity
   */
  schemaVersion: 1;
  components: {
    entityType: EntityType;
    blendMode: BlendMode;
    visibleInViewport: VisibleInViewport;
    propertiesExpanded: PropertiesExpanded;
    rgba: Rgba;
    progress: Progress;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
export interface ImagePaint {
  /**
   * Unique entity identifier
   */
  id: string;
  /**
   * Type of the entity
   */
  tag: "imagePaint";
  /**
   * Current schema version of the entity
   */
  schemaVersion: 1;
  components: {
    entityType: EntityType;
    blendMode: BlendMode;
    visibleInViewport: VisibleInViewport;
    propertiesExpanded: PropertiesExpanded;
    paintType: PaintType;
    hash: Hash;
    scaleType: ScaleType;
    imageTransform: ImageTransform;
    scalingFactor: ScalingFactor;
    rotation: Rotation;
    opacity: Opacity;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
export interface LinearGradientPaint {
  /**
   * Unique entity identifier
   */
  id: string;
  /**
   * Type of the entity
   */
  tag: "linearGradientPaint";
  /**
   * Current schema version of the entity
   */
  schemaVersion: 1;
  components: {
    entityType: EntityType;
    blendMode: BlendMode;
    visibleInViewport: VisibleInViewport;
    propertiesExpanded: PropertiesExpanded;
    colorStops: ColorStops;
    opacity: Opacity;
    gradientTransform: GradientTransform;
    paintType: PaintType;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
export interface RadialGradientPaint {
  /**
   * Unique entity identifier
   */
  id: string;
  /**
   * Type of the entity
   */
  tag: "radialGradientPaint";
  /**
   * Current schema version of the entity
   */
  schemaVersion: 1;
  components: {
    entityType: EntityType;
    blendMode: BlendMode;
    visibleInViewport: VisibleInViewport;
    propertiesExpanded: PropertiesExpanded;
    colorStops: ColorStops;
    opacity: Opacity;
    gradientTransform: GradientTransform;
    paintType: PaintType;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
export interface SolidPaint {
  /**
   * Unique entity identifier
   */
  id: string;
  /**
   * Type of the entity
   */
  tag: "solidPaint";
  /**
   * Current schema version of the entity
   */
  schemaVersion: 1;
  components: {
    entityType: EntityType;
    blendMode: BlendMode;
    visibleInViewport: VisibleInViewport;
    propertiesExpanded: PropertiesExpanded;
    rgba: Rgba;
    paintType: PaintType;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
