import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>
          Hi! Thanks for visiting. This is my first dev project I've made and
          published. <strong>Everybody starts somewhere :D</strong>
        </p>
        <p>
          • I made this small little project to learn{' '}
          <a href="https://nextjs.org/"> Next.js</a> for the first time
        </p>
        <p>
          • I actually use my{' '}
          <a href="https://www.alexdphan.com/"> personal website</a> where I
          share my writings, learnings, and my current status
        </p>
        <p>
          • My Twitter is{' '}
          <a href="https://twitter.com/alexdphan"> @alexdphan</a>
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
