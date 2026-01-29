import type { Project } from './types';

// IMPORTANT / 注意事项:
// 1. Please place your images in the 'public' folder. 
//    请将图片放入 'public' 文件夹。
// 2. Rename them to match these paths (hero-1.jpg, etc.).
//    请将图片重命名为对应名称。
// 3. Ensure images are RGB mode (not CMYK). 
//    确保图片是 RGB 模式（而非 CMYK）。

export const HERO_IMAGES = [
  "/hero-1.jpg",
  "/hero-2.JPG",
  "/hero-3.JPG",
  "/hero-4.jpg",
  "/hero-5.jpg",
  "/hero-6.jpg",
  "/hero-7.5.jpg",
  "/hero-7.jpg",
  "/hero-9.jpg",
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Peculiarities',
    role: 'Lighting Designer',
    year: '2025',
    venue: 'Playwrights Horizon Theater School',
    productionCompany: 'Playwrights Horizon',
    category: 'Design',
    description: 'A memory play utilizing fractured light to represent the fragility of memory. The lighting design focused on creating isolated pockets of warmth amidst a cold, blue void, emphasizing the isolation of the characters.',
    coverImage: 'pec-5.JPG',
    credits: [
      { role: 'Lighting', name: 'Joy Zhang' },
      { role: 'Directed/Written by', name: 'Chava Clayman' },
      { role: 'Set', name: 'Yvonne Lou' },
      { role: 'Sound', name: 'Grace Kelly' },
      { role: 'Costumes', name: 'Ella Freeman' },
      { role: 'Performed by', name: 'Mercer Sadlier, Kiana Jones, Priyal Sahai' },
      { role: 'Photos', name: 'Ahreumbi Rew' }
    ],
    gallery: [
      'pec-1.JPG',
      'pec-2.jpg',
      'pec-3.jpg',
      'pec-4.jpg',
      'pec-5.JPG',
      'pec-7.JPG',
      'pec-8.jpg',
      'pec-9.JPG',
    ]
  },
  {
    id: 'p2',
    title: 'Between the Lines',
    role: 'Lighting Designer',
    year: '2025',
    venue: 'Playwrights Horizon Theater School',
    productionCompany: 'Playwrights Horizon',
    category: 'Design',
    description: 'A brutalist interpretation of the Scottish Play. The performance focused on the physical deterioration of the character, mirrored by the imposing concrete structures of the set.',
    coverImage: 'between-1.jpg',
    credits: [
      { role: 'Lighting', name: 'Joy Zhang' },
      { role: 'Directed/Written by', name: 'Clark Worden' },
      { role: 'Composer', name: 'Emma Redmon' },
      { role: 'Set', name: 'Peyton Wild' },
      { role: 'Sound', name: 'Grace Kelly' },
      { role: 'Costume', name: 'Via Michel' },
      { role: 'Performed by', name: 'Kaylee Ardinger, Benoit Elias-Roberge' },
      { role: 'Photos', name: 'Tejas Sahni' }
    ],
    gallery: [
      'between-1.jpg',
      'between-2.jpg',
      'between-3.jpg',
      'between-4.jpg',
      'between-5.jpg',
      'between-6.jpg',
    ]
  },
  {
    id: 'p3',
    title: 'No Inside',
    role: 'Director/Performer', 
    year: '2025',
    category: ['Directing', 'Performing'],
    description: 'An outdoor production exploring the vastness of nature against the triviality of human waiting. Natural light was supplemented with subtle practicals.',
    coverImage: 'inside-2.jpg',
    credits: [
      { role: 'Directed/Performed by', name: 'Joy Zhang' },
      { role: 'Dramaturgy', name: 'Joy Zhang' },
      { role: 'Director of Photography', name: 'QQ Xing' },
      { role: 'Assistant Camera', name: 'Cloud Dong' },
    ],
    gallery: [
      'inside-1.jpg',
      'inside-2.jpg',
      'inside-3.jpg',
      'inside-4.jpg',
      'inside-5.jpg',
      'inside-6.jpg',
      'inside-7.jpg',
    ]
  },
  {
    id: 'p4',
    title: 'Aurora Leigh',
    role: 'Scenic Designer',
    year: '2025',
    venue: 'Playwrights Horizon Theater School',
    productionCompany: 'Playwrights Horizon',
    category: 'Design',
    description: 'A neon-infused forest blending organic textures with synthetic lighting. The design aimed to disorient and enchant in equal measure.',
    coverImage: 'aurora-2.jpg',
    credits: [
      { role: 'Set', name: 'Joy Zhang' },
      { role: 'Directed by', name: 'Katherine Humes' },
      { role: 'Assistant Directed by', name: 'Colette Pitts' },
      { role: 'Lighting', name: 'Mouna Saab' },
      { role: 'Costumes', name: 'Sasha Nikolaevna' },
      { role: 'Sound', name: 'David Chen' },
      { role: 'Photos', name: 'Colette Pitts' }
    ],
    gallery: [
      'aurora-2.jpg',
      'aurora-3.jpg',
      'aurora-4.jpg',
      'aurora-5.jpg',
    ]
  },
  {
    id: 'p5',
    title: 'Soldada',
    role: 'Lighting Designer',
    year: '2025',
    venue: 'Playwrights Horizon Theater School',
    productionCompany: 'Playwrights Horizon',
    category: 'Design',
    description: 'Immersive theater piece set in a labyrinth. As producer, I oversaw the site-specific logistics and audience journey design.',
    coverImage: 'Soldada-1.jpg',
    credits: [
      { role: 'Lighting', name: 'Joy Zhang' },
      { role: 'Directed/Written by', name: 'Britney Lizbeth Quiroz' },
      { role: 'Assistant Directed by', name: 'Gabi DuPont' },
      { role: 'Set', name: 'JC Chang' },
      { role: 'Costume', name: 'Lake Meritt' },
      { role: 'Sound', name: 'Felix Velez' },
      { role: 'Photos', name: 'Alexandra Herrera' }
    ],
    gallery: [
      'Soldada-1.jpg',
      'Soldada-2.jpg',
      'Soldada-3.jpg',
    ]
  },
  {
    id: 'p6',
    title: 'A Doll‘s House, Part 2',
    role: 'Assistant Producer',
    year: '2024',
    venue: 'Beijing Tianqiao Performing Arts Center',
    productionCompany: 'Ke Theater',
    category: 'Producing',
    description: 'Focused on verticality and water. An raining elevator shaft was the centerpiece of this design.',
    coverImage: 'na-4.jpg',
    credits: [
      { role: 'Assistant Producer', name: 'Joy Zhang' },
      { role: 'Directed by', name: 'Ke Zhou' },
      { role: 'Written by', name: 'Lucas Hnath' },
      { role: 'Artistic Supervisor', name: 'Ziyi Zhang' },
      { role: 'Producer', name: 'Changzhen Bian' },
      { role: 'Associate Producer', name: 'Zhuozheng Yu' },
      { role: 'Set', name: 'Li Shen' },
      { role: 'Lighting', name: 'Dongsheng Ren' },
      { role: 'Costumes', name: 'Da Ke' },
      { role: 'Projector', name: 'Rui Dai' }, 
      { role: 'Sound', name: 'Xiaochen Zhang' },
      { role: 'Photos', name: 'ASTUDIO' }
    ],
    gallery: [
      'na-1.jpg',
      'na-3.jpg',
      'na-4.jpg',
      'na-5.jpg',
    ]
  },
  {
    id: 'p7',
    title: 'Of what is the world made?',
    role: 'Director',
    year: '2024',
    category: ['Directing', 'Performing'],
    description: 'A study in stagnation and longing. The set was comprised of transparent walls that slowly became opaque over the course of the play, trapping the characters visually.',
    coverImage: 'of-5.jpg',
    credits: [
      { role: 'Directed by', name: 'Joy Zhang' },
      { role: 'Performed by', name: 'Joy Zhang, QQ Xing' },
    ],
    gallery: [
      'of-1.jpg',
      'of-2.jpg',
      'of-3.jpg',
      'of-4.jpg',
      'of-5.jpg',
    ]
  },
  {
    id: 'p8',
    title: 'Bones & Flesh',
    role: 'Performer',
    year: '2024',
    venue: 'Playwrights Horizon Theater School',
    productionCompany: 'Playwrights Horizon',
    category: 'Performing',
    description: 'High contrast chiaroscuro lighting defining the solitary existence of the protagonist. The darkness was treated as a character in itself.',
    coverImage: 'bones-1.jpg',
    credits: [
      { role: 'Directed by', name: 'Grace Smith' },
      { role: 'Performer', name: 'Joy Zhang, Dharma Wyatt, Merlin Liao, Richard Xing, Lisa Jiang, Tina Qiu, Bozheng Wang' },
      { role: 'Photos', name: 'Jinjie Wang' }
    ],
    gallery: [
      'bones-1.jpg',
      'bones-2.jpg',
    ]
  },
  {
    id: 'p9',
    title: 'Jing',
    role: 'Performer',
    year: '2023',
    category: 'Performing',
    description: 'Immersive theater piece set in a labyrinth. As producer, I oversaw the site-specific logistics and audience journey design.',
    coverImage: 'jing-1.jpg',
    credits: [
      { role: 'Directed by', name: 'Jing M.' },
      { role: 'Performed by', name: 'Joy Zhang, Suzy Feng, Ren Gu, Icy Liu, Phoebe Lee' },
    ],
    gallery: [
      'jing-1.jpg',
      'jing-2.jpg',
      'jing-3.jpg',
      'jing-4.jpg',
    ]
  },
  {
    id: 'p10',
    title: 'Disorder',
    role: 'Performer',
    year: '2023',
    category: 'Performing',
    description: 'Immersive theater piece set in a labyrinth. As producer, I oversaw the site-specific logistics and audience journey design.',
    coverImage: 'disorder封面.JPG',
    credits: [
      { role: 'Performed by', name: 'Joy Zhang' },
      { role: 'Directed by', name: 'Wangyang Cai' },
      { role: 'Assistant Directed by', name: 'Jiawen Jin' },
      { role: 'Director of Photography', name: 'Fan Wu' },
    ],
    gallery: [
      'disorder-1.jpg',
      'disorder-2.jpg',
      'disorder-3.jpg',
      'disorder-4.jpg',
    ]
  },
];