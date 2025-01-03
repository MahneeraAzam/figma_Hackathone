import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {  Calendar } from 'lucide-react';
import { client } from "@/sanity/lib/client";


export default async function NewsletterAndBlog() {

const res = await client.fetch(`*[_type == 'landingPage'][0].sections[6]{
  'latestBlogCards': latestBlogCards[]{
    'latestBlogHeading': latestBlogHeading,
    'latestBlogDate': latestBlogDate,
    'latestBlogDescription': latestBlogDescription,
    'latestBlogImage': latestBlogImage.asset->url,
  },
}`);

  return (
    <div className="min-h-screen">
      {/* Newsletter Section */}
     <div className="container mx-auto px-4">
      <Image src={"/ractangle2.png"} alt="Newsletter" width={1440} height={400}></Image>
    
     </div>

      {/* Brand Logos */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center gap-8 opacity-50">
          <Image src="/brandlogo.png" alt="Brand Logo" width={904} height={93} className="grayscale" />
        </div>
      </div>

      {/* Latest Blog Section */}
      <section className="py-16">
        <h2 className="text-[#151875] text-4xl font-josefin text-center mb-12">Latest Blog</h2>
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {(res.latestBlogCards).map((item: any, index : any) => (
            <Card key={index} className="overflow-hidden shadow-lg">
              <div className="bg-[#E7E4F8] relative">
                <Image
                  src={res.latestBlogCards[0].latestBlogImage}
                  alt="Blog"
                  width={480}
                  height={240}
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm mb-4">
                  <span className="text-[#FB2E86]">SaberAli</span>
                  <div className="flex items-center gap-1 text-[#151875]">
                    <Calendar className="w-4 h-4" />
                    <span>{res.latestBlogCards[0].latestBlogDate}</span>
                  </div>
                </div>
                <h3 className="text-[#151875] text-lg font-semibold mb-4">
                 {res.latestBlogCards[0].latestBlogHeading}
                </h3>
                <p className="text-[#72718F] mb-4">
                  {res.latestBlogCards[0].latestBlogDescription}
                </p>
                <a href="#" className="text-[#151875] underline">
                  Read More
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

     
    </div>
  );
};

{/* <section className="bg-white py-16 text-center">
<div className="container mx-auto px-4">
  <h2 className="text-[#151875] text-3xl md:text-[35px] font-josefin mb-8">
    Get Latest Update By Subscribe<br />Our Newsletter
  </h2>
  <Button className="bg-[#FB2E86] hover:bg-[#FB2E86]/90 text-white px-8">
    Shop Now
  </Button>
</div>
</section> */}