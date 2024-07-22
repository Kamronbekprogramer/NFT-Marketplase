import Image from "next/image";
import Hero from '@/components/hero/page'
import Trending from '@/components/trending/page'
import Artist from '@/components/artist/page'
import Browse from '@/components/browse/page'
import Discover from '@/components/discover/page'
import Works from '@/components/works/page'
import Subscribe from '@/components/subscribe/page'

export default function Home() {
  return (
    <div>
      <Hero/>
      <Trending/>
      <Artist/>
      <Browse/>
      <Discover/>
      <Works/>
      <Subscribe/>
    </div>
  );
}
