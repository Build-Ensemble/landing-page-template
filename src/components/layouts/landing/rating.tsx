import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, StarHalf } from 'lucide-react'
import { cn } from "@/lib/utils"
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslations } from '@/lib/i18n';

interface RatingProps {
  avatars: { src: string; alt: string; fallback: string }[]
  className?: string
}

export const Rating: React.FC<RatingProps> = ({ 
  avatars, 
  className 
}) => {
  const { language } = useLanguage();
  const t = getTranslations(language).hero;
  return (
    <div className={cn(
      "flex items-center gap-4 p-3 rounded-full ",
      className
    )}>
      <div className="flex -space-x-2">
        {avatars.map((avatar, index) => (
          <Avatar key={index} className="border-2 border-white">
            <AvatarImage src={avatar.src} alt={avatar.alt} />
            <AvatarFallback>{avatar.fallback}</AvatarFallback>
          </Avatar>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-gray-700 hidden md:block">
          {t.lovedByAcquisitionsProfessionals}
        </span>
        <div className="flex">
          {[1, 2, 3, 4].map((star) => (
            <Star 
              key={star} 
              className="w-5 h-5 text-yellow-400 fill-current"
            />
          ))}
          <StarHalf className="w-5 h-5 text-yellow-400 fill-current" />
        </div>
      </div>
    </div>
  )
}