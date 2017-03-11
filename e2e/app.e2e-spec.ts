import { ProjectnamePage } from './app.po';

describe('projectname App', () => {
  let page: ProjectnamePage;

  beforeEach(() => {
    page = new ProjectnamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
