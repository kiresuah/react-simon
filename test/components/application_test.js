import React from 'react';
import { fRender, expect, storageMock } from '../test_helper';

import Application from '../../src/components/application';

describe('Application', () => {
  let component;
  window.localStorage = storageMock();

  const state = {
  };

  beforeEach(() => {
    component = fRender(<Application />);
  });

  it('Renders something', () => {
    expect(component).to.exist;
  });

});
