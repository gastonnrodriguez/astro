import { useState, useEffect } from 'react';
import { wpquery } from '../../graphql/wpQuery';
import HeroCarousel from './HeroCarousel';
const HeroCarouselWrapper = async (data) => {
  const [postsData, setPostsData] = useState({});
  const last5AgendaPosts = await wpquery({
    query: `
    {
      posts(where: { categoryName: "Agenda" }, first: 5){
      nodes {
        id
        slug
        excerpt
        title
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          nodes {
            name
          }
        }
        author{
           node {
            name
          }
        }
      }
    }
  }
    `,
  });

  useEffect(() => {
   
    const getData = async () => {
        try {
          const fetchedData = await  last5AgendaPosts()();
          postsData(fetchedData);
        } catch (error) {
          console.error('Error fetching data:', error);
          // Handle errors appropriately, e.g., display an error message
        }
        
      };
      getData();
  }, []);

  const posts = data.data;
  return <HeroCarousel client:load data={last5AgendaPosts.posts.nodes} />;
};

export default HeroCarouselWrapper;
