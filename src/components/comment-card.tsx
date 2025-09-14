import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Heart, ThumbsUp } from "lucide-react";
import type { Comment } from './comment-section';

export default function CommentCard({ name, avatar, comment, likes, hearts }: Comment) {
  return (
    <Card className="text-left bg-gray-100 text-black">
      <CardHeader className="flex flex-row items-center gap-3 p-4">
        <Avatar className="h-10 w-10">
          <AvatarImage src={avatar} alt={name} data-ai-hint="person portrait" />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <p className="font-semibold text-base">{name}</p>
      </CardHeader>
      <CardContent className="px-4 pb-2 pt-0">
        <p className="text-sm text-black/80">{comment}</p>
      </CardContent>
      <CardFooter className="flex gap-4 px-4 pb-3">
        <div className="flex items-center gap-1.5 text-gray-500 text-sm">
          <button aria-label="Like" className="flex items-center gap-1.5 group">
            <ThumbsUp className="h-4 w-4 text-blue-600 group-hover:scale-110 transition-transform" />
            <span>{likes}</span>
          </button>
        </div>
        <div className="flex items-center gap-1.5 text-gray-500 text-sm">
          <button aria-label="Heart" className="flex items-center gap-1.5 group">
            <Heart className="h-4 w-4 text-red-500 fill-red-500 group-hover:scale-110 transition-transform" />
            <span>{hearts}</span>
          </button>
        </div>
      </CardFooter>
    </Card>
  );
}
