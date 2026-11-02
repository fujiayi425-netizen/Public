export interface QuizQuestion {
  id: string;
  question: string;
  options: [string, string, string];
  /** 正确选项的下标，从 0 开始。当前均为待替换示例。 */
  correctAnswer: number;
}

/** 请用真实问题和选项替换全部示例。当前版本只展示场景，不执行答题验证。 */
export const quizData: QuizQuestion[] = [
  { id: 'first-meeting', question: '我们第一次见面的日期是？', options: ['待填写日期 A', '待填写日期 B', '待填写日期 C'], correctAnswer: 0 },
  { id: 'nickname', question: '我最喜欢你叫我的昵称是？', options: ['待填写昵称 A', '待填写昵称 B', '待填写昵称 C'], correctAnswer: 0 },
  { id: 'first-place', question: '我们第一次一起去的地方是？', options: ['待填写地点 A', '待填写地点 B', '待填写地点 C'], correctAnswer: 0 },
];

export const quizRetryMessage = '哎呀，再想一想，我相信你一定记得。';
