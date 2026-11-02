export const flowerMessages = [
  '谢谢你走进我的生活。',
  '你是我最想分享日常的人。',
  '和你在一起以后，很多普通的日子都有了意义。',
  '我最喜欢的不是热闹，而是你在我身边。',
];

export interface LetterParagraph {
  title: string;
  text: string;
}

/** 全部为明确的填写提示，请用自己的话替换；支持 \n 换行。 */
export const letterData = {
  salutation: '亲爱的你：',
  preview: '有些喜欢，藏在每天的晚安里。\n有些心意，想在今天郑重地交给你。',
  paragraphs: [
    { title: '回忆过去', text: '【在这里写下你们的真实故事】\n还记得第一次相遇时的心情吗？可以从一个你一直珍藏的小细节开始写。' },
    { title: '感谢现在', text: '【在这里写下你此刻的感谢】\n那些被认真对待的日常、被好好接住的情绪，都可以慢慢写在这里。' },
    { title: '期待未来', text: '【在这里写下对未来的期待】\n想一起去的地方、想一起完成的事情，或只是继续分享每一个普通的明天。' },
  ] satisfies LetterParagraph[],
  closing: '有些话，写下来还不够。\n所以，我还准备了一份特别的礼物。',
  signature: '【你的昵称】',
};
