import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import { blogService } from "@/services/blogService";
import type { BlogPost as BlogPostType } from "@/types/blog";
import { SectionLoader } from "@/components/shared/SectionLoader";
import { Badge } from "@/components/ui/badge";
import { BlurImage } from "@/components/shared/BlurImage";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      setIsLoading(true);
      try {
        const data = await blogService.getPostBySlug(slug);
        setPost(data);
      } catch (error) {
        console.error("Failed to fetch post", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPost();
  }, [slug]);

  if (isLoading) {
    return <SectionLoader height="h-[80vh]" />;
  }

  if (!post) {
    return (
      <div className="container mx-auto px-4 h-[60vh] flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl font-serif mb-4">Post Not Found</h1>
        <p className="text-muted-foreground mb-8">The article you are looking for doesn't exist or has been moved.</p>
        <Link to="/blog" className="text-gold hover:underline flex items-center">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Journal
        </Link>
      </div>
    );
  }

  return (
    <>
      <title>{`${post.title} | Our Journal`}</title>
      <meta name="description" content={post.description} />
      
      <article className="w-full bg-background text-foreground pb-24">
        {/* Post Hero Section */}
        <header className="relative w-full h-[60vh] min-h-[500px] overflow-hidden mb-12">
          {/* LCP Optimized Hero Image */}
          <div className="absolute inset-0 z-0 bg-muted">
            <BlurImage 
              src={post.featuredImage}
              alt={post.title}
              // CRITICAL LCP OPTIMIZATIONS:
              loading="eager"
              decoding="sync"
              fetchPriority="high"
              containerClassName="h-full w-full rounded-none"
              className="brightness-[0.6] object-cover h-full w-full"
            />
          </div>

          <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center text-white text-center px-4">
            <div className="max-w-4xl space-y-6 animate-fade-in-up flex flex-col items-center mt-16">
              <Badge variant="outline" className="mb-2 text-gold border-gold/50 tracking-wide px-4 py-1.5 bg-black/20 backdrop-blur-sm shadow-sm">
                {post.category.name}
              </Badge>
              
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-tight drop-shadow-lg text-white">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center justify-center text-sm md:text-base font-medium text-gray-200 gap-6 mt-8">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-gold-light" />
                  <span>{post.author.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gold-light" />
                  <span>
                    {new Date(post.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gold-light" />
                  <span>{post.readingTime} min read</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Constrained Content Area */}
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-gold transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to All Posts
          </Link>

          {/* Author Meta Block for Article Body */}
          <div className="flex items-center pt-8 pb-8 mb-10 border-y border-border/50">
            <img 
              src={post.author.avatar} 
              alt={post.author.name} 
              loading="lazy" 
              decoding="async"
              width={56}
              height={56}
              className="w-14 h-14 rounded-full object-cover border border-border/50 shadow-sm"
            />
            <div className="ml-4">
              <p className="font-semibold text-lg text-foreground">{post.author.name}</p>
              <p className="text-sm text-muted-foreground">{post.author.role}</p>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert prose-headings:font-serif prose-a:text-gold hover:prose-a:text-gold-light mx-auto max-w-none">
            {/* 
              In a real app, you'd use a rich text renderer or dangerouslySetInnerHTML. 
              Since the mock data is simple HTML, we use dangerouslySetInnerHTML safely. 
            */}
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
            
            {/* Stub content since mock content is currently very short */}
            <p>
              The transformation of this space began with a deep understanding of the client's vision and the architectural integrity of the existing structure. Our team focused on maximizing natural light, introducing sustainable materials, and creating a layout that promotes exceptional flow.
            </p>
            <h3>Key Design Elements</h3>
            <ul>
              <li>Integration of bespoke, handcrafted cabinetry.</li>
              <li>Sourcing of sustainable, low-VOC finishes.</li>
              <li>A lighting plan designed to adapt to various moods throughout the day.</li>
            </ul>
            <p>
              Ultimately, the success of this project lies in the details—the tactile quality of the fabrics, the precise alignment of the tilework, and the overall sense of harmony that permeates the space. It's more than just a redesign; it's a recalibration of how the clients experience their daily lives.
            </p>
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-muted-foreground mr-2 py-1">Tags:</span>
              {post.tags.map(tag => (
                <Badge key={tag.id} variant="secondary" className="bg-muted text-foreground hover:bg-muted/80">
                  {tag.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}