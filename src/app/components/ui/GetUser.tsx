import { Avatar, AvatarImage } from "./avatar";

export default function GetUser() {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Avatar>
        <AvatarImage
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
            alt="User Avatar"
            className="object-cover"
        />
      </Avatar>
      <h2 className="text-center text-2xl font-bold">User Name</h2>
    </div>
  )
}
