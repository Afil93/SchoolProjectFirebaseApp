import { SchoolFirebasePage } from './app.po';

describe('school-firebase App', () => {
  let page: SchoolFirebasePage;

  beforeEach(() => {
    page = new SchoolFirebasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
