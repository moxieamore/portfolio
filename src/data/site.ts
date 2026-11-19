// Everything about you lives here. The pages read from this file.

export const site = {
  name: 'Juvelyn Samillano',
  role: 'Map data processor, graphic designer and instructor',
  location: 'Antique',
  timezone: 'Asia/Manila',
  email: 'samillanojuvelyn5@gmail.com',
  available: true,
  intro:
    'I process maps and enumeration areas, encode and analyse data, design print and screen work, and taught computer studies at the University of Antique. Most of what I do is careful, detailed work that makes information usable.',
  socials: [
    { label: 'Email', href: 'mailto:samillanojuvelyn5@gmail.com' },
    { label: 'Phone', href: 'tel:+639366952204' },
  ],
  marquee: ['GIS mapping', 'QGIS & QField', 'Map processing', 'Data entry', 'Excel reporting', 'Graphic design', 'PHP & MySQL', 'Python', 'Zapier automation', 'Teaching'],
}

export interface Project {
  slug: string
  title: string
  client: string
  category: string
  year: string
  cover: string
  tint: string
  summary: string
  role: string[]
  deliverables: string[]
  link?: string
  body: string[]
  size: 'large' | 'small'
}

export const projects: Project[] = [
  {
    slug: 'enumeration-areas',
    title: 'Enumeration Areas',
    client: 'Philippine Statistics Authority, Antique',
    category: 'Map data processing',
    year: '2023 to 2024',
    cover: '/images/map-study.jpg',
    tint: '#e6e2d5',
    summary:
      'Drawing and checking enumeration areas for the 2024 census mapping project, and map support for the province’s integrated map processing in 2023.',
    role: ['Map data processing', 'QGIS and QField'],
    deliverables: ['Delineated enumeration areas', 'Cleaned map layers', 'Processing reports'],
    body: [
      'The Philippine Statistics Authority was preparing the Enumeration Area Delineation Project for the 2024 census. Every enumeration area in Antique had to be drawn, checked and consistent before field work could start.',
      'I worked on the map processing side from February to April 2024: preparing base layers, tracing boundaries in QGIS, correcting overlaps and gaps, and keeping the attribute tables clean enough for someone else to check. In late 2023 I did the same kind of work for the Integrated Processing of Maps for Various Activities project.',
      'The slow part is never the drawing. It is reading the source material carefully, matching names to places, and going back over your own work until the boundaries agree with the records.',
    ],
    size: 'large',
  },
  {
    slug: 'mortgage-data',
    title: 'Mortgage Data',
    client: 'Savant Technologies Inc.',
    category: 'Data analysis',
    year: '2021 to 2023',
    cover: '/images/data-study.jpg',
    tint: '#dbe0f5',
    summary:
      'Two and a half years as data analyst and encoder on a real estate mortgage project, keeping records complete and reports accurate.',
    role: ['Data analysis', 'Encoding', 'Reporting'],
    deliverables: ['Encoded mortgage records', 'Clean working datasets', 'Daily and periodic reports'],
    body: [
      'The real estate mortgage project ran on records: loan details, property information and the paperwork attached to both. My job was to keep that data entered correctly, checked against the source documents, and usable by the people reviewing it.',
      'Day to day that meant encoding at a steady pace without losing accuracy, following up on incomplete entries, and building the Excel reports the team used to see where things stood.',
      'Two and a half years of this taught me the habit I still work by: the number on the screen is only worth something if you can trace it back to the page it came from.',
    ],
    size: 'large',
  },
  {
    slug: 'signrays',
    title: 'Signrays',
    client: 'Signrays Advertising Inc., Aklan',
    category: 'Graphic design',
    year: '2018 to 2020',
    cover: '/images/fold.jpg',
    tint: '#e8e2d6',
    summary:
      'Layouts and personalised design for corporate clients, from first concept through client revisions to the final print file.',
    role: ['Graphic design', 'Layout', 'Admin support'],
    deliverables: ['Corporate design work', 'Personalised print projects', 'Daily production reports'],
    body: [
      'I joined Signrays in 2018 as graphic designer and admin, laying out corporate and personalised projects in Adobe Photoshop and Canva while handling the paperwork and the Excel reports for the Aklan branch.',
      'Advertising work runs on revisions and deadlines. You learn to show options early, take feedback without taking it personally, and keep every version named so the right file goes to print.',
      'It is also where I learned to look after the whole job: the client’s brief, the layout, the file setup and the schedule, not just the part that looks good on screen.',
    ],
    size: 'small',
  },
  {
    slug: 'election-day',
    title: 'Election Day',
    client: 'COMELEC, Laua-an, Antique',
    category: 'Technical support',
    year: '2019 and 2022',
    cover: '/images/election.jpg',
    tint: '#e4e0d6',
    summary:
      'Serving as DESO technician for the 2019 and 2022 elections in Laua-an, on the data side of the counting and canvassing operations.',
    role: ['DESO technician', 'On-site support'],
    deliverables: ['Set-up and testing', 'Data entry support', 'Procedure compliance'],
    body: [
      'Election work is a short assignment with no room for improvisation. As a DESO technician for the 2019 and 2022 elections, I worked on the data side of the polling centre’s operations in Laua-an.',
      'The work is preparation and procedure: setting up and testing equipment before the day starts, supporting data entry as results come in, and following the commission’s steps exactly, in order, with someone checking each one.',
      'Two days each time, and the lesson stays: in work like this, following the procedure is the job.',
    ],
    size: 'small',
  },
  {
    slug: 'library-system',
    title: 'Mini Library System',
    client: 'College of Computer Studies, University of Antique',
    category: 'PHP and MySQL',
    year: '2017',
    cover: '/images/meridian.jpg',
    tint: '#d9e6dc',
    summary:
      'A small library system built with PHP and MySQL during my on-the-job training at the College of Computer Studies.',
    role: ['Programming', 'Database'],
    deliverables: ['PHP and MySQL system', 'Borrowing records', 'Documentation'],
    body: [
      'During my on-the-job training at the College of Computer Studies, I was asked to build a mini library system using PHP and MySQL, while also helping students and staff with their paperwork.',
      'The system covered the basics a small library needs: keeping the book list, recording who borrowed what, and returning records to a state someone else could pick up the next day.',
      'It was my first proper lesson in building something other people would use, and in writing down how it works so they could keep using it after me.',
    ],
    size: 'small',
  },
]

