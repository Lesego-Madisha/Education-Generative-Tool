import React, { useState } from 'react';
import './ContentGenerator.css';

const SUBJECTS = [
  {
    id: 'mathematics',
    name: 'Mathematics',
    icon: '📐',
    description: 'Core mathematical concepts and problem-solving skills',
    topics: [
      'Algebra and Functions',
      'Geometry and Trigonometry',
      'Statistics and Probability',
      'Calculus (Advanced)',
      'Number Theory'
    ],
    gradeRange: 'Grades 1-12',
    keySkills: [
      'Analytical thinking',
      'Problem-solving',
      'Logical reasoning',
      'Mathematical modeling'
    ]
  },
  {
    id: 'science',
    name: 'Science',
    icon: '🔬',
    description: 'Natural sciences including physics, chemistry, and biology',
    topics: [
      'Physics Principles',
      'Chemical Reactions',
      'Biology and Life Sciences',
      'Earth Sciences',
      'Scientific Method'
    ],
    gradeRange: 'Grades 1-12',
    keySkills: [
      'Scientific inquiry',
      'Experimental design',
      'Data analysis',
      'Critical thinking'
    ]
  },
  {
    id: 'english',
    name: 'English',
    icon: '📚',
    description: 'Language arts, literature, and communication skills',
    topics: [
      'Reading Comprehension',
      'Writing Skills',
      'Grammar and Vocabulary',
      'Literature Analysis',
      'Communication'
    ],
    gradeRange: 'Grades 1-12',
    keySkills: [
      'Reading comprehension',
      'Writing proficiency',
      'Critical analysis',
      'Communication'
    ]
  },
  {
    id: 'history',
    name: 'History',
    icon: '🏛️',
    description: 'World history, civilizations, and cultural studies',
    topics: [
      'World History',
      'Local History',
      'Cultural Studies',
      'Historical Analysis',
      'Geography'
    ],
    gradeRange: 'Grades 1-12',
    keySkills: [
      'Historical analysis',
      'Research skills',
      'Cultural awareness',
      'Critical thinking'
    ]
  },
  {
    id: 'technology',
    name: 'Technology',
    icon: '💻',
    description: 'Computer science, digital literacy, and programming',
    topics: [
      'Digital Literacy',
      'Programming Basics',
      'Web Technologies',
      'Computer Systems',
      'Digital Safety'
    ],
    gradeRange: 'Grades 4-12',
    keySkills: [
      'Digital literacy',
      'Problem-solving',
      'Logical thinking',
      'Technical skills'
    ]
  },
  {
    id: 'arts',
    name: 'Arts',
    icon: '🎨',
    description: 'Visual arts, music, and creative expression',
    topics: [
      'Visual Arts',
      'Music',
      'Drama',
      'Art History',
      'Creative Expression'
    ],
    gradeRange: 'Grades 1-12',
    keySkills: [
      'Creativity',
      'Artistic expression',
      'Cultural appreciation',
      'Technical skills'
    ]
  },
  {
    id: 'sepedi',
    name: 'Sepedi',
    icon: '🗣️',
    description: 'Sepedi (Northern Sotho) is one of South Africa\'s official languages, focusing on language development, literature, and oral traditions.',
    topics: [
      'Oral Traditions',
      'Reading and Comprehension',
      'Writing Skills',
      'Grammar and Vocabulary',
      'Cultural Heritage'
    ],
    gradeRange: 'Grades 1-12',
    keySkills: [
      'Listening',
      'Speaking',
      'Reading',
      'Writing',
      'Cultural appreciation'
    ]
  },
  {
    id: 'afrikaans',
    name: 'Afrikaans',
    icon: '🗣️',
    description: 'Afrikaans is one of South Africa\'s official languages, focusing on grammar, literature, communication, and cultural heritage.',
    topics: [
      'Reading and Comprehension',
      'Writing Skills',
      'Grammar and Vocabulary',
      'Literature and Poetry',
      'Cultural Heritage'
    ],
    gradeRange: 'Grades 1-12',
    keySkills: [
      'Listening',
      'Speaking',
      'Reading',
      'Writing',
      'Cultural appreciation'
    ]
  },
  {
    id: 'isizulu',
    name: 'isiZulu',
    icon: '🗣️',
    description: 'isiZulu is the most widely spoken home language in South Africa, focusing on oral and written communication, literature, and cultural heritage.',
    topics: [
      'Oral Traditions',
      'Reading and Comprehension',
      'Writing Skills',
      'Grammar and Vocabulary',
      'Cultural Heritage'
    ],
    gradeRange: 'Grades 1-12',
    keySkills: [
      'Listening',
      'Speaking',
      'Reading',
      'Writing',
      'Cultural appreciation'
    ]
  },
  {
    id: 'setswana',
    name: 'Setswana',
    icon: '🗣️',
    description: 'Setswana is one of South Africa\'s official languages, focusing on language development, literature, and cultural identity.',
    topics: [
      'Oral Traditions',
      'Reading and Comprehension',
      'Writing Skills',
      'Grammar and Vocabulary',
      'Cultural Heritage'
    ],
    gradeRange: 'Grades 1-12',
    keySkills: [
      'Listening',
      'Speaking',
      'Reading',
      'Writing',
      'Cultural appreciation'
    ]
  },
  {
    id: 'geography',
    name: 'Geography',
    icon: '🌍',
    description: 'Geography explores the Earth\'s landscapes, environments, and the relationships between people and their environments.',
    topics: [
      'Physical Geography',
      'Human Geography',
      'Map Skills',
      'Environmental Issues',
      'Geographical Research'
    ],
    gradeRange: 'Grades 4-12',
    keySkills: [
      'Spatial thinking',
      'Map reading',
      'Research',
      'Critical analysis',
      'Environmental awareness'
    ]
  }
];

