export type GashaponCategory = 'compliment' | 'memory' | 'date' | 'wish' | 'ssr';

export interface GashaponPrize {
  id: string;
  category: GashaponCategory;
  label: string;
  text: string;
}

/** 惊喜池文案可修改；回忆类仅为提示，不编造真实经历。 */
export const gashaponData: GashaponPrize[] = [
  { id: 'compliment-1', category: 'compliment', label: '心动夸夸', text: '恭喜抽到全世界最可爱的男朋友。' },
  { id: 'compliment-2', category: 'compliment', label: '心动夸夸', text: '你认真生活的时候真的很迷人。' },
  { id: 'compliment-3', category: 'compliment', label: '心动夸夸', text: '谢谢你一直对我这么好。' },
  { id: 'memory-1', category: 'memory', label: '回忆盲盒', text: '一起翻开我们的第一张合照吧。' },
  { id: 'memory-2', category: 'memory', label: '回忆盲盒', text: '选一张喜欢的照片，说说它背后的故事。' },
  { id: 'date-1', category: 'date', label: '约会兑换', text: '一次由我安排的约会。' },
  { id: 'date-2', category: 'date', label: '约会兑换', text: '一顿你最喜欢的美食。' },
  { id: 'date-3', category: 'date', label: '约会兑换', text: '一次电影之夜。' },
  { id: 'date-4', category: 'date', label: '约会兑换', text: '一次散步夜谈。' },
  { id: 'wish-1', category: 'wish', label: '未来愿望', text: '一起去看海上日落。' },
  { id: 'wish-2', category: 'wish', label: '未来愿望', text: '一起去新的城市。' },
  { id: 'wish-3', category: 'wish', label: '未来愿望', text: '一起迎接下一个2000天。' },
  { id: 'ssr', category: 'ssr', label: 'SSR · 限定惊喜', text: '恭喜你抽中了一个永久有效的女朋友。' },
];
