import { FantasyESportsPage } from './app.po';

describe('fantasy-e-sports App', function() {
  let page: FantasyESportsPage;

  beforeEach(() => {
    page = new FantasyESportsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
