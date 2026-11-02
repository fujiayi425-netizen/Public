export interface StarMessage {
  id: string;
  text: string;
  /** 未来互动阶段可用作爱心星轨的必点星星。 */
  isSecret: boolean;
}

/** 可直接修改的情话文案；不代表已发生的个人经历。 */
export const starMessages: StarMessage[] = [
  '你出现以后，普通的日子也像被星光照过。',
  '2000天以后，我还是最想和你分享今天。',
  '如果世界很大，那我最确定的坐标就是你。',
  '你是我愿意一次又一次奔向的人。',
  '希望每一个平凡的明天，都有你在身边。',
  '想把所有细碎的温柔，都慢慢说给你听。',
  '宇宙很大，但偏爱可以很具体。',
  '谢谢你，让陪伴有了温度。',
  '和你一起，慢一点也很好。',
  '愿我们一直拥有，把日常过成纪念日的心情。',
  '今天喜欢你，明天也会。',
  '下一颗星星，也想和你一起看。',
].map((text, index) => ({ id: `star-${index + 1}`, text, isSecret: index < 6 }));

export const secretStarMessage = '原来宇宙也偷偷记得我们。';
