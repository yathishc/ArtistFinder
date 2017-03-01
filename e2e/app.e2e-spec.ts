import { MyMusicPage } from './app.po';

describe('my-music App', () => {
  let page: MyMusicPage;

  beforeEach(() => {
    page = new MyMusicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
