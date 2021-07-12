import React from 'react';
import { mount } from 'enzyme';
import { Paragraph } from './index';
import { ParagraphVariant } from './enums';

const variantInput: ParagraphVariant[] = [
  ParagraphVariant.Intro,
  ParagraphVariant.Heavy,
  ParagraphVariant.Regular,
  ParagraphVariant.HeavySmall,
  ParagraphVariant.RegularSmall,
  ParagraphVariant.HeavyTiny,
  ParagraphVariant.RegularTiny,
  ParagraphVariant.Hidden,
];

const textContent = 'Paragraph Component';

describe('<Paragraph />', () => {
  test('should render class name and content properly', () => {
    variantInput.forEach((variant) => {
      const wrapper = mount(
        <Paragraph variant={variant as ParagraphVariant}>
          {textContent}
        </Paragraph>,
      );
      const textComponent = wrapper.find('p');
      expect(textComponent.hasClass(variant)).toBe(true);
      expect(textComponent.text()).toBe(textContent);
    });
  });
});