export const bySlug = (slug: string) => projects.find((p) => p.slug === slug)

export const services = [
  {
    title: 'Map processing',
    body: 'Enumeration area delineation and map preparation in QGIS and QField, from source layers to boundaries that someone else can check.',
  },
  {
    title: 'Data entry and analysis',
    body: 'Encoding, cleaning and reporting in Microsoft Excel: mortgage records, project logs, and the daily numbers a team relies on.',
  },
  {
    title: 'Graphic design',
    body: 'Layouts and design for corporate and personalised projects in Adobe Photoshop and Canva, prepared properly for print and screen.',
  },
  {
    title: 'Programming and web',
    body: 'Basic Java, PHP, C, C#, C++, Python, HTML and CSS, with MySQL, WIX and WordPress. Enough to build a small system, or keep the one you have running.',
  },
  {
    title: 'IT support',
    body: 'Computer hardware and printer servicing, basic networking, and helping students and staff get unstuck without the jargon.',
  },
]

// Shown in the dark panel on the home page.
export const principles = [
  {
    title: 'Accuracy before speed.',
    body: 'Maps, records and reports are only useful if they are right. I would rather check a boundary twice than explain a gap later.',
  },
  {
    title: 'Explain it plainly.',
    body: 'I write down how the work was done so the next person can follow it, whether that is an office handing over files or a student opening the code.',
  },
  {
    title: 'Learn the tool the job needs.',
    body: 'QGIS, Excel, Photoshop, PHP, Java. I pick up what the work requires and keep using it until it is second nature.',
  },
]

