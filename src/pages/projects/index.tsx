'use client'
import Header from '@/components/Header'
import Layout from '@/components/layout'
import Head from 'next/head'
import Text from '@/components/Text'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import { useTranslation } from 'react-i18next'
import useProjects, { Project } from '@/hooks/useProjects'
import { useEffect, useState } from 'react'
import React from 'react'

export default function Projects() {
  const { t } = useTranslation('projects')
  const projects: Project[] = useProjects()
  const [api, setApi] = useState<CarouselApi>()
  const [projectIndex, setProjectIndex] = useState<number>(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setProjectIndex(api.selectedScrollSnap())

    api.on('select', () => {
      setProjectIndex(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <Layout>
      <Head>
        <title>{t('projects')}</title>
        <meta name="description" content="Juan Pablo Jiménez's projects" />
        <link
          rel="canonical"
          href="https://www.juanpablojimenez.dev/projects"
        />
      </Head>
      <Header />
      <div className="bg-black-secondary h-full w-full">
        <div className="flex flex-col justify-center items-center pt-36">
          <h1 className="text-white mb-6">{projects[projectIndex].name}</h1>
          <Carousel
            setApi={setApi}
            className="w-3/4 h-[60vh]"
            opts={{ loop: true }}
          >
            <CarouselContent>
              {projects.map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center justify-center p-6 h-[60vh]">
                        <a
                          className="text-4xl font-semibold"
                          href={projects[projectIndex].url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {index + 1}
                        </a>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          {projects[projectIndex].description.map((desc, index) => (
            <Text
              key={index}
              customStyle="text-white mt-10 md:text-2xl"
              phrase={desc}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}
