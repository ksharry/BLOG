interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: '30 Days of ML',
    description: `A comprehensive 30-day journey through Machine Learning concepts, from basics to advanced topics.`,
    imgSrc: '/static/images/google.png',
    href: 'https://github.com/ksharry/30-Days-Of-ML_FN',
  },
  {
    title: 'Odoo Release Notes',
    description: `Summaries and updates for Odoo versions 17, 18, and 19.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: 'https://github.com/ksharry/Odoo-Release-Notes',
  },
  {
    title: '30 Days TOEIC Gold',
    description: `A 30-day course plan to achieve a golden certificate in TOEIC.`,
    imgSrc: '/static/images/google.png',
    href: 'https://github.com/ksharry/30-Days-TOEIC-Gold',
  },
]

export default projectsData
