
export type UserProfileType = {
   _id: string
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
   _id: string
   image: string
   body: string
   createdAt: Date
   createdBy: string[] | []
   comments: string[] | []
   likes: number
 }
 
 export type CommentType = {
   _id: string
   body: string
   createdAt: Date
   createdBy: string[] | []
   comments: string[] | []
   likes: number
 }
 
 export type UserCommunityType = {
   _id: string
   createdAt: Date
   createdBy: string[] | []
   events: string[] | []
   members: string[] | []
   name: string
 }
 
 export type UserEventType = {
   _id: string
   createdAt: Date
   createdBy: string[] | []
   endsOn: Date
   title: string
 }
 



