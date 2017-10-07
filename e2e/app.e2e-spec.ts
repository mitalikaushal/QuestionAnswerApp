import { QuestionAnswerPage } from './app.po';

describe('question-answer App', function() {
  let page: QuestionAnswerPage;

  beforeEach(() => {
    page = new QuestionAnswerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