const EDUCATIONAL_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7',
    alt: 'Students collaborating on a project',
    category: 'Collaboration',
    description: 'Students working together on group projects to enhance team-building skills and peer learning.',
    tips: 'Great for: Group assignments, peer learning, and developing communication skills'
  },
  {
    url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b',
    alt: 'Modern classroom setup',
    category: 'Classroom',
    description: 'A modern classroom environment designed to facilitate both traditional and interactive learning methods.',
    tips: 'Great for: Flexible learning spaces, technology integration, and student engagement'
  },
  {
    url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754',
    alt: 'Science laboratory session',
    category: 'Science',
    description: 'Students engaged in hands-on science experiments in a well-equipped laboratory.',
    tips: 'Great for: Practical experiments, scientific method demonstration, and safety procedures'
  },
  {
    url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',
    alt: 'Digital learning with computers',
    category: 'Technology',
    description: 'Students utilizing modern technology and computers for enhanced digital learning experiences.',
    tips: 'Great for: Digital literacy, online research, and computer-based learning'
  },
  {
    url: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45',
    alt: 'Library and study resources',
    category: 'Resources',
    description: 'A well-stocked library providing diverse learning resources and quiet study spaces.',
    tips: 'Great for: Research projects, independent study, and resource management'
  },
  {
    url: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d',
    alt: 'Teacher student interaction',
    category: 'Teaching',
    description: 'Teacher providing personalized guidance and support to students.',
    tips: 'Great for: One-on-one instruction, mentoring, and student support'
  }
];

const PROMPT_TEMPLATES = [
  { 
    label: 'Lesson Plan', 
    value: 'lesson', 
    template: 'Create a comprehensive lesson plan for a combined primary and secondary school class.'
  },
  { 
    label: 'Learning Activity', 
    value: 'activity', 
    template: 'Develop an engaging learning activity suitable for both primary and secondary students.'
  },
  { 
    label: 'Assessment Material', 
    value: 'assessment', 
    template: 'Generate assessment materials that accommodate different learning levels.'
  },
  { 
    label: 'Parent Communication', 
    value: 'parent', 
    template: 'Write a clear and informative communication for parents about school activities.'
  },
  { 
    label: 'Educational Resource', 
    value: 'resource', 
    template: 'Create an educational resource that can be used across different grade levels.'
  }
];

