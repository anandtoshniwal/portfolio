import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  
  export function AvatarComponents() {
    return (
      <Avatar>
        <AvatarImage src="/images/profile.png" alt="Mayuri Lahoti" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    )
  }
  