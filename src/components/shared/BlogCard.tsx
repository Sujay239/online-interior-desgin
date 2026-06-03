import { Link } from "react-router-dom";
import { Clock, Calendar, User, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/types/blog";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BlurImage } from "@/components/shared/BlurImage";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="h-full flex flex-col overflow-hidden border-border/50 hover:border-gold/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 bg-card p-0 gap-0 rounded-xl group">
      
      {/* Image Section */}
      <Link to={`/blog/${post.slug}`} className="relative overflow-hidden bg-muted w-full block focus:outline-none focus-visible:ring-2 focus-visible:ring-gold">
        <BlurImage 
          src={post.featuredImage} 
          alt={post.title} 
          ratio={4/3}
          className="transition-transform duration-700 group-hover:scale-105"
          containerClassName="rounded-none border-0 h-60" 
        />
        <div className="absolute top-3 left-3 z-10">
          <Badge className="bg-background/95 text-foreground hover:bg-background/95 backdrop-blur-md shadow-sm border-0 font-medium tracking-wide text-[10px] px-2.5 py-0.5 pointer-events-none uppercase">
            {post.category.name}
          </Badge>
        </div>
      </Link>
      
      {/* Header Section */}
      <CardHeader className="px-5 pt-5 pb-2">
        {/* Meta information */}
        <div className="flex flex-wrap items-center text-[11px] font-medium text-muted-foreground gap-3 mb-2">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>
              {new Date(post.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <User className="w-3 h-3" />
            <span>{post.author.name}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{post.readingTime} min</span>
          </div>
        </div>
      </CardHeader>

      {/* Content Section */}
      <CardContent className="px-5 pt-0 pb-4 flex-1">
        {/* Title Only */}
        <Link to={`/blog/${post.slug}`} className="focus:outline-none focus-visible:underline">
          <h3 className="font-serif text-lg md:text-xl font-medium leading-snug group-hover:text-gold transition-colors line-clamp-3">
            {post.title}
          </h3>
        </Link>
      </CardContent>
      {/* Footer Section */}
      <CardFooter className="px-5 pt-0 pb-5 mt-auto">
        <Link to={`/blog/${post.slug}`} className="focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-full inline-block">
          <Button 
            className="w-max rounded-sm border hover:bg-transparent bg-gold hover:text-gold text-white border-gold transition-all duration-300 text-xs font-medium px-4 py-2 h-auto group/btn shadow-sm"
          >
            Read Article
            <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardFooter>
      
    </Card>
  );
}
