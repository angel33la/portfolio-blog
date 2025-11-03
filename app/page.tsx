import { BlogPosts } from 'app/components/posts'
import { Project } from 'app/components/projects'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Angella's Portfolio
      </h1>
      <p className="mb-4">
        {`I'm a web developer  and a tech enthusiast. I enjoy making web sites that are user-friendly and efficient. To be able to turn my ideas into reality, I rely on a variety of tools and technologies. Being curious about how things work has always been one of my strengths. I am constantly learning new things and keeping up with the latest trends. Making the web more accessible and enjoyable for everyone is my passion. Here are some of my recent blog posts, as well as links to my projects and contributions. Please feel free to explore and reach out if you'd like to connect! I can answer any questions about web development or share insights on the latest industry trends. Thank you for visiting my portfolio page!`}
      </p>
      <div className="my-8">
        <BlogPosts />
        <Project />
      </div>
    </section>
  )
}
