import * as React from 'react'
import * as style from './style.css'

interface WorksProps {
  title: string
  imgsrc: string
  role: string
  output: string
  desc: string
}

const workDetails: WorksProps[] = [
  {
    title: 'sweedy',
    imgsrc: '',
    role: 'UI Designer',
    output: 'Logo, AppIcon, UI',
    desc: ''
  },
  {
    title: 'stella',
    imgsrc: '',
    role: 'Producer',
    output: 'Logo, AppIcon, UI',
    desc: ''
  },
  {
    title: 'komerco',
    imgsrc: '',
    role: 'Design Lead',
    output: 'Logo, AppIcon, UI',
    desc: ''
  },
  {
    title: 'Mago-channel',
    imgsrc: '',
    role: 'UI Designer',
    output: 'Logo, AppIcon, UI',
    desc: ''
  },
  {
    title: 'Silhouette User Interface',
    imgsrc: '',
    role: 'UI Designer',
    output: 'Logo, AppIcon, UI',
    desc: ''
  }
]

const WorkDetail = (props: { work: WorksProps }) => {
  return (
    <div>
      <p>{ props.work.title }</p>
      <img src={ props.work.imgsrc } />
      <p>{ props.work.role }</p>
      <p>{ props.work.output }</p>
    </div>
  )
}

const WorksContent = () => {
  return (
    <div className={ style.workContainer }>
      <h1>works</h1>
      <p>いま制作物をまとめておりますので少々お待ちを...🙏</p>
      {/* { workDetails.map((work: WorksProps) => <WorkDetail work={ work } />) } */}
    </div>
  )
}
export default WorksContent
