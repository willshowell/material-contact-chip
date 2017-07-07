import { MaterialContactChipPage } from './app.po';

describe('material-contact-chip App', () => {
  let page: MaterialContactChipPage;

  beforeEach(() => {
    page = new MaterialContactChipPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