const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

const ContentGenerator: React.FC = () => {
  const [promptType, setPromptType] = useState(PROMPT_TEMPLATES[0].value);
  const [selectedSubject, setSelectedSubject] = useState<string>('');
  const [subjectDetails, setSubjectDetails] = useState<typeof SUBJECTS[0] | null>(null);
  const [customParam1, setCustomParam1] = useState('');
  const [customParam2, setCustomParam2] = useState('');
  const [customParam3, setCustomParam3] = useState('');
  const [output, setOutput] = useState('');
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [selectedImageDetails, setSelectedImageDetails] = useState<typeof EDUCATIONAL_IMAGES[0] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [performance, setPerformance] = useState<{ time?: number; tokens?: number }>({});

  const handleSubjectSelect = (subject: typeof SUBJECTS[0]) => {
    setSelectedSubject(subject.id);
    setCustomParam1(subject.name);
    setSubjectDetails(subjectDetails?.id === subject.id ? null : subject);
  };

  const handleImageSelect = (imageUrl: string) => {
    setSelectedImages(prev => {
      if (prev.includes(imageUrl)) {
        return prev.filter(url => url !== imageUrl);
      }
      return [...prev, imageUrl].slice(0, 3); // Limit to 3 selected images
    });
  };

  const handleImageClick = (image: typeof EDUCATIONAL_IMAGES[0]) => {
    setSelectedImageDetails(selectedImageDetails?.url === image.url ? null : image);
  };

  const buildPrompt = () => {
    const template = PROMPT_TEMPLATES.find(t => t.value === promptType)?.template || '';
    return `${template}\nSubject Area: ${customParam1}\nGrade Level: ${customParam2}\nLearning Objectives: ${customParam3}`;
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setOutput('');
    const start = Date.now();
    const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
    if (!apiKey) {
      setError('Gemini API key not found. Please check your .env file.');
      setLoading(false);
      return;
    }
    const prompt = buildPrompt();
    try {
      const response = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      });
      const data = await response.json();
      
      if (data.candidates && data.candidates[0]?.content?.parts[0]?.text) {
        setOutput(data.candidates[0].content.parts[0].text);
        setPerformance({ time: Date.now() - start, tokens: data.usageMetadata?.totalTokens || undefined });
      } else if (data.error) {
        setError(data.error.message || 'Unknown error from Gemini API.');
      } else {
        setError('No content generated.');
      }
    } catch (err: any) {
      setError('Failed to connect to Gemini API.');
    }
    setLoading(false);
  };

  const handleExport = () => {
    const selectedImagesInfo = selectedImages
      .map((url, index) => {
        const image = EDUCATIONAL_IMAGES.find(img => img.url === url);
        return `${index + 1}. ${image?.category}: ${image?.description}\n   Tips: ${image?.tips}`;
      })
      .join('\n\n');

    const content = `${output}\n\nSelected Educational Resources:\n${selectedImagesInfo}`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'educational-content.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="content-generator-container">
      <div className="header">
        <h1>Educational Content Creator</h1>
        <p className="subtitle">Create professional educational content for combined primary and secondary schools</p>
      </div>

      <div className="main-content">
        <div className="input-section">
          <form onSubmit={handleGenerate} className="content-generator-form">
            <div className="form-group">
              <label>
                Content Type:
                <select value={promptType} onChange={e => setPromptType(e.target.value)}>
                  {PROMPT_TEMPLATES.map(t => (
                    <option key={t.value} value={t.value}>{t.label}</option>
                  ))}
                </select>
              </label>
            </div>

            <div className="subjects-section">
              <h3>Select Subject</h3>
              <div className="subjects-grid">
                {SUBJECTS.map(subject => (
                  <div
                    key={subject.id}
                    className={`subject-item ${selectedSubject === subject.id ? 'selected' : ''}`}
                    onClick={() => handleSubjectSelect(subject)}
                  >
                    <span className="subject-icon">{subject.icon}</span>
                    <span className="subject-name">{subject.name}</span>
                  </div>
                ))}
              </div>

              {subjectDetails && (
                <div className="subject-details">
                  <h4>{subjectDetails.icon} {subjectDetails.name}</h4>
                  <p className="subject-description">{subjectDetails.description}</p>
                  <div className="subject-info">
                    <div className="info-section">
                      <h5>Key Topics</h5>
                      <ul>
                        {subjectDetails.topics.map((topic: string, index: number) => (
                          <li key={index}>{topic}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="info-section">
                      <h5>Key Skills</h5>
                      <ul>
                        {subjectDetails.keySkills.map((skill: string, index: number) => (
                          <li key={index}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="grade-range">
                      <h5>Grade Range</h5>
                      <p>{subjectDetails.gradeRange}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="form-group">
              <label>
                Grade Level:
                <input 
                  value={customParam2} 
                  onChange={e => setCustomParam2(e.target.value)} 
                  placeholder="e.g., Grades 4-7, Grades 8-12"
                  required 
                />
              </label>
            </div>

            <div className="form-group">
              <label>
                Learning Objectives:
                <input 
                  value={customParam3} 
                  onChange={e => setCustomParam3(e.target.value)} 
                  placeholder="e.g., Understanding basic algebra, Developing critical thinking"
                  required 
                />
              </label>
            </div>

            <div className="image-gallery">
              <h3>Select Supporting Images (up to 3)</h3>
              <p className="gallery-tip">Click an image to view more details</p>
              <div className="image-grid">
                {EDUCATIONAL_IMAGES.map((image, index) => (
                  <div 
                    key={index} 
                    className={`image-item ${selectedImages.includes(image.url) ? 'selected' : ''}`}
                  >
                    <div 
                      className="image-container"
                      onClick={() => handleImageClick(image)}
                    >
                      <img src={image.url} alt={image.alt} />
                      <div className="image-category">{image.category}</div>
                    </div>
                    <button 
                      className={`select-button ${selectedImages.includes(image.url) ? 'selected' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleImageSelect(image.url);
                      }}
                    >
                      {selectedImages.includes(image.url) ? 'Selected' : 'Select Image'}
                    </button>
                  </div>
                ))}
              </div>

              {selectedImageDetails && (
                <div className="image-details-modal">
                  <div className="modal-content">
                    <h4>{selectedImageDetails.category}</h4>
                    <img src={selectedImageDetails.url} alt={selectedImageDetails.alt} />
                    <p className="image-description">{selectedImageDetails.description}</p>
                    <p className="image-tips">{selectedImageDetails.tips}</p>
                    <button 
                      className="close-button"
                      onClick={() => setSelectedImageDetails(null)}
                    >
                      Close Details
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button type="submit" disabled={loading || !selectedSubject} className="generate-button">
              {loading ? 'Generating...' : 'Generate Content'}
            </button>
          </form>
        </div>

        <div className="output-section">
          {error && <div className="error-message">{error}</div>}
          
          {output && (
            <div className="generated-content">
              <h3>Generated Content</h3>
              <div className="content-box">
                <pre>{output}</pre>
              </div>
              
              {selectedImages.length > 0 && (
                <div className="selected-images">
                  <h3>Selected Supporting Images</h3>
                  <div className="selected-images-grid">
                    {selectedImages.map((url, index) => {
                      const image = EDUCATIONAL_IMAGES.find(img => img.url === url);
                      return (
                        <div 
                          key={index} 
                          className="selected-image"
                          onClick={() => image && handleImageClick(image)}
                        >
                          <img src={url} alt={image?.alt} />
                          <div className="image-info">
                            <span className="image-category">{image?.category}</span>
                            <span className="image-description">{image?.description}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              
              <button onClick={handleExport} className="export-button">
                Export Content
              </button>
            </div>
          )}

          {performance.time && (
            <div className="performance-stats">
              <p>Generated in {(performance.time / 1000).toFixed(2)}s</p>
              {performance.tokens && <p>Used {performance.tokens} tokens</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentGenerator; 