export const experience = [
  { period: '2024 to 2025', title: 'Part-time instructor', detail: 'University of Antique, Tario Lim Memorial Campus, contract of service' },
  { period: '2024', title: 'Administrative staff', detail: 'Manulife Philippines, Antique Branch' },
  { period: '2024', title: 'Map data processor', detail: 'Philippine Statistics Authority, enumeration area delineation' },
  { period: '2024', title: 'On-the-job trainee, TESDA NC III', detail: 'Zack Sourcing and Consultancy Services' },
  { period: '2023', title: 'Map data processor', detail: 'Philippine Statistics Authority, integrated processing of maps' },
  { period: '2021 to 2023', title: 'Data analyst', detail: 'Savant Technologies Inc., Real Estate Mortgage Project' },
  { period: '2019 and 2022', title: 'DESO technician', detail: 'COMELEC, Laua-an, Antique' },
  { period: '2018 to 2020', title: 'Graphic designer and admin', detail: 'Signrays Advertising Inc., Aklan Branch' },
  { period: '2017', title: 'On-the-job trainee', detail: 'College of Computer Studies, University of Antique, Sibalom' },
]

export const education = [
  { period: '2013 to 2018', title: 'BS Computer Science', detail: 'University of Antique, Main Campus' },
  { period: '2009 to 2013', title: 'Secondary', detail: 'Laua-an National High School' },
  { period: '2003 to 2009', title: 'Elementary, valedictorian', detail: 'Oloc Elementary School' },
]

export const memberships = [
  'Association of Computing Machinery, 2013 to 2018',
  'Future Leaders of the Philippines, 2014 to 2018',
]

// Awards and competition results from the PDS.
export const recognition = [
  {
    year: '2018',
    title: 'Outstanding Future Leader of the Philippines',
    detail: 'University of Antique, Main Campus',
  },
  {
    year: '2018',
    title: 'Parliamentary competition, 3rd runner up',
    detail: 'Regional Conference of Future Leaders of the Philippines',
  },
  {
    year: '2017',
    title: 'Website designing by pair, 3rd runner up',
    detail: 'CCS Day, College of Computer Studies',
  },
  { year: '2017', title: 'Quiz bowl champion', detail: 'CCS Day, College of Computer Studies' },
  {
    year: '2015',
    title: 'Programming competition by pair, champion',
    detail: 'CCS Day, College of Computer Studies',
  },
]

// Training programs attended, most recent first.
export const training = [
  {
    period: 'August 2025',
    title: 'Seminar-workshop on syllabi making',
    detail: 'University of Antique, Tario Lim Memorial Campus',
  },
  {
    period: 'August 2025',
    title: 'Build a full website using WordPress',
    detail: 'Coursera',
  },
  {
    period: 'September 2025',
    title: 'Introduction to large language models',
    detail: 'Simplilearn / SkillUp',
  },
  {
    period: 'September 2025',
    title: 'Introduction to Generative AI Studio',
    detail: 'Simplilearn / SkillUp',
  },
  {
    period: 'December 2025',
    title: 'AI for all: driving digital transformation in communities',
    detail: 'University of Antique and Special Libraries Association Asia Community',
  },
  {
    period: 'April 2025',
    title: 'Capability building training for faculty extensionists',
    detail: 'University of Antique, Tario Lim Memorial Campus',
  },
  {
    period: 'June 2025',
    title: 'Complete Python course: beginner to advanced',
    detail: 'Udemy',
  },
  {
    period: 'January 2025',
    title: 'Business analysis and process management',
    detail: 'Coursera',
  },
  {
    period: 'August 2024',
    title: 'Orientation program and seminar-workshop for newly hired permanent and contract of service employees',
    detail: 'University of Antique, Tario Lim Memorial Campus',
  },
  {
    period: 'December 2023 to January 2024',
    title: 'Java Programming NC III, 240 hours',
    detail: 'Technical Education and Skills Development Authority, Antique',
  },
]
