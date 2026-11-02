export interface MemoryPhoto {
  id: string;
  src: string;
  alt: string;
  date: string;
  location: string;
  title: string;
  description: string;
}

/** 图片文件由你提供；缺少图片时界面会展示抽象占位画，不会伪造情侣照片。 */
export const photoData: MemoryPhoto[] = Array.from({ length: 12 }, (_, index) => {
  const number = String(index + 1).padStart(2, '0');
  return {
    id: `memory-${number}`,
    src: `/images/memory-${number}.jpg`,
    alt: `待替换的第 ${index + 1} 张情侣照片`,
    date: '待填写日期',
    location: '待填写地点',
    title: ['把日常，收藏成星光', '属于我们的晴天', '想再回到的那一天', '未完待续的故事'][index % 4],
    description: '在这里写下照片背后的真实回忆。这段文字是占位内容，请换成你们的故事。',
  };
});
