export interface SkillCategory {
  name: string;
  skills: string[];
  icon?: string;
}

export const skills: SkillCategory[] = [
  {
    name: 'Machine Learning / Data Science',
    skills: [
      'TensorFlow',
      'Keras',
      'scikit-learn',
      'pandas',
      'Model Training',
      'Evaluation',
      'EDA'
    ]
  },
  {
    name: 'Programming',
    skills: [
      'Python',
      'Java',
      'Bash',
      'SQL',
      'Git'
    ]
  },
  {
    name: 'Engineering + Tools',
    skills: [
      'Bioinformatics (RNA-Seq, MD simulations)',
      '3D Modeling',
      'AutoCAD'
    ]
  },
  {
    name: 'Software / Web',
    skills: [
      'FastAPI',
      'React',
      'REST APIs',
      'Cloud Deployment'
    ]
  }
];

