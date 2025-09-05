import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Heart, ThumbsUp } from "lucide-react";
import type { Comment } from './comment-section';

export default function CommentCard({ name, avatar, comment, likes, hearts }: Comment) {
  return (
    <Card className="text-left bg-white text-black">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={avatar} alt={name} data-ai-hint="person portrait" />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <p className="font-semibold text-lg">{name}</p>
      </CardHeader>
      <CardContent>
        <p className="text-black/80">{comment}</p>
      </CardContent>
      <CardFooter className="flex gap-6">
        <div className="flex items-center gap-2 text-gray-500">
          <button aria-label="Like" className="flex items-center gap-2 group">
            <ThumbsUp className="h-5 w-5 text-blue-600 group-hover:scale-110 transition-transform" />
            <span>{likes}</span>
          </button>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <button aria-label="Heart" className="flex items-center gap-2 group">
            <Heart className="h-5 w-5 text-red-500 fill-red-500 group-hover:scale-110 transition-transform" />
            <span>{hearts}</span>
          </button>
        </div>
      </CardFooter>
    </Card>
  );
}
