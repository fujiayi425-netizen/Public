export type SceneId =
  | 'welcome'
  | 'invitation'
  | 'memories'
  | 'stars'
  | 'wishes'
  | 'gashapon'
  | 'letter'
  | 'final';

export interface SceneInfo {
  id: SceneId;
  name: string;
  englishName: string;
  description: string;
}

export const sceneLabels: SceneInfo[] = [
  { id: 'welcome', name: '宇宙序章', englishName: 'A SECRET BETWEEN US', description: '三个秘密，通往只属于我们的星球。' },
  { id: 'invitation', name: '星际邀请', englishName: 'OUR LITTLE UNIVERSE', description: '有一封来自小宇宙的邀请函，正在等你。' },
  { id: 'memories', name: '时光木马', englishName: 'OUR LITTLE MEMORIES', description: '让那些闪闪发亮的日常，再慢一点。' },
  { id: 'stars', name: '星星低语', englishName: 'STARS KNOW I LOVE YOU', description: '每一颗星星，都替我藏着一句话。' },
  { id: 'wishes', name: '愿望放飞', englishName: 'SEND OUR WISHES TO THE STARS', description: '把愿望交给天空，把未来写成我们。' },
  { id: 'gashapon', name: '心动扭蛋', englishName: 'A LITTLE SURPRISE FOR YOU', description: '把一点惊喜，装进今天的口袋。' },
  { id: 'letter', name: '字里花间', englishName: 'A LETTER JUST FOR YOU', description: '有一些话，想安静地写给你。' },
  { id: 'final', name: '下个2000天', englishName: 'TO MY FAVORITE PERSON', description: '2000 days down, forever to go.' },
];

export const siteData = {
  name: '2000 DAYS',
  subtitle: 'A LITTLE UNIVERSE FOR US',
  chineseName: '星球来信',
  anniversaryDays: 2000,
  nextMilestoneDays: 4000,
  // 真实昵称和纪念日期请在 finalCardData.ts 填写。
  scenes: sceneLabels,
  welcome: {
    eyebrow: 'A SECRET BETWEEN US',
    title: '宇宙很大，\n偏偏遇见了你。',
    description: '把 2000 个平凡的日子，\n藏进一颗只属于我们的小星球。',
    english: 'Two thousand days. A little universe. You & me.',
    footnote: 'ONLY SOMEONE SPECIAL CAN ENTER.',
  },
  invitation: {
    salutation: 'TO MY FAVORITE PERSON',
    title: '一封邀请，\n寄往你的心里。',
    paragraphs: [
      '今天，是我们在一起的第 2000 天。',
      '我为你准备了一个小小的世界，\n里面有回忆、有惊喜，还有好多想对你说的话。',
    ],
  },
};
