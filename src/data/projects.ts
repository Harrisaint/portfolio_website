export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: 'ML' | 'Full-Stack' | 'Research' | 'BME';
  technologies: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'accesslens',
    title: 'AccessLens',
    description: 'Full-Stack AR Accessibility Platform (Hackathon Winner)',
    longDescription: 'A comprehensive AR accessibility platform featuring real-time face recognition, gesture control, and scene description capabilities. Built with cutting-edge browser-based ML pipelines and a scalable Firebase backend.',
    category: 'Full-Stack',
    technologies: ['MediaPipe', 'TensorFlow.js', 'Firebase', 'React', 'WebRTC'],
    highlights: [
      'Real-time AR accessibility features: face recognition, gesture control, scene description',
      '<100 ms latency for seamless user experience',
      'Built browser-based ML pipelines',
      'Architected scalable Firebase backend',
      'Hackathon Winner'
    ],
    featured: true,
    githubUrl: 'https://github.com/Btmoy1122/AccessLens',
    liveUrl: 'https://accesslens1.vercel.app'
  },
  {
    id: 'breast-tumor-classification',
    title: 'Breast Tumor Classification',
    description: 'Deep Learning on BreakHis Dataset with 93% Validation Accuracy',
    longDescription: 'Advanced deep learning model for breast tumor classification using MobileNetV2 architecture. Implemented focal loss, data augmentation, and class weighting strategies to achieve high performance on imbalanced medical imaging data.',
    category: 'ML',
    technologies: ['TensorFlow', 'MobileNetV2', 'FastAPI', 'React', 'Vercel', 'Render'],
    highlights: [
      '93% validation accuracy, F1 = 0.95',
      'Focal loss + augmentation + class weighting',
      'FastAPI backend with React frontend',
      'Cloud deployment with Vercel + Render'
    ],
    featured: true,
    githubUrl: 'https://github.com/Harrisaint/ML_Binary_Tumor_Cell_Classifier',
    liveUrl: 'https://cancer-histology-detection.vercel.app/'
  },
  {
    id: 'clinical-data-pipeline',
    title: 'Cloud Integrated Clinical Data Pipeline & Risk Analytics',
    description: 'End-to-end clinical data pipeline with Power BI dashboard for Clinical Decision Support',
    longDescription: 'Architected a comprehensive clinical data pipeline hosting 132,000+ synthetic patient records on AWS RDS with integrated NEWS2 and AHA risk standards. Built an interactive Power BI dashboard featuring propensity modeling and physiological variance analysis.',
    category: 'Research',
    technologies: ['AWS RDS', 'Power Query (M)', 'Power BI', 'Data Analytics'],
    highlights: [
      'End-to-end clinical data pipeline hosting 132,000+ synthetic patient records on AWS RDS',
      'Custom risk engine using Power Query (M) with NEWS2/AHA standards, identifying 100% risk correlation in Class II/III obesity groups (BMI > 35)',
      'Interactive Power BI dashboard with binned propensity modeling and physiological variance analysis'
    ],
    featured: true
  }
];

export const projectCategories = ['All', 'ML', 'Full-Stack', 'Research', 'BME'] as const;

