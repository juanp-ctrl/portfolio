import { useTranslation } from 'react-i18next'

export interface Project {
  name: string
  images: string[]
  description: string[]
  impact: string
  techHighlights: string[]
  techStack: string
  url: string
}

const useProjects = () => {
  const { t } = useTranslation('projects')

  const projects: Project[] = [
    {
      name: t('name_rq'),
      images: [],
      description: [
        t('description_rq_1'),
        t('description_rq_2'),
        t('description_rq_3'),
      ],
      impact: t('impact_rq'),
      techHighlights: [
        t('tech_highlight_rq_1'),
        t('tech_highlight_rq_2'),
        t('tech_highlight_rq_3'),
        t('tech_highlight_rq_4'),
      ],
      techStack: 'NextJS',
      url: 'https://www.random-q.com/',
    },
  ]

  return projects
}

export default useProjects
