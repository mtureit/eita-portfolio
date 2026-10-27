import type { Content } from './types'

// Source of truth: docs/content.md. Items marked 【要確認】 there are left out here.
const ja: Content = {
  locale: 'ja',
  meta: {
    title: '松浦 瑛太 | Eita Matsuura',
    description:
      '長岡技術科学大学 5年一貫制博士課程。多言語キャリア支援と機械学習の研究、Web と AI の開発をしている松浦瑛太のポートフォリオ。',
  },
  nav: {
    profile: '経歴',
    research: '研究',
    works: '制作物',
    contact: '連絡先',
    switchLabel: 'Switch language to English',
    switchHref: '/en/',
  },
  hero: {
    greeting: '> はじめまして',
    name: '松浦 瑛太',
    nameLatin: 'Eita Matsuura',
    avatarLabel: '温泉につかるみかんのドット絵',
    intro:
      '長岡技術科学大学 5年一貫制博士課程 1年。多言語キャリア支援 × 機械学習を研究しながら、Web と AI のプロダクトをつくっています。',
    now: 'いま: ホーチミン市工科大学（2026.09–12）',
    worksButton: '制作物を見る ▼',
  },
  profile: {
    heading: '経歴',
    affiliationLabel: '所属',
    affiliation: [
      '長岡技術科学大学 大学院工学研究科',
      '5年一貫制博士課程 技術科学イノベーション専攻 1年',
      '機械学習理論研究室',
    ],
    activitiesLabel: '課外',
    activities: '技大祭実行委員会 NUTFES（Web・アプリ開発）',
    timeline: [
      { date: '2004', text: '愛媛県に生まれる' },
      {
        date: '〜2024.03',
        text: '新居浜工業高等専門学校 電子制御工学科（卒業研究: 3D スキャナーを用いたアバターの商用的な利用）',
      },
      { date: '2024.04', text: '長岡技術科学大学 工学部 情報・経営システム工学分野に3年次編入' },
      { date: '2026.04', text: '5年一貫制博士課程に進学' },
      {
        date: '2026.09–12',
        text: 'ホーチミン市工科大学（ベトナム）でリサーチインターンシップ',
        current: true,
      },
    ],
  },
  research: {
    heading: '研究',
    items: [
      {
        venue: 'SITA2025',
        title: '生成AI型キャリアパス提案システムにおける高校生の意思決定行動の分析',
      },
      { venue: 'SITA2026', title: '音声合成の読み誤り検出における評価基準の定式化' },
    ],
  },
  works: {
    heading: '制作物',
    noImage: '[スクリーンショット]',
    items: [
      {
        name: '技大祭ホームページ',
        description: '第44回技大祭（2025年9月）の公式サイト。',
        tech: ['Next.js', 'Tailwind CSS'],
        image: '/works/nutfes-44th.jpg',
      },
      {
        name: 'NUTMEG-Seeds',
        description: '勉強会の記録（だれが・何を・どの技術で学んだか）を管理する Web アプリ。',
        tech: ['Next.js', 'Ruby on Rails', 'Docker'],
        image: '/works/nutmeg-seeds.png',
      },
      {
        name: 'バクロック',
        description: '二度寝すると秘密が Slack に暴露される強制起床アプリ。',
        tech: ['Expo', 'React Native'],
        image: '/works/bakulock.jpg',
      },
    ],
  },
  contact: {
    heading: '連絡先',
    message: '研究や開発のご相談は、お気軽にどうぞ。',
    emailLabel: 'メール',
    email: 's243366@stn.nagaokaut.ac.jp',
  },
  boot: {
    lines: [
      '長岡技術科学大学',
      '機械学習理論研究室',
      '研究データ',
      '制作物 3件',
      '現在地: ホーチミン',
      '準備完了',
    ],
    skip: 'スキップ',
    replay: '起動画面をもう一度見る',
    loading: '読み込み中',
  },
}

export default ja
