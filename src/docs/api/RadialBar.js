export default {
  name: 'RadialBar',
  props: [
    {
      name: 'cx',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The x-coordinate of center.',
    }, {
      name: 'cy',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The y-coordinate of center.',
    }, {
      name: 'startAngle',
      type: 'Number',
      defaultVal: 180,
      isOptional: false,
      desc: 'The start angle of all the bars.',
    }, {
      name: 'endAngle',
      type: 'Number',
      defaultVal: 0,
      isOptional: false,
      desc: 'The end angle of all the bars.',
    }, {
      name: 'maxAngle',
      type: 'Number',
      defaultVal: '135',
      isOptional: false,
      desc: 'The angle of the value which has the max absolute value, which should be a positive number and less than Math.abs(endAngle - startAngle).',
    }, {
      name: 'minAngle',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The minimum angle of each bar.',
    }, {
      name: 'legendType',
      type: 'String',
      defaultVal: '\'rect\'',
      isOptional: false,
      desc: 'The type of icon in legend, which can be \'line\', \'scatter\', \'square\', \'rect\'.',
    }, {
      name: 'label',
      type: 'Boolean | Object | ReactElement',
      defaultVal: 'false',
      isOptional: false,
      desc: 'If false set, labels will not be drawed. If true set, labels will be drawed which have the props calculated internally. If object set, labels will be drawed which have the props mergered by the internal calculated props and the option. If ReactElement set, the option can be the custom label element.',
    }, {
      name: 'background',
      type: 'Boolean | Object | ReactElement',
      defaultVal: 'false',
      isOptional: false,
      desc: 'If false set, background of bars will not be drawed. If true set, background of bars will be drawed which have the props calculated internally. If object set, background of bars will be drawed which have the props mergered by the internal calculated props and the option. If ReactElement set, the option can be the custom background element.',
    }, {
      name: 'data',
      type: 'Array',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The source data which each element is an object.',
    }, {
      name: 'isAnimationActive',
      type: 'Boolean',
      defaultVal: 'true',
      isOptional: false,
      desc: 'If set false, animation of radial bars will be disabled.',
    }, {
      name: 'animationBegin',
      type: 'Number',
      defaultVal: 0,
      isOptional: false,
      desc: 'Defines when the animation should begin.',
    }, {
      name: 'animationDuration',
      type: 'Number',
      defaultVal: 1500,
      isOptional: false,
      desc: 'Specifies the duration of animation, the unit of this option is ms.',
    }, {
      name: 'animationEasing',
      type: `'ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear'`,
      defaultVal: `'ease'`,
      isOptional: false,
      desc: 'The type of easing function.',
    },
  ],
  examples: [

  ]
};
