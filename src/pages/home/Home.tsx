import "./Home.scss";
function Home() {
  return (
    <section className="home text-center">

        <div className="home__introduction">
            <h2> {'WELCOME TO MY PORTFOLIO WEBSITE'} </h2>
            {'This is a simple portfolio website created using React, Typescript, and Bootstrap. It showcases my skills and projects.'}
        </div>

        <div className="header__carrer-path">
            <h2 className="header__carrer-path__title">{'Carrer Path'}</h2>
            <p>
                {'I started my career as a software engineer, where I gained experience in various programming languages and frameworks. Over the years, I have worked on several'}
            </p>
        </div>
    </section>
  )
}

export default Home