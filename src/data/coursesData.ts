
export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  students: number;
}

export const courses: Course[] = [
  {
    id: "1",
    title: "אלגוריתמים",
    description: "למד את היסודות של אלגוריתמים וכיצד ליישם אותם",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
    category: "computer-science",
    level: "intermediate",
    students: 1245
  },
  {
    id: "2",
    title: "מבני נתונים",
    description: "הבן את מבני הנתונים הבסיסיים והמתקדמים",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    category: "computer-science",
    level: "beginner",
    students: 986
  },
  {
    id: "3",
    title: "פיתוח אתרים מתקדם",
    description: "למד כיצד לבנות אתרים מודרניים עם טכנולוגיות חדשניות",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop",
    category: "web-development",
    level: "advanced",
    students: 865
  },
  {
    id: "4",
    title: "בינה מלאכותית",
    description: "הכר את עולם הבינה המלאכותית ולמידת המכונה",
    image: "https://images.unsplash.com/photo-1677442135133-4da72bba535f?q=80&w=2070&auto=format&fit=crop",
    category: "ai-ml",
    level: "intermediate",
    students: 1432
  },
  {
    id: "5",
    title: "אבטחת מידע",
    description: "למד את העקרונות החשובים של אבטחת מידע וסייבר",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2070&auto=format&fit=crop",
    category: "security",
    level: "intermediate",
    students: 721
  },
  {
    id: "6",
    title: "פיתוח משחקים",
    description: "צור משחקים מרהיבים ואינטראקטיביים",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop",
    category: "game-development",
    level: "beginner",
    students: 943
  },
  {
    id: "7",
    title: "מסדי נתונים",
    description: "הבן כיצד לתכנן, לבנות ולנהל מסדי נתונים",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2021&auto=format&fit=crop",
    category: "database",
    level: "intermediate",
    students: 635
  },
  {
    id: "8",
    title: "תכנות מונחה עצמים",
    description: "הבן את העקרונות של תכנות מונחה עצמים",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop",
    category: "programming",
    level: "beginner",
    students: 1056
  }
];
