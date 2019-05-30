import * as React from 'react'
import * as style from './style.css'

interface WorksProps {
  title: string
  imgsrc: string
  role: string
  output: string
  url?: string
}

const workDetails: WorksProps[] = [
  {
    title: 'stella',
    imgsrc: 'static/images/stella_title.jpg',
    role: 'Developer / Designer',
    output: 'React, mobx, Firebase, typescript, Next.js, Node.js, Markdown Editor, UI Design, Logo Design',
    url: 'https://stella-app.jp'
  }, {
    //   title: 'voutique',
    //   imgsrc: 'static/images/sweedy_title.jpg',
    //   role: 'Designer',
    //   output: 'Logo Design, Name Card'
    // }, {
    title: 'Komerco',
    imgsrc: 'static/images/komerco_title.jpg',
    role: 'Design Lead / Developer',
    output: 'Service Design, iOS UI Design, Branding Design, Logo Design, Swift, Firebase, Typescript',
    url: 'https://komer.co'
  }, {
    title: 'sweedy',
    imgsrc: 'static/images/sweedy_title.jpg',
    role: 'UI Designer',
    output: 'iOS UI Design, Logo Design, AppIcon'
  }, {
    title: 'Overcookpad',
    imgsrc: 'static/images/overcookpad_title.jpg',
    role: 'Designer',
    output: 'Character Design, Game Design, Logo Design',
    url: 'https://cookpad.com'
  }, {
    //   title: 'Portfolio',
    //   imgsrc: 'static/images/sweedy_title.jpg',
    //   role: 'Designer',
    //   output: 'UI Design, Firebase, React'
    // }, {
    title: 'Mago-channel',
    imgsrc: 'static/images/mago-ch.jpg',
    role: 'Designer',
    output: 'UI Design, Instraction Manual Design, GoodDesign Award 2016 Best100',
    url: 'https://mago-ch.com'
  }
]

const WorkDetail = (props: { work: WorksProps }) => {
  const { imgsrc, title, role, output, url } = props.work

  if (url) {
    return (
      <a href={ url } className={ style.workLink } rel={ 'noreferrer noopener' } target={ '_blank' }>
        <div className={ style.workDetailContainer }>
          <img src={ imgsrc } alt={ title } />
          <p className={ style.workTitle }>{ title }<span>as { role }</span></p>
          <p className={ style.workDescription }>{ output }</p>
        </div>
      </a>
    )
  }

  return (
    <div className={ style.workDetailContainer }>
      <img src={ imgsrc } />
      <p className={ style.workTitle }>{ title }<span>as { role }</span></p>
      <p className={ style.workDescription }>{ output }</p>
    </div>
  )

}

export default class WorksContent extends React.Component<any, any> {

  constructor(props: any) {
    super(props)

    this.state = {
      isLoading: false
    }
  }

  render() {
    return (
      <div>
        <div className={ style.workContainer }>
          <h1>works</h1>
          {
            workDetails.map((work: WorksProps) => (
              <WorkDetail work={ work } />
            ))
          }
        </div>
      </div>
    )
  }

}
