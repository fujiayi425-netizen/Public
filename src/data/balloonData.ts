export interface BalloonColor {
  id: string;
  name: string;
  value: string;
}

export const balloonColors: BalloonColor[] = [
  { id: 'blue', name: '雾霾蓝', value: '#A9BDD7' },
  { id: 'cream', name: '奶油白', value: '#F8F7F3' },
  { id: 'lavender', name: '浅紫色', value: '#D6D0E5' },
  { id: 'rose', name: '豆沙粉', value: '#D9B9C2' },
  { id: 'silver', name: '星光银', value: '#E8EDF5' },
];

export const balloonShapes = [
  { id: 'round', name: '圆形' },
  { id: 'heart', name: '爱心' },
  { id: 'star', name: '星星' },
] as const;

export const balloonData = {
  introduction: '想把愿望交给天空，也想把未来交给你。',
  placeholder: '写一个，想和你一起实现的愿望……',
  maxLength: 80,
  releaseMessage: '愿望已抵达星空。未来的路，我们慢慢一起走。',
  storageKey: '2000-days-wishes-v1',
};
