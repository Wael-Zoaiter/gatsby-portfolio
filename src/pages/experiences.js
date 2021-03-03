import React from 'react'
import CustomFonts from '../components/custom-fonts/custom-fonts';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import SEO from '../components/seo/seo';
import Sidebar from '../components/sidebar/sidebar';
import StructuredData from '../components/structured-data/structured-data';
import WorkHistory from '../components/work-history/work-history';

const ExperiencesPage = ({ data }) => {
  const { history, profile, site, social } = data

  return (
    <div className="antialiased bg-back leading-normal font-text text-front">
      <SEO />
      <StructuredData profile={profile} social={social.nodes} />
      <CustomFonts />

      <Header initials={profile.initials} />

      <div className="md:max-w-screen-sm lg:max-w-screen-xl mx-auto px-4 flex flex-wrap pt-4 my-8">
        <Sidebar profile={profile} social={social.nodes} />

        <main className="lg:w-2/3 lg:pl-8 xl:pl-12">
          <WorkHistory history={history.nodes} />
        </main>
      </div>

      <Footer
        name={profile.name}
        showThemeLogo={site.siteMetadata.showThemeLogo}
      />
    </div>
  )
}

export default ExperiencesPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        showThemeLogo
      }
    }
    profile: profileYaml {
      ...ProfileFragment
    }
    social: allSocialYaml(filter: { url: { ne: null } }) {
      nodes {
        ...SocialFragment
      }
    }
    history: allWorkHistoryYaml {
      nodes {
        ...WorkHistoryFragment
      }
    }
    projects: allProjectsYaml {
      nodes {
        ...ProjectFragment
      }
    }
  }
`
