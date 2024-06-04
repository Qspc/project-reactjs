import NavbarPage from '@/components/homepage-website/navbar';
import Jumbotron from '@/components/homepage-website/jumbotron';
import CoverImage from '@/components/homepage-website/cover';
import PartnerContent from '@/components/homepage-website/partner';
import CategoriesContent from '@/components/homepage-website/categories';
import ApartContent from '@/components/homepage-website/apart';
import ScaleContent from '@/components/homepage-website/scale';

export default function HomepageWebsite() {
  return (
    <div>
      <div className=" h-[30000px] ">
        {/* navbar */}
        <NavbarPage />
        {/* jumbotron */}
        <Jumbotron />
        {/* video/cover  */}
        <CoverImage />
        {/* partner */}
        <PartnerContent />
        {/* categories */}
        <CategoriesContent />
        {/* kelebihan - 2 page */}
        <ApartContent />
        {/* labelity */}
        {/* connect partner  */}
        <ScaleContent />
        {/* case studies */}
        {/* digital footnote */}
        {/* how to start */}
        {/* hero - start  */}
        {/* policy */}
        {/* footer  */}
      </div>
    </div>
  );
}
