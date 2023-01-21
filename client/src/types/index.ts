
export type UserProfileType = {
   id: string
   email: string
   events: string[] | []
   followers?: string[] | []
   following?: string[] | []
   isVerified: boolean
   name: string
   password: string
   posts: string[] | []
   username: string
}

 export type PostType = {
   id: string
   image: string
   body: string
   createdAt: Date
   createdBy: string[] | []
   comments: string[] | []
   likes: number
 }
 
 export type CommentType = {
   id: string
   body: string
   createdAt: Date
   createdBy: string[] | []
   comments: string[] | []
   likes: number
 }
 
 export type UserCommunityType = {
   id: string
   createdAt: Date
   createdBy: string[] | []
   events: string[] | []
   members: string[] | []
   name: string
 }
 
 export type UserEventType = {
   id: string
   createdAt: Date
   createdBy: string[] | []
   endsOn: Date
   title: string
 }
 



