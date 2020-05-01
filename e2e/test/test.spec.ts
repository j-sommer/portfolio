import { Selector } from 'testcafe';
import { waitForAngular } from 'testcafe-angular-selectors';

const header = Selector('#header');

fixture('test')
  .page('http://localhost:4200')
  .beforeEach(async () => await waitForAngular());

test('should contain a header', async t => {
  await t.expect(header.exists).ok();
});
