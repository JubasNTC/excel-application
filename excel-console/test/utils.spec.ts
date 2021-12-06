import { describe, it } from 'mocha';
import * as sinon from 'sinon';

import { TABLE_STUB } from '../src/constants';
import { printTable } from '../src/utils';

describe('printTable', (): void => {
  it('with valid stub table should print it', (): void => {
    const log: sinon.SinonSpy<any[], void> = sinon.spy(console, 'log');

    printTable(TABLE_STUB);

    if (!log.calledOnceWith(TABLE_STUB)) {
      throw new Error('console.log was not called with valid stub table');
    }
  });
});
