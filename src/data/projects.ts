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
    id: 'orthographic-design-analysis',
    title: 'AI-Assisted Orthographic Design Analysis',
    description: 'BME Research: Comparing Human vs LLM-Generated AutoCAD Designs',
    longDescription: 'Research project analyzing the workflow and accuracy trade-offs between human-engineered and LLM-generated technical drawings. Developed prompt engineering strategies for high-quality technical drawing generation.',
    category: 'Research',
    technologies: ['AutoCAD', 'Python', 'LLM APIs', 'Data Analysis'],
    highlights: [
      'Comparing human vs LLM-generated AutoCAD designs',
      'Prompt development for high-quality technical drawings',
      'Analyzing workflow + accuracy trade-offs'
    ],
    featured: true
  }
];

export const projectCategories = ['All', 'ML', 'Full-Stack', 'Research', 'BME'] as const;

