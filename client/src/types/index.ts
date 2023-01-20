
export type UserProfileType = {
   id: string
   createdOn: string | Date | null
   createdBy: string | null
   updatedOn: string | Date | null
   updatedBy: string | null
   deletedOn: string | Date | null
   deletedBy: string | null
   email: string
   user_id: string
   followers?: string[] | []
   followering?: string[] | []
   picture?: object | string | null
}



