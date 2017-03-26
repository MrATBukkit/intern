import { InternPage } from './app.po';

describe('intern App', () => {
  let page: InternPage;

  beforeEach(() => {
    page = new InternPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
