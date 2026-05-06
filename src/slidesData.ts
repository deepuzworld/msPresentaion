export type SlideType = 'title' | 'section' | 'content' | 'split' | 'quote' | 'stats' | 'image' | 'code' | 'table' | 'thankyou';

export interface SlideData {
  id: number;
  type: SlideType;
  title?: string;
  subtitle?: string;
  content?: string[];
  quote?: string;
  author?: string;
  stats?: { label: string; value: string }[];
  icon?: string;
  imageUrl?: string;
  code?: string;
  language?: string;
  table?: {
    headers: string[];
    rows: string[][];
  };
  description?: string;
}

export const slides: SlideData[] = [
  // 1. Title Slide
  {
    id: 1,
    type: 'title',
    title: 'MamaSafe',
    subtitle: 'An AI-Driven Support Ecosystem for Postpartum Recovery',
    description: 'Submitted by: Deepak Mathew\nSubmitted to: Afsana T\nDepartment: MCA S4\nRegister No: VAD24MCA15\nRoll No: 16',
    imageUrl: '/scrSh/Pasted image (1).png'
  },
  
  // 2. Abstract
  {
    id: 2,
    type: 'content',
    title: 'Abstract',
    content: [
      'Problem: Postpartum mental health crises often go undetected due to social stigma, fear of judgment, and fragmented information.',
      'Solution – mamaSafe: A centralized digital sanctuary providing:\n• Security: AI Face-Verification for a "Women-Only" community.\n• Monitoring: NurtureAI Chatbot for real-time symptom & sleep tracking.\n• Anonymity: A judgment-free space to discuss "taboo" thoughts.',
      'Goal: To reduce maternal morbidity by detecting "Red Flags" before they escalate into medical emergencies.'
    ],
    icon: 'Activity'
  },

  // 3. Existing Solutions & Their Gaps
  {
    id: 3,
    type: 'content',
    title: 'Existing Solutions & Their Gaps',
    content: [
      'Generic Tele-health: Designed for transactional clinical consultations; lacks continuous emotional tracking.',
      'Fragmented Maternal Apps: Mostly unilateral digital journals; missing secure bidirectional caregiver link.',
      'Self-Reporting Logs: Rely purely on active manual journals, which fail when severe postpartum depression sets in.'
    ],
    icon: 'Search'
  },

  // 4. The Gap We Fill
  {
    id: 4,
    type: 'content',
    title: 'The Gap We Fill',
    content: [
      'The Gap: Traditional postpartum systems are completely disjointed and lack automated emotional screening.',
      'Active Screening: Continuous emotional safety nets using biometric wellness logs and AI face verification.',
      'Spousal Integration: Syncing maternal vitals directly to partner dashboards with real-time SMS alerts.'
    ],
    icon: 'Target'
  },

  // 5. MamaSafe: Core Functionality
  {
    id: 5,
    type: 'content',
    title: 'MamaSafe: Core Functionality',
    content: [
      'Emotion Tracking: Emotion tracking by journaling daily vitals and analyzing chat history.',
      'Women-Only Access: Restricting system entry via secure AI face-verification.',
      'The Partner Bridge: Shared dashboards and real-time safety alerts for spouses.',
      'Specialist Portal: Vetted psychiatric scheduling and direct consultation access.'
    ],
    icon: 'Settings'
  },

  // 6. Underlying Technology
  {
    id: 6,
    type: 'content',
    title: 'Underlying Technology Stack',
    content: [
      'Frontend: Next.js (App Router) & Tailwind CSS',
      'Backend Orchestration: Node.js (Express API Gateway)',
      'AI Microservice: Python, DeepFace, and OpenCV (Haar Cascades)',
      'Database: PostgreSQL & Prisma ORM',
      'Infrastructure: Docker & Docker Compose containerization'
    ],
    icon: 'Cpu'
  },

  // 7. User Roles & Permissions
  {
    id: 7,
    type: 'content',
    title: 'User Roles & Permissions',
    content: [
      'Mother: Logs vitals, completes facial emotion scan, accesses resources, books specialists.',
      'Partner (Caregiver): View-only sync of tracking trends, receives critical SMS alerts on emergency triggers.',
      'Medical Expert: Formulates consult files, publishes educational resources, manages booking slots.',
      'System Admin: Expert credential validation, content moderation, comprehensive audit logging.'
    ],
    icon: 'Users'
  },

  // 8. Key Data Models
  {
    id: 8,
    type: 'content',
    title: 'Key Data Models',
    content: [
      'User & Profile: Mappings of biometric states & medical history.',
      'MoodLog & SleepLog: Continuous physiological and emotional metrics.',
      'AnalysisResult & Alert: Heavy AI calculation results & priority SOS levels.',
      'PartnerBridge: Binding tokens enabling secure caregiver dashboards.'
    ],
    icon: 'Database'
  },

  // 9. DFD Context Diagram (Level 0)
  {
    id: 9,
    type: 'code',
    title: 'Data Flow Diagram (Level 0 - Context Diagram)',
    code: `graph LR
    classDef default fill:#0f172a,stroke:#334155,stroke-width:2px,color:#f8fafc;
    classDef center fill:#1e1b4b,stroke:#4f46e5,stroke-width:3px,color:#f8fafc;
    
    M[Mother]:::default
    MS[(MamaSafe<br/>Support Ecosystem)]:::center
    E[Expert]:::default
    P[Partner / Caregiver]:::default
    A[Admin]:::default

    M --> MS
    MS --> M
    E --> MS
    MS --> E
    P --> MS
    MS --> P
    A --> MS
    MS --> A`,
    language: 'mermaid'
  },

  // 10. DFD Level 1
  {
    id: 10,
    type: 'code',
    title: 'DFD Level 1 (Process Breakdown)',
    code: `graph TD
    classDef default fill:#0f172a,stroke:#334155,stroke-width:2px,color:#f8fafc;
    classDef process fill:#1e1b4b,stroke:#4f46e5,stroke-width:2px,color:#f8fafc;
    
    U[Users]:::default --> Auth((1. User Auth Process)):::process
    Auth --> DB[(Database)]:::process
    U --> Health((2. Health Tracking)):::process
    Health --> AI[[Python AI Service]]:::process
    AI --> DB
    Health --> DB
    U --> Appt((3. Appointment Mgmt)):::process
    Appt --> DB
    U --> Content((4. Content Mgmt)):::process
    Content --> DB`,
    language: 'mermaid'
  },

  // 11. DFD Level 2
  {
    id: 11,
    type: 'code',
    title: 'DFD Level 2 (Health Tracking Focus)',
    code: `graph TD
    classDef default fill:#0f172a,stroke:#334155,stroke-width:2px,color:#f8fafc;
    classDef process fill:#1e1b4b,stroke:#4f46e5,stroke-width:2px,color:#f8fafc;
    
    M[Mother]:::default --> F[Frontend Next.js Component]:::process
    F --> B((Node.js Backend Dispatcher)):::process
    B --> P[[Python AI Microservice]]:::process
    P --> Deep[DeepFace Model]:::process
    Deep --> B
    B --> DB[(PostgreSQL Data Store)]:::process
    DB --> Recharts[Frontend Dashboard Recharts]:::process
    Recharts --> M`,
    language: 'mermaid'
  },





  // 12. Table Design Intro
  {
    id: 12,
    type: 'section',
    title: 'Database Schema & Table Designs',
    subtitle: 'Relational entities managed safely via Prisma ORM',
  },

  // 13. Table 1: User
  {
    id: 13,
    type: 'table',
    title: 'User',
    description: 'Core authentication and profile registry',
    table: {
      headers: ['Column Name', 'Data Type', 'Key/Constraints', 'Description'],
      rows: [
        ['userId', 'UUID', 'Primary Key', 'Unique user identifier'],
        ['email', 'String', 'Unique, Not Null', 'Secure login email'],
        ['passwordHash', 'String', 'Not Null', 'Bcrypt encrypted string'],
        ['role', 'String', 'Enum', "('mother', 'partner', 'professional')"],
        ['faceVerifyStatus', 'Boolean', 'Default(false)', 'Security checkpoint'],
        ['currentMoodScore', 'Decimal', 'Optional', 'Current averaged AI state']
      ]
    }
  },

  // 14. Table 2: Profile
  {
    id: 14,
    type: 'table',
    title: 'Profile',
    description: 'In-depth medical and pregnancy status',
    table: {
      headers: ['Column Name', 'Data Type', 'Key/Constraints', 'Description'],
      rows: [
        ['profileId', 'UUID', 'Primary Key', 'Unique log identifier'],
        ['userId', 'UUID', 'Foreign Key', 'References User.userId'],
        ['firstPregnancy', 'Boolean', 'Not Null', 'Medical logic routing flag'],
        ['historyOfBipolar', 'Boolean', 'Not Null', 'Risk elevation flag'],
        ['babyBirthDate', 'DateTime', 'Optional', 'Postpartum offset tracking']
      ]
    }
  },

  // 15. Table 3: MoodLog & SleepLog
  {
    id: 15,
    type: 'table',
    title: 'MoodLog & SleepLog',
    description: 'Physical well-being trackers',
    table: {
      headers: ['Column Name', 'Data Type', 'Key/Constraints', 'Description'],
      rows: [
        ['EntityId', 'UUID', 'Primary Key', 'Overarching identifier'],
        ['userId', 'UUID', 'Foreign Key', 'Owner reference'],
        ['moodScore/hoursSlept', 'Integer/Float', 'Not Null', 'Mathematical raw inputs'],
        ['notes', 'String', 'Optional', 'Qualitative personal input'],
        ['createdAt', 'DateTime', 'Default(now())', 'Time series mapping']
      ]
    }
  },

  // 16. Table 4: JournalEntry & AnalysisRequest
  {
    id: 16,
    type: 'table',
    title: 'JournalEntry & AnalysisRequest',
    description: 'Text/Voice deep analysis logs',
    table: {
      headers: ['Column Name', 'Data Type', 'Key/Constraints', 'Description'],
      rows: [
        ['journalId', 'UUID', 'Primary Key', 'Journal anchor ID'],
        ['entryType', 'String', 'Enum', "('text', 'voice')"],
        ['content', 'String', 'Text', 'Primary payload'],
        ['sentimentScore', 'Decimal', 'Optional', 'Processed NLP sentiment'],
        ['status', 'String', 'Enum', "Analysis state ('pending', 'processing')"]
      ]
    }
  },

  // 17. Table 5: AnalysisResult & Alert
  {
    id: 17,
    type: 'table',
    title: 'AnalysisResult & Alert',
    description: 'AI Computation outputs and automated warnings',
    table: {
      headers: ['Column Name', 'Data Type', 'Key/Constraints', 'Description'],
      rows: [
        ['analysisId', 'UUID', 'Primary Key', 'Output tracking hash'],
        ['riskScore', 'Float', 'Computation', 'ML deduced danger level'],
        ['detectedFlags', 'JSON', 'Object String', 'Granular issue mapping'],
        ['riskLevel', 'String', 'Enum', "('low', 'warning', 'critical')"],
        ['resolved', 'Boolean', 'Default(false)', 'Medical intervention flag']
      ]
    }
  },

  // 18. Table 6: CommunityPost & ModAudit
  {
    id: 18,
    type: 'table',
    title: 'CommunityPost & ModAudit',
    description: '"Sister Stories" and Administration mechanisms',
    table: {
      headers: ['Column Name', 'Data Type', 'Key/Constraints', 'Description'],
      rows: [
        ['postId', 'UUID', 'Primary Key', 'Social interaction ID'],
        ['category', 'String', 'Indexable', 'Subject matter tagging'],
        ['isFlagged', 'Boolean', 'Default(false)', 'Automatic obscenity blocking'],
        ['actionTaken', 'String', 'Enum', "('Deleted', 'Hidden', 'Warning')"]
      ]
    }
  },

  // 19. Table 7: Expert & Consultation
  {
    id: 19,
    type: 'table',
    title: 'Expert & Consultation',
    description: 'Tele-health scheduling matrices',
    table: {
      headers: ['Column Name', 'Data Type', 'Key/Constraints', 'Description'],
      rows: [
        ['expertId', 'UUID', 'Primary Key', 'Professional entity hash'],
        ['licenseNo', 'String', 'Unique', 'Medical verification string'],
        ['status', 'String', 'Enum', 'Session lifecycle state'],
        ['dateTime', 'DateTime', 'Not Null', 'Allocated time block'],
        ['clinicalNotes', 'String', 'Optional', 'Encrypted medical history']
      ]
    }
  },

  // 20. Table 8: PartnerBridge & TaskTracker
  {
    id: 20,
    type: 'table',
    title: 'PartnerBridge & TaskTracker',
    description: 'Familial connectivity and task assignment',
    table: {
      headers: ['Column Name', 'Data Type', 'Key/Constraints', 'Description'],
      rows: [
        ['bridgeId', 'UUID', 'Primary Key', 'Binding token ID'],
        ['motherUserId', 'UUID', 'Foreign Key', 'Core host reference'],
        ['accessLevel', 'String', 'Matrix', "('ViewOnly', 'AlertsOnly')"],
        ['isComplete', 'Boolean', 'Default(false)', 'Assignable logic flow']
      ]
    }
  },

  // 21. Table 9: RedFlagLog & RedButtonEvent
  {
    id: 21,
    type: 'table',
    title: 'RedFlagLog & RedButtonEvent',
    description: 'Emergency protocols',
    table: {
      headers: ['Column Name', 'Data Type', 'Key/Constraints', 'Description'],
      rows: [
        ['eventId', 'UUID', 'Primary Key', 'Uniquely mapped SOS calls'],
        ['triggerSource', 'String', 'Enum', 'Origin point of SOS array'],
        ['emergencyStatus', 'String', 'Enum', "Lifecycle ('active', 'resolved')"],
        ['severity', 'String', 'Enum', "Scaled ('Low', 'High', 'Critical')"]
      ]
    }
  },

  // 22. Screenshot Section Divider
  {
    id: 22,
    type: 'section',
    title: 'System Screenshots',
    subtitle: 'The interactive, calming glassmorphic user experience of MamaSafe',
  },

  // 23+ Screenshots from scrSh (Pasted image (1).png to Pasted image (23).png)
  ...Array.from({ length: 23 }).map((_, i) => ({
    id: 23 + i,
    type: 'image' as SlideType,
    title: `UI Reference — Screen ${i + 1}`,
    imageUrl: `/scrSh/Pasted image (${i + 1}).png`
  })),

  // 24. Thank You Slide
  {
    id: 46,
    type: 'thankyou' as SlideType,
    title: 'Thank You',
    subtitle: 'MamaSafe — An AI-driven Support Ecosystem for Postpartum Recovery',
    description: 'Developed by Deepak Mathew | MCA S4 | Reg No: VAD24MCA15'
  }
];